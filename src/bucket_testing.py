import sys
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
from bot8 import Bot8

# -----------------------------------------------------------------------------
# Helper Functions
# -----------------------------------------------------------------------------

def calculate_bucket_stats_vectorized(weights):
    """Calculates size, effective size, and entropy of a bucket."""
    raw_size = len(weights)
    if raw_size == 0:
        return 0, 0, 0.0
        
    total_weight = np.sum(weights)
    if total_weight <= 0:
        return raw_size, raw_size, 0.0
        
    probs = weights / total_weight
    
    sorted_probs = np.sort(probs)[::-1]
    cumulative_probs = np.cumsum(sorted_probs)
    eff_size = int(np.argmax(cumulative_probs >= 0.99)) + 1
    
    valid_probs = probs[probs > 0]
    entropy = -np.sum(valid_probs * np.log2(valid_probs))
    
    return raw_size, eff_size, entropy

def simulate_bucket_true_cost(engine, bot, sub_bucket, priors_dict):
    """
    Finds the absolute true expected cost by letting Bot 8 play out the game 
    for every possible target word in the sub-bucket, then taking the weighted average.
    """
    weights = np.array([priors_dict.get(w, 1e-9) for w in sub_bucket])
    probs = weights / np.sum(weights)
    
    expected_turns = 0.0
    
    # Simulate the game for each possible target in this sub-bucket
    for i, target in enumerate(sub_bucket):
        pool = list(sub_bucket)
        turns_taken = 0
        
        while True:
            turns_taken += 1
            
            # Use identical logic to Bot 8's small bucket handling
            if len(pool) == 1:
                guess = pool[0]
            elif len(pool) == 2:
                guess = max(pool, key=lambda w: priors_dict.get(w, 0))
            else:
                # Call Bot 8's core decision maker directly on the active pool
                guess = bot.make_guess(pool)
                    
            if guess == target:
                break
                
            # Filter the pool for the next simulation turn
            g_idx = engine.guess_to_idx[guess]
            t_idx = engine.target_to_idx[target]
            fb = engine.feedback_matrix[g_idx, t_idx]
            
            pool = [w for w in pool if engine.feedback_matrix[g_idx, engine.target_to_idx[w]] == fb]
            
        # Add the weighted turns to the expected total
        expected_turns += probs[i] * turns_taken
        
    return expected_turns

# -----------------------------------------------------------------------------
# Main Profiling Script
# -----------------------------------------------------------------------------

