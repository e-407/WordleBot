# src/bot.py
import numpy as np
import math
import pandas as pd
from collections import defaultdict

class Bot1:
    def __init__(self, allowed_guesses: list, feedback_matrix: np.ndarray, targets_list: list = None):
        self.allowed_guesses = allowed_guesses
        self.feedback_matrix = feedback_matrix
        self.targets_list = allowed_guesses if targets_list is None else targets_list
        
        self.active_targets = np.arange(len(self.targets_list))
        
        guess_to_idx = {word: i for i, word in enumerate(allowed_guesses)}
        self.target_idx_to_guess_idx = np.array(
            [guess_to_idx[word] for word in self.targets_list], 
            dtype=np.int32
        )
        
        self.row_offsets = np.arange(len(self.allowed_guesses), dtype=np.int32)[:, None] * 243
        self.memo = {}

    def reset(self):
        self.active_targets = np.arange(len(self.targets_list))

    def update_state(self, guess_idx: int, feedback: int):
        feedbacks = self.feedback_matrix[guess_idx, self.active_targets]
        self.active_targets = self.active_targets[feedbacks == feedback]

    def get_best_guess(self) -> int:
        # Shortcut 1: If only 1 candidate remains, guess it immediately
        if len(self.active_targets) == 1:
            return self.target_idx_to_guess_idx[self.active_targets[0]]
            
        state_key = tuple(self.active_targets)
        is_first_turn = len(self.active_targets) == len(self.targets_list)
        
        # Shortcut 2: Check global memoization cache
        if state_key in self.memo:
            return self.memo[state_key]
            
        # Cache miss
        if is_first_turn:
            print("-> Computing opening guess for the first time (this may take a moment)...")
            
        best_guess = self._compute_best_guess()
        self.memo[state_key] = best_guess
        
        if is_first_turn:
            print(f"-> Cached opening guess: '{self.allowed_guesses[best_guess].upper()}'")
            
        return best_guess

    def _compute_best_guess(self) -> int:
        A = len(self.active_targets)
        N = len(self.allowed_guesses)
        
        feedbacks = self.feedback_matrix[:, self.active_targets]
        
        flat_indices = (feedbacks.astype(np.int32) + self.row_offsets).ravel()
        flat_counts = np.bincount(flat_indices, minlength=N * 243)
        counts = flat_counts.reshape(N, 243)
        
        p = counts / float(A)
        
        log_p = np.zeros_like(p)
        nonzero = p > 0
        log_p[nonzero] = np.log2(p[nonzero])
        entropies = -np.sum(p * log_p, axis=1)
        
        tiebreaker = np.zeros(N)
        active_guess_indices = self.target_idx_to_guess_idx[self.active_targets]
        tiebreaker[active_guess_indices] = 1e-5
        
        scores = entropies + tiebreaker
        return np.argmax(scores)

class Bot2:
    def __init__(self, all_words: list, priors_path: str):
        self.all_words = all_words
        self.priors = self._load_priors(priors_path)
        self.name = "Bot 2 (NYT Priors + 1-Turn Entropy + Plausible Lock)"

    def _load_priors(self, path: str) -> dict:
        """Loads priors, converting 0.0 to a tiny probability to avoid math errors."""
        df = pd.read_csv(path)
        priors = {}
        for _, row in df.iterrows():
            word = str(row['word']).strip().lower()
            prior = float(row['prior'])
            priors[word] = prior if prior > 0.0 else 1e-10
        return priors

    def get_top_guesses(self, candidates: list, top_n: int = 4) -> list:
        """
        Evaluates all words based on Shannon entropy and returns the top N ranked guesses.
        Restricts selection to plausible words (prior > 0) unless strictly necessary.
        """
        total_prior = sum(self.priors.get(word, 1e-10) for word in candidates)
        if total_prior == 0:
            return []
            
        normalized_priors = {word: (self.priors.get(word, 1e-10) / total_prior) for word in candidates}
        scored_guesses = []
        
        for guess in self.all_words:
            pattern_probabilities = defaultdict(float)
            
            for target in candidates:
                pattern = get_feedback(guess, target)
                pattern_probabilities[pattern] += normalized_priors[target]
                
            entropy = 0.0
            for prob in pattern_probabilities.values():
                if prob > 0:
                    entropy -= prob * math.log2(prob)
                    
            win_probability = normalized_priors.get(guess, 0.0)
            
            # Flag words that are considered legitimate NYT answers
            is_plausible = self.priors.get(guess, 1e-10) > 1e-9
            
            scored_guesses.append({
                'word': guess,
                'entropy': entropy,
                'win_prob': win_probability,
                'is_plausible': is_plausible
            })
            
        # Sort order: 
        # 1. Is it a real word? (True > False)
        # 2. Highest Entropy
        # 3. Highest chance of being the answer
        scored_guesses.sort(key=lambda x: (x['is_plausible'], x['entropy'], x['win_prob']), reverse=True)
        
        return scored_guesses[:top_n]
    
    def make_guess(self, candidates: list) -> str:
        """Standard method for normal simulator gameplay."""
        top_guesses = self.get_top_guesses(candidates, top_n=1)
        return top_guesses[0]['word'] if top_guesses else candidates[0]

