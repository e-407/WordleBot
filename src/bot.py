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
        self.all_words = all_words
        self.priors = self._load_priors(priors_path)
        self.name = "Bot 3 (Expected Guesses Lookahead)"
        
        # Connect to the GameEngine's performance maps
        self.matrix = feedback_matrix
        self.guess_to_idx = guess_to_idx
        self.target_to_idx = target_to_idx
        
        # State tracking variable required by the simulator
        self.active_targets = []

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
        Evaluates words based on their Expected Score (total turns to win).
        LOWER expected score is better.
        """
        total_prior = sum(self.priors.get(word, 1e-10) for word in candidates)
        if total_prior == 0:
            return []
            
        normalized_priors = {word: (self.priors.get(word, 1e-10) / total_prior) for word in candidates}
        scored_guesses = []
        
        # Pre-map the candidate words to their integer target indices to avoid dict lookups in the loop
        cand_zip = [(word, self.target_to_idx[word]) for word in candidates if word in self.target_to_idx]
        
        for guess in self.all_words:
            g_idx = self.guess_to_idx[guess]
            matrix_row = self.matrix[g_idx]  # Extract row once per guess for maximum speed
            pattern_groups = defaultdict(list)
            
            # Group remaining candidates using our fast precomputed matrix codes
            for target, t_idx in cand_zip:
                pattern = matrix_row[t_idx]
                pattern_groups[pattern].append(target)
                
            expected_remaining_guesses = 0.0
            win_prob = 0.0
            
            for pattern, group in pattern_groups.items():
                prob_pattern = sum(normalized_priors[t] for t in group)
                
                # THE FIX: Only compare against integer 242. 
                # This avoids triggering NumPy's element-wise array broadcasting error.
                if pattern == 242:
                    win_prob = prob_pattern
                    continue
                    
                n = len(group)
                if n == 1:
                    expected_remaining_guesses += prob_pattern * 1.0
                elif n == 2:
                    p1 = normalized_priors[group[0]]
                    p2 = normalized_priors[group[1]]
                    p_max = max(p1, p2)
                    p_min = min(p1, p2)
                    exp_bin = 1.0 + (p_min / (p_max + p_min))
                    expected_remaining_guesses += prob_pattern * exp_bin
                else:
                    entropy = 0.0
                    for t in group:
                        p_t = normalized_priors[t] / prob_pattern
                        if p_t > 0:
                            entropy -= p_t * math.log2(p_t)
                            
                    exp_bin = 1.0 + (entropy * 0.45)
                    expected_remaining_guesses += prob_pattern * exp_bin
                    
            expected_score = 1.0 + expected_remaining_guesses
            is_plausible = self.priors.get(guess, 1e-10) > 1e-9
            
            scored_guesses.append({
                'word': guess,
                'expected_score': expected_score,
                'win_prob': win_prob,
                'is_plausible': is_plausible
            })
            
        scored_guesses.sort(key=lambda x: (not x['is_plausible'], x['expected_score']))
        return scored_guesses[:top_n]
    
    def make_guess(self, candidates: list) -> str:
        """Standard method for normal simulator gameplay."""
        top_guesses = self.get_top_guesses(candidates, top_n=1)
        return top_guesses[0]['word'] if top_guesses else candidates[0]

    # --- SIMULATOR COMPATIBILITY INTERFACE ---

    def reset(self):
        """Called at the start of every game to clear out the target candidate pool."""
        self.active_targets = [w for w in self.all_words if self.priors.get(w, 0) > 1e-9]

    def update_state(self, guess_idx: int, feedback: int):
        """Filters the active target candidate list down using the matrix row."""
        self.active_targets = [
            t for t in self.active_targets 
            if self.matrix[guess_idx, self.target_to_idx[t]] == feedback
        ]

    def get_best_guess(self) -> int:
        """Called by the game simulator loop to return the chosen guess's integer index."""
        if len(self.active_targets) > 2000:
            return self.guess_to_idx.get("salet", self.guess_to_idx.get("slate", 0))
            
        best_word = self.make_guess(self.active_targets)
        return self.guess_to_idx[best_word]

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