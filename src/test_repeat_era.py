import sys
import time
import pandas as pd
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parent.parent if '__file__' in globals() else Path().resolve()
SRC_DIR = PROJECT_ROOT / 'src'
if str(SRC_DIR) not in sys.path:
    sys.path.append(str(SRC_DIR))

from engine import GameEngine
from bot8 import Bot8  # ADAPTED: Importing Bot8 (Pure Lorentzian Version)

def run_repeat_era_evaluation():
    print("Initializing Engine & Loading Data...")
    engine = GameEngine()
    
    priors_file = str(PROJECT_ROOT / 'data' / 'priors_reweighted.csv')
    past_answers_file = PROJECT_ROOT / 'data' / 'past_answers.csv'
    bot5_results_file = PROJECT_ROOT / 'data' / 'bot5_chronological_results_2.csv'
    bot6_results_file = PROJECT_ROOT / 'data' / 'bot6_chronological_results.csv'
    bot7_results_file = PROJECT_ROOT / 'data' / 'bot7_chronological_results.csv'
    bot8_results_file = PROJECT_ROOT / 'data' / 'bot8_chronological_results.csv'  # ADAPTED: Dedicated Bot 8 export
    
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
    
    # 2. Extract Bot 5, Bot 6, and Bot 7 baselines for the exact same era
    bot5_avg = None
    if Path(bot5_results_file).exists():
        bot5_df = pd.read_csv(bot5_results_file)
        if len(bot5_df) > repeat_era_start_idx:
            bot5_avg = bot5_df.iloc[repeat_era_start_idx:]['guess_count'].mean()
            print(f"Bot 5 Average for this era: {bot5_avg:.4f}")

    bot6_avg = None
    if Path(bot6_results_file).exists():
        bot6_df = pd.read_csv(bot6_results_file)
        bot6_avg = bot6_df['guess_count'].mean()
        print(f"Bot 6 Average for this era: {bot6_avg:.4f}")

    bot7_avg = None
    if Path(bot7_results_file).exists():
        bot7_df = pd.read_csv(bot7_results_file)
        bot7_avg = bot7_df['guess_count'].mean()
        print(f"Bot 7 Average for this era: {bot7_avg:.4f}")

    # 3. Initialize Bot 8 (Pure Lorentzian Version)
    print("\nInitializing Bot 8 (Pure Lorentzian Kernel)...")
    bot = Bot8(
        all_words=list(engine.guess_to_idx.keys()),
        priors_path=priors_file,
        feedback_matrix=engine.feedback_matrix,
        guess_to_idx=engine.guess_to_idx,
        target_to_idx=engine.target_to_idx,
        starting_repeat_prob=0.10,
        alpha=0.01,
        alpha_g=0.10,       # Gap smoothing parameter (from Bot 7)
        L=0.1,              # Lower bound multiplier (from Bot 7)
        U=1.9,              # Upper bound cap (from Bot 7)
        initial_g_bar=9.47, # Starting mean gap (from Bot 7)
        c_lorentz=100.0     # ADAPTED: Lorentzian scale parameter (Game 0-100 plateau)
    )
    
    # 4. Fast-forward Bot 8's memory to the start of the repeat era
    #    We explicitly log origin game numbers (x) so the Lorentzian kernel works immediately.
    print("Fast-forwarding Bot 8 memory & timestamping origins to the start of the Repeat Era...")
    for i, w in enumerate(targets_to_run[:repeat_era_start_idx]):
        bot.current_game_number = i
        bot.used_word_game_num[w] = i
        bot.end_game(w, update_ema=False)
        
    bot.current_game_number = repeat_era_start_idx
        
    # 5. Play out the Repeat Era
    print("\nStarting Repeat Era Gameplay...\n" + "-" * 95)
    print(f"{'Game #':<8} | {'Target':<8} | {'Guesses':<24} | {'Count':<5} | {'Rep?':<5} | {'Gap (d)':<7} | {'G_bar':<6} | {'P(Adjusted)':<11}")
    print("-" * 95)
    
    results = []
    
    for game_idx in range(repeat_era_start_idx, len(targets_to_run)):
        target_word = targets_to_run[game_idx]
        
        if target_word not in engine.target_to_idx:
            continue
            
        bot.reset()
        t_idx = engine.target_to_idx[target_word]
        guesses_made = []
        
        # Capture pre-game timing state for clean reporting
        current_gap = bot.days_since_last
        current_g_bar = bot.g_bar
        
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
        
        # End of Game Hook - Bot 8 returns (is_repeat, timing_adjusted_repeat_prob)
        is_repeat, new_adjusted_prob = bot.end_game(target_word, update_ema=True)
        
        results.append({
            "game_num": game_idx,
            "target": target_word,
            "guesses": "-".join(guesses_made),
            "guess_count": guess_count,
            "failed": guess_count > 6,
            "is_repeat": is_repeat,
            "days_since_last": current_gap,
            "g_bar": round(current_g_bar, 2),
            "base_ema_prob": round(bot.repeat_prob, 6),
            "adjusted_prob": round(new_adjusted_prob, 6)
        })
        
        # Formatting the console output
        guess_str = "-".join(guesses_made)
        if len(guess_str) > 22:
            guess_str = guess_str[:19] + "..."
            
        repeat_str = "YES" if is_repeat else "NO"
        print(f"{game_idx:<8} | {target_word:<8} | {guess_str:<24} | {guess_count:<5} | {repeat_str:<5} | {current_gap:<7} | {current_g_bar:<6.2f} | {new_adjusted_prob:.4f}")

    # 6. Final Report
    df_bot8 = pd.DataFrame(results)
    df_bot8.to_csv(bot8_results_file, index=False)
    
    print("-" * 95)
    print(f"Results exported to: {bot8_results_file}")
    
    era_avg = df_bot8['guess_count'].mean()
    
    print("\n=== REPEAT ERA SUMMARY ===")
    print(f"Total Games Played : {len(results)}")
    print(f"Bot 8 Average      : {era_avg:.4f}")
    
    if bot7_avg:
        diff_7 = era_avg - bot7_avg
        sign_7 = "+" if diff_7 > 0 else ""
        print(f"Bot 7 Average      : {bot7_avg:.4f} (Net vs Bot 7: {sign_7}{diff_7:.4f})")

    if bot6_avg:
        diff_6 = era_avg - bot6_avg
        sign_6 = "+" if diff_6 > 0 else ""
        print(f"Bot 6 Average      : {bot6_avg:.4f} (Net vs Bot 6: {sign_6}{diff_6:.4f})")
        
    if bot5_avg:
        diff_5 = era_avg - bot5_avg
        sign_5 = "+" if diff_5 > 0 else ""
        print(f"Bot 5 Average      : {bot5_avg:.4f} (Net vs Bot 5: {sign_5}{diff_5:.4f})")

if __name__ == "__main__":
    run_repeat_era_evaluation()