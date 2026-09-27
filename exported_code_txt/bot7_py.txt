import numpy as np
import pandas as pd
from bot6 import Bot6  # Assuming Bot6 is in bot6.py

class Bot7(Bot6):
    def __init__(self, all_words: list, priors_path: str = None, priors_dict: dict = None, 
                 feedback_matrix=None, guess_to_idx: dict = None, target_to_idx: dict = None, 
                 turn2_cache_path: str = None, starting_repeat_prob: float = 0.10, 
                 alpha: float = 0.01, alpha_g: float = 0.10, L: float = 0.1, U: float = 1.9,
                 initial_g_bar: float = 9.47):
        
        # Timing parameters for the piecewise linear ramp
        self.alpha_g = alpha_g
        self.L = L
        self.U = U
        self.g_bar = initial_g_bar
        self.days_since_last = 1
        
        # We will track the timing-adjusted probability separately
        self.timing_adjusted_repeat_prob = starting_repeat_prob

        # Initialize parent (Bot6), which sets up EMA and calls _rebuild_valid_guesses()
        super().__init__(all_words, priors_path=priors_path, priors_dict=priors_dict, 
                         feedback_matrix=feedback_matrix, guess_to_idx=guess_to_idx, 
                         target_to_idx=target_to_idx, turn2_cache_path=turn2_cache_path,
                         starting_repeat_prob=starting_repeat_prob, alpha=alpha)
        
        self.name = "Bot 7 (Timing-Adjusted Linear Ramp)"

    def _compute_timing_adjusted_prob(self) -> float:
        """
        Calculates today's repeat probability using the parameterized linear ramp
        pivoting around (g_bar, 1.0).
        """
        if self.g_bar <= 1.0:
            return self.repeat_prob

        # Linear slope: (1 - L) / (g_bar - 1)
        slope = (1.0 - self.L) / (self.g_bar - 1.0)
        linear_multiplier = self.L + slope * (self.days_since_last - 1.0)
        multiplier = min(self.U, max(self.L, linear_multiplier))

        final_prob = self.repeat_prob * multiplier
        return max(0.0, min(1.0, final_prob))

    def _rebuild_valid_guesses(self):
        """
        Redistributes probability mass between Used and Unused words using the
        timing-adjusted repeat probability instead of the raw EMA.
        """
        # Calculate today's effective repeat probability before redistributing mass
        if hasattr(self, 'g_bar'):
            self.timing_adjusted_repeat_prob = self._compute_timing_adjusted_prob()
        else:
            self.timing_adjusted_repeat_prob = self.repeat_prob

        # If no words are used yet, default to the original priors
        if not hasattr(self, 'used_words') or len(self.used_words) == 0:
            self.priors = self.original_priors.copy()
        else:
            sum_U = 0.0
            sum_S = 0.0
            
            # Calculate the normalizing sums for both sets
            for w, base_p in self.original_priors.items():
                if w in self.used_words:
                    sum_S += base_p
                else:
                    sum_U += base_p
                    
            self.priors = {}
            for w, base_p in self.original_priors.items():
                if w in self.used_words:
                    if sum_S > 0:
                        self.priors[w] = self.timing_adjusted_repeat_prob * (base_p / sum_S)
                    else:
                        self.priors[w] = 0.0
                else:
                    if sum_U > 0:
                        self.priors[w] = (1.0 - self.timing_adjusted_repeat_prob) * (base_p / sum_U)
                    else:
                        self.priors[w] = 0.0

        # Standard matrix/array rebuilding (identical to Bot 5/6)
        self.valid_guesses = [w for w in self.all_words if self.priors.get(w, 0) > 1e-9]
        self.valid_guess_idxs = np.array([self.guess_to_idx[w] for w in self.valid_guesses if w in self.guess_to_idx], dtype=np.int32)
        
        max_target_idx = max(self.target_to_idx.values())
        self.prior_weights_target = np.zeros(max_target_idx + 1)
        for w, p in self.priors.items():
            if w in self.target_to_idx:
                self.prior_weights_target[self.target_to_idx[w]] = p

    def end_game(self, target_word: str, update_ema: bool = True):
        """
        Lifecycle hook: Updates timing gap (d) and average gap (g_bar),
        updates the EMA, manages the Used Words pool, and recalculates priors.
        """
        is_repeat = target_word in self.used_words
        
        if update_ema:
            # 1. Update Bot 6's raw Exponential Moving Average (P_exp)
            indicator = 1.0 if is_repeat else 0.0
            self.repeat_prob = (1 - self.alpha) * self.repeat_prob + self.alpha * indicator
            
            # 2. Update Bot 7's timing parameters
            if is_repeat:
                completed_gap = float(self.days_since_last)
                self.g_bar = (self.alpha_g * completed_gap) + ((1.0 - self.alpha_g) * self.g_bar)
                self.days_since_last = 1
            else:
                self.days_since_last += 1

        if is_repeat:
            # Remove from used_words so it doesn't take up repeat probability mass.
            # Set to epsilon (1e-7) so it sits far below unnormalized 0.001 obscure words.
            self.used_words.remove(target_word)
            self.original_priors[target_word] = 1e-7
        else:
            if target_word not in self.original_priors:
                self.original_priors[target_word] = 0.001
            self.used_words.add(target_word)

        # Trigger redistribution using the new timing-adjusted probability and clear caches
        self._rebuild_valid_guesses()
        self.turn2_cache.clear()
        self.mid_game_cache.clear()
        
        return is_repeat, self.timing_adjusted_repeat_prob