import sys
import time
import pandas as pd
import numpy as np
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parent.parent if '__file__' in globals() else Path().resolve()
SRC_DIR = PROJECT_ROOT / 'src'
if str(SRC_DIR) not in sys.path:
    sys.path.append(str(SRC_DIR))

from engine import GameEngine
from bot4 import Bot4 as ActiveBot

def apply_reweighting_and_thresholding(s_priors: pd.Series, alpha: float, ceil: int, beta: float) -> pd.Series:
    s_out = s_priors.copy()
    top_mask = np.isclose(s_priors, 1.0)
    n_top = int(top_mask.sum())
    
    # 1. Apply Top-Tier Boost (if not baseline)
    if n_top > 0 and alpha > 0.0:
        ranks = np.arange(1, n_top + 1)
        ceil = int(min(ceil, n_top))
        
        priors_top = np.empty(n_top)
        priors_top[:ceil] = 1.0 + alpha
        
        if ceil < n_top:
            tail_ranks = ranks[ceil:]
            norm_tail_pos = (n_top - tail_ranks) / (n_top - ceil)
            priors_top[ceil:] = 1.0 + alpha * (norm_tail_pos ** beta)
            
        s_out.iloc[np.where(top_mask)[0]] = priors_top
        
    # 2. EXPERIMENT: Threshold bottom priors
    # s_out[s_out <= 0.004] = 0.001
    
    return s_out

