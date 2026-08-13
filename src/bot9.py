import numpy as np
from bot8 import Bot8  # Assuming Bot8 is in bot8.py

class Bot9(Bot8):
    """
    Bot 9: Piecewise Entropy Estimation
    
    Inherits Bot 8's Lorentzian Age-Reweighting for priors but replaces the 
    linear N >= 3 turn estimation heuristic with a piecewise model.
    """
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.name = "Bot 9 (Piecewise Heuristic)"

    def make_guess(self, active_targets: list) -> str:
            if len(active_targets) == 1:
                return active_targets[0]
            if len(active_targets) == 2:
                return max(active_targets, key=lambda w: self.priors.get(w, 0))
                
            active_t_idxs = np.array([self.target_to_idx[t] for t in active_targets if t in self.target_to_idx], dtype=np.int32)
            
            if len(active_t_idxs) == 0:
                return max(active_targets, key=lambda w: self.priors.get(w, 0))
                
            weights = self.prior_weights_target[active_t_idxs]
            total_weight = np.sum(weights)
            if total_weight < 1e-12:
                total_weight = 1.0
            
            # 1. PRE-SLICE MATRIX ONCE: Eliminates hundreds of redundant 14k-row array copies
            valid_matrix = self.matrix[self.valid_guess_idxs]
            V = len(self.valid_guess_idxs)
            row_indices_full = np.arange(V)[:, None]
    
            # ---------------------------------------------------------------------
            # STEP 1: Fast 1-Turn Lookahead Filtering
            # ---------------------------------------------------------------------
            full_sub_matrix = valid_matrix[:, active_t_idxs]
            
            weights_m1 = np.zeros((V, 243))
            np.add.at(weights_m1, (row_indices_full, full_sub_matrix), weights)
            
            p_m1 = weights_m1 / (total_weight + 1e-12)
            entropy_g1 = -np.sum(p_m1 * np.log2(p_m1 + 1e-12), axis=1)
            
            candidate_k = 15 if len(active_targets) > 100 else 25
            top_entropy_indices = np.argsort(entropy_g1)[::-1][:candidate_k]
            top_prob_targets = active_t_idxs[np.argsort(weights)[::-1][:candidate_k]]
            active_in_valid_indices = np.where(np.isin(self.valid_guess_idxs, top_prob_targets))[0]
            
            eval_indices = np.unique(np.concatenate((top_entropy_indices, active_in_valid_indices)))
            eval_indices = eval_indices[np.argsort(entropy_g1[eval_indices])[::-1]]
            
            # ---------------------------------------------------------------------
            # STEP 2: Deep 2-Turn Lookahead with Zero-Allocation Buffers
            # ---------------------------------------------------------------------
            best_g1_word = self.idx_to_guess[self.valid_guess_idxs[eval_indices[0]]]
            min_expected_turns = float('inf')
            
            # 2. PRE-ALLOCATE BUFFERS ONCE: Eliminates thousands of heap allocations per game
            weights_matrix = np.zeros((V, 243), dtype=np.float64)
            counts_matrix = np.zeros((V, 243), dtype=np.int32)
            w_log_w_matrix = np.zeros((V, 243), dtype=np.float64)
            
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
                        sub_matrix = valid_matrix[:, bucket_t_idxs]
                        
                        # Zero buffers in-place (no garbage collection overhead)
                        weights_matrix.fill(0.0)
                        counts_matrix.fill(0)
                        w_log_w_matrix.fill(0.0)
                        
                        w_log_w = bucket_weights * np.log2(bucket_weights + 1e-12)
                        
                        np.add.at(weights_matrix, (row_indices_full, sub_matrix), bucket_weights)
                        np.add.at(counts_matrix, (row_indices_full, sub_matrix), 1)
                        np.add.at(w_log_w_matrix, (row_indices_full, sub_matrix), w_log_w)
                        
                        safe_weights = weights_matrix + 1e-12
                        entropy_matrix = np.clip(np.log2(safe_weights) - (w_log_w_matrix / safe_weights), 0, None)
                        
                        cost_matrix = 1.0 + (entropy_matrix * 0.35)
                        cost_matrix[counts_matrix == 1] = 1.0
                        cost_matrix[:, 242] = 0.0
                        cost_matrix[counts_matrix == 0] = 0.0
                        
                        p_sub = weights_matrix / bucket_weight_sum
                        expected_after_g3 = np.sum(p_sub * cost_matrix, axis=1)
                        turns_needed = np.min(1.0 + expected_after_g3)
                    
                    expected_turns_g1 += p_bucket * turns_needed
                    
                    # Alpha pruning cutoff
                    if (2.0 + expected_turns_g1) >= min_expected_turns:
                        pruned = True
                        break
                    
                if not pruned:
                    total_expected_score = 2.0 + expected_turns_g1
                    if total_expected_score < min_expected_turns:
                        min_expected_turns = total_expected_score
                        best_g1_word = g1_word
                    
            return best_g1_word