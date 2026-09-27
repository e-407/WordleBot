import sys
import json
import time
import numpy as np
import pandas as pd
from pathlib import Path

# Setup project paths
PROJECT_ROOT = Path(__file__).resolve().parent.parent if '__file__' in globals() else Path().resolve()
SRC_DIR = PROJECT_ROOT / 'src'
if str(SRC_DIR) not in sys.path:
    sys.path.append(str(SRC_DIR))

from engine import GameEngine
from bot5 import Bot5
from bot8 import Bot8


def evaluate_turn2_buckets(bot, active_targets: list, top_n: int = 3) -> tuple:
    """
    Evaluates candidate second guesses on Turn 2 for `active_targets`.
    Calculates sub-bucket sizes (N) and within-bucket Shannon entropy (H in bits).
    Side-effect free: Reads matrix/weights without mutating bot state.
    """
    if len(active_targets) <= 1:
        return [], []

    active_t_idxs = np.array([bot.target_to_idx[c] for c in active_targets if c in bot.target_to_idx], dtype=np.int32)
    if len(active_t_idxs) <= 1:
        return [], []

    weights = bot.prior_weights_target[active_t_idxs]
    total_weight = np.sum(weights) if np.sum(weights) > 0 else 1.0

    valid_matrix = bot.matrix[bot.valid_guess_idxs]
    V = len(bot.valid_guess_idxs)
    row_indices_full = np.arange(V)[:, None]

    full_sub_matrix = valid_matrix[:, active_t_idxs]
    weights_m1 = np.zeros((V, 243))
    np.add.at(weights_m1, (row_indices_full, full_sub_matrix), weights)

    p_m1 = weights_m1 / (total_weight + 1e-12)
    entropy_g1 = -np.sum(p_m1 * np.log2(p_m1 + 1e-12), axis=1)

    candidate_k = 15 if len(active_targets) > 100 else 25
    top_entropy_indices = np.argsort(entropy_g1)[::-1][:candidate_k]
    top_prob_targets = active_t_idxs[np.argsort(weights)[::-1][:candidate_k]]
    active_in_valid_indices = np.where(np.isin(bot.valid_guess_idxs, top_prob_targets))[0]

    eval_indices = np.unique(np.concatenate((top_entropy_indices, active_in_valid_indices)))
    eval_indices = eval_indices[np.argsort(entropy_g1[eval_indices])[::-1]]

    scored_guesses = []
    bucket_details = []  # Stores dicts of {"n": size, "h": entropy}

    for idx in eval_indices:
        g1_idx = bot.valid_guess_idxs[idx]
        word = bot.idx_to_guess[g1_idx]

        feedbacks_1 = bot.matrix[g1_idx, active_t_idxs]
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

            n_bucket = int(len(bucket_t_idxs))
            
            # Calculate Shannon Entropy H within this sub-bucket
            p_in_bucket = bucket_weights / (bucket_weight_sum + 1e-12)
            h_bucket = float(-np.sum(p_in_bucket * np.log2(p_in_bucket + 1e-12)))
            h_bucket = max(0.0, round(h_bucket, 4))

            bucket_details.append({"n": n_bucket, "h": h_bucket})

            if f1 == 242:
                turns_needed = 0.0
            elif n_bucket == 1:
                turns_needed = 1.0
            elif n_bucket == 2:
                w_max = np.max(bucket_weights)
                w_min = np.min(bucket_weights)
                turns_needed = 1.0 * (w_max / bucket_weight_sum) + 2.0 * (w_min / bucket_weight_sum)
            else:
                sub_matrix = valid_matrix[:, bucket_t_idxs]

                weights_matrix = np.zeros((V, 243))
                counts_matrix = np.zeros((V, 243), dtype=int)
                w_log_w = bucket_weights * np.log2(bucket_weights + 1e-12)
                w_log_w_matrix = np.zeros((V, 243))

                np.add.at(weights_matrix, (row_indices_full, sub_matrix), bucket_weights)
                np.add.at(counts_matrix, (row_indices_full, sub_matrix), 1)
                np.add.at(w_log_w_matrix, (row_indices_full, sub_matrix), w_log_w)

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

    if scored_guesses:
        best_score = scored_guesses[0]["expected_score"]
        for g in scored_guesses:
            penalty = int(round((g["expected_score"] - best_score) * 100))
            g["skill"] = max(0, 99 - penalty)

    return scored_guesses[:top_n], bucket_details