def run_weighted_evaluations():
    print("Initializing Engine...")
    engine = GameEngine()
    
    priors_file = PROJECT_ROOT / 'data' / 'priors_4500.csv'
    past_answers_file = PROJECT_ROOT / 'data' / 'past_answers.csv'
    output_csv = PROJECT_ROOT / 'data' / 'experiment_1688_weighted_results_2.csv'
    
    if not past_answers_file.exists():
        print(f"Error: Could not find {past_answers_file}")
        return

    # Load Base Priors
    df_p = pd.read_csv(priors_file, header=None)
    try:
        float(df_p.iloc[0, 1])
    except (ValueError, TypeError):
        df_p = pd.read_csv(priors_file)
        
    base_priors = pd.Series(
        pd.to_numeric(df_p.iloc[:, 1], errors='coerce').fillna(0.0).values,
        index=df_p.iloc[:, 0].astype(str).str.strip().str.lower().values
    )

    # Load Past Answers and limit to exactly 1688 games
    df_past = pd.read_csv(past_answers_file)
    df_past['year'] = pd.to_datetime(df_past['date']).dt.year
    df_past = df_past.head(1688).copy()
    
    targets_to_run = df_past['solution'].tolist()
    years = df_past['year'].tolist()
    
    combinations = [
        (0.00, 0, 1.00),     
        (1.25, 1000, 0.15),
        (1.25, 750, 0.15),
        (1.25, 1500, 0.45),
        (1.25, 1750, 0.30),
        (1.25, 1750, 0.45),
        (1.25, 1750, 0.60),
        (1.00, 750, 0.15),
        (1.25, 500, 0.15),
        (1.50, 500, 0.15),
        (1.50, 750, 0.15),
    ]
    
    global_start = time.time()
    baseline_metrics = {}
    csv_log = []
    
    # Weights for selection metric
    W_25_26 = 0.50
    W_24 = 0.25
    W_23 = 0.15
    W_PRE23 = 0.10

    for idx, (alpha, ceil, beta) in enumerate(combinations, 1):
        config_name = "BASELINE (w/ Threshold)" if alpha == 0 else f"α={alpha}, c={ceil}, β={beta}"
        print(f"\n{'='*95}\n[{idx}/{len(combinations)}] Testing Config: {config_name}\n{'='*95}")
        
        new_priors = apply_reweighting_and_thresholding(base_priors, alpha, ceil, beta)
        
        bot = ActiveBot(
            all_words=list(engine.guess_to_idx.keys()),
            priors_path=None,
            priors_dict=new_priors.to_dict(),
            feedback_matrix=engine.feedback_matrix,
            guess_to_idx=engine.guess_to_idx,
            target_to_idx=engine.target_to_idx,
            turn2_cache_path=None 
        )
        
        results = []
        
        for game_idx, (target_word, year) in enumerate(zip(targets_to_run, years), 1):
            bot.reset()
            
            if target_word not in engine.target_to_idx:
                continue
                
            t_idx = engine.target_to_idx[target_word]
            guesses_made = []
            
            while True:
                guess_idx = bot.get_best_guess()
                guess_word = engine.idx_to_guess[guess_idx]
                guesses_made.append(guess_word)
                
                if guess_word == target_word:
                    break
                    
                f_code = engine.feedback_matrix[guess_idx, t_idx]
                bot.update_state(guess_idx, f_code)
                
            guess_count = len(guesses_made)
            results.append({
                "year": year,
                "guess_count": guess_count,
                "failed": guess_count > 6
            })
            
            if hasattr(bot, 'end_game'):
                bot.end_game(target_word)
                
        df_results = pd.DataFrame(results)
        
        # Categorize periods
        df_results['period'] = df_results['year'].apply(
            lambda y: '2025-26' if y >= 2025 else (str(y) if y in [2023, 2024] else 'Pre-2023')
        )
        
        # Calculate group stats
        group_stats = {}
        
        # Single years
        for yr in df_results['year'].unique():
            group_stats[str(yr)] = df_results[df_results['year'] == yr]['guess_count'].mean()
            
        # Periods
        for period in ['Pre-2023', '2023', '2024', '2025-26']:
            mask = df_results['period'] == period
            group_stats[period] = df_results[mask]['guess_count'].mean() if mask.any() else 0.0
            
        # Compute Weighted Average
        weighted_avg = (
            (group_stats['2025-26'] * W_25_26) +
            (group_stats['2024'] * W_24) +
            (group_stats['2023'] * W_23) +
            (group_stats['Pre-2023'] * W_PRE23)
        )
        group_stats['Weighted_Metric'] = weighted_avg
        
        # Store baseline for comparison
        if idx == 1:
            baseline_metrics = group_stats.copy()
            
        # Display Results
        print(f"{'Split':<15} | {'Total':<6} | {'Avg_Guesses':<12} | {'Diff_to_Base':<12} | {'Max':<5} | {'Fails':<6}")
        print("-" * 95)
        
        # Print Individual Years
        for year in sorted(df_results['year'].unique()):
            group = df_results[df_results['year'] == year]
            avg_g = group['guess_count'].mean()
            diff = avg_g - baseline_metrics[str(year)]
            diff_str = f"{diff:+.4f}" if idx > 1 else "-"
            print(f"Year {year:<10} | {len(group):<6} | {avg_g:<12.4f} | {diff_str:<12} | {group['guess_count'].max():<5} | {group['failed'].sum():<6}")
            
        print("-" * 95)
        
        # Print Combined 2025-26
        combo_25_26 = df_results[df_results['period'] == '2025-26']
        avg_25_26 = group_stats['2025-26']
        diff_25_26 = avg_25_26 - baseline_metrics['2025-26']
        diff_str_25_26 = f"{diff_25_26:+.4f}" if idx > 1 else "-"
        print(f"{'2025-26 (Comb)':<15} | {len(combo_25_26):<6} | {avg_25_26:<12.4f} | {diff_str_25_26:<12} | {combo_25_26['guess_count'].max():<5} | {combo_25_26['failed'].sum():<6}")
        
        # Print Overall and Weighted Metric
        o_avg = df_results['guess_count'].mean()
        o_diff = o_avg - df_results['guess_count'].mean() if idx == 1 else o_avg - baseline_metrics.get('Overall_Raw', o_avg)
        if idx == 1: baseline_metrics['Overall_Raw'] = o_avg
        
        w_diff = weighted_avg - baseline_metrics['Weighted_Metric']
        w_diff_str = f"{w_diff:+.4f}" if idx > 1 else "-"
        
        print("-" * 95)
        print(f"{'Raw Overall':<15} | {len(df_results):<6} | {o_avg:<12.4f} | {f'{o_diff:+.4f}' if idx > 1 else '-':<12} | {df_results['guess_count'].max():<5} | {df_results['failed'].sum():<6}")
        print(f"{'WEIGHTED METRIC':<15} | {'-':<6} | {weighted_avg:<12.4f} | {w_diff_str:<12} | {'-':<5} | {'-':<6}")
        
        # Save to CSV log
        csv_log.append({
            "Config": config_name,
            "Alpha": alpha, "Ceil": ceil, "Beta": beta,
            "Weighted_Metric": round(weighted_avg, 4),
            "Diff_to_Base": round(w_diff, 4),
            "Avg_2025_26": round(avg_25_26, 4),
            "Avg_2024": round(group_stats['2024'], 4),
            "Avg_2023": round(group_stats['2023'], 4),
            "Avg_Pre2023": round(group_stats['Pre-2023'], 4),
            "Overall_Avg": round(o_avg, 4),
            "Total_Fails": df_results['failed'].sum()
        })

    # Save all output arrays to file
    df_export = pd.DataFrame(csv_log)
    df_export.to_csv(output_csv, index=False)
    print(f"\nAll holdout tests completed in {(time.time() - global_start)/60:.2f} minutes.")
    print(f"Results successfully saved to: {output_csv}")

if __name__ == "__main__":
    run_weighted_evaluations()