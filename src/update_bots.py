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
from bot5 import Bot5
from bot6 import Bot6
from bot7 import Bot7
from bot8 import Bot8
from bot9 import Bot9


def get_game_year(df_past: pd.DataFrame, game_idx: int) -> int:
    """Helper to retrieve or infer the year for Bot 5's schema."""
    if 'year' in df_past.columns:
        return int(df_past.loc[game_idx, 'year'])
    elif 'date' in df_past.columns:
        return int(pd.to_datetime(df_past.loc[game_idx, 'date']).year)
    else:
        # Wordle Game 0 started on June 19, 2021
        start_date = pd.Timestamp("2021-06-19")
        return int((start_date + pd.Timedelta(days=int(game_idx))).year)


def update_bots():
    print("Initializing Engine & Checking Data Files...")
    engine = GameEngine()
    
    priors_file = str(PROJECT_ROOT / 'data' / 'priors_reweighted.csv')
    past_answers_file = PROJECT_ROOT / 'data' / 'past_answers.csv'
    
    # Explicit file paths matching exact schemas
    bot_files = {
        "b5": PROJECT_ROOT / 'data' / 'bot5_chronological_results_2.csv',
        "b6": PROJECT_ROOT / 'data' / 'bot6_chronological_results.csv',
        "b7": PROJECT_ROOT / 'data' / 'bot7_chronological_results.csv',
        "b8": PROJECT_ROOT / 'data' / 'bot8_chronological_results.csv',
        "b9": PROJECT_ROOT / 'data' / 'bot9_chronological_results_3.csv',
    }
    
    if not past_answers_file.exists():
        print(f"Error: Could not find {past_answers_file}")
        return

    # 1. Load full answers list
    df_past = pd.read_csv(past_answers_file)
    all_targets = df_past['solution'].tolist()
    
    # 2. Detect start of Repeat Era FIRST
    seen = set()
    repeat_era_start_idx = -1
    for i, w in enumerate(all_targets):
        if w in seen:
            repeat_era_start_idx = i
            break
        seen.add(w)

    # 3. Check existing CSV logs to determine start index individually for each bot
    start_indices = {}
    existing_dfs = {}
    
    print("\nChecking existing result logs:")
    for key, file_path in bot_files.items():
        if file_path.exists():
            df = pd.read_csv(file_path)
            existing_dfs[key] = df
            if not df.empty and 'game_num' in df.columns:
                start_indices[key] = int(df['game_num'].max()) + 1
            else:
                # Default empty files: B5 starts at 0, B6-B9 start at Repeat Era
                start_indices[key] = 0 if key == "b5" else repeat_era_start_idx
        else:
            existing_dfs[key] = pd.DataFrame()
            start_indices[key] = 0 if key == "b5" else repeat_era_start_idx
            
        needed = len(all_targets) - start_indices[key]
        bot_label = key.upper()
        if needed > 0:
            print(f" -> {bot_label} ({file_path.name}): Processed up to Game #{start_indices[key]-1}. Needs {needed} new game(s).")
        else:
            print(f" -> {bot_label} ({file_path.name}): Fully up to date (Game #{start_indices[key]-1}).")

    if all(idx >= len(all_targets) for idx in start_indices.values()):
        print("\nAll bots are already up to date! No execution required.")
        return

    # 3b. Build fast lookup dictionaries for historical results
    cached_results = {}
    for key, df in existing_dfs.items():
        if not df.empty and 'game_num' in df.columns:
            cached_results[key] = df.set_index('game_num').to_dict('index')
        else:
            cached_results[key] = {}

    # 4. Initialize Bot Instances
    bot5 = Bot5(
        all_words=list(engine.guess_to_idx.keys()),
        priors_path=priors_file,
        feedback_matrix=engine.feedback_matrix,
        guess_to_idx=engine.guess_to_idx,
        target_to_idx=engine.target_to_idx,
    )

    bot6 = Bot6(
        all_words=list(engine.guess_to_idx.keys()),
        priors_path=priors_file,
        feedback_matrix=engine.feedback_matrix,
        guess_to_idx=engine.guess_to_idx,
        target_to_idx=engine.target_to_idx,
        starting_repeat_prob=0.10,
        alpha=0.01
    )
    
    bot7 = Bot7(
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
        initial_g_bar=9.47
    )

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

    bots = {
        "b5": bot5,
        "b6": bot6,
        "b7": bot7,
        "b8": bot8,
        "b9": bot9,
    }

    # 5. Warm up internal states independently up to each bot's respective start_idx
    print("\nWarming up bot states from historical games...")
    for key, bot in bots.items():
        limit = start_indices[key]
        for i in range(limit):
            word = all_targets[i]
            is_in_repeat_era = (i >= repeat_era_start_idx)
            
            if key == "b5":
                bot.end_game(word)
            else:
                bot.end_game(word, update_ema=is_in_repeat_era)

    # 6. Play missing games and collect results
    min_start_idx = min(start_indices.values())
    print(f"\nPlaying New Days (Games {min_start_idx} to {len(all_targets)-1})...")
    print("-" * 102)
    header = (
        f"{'Game #':<8} | {'Target':<8} | {'Rep?':<5} | "
        f"{'B5':<5} | {'B6':<5} | {'B7':<5} | {'B8':<5} | {'B9':<5} | "
        f"{'P(Rep)':<10} | {'P(Adj)':<10} | {'ETA':<8}"
    )
    print(header)
    print("-" * 102)

    start_time = time.time()

    # Helper function to append a row immediately to disk
    def append_row(bot_key, row_dict):
        path = bot_files[bot_key]
        has_content = path.exists() and path.stat().st_size > 0
        pd.DataFrame([row_dict]).to_csv(path, mode='a', header=not has_content, index=False)

    for game_idx in range(min_start_idx, len(all_targets)):
        target_word = all_targets[game_idx]
        if target_word not in engine.target_to_idx:
            print(f"Warning: Word '{target_word}' at index {game_idx} not in engine dictionary. Skipping.")
            continue
            
        t_idx = engine.target_to_idx[target_word]
        is_repeat_historical = target_word in all_targets[:game_idx]
        rep_str = "YES" if is_repeat_historical else "NO"
        
        # Determine if we are currently in the Repeat Era for EMA updating
        is_in_repeat_era = (game_idx >= repeat_era_start_idx)

        counts = {}
        probs = {}

        # --- Play Bot 5 ---
        if game_idx >= start_indices["b5"]:
            bot5.reset()
            b5_guesses = []
            while True:
                g_idx = bot5.get_best_guess()
                g_word = engine.idx_to_guess[g_idx]
                b5_guesses.append(g_word)
                if g_word == target_word:
                    break
                bot5.update_state(g_idx, engine.feedback_matrix[g_idx, t_idx])
            
            bot5.end_game(target_word)
            
            append_row("b5", {
                "game_num": game_idx,
                "year": get_game_year(df_past, game_idx),
                "target": target_word,
                "guesses": "-".join(b5_guesses),
                "guess_count": len(b5_guesses),
                "failed": len(b5_guesses) > 6,
            })
            counts["b5"] = str(len(b5_guesses))

        # --- Play Bot 6 ---
        if game_idx >= start_indices["b6"]:
            bot6.reset()
            b6_guesses = []
            while True:
                g_idx = bot6.get_best_guess()
                g_word = engine.idx_to_guess[g_idx]
                b6_guesses.append(g_word)
                if g_word == target_word:
                    break
                bot6.update_state(g_idx, engine.feedback_matrix[g_idx, t_idx])
                
            b6_is_rep, b6_new_prob = bot6.end_game(target_word, update_ema=is_in_repeat_era)
            
            append_row("b6", {
                "game_num": game_idx,
                "target": target_word,
                "guesses": "-".join(b6_guesses),
                "guess_count": len(b6_guesses),
                "failed": len(b6_guesses) > 6,
                "is_repeat": b6_is_rep,
                "repeat_prob": b6_new_prob
            })
            counts["b6"] = str(len(b6_guesses))
            probs["b6"] = f"{b6_new_prob:.4f}"

        # --- Play Bot 7 ---
        if game_idx >= start_indices["b7"]:
            bot7.reset()
            b7_guesses = []
            b7_gap_before = bot7.days_since_last
            b7_gbar_before = bot7.g_bar
            
            while True:
                g_idx = bot7.get_best_guess()
                g_word = engine.idx_to_guess[g_idx]
                b7_guesses.append(g_word)
                if g_word == target_word:
                    break
                bot7.update_state(g_idx, engine.feedback_matrix[g_idx, t_idx])
                
            b7_is_rep, b7_new_prob = bot7.end_game(target_word, update_ema=is_in_repeat_era)
            
            append_row("b7", {
                "game_num": game_idx,
                "target": target_word,
                "guesses": "-".join(b7_guesses),
                "guess_count": len(b7_guesses),
                "failed": len(b7_guesses) > 6,
                "is_repeat": b7_is_rep,
                "days_since_last": b7_gap_before,
                "g_bar": round(b7_gbar_before, 2),
                "base_ema_prob": round(bot7.repeat_prob, 6),
                "adjusted_prob": round(b7_new_prob, 6)
            })
            counts["b7"] = str(len(b7_guesses))
            probs["b7"] = f"{b7_new_prob:.4f}"

        # --- Play Bot 8 ---
        if game_idx >= start_indices["b8"]:
            if "feign" in engine.target_to_idx:
                recorded_origin = bot8.used_word_game_num.get("feign", 0)

            bot8.reset()
            b8_guesses = []
            b8_gap_before = bot8.days_since_last
            b8_gbar_before = bot8.g_bar
            
            while True:
                g_idx = bot8.get_best_guess()
                g_word = engine.idx_to_guess[g_idx]
                b8_guesses.append(g_word)
                if g_word == target_word:
                    break
                bot8.update_state(g_idx, engine.feedback_matrix[g_idx, t_idx])
                
            b8_is_rep, b8_new_prob = bot8.end_game(target_word, update_ema=is_in_repeat_era)
            
            append_row("b8", {
                "game_num": game_idx,
                "target": target_word,
                "guesses": "-".join(b8_guesses),
                "guess_count": len(b8_guesses),
                "failed": len(b8_guesses) > 6,
                "is_repeat": b8_is_rep,
                "days_since_last": b8_gap_before,
                "g_bar": round(b8_gbar_before, 2),
                "base_ema_prob": round(bot8.repeat_prob, 6),
                "adjusted_prob": round(b8_new_prob, 6)
            })
            counts["b8"] = str(len(b8_guesses))
            probs["b8"] = f"{b8_new_prob:.4f}"

        # --- Play Bot 9 ---
        if game_idx >= start_indices["b9"]:
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
                
            b9_is_rep, b9_new_prob = bot9.end_game(target_word, update_ema=is_in_repeat_era)
            
            append_row("b9", {
                "game_num": game_idx,
                "target": target_word,
                "guesses": "-".join(b9_guesses),
                "guess_count": len(b9_guesses),
                "failed": len(b9_guesses) > 6,
                "is_repeat": b9_is_rep,
                "days_since_last": b9_gap_before,
                "g_bar": round(b9_gbar_before, 2),
                "base_ema_prob": round(bot9.repeat_prob, 6),
                "adjusted_prob": round(b9_new_prob, 6)
            })
            counts["b9"] = str(len(b9_guesses))
            probs["b9"] = f"{b9_new_prob:.4f}"

        # --- Fallback: Retrieve cached results for bots that were skipped ---
        for key in ["b5", "b6", "b7", "b8", "b9"]:
            if game_idx < start_indices[key] and game_idx in cached_results[key]:
                row = cached_results[key][game_idx]
                counts[key] = str(int(row['guess_count']))
                
                if key == "b6" and "repeat_prob" in row:
                    probs[key] = f"{float(row['repeat_prob']):.4f}"
                elif key in ["b7", "b8", "b9"] and "adjusted_prob" in row:
                    probs[key] = f"{float(row['adjusted_prob']):.4f}"

        # Format output table line and calculate ETA
        games_done = game_idx - min_start_idx + 1
        elapsed = time.time() - start_time
        avg_time = elapsed / games_done
        rem_games = len(all_targets) - 1 - game_idx
        eta_secs = int(avg_time * rem_games)
        eta_str = f"{eta_secs // 60:02d}:{eta_secs % 60:02d}" if rem_games > 0 else "00:00"

        c_b5 = counts.get("b5", "-")
        c_b6 = counts.get("b6", "-")
        c_b7 = counts.get("b7", "-")
        c_b8 = counts.get("b8", "-")
        c_b9 = counts.get("b9", "-")
        p_b6 = probs.get("b6", "-")
        
        # Grab adjusted probability from whichever bot was processed (B9 -> B8 -> B7)
        p_adj = probs.get("b9") or probs.get("b8") or probs.get("b7") or "-"

        print(
            f"{game_idx:<8} | {target_word:<8} | {rep_str:<5} | "
            f"{c_b5:<5} | {c_b6:<5} | {c_b7:<5} | {c_b8:<5} | {c_b9:<5} | "
            f"{p_b6:<10} | {p_adj:<10} | {eta_str:<8}"
        )

if __name__ == "__main__":
    update_bots()