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
from bot3 import Bot3 as ActiveBot

def run_15k_evaluation():
    print("Initializing Engine...")
    engine = GameEngine()
    
    # Generate unique filenames for whichever bot is active
    bot_class_name = ActiveBot.__name__.lower()
    priors_file = str(PROJECT_ROOT / 'data' / 'priors_4500.csv')
    cache_file = str(PROJECT_ROOT / 'data' / f'{bot_class_name}_turn2_cache.json')
    output_csv = PROJECT_ROOT / 'data' / f'{bot_class_name}_15k_results.csv'
    
    print(f"Initializing {ActiveBot.__name__} (Cache: {Path(cache_file).name})...")
    bot = ActiveBot(
        all_words=list(engine.guess_to_idx.keys()),
        priors_path=priors_file,
        feedback_matrix=engine.feedback_matrix,
        guess_to_idx=engine.guess_to_idx,
        target_to_idx=engine.target_to_idx,
        turn2_cache_path=cache_file
    )
    
    try:
        priors_df = pd.read_csv(priors_file)
        common_words_set = set(priors_df.iloc[:, 0].str.lower().values)
    except Exception:
        common_words_set = set()
    
    targets_to_run = list(engine.target_to_idx.keys())
    total_games = len(targets_to_run)
    
    results = []
    start_time = time.time()
    progress_points = {1, 5, 10, 25, 50, 100, 250, 750, 1250, 1750}
    
    print(f"\nStarting evaluation on {total_games} words...\n" + "-" * 75)
    
    for game_idx, target_word in enumerate(targets_to_run, 1):
        bot.reset()
        t_idx = engine.target_to_idx[target_word]
        is_common = target_word in common_words_set
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
                
        # Record
        guess_count = len(guesses_made)
        results.append({
            "target": target_word,
            "guesses": "-".join(guesses_made),
            "guess_count": guess_count,
            "is_common": is_common,
            "won_in_6": guess_count <= 6
        })
        
        # Log Progress
        if game_idx in progress_points or (game_idx % 500 == 0):
            elapsed = time.time() - start_time
            print(f"[{game_idx:>5}/{total_games}] Evaluated  |  T2 Cache: {len(bot.turn2_cache):>3}  |  Mid Cache: {len(bot.mid_game_cache):>4}  |  Time: {elapsed/60:.2f} min")

    df = pd.DataFrame(results)
    df.to_csv(output_csv, index=False)
    
    print("-" * 75)
    print(f"COMPLETE! Games finished in {(time.time() - start_time)/60:.2f} minutes.")
    print(f"Global Average Guesses: {df['guess_count'].mean():.4f}")
    print(f"Results exported to: {output_csv}")

if __name__ == "__main__":
    run_15k_evaluation()