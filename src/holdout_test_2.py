import sys
import time
from pathlib import Path

import numpy as np
import pandas as pd


PROJECT_ROOT = Path(__file__).resolve().parent.parent
SRC_DIR = PROJECT_ROOT / "src"
if str(SRC_DIR) not in sys.path:
    sys.path.insert(0, str(SRC_DIR))

from engine import GameEngine
from bot4 import Bot4


PRIORS_PATH = PROJECT_ROOT / "data" / "priors_4500.csv"
RANKINGS_PATH = PROJECT_ROOT / "data" / "full_frequency_heuristics.csv"
PAST_ANSWERS_PATH = PROJECT_ROOT / "data" / "past_answers.csv"
GRID_RESULTS_PATH = PROJECT_ROOT / "data" / "grid_search_results_new_3.csv"
OUTPUT_PATH = PROJECT_ROOT / "data" / "holdout_test_results_2.csv"

TRAIN_END = 1292
HOLDOUT_END = 1689  # Exclusive; tests indices 1292 through 1688.
TOP_N_PER_ALPHA = 5
MAX_GUESSES = 6


def load_priors(path: Path) -> pd.Series:
    """Load a word/prior CSV with or without a header."""
    raw = pd.read_csv(path, header=None)

    try:
        float(raw.iloc[0, 1])
        data = raw.iloc[:, :2].copy()
    except (ValueError, TypeError):
        data = pd.read_csv(path).iloc[:, :2].copy()

    data.columns = ["word", "prior"]
    data["word"] = data["word"].astype(str).str.strip().str.lower()
    data["prior"] = pd.to_numeric(data["prior"], errors="coerce").fillna(0.0)

    if data["word"].duplicated().any():
        raise ValueError(f"Duplicate words found in {path}")

    return pd.Series(data["prior"].to_numpy(), index=data["word"])


def load_rankings(path: Path) -> pd.Series:
    """Return a word -> stage_1_rank mapping."""
    heuristics = pd.read_csv(path)
    required = {"word", "stage_1_rank"}

    if not required.issubset(heuristics.columns):
        raise ValueError(
            f"{path} must contain columns: {', '.join(sorted(required))}"
        )

    heuristics["word"] = (
        heuristics["word"].astype(str).str.strip().str.lower()
    )
    heuristics["stage_1_rank"] = pd.to_numeric(
        heuristics["stage_1_rank"], errors="coerce"
    )
    heuristics = heuristics.dropna(subset=["stage_1_rank"])

    if heuristics["word"].duplicated().any():
        raise ValueError(f"Duplicate words found in {path}")

    return heuristics.set_index("word")["stage_1_rank"]


def reweight_priors(
    base_priors: pd.Series,
    rank_by_word: pd.Series,
    alpha: float,
    ceil: int,
    beta: float,
) -> pd.Series:
    """Apply the curve to prior-1 words ordered by ascending frequency rank."""
    result = base_priors.copy()
    top_positions = np.flatnonzero(
        np.isclose(base_priors.to_numpy(dtype=float), 1.0)
    )
    n_top = len(top_positions)

    if n_top == 0 or alpha == 0.0:
        return result

    top_words = pd.Index(base_priors.index.to_numpy()[top_positions])
    top_ranks = rank_by_word.reindex(top_words)

    if top_ranks.isna().any():
        missing = top_words[top_ranks.isna().to_numpy()].tolist()
        raise ValueError(
            f"{len(missing)} prior-1 words lack stage_1_rank; "
            f"examples: {missing[:10]}"
        )

    # Rank 1 is most frequent and receives the first curve weight.
    order = np.argsort(top_ranks.to_numpy(dtype=float), kind="stable")
    ordered_positions = top_positions[order]

    effective_ceil = min(int(ceil), n_top)
    ranks = np.arange(1, n_top + 1)
    curve_priors = np.empty(n_top, dtype=float)
    curve_priors[:effective_ceil] = 1.0 + alpha

    if effective_ceil < n_top:
        tail_ranks = ranks[effective_ceil:]
        normalized_tail = (n_top - tail_ranks) / (n_top - effective_ceil)
        curve_priors[effective_ceil:] = (
            1.0 + alpha * normalized_tail**beta
        )

    result.iloc[ordered_positions] = curve_priors
    return result


