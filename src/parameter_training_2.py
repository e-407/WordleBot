import time
import sys
import pandas as pd
import numpy as np
from pathlib import Path

# Setup paths
PROJECT_ROOT = Path(__file__).resolve().parent.parent if '__file__' in globals() else Path().resolve()
SRC_DIR = PROJECT_ROOT / 'src'
if str(SRC_DIR) not in sys.path:
    sys.path.append(str(SRC_DIR))

from engine import GameEngine
from bot4 import Bot4

def apply_3param_reweighting(
    s_priors: pd.Series,
    stage_1_rank_by_word: pd.Series,
    alpha: float,
    ceil: int,
    beta: float,
) -> pd.Series:
    """Reweight the 1.0-prior words in heuristic frequency-rank order."""
    s_out = s_priors.copy()
    top_mask = np.isclose(s_priors.to_numpy(dtype=float), 1.0)
    top_positions = np.flatnonzero(top_mask)
    n_top = len(top_positions)

    if n_top == 0 or alpha == 0.0:
        return s_out

    top_words = s_priors.index.to_series().iloc[top_positions]
    ranks_for_words = top_words.map(stage_1_rank_by_word)

    if ranks_for_words.isna().any():
        missing = top_words[ranks_for_words.isna()].tolist()
        raise ValueError(
            f"{len(missing)} prior-1 words have no stage_1_rank; "
            f"examples: {missing[:10]}"
        )

    # Lower stage_1_rank means higher heuristic frequency.
    order = np.argsort(ranks_for_words.to_numpy(dtype=float), kind="stable")
    ordered_positions = top_positions[order]

    effective_ceil = min(int(ceil), n_top)
    ranks = np.arange(1, n_top + 1)
    ranked_priors = np.empty(n_top, dtype=float)

    ranked_priors[:effective_ceil] = 1.0 + alpha

    if effective_ceil < n_top:
        tail_ranks = ranks[effective_ceil:]
        norm_tail_pos = (n_top - tail_ranks) / (n_top - effective_ceil)
        ranked_priors[effective_ceil:] = (
            1.0 + alpha * (norm_tail_pos ** beta)
        )

    s_out.iloc[ordered_positions] = ranked_priors
    return s_out

