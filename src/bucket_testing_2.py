import sys
import json
import time
import datetime
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


def format_eta(seconds):
    """Formats ETA into a readable string."""
    return str(datetime.timedelta(seconds=int(seconds)))


def run_importance_sampling():
    print("Initializing Engine and BOT8 for Discovery Pass...")
    engine = GameEngine()
    
    priors_file = str(PROJECT_ROOT / 'data' / 'priors_reweighted.csv')
    past_answers_file = PROJECT_ROOT / 'data' / 'past_answers.csv'
    sampled_output_file = PROJECT_ROOT / 'data' / 'sampled_bucket_evaluations.csv'

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

    end_game_idx = len(all_targets)
    slate_idx = engine.guess_to_idx.get("slate", 0)

    # ---------------------------------------------------------
    # PASS 1: DISCOVER ALL BUCKETS (OR LOAD FROM BACKUP)
    # ---------------------------------------------------------
    pass1_backup_file = PROJECT_ROOT / 'data' / 'pass1_all_discovered_buckets.csv'

    if pass1_backup_file.exists():
        print(f"\nFound existing Pass 1 data! Loading {pass1_backup_file.name} and skipping the 1-hour discovery pass...")
        df_buckets = pd.read_csv(pass1_backup_file)
    else:
        bot = Bot8(
            all_words=list(engine.guess_to_idx.keys()), priors_path=priors_file,
            feedback_matrix=engine.feedback_matrix, guess_to_idx=engine.guess_to_idx,
            target_to_idx=engine.target_to_idx, starting_repeat_prob=0.10,
            alpha=0.01, alpha_g=0.10, L=0.1, U=1.9, initial_g_bar=9.47, c_lorentz=100.0
        )

        print(f"Warming up state through historical games 0 to {repeat_era_start_idx - 1}...")
        for i in range(repeat_era_start_idx):
            bot.end_game(all_targets[i], update_ema=False)

        all_discovered_buckets = []
        
        print("\nExecuting Pass 1: Discovering all Turn 2 buckets (N > 2)...")
        pass1_start_time = time.time()
        
        for game_idx in range(repeat_era_start_idx, end_game_idx):
            day_start_time = time.time()
            day_buckets_count = 0
            target_word = all_targets[game_idx]
            
            if target_word not in engine.target_to_idx:
                continue
                
            t_idx = engine.target_to_idx[target_word]
            bot.reset()
            
            slate_fb = engine.feedback_matrix[slate_idx, t_idx]
            active_targets_t2 = [w for w in bot.active_targets if engine.feedback_matrix[slate_idx, engine.target_to_idx[w]] == slate_fb]
            
            active_t_idxs = np.array([bot.target_to_idx[c] for c in active_targets_t2 if c in bot.target_to_idx], dtype=np.int32)
            
            if len(active_t_idxs) > 2:
                weights = bot.prior_weights_target[active_t_idxs]
                total_weight = np.sum(weights) if np.sum(weights) > 0 else 1.0

                valid_matrix = bot.matrix[bot.valid_guess_idxs]
                V = len(bot.valid_guess_idxs)
                row_indices_full = np.arange(V)[:, None]
                
                # Simplified evaluation to just grab the top candidate buckets quickly
                full_sub_matrix = valid_matrix[:, active_t_idxs]
                weights_m1 = np.zeros((V, 243))
                np.add.at(weights_m1, (row_indices_full, full_sub_matrix), weights)
                p_m1 = weights_m1 / (total_weight + 1e-12)
                entropy_g1 = -np.sum(p_m1 * np.log2(p_m1 + 1e-12), axis=1)

                # Dramatically reduce candidates to speed up discovery
                candidate_k = 5 
                top_entropy_indices = np.argsort(entropy_g1)[::-1][:candidate_k]
                
                for idx in top_entropy_indices:
                    g2_idx = bot.valid_guess_idxs[idx]
                    feedbacks_2 = bot.matrix[g2_idx, active_t_idxs]
                    unique_f2 = np.unique(feedbacks_2)
                    
                    for f2 in unique_f2:
                        mask = (feedbacks_2 == f2)
                        bucket_t_idxs = active_t_idxs[mask]
                        n_bucket = len(bucket_t_idxs)
                        
                        if n_bucket > 2:
                            bucket_weights = weights[mask]
                            bucket_weight_sum = np.sum(bucket_weights)
                            p_bucket = bucket_weight_sum / total_weight
                            
                            p_in_bucket = bucket_weights / (bucket_weight_sum + 1e-12)
                            h_bucket = float(-np.sum(p_in_bucket * np.log2(p_in_bucket + 1e-12)))
                            
                            day_buckets_count += 1
                            all_discovered_buckets.append({
                                "game_num": game_idx,
                                "g2_idx": g2_idx,
                                "f2": f2,
                                "n": n_bucket,
                                "p": p_bucket,
                                "h": h_bucket,
                            })

            bot.update_state(slate_idx, slate_fb)
            while True:
                g_idx = bot.get_best_guess()
                if engine.idx_to_guess[g_idx] == target_word:
                    break
                bot.update_state(g_idx, engine.feedback_matrix[g_idx, t_idx])
            bot.end_game(target_word, update_ema=True)
            
            day_time = time.time() - day_start_time
            days_done = game_idx - repeat_era_start_idx + 1
            days_left = end_game_idx - game_idx - 1
            avg_time = (time.time() - pass1_start_time) / days_done
            eta = format_eta(avg_time * days_left)
            
            print(f"[Pass 1] Game {game_idx} complete in {day_time:.2f}s | Found {day_buckets_count} buckets | ETA: {eta}")

        # Backup all discovered buckets if we just ran the pass
        df_buckets = pd.DataFrame(all_discovered_buckets)
        df_buckets.to_csv(pass1_backup_file, index=False)
        print(f"\nSaved {len(df_buckets)} total discovered buckets to {pass1_backup_file.name}")

    # ---------------------------------------------------------
    # IMPORTANCE SAMPLING & BACKUP
    # ---------------------------------------------------------
    # Weight = Probability * Entropy
    df_buckets["sample_weight"] = df_buckets["p"] * df_buckets["h"]
    
    sample_size = min(5000, len(df_buckets))
    print(f"Sampling {sample_size} buckets based on P * H...")
    
    # FIX: Added replace=True so pandas can sample heavily skewed weights properly
    sampled_df = df_buckets.sample(n=sample_size, weights="sample_weight", replace=True, random_state=42)
    
    # Backup the sampled targets
    sampled_backup_file = PROJECT_ROOT / 'data' / 'pass1_sampled_targets.csv'
    sampled_df.to_csv(sampled_backup_file, index=False)
    
    sampled_games_dict = sampled_df.groupby("game_num").apply(lambda x: x.to_dict('records')).to_dict()

    # ---------------------------------------------------------
    # PASS 2: DEEP SIMULATION & EVALUATION
    # ---------------------------------------------------------
    print("\nExecuting Pass 2: Exact simulations on sampled buckets...")
    
    bot = Bot8(
        all_words=list(engine.guess_to_idx.keys()), priors_path=priors_file,
        feedback_matrix=engine.feedback_matrix, guess_to_idx=engine.guess_to_idx,
        target_to_idx=engine.target_to_idx, starting_repeat_prob=0.10,
        alpha=0.01, alpha_g=0.10, L=0.1, U=1.9, initial_g_bar=9.47, c_lorentz=100.0
    )
    for i in range(repeat_era_start_idx):
        bot.end_game(all_targets[i], update_ema=False)

    pd.DataFrame(columns=[
        "game_num", "bucket_raw_size", "bucket_eff_size", 
        "bucket_entropy", "heuristic_formula", 
        "true_expected_cost", "bucket_details"
    ]).to_csv(sampled_output_file, index=False)

    pass2_start_time = time.time()

    for game_idx in range(repeat_era_start_idx, end_game_idx):
        day_start_time = time.time()
        target_word = all_targets[game_idx]
        
        if target_word not in engine.target_to_idx:
            continue
            
        t_idx = engine.target_to_idx[target_word]
        slate_fb = engine.feedback_matrix[slate_idx, t_idx]
        
        if game_idx in sampled_games_dict:
            buckets_to_eval = sampled_games_dict[game_idx]
            
            for b in buckets_to_eval:
                bucket_start_time = time.time()
                
                bot.reset()
                bot.update_state(slate_idx, slate_fb)
                active_targets_t2 = bot.active_targets.copy()
                active_t_idxs = np.array([bot.target_to_idx[c] for c in active_targets_t2], dtype=np.int32)
                
                g2_idx = b["g2_idx"]
                f2 = b["f2"]
                
                feedbacks_2 = bot.matrix[g2_idx, active_t_idxs]
                mask = (feedbacks_2 == f2)
                bucket_t_idxs = active_t_idxs[mask]
                bucket_weights = bot.prior_weights_target[bucket_t_idxs]
                bucket_weight_sum = np.sum(bucket_weights)
                
                # Heuristic Score (1 + 0.45 * H)
                heuristic_cost = 3.0 + (b["h"] * 0.45)
                
                raw_size = len(bucket_t_idxs)
                p_normalized = bucket_weights / bucket_weight_sum
                
                total_simulated_cost = 0.0
                bucket_details = {}
                
                # 25-Word Subset Logic with Cache
                if raw_size > 10:
                    eff_size = 10
                    subset_idxs = np.random.choice(bucket_t_idxs, size=10, replace=True, p=p_normalized)
                    
                    local_sim_cache = {}
                    
                    for sim_t_idx in subset_idxs:
                        sim_target_word = engine.idx_to_target[sim_t_idx]
                        
                        if sim_target_word in bucket_details:
                            bucket_details[sim_target_word] += 1
                        else:
                            bucket_details[sim_target_word] = 1

                        if sim_t_idx in local_sim_cache:
                            total_simulated_cost += local_sim_cache[sim_t_idx]
                        else:
                            bot.reset()
                            bot.update_state(slate_idx, slate_fb)
                            bot.update_state(g2_idx, f2)
                            
                            turns = 2
                            while True:
                                turns += 1
                                g_idx = bot.get_best_guess()
                                if g_idx == sim_t_idx:
                                    break
                                bot.update_state(g_idx, engine.feedback_matrix[g_idx, sim_t_idx])
                            
                            local_sim_cache[sim_t_idx] = turns
                            total_simulated_cost += turns
                            
                    total_simulated_cost /= 10.0
                    
                else:
                    eff_size = raw_size
                    for sim_t_idx, sim_w in zip(bucket_t_idxs, bucket_weights):
                        sim_target_word = engine.idx_to_target[sim_t_idx]
                        p_word = sim_w / bucket_weight_sum
                        bucket_details[sim_target_word] = round(float(p_word), 6)
                        
                        bot.reset()
                        bot.update_state(slate_idx, slate_fb)
                        bot.update_state(g2_idx, f2)
                        
                        turns = 2
                        while True:
                            turns += 1
                            g_idx = bot.get_best_guess()
                            if g_idx == sim_t_idx:
                                break
                            bot.update_state(g_idx, engine.feedback_matrix[g_idx, sim_t_idx])
                            
                        total_simulated_cost += turns * p_word
                
                # Write Record
                record = {
                    "game_num": game_idx,
                    "bucket_raw_size": raw_size,
                    "bucket_eff_size": eff_size,
                    "bucket_entropy": round(b["h"], 4),
                    "heuristic_formula": round(heuristic_cost, 4),
                    "true_expected_cost": round(total_simulated_cost, 4),
                    "bucket_details": json.dumps(bucket_details)
                }
                pd.DataFrame([record]).to_csv(sampled_output_file, mode='a', header=False, index=False)

                # Print progress after EVERY bucket
                bucket_time = time.time() - bucket_start_time
                print(f"  └─ [Bucket Done] Game {game_idx} | N: {raw_size:2d} | H: {b['h']:.4f} | True Cost: {total_simulated_cost:.4f} | Time: {bucket_time:.2f}s")

        # Advance bot accurately for the next day
        bot.reset()
        bot.update_state(slate_idx, slate_fb)
        while True:
            g_idx = bot.get_best_guess()
            if engine.idx_to_guess[g_idx] == target_word:
                break
            bot.update_state(g_idx, engine.feedback_matrix[g_idx, t_idx])
        
        bot.end_game(target_word, update_ema=True)
        
        day_time = time.time() - day_start_time
        days_done = game_idx - repeat_era_start_idx + 1
        days_left = end_game_idx - game_idx - 1
        avg_time = (time.time() - pass2_start_time) / days_done
        eta = format_eta(avg_time * days_left)
        
        print(f"[Pass 2] Game {game_idx} complete in {day_time:.2f}s | ETA: {eta}")

    print(f"\nComplete! Exact simulations saved to {sampled_output_file.name}.")

if __name__ == "__main__":
    run_importance_sampling()