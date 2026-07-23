import json
import numpy as np
import pandas as pd
from pathlib import Path
from base_bot import BaseBot

class Bot3(BaseBot):
    def __init__(self, all_words: list, priors_path: str, feedback_matrix, guess_to_idx: dict, target_to_idx: dict, turn2_cache_path: str = None):
        super().__init__(all_words, feedback_matrix, guess_to_idx, target_to_idx)
        self.name = "Bot 3 (2-Turn Lookahead, Expected Guesses)"
        self.idx_to_guess = {v: k for k, v in self.guess_to_idx.items()}
        
        df_priors = pd.read_csv(priors_path)
        self.priors = dict(zip(
            df_priors.iloc[:, 0].astype(str).str.strip().str.lower(), 
            df_priors.iloc[:, 1].astype(float)
        ))
        
        self.valid_guesses = [w for w in self.all_words if self.priors.get(w, 0) > 1e-9]
        self.valid_guess_idxs = np.array([self.guess_to_idx[w] for w in self.valid_guesses if w in self.guess_to_idx])
        
        max_target_idx = max(self.target_to_idx.values())
        self.prior_weights_target = np.zeros(max_target_idx + 1)
        for w, p in self.priors.items():
            if w in self.target_to_idx:
                self.prior_weights_target[self.target_to_idx[w]] = p

        # --- Internal Caches ---
        self.turn2_cache_path = turn2_cache_path
        self.turn2_cache = {}
        if self.turn2_cache_path and Path(self.turn2_cache_path).exists():
            with open(self.turn2_cache_path, 'r') as f:
                self.turn2_cache = json.load(f)
                
        self.mid_game_cache = {}

        self.reset()

    def reset(self):
        self.active_targets = [w for w in self.all_words if self.priors.get(w, 0) > 1e-9]
        self.active_targets_15k = list(self.all_words)
        self.turn_count = 1
        self.turn1_feedback = None
        self.guesses_made = []

    def update_state(self, guess_idx: int, feedback: int):
        if self.turn_count == 1:
            self.turn1_feedback = feedback
            
        guess_word = self.idx_to_guess[guess_idx]
        self.guesses_made.append(guess_word)
        
        self.active_targets = [
            t for t in self.active_targets 
            if self.matrix[guess_idx, self.target_to_idx[t]] == feedback
        ]
        self.active_targets_15k = [
            t for t in self.active_targets_15k 
            if self.matrix[guess_idx, self.target_to_idx[t]] == feedback
        ]
        self.turn_count += 1

    def _save_turn2_cache(self):
        if self.turn2_cache_path:
            with open(self.turn2_cache_path, 'w') as f:
                json.dump(self.turn2_cache, f, indent=2)

    def get_best_guess(self) -> int:
        if self.turn_count == 1:
            return self.guess_to_idx.get("slate", 0)
            
        best_word = None
        
        # 1. 15k FALLBACK: If no common words remain, bypass matrix/caches entirely
        if len(self.active_targets) == 0:
            best_word = self.active_targets_15k[0]
            
        # 2. TURN 2: Disk Cached
        elif self.turn_count == 2:
            f_code_str = str(self.turn1_feedback)
            if f_code_str in self.turn2_cache:
                best_word = self.turn2_cache[f_code_str]
            else:
                best_word = self.make_guess(self.active_targets)
                self.turn2_cache[f_code_str] = best_word
                self._save_turn2_cache()
                
        # 3. TURN 3+: Memory Cached
        else:
            pool_key = tuple(self.active_targets)
            if pool_key in self.mid_game_cache:
                best_word = self.mid_game_cache[pool_key]
            else:
                best_word = self.make_guess(self.active_targets)
                self.mid_game_cache[pool_key] = best_word

        # 4. FAILSAFE: Prevent infinite loops naturally
        if best_word in self.guesses_made:
            for w in self.active_targets_15k:
                if w not in self.guesses_made:
                    best_word = w
                    break

        return self.guess_to_idx[best_word]

    def make_guess(self, active_targets: list) -> str:
        if len(active_targets) == 1:
            return active_targets[0]
        if len(active_targets) == 2:
            return max(active_targets, key=lambda w: self.priors.get(w, 0))
            
        # 1. Force the array to be integers (prevents the float IndexError)
        active_t_idxs = np.array([self.target_to_idx[t] for t in active_targets if t in self.target_to_idx], dtype=np.int32)
        
        # 2. SAFEGUARD: If none of the remaining words are in the target pool, just pick the best prior
        if len(active_t_idxs) == 0:
            return max(active_targets, key=lambda w: self.priors.get(w, 0))
            
        weights = self.prior_weights_target[active_t_idxs]
        total_weight = np.sum(weights)
        if total_weight < 1e-12:
            total_weight = 1.0
        
        # ---------------------------------------------------------------------
        # STEP 1: Fast 1-Turn Lookahead Filtering
        # ---------------------------------------------------------------------
        V = len(self.valid_guess_idxs)
        row_indices_full = np.arange(V)[:, None]
        full_sub_matrix = self.matrix[self.valid_guess_idxs][:, active_t_idxs]
        
        weights_m1 = np.zeros((V, 243))
        np.add.at(weights_m1, (row_indices_full, full_sub_matrix), weights)
        
        p_m1 = weights_m1 / (total_weight + 1e-12)
        entropy_g1 = -np.sum(p_m1 * np.log2(p_m1 + 1e-12), axis=1)
        
        # Adaptive candidate count based on remaining targets
        candidate_k = 15 if len(active_targets) > 100 else 25
        top_entropy_indices = np.argsort(entropy_g1)[::-1][:candidate_k]
        top_prob_targets = active_t_idxs[np.argsort(weights)[::-1][:candidate_k]]
        active_in_valid_indices = np.where(np.isin(self.valid_guess_idxs, top_prob_targets))[0]
        
        eval_indices = np.unique(np.concatenate((top_entropy_indices, active_in_valid_indices)))
        
        # MOVE ORDERING: Sort eval_indices by highest 1-turn entropy first to set a low threshold fast
        eval_indices = eval_indices[np.argsort(entropy_g1[eval_indices])[::-1]]
        
        # ---------------------------------------------------------------------
        # STEP 2: Deep 2-Turn Lookahead with Alpha Pruning
        # ---------------------------------------------------------------------
        best_g1_word = self.idx_to_guess[self.valid_guess_idxs[eval_indices[0]]]
        min_expected_turns = float('inf')
        inner_row_indices = np.arange(V)[:, None]
        
        for idx in eval_indices:
            g1_idx = self.valid_guess_idxs[idx]
            g1_word = self.idx_to_guess[g1_idx]
            
            feedbacks_1 = self.matrix[g1_idx, active_t_idxs]
            unique_f1 = np.unique(feedbacks_1)
            
            expected_turns_g1 = 0.0
            pruned = False
            
            for f1 in unique_f1:
                mask = (feedbacks_1 == f1)
                bucket_t_idxs = active_t_idxs[mask]
                bucket_weights = weights[mask]
                bucket_weight_sum = np.sum(bucket_weights)
                p_bucket = bucket_weight_sum / total_weight
                
                if p_bucket < 1e-12:
                    continue
                
                if f1 == 242:
                    turns_needed = 0.0
                elif len(bucket_t_idxs) == 1:
                    turns_needed = 1.0
                elif len(bucket_t_idxs) == 2:
                    w_max = np.max(bucket_weights)
                    w_min = np.min(bucket_weights)
                    turns_needed = 1.0 * (w_max / bucket_weight_sum) + 2.0 * (w_min / bucket_weight_sum)
                else:
                    sub_matrix = self.matrix[self.valid_guess_idxs][:, bucket_t_idxs]
                    
                    weights_matrix = np.zeros((V, 243))
                    counts_matrix = np.zeros((V, 243), dtype=int)
                    w_log_w = bucket_weights * np.log2(bucket_weights + 1e-12)
                    w_log_w_matrix = np.zeros((V, 243))
                    
                    np.add.at(weights_matrix, (inner_row_indices, sub_matrix), bucket_weights)
                    np.add.at(counts_matrix, (inner_row_indices, sub_matrix), 1)
                    np.add.at(w_log_w_matrix, (inner_row_indices, sub_matrix), w_log_w)
                    
                    safe_weights = weights_matrix + 1e-12
                    entropy_matrix = np.clip(np.log2(safe_weights) - (w_log_w_matrix / safe_weights), 0, None)
                    
                    cost_matrix = 1.0 + (entropy_matrix * 0.45)
                    cost_matrix[counts_matrix == 1] = 1.0
                    cost_matrix[:, 242] = 0.0
                    cost_matrix[counts_matrix == 0] = 0.0
                    
                    p_sub = weights_matrix / bucket_weight_sum
                    expected_after_g3 = np.sum(p_sub * cost_matrix, axis=1)
                    turns_needed = np.min(1.0 + expected_after_g3)
                
                expected_turns_g1 += p_bucket * turns_needed
                
                # ALPHA CUTOFF: Abort evaluation if partial cost already exceeds the best score
                if (2.0 + expected_turns_g1) >= min_expected_turns:
                    pruned = True
                    break
                
            if not pruned:
                total_expected_score = 2.0 + expected_turns_g1
                if total_expected_score < min_expected_turns:
                    min_expected_turns = total_expected_score
                    best_g1_word = g1_word
                
        return best_g1_word

    def get_top_guesses(self, candidates: list, top_n: int = 4) -> list:
        if len(candidates) == 0:
            return []
        if len(candidates) == 1:
            return [{"word": candidates[0], "skill": 99, "expected_score": 2.0}]
            
        active_t_idxs = np.array([self.target_to_idx[c] for c in candidates if c in self.target_to_idx])
        if len(active_t_idxs) == 0:
            return []
            
        weights = self.prior_weights_target[active_t_idxs]
        total_weight = np.sum(weights) if np.sum(weights) > 0 else 1.0
        
        V = len(self.valid_guess_idxs)
        row_indices_full = np.arange(V)[:, None]
        full_sub_matrix = self.matrix[self.valid_guess_idxs][:, active_t_idxs]
        
        weights_m1 = np.zeros((V, 243))
        np.add.at(weights_m1, (row_indices_full, full_sub_matrix), weights)
        
        p_m1 = weights_m1 / (total_weight + 1e-12)
        entropy_g1 = -np.sum(p_m1 * np.log2(p_m1 + 1e-12), axis=1)
        
        candidate_k = 15 if len(candidates) > 100 else 25
        top_entropy_indices = np.argsort(entropy_g1)[::-1][:candidate_k]
        top_prob_targets = active_t_idxs[np.argsort(weights)[::-1][:candidate_k]]
        active_in_valid_indices = np.where(np.isin(self.valid_guess_idxs, top_prob_targets))[0]
        
        eval_indices = np.unique(np.concatenate((top_entropy_indices, active_in_valid_indices)))
        eval_indices = eval_indices[np.argsort(entropy_g1[eval_indices])[::-1]]
        
        scored_guesses = []
        inner_row_indices = np.arange(V)[:, None]
        
        for idx in eval_indices:
            g1_idx = self.valid_guess_idxs[idx]
            word = self.idx_to_guess[g1_idx]
            
            feedbacks_1 = self.matrix[g1_idx, active_t_idxs]
            unique_f1 = np.unique(feedbacks_1)
            
            expected_turns_g1 = 0.0
            
            for f1 in unique_f1:
                mask = (feedbacks_1 == f1)
                bucket_t_idxs = active_t_idxs[mask]
                bucket_weights = weights[mask]
                bucket_weight_sum = np.sum(bucket_weights)
                p_bucket = bucket_weight_sum / total_weight
                
                if p_bucket < 1e-12:
                    continue
                
                if f1 == 242:
                    turns_needed = 0.0
                elif len(bucket_t_idxs) == 1:
                    turns_needed = 1.0
                elif len(bucket_t_idxs) == 2:
                    w_max = np.max(bucket_weights)
                    w_min = np.min(bucket_weights)
                    turns_needed = 1.0 * (w_max / bucket_weight_sum) + 2.0 * (w_min / bucket_weight_sum)
                else:
                    sub_matrix = self.matrix[self.valid_guess_idxs][:, bucket_t_idxs]
                    
                    weights_matrix = np.zeros((V, 243))
                    counts_matrix = np.zeros((V, 243), dtype=int)
                    w_log_w = bucket_weights * np.log2(bucket_weights + 1e-12)
                    w_log_w_matrix = np.zeros((V, 243))
                    
                    np.add.at(weights_matrix, (inner_row_indices, sub_matrix), bucket_weights)
                    np.add.at(counts_matrix, (inner_row_indices, sub_matrix), 1)
                    np.add.at(w_log_w_matrix, (inner_row_indices, sub_matrix), w_log_w)
                    
                    safe_weights = weights_matrix + 1e-12
                    entropy_matrix = np.clip(np.log2(safe_weights) - (w_log_w_matrix / safe_weights), 0, None)
                    
                    cost_matrix = 1.0 + (entropy_matrix * 0.45)
                    cost_matrix[counts_matrix == 1] = 1.0
                    cost_matrix[:, 242] = 0.0
                    cost_matrix[counts_matrix == 0] = 0.0
                    
                    p_sub = weights_matrix / bucket_weight_sum
                    expected_after_g3 = np.sum(p_sub * cost_matrix, axis=1)
                    turns_needed = np.min(1.0 + expected_after_g3)
                
                expected_turns_g1 += p_bucket * turns_needed
                
            total_expected_score = 2.0 + expected_turns_g1
            
            scored_guesses.append({
                "word": word,
                "expected_score": float(total_expected_score)
            })
            
        scored_guesses.sort(key=lambda x: x["expected_score"])
        
        if scored_guesses:
            best_score = scored_guesses[0]["expected_score"]
            for g in scored_guesses:
                penalty = int(round((g["expected_score"] - best_score) * 100))
                g["skill"] = max(0, 99 - penalty)
                
        return scored_guesses[:top_n]