def load_candidates(path: Path, top_n_per_alpha: int) -> list[dict]:
    results = pd.read_csv(path)
    required = {"alpha", "ceil", "beta", "overall_avg", "2023_avg", "2024_avg"}

    if not required.issubset(results.columns):
        raise ValueError(
            f"{path} must contain columns: {', '.join(sorted(required))}"
        )

    # 1. Drop missing data and filter out high alphas
    results = results.dropna(subset=list(required)).copy()
    results = results[results["alpha"] <= 8.0]
    
    # 2. Custom composite scoring to balance overall average with recency weighting
    results["composite_score"] = (
        results["overall_avg"] + results["2023_avg"] + results["2024_avg"] * 2
    )
    
    # 3. Sort by score and drop duplicate parameter sets
    results = results.sort_values("composite_score", kind="stable")
    results = results.drop_duplicates(
        subset=["alpha", "ceil", "beta"], keep="first"
    )

    # 4. Group by alpha, take the top N per group, then sort for clean output
    top_rows = results.groupby("alpha").head(top_n_per_alpha)
    top_rows = top_rows.sort_values(["alpha", "composite_score"], kind="stable")

    if top_rows.empty:
        raise ValueError("No candidate sets found for alphas <= 8.0.")

    candidates = []
    for _, row in top_rows.iterrows():
        candidates.append({
            "alpha": float(row["alpha"]),
            "ceil": int(row["ceil"]),
            "beta": float(row["beta"]),
            "grid_train_avg": float(row["overall_avg"]),
            "is_control": False,
        })

    # Include the unmodified-prior baseline as a separate control.
    # Read fresh from the CSV in case alpha=0.0 was filtered out by the top_n logic
    raw_results = pd.read_csv(path)
    baseline_rows = raw_results[np.isclose(raw_results["alpha"].astype(float), 0.0)]
    
    if baseline_rows.empty:
        raise ValueError(
            "No alpha=0 baseline row in grid_search_results_new_3.csv; "
            "cannot report the control's stored training average."
        )

    baseline = baseline_rows.iloc[0]
    control = {
        "alpha": float(baseline["alpha"]),
        "ceil": int(baseline["ceil"]),
        "beta": float(baseline["beta"]),
        "grid_train_avg": float(baseline["overall_avg"]),
        "is_control": True,
    }

    baseline_key = (control["alpha"], control["ceil"], control["beta"])
    existing_index = next(
        (
            i for i, candidate in enumerate(candidates)
            if (
                candidate["alpha"],
                candidate["ceil"],
                candidate["beta"],
            ) == baseline_key
        ),
        None,
    )

    if existing_index is None:
        candidates.append(control)
    else:
        candidates[existing_index]["is_control"] = True

    return candidates

def make_bot(
    engine: GameEngine,
    base_priors: pd.Series,
    rank_by_word: pd.Series,
    alpha: float,
    ceil: int,
    beta: float,
) -> Bot4:
    weighted_priors = reweight_priors(
        base_priors, rank_by_word, alpha, ceil, beta
    )

    return Bot4(
        all_words=list(engine.guess_to_idx.keys()),
        priors_dict=weighted_priors.to_dict(),
        feedback_matrix=engine.feedback_matrix,
        guess_to_idx=engine.guess_to_idx,
        target_to_idx=engine.target_to_idx,
        turn2_cache_path=None,
    )


def seed_bot_memory(bot: Bot4, historical_targets: list[str]) -> None:
    """Apply historical answer-memory updates without simulating their games."""
    for game_index, target in enumerate(historical_targets):
        if target not in bot.target_to_idx:
            raise ValueError(
                f"Historical target {target!r} at index {game_index} "
                "is missing from the engine."
            )

        # Reproduce the per-game reset/end_game memory-update sequence.
        bot.reset()
        bot.end_game(target)


