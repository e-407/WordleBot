import sys
import json
import time
import pandas as pd
import numpy as np
from pathlib import Path

# Setup paths
PROJECT_ROOT = Path(__file__).resolve().parent.parent if '__file__' in globals() else Path().resolve()
SRC_DIR = PROJECT_ROOT / 'src'
if str(SRC_DIR) not in sys.path:
    sys.path.append(str(SRC_DIR))

from engine import GameEngine
from bot3 import Bot3  # Adjust import if your bot class name differs

# ==============================================================================
# WHERE TO INPUT YOUR 20 WORDS:
# Option A: Leave MANUAL_TARGETS = None to automatically load from CSV.
# Option B: Pass a custom list of 20 words, e.g., MANUAL_TARGETS = ["frown", "weigh", ...]
# ==============================================================================
MANUAL_TARGETS = None 


def evaluate_feedback(guess: str, target: str) -> str:
    """Helper to generate Wordle feedback string (G=Green, Y=Yellow, B=Black)."""
    feedback = ['B'] * 5
    target_chars = list(target)
    
    # Pass 1: Green
    for i in range(5):
        if guess[i] == target[i]:
            feedback[i] = 'G'
            target_chars[i] = None
            
    # Pass 2: Yellow
    for i in range(5):
        if feedback[i] == 'B' and guess[i] in target_chars:
            if target_chars.count(guess[i]) > 0:
                feedback[i] = 'Y'
                target_chars[target_chars.index(guess[i])] = None
                
    return "".join(feedback)

def pattern_to_code(pattern: str) -> int:
    """Converts a 5-character feedback string (e.g., 'YBBGY') into a base-3 integer (0-242)."""
    mapping = {'B': 0, 'Y': 1, 'G': 2}
    code = 0
    # In base-3, the first character represents 3^4, the last represents 3^0
    for i, char in enumerate(pattern):
        code += mapping[char] * (3 ** (4 - i))
    return int(code)


