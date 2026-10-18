import numpy as np
from bot8 import Bot8


class Bot9(Bot8):
    """
    Bot 9: Inherits Lorentzian Age-Reweighting Kernel from Bot 8[cite: 3],
    and overrides the 2-turn lookahead heuristic from Bot 5[cite: 2] with:
      - Intra-bucket temperature flattening (tau)
      - Continuous 3-part piecewise linear entropy cost model hinged at H = 0.5 and H = 1.0:
          * [0.0, 0.5]: slope1
          * [0.5, 1.0]: slope2
          * [1.0, inf): slope3
    """
    def __init__(self, all_words: list, priors_path: str = None, priors_dict: dict = None,
                 feedback_matrix=None, guess_to_idx: dict = None, target_to_idx: dict = None,
                 turn2_cache_path: str = None, starting_repeat_prob: float = 0.10,
                 alpha: float = 0.01, alpha_g: float = 0.10, L: float = 0.1, U: float = 1.9,
                 initial_g_bar: float = 9.47,
                 c_shoulder: float = 150, k_shoulder: float = 3.5, b_shoulder: float = 0.008,
                 used_word_game_num: dict = None, start_game_number: int = 0,
                 tau: float = 0.9, slope1: float = 0.10, slope2: float = 0.10, slope3: float = 0.10):

        self.tau = float(tau)
        self.slope1 = float(slope1)
        self.slope2 = float(slope2)
        self.slope3 = float(slope3)

        super().__init__(
            all_words=all_words,
            priors_path=priors_path,
            priors_dict=priors_dict,
            feedback_matrix=feedback_matrix,
            guess_to_idx=guess_to_idx,
            target_to_idx=target_to_idx,
            turn2_cache_path=turn2_cache_path,
            starting_repeat_prob=starting_repeat_prob,
            alpha=alpha,
            alpha_g=alpha_g,
            L=L,
            U=U,
            initial_g_bar=initial_g_bar,
            c_shoulder=c_shoulder,
            k_shoulder=k_shoulder,
            b_shoulder=b_shoulder,
            used_word_game_num=used_word_game_num,
            start_game_number=start_game_number,
        )

        self.name = f"Bot 9 (tau={self.tau}, s1={self.slope1}, s2={self.slope2}, s3={self.slope3})"

    def make_guess(self, active_targets: list) -> str:
        """
        Single-bot fast 2-turn lookahead using the 3-part piecewise linear model
        hinged at H = 0.5 and H = 1.0.
        """
        if len(active_targets) == 1:
            return active_targets[0]
        if len(active_targets) == 2:
            return max(active_targets, key=lambda w: self.priors.get(w, 0))

        active_t_idxs = np.array(
            [self.target_to_idx[t] for t in active_targets if t in self.target_to_idx],
            dtype=np.int32
        )

        if len(active_t_idxs) == 0:
            return max(active_targets, key=lambda w: self.priors.get(w, 0))

        weights = self.prior_weights_target[active_t_idxs]
        total_weight = float(np.sum(weights))
        if total_weight < 1e-12:
            total_weight = 1.0

        valid_matrix = self.matrix[self.valid_guess_idxs]
        V = len(self.valid_guess_idxs)
        row_indices_full = np.arange(V)[:, None]

        # STEP 1: Fast 1-Turn Lookahead Filtering[cite: 2]
        full_sub_matrix = valid_matrix[:, active_t_idxs]

        weights_m1 = np.zeros((V, 243), dtype=np.float64)
        np.add.at(weights_m1, (row_indices_full, full_sub_matrix), weights)

        p_m1 = weights_m1 / (total_weight + 1e-12)
        entropy_g1 = -np.sum(p_m1 * np.log2(p_m1 + 1e-12), axis=1)

        candidate_k = 15 if len(active_targets) > 100 else 25
        top_entropy_indices = np.argsort(entropy_g1)[::-1][:candidate_k]
        top_prob_targets = active_t_idxs[np.argsort(weights)[::-1][:candidate_k]]
        active_in_valid_indices = np.where(np.isin(self.valid_guess_idxs, top_prob_targets))[0]

        eval_indices = np.unique(np.concatenate((top_entropy_indices, active_in_valid_indices)))
        eval_indices = eval_indices[np.argsort(entropy_g1[eval_indices])[::-1]]

        # STEP 2: Deep 2-Turn Lookahead with 3-Part Piecewise Linear Model
        best_g1_word = self.idx_to_guess[self.valid_guess_idxs[eval_indices[0]]]
        min_expected_turns = float('inf')

        scaled_weights_all = np.power(np.maximum(weights, 0.0), self.tau)

        weights_matrix = np.zeros((V, 243), dtype=np.float64)
        w_log_w_matrix = np.zeros((V, 243), dtype=np.float64)
        log_w_mat = np.zeros((V, 243), dtype=np.float64)
        entropy_matrix = np.zeros((V, 243), dtype=np.float64)
        cost_matrix = np.zeros((V, 243), dtype=np.float64)

        s1 = self.slope1
        s2 = self.slope2
        s3 = self.slope3

        for idx in eval_indices:
            g1_idx = self.valid_guess_idxs[idx]
            g1_word = self.idx_to_guess[g1_idx]

            feedbacks_1 = full_sub_matrix[idx]
            unique_f1, counts_f1 = np.unique(feedbacks_1, return_counts=True)

            p_242 = p_m1[idx, 242]
            expected_turns_g1 = 1.0 - p_242

            if (2.0 + expected_turns_g1) >= min_expected_turns - 1e-12:
                continue

            multi_mask = (counts_f1 >= 2) & (unique_f1 != 242)
            multi_f1 = unique_f1[multi_mask]

            if len(multi_f1) > 1:
                multi_probs = p_m1[idx, multi_f1]
                multi_f1 = multi_f1[np.argsort(multi_probs)[::-1]]

            pruned = False

            for f1 in multi_f1:
                p_bucket = p_m1[idx, f1]
                if p_bucket < 1e-12:
                    continue

                mask = (feedbacks_1 == f1)
                bucket_t_idxs = active_t_idxs[mask]
                sub_matrix = valid_matrix[:, bucket_t_idxs]

                scaled_bw = scaled_weights_all[mask]
                scaled_bw_sum = float(np.sum(scaled_bw))
                if scaled_bw_sum < 1e-12:
                    scaled_bw = np.ones_like(scaled_bw)
                    scaled_bw_sum = float(len(scaled_bw))

                weights_matrix.fill(0.0)
                w_log_w_matrix.fill(0.0)

                w_log_w = scaled_bw * np.log2(scaled_bw + 1e-12)

                np.add.at(weights_matrix, (row_indices_full, sub_matrix), scaled_bw)
                np.add.at(w_log_w_matrix, (row_indices_full, sub_matrix), w_log_w)

                nz = weights_matrix > 1e-12
                log_w_mat.fill(0.0)
                entropy_matrix.fill(0.0)
                cost_matrix.fill(0.0)

                np.log2(weights_matrix, out=log_w_mat, where=nz)
                entropy_matrix[nz] = np.maximum(0.0, log_w_mat[nz] - (w_log_w_matrix[nz] / weights_matrix[nz]))

                H_nz = entropy_matrix[nz]
                cost_matrix[nz] = (
                    1.0
                    + s1 * np.minimum(H_nz, 0.5)
                    + s2 * np.clip(H_nz - 0.5, 0.0, 0.5)
                    + s3 * np.maximum(H_nz - 1.0, 0.0)
                )
                cost_matrix[:, 242] = 0.0

                expected_after_g3 = np.sum(weights_matrix * cost_matrix, axis=1) / scaled_bw_sum
                extra_turns_beyond_1 = float(np.min(expected_after_g3))

                expected_turns_g1 += p_bucket * extra_turns_beyond_1

                if (2.0 + expected_turns_g1) >= min_expected_turns - 1e-12:
                    pruned = True
                    break

            if not pruned:
                total_expected_score = 2.0 + expected_turns_g1
                if total_expected_score < min_expected_turns:
                    min_expected_turns = total_expected_score
                    best_g1_word = g1_word

        return best_g1_word

    def make_guess_multi_slopes(self, active_targets: list, slope_triplets: list) -> list:
        """
        Simultaneously computes the exact best guess for M different (slope1, slope2, slope3)
        configurations sharing the same `self.tau` and `active_targets`.
        """
        M = len(slope_triplets)
        if len(active_targets) == 1:
            return [active_targets[0]] * M
        if len(active_targets) == 2:
            best = max(active_targets, key=lambda w: self.priors.get(w, 0))
            return [best] * M

        active_t_idxs = np.array(
            [self.target_to_idx[t] for t in active_targets if t in self.target_to_idx],
            dtype=np.int32
        )

        if len(active_t_idxs) == 0:
            best = max(active_targets, key=lambda w: self.priors.get(w, 0))
            return [best] * M

        weights = self.prior_weights_target[active_t_idxs]
        total_weight = float(np.sum(weights))
        if total_weight < 1e-12:
            total_weight = 1.0

        valid_matrix = self.matrix[self.valid_guess_idxs]
        V = len(self.valid_guess_idxs)
        row_indices_full = np.arange(V)[:, None]

        # STEP 1: Fast 1-Turn Lookahead Filtering[cite: 2]
        full_sub_matrix = valid_matrix[:, active_t_idxs]

        weights_m1 = np.zeros((V, 243), dtype=np.float64)
        np.add.at(weights_m1, (row_indices_full, full_sub_matrix), weights)

        p_m1 = weights_m1 / (total_weight + 1e-12)
        entropy_g1 = -np.sum(p_m1 * np.log2(p_m1 + 1e-12), axis=1)

        candidate_k = 15 if len(active_targets) > 100 else 25
        top_entropy_indices = np.argsort(entropy_g1)[::-1][:candidate_k]
        top_prob_targets = active_t_idxs[np.argsort(weights)[::-1][:candidate_k]]
        active_in_valid_indices = np.where(np.isin(self.valid_guess_idxs, top_prob_targets))[0]

        eval_indices = np.unique(np.concatenate((top_entropy_indices, active_in_valid_indices)))
        eval_indices = eval_indices[np.argsort(entropy_g1[eval_indices])[::-1]]

        # STEP 2: Vectorized 3-Slope Evaluation
        # cost(H) = 1.0 + s1 * min(H, 0.5) + s2 * clip(H - 0.5, 0.0, 0.5) + s3 * max(H - 1.0, 0.0)
        s1_arr = np.array([t[0] for t in slope_triplets], dtype=np.float64)[:, None]  # (M, 1)
        s2_arr = np.array([t[1] for t in slope_triplets], dtype=np.float64)[:, None]  # (M, 1)
        s3_arr = np.array([t[2] for t in slope_triplets], dtype=np.float64)[:, None]  # (M, 1)

        default_word = self.idx_to_guess[self.valid_guess_idxs[eval_indices[0]]]
        best_words = [default_word] * M
        min_expected_turns = np.full(M, float('inf'), dtype=np.float64)

        scaled_weights_all = np.power(np.maximum(weights, 0.0), self.tau)

        weights_matrix = np.zeros((V, 243), dtype=np.float64)
        w_log_w_matrix = np.zeros((V, 243), dtype=np.float64)
        log_w_mat = np.zeros((V, 243), dtype=np.float64)
        entropy_matrix = np.zeros((V, 243), dtype=np.float64)
        h_seg1_mat = np.zeros((V, 243), dtype=np.float64)
        h_seg2_mat = np.zeros((V, 243), dtype=np.float64)
        h_seg3_mat = np.zeros((V, 243), dtype=np.float64)

        for idx in eval_indices:
            g1_idx = self.valid_guess_idxs[idx]
            g1_word = self.idx_to_guess[g1_idx]

            feedbacks_1 = full_sub_matrix[idx]
            unique_f1, counts_f1 = np.unique(feedbacks_1, return_counts=True)

            p_242 = p_m1[idx, 242]
            expected_turns_g1 = np.full(M, 1.0 - p_242, dtype=np.float64)

            if np.all((2.0 + expected_turns_g1) >= min_expected_turns - 1e-12):
                continue

            multi_mask = (counts_f1 >= 2) & (unique_f1 != 242)
            multi_f1 = unique_f1[multi_mask]

            if len(multi_f1) > 1:
                multi_probs = p_m1[idx, multi_f1]
                multi_f1 = multi_f1[np.argsort(multi_probs)[::-1]]

            pruned_all = False

            for f1 in multi_f1:
                p_bucket = p_m1[idx, f1]
                if p_bucket < 1e-12:
                    continue

                mask = (feedbacks_1 == f1)
                bucket_t_idxs = active_t_idxs[mask]
                sub_matrix = valid_matrix[:, bucket_t_idxs]

                scaled_bw = scaled_weights_all[mask]
                scaled_bw_sum = float(np.sum(scaled_bw))
                if scaled_bw_sum < 1e-12:
                    scaled_bw = np.ones_like(scaled_bw)
                    scaled_bw_sum = float(len(scaled_bw))

                weights_matrix.fill(0.0)
                w_log_w_matrix.fill(0.0)

                w_log_w = scaled_bw * np.log2(scaled_bw + 1e-12)

                np.add.at(weights_matrix, (row_indices_full, sub_matrix), scaled_bw)
                np.add.at(w_log_w_matrix, (row_indices_full, sub_matrix), w_log_w)

                nz = weights_matrix > 1e-12
                log_w_mat.fill(0.0)
                entropy_matrix.fill(0.0)
                h_seg1_mat.fill(0.0)
                h_seg2_mat.fill(0.0)
                h_seg3_mat.fill(0.0)

                np.log2(weights_matrix, out=log_w_mat, where=nz)
                entropy_matrix[nz] = np.maximum(0.0, log_w_mat[nz] - (w_log_w_matrix[nz] / weights_matrix[nz]))

                W_nz = weights_matrix[nz]
                H_nz = entropy_matrix[nz]

                # Basis decomposition across the 3 entropy segments:
                # Segment 1: [0.0, 0.5], Segment 2: [0.5, 1.0], Segment 3: [1.0, inf)
                h_seg1_mat[nz] = W_nz * np.minimum(H_nz, 0.5)
                h_seg2_mat[nz] = W_nz * np.clip(H_nz - 0.5, 0.0, 0.5)
                h_seg3_mat[nz] = W_nz * np.maximum(H_nz - 1.0, 0.0)

                h_seg1_mat[:, 242] = 0.0
                h_seg2_mat[:, 242] = 0.0
                h_seg3_mat[:, 242] = 0.0

                base_turn_prob = (scaled_bw_sum - weights_matrix[:, 242]) / scaled_bw_sum
                term_s1 = np.sum(h_seg1_mat, axis=1) / scaled_bw_sum
                term_s2 = np.sum(h_seg2_mat, axis=1) / scaled_bw_sum
                term_s3 = np.sum(h_seg3_mat, axis=1) / scaled_bw_sum

                # Broadcast across all M (s1, s2, s3) triplets simultaneously: shape (M, V)
                expected_after_g3_all = (
                    base_turn_prob[None, :]
                    + s1_arr * term_s1[None, :]
                    + s2_arr * term_s2[None, :]
                    + s3_arr * term_s3[None, :]
                )
                extra_turns_all = np.min(expected_after_g3_all, axis=1)  # shape (M,)

                expected_turns_g1 += p_bucket * extra_turns_all

                if np.all((2.0 + expected_turns_g1) >= min_expected_turns - 1e-12):
                    pruned_all = True
                    break

            if not pruned_all:
                total_scores = 2.0 + expected_turns_g1
                improved = total_scores < min_expected_turns
                for m_idx in np.where(improved)[0]:
                    min_expected_turns[m_idx] = total_scores[m_idx]
                    best_words[m_idx] = g1_word

        return best_words