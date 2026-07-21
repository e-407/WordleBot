import numpy as np
import pandas as pd
from base_bot import BaseBot

class Bot2(BaseBot):
    def __init__(self, all_words: list, priors_path: str, feedback_matrix, guess_to_idx: dict, target_to_idx: dict):
        super().__init__(all_words, feedback_matrix, guess_to_idx, target_to_idx)
        self.name = "Bot 2 (1-Turn Entropy, Priors)"
        
        df_priors = pd.read_csv(priors_path)
        self.priors = dict(zip(
            df_priors.iloc[:, 0].astype(str).str.strip().str.lower(), 
            df_priors.iloc[:, 1].astype(float)
        ))
        
        # Enforce structural constraint: Only allow words with non-zero priors
        self.valid_guesses = [w for w in self.all_words if self.priors.get(w, 0) > 1e-9]
        self.valid_guess_idxs = np.array([self.guess_to_idx[w] for w in self.valid_guesses if w in self.guess_to_idx])
        
        max_target_idx = max(self.target_to_idx.values())
        self.prior_weights_target = np.zeros(max_target_idx + 1)
        for w, p in self.priors.items():
            if w in self.target_to_idx:
                self.prior_weights_target[self.target_to_idx[w]] = p

        self.reset()

    def reset(self):
        self.active_targets = [w for w in self.all_words if self.priors.get(w, 0) > 1e-9]
        self.turn_count = 1

    def update_state(self, guess_idx: int, feedback: int):
        self.active_targets = [
            t for t in self.active_targets 
            if self.matrix[guess_idx, self.target_to_idx[t]] == feedback
        ]
        self.turn_count += 1

    def get_best_guess(self) -> int:
        if self.turn_count == 1:
            return self.guess_to_idx.get("slate", 0)
            
        if len(self.active_targets) == 1:
            return self.guess_to_idx[self.active_targets[0]]
            
        if len(self.active_targets) == 2:
            best_word = max(self.active_targets, key=lambda w: self.priors.get(w, 0))
            return self.guess_to_idx[best_word]

        active_t_idxs = np.array([self.target_to_idx[t] for t in self.active_targets])
        weights = self.prior_weights_target[active_t_idxs]
        total_weight = np.sum(weights)

        V = len(self.valid_guess_idxs)
        row_indices_full = np.arange(V)[:, None]
        full_sub_matrix = self.matrix[self.valid_guess_idxs][:, active_t_idxs]
        
        weights_m1 = np.zeros((V, 243))
        np.add.at(weights_m1, (row_indices_full, full_sub_matrix), weights)
        
        p_m1 = weights_m1 / (total_weight + 1e-12)
        entropy = -np.sum(p_m1 * np.log2(p_m1 + 1e-12), axis=1)
        
        best_idx_in_valid = np.argmax(entropy)
        return self.valid_guess_idxs[best_idx_in_valid]