class Bot3:
    def __init__(self, all_words: list, priors_path: str, feedback_matrix: np.ndarray, guess_to_idx: dict, target_to_idx: dict):
        self.name = "Bot 3 (2-Turn Lookahead)"
        self.all_words = all_words
        self.matrix = feedback_matrix
        self.guess_to_idx = guess_to_idx
        self.target_to_idx = target_to_idx
        
        # Create an inverse mapping to easily look up strings from indices
        self.idx_to_guess = {v: k for k, v in self.guess_to_idx.items()}
        
        # 1. Load Priors (FIXED: Removed header=None so column headers are safely consumed)
        df_priors = pd.read_csv(priors_path)
        self.priors = dict(zip(
            df_priors.iloc[:, 0].astype(str).str.strip().str.lower(), 
            df_priors.iloc[:, 1].astype(float)
        ))
        
        # 2. Enforce structural constraint: Only allow words with non-zero priors as valid suggestions
        self.valid_guesses = [w for w in self.all_words if self.priors.get(w, 0) > 1e-9]
        self.valid_guess_idxs = np.array([self.guess_to_idx[w] for w in self.valid_guesses if w in self.guess_to_idx])
        
        # 3. Precompute target weight arrays for accelerated NumPy lookups
        max_target_idx = max(self.target_to_idx.values())
        self.prior_weights_target = np.zeros(max_target_idx + 1)
        for w, p in self.priors.items():
            if w in self.target_to_idx:
                self.prior_weights_target[self.target_to_idx[w]] = p

        self.reset()

    def reset(self):
        """Called at the start of every game to clear out the target candidate pool."""
        self.active_targets = [w for w in self.all_words if self.priors.get(w, 0) > 1e-9]
        self.turn_count = 1

    def update_state(self, guess_idx: int, feedback: int):
        """Filters the active target candidate list down using the matrix row."""
        self.active_targets = [
            t for t in self.active_targets 
            if self.matrix[guess_idx, self.target_to_idx[t]] == feedback
        ]
        self.turn_count += 1

    def get_best_guess(self) -> int:
        """Called by the game simulator loop to return the chosen guess's integer index."""
        # Hardcode optimal opener on Turn 1 to bypass the 30-million operation startup phase
        if self.turn_count == 1:
            return self.guess_to_idx.get("slate", 0)
            
        best_word = self.make_guess(self.active_targets)
        return self.guess_to_idx[best_word]

    def make_guess(self, active_targets: list) -> str:
        if len(active_targets) == 1:
            return active_targets[0]
        if len(active_targets) == 2:
            return max(active_targets, key=lambda w: self.priors.get(w, 0))
            
        active_t_idxs = np.array([self.target_to_idx[t] for t in active_targets])
        weights = self.prior_weights_target[active_t_idxs]
        total_weight = np.sum(weights)
        
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
        
        # INCLUSION FIX: Entropy favors burn words. To find words with Exp. Score < 3.0, 
        # we must explicitly include the most probable actual remaining targets in the deep search.
        top_entropy_indices = np.argsort(entropy_g1)[::-1][:30]
        top_prob_targets = active_t_idxs[np.argsort(weights)[::-1][:30]]
        active_in_valid_indices = np.where(np.isin(self.valid_guess_idxs, top_prob_targets))[0]
        
        eval_indices = np.unique(np.concatenate((top_entropy_indices, active_in_valid_indices)))
        
        # ---------------------------------------------------------------------
        # STEP 2: Deep 2-Turn Lookahead
        # ---------------------------------------------------------------------
        best_g1_word = None
        min_expected_turns = float('inf')
        inner_row_indices = np.arange(V)[:, None]
        
        for idx in eval_indices:
            g1_idx = self.valid_guess_idxs[idx]
            g1_word = self.idx_to_guess[g1_idx]
            
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
        
        top_entropy_indices = np.argsort(entropy_g1)[::-1][:30]
        top_prob_targets = active_t_idxs[np.argsort(weights)[::-1][:30]]
        active_in_valid_indices = np.where(np.isin(self.valid_guess_idxs, top_prob_targets))[0]
        
        eval_indices = np.unique(np.concatenate((top_entropy_indices, active_in_valid_indices)))
        
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
        
        # FIXED: NYT 99-minus Skill System (-1 skill per 0.01 expected score drop)
        if scored_guesses:
            best_score = scored_guesses[0]["expected_score"]
            for g in scored_guesses:
                penalty = int(round((g["expected_score"] - best_score) * 100))
                g["skill"] = max(0, 99 - penalty)
                
        return scored_guesses[:top_n]
    
def get_feedback(guess: str, target: str) -> tuple:
    """
    Standard feedback calculator.
    0 = Gray, 1 = Yellow, 2 = Green.
    """
    feedback = [0] * 5
    target_counts = defaultdict(int)
    
    for char in target:
        target_counts[char] += 1
        
    for i in range(5):
        if guess[i] == target[i]:
            feedback[i] = 2
            target_counts[guess[i]] -= 1
            
    for i in range(5):
        if feedback[i] == 0 and target_counts[guess[i]] > 0:
            feedback[i] = 1
            target_counts[guess[i]] -= 1
            
    return tuple(feedback)