def run_on_path_profiler():
    print("Initializing Engine for Live Chronological Profiling by Passes...")
    engine = GameEngine()
    
    priors_file = str(PROJECT_ROOT / 'data' / 'priors_reweighted.csv')
    past_answers_file = PROJECT_ROOT / 'data' / 'past_answers.csv'
    results_file = PROJECT_ROOT / 'data' / 'bot8_chronological_results.csv'
    output_file = PROJECT_ROOT / 'data' / 'synthetic_bucket_data.csv'
    
    output_file.parent.mkdir(parents=True, exist_ok=True)

    # Load existing evaluated buckets to allow resuming
    evaluated_buckets = set()
    if output_file.exists():
        try:
            df_existing = pd.read_csv(output_file)
            if not df_existing.empty and 'game_num' in df_existing.columns and 'bucket_raw_size' in df_existing.columns:
                evaluated_buckets = set(zip(df_existing['game_num'], df_existing['bucket_raw_size']))
        except pd.errors.EmptyDataError:
            pass

    # Load targets and past results
    df_past = pd.read_csv(past_answers_file)
    all_targets = df_past['solution'].tolist()
    
    df_results = pd.read_csv(results_file)
    # Map games for O(1) lookup
    repeat_games_dict = {row['game_num']: row for row in df_results.to_dict('records')}

    # Define Size Passes
    size_passes = [(4, 6), (7, 10)] + [(i, i+4) for i in range(11, 101, 5)]
    total_records_saved = 0

    print(f"\n[Profiling] Running chronological evaluation (Ctrl+C to stop)...")
    
    try:
        for min_sz, max_sz in size_passes:
            pass_label = f"{min_sz}-{max_sz}"
            print(f"\n{'='*60}")
            print(f"⏱️ STARTING PASS: Size {pass_label}")
            print(f"{'='*60}")
            
            # Spin up a fresh bot for each pass so it can play through chronologically
            bot = Bot8(
                all_words=list(engine.guess_to_idx.keys()), 
                priors_path=priors_file,
                feedback_matrix=engine.feedback_matrix, 
                guess_to_idx=engine.guess_to_idx, 
                target_to_idx=engine.target_to_idx
            )
            
            # Play through history chronologically
            for game_idx, target_word in enumerate(all_targets):
                
                # If this is a repeat era game, check its on-path buckets
                if game_idx in repeat_games_dict:
                    row = repeat_games_dict[game_idx]
                    known_guesses = row['guesses'].split('-')
                    
                    bot_priors = getattr(bot, 'current_priors', getattr(bot, 'priors', None))
                    t_idx = engine.target_to_idx[target_word]
                    
                    active_pool = [w for w in engine.target_to_idx.keys() if bot_priors.get(w, 0) > 0]
                    
                    for turn_zero_idx, guess in enumerate(known_guesses):
                        turn = turn_zero_idx + 1
                        raw_size = len(active_pool)
                        
                        # Only evaluate if it falls in the CURRENT pass
                        if min_sz <= raw_size <= max_sz:
                            # SKIP if already computed in a previous run
                            if (game_idx, raw_size) in evaluated_buckets:
                                continue

                            weights = np.array([bot_priors.get(w, 0) for w in active_pool])
                            _, eff_size, entropy = calculate_bucket_stats_vectorized(weights)
                            heuristic = 1.0 + (0.45 * entropy)
                            
                            total_weight = np.sum(weights)
                            probs = weights / total_weight if total_weight > 0 else np.zeros(len(weights))
                            
                            # Cleanly format floats for the dictionary
                            bucket_details = {w: round(float(p), 6) for w, p in zip(active_pool, probs)}
                            
                            eval_start_t = time.monotonic()
                            # Evaluate using the exact live state of the bot right now
                            true_cost = simulate_bucket_true_cost(engine, bot, active_pool, bot_priors)
                            eval_time = time.monotonic() - eval_start_t
                            
                            record = {
                                "game_num": game_idx,
                                "bucket_raw_size": raw_size,
                                "bucket_eff_size": eff_size,
                                "bucket_entropy": round(entropy, 4),
                                "heuristic_formula": round(heuristic, 4),
                                "true_expected_cost": round(true_cost, 4),
                                "bucket_details": str(bucket_details)
                            }
                            
                            df_single = pd.DataFrame([record])
                            df_single.to_csv(output_file, mode='a', header=not output_file.exists(), index=False)
                            evaluated_buckets.add((game_idx, raw_size))  # Track in memory immediately
                            total_records_saved += 1
                            
                            print(f"  Game #{game_idx:<4} | Turn {turn} | Size {raw_size:<2} | Ent: {entropy:.2f} | True Cost: {true_cost:.2f} | ⏱️ Eval: {eval_time:.2f}s")
                            
                        # If the guess solved it, stop evaluating this game
                        if guess == target_word:
                            break
                            
                        # Filter the active pool for the next turn in the actual game
                        g_idx = engine.guess_to_idx[guess]
                        fb = engine.feedback_matrix[g_idx, t_idx]
                        active_pool = [w for w in active_pool if engine.feedback_matrix[g_idx, engine.target_to_idx[w]] == fb]
                
                # Step the bot forward naturally to update EMAs and used_words
                bot.end_game(target_word, update_ema=True)

    except KeyboardInterrupt:
        print(f"\nStopped by user. Data safely preserved.")
        
    print(f"\nProfiling complete! Evaluated {total_records_saved} on-path buckets.")

if __name__ == "__main__":
    run_on_path_profiler()