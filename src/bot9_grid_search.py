import os
# Prevent NumPy/OpenBLAS from spawning multiple threads per worker process
os.environ["OMP_NUM_THREADS"] = "1"
os.environ["MKL_NUM_THREADS"] = "1"
os.environ["OPENBLAS_NUM_THREADS"] = "1"
os.environ["VECLIB_MAXIMUM_THREADS"] = "1"
os.environ["NUMEXPR_NUM_THREADS"] = "1"

import sys
import time
import itertools
import pandas as pd
from pathlib import Path
from collections import defaultdict
from concurrent.futures import ProcessPoolExecutor, as_completed

# Setup project paths matching update_bots.py[cite: 4]
PROJECT_ROOT = Path(__file__).resolve().parent.parent if '__file__' in globals() else Path().resolve()
if not (PROJECT_ROOT / 'data').exists() and (Path().resolve() / 'data').exists():
    PROJECT_ROOT = Path().resolve()

SRC_DIR = PROJECT_ROOT / 'src'
if str(SRC_DIR) not in sys.path:
    sys.path.append(str(SRC_DIR))

from engine import GameEngine
from bot9 import Bot9

# 4-Parameter Grid Search (3 x 3 x 3 x 3 = 81 configurations)
TAU_VALUES = [0.8, 0.9, 1.0]
SLOPE1_VALUES = [0.05, 0.10, 0.15]   # H in [0.0, 0.5]
SLOPE2_VALUES = [0.10, 0.15, 0.20]   # H in (0.5, 1.0]
SLOPE3_VALUES = [0.10, 0.15, 0.20]   # H in (1.0, inf)

# Global worker state for multiprocessing
_WORKER_ENGINE = None
_WORKER_PRIORS_DICT = None
_WORKER_ALL_TARGETS = None
_WORKER_REPEAT_START_IDX = None
_WORKER_OUTPUT_DIR = None


def _init_worker(priors_file: str, all_targets: list, repeat_era_start_idx: int, output_dir: str):
    """Initializes heavy read-only matrices once per worker process."""
    global _WORKER_ENGINE, _WORKER_PRIORS_DICT, _WORKER_ALL_TARGETS, _WORKER_REPEAT_START_IDX, _WORKER_OUTPUT_DIR
    _WORKER_ENGINE = GameEngine()
    _WORKER_ALL_TARGETS = all_targets
    _WORKER_REPEAT_START_IDX = repeat_era_start_idx
    _WORKER_OUTPUT_DIR = Path(output_dir)

    df_priors = pd.read_csv(priors_file)
    try:
        float(df_priors.columns[1])
        df_priors = pd.read_csv(priors_file, header=None)
    except (ValueError, TypeError):
        pass
    words = df_priors.iloc[:, 0].astype(str).str.strip().str.lower()
    priors = pd.to_numeric(df_priors.iloc[:, 1], errors='coerce').fillna(0.0)
    _WORKER_PRIORS_DICT = dict(zip(words, priors))


def get_bot_filename(tau: float, s1: float, s2: float, s3: float) -> str:
    return f"bot9_tau{tau:.2f}_s1_{s1:.2f}_s2_{s2:.2f}_s3_{s3:.2f}.csv"


def _solve_from_state(
    bot: Bot9,
    engine: GameEngine,
    t_idx: int,
    target_word: str,
    slope_triplets: list,
    active_targets: list,
    active_targets_15k: list,
    guesses_so_far: list,
) -> list:
    """
    Recursively advances a group of (s1, s2, s3) configs sharing the exact same
    game state (`active_targets` and `guesses_so_far`), branching only when
    configs actually pick different words.
    """
    M = len(slope_triplets)

    if len(active_targets) == 0:
        next_word = bot._get_fallback_guess(active_targets_15k)
        chosen_words = [next_word] * M
    else:
        chosen_words = bot.make_guess_multi_slopes(active_targets, slope_triplets)

    # Failsafe against repeated guesses[cite: 2]
    for m_idx, w in enumerate(chosen_words):
        if w in guesses_so_far:
            for fallback_w in active_targets_15k:
                if fallback_w not in guesses_so_far:
                    chosen_words[m_idx] = fallback_w
                    break

    word_to_member_idxs = defaultdict(list)
    for m_idx, w in enumerate(chosen_words):
        word_to_member_idxs[w].append(m_idx)

    results = [None] * M

    for chosen_word, member_idxs in word_to_member_idxs.items():
        new_guesses = guesses_so_far + [chosen_word]
        if chosen_word == target_word:
            for m_idx in member_idxs:
                results[m_idx] = new_guesses
            continue

        g_idx = engine.guess_to_idx[chosen_word]
        fb = engine.feedback_matrix[g_idx, t_idx]

        next_active = [
            t for t in active_targets
            if bot.matrix[g_idx, bot.target_to_idx[t]] == fb
        ]
        next_active_15k = [
            t for t in active_targets_15k
            if bot.matrix[g_idx, bot.target_to_idx[t]] == fb
        ]

        sub_triplets = [slope_triplets[m_idx] for m_idx in member_idxs]
        sub_results = _solve_from_state(
            bot=bot,
            engine=engine,
            t_idx=t_idx,
            target_word=target_word,
            slope_triplets=sub_triplets,
            active_targets=next_active,
            active_targets_15k=next_active_15k,
            guesses_so_far=new_guesses,
        )

        for local_i, m_idx in enumerate(member_idxs):
            results[m_idx] = sub_results[local_i]

    return results


