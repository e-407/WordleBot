import numpy as np
from base_bot import BaseBot

class Bot1(BaseBot):
    def __init__(self, all_words: list, feedback_matrix, guess_to_idx: dict, target_to_idx: dict):
        super().__init__(all_words, feedback_matrix, guess_to_idx, target_to_idx)
        self.name = "Bot 1 (1-Turn Entropy, Uniform)"
        
        # Bot 1 treats all potential solutions as equally likely initially
        self.valid_targets_idx = np.array(list(self.target_to_idx.values()))
        self.reset()

    def reset(self):
        self.active_targets_idx = self.valid_targets_idx.copy()
        self.turn_count = 1

    def update_state(self, guess_idx: int, feedback: int):
        feedbacks = self.matrix[guess_idx, self.active_targets_idx]
        self.active_targets_idx = self.active_targets_idx[feedbacks == feedback]
        self.turn_count += 1

    def get_best_guess(self) -> int:
        if self.turn_count == 1:
            return self.guess_to_idx.get("roate", 0) # High-entropy opener
            
        if len(self.active_targets_idx) == 1:
            return self.guess_to_idx[self.idx_to_guess[self.active_targets_idx[0]]]
            
        if len(self.active_targets_idx) == 2:
            return self.guess_to_idx[self.idx_to_guess[self.active_targets_idx[0]]]

        # Fast vectorized Shannon Entropy
        V = self.matrix.shape[0]
        row_indices = np.arange(V)[:, None]
        sub_matrix = self.matrix[:, self.active_targets_idx]
        
        counts = np.zeros((V, 243))
        np.add.at(counts, (row_indices, sub_matrix), 1)
        
        total_weight = len(self.active_targets_idx)
        p = counts / total_weight
        entropy = -np.sum(p * np.log2(p + 1e-12), axis=1)
        
        best_idx = np.argmax(entropy)
        return best_idx