def run_20_game_suite():
    print("Initializing Game Engine and Bot 3...")
    engine = GameEngine()
    
    # Path to priors CSV file
    priors_file = str(PROJECT_ROOT / 'data' / 'priors_4500.csv')
    
    # All 4,500 allowed words derived from engine
    all_words = list(engine.guess_to_idx.keys())
    
    # Initialize Bot3 with all required arguments
    bot = Bot3(
        all_words=all_words,
        priors_path=priors_file,
        feedback_matrix=engine.feedback_matrix,
        guess_to_idx=engine.guess_to_idx,
        target_to_idx=engine.target_to_idx
    )
    
    # 1. Load and Sort Targets (Quickest First)
    if MANUAL_TARGETS and len(MANUAL_TARGETS) > 0:
        print(f"Using {len(MANUAL_TARGETS)} manually specified target words.")
        # Wrap manual words into a DataFrame to look up pool sizes
        targets_to_run = MANUAL_TARGETS
        df_sorted = pd.DataFrame({"sample_target": targets_to_run})
        # Calculate initial pool sizes after SLATE for sorting
        slate_idx = engine.guess_to_idx["slate"]
        feedbacks = engine.feedback_matrix[slate_idx, :]
        pool_sizes = []
        for word in targets_to_run:
            t_idx = engine.target_to_idx[word]
            code = feedbacks[t_idx]
            pool_sizes.append(np.sum(feedbacks == code))
        df_sorted["pool_size"] = pool_sizes
        df_sorted = df_sorted.sort_values(by="pool_size", ascending=True).reset_index(drop=True)
    else:
        test_csv = PROJECT_ROOT / 'data' / 'slate_bucket_test_set.csv'
        if not test_csv.exists():
            raise FileNotFoundError(f"Test set CSV not found at {test_csv}. Run Cell 4 first!")
        
        df_test = pd.read_csv(test_csv).head(20)
        # SORT ASCENDING BY POOL SIZE (Smallest/Quickest pools first)
        df_sorted = df_test.sort_values(by="pool_size", ascending=True).reset_index(drop=True)
        print("Loaded top 20 buckets from CSV. Sorted from smallest pool to largest pool.")

    total_games = len(df_sorted)
    results = []
    total_start_time = time.time()
    
    print("\n" + "=" * 80)
    print(f"       STARTING TEST SUITE: {total_games} GAMES (QUICKEST TO SLOWEST)       ")
    print("=" * 80 + "\n")
    
    for game_idx, row in df_sorted.iterrows():
        game_num = game_idx + 1
        target_word = row["sample_target"]
        initial_pool = row.get("pool_size", "N/A")
        
        print(f"[{game_num:02d}/{total_games}] Target: '{target_word.upper()}' (Turn 2 Pool: {initial_pool} words)")
        game_start_time = time.time()
        
        active_targets = list(engine.target_to_idx.keys())
        game_log = {
            "game_id": game_num,
            "target": target_word,
            "turn_2_pool_size": int(initial_pool) if isinstance(initial_pool, (int, np.integer)) else initial_pool,
            "turns_taken": 0,
            "won": False,
            "total_game_time_sec": 0.0,
            "turn_history": []
        }
        
        # Game loop (max 6 turns)
        for turn in range(1, 7):
            turn_start = time.time()
            
            # --- TURN 1: Hardcoded SLATE ---
            if turn == 1:
                chosen_guess = "slate"
                top_guesses = [{"word": "slate", "skill": 99, "expected_score": 3.42}]
            else:
                top_guesses = bot.get_top_guesses(active_targets, top_n=4)
                if top_guesses:
                    chosen_guess = top_guesses[0]["word"]
                else:
                    chosen_guess = active_targets[0]
                    
            feedback = evaluate_feedback(chosen_guess, target_word)
            turn_time = time.time() - turn_start
            
            turn_data = {
                "turn": turn,
                "pool_size_before": len(active_targets),
                "chosen_guess": chosen_guess,
                "feedback": feedback,
                "calc_time_sec": round(turn_time, 2),
                "top_4_suggestions": top_guesses
            }
            game_log["turn_history"].append(turn_data)
            
            print(f"  Turn {turn}: Played '{chosen_guess.upper()}' | Feedback: {feedback} | Pool: {len(active_targets):>4} words | ({turn_time:.2f}s)")
            if top_guesses:
                top_str = ", ".join([f"{g['word'].upper()} ({g['skill']})" for g in top_guesses])
                print(f"         Top Choices: [{top_str}]")
                
            if chosen_guess == target_word:
                game_log["turns_taken"] = turn
                game_log["won"] = True
                break
                
            # Filter active targets
            g_idx = engine.guess_to_idx[chosen_guess]
            f_code = engine.pattern_to_code(feedback)
            active_t_idxs = np.array([engine.target_to_idx[t] for t in active_targets])
            valid_mask = (engine.feedback_matrix[g_idx, active_t_idxs] == f_code)
            active_targets = [active_targets[i] for i in range(len(active_targets)) if valid_mask[i]]

        # Game Timing Stats
        game_elapsed = round(time.time() - game_start_time, 2)
        game_log["total_game_time_sec"] = game_elapsed
        results.append(game_log)

        # Suite Cumulative Stats
        cumulative_elapsed = time.time() - total_start_time
        avg_game_time = cumulative_elapsed / game_num
        remaining_games = total_games - game_num
        # Estimate ETA based on average (Note: later games are larger, so ETA will be slightly conservative early on)
        eta_seconds = remaining_games * avg_game_time
        
        print(f"  -> Solved in {game_log['turns_taken']} turns | Time: {game_elapsed:.2f}s")
        print(f"  -> Progress: {game_num}/{total_games} | Elapsed: {cumulative_elapsed/60:.1f}m | Avg/Game: {avg_game_time:.1f}s | Est. Remaining: ~{eta_seconds/60:.1f}m")
        print("-" * 80)

    # 2. Save Final Output with Metadata Summary
    total_duration = round(time.time() - total_start_time, 2)
    final_payload = {
        "summary": {
            "total_games": total_games,
            "total_time_seconds": total_duration,
            "avg_game_time_seconds": round(total_duration / total_games, 2),
            "win_rate": f"{(sum(1 for g in results if g['won']) / total_games) * 100:.1f}%"
        },
        "games": results
    }

    output_json = PROJECT_ROOT / 'data' / 'test_suite_results.json'
    with open(output_json, 'w') as f:
        json.dump(final_payload, f, indent=2)
        
    print(f"\nCompleted all {total_games} games in {total_duration/60:.2f} minutes!")
    print(f"Exported detailed results to: {output_json}")

if __name__ == "__main__":
    run_20_game_suite()