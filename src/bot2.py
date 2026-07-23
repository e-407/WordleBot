import json
import numpy as np
import pandas as pd
from pathlib import Path
from base_bot import BaseBot

class Bot2(BaseBot):
    def __init__(self, all_words: list, priors_path: str, feedback_matrix, guess_to_idx: dict, target_to_idx: dict, turn2_cache_path: str = None):
        super().__init__(all_words, feedback_matrix, guess_to_idx, target_to_idx)
        self.name = "Bot 2 (1-Turn Entropy, Priors)"
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
                
        self.mid_game_cache = {} # In-memory cache persists across games for speed

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
                best_word = self._calculate_guess(self.active_targets)
                self.turn2_cache[f_code_str] = best_word
                self._save_turn2_cache()
                
        # 3. TURN 3+: Memory Cached
        else:
            pool_key = tuple(self.active_targets)
            if pool_key in self.mid_game_cache:
                best_word = self.mid_game_cache[pool_key]
            else:
                best_word = self._calculate_guess(self.active_targets)
                self.mid_game_cache[pool_key] = best_word

        # 4. FAILSAFE: Prevent infinite loops naturally
        if best_word in self.guesses_made:
            for w in self.active_targets_15k:
                if w not in self.guesses_made:
                    best_word = w
                    break

        return self.guess_to_idx[best_word]

    def _calculate_guess(self, active_targets: list) -> str:
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

        V = len(self.valid_guess_idxs)
        row_indices_full = np.arange(V)[:, None]
        full_sub_matrix = self.matrix[self.valid_guess_idxs][:, active_t_idxs]
        
        weights_m1 = np.zeros((V, 243))
        np.add.at(weights_m1, (row_indices_full, full_sub_matrix), weights)
        
        p_m1 = weights_m1 / (total_weight + 1e-12)
        entropy = -np.sum(p_m1 * np.log2(p_m1 + 1e-12), axis=1)
        
        best_idx_in_valid = np.argmax(entropy)
        return self.idx_to_guess[self.valid_guess_idxs[best_idx_in_valid]]