def evaluate_tau_group(tau: float) -> list:
    """
    Evaluates all 27 (slope1, slope2, slope3) combinations for a single `tau`
    simultaneously in one worker process.
    """
    engine = _WORKER_ENGINE
    all_targets = _WORKER_ALL_TARGETS
    repeat_era_start_idx = _WORKER_REPEAT_START_IDX
    output_dir = _WORKER_OUTPUT_DIR

    slope_triplets = list(itertools.product(SLOPE1_VALUES, SLOPE2_VALUES, SLOPE3_VALUES))
    M = len(slope_triplets)

    file_paths = [output_dir / get_bot_filename(tau, s1, s2, s3) for (s1, s2, s3) in slope_triplets]

    # Resume safety per file[cite: 4]
    start_indices = []
    for fp in file_paths:
        s_idx = repeat_era_start_idx
        if fp.exists():
            df_ex = pd.read_csv(fp)
            if not df_ex.empty and 'game_num' in df_ex.columns:
                s_idx = int(df_ex['game_num'].max()) + 1
        start_indices.append(s_idx)

    min_start_idx = min(start_indices)

    bot = Bot9(
        all_words=list(engine.guess_to_idx.keys()),
        priors_dict=_WORKER_PRIORS_DICT,
        feedback_matrix=engine.feedback_matrix,
        guess_to_idx=engine.guess_to_idx,
        target_to_idx=engine.target_to_idx,
        tau=tau,
        slope1=slope_triplets[0][0],
        slope2=slope_triplets[0][1],
        slope3=slope_triplets[0][2],
    )

    # Warm up bot state up to min_start_idx[cite: 4]
    for i in range(min_start_idx):
        word = all_targets[i]
        is_in_repeat_era = (i >= repeat_era_start_idx)
        bot.end_game(word, update_ema=is_in_repeat_era)

    t0 = time.time()
    total_to_play = len(all_targets) - min_start_idx
    tau_tag = f"[Tau={tau:.2f} | {M} slope configs]"

    if total_to_play <= 0:
        print(f"{tau_tag} All {M} bots already complete on disk!", flush=True)
    else:
        print(f"{tau_tag} Starting from Game #{min_start_idx} ({total_to_play} games left)...", flush=True)

    games_done = 0

    for game_idx in range(min_start_idx, len(all_targets)):
        target_word = all_targets[game_idx]
        if target_word not in engine.target_to_idx:
            continue

        t_idx = engine.target_to_idx[target_word]
        is_in_repeat_era = (game_idx >= repeat_era_start_idx)

        active_m_idxs = [m for m in range(M) if game_idx >= start_indices[m]]

        if active_m_idxs:
            bot.reset()
            gap_before = bot.days_since_last
            gbar_before = bot.g_bar

            # Turn 1 is always "slate"[cite: 2]
            g1_idx = bot.guess_to_idx.get("slate", 0)
            g1_word = engine.idx_to_guess[g1_idx]

            if g1_word == target_word:
                all_guess_lists = [[g1_word] for _ in active_m_idxs]
            else:
                fb1 = engine.feedback_matrix[g1_idx, t_idx]
                bot.update_state(g1_idx, fb1)

                active_triplets = [slope_triplets[m] for m in active_m_idxs]
                all_guess_lists = _solve_from_state(
                    bot=bot,
                    engine=engine,
                    t_idx=t_idx,
                    target_word=target_word,
                    slope_triplets=active_triplets,
                    active_targets=list(bot.active_targets),
                    active_targets_15k=list(bot.active_targets_15k),
                    guesses_so_far=[g1_word],
                )

            is_rep, new_prob = bot.end_game(target_word, update_ema=is_in_repeat_era)

            for local_i, m_idx in enumerate(active_m_idxs):
                guesses = all_guess_lists[local_i]
                fp = file_paths[m_idx]
                row_dict = {
                    "game_num": game_idx,
                    "target": target_word,
                    "guesses": "-".join(guesses),
                    "guess_count": len(guesses),
                    "failed": len(guesses) > 6,
                    "is_repeat": is_rep,
                    "days_since_last": gap_before,
                    "g_bar": round(gbar_before, 2),
                    "base_ema_prob": round(bot.repeat_prob, 6),
                    "adjusted_prob": round(new_prob, 6),
                }
                has_content = fp.exists() and fp.stat().st_size > 0
                pd.DataFrame([row_dict]).to_csv(fp, mode='a', header=not has_content, index=False)
        else:
            bot.end_game(target_word, update_ema=is_in_repeat_era)

        games_done += 1
        if games_done % 25 == 0 or game_idx == len(all_targets) - 1:
            elapsed_so_far = time.time() - t0
            rate = games_done / max(elapsed_so_far, 1e-6)
            rem = total_to_play - games_done
            eta_m = (rem / rate) / 60.0
            print(
                f"  -> {tau_tag} Game {game_idx}/{len(all_targets)-1} "
                f"({games_done}/{total_to_play}) | Elapsed: {elapsed_so_far/60.0:.1f}m | Group ETA: {eta_m:.1f}m",
                flush=True
            )

        time.sleep(0.02)

    elapsed_group = time.time() - t0
    group_summaries = []

    for m_idx, (s1, s2, s3) in enumerate(slope_triplets):
        fp = file_paths[m_idx]
        df_final = pd.read_csv(fp)
        mean_guesses = float(df_final['guess_count'].mean())
        fail_count = int(df_final['failed'].sum())
        repeat_subset = df_final[df_final['is_repeat'] == True]
        mean_repeat_guesses = float(repeat_subset['guess_count'].mean()) if not repeat_subset.empty else 0.0

        group_summaries.append({
            "tau": tau,
            "slope1": s1,
            "slope2": s2,
            "slope3": s3,
            "games_played": len(df_final),
            "avg_guesses": round(mean_guesses, 5),
            "avg_repeat_guesses": round(mean_repeat_guesses, 5),
            "failures": fail_count,
            "runtime_sec": round(elapsed_group, 1),
            "results_file": fp.name,
        })

    return group_summaries