def evaluate_holdout(
    engine: GameEngine,
    base_priors: pd.Series,
    rank_by_word: pd.Series,
    all_targets: list[str],
    alpha: float,
    ceil: int,
    beta: float,
) -> dict:
    bot = make_bot(
        engine, base_priors, rank_by_word, alpha, ceil, beta
    )

    seed_start = time.perf_counter()
    seed_bot_memory(bot, all_targets[:TRAIN_END])
    seed_seconds = time.perf_counter() - seed_start

    holdout_targets = all_targets[TRAIN_END:HOLDOUT_END]
    
    scores = []
    scores_2025 = []
    failures = 0

    simulation_start = time.perf_counter()

    for game_index, target in enumerate(holdout_targets, start=TRAIN_END):
        if target not in engine.target_to_idx:
            raise ValueError(
                f"Holdout target {target!r} at index {game_index} "
                "is missing from the engine."
            )

        bot.reset()
        target_idx = engine.target_to_idx[target]
        guesses = 0
        solved = False

        while guesses < MAX_GUESSES:
            guess_idx = bot.get_best_guess()
            guess_word = bot.idx_to_guess[guess_idx]
            guesses += 1

            if guess_word == target:
                solved = True
                break

            feedback = int(engine.feedback_matrix[guess_idx, target_idx])
            bot.update_state(guess_idx, feedback)

        # Keep Bot 4's memory current for subsequent holdout games.
        bot.end_game(target)

        score = guesses if solved else MAX_GUESSES + 1
        failures += int(not solved)
        scores.append(score)
        
        # Track 2025 dates distinctively (games 1292 -> 1656)
        if 1292 <= game_index <= 1656:
            scores_2025.append(score)

    simulation_seconds = time.perf_counter() - simulation_start

    expected_holdout_count = HOLDOUT_END - TRAIN_END
    if len(scores) != expected_holdout_count:
        raise ValueError(
            f"Expected {expected_holdout_count} holdout games, got {len(scores)}."
        )

    return {
        "holdout_avg": float(np.mean(scores)),
        "avg_2025": float(np.mean(scores_2025)) if scores_2025 else 0.0,
        "holdout_fails": failures,
        "holdout_max": int(np.max(scores)),
        "memory_seed_seconds": seed_seconds,
        "holdout_simulation_seconds": simulation_seconds,
    }


def main() -> None:
    required_paths = (
        PRIORS_PATH,
        RANKINGS_PATH,
        PAST_ANSWERS_PATH,
        GRID_RESULTS_PATH,
    )
    for path in required_paths:
        if not path.exists():
            raise FileNotFoundError(f"Required file not found: {path}")

    print("Loading engine and input data...")
    engine = GameEngine()
    base_priors = load_priors(PRIORS_PATH)
    rank_by_word = load_rankings(RANKINGS_PATH)
    candidates = load_candidates(GRID_RESULTS_PATH, TOP_N_PER_ALPHA)

    past = pd.read_csv(PAST_ANSWERS_PATH)
    past["solution"] = (
        past["solution"].astype(str).str.strip().str.lower()
    )

    if len(past) < HOLDOUT_END:
        raise ValueError(
            f"past_answers.csv has {len(past)} rows; "
            f"{HOLDOUT_END} are required."
        )

    all_targets = past["solution"].iloc[:HOLDOUT_END].tolist()

    print(
        f"Using stored training averages from grid_search_results_new_3.csv. "
        f"Testing games {TRAIN_END}–{HOLDOUT_END - 1} "
        f"({HOLDOUT_END - TRAIN_END} games)."
    )
    print(
        "Each Bot 4 instance is seeded with games 0–1291 via reset/end_game; "
        "those games are not simulated.\n"
    )

    summaries = []

    for i, candidate in enumerate(candidates, start=1):
        alpha = candidate["alpha"]
        ceil = candidate["ceil"]
        beta = candidate["beta"]
        label = "CONTROL" if candidate["is_control"] else f"TOP {TOP_N_PER_ALPHA} PER ALPHA"

        print(
            f"[{i}/{len(candidates)}] {label}: "
            f"alpha={alpha:g}, ceil={ceil}, beta={beta:g}"
        )

        scores = evaluate_holdout(
            engine=engine,
            base_priors=base_priors,
            rank_by_word=rank_by_word,
            all_targets=all_targets,
            alpha=alpha,
            ceil=ceil,
            beta=beta,
        )

        summary = {
            "label": label,
            "alpha": alpha,
            "ceil": ceil,
            "beta": beta,
            "stored_train_avg_games_0_1291": candidate["grid_train_avg"],
            **scores,
        }
        summaries.append(summary)

        print(
            f"  Stored avg 0–1291: {candidate['grid_train_avg']:.5f} | "
            f"2025 avg: {scores['avg_2025']:.5f} | "
            f"Holdout avg: {scores['holdout_avg']:.5f} | "
            f"Fails: {scores['holdout_fails']} | "
            f"Holdout simulation: "
            f"{scores['holdout_simulation_seconds']:.2f}s "
            f"(memory seeding: {scores['memory_seed_seconds']:.2f}s)\n"
        )

        # Save partial progress after every candidate.
        pd.DataFrame(summaries).to_csv(OUTPUT_PATH, index=False)

    print(f"Results saved to: {OUTPUT_PATH}")


if __name__ == "__main__":
    main()