def run_grid_search():
    print("Loading GameEngine (This may take a moment)...")
    engine = GameEngine()
    
    # 1. Load Baseline Priors
    priors_file = PROJECT_ROOT / 'data' / 'priors_4500.csv'
    df_p = pd.read_csv(priors_file, header=None)
    try:
        float(df_p.iloc[0, 1])
    except (ValueError, TypeError):
        df_p = pd.read_csv(priors_file)
        
    base_priors = pd.Series(
        pd.to_numeric(df_p.iloc[:, 1], errors='coerce').fillna(0.0).values,
        index=df_p.iloc[:, 0].astype(str).str.strip().str.lower().values
    )

    heuristics = pd.read_csv(PROJECT_ROOT / "data" / "full_frequency_heuristics.csv")
    heuristics["word"] = heuristics["word"].astype(str).str.strip().str.lower()
    heuristics["stage_1_rank"] = pd.to_numeric(
        heuristics["stage_1_rank"], errors="coerce"
    )
    heuristics = heuristics.dropna(subset=["stage_1_rank"])

    if heuristics["word"].duplicated().any():
        raise ValueError("Duplicate words found in full_frequency_heuristics.csv")

    stage_1_rank_by_word = heuristics.set_index("word")["stage_1_rank"]
    
    # 2. Load and Filter Past Answers (Games 0 to 1291)
    past_answers_file = PROJECT_ROOT / 'data' / 'past_answers.csv'
    df_past = pd.read_csv(past_answers_file)
    df_past['year'] = pd.to_datetime(df_past['date']).dt.year
    
    # Slice first 1292 games
    df_train = df_past.iloc[:1292]
    targets_to_run = df_train['solution'].tolist()
    years_to_run = df_train['year'].tolist()
    unique_years = sorted(list(set(years_to_run)))
    
    total_games = len(targets_to_run)
    print(f"Training on {total_games} games (Indices 0-1291). Test set locked.\n")

    combinations = [(0.0, 0, 1.0)]  # Baseline
    alphas = [2, 4, 6, 8, 10, 12]
    ceils = [0, 250, 500, 750, 1000, 1500, 2110]
    betas = [0.2, 0.5, 1, 1.75, 3, 100]

    combinations.extend(
        (alpha, ceil, beta)
        for alpha in alphas
        for ceil in ceils
        for beta in betas
    )
                
    total_sets = len(combinations)
    print(f"Generated {total_sets} parameter configurations to test.\n" + "-" * 75)
    
    # 4. Evaluation Loop
    results_log = []
    global_start_time = time.time()
    
    for idx, (alpha, ceil, beta) in enumerate(combinations, 1):
        set_start = time.time()
        
        # Apply transformation and construct dictionary
        new_priors_series = apply_3param_reweighting(base_priors, stage_1_rank_by_word, alpha, ceil, beta)
        priors_dict = new_priors_series.to_dict()
        
        # Initialize Bot4 with memory-priors (No disk cache to avoid contamination)
        bot = Bot4(
            all_words=list(engine.guess_to_idx.keys()),
            priors_dict=priors_dict,
            feedback_matrix=engine.feedback_matrix,
            guess_to_idx=engine.guess_to_idx,
            target_to_idx=engine.target_to_idx,
            turn2_cache_path=None 
        )
        
        guess_counts = []
        fails = []
        
        # Run the chronological simulation
        for target_word in targets_to_run:
            bot.reset()
            
            if target_word not in engine.target_to_idx:
                guess_counts.append(7)
                fails.append(1)
                continue
                
            t_idx = engine.target_to_idx[target_word]
            guesses_made = 0
            
            while True:
                guess_idx = bot.get_best_guess()
                guesses_made += 1
                guess_word = engine.idx_to_guess[guess_idx]
                
                if guess_word == target_word:
                    break
                    
                f_code = engine.feedback_matrix[guess_idx, t_idx]
                bot.update_state(guess_idx, f_code)
                
            guess_counts.append(guesses_made)
            fails.append(1 if guesses_made > 6 else 0)
            
            # Fire memory zero-out hook
            bot.end_game(target_word)
            
        # 5. Calculate Statistics for this run
        guess_counts = np.array(guess_counts)
        fails = np.array(fails)
        
        row_data = {
            "alpha": alpha,
            "ceil": ceil,
            "beta": beta,
            "overall_avg": round(np.mean(guess_counts), 5),
            "overall_max": np.max(guess_counts),
            "overall_fails": np.sum(fails)
        }
        
        # Calculate year-by-year splits
        for yr in unique_years:
            yr_mask = np.array(years_to_run) == yr
            yr_counts = guess_counts[yr_mask]
            yr_fails = fails[yr_mask]
            
            row_data[f"{yr}_avg"] = round(np.mean(yr_counts), 5)
            row_data[f"{yr}_max"] = np.max(yr_counts)
            row_data[f"{yr}_fails"] = np.sum(yr_fails)
            
        results_log.append(row_data)
        
        # Print Progress Update
        elapsed = time.time() - set_start
        print(f"[{idx:>2}/{total_sets}] α={alpha:<3} | ceil={ceil:<4} | β={beta:<4} "
              f"--> Avg: {row_data['overall_avg']:.4f} | Max: {row_data['overall_max']} | Fails: {row_data['overall_fails']} "
              f"(took {elapsed:.1f}s)")
              
        # Incrementally save results just in case of an interruption
        df_out = pd.DataFrame(results_log)
        df_out.to_csv(PROJECT_ROOT / 'data' / 'grid_search_results_new_3.csv', index=False)

    total_time = (time.time() - global_start_time) / 60
    print("-" * 75)
    print(f"Grid Search Complete! Evaluated {total_sets} combinations in {total_time:.2f} minutes.")
    print("Results saved to: data/grid_search_results_new_3.csv")

if __name__ == "__main__":
    run_grid_search()