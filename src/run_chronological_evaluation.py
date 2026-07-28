import sys
import time
import pandas as pd
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parent.parent if '__file__' in globals() else Path().resolve()
SRC_DIR = PROJECT_ROOT / 'src'
if str(SRC_DIR) not in sys.path:
    sys.path.append(str(SRC_DIR))

from engine import GameEngine

# Toggle which bot you are testing here:

# from bot2 import Bot2 as ActiveBot
# from bot3 import Bot3 as ActiveBot
# from bot4 import Bot4 as ActiveBot
from bot5 import Bot5 as ActiveBot

def run_chronological_evaluation():
    print("Initializing Engine...")
    engine = GameEngine()
    
    # Define file paths
    bot_class_name = ActiveBot.__name__.lower()
    priors_file = str(PROJECT_ROOT / 'data' / 'priors_4500.csv')
    past_answers_file = PROJECT_ROOT / 'data' / 'past_answers.csv'
    output_csv = PROJECT_ROOT / 'data' / f'{bot_class_name}_chronological_results.csv'
    
    if not past_answers_file.exists():
        print(f"Error: Could not find {past_answers_file}")
        return

    # Load Past Answers
    df_past = pd.read_csv(past_answers_file)
    df_past['year'] = pd.to_datetime(df_past['date']).dt.year
    targets_to_run = df_past['solution'].tolist()
    years = df_past['year'].tolist()
    
    # --- NEW: LIMIT TEST LENGTH ---
    MAX_GAMES = None
    if MAX_GAMES is not None:
        targets_to_run = targets_to_run[:MAX_GAMES]
        years = years[:MAX_GAMES]
    # ------------------------------
    
    total_games = len(targets_to_run)
    
    print(f"Initializing {ActiveBot.__name__}...")
    bot = ActiveBot(
        all_words=list(engine.guess_to_idx.keys()),
        priors_path=priors_file,
        priors_dict=None,
        feedback_matrix=engine.feedback_matrix,
        guess_to_idx=engine.guess_to_idx,
        target_to_idx=engine.target_to_idx,
        turn2_cache_path=None  # Keeps disk cache disabled for strict memory control
    )
    
    results = []
    start_time = time.time()
    
    print(f"\nStarting Chronological Evaluation on {total_games} past answers...\n" + "-" * 85)
    
    for game_idx, (target_word, year) in enumerate(zip(targets_to_run, years), 1):
        bot.reset()
        
        # Failsafe if target isn't in engine (shouldn't happen with valid dataset)
        if target_word not in engine.target_to_idx:
            continue
            
        t_idx = engine.target_to_idx[target_word]
        guesses_made = []
        
        while True:
            # 1. Ask the bot what to do
            guess_idx = bot.get_best_guess()
            guess_word = engine.idx_to_guess[guess_idx]
            guesses_made.append(guess_word)
            
            # 2. Check Win Condition
            if guess_word == target_word:
                break
                
            # 3. Get feedback and give it back to the bot
            f_code = engine.feedback_matrix[guess_idx, t_idx]
            bot.update_state(guess_idx, f_code)
                
        # Record game results
        guess_count = len(guesses_made)
        failed = guess_count > 6
        results.append({
            "game_num": game_idx - 1,
            "year": year,
            "target": target_word,
            "guesses": "-".join(guesses_made),
            "guess_count": guess_count,
            "failed": failed
        })
        
        # --- LIFECYCLE HOOK ---
        # Let the bot know the game is over.
        # Amensiac bots (Bot 2/3) will do nothing. Memory bots (Bot 4) will update their priors.
        if hasattr(bot, 'end_game'):
            bot.end_game(target_word)
        
        # Log Progress
        should_print = (
            (game_idx <= 100) or
            (game_idx <= 1000 and game_idx % 10 == 0) or
            (game_idx % 100 == 0) or
            (game_idx == total_games)
        )

        if should_print:
            elapsed = time.time() - start_time
            remaining_games = total_games - game_idx
            eta_seconds = (elapsed / game_idx) * remaining_games
            
            print(
                f"[{game_idx:>4}/{total_games}] Evaluated  |  "
                f"Elapsed: {elapsed/60:.2f} min  |  "
                f"ETA: {eta_seconds/60:.2f} min"
            )

    # Generate Summary Statistics
    df_results = pd.DataFrame(results)
    df_results.to_csv(output_csv, index=False)
    
    print("-" * 85)
    print(f"COMPLETE! Games finished in {(time.time() - start_time)/60:.2f} minutes.")
    print("-" * 85)
    
    # Print Results Table
    print(f"{'Split':<15} | {'Total_Words':<12} | {'Avg_Guesses':<12} | {'Max_Guesses':<12} | {'Failures (>6)':<12}")
    print("-" * 85)
    
    # Group by Year
    for year, group in df_results.groupby('year'):
        total = len(group)
        avg_g = group['guess_count'].mean()
        max_g = group['guess_count'].max()
        fails = group['failed'].sum()
        print(f"Year {year:<10} | {total:<12} | {avg_g:<12.4f} | {max_g:<12} | {fails:<12}")
        
    print("-" * 85)
    
    # Overall
    o_total = len(df_results)
    o_avg_g = df_results['guess_count'].mean()
    o_max_g = df_results['guess_count'].max()
    o_fails = df_results['failed'].sum()
    print(f"{'Overall':<15} | {o_total:<12} | {o_avg_g:<12.4f} | {o_max_g:<12} | {o_fails:<12}")
    print(f"\nResults exported to: {output_csv}")

if __name__ == "__main__":
    run_chronological_evaluation()