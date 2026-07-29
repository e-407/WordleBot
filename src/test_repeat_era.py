import sys
import time
import pandas as pd
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parent.parent if '__file__' in globals() else Path().resolve()
SRC_DIR = PROJECT_ROOT / 'src'
if str(SRC_DIR) not in sys.path:
    sys.path.append(str(SRC_DIR))

from engine import GameEngine
from bot6 import Bot6

def run_repeat_era_evaluation():
    print("Initializing Engine & Loading Data...")
    engine = GameEngine()
    
    priors_file = str(PROJECT_ROOT / 'data' / 'priors_reweighted.csv')
    past_answers_file = PROJECT_ROOT / 'data' / 'past_answers.csv'
    bot5_results_file = PROJECT_ROOT / 'data' / 'bot5_chronological_results_2.csv'
    bot6_results_file = PROJECT_ROOT / 'data' / 'bot6_chronological_results.csv'
    
    if not past_answers_file.exists():
        print(f"Error: Could not find {past_answers_file}")
        return

    df_past = pd.read_csv(past_answers_file)
    targets_to_run = df_past['solution'].tolist()
    
    # 1. Dynamically find where the Repeat Era begins
    seen = set()
    repeat_era_start_idx = -1
    for i, w in enumerate(targets_to_run):
        if w in seen:
            repeat_era_start_idx = i
            break
        seen.add(w)
        
    if repeat_era_start_idx == -1:
        print("No repeats found in the dataset yet!")
        return
        
    print(f"Repeat Era detected starting at game index {repeat_era_start_idx} (Target: {targets_to_run[repeat_era_start_idx]})")
    
    # 2. Extract Bot 5's baseline for the exact same era
    bot5_avg = None
    if Path(bot5_results_file).exists():
        bot5_df = pd.read_csv(bot5_results_file)
        if len(bot5_df) > repeat_era_start_idx:
            bot5_repeat_df = bot5_df.iloc[repeat_era_start_idx:]
            bot5_avg = bot5_repeat_df['guess_count'].mean()
            print(f"Bot 5 Average for this era: {bot5_avg:.4f}")
        else:
            print("Bot 5 results file doesn't cover the repeat era.")
    else:
        print("Bot 5 results file not found. Skipping Bot 5 comparison.")

    # 3. Initialize Bot 6
    print("\nInitializing Bot 6...")
    bot = Bot6(
        all_words=list(engine.guess_to_idx.keys()),
        priors_path=priors_file,
        feedback_matrix=engine.feedback_matrix,
        guess_to_idx=engine.guess_to_idx,
        target_to_idx=engine.target_to_idx,
        starting_repeat_prob=0.10,
        alpha=0.01
    )
    
    # 4. Fast-forward Bot 6's memory to the start of the repeat era
    print("Fast-forwarding Bot 6 memory to the start of the Repeat Era...")
    for w in targets_to_run[:repeat_era_start_idx]:
        # update_ema=False because repeats weren't a game mechanic yet
        bot.end_game(w, update_ema=False)
        
    # 5. Play out the Repeat Era
    print("\nStarting Repeat Era Gameplay...\n" + "-" * 75)
    print(f"{'Game #':<8} | {'Target':<8} | {'Guesses':<30} | {'Count':<5} | {'Repeat?':<7} | {'New p(Repeat)':<15}")
    print("-" * 75)
    
    results = []
    
    for game_idx in range(repeat_era_start_idx, len(targets_to_run)):
        target_word = targets_to_run[game_idx]
        
        if target_word not in engine.target_to_idx:
            continue
            
        bot.reset()
        t_idx = engine.target_to_idx[target_word]
        guesses_made = []
        
        # Play the game
        while True:
            guess_idx = bot.get_best_guess()
            guess_word = engine.idx_to_guess[guess_idx]
            guesses_made.append(guess_word)
            
            if guess_word == target_word:
                break
                
            f_code = engine.feedback_matrix[guess_idx, t_idx]
            bot.update_state(guess_idx, f_code)
            
        guess_count = len(guesses_made)
        
        # End of Game Hook - Bot 6 updates EMA and recalculates here
        is_repeat, new_prob = bot.end_game(target_word, update_ema=True)
        
        results.append({
            "game_num": game_idx,
            "target": target_word,
            "guesses": "-".join(guesses_made),
            "guess_count": guess_count,
            "failed": guess_count > 6,
            "is_repeat": is_repeat,
            "repeat_prob": new_prob
        })
        
        # Formatting the output
        guess_str = "-".join(guesses_made)
        if len(guess_str) > 28:
            guess_str = guess_str[:25] + "..."
            
        repeat_str = "YES" if is_repeat else "NO"
        print(f"{game_idx:<8} | {target_word:<8} | {guess_str:<30} | {guess_count:<5} | {repeat_str:<7} | {new_prob:.4f}")

    # 6. Final Report
    df_bot6 = pd.DataFrame(results)
    df_bot6.to_csv(bot6_results_file, index=False)
    
    print("-" * 75)
    print(f"Results exported to: {bot6_results_file}")
    
    era_avg = df_bot6['guess_count'].mean()
    
    print("\n=== REPEAT ERA SUMMARY ===")
    print(f"Total Games Played : {len(results)}")
    print(f"Bot 6 Average      : {era_avg:.4f}")
    if bot5_avg:
        diff = era_avg - bot5_avg
        sign = "+" if diff > 0 else ""
        print(f"Bot 5 Average      : {bot5_avg:.4f}")
        print(f"Net Difference     : {sign}{diff:.4f}")

if __name__ == "__main__":
    run_repeat_era_evaluation()