import sys
import time
import random
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
    raw_size = len(weights)
    if raw_size == 0: return 0, 0, 0.0
    total_weight = np.sum(weights)
    if total_weight <= 0: return raw_size, raw_size, 0.0
    probs = weights / total_weight
    sorted_probs = np.sort(probs)[::-1]
    eff_size = int(np.argmax(np.cumsum(sorted_probs) >= 0.99)) + 1
    valid_probs = probs[probs > 0]
    entropy = -np.sum(valid_probs * np.log2(valid_probs))
    return raw_size, eff_size, entropy

def simulate_bucket_true_cost(engine, bot, sub_bucket, priors_dict):
    weights = np.array([priors_dict.get(w, 1e-9) for w in sub_bucket])
    probs = weights / np.sum(weights)
    expected_turns = 0.0
    
    for i, target in enumerate(sub_bucket):
        pool = list(sub_bucket)
        turns_taken = 0
        while True:
            turns_taken += 1
            if len(pool) == 1:
                guess = pool[0]
            elif len(pool) == 2:
                guess = max(pool, key=lambda w: priors_dict.get(w, 0))
            else:
                guess = bot.make_guess(pool)
                    
            if guess == target:
                break
                
            g_idx = engine.guess_to_idx[guess]
            t_idx = engine.target_to_idx[target]
            fb = engine.feedback_matrix[g_idx, t_idx]
            pool = [w for w in pool if engine.feedback_matrix[g_idx, engine.target_to_idx[w]] == fb]
            
        expected_turns += probs[i] * turns_taken
    return expected_turns

# -----------------------------------------------------------------------------
# Main Profiling Script
# -----------------------------------------------------------------------------

def run_adaptive_profiler():
    print("Initializing Engine for Adaptive Timing Test...")
    engine = GameEngine()
    
    priors_file = str(PROJECT_ROOT / 'data' / 'priors_reweighted.csv')
    past_answers_file = PROJECT_ROOT / 'data' / 'past_answers.csv'
    
    df_past = pd.read_csv(past_answers_file)
    all_targets = df_past['solution'].tolist()
    
    seen = set()
    repeat_era_start_idx = -1
    for i, w in enumerate(all_targets):
        if w in seen:
            repeat_era_start_idx = i
            break
        seen.add(w)

    slate_idx = engine.guess_to_idx["slate"]
    all_guesses = list(engine.guess_to_idx.keys())
    
    # Define adaptive passes: (min_size, max_size, target_count)
    size_passes = [
        (4, 6, 10),
        (7, 10, 10),
        (11, 15, 10),
        (16, 20, 10),
        (21, 25, 5),
        (26, 30, 5),
        (31, 35, 5),
        (36, 40, 5)
    ]

    all_summaries = []

    for pass_idx, (min_size, max_size, target_count) in enumerate(size_passes):
        pass_label = f"{min_size}-{max_size}"
        print(f"\n{'='*60}")
        print(f"🚀 PASS {pass_idx + 1}/{len(size_passes)}: BUCKET SIZE {pass_label} (Target: {target_count} buckets)")
        print(f"{'='*60}")
        
        bot8 = Bot8(
            all_words=list(engine.guess_to_idx.keys()),
            priors_path=priors_file,
            feedback_matrix=engine.feedback_matrix,
            guess_to_idx=engine.guess_to_idx,
            target_to_idx=engine.target_to_idx
        )
        
        for i in range(repeat_era_start_idx):
            bot8.end_game(all_targets[i], update_ema=False)

        pass_results = []
        
        for game_idx in range(repeat_era_start_idx, len(all_targets)):
            if len(pass_results) >= target_count:
                break # Move to next pass if target reached

            target_word = all_targets[game_idx]
            if target_word not in engine.target_to_idx:
                continue
                
            bot8.reset()
            bot_priors = getattr(bot8, 'current_priors', getattr(bot8, 'priors', None))
            t_idx = engine.target_to_idx[target_word]
            
            valid_solution_targets = [w for w in engine.target_to_idx.keys() if bot_priors.get(w, 0) > 0]
            feedback_slate = engine.feedback_matrix[slate_idx, t_idx]
            post_slate_pool = [
                w for w in valid_solution_targets 
                if engine.feedback_matrix[slate_idx, engine.target_to_idx[w]] == feedback_slate
            ]
            
            if len(post_slate_pool) > 3:
                random.seed(game_idx) 
                sample_guesses = random.sample(all_guesses, 40)
                
                for g_word in sample_guesses:
                    if len(pass_results) >= target_count:
                        break
                        
                    g_idx = engine.guess_to_idx[g_word]
                    sub_buckets = {}
                    for w in post_slate_pool:
                        fb = engine.feedback_matrix[g_idx, engine.target_to_idx[w]]
                        sub_buckets.setdefault(fb, []).append(w)
                    
                    for fb, sub_bucket in sub_buckets.items():
                        if len(pass_results) >= target_count:
                            break
                            
                        raw_size = len(sub_bucket)
                        
                        if min_size <= raw_size <= max_size:
                            weights = np.array([bot_priors.get(w, 0) for w in sub_bucket])
                            _, eff_size, entropy = calculate_bucket_stats_vectorized(weights)
                            
                            t0 = time.time()
                            true_cost = simulate_bucket_true_cost(engine, bot8, sub_bucket, bot_priors)
                            t1 = time.time()
                            
                            time_taken = t1 - t0
                            
                            pass_results.append({
                                "size": raw_size,
                                "entropy": entropy,
                                "time_sec": time_taken,
                                "true_cost": true_cost
                            })
                            
                            print(f"[{len(pass_results)}/{target_count}] Size: {raw_size:<2} | Ent: {entropy:.2f} | Cost: {true_cost:.2f} | ⏱️ Time: {time_taken:.3f}s")

            bot8.end_game(target_word, update_ema=True)
            
        # Compile Summary for this Pass
        if pass_results:
            avg_time = sum(r['time_sec'] for r in pass_results) / len(pass_results)
            avg_size = sum(r['size'] for r in pass_results) / len(pass_results)
            all_summaries.append({
                "Range": pass_label,
                "Buckets": len(pass_results),
                "Avg Size": f"{avg_size:.1f}",
                "Avg Time (s)": f"{avg_time:.3f}",
                "Max Time (s)": f"{max(r['time_sec'] for r in pass_results):.3f}"
            })
            print(f"\n✅ Pass {pass_label} Complete. Average Time: {avg_time:.3f}s per bucket.")

    print("\n\n" + "="*50)
    print("📊 ADAPTIVE TIMING SUMMARY")
    print("="*50)
    df_summary = pd.DataFrame(all_summaries)
    print(df_summary.to_string(index=False))
    print("="*50 + "\n")

if __name__ == "__main__":
    run_adaptive_profiler()