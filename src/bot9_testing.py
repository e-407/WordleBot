import sys
import pandas as pd
from pathlib import Path

# Setup project paths
PROJECT_ROOT = Path(__file__).resolve().parent.parent if '__file__' in globals() else Path().resolve()
SRC_DIR = PROJECT_ROOT / 'src'
if str(SRC_DIR) not in sys.path:
    sys.path.append(str(SRC_DIR))

from engine import GameEngine
from bot8 import Bot8
from bot9 import Bot9

def run_repeat_era_synthetic_test():
    print("Initializing Engine & Loading Data...")
    engine = GameEngine()
    
    priors_file = str(PROJECT_ROOT / 'data' / 'priors_reweighted.csv')
    past_answers_file = PROJECT_ROOT / 'data' / 'past_answers.csv'
    
    if not Path(past_answers_file).exists():
        print(f"Error: Could not find {past_answers_file}")
        return

    # Load full answers list
    df_past = pd.read_csv(past_answers_file)
    all_targets = df_past['solution'].tolist()
    
    # Detect start of Repeat Era
    seen = set()
    repeat_era_start_idx = -1
    for i, w in enumerate(all_targets):
        if w in seen:
            repeat_era_start_idx = i
            break
        seen.add(w)

    if repeat_era_start_idx == -1:
        print("No repeats found in the dataset!")
        return
        
    print(f"Repeat era begins at Game #{repeat_era_start_idx} ('{all_targets[repeat_era_start_idx]}').")

    # Initialize Bot 8
    bot8 = Bot8(
        all_words=list(engine.guess_to_idx.keys()),
        priors_path=priors_file,
        feedback_matrix=engine.feedback_matrix,
        guess_to_idx=engine.guess_to_idx,
        target_to_idx=engine.target_to_idx,
        starting_repeat_prob=0.10,
        alpha=0.01,
        alpha_g=0.10,
        L=0.1,
        U=1.9,
        initial_g_bar=9.47,
        c_lorentz=100.0
    )

    # Initialize Bot 9
    bot9 = Bot9(
        all_words=list(engine.guess_to_idx.keys()),
        priors_path=priors_file,
        feedback_matrix=engine.feedback_matrix,
        guess_to_idx=engine.guess_to_idx,
        target_to_idx=engine.target_to_idx,
        starting_repeat_prob=0.10,
        alpha=0.01,
        alpha_g=0.10,
        L=0.1,
        U=1.9,
        initial_g_bar=9.47,
        c_lorentz=100.0
    )

    # Warm up internal states up to the repeat era
    print(f"\nWarming up bot priors (Games 0 to {repeat_era_start_idx - 1})...")
    for i in range(repeat_era_start_idx):
        bot8.end_game(all_targets[i], update_ema=False)
        bot9.end_game(all_targets[i], update_ema=False)

    print("\n" + "=" * 105)
    print("SYNTHETIC REPEAT ERA COMPARISON: TOP 10 TURN 2 GUESSES")
    print("Opening Guess: 'SLATE'")
    print("=" * 105)

    opening_word = "slate"
    slate_idx = engine.guess_to_idx[opening_word]

    # Iterate through the Repeat Era (EVERY day, not just repeats)
    for game_idx in range(repeat_era_start_idx, len(all_targets)):
        target_word = all_targets[game_idx]
        is_repeat = target_word in all_targets[:game_idx]
        rep_str = "(Repeat)" if is_repeat else "(New)"
        
        t_idx = engine.target_to_idx[target_word]
        feedback = engine.feedback_matrix[slate_idx, t_idx]
        
        # Setup temporary fresh state for B8 Turn 2 evaluation
        bot8.reset()
        bot8.update_state(slate_idx, feedback)
        
        # Setup temporary fresh state for B9 Turn 2 evaluation
        bot9.reset()
        bot9.update_state(slate_idx, feedback)
        
        # Extract top 10s for all logics
        top_b8 = bot8.get_top_guesses(bot8.active_targets, top_n=10)
        top_b9_old = bot9.get_top_guesses(bot9.active_targets, top_n=10, model_version='old')
        top_b9_new = bot9.get_top_guesses(bot9.active_targets, top_n=10, model_version='new')
        
        # Display 3-way side-by-side comparison
        print(f"\nGAME #{game_idx} | TARGET: {target_word.upper()} {rep_str}")
        print(f"{'Rank':<5} | {'B8 Word':<10} {'Cost':<7} | {'B9(Old) Word':<12} {'Cost':<7} | {'B9(New) Word':<12} {'Cost':<7} | {'Status'}")
        print("-" * 98)
        
        # Handle edge case where active targets < 10
        max_ranks = min(len(top_b8), len(top_b9_old), len(top_b9_new), 10)
        for rank in range(max_ranks):
            w8 = top_b8[rank]["word"]
            c8 = top_b8[rank]["expected_score"]
            
            w9o = top_b9_old[rank]["word"]
            c9o = top_b9_old[rank]["expected_score"]
            
            w9n = top_b9_new[rank]["word"]
            c9n = top_b9_new[rank]["expected_score"]
            
            # Determine match status
            if w8 == w9o == w9n:
                match_str = "ALL MATCH"
            elif w9o == w9n:
                match_str = "B9 MATCH"
            elif w8 == w9n:
                match_str = "B8/B9n MATCH"
            elif w8 == w9o:
                match_str = "B8/B9o MATCH"
            else:
                match_str = "ALL DIFF"
            
            print(f"#{rank+1:<4} | {w8:<10} {c8:<7.4f} | {w9o:<12} {c9o:<7.4f} | {w9n:<12} {c9n:<7.4f} | {match_str}")
        
        # Advance both bots' states for the next day, updating the EMA
        bot8.end_game(target_word, update_ema=True)
        bot9.end_game(target_word, update_ema=True)

    print("\nEnd of available games.")

if __name__ == "__main__":
    run_repeat_era_synthetic_test()