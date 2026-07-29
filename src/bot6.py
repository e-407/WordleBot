import json
import numpy as np
import pandas as pd
from pathlib import Path
from bot5 import Bot5  # Assuming Bot5 is in bot5.py

class Bot6(Bot5):
    def __init__(self, all_words: list, priors_path: str = None, priors_dict: dict = None, 
                 feedback_matrix=None, guess_to_idx: dict = None, target_to_idx: dict = None, 
                 turn2_cache_path: str = None, starting_repeat_prob: float = 0.10, alpha: float = 0.05):
        
        # We will hold the original base weights separately
        self.original_priors = {}
        self.used_words = set()
        
        self.repeat_prob = starting_repeat_prob
        self.alpha = alpha
        
        # Load the base priors first
        if priors_dict is not None:
            self.original_priors = priors_dict.copy()
        elif priors_path is not None:
            df_priors = pd.read_csv(priors_path)
            try:
                float(df_priors.columns[1])
                df_priors = pd.read_csv(priors_path, header=None)
            except (ValueError, TypeError):
                pass
                
            words = df_priors.iloc[:, 0].astype(str).str.strip().str.lower()
            priors_vals = pd.to_numeric(df_priors.iloc[:, 1], errors='coerce').fillna(0.0)
            self.original_priors = dict(zip(words, priors_vals))
        else:
            raise ValueError("Must provide either priors_path or priors_dict")
            
        # Initialize parent which calls _rebuild_valid_guesses
        super().__init__(all_words, priors_path=None, priors_dict=self.original_priors, 
                         feedback_matrix=feedback_matrix, guess_to_idx=guess_to_idx, 
                         target_to_idx=target_to_idx, turn2_cache_path=turn2_cache_path)
        self.name = "Bot 6 (EMA Repeat Handler)"

    def _rebuild_valid_guesses(self):
        """Redistributes probability mass between Used and Unused words based on self.repeat_prob."""
        # If no words are used yet, default to the normal Bot 5 initialization
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
                        self.priors[w] = self.repeat_prob * (base_p / sum_S)
                    else:
                        self.priors[w] = 0.0
                else:
                    if sum_U > 0:
                        self.priors[w] = (1.0 - self.repeat_prob) * (base_p / sum_U)
                    else:
                        self.priors[w] = 0.0

        # Now execute the standard Bot 5 matrix/array rebuilding
        self.valid_guesses = [w for w in self.all_words if self.priors.get(w, 0) > 1e-9]
        self.valid_guess_idxs = np.array([self.guess_to_idx[w] for w in self.valid_guesses if w in self.guess_to_idx], dtype=np.int32)
        
        max_target_idx = max(self.target_to_idx.values())
        self.prior_weights_target = np.zeros(max_target_idx + 1)
        for w, p in self.priors.items():
            if w in self.target_to_idx:
                self.prior_weights_target[self.target_to_idx[w]] = p

    def end_game(self, target_word: str, update_ema: bool = True):
        """Lifecycle hook: Updates EMA, manages the Used Words pool, and recalculates priors."""
        is_repeat = target_word in self.used_words
        
        if update_ema:
            indicator = 1.0 if is_repeat else 0.0
            self.repeat_prob = (1 - self.alpha) * self.repeat_prob + self.alpha * indicator

        if is_repeat:
            # Word was repeated! Remove it from the used pool and fix base prior to 0.001
            # so it is now considered alongside the non-repeated (unused) words.
            self.used_words.remove(target_word)
            self.original_priors[target_word] = 0.001
        else:
            # First time seen. Add to used words.
            if target_word not in self.original_priors:
                # Edge case: A completely unknown word was the target
                self.original_priors[target_word] = 0.001
            self.used_words.add(target_word)

        # Trigger the redistribution and matrix rebuild, clear caches
        self._rebuild_valid_guesses()
        self.turn2_cache.clear()
        self.mid_game_cache.clear()
        
        return is_repeat, self.repeat_prob