def run_recording(bot_choice: str = "bot8"):
    """
    bot_choice: 'bot5' (Games 0-1688) or 'bot8' (Games 1689+ / Repeat Era)
    """
    print(f"Initializing Engine and {bot_choice.upper()}...")
    engine = GameEngine()
    
    priors_file = str(PROJECT_ROOT / 'data' / 'priors_reweighted.csv')
    past_answers_file = PROJECT_ROOT / 'data' / 'past_answers.csv'

    if bot_choice.lower() == "bot5":
        output_log_path = PROJECT_ROOT / 'data' / 'bot5_bucket_entropy_log.csv'
    else:
        output_log_path = PROJECT_ROOT / 'data' / 'repeat_era_bucket_entropy_log.csv'

    df_past = pd.read_csv(past_answers_file)
    all_targets = df_past['solution'].tolist()

    # Detect Repeat Era Start
    seen = set()
    repeat_era_start_idx = -1
    for i, w in enumerate(all_targets):
        if w in seen:
            repeat_era_start_idx = i
            break
        seen.add(w)

    # Configure Game Bounds & Bot Instance
    if bot_choice.lower() == "bot5":
        start_game_idx = 0
        end_game_idx = repeat_era_start_idx
        bot = Bot5(
            all_words=list(engine.guess_to_idx.keys()),
            priors_path=priors_file,
            feedback_matrix=engine.feedback_matrix,
            guess_to_idx=engine.guess_to_idx,
            target_to_idx=engine.target_to_idx,
        )
    else:
        start_game_idx = repeat_era_start_idx
        end_game_idx = len(all_targets)
        bot = Bot8(
            all_words=list(engine.guess_to_idx.keys()),
            priors_path=priors_file,
            feedback_matrix=engine.feedback_matrix,
            guess_to_idx=engine.guess_to_idx,
            target_to_idx=engine.target_to_idx,
            starting_repeat_prob=0.10,
            alpha=0.01,
            alpha_g=0.10,
            L=0.1,
            U=1.9,
            initial_g_bar=9.47,
            c_lorentz=100.0
        )

    # Dispatch end_game safely across bot class schemas
    def safe_end_game(target_w, update_ema_flag):
        if isinstance(bot, Bot8):
            bot.end_game(target_w, update_ema=update_ema_flag)
        else:
            bot.end_game(target_w)

    # Pre-warm state prior to starting game
    if start_game_idx > 0:
        print(f"Warming up state through historical games 0 to {start_game_idx - 1}...")
        for i in range(start_game_idx):
            safe_end_game(all_targets[i], update_ema_flag=False)

    # Check for existing logged games
    processed_games = set()
    if output_log_path.exists():
        df_existing = pd.read_csv(output_log_path)
        if not df_existing.empty and 'game_num' in df_existing.columns:
            processed_games = set(df_existing['game_num'].astype(int).tolist())
            print(f"Loaded existing log ({output_log_path.name}). {len(processed_games)} games already recorded.")

    print(f"\nStarting Evaluation for {bot_choice.upper()} (Games {start_game_idx} to {end_game_idx - 1})...")
    print("-" * 105)
    print(f"{'Game #':<8} | {'Target':<8} | {'T2 Pool':<8} | {'Top 3 G2 Choices':<28} | {'Subbuckets':<10} | {'Mean N':<8} | {'Mean H (bits)':<12}")
    print("-" * 105)

    def append_record(record_dict):
        has_content = output_log_path.exists() and output_log_path.stat().st_size > 0
        pd.DataFrame([record_dict]).to_csv(output_log_path, mode='a', header=not has_content, index=False)

    try:
        for game_idx in range(start_game_idx, end_game_idx):
            target_word = all_targets[game_idx]
            if target_word not in engine.target_to_idx:
                continue

            t_idx = engine.target_to_idx[target_word]
            is_in_repeat_era = (game_idx >= repeat_era_start_idx)

            # Sync bot state and skip if already logged
            if game_idx in processed_games:
                bot.reset()
                safe_end_game(target_word, update_ema_flag=is_in_repeat_era)
                continue

            bot.reset()

            # Turn 1: Always SLATE
            slate_idx = engine.guess_to_idx.get("slate", 0)
            slate_fb = engine.feedback_matrix[slate_idx, t_idx]
            
            # Active target set after Turn 1
            active_targets_t2 = [
                w for w in bot.active_targets 
                if engine.feedback_matrix[slate_idx, engine.target_to_idx[w]] == slate_fb
            ]

            # Evaluate G2 choices & log sub-bucket N and H
            top_guesses, bucket_details = evaluate_turn2_buckets(bot, active_targets_t2, top_n=3)
            top_words_str = ", ".join([g['word'] for g in top_guesses]) if top_guesses else "-"
            
            n_evals = len(bucket_details)
            sizes = [b["n"] for b in bucket_details]
            entropies = [b["h"] for b in bucket_details]

            mean_n = round(float(np.mean(sizes)), 2) if sizes else 0.0
            max_n = int(np.max(sizes)) if sizes else 0
            mean_h = round(float(np.mean(entropies)), 4) if entropies else 0.0
            max_h = round(float(np.max(entropies)), 4) if entropies else 0.0

            record = {
                "game_num": game_idx,
                "target": target_word,
                "t2_pool_size": len(active_targets_t2),
                "top_g2_choices": top_words_str,
                "subbuckets_evaluated": n_evals,
                "mean_bucket_size": mean_n,
                "max_bucket_size": max_n,
                "mean_bucket_entropy": mean_h,
                "max_bucket_entropy": max_h,
                "bucket_details_raw": json.dumps(bucket_details)  # Stores list of {"n": size, "h": entropy}
            }
            append_record(record)

            # Finish remainder of actual game to advance bot state accurately
            bot.update_state(slate_idx, slate_fb)
            while True:
                g_idx = bot.get_best_guess()
                g_word = engine.idx_to_guess[g_idx]
                if g_word == target_word:
                    break
                bot.update_state(g_idx, engine.feedback_matrix[g_idx, t_idx])

            safe_end_game(target_word, update_ema_flag=is_in_repeat_era)

            print(
                f"{game_idx:<8} | {target_word:<8} | {len(active_targets_t2):<8} | "
                f"{top_words_str:<28} | {n_evals:<10} | {mean_n:<8} | {mean_h:<12}"
            )

    except KeyboardInterrupt:
        print("\n\nExecution interrupted by user. Saved all progress up to last completed game.")
        return

    print(f"\nComplete! All bucket metrics recorded to {output_log_path.name}.")

if __name__ == "__main__":
    # Change to "bot5" or "bot8"
    run_recording(bot_choice="bot8")