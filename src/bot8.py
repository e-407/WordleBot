import numpy as np
import pandas as pd
from bot7 import Bot7  # Assuming Bot7 is in bot7.py

class Bot8(Bot7):
    """
    Bot 8: Pure Lorentzian Age-Reweighting Kernel
    
    Inherits Bot 7's timing-adjusted repeat probability ramp and EMA, while:
      1. Applying a Lorentzian (Cauchy) Age-Reweighting Kernel (c = 100) to Used words.
         This creates a flat Game 0-100 plateau and an inverse-square heavy tail.
      2. Leaving Unseen words untouched, relying on the natural relative scaling
         of the shrinking Unseen pool (sum_U) as common words are exhausted.
    """
    def __init__(self, all_words: list, priors_path: str = None, priors_dict: dict = None, 
                 feedback_matrix=None, guess_to_idx: dict = None, target_to_idx: dict = None, 
                 turn2_cache_path: str = None, starting_repeat_prob: float = 0.10, 
                 alpha: float = 0.01, alpha_g: float = 0.10, L: float = 0.1, U: float = 1.9,
                 initial_g_bar: float = 9.47, c_lorentz: float = 100.0,
                 used_word_game_num: dict = None, start_game_number: int = 0):
        
        # Scale parameter for the Lorentzian kernel (default: c = 100)
        self.c_lorentz = c_lorentz
        
        # Track the game index (x) when each word was first chosen as a solution
        self.used_word_game_num = used_word_game_num.copy() if used_word_game_num else {}
        self.current_game_number = start_game_number

        # Initialize parent (Bot7), which sets up timing ramp, EMA, and calls _rebuild_valid_guesses()
        super().__init__(all_words, priors_path=priors_path, priors_dict=priors_dict, 
                         feedback_matrix=feedback_matrix, guess_to_idx=guess_to_idx, 
                         target_to_idx=target_to_idx, turn2_cache_path=turn2_cache_path,
                         starting_repeat_prob=starting_repeat_prob, alpha=alpha,
                         alpha_g=alpha_g, L=L, U=U, initial_g_bar=initial_g_bar)
        
        self.name = "Bot 8 (Pure Lorentzian Kernel)"

    def _compute_lorentzian_multiplier(self, x_game_num: int) -> float:
        """
        Computes the Lorentzian (Cauchy) age multiplier:
            w(x) = 1 / (x^2 + c^2)
        """
        x_val = float(x_game_num)
        return 1.0 / ((x_val ** 2.0) + (self.c_lorentz ** 2.0))

    def _rebuild_valid_guesses(self):
        """
        Redistributes probability mass between Used and Unused sets using:
          - Lorentzian Age-Reweighting for Used words (self.used_words)
          - Pure linear grid-searched priors for Unused words
          - Timing-adjusted macro repeat probability (from Bot 7)
        """
        # Calculate today's effective repeat probability from Bot 7's timing ramp
        if hasattr(self, 'g_bar'):
            self.timing_adjusted_repeat_prob = self._compute_timing_adjusted_prob()
        else:
            self.timing_adjusted_repeat_prob = getattr(self, 'repeat_prob', 0.10)

        # If no words are used yet, default to original priors
        if not hasattr(self, 'used_words') or len(self.used_words) == 0:
            self.priors = self.original_priors.copy()
        else:
            sum_S = 0.0
            sum_U = 0.0
            effective_weights = {}

            # 1. Compute unnormalized effective weights across the dictionary
            for w, base_p in self.original_priors.items():
                if w in self.used_words:
                    # Apply Lorentzian age decay based on when the word was first played
                    x_origin = self.used_word_game_num.get(w, 0)
                    age_mult = self._compute_lorentzian_multiplier(x_origin)
                    w_eff = base_p * age_mult
                    effective_weights[w] = w_eff
                    sum_S += w_eff
                else:
                    # Pure version: rely on natural relative scaling as sum_U shrinks
                    effective_weights[w] = base_p
                    sum_U += base_p

            # 2. Normalize and allocate total probability mass to Seen and Unseen pools
            self.priors = {}
            for w, w_eff in effective_weights.items():
                if w in self.used_words:
                    if sum_S > 0:
                        self.priors[w] = self.timing_adjusted_repeat_prob * (w_eff / sum_S)
                    else:
                        self.priors[w] = 0.0
                else:
                    if sum_U > 0:
                        self.priors[w] = (1.0 - self.timing_adjusted_repeat_prob) * (w_eff / sum_U)
                    else:
                        self.priors[w] = 0.0

        # Standard matrix/array rebuilding (identical to Bot 6/7)
        self.valid_guesses = [w for w in self.all_words if self.priors.get(w, 0) > 1e-9]
        self.valid_guess_idxs = np.array([
            self.guess_to_idx[w] for w in self.valid_guesses if w in self.guess_to_idx
        ], dtype=np.int32)
        
        max_target_idx = max(self.target_to_idx.values())
        self.prior_weights_target = np.zeros(max_target_idx + 1)
        for w, p in self.priors.items():
            if w in self.target_to_idx:
                self.prior_weights_target[self.target_to_idx[w]] = p

    def end_game(self, target_word: str, update_ema: bool = True):
        """
        Lifecycle hook: Tracks first-appearance game numbers for the Lorentzian
        kernel, handles repeat eviction, and delegates timing/EMA updates to Bot 7.
        """
        is_repeat = target_word in self.used_words
        
        if update_ema:
            if not is_repeat:
                # First time this word is chosen: record its origin game index (x)
                self.used_word_game_num[target_word] = self.current_game_number
            else:
                # Eviction: once played a second time, remove from active repeat tracking
                if target_word in self.used_word_game_num:
                    del self.used_word_game_num[target_word]
            
            self.current_game_number += 1

        # Let Bot 7 update EMA, timing parameters, pool sets, and call _rebuild_valid_guesses()
        return super().end_game(target_word, update_ema=update_ema)