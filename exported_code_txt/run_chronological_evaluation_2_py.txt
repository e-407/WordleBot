import sys
import time
import pandas as pd
from pathlib import Path

# Setup project paths
PROJECT_ROOT = Path(__file__).resolve().parent.parent if '__file__' in globals() else Path().resolve()
SRC_DIR = PROJECT_ROOT / 'src'
if str(SRC_DIR) not in sys.path:
    sys.path.append(str(SRC_DIR))

from engine import GameEngine
from bot9 import Bot9  # Assumes Bot 9 is saved in src/bot9.py


def run_bot9_evaluation():
    print("Initializing Engine & Loading Reference Files...")
    engine = GameEngine()
    
    priors_file = str(PROJECT_ROOT / 'data' / 'priors_reweighted.csv')
    past_answers_file = PROJECT_ROOT / 'data' / 'past_answers.csv'
    b5_file = PROJECT_ROOT / 'data' / 'bot5_chronological_results_2.csv'
    b9_file = PROJECT_ROOT / 'data' / 'bot9_chronological_results_non_repeat_3.csv'
    
    if not past_answers_file.exists():
        print(f"Error: Could not find {past_answers_file}")
        return
        
    if not b5_file.exists():
        print(f"Error: Could not find Bot 5 results file: {b5_file}")
        return

    # 1. Load full answers list & Bot 5 historical scores
    df_past = pd.read_csv(past_answers_file)
    all_targets = df_past['solution'].tolist()
    
    df_b5 = pd.read_csv(b5_file)
    b5_scores = dict(zip(df_b5['game_num'], df_b5['guess_count']))

    # 2. Restrict to Games 0 through 1688 (Pre-repeat Era)
    MAX_GAME_IDX = 1688
    max_target_game = min(MAX_GAME_IDX, len(all_targets) - 1)

    # 3. Determine resume start index for Bot 9
    start_idx = 0
    if b9_file.exists() and b9_file.stat().st_size > 0:
        df_b9_existing = pd.read_csv(b9_file)
        if not df_b9_existing.empty and 'game_num' in df_b9_existing.columns:
            start_idx = int(df_b9_existing['game_num'].max()) + 1

    if start_idx > max_target_game:
        print(f"\nBot 9 is already evaluated up through Game #{max_target_game}!")
        return

    print(f"\nResuming Bot 9 evaluation from Game #{start_idx} up to Game #{max_target_game}...")

    # 4. Initialize Bot 9 Instance
    bot9 = Bot9(
        all_words=list(engine.guess_to_idx.keys()),
        priors_path=priors_file,
        feedback_matrix=engine.feedback_matrix,
        guess_to_idx=engine.guess_to_idx,
        target_to_idx=engine.target_to_idx,
        starting_repeat_prob=0,
        alpha=0.01,
        alpha_g=0.10,
        L=0.1,
        U=1.9,
        initial_g_bar=9.47,
        c_lorentz=100.0
    )

    # 5. Fast-forward Bot 9 state up to start_idx if resuming midway
    if start_idx > 0:
        print(f"Warming up Bot 9 internal state from historical games 0 to {start_idx - 1}...")
        for i in range(start_idx):
            word = all_targets[i]
            bot9.end_game(word, update_ema=False)

    # Helper function to append row immediately to disk
    def append_b9_row(row_dict):
        has_content = b9_file.exists() and b9_file.stat().st_size > 0
        pd.DataFrame([row_dict]).to_csv(b9_file, mode='a', header=not has_content, index=False)

    print("-" * 96)
    header = (
        f"{'Game #':<8} | {'Target':<8} | "
        f"{'B5 Score':<10} | {'B9 Score':<10} | {'Diff':<6} | "
        f"{'Run Diff':<10} | {'B9 Time (s)':<12} | {'ETA':<8}"
    )
    print(header)
    print("-" * 96)

    start_time = time.time()
    
    # New code:
    if start_idx > 0:
        # Load the existing games to pre-populate the totals
        df_b9_hist = pd.read_csv(b9_file)
        # We only care about games up to max_target_game in case the file has newer games
        df_b9_hist = df_b9_hist[df_b9_hist['game_num'] <= max_target_game]
        
        games_evaluated = len(df_b9_hist)
        total_b9_guesses = df_b9_hist['guess_count'].sum()
        
        # Match Bot 5 scores for the historical games
        total_b5_guesses = sum(b5_scores.get(g, 0) for g in df_b9_hist['game_num'])
    else:
        total_b5_guesses = 0
        total_b9_guesses = 0
        games_evaluated = 0

    for game_idx in range(start_idx, max_target_game + 1):
        target_word = all_targets[game_idx]
        if target_word not in engine.target_to_idx:
            print(f"Warning: Word '{target_word}' at index {game_idx} not in dictionary. Skipping.")
            continue
            
        t_idx = engine.target_to_idx[target_word]
        b5_score = b5_scores.get(game_idx, None)

        game_start_t = time.perf_counter()

        # Run Bot 9 game loop
        bot9.reset()
        b9_guesses = []
        b9_gap_before = bot9.days_since_last
        b9_gbar_before = bot9.g_bar

        while True:
            g_idx = bot9.get_best_guess()
            g_word = engine.idx_to_guess[g_idx]
            b9_guesses.append(g_word)
            if g_word == target_word:
                break
            bot9.update_state(g_idx, engine.feedback_matrix[g_idx, t_idx])
            
        b9_is_rep, b9_new_prob = bot9.end_game(target_word, update_ema=False)
        b9_score = len(b9_guesses)
        game_time = time.perf_counter() - game_start_t

        # Write result immediately to disk
        append_b9_row({
            "game_num": game_idx,
            "target": target_word,
            "guesses": "-".join(b9_guesses),
            "guess_count": b9_score,
            "failed": b9_score > 6,
            "is_repeat": b9_is_rep,
            "days_since_last": b9_gap_before,
            "g_bar": round(b9_gbar_before, 2),
            "base_ema_prob": round(bot9.repeat_prob, 6),
            "adjusted_prob": round(b9_new_prob, 6)
        })

        # Calculate live metrics
        b5_str = str(b5_score) if b5_score is not None else "N/A"
        diff_str = f"{b9_score - b5_score:+d}" if b5_score is not None else "N/A"
        
        if b5_score is not None:
            total_b5_guesses += b5_score
            total_b9_guesses += b9_score
            games_evaluated += 1

        # CHANGE: Calculate running cumulative difference
        running_diff = total_b9_guesses - total_b5_guesses
        running_diff_str = f"{running_diff:+d}" if games_evaluated > 0 else "N/A"

        games_done = game_idx - start_idx + 1
        elapsed = time.time() - start_time
        avg_time = elapsed / games_done
        rem_games = max_target_game - game_idx
        eta_secs = int(avg_time * rem_games)
        eta_str = f"{eta_secs // 60:02d}:{eta_secs % 60:02d}" if rem_games > 0 else "00:00"

        guesses_path_str = "-".join(b9_guesses)
        if len(guesses_path_str) > 35:
            guesses_path_str = guesses_path_str[:32] + "..."

        # CHANGE: Added running_diff_str to print output
        print(
            f"{game_idx:<8} | {target_word:<8} | "
            f"{b5_str:<10} | {b9_score:<10} | {diff_str:<6} | "
            f"{running_diff_str:<10} | {game_time:<12.2f} | {eta_str:<8}"
        )

    print("-" * 105)
    if games_evaluated > 0:
        b5_avg = total_b5_guesses / games_evaluated
        b9_avg = total_b9_guesses / games_evaluated
        print(f"EVALUATION COMPLETE (Games {start_idx} to {max_target_game}):")
        print(f" -> Bot 5 Average Score: {b5_avg:.4f}")
        print(f" -> Bot 9 Average Score: {b9_avg:.4f}")
        print(f" -> Score Difference:   {total_b9_guesses - total_b5_guesses:+d} total guesses ({b9_avg - b5_avg:+.4f}/game)")


if __name__ == "__main__":
    run_bot9_evaluation()