def run_grid_search(max_workers: int = 3):
    priors_file = str(PROJECT_ROOT / 'data' / 'priors_reweighted.csv')
    past_answers_file = PROJECT_ROOT / 'data' / 'past_answers.csv'
    output_dir = PROJECT_ROOT / 'data' / 'bot9_grid_search_v4'
    output_dir.mkdir(parents=True, exist_ok=True)

    if not past_answers_file.exists():
        print(f"Error: Could not find {past_answers_file}")
        return

    df_past = pd.read_csv(past_answers_file)
    all_targets = df_past['solution'].tolist()

    seen = set()
    repeat_era_start_idx = -1
    for i, w in enumerate(all_targets):
        if w in seen:
            repeat_era_start_idx = i
            break
        seen.add(w)

    total_repeat_era_games = len(all_targets) - repeat_era_start_idx
    total_configs = len(TAU_VALUES) * len(SLOPE1_VALUES) * len(SLOPE2_VALUES) * len(SLOPE3_VALUES)

    print("================================================================================")
    print(f"Bot 9 3-Slope Grid Search | {total_configs} Configurations ({len(TAU_VALUES)} Tau Groups of 27)")
    print(f"Repeat Era Start: Game #{repeat_era_start_idx} | Games per Bot: {total_repeat_era_games} | Workers: {max_workers}")
    print(f"Output Directory: {output_dir}")
    print("================================================================================\n")

    start_time = time.time()
    summary_rows = []

    with ProcessPoolExecutor(
        max_workers=max_workers,
        initializer=_init_worker,
        initargs=(priors_file, all_targets, repeat_era_start_idx, str(output_dir))
    ) as executor:
        future_to_tau = {executor.submit(evaluate_tau_group, tau): tau for tau in TAU_VALUES}

        for future in as_completed(future_to_tau):
            tau_val = future_to_tau[future]
            group_res = future.result()
            summary_rows.extend(group_res)
            best_in_tau = min(group_res, key=lambda x: x["avg_guesses"])
            print(
                f"\n✓ Completed Tau={tau_val:.2f} Group (27 bots) in {best_in_tau['runtime_sec']/60.0:.1f}m! "
                f"Best in group: s1={best_in_tau['slope1']:.2f}, s2={best_in_tau['slope2']:.2f}, s3={best_in_tau['slope3']:.2f} "
                f"--> Avg: {best_in_tau['avg_guesses']:.4f}\n",
                flush=True
            )

    df_summary = pd.DataFrame(summary_rows).sort_values(by=["avg_guesses", "failures"]).reset_index(drop=True)
    summary_path = output_dir / "grid_search_summary.csv"
    df_summary.to_csv(summary_path, index=False)

    print("\n================================================================================")
    print("TOP 20 CONFIGURATIONS:")
    print("================================================================================")
    print(df_summary.head(20).to_string(index=False))
    print(f"\nTotal Wall-Clock Time: {(time.time() - start_time)/60.0:.1f} minutes")
    print(f"Saved full leaderboard to: {summary_path}")


if __name__ == "__main__":
    # Exactly 3 Tau groups (0.8, 0.9, 1.0), so max_workers=3 runs all 81 bots in one wave!
    run_grid_search(max_workers=3)