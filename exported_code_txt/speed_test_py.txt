import time
from pathlib import Path
import pandas as pd
from engine import GameEngine
from bot3 import Bot3

def generate_slate_scenarios(engine, bot):
    slate_idx = engine.guess_to_idx.get("slate")
    sample_targets = ["irony", "rangy", "turbo", "pansy", "steak", "crimp", "flock"]
    
    scenarios = []
    for target in sample_targets:
        if target not in engine.target_to_idx:
            continue
        
        target_idx = engine.target_to_idx[target]
        feedback = engine.feedback_matrix[slate_idx, target_idx]
        
        bot.reset()
        bot.update_state(slate_idx, feedback)
        candidates = bot.active_targets.copy()
        
        scenarios.append({
            "target": target,
            "feedback": feedback,
            "pool_size": len(candidates),
            "candidates": candidates
        })
        
    return scenarios

def run_bot3_speed_test():
    PROJECT_ROOT = Path(__file__).resolve().parent.parent
    PRIORS_FILE = PROJECT_ROOT / 'data' / 'priors_4500.csv'
    
    print("Loading GameEngine and initializing Bot 3...")
    engine = GameEngine()
    
    bot = Bot3(
        all_words=engine.allowed_guesses,
        priors_path=str(PRIORS_FILE),
        feedback_matrix=engine.feedback_matrix,
        guess_to_idx=engine.guess_to_idx,
        target_to_idx=engine.target_to_idx
    )
    
    scenarios = generate_slate_scenarios(engine, bot)
    
    print("\n" + "=" * 90)
    print("                  BOT 3 TIMING & PERFORMANCE BENCHMARK                  ")
    print("=" * 90)
    print("Turn 1: SLATE (Hardcoded -> 0.00 ms)\n")
    
    results = []
    
    for i, sc in enumerate(scenarios, 1):
        candidates = sc["candidates"]
        pool_size = sc["pool_size"]
        target = sc["target"]
        
        print(f"[{i}/{len(scenarios)}] Evaluating '{target}' (Pool: {pool_size} words)... ", end="", flush=True)
        
        # ---------------------------------------------------------
        # TEST 1: Single Best Guess (Playing Mode - uses Pruning)
        # ---------------------------------------------------------
        t0 = time.perf_counter()
        best_guess_word = bot.make_guess(candidates)
        t_single_s = time.perf_counter() - t0
        
        # ---------------------------------------------------------
        # TEST 2: Top 10 List Generation (Analysis Mode - Full Evaluation)
        # ---------------------------------------------------------
        t0 = time.perf_counter()
        top_10 = bot.get_top_guesses(candidates, top_n=10)
        t_top10_s = time.perf_counter() - t0
        
        top_preview = ", ".join([f"{g['word']} ({g['skill']})" for g in top_10[:3]])
        
        print(f"Single: {t_single_s:.2f}s | Top 10: {t_top10_s:.2f}s | Best: {best_guess_word}")
        
        results.append({
            "Target": target,
            "Pool Size": pool_size,
            "Best Guess": best_guess_word,
            "Single Guess (s)": round(t_single_s, 2),
            "Top 10 List (s)": round(t_top10_s, 2),
            "Top Suggestions Preview": top_preview
        })
        
    print("\n" + "=" * 90)
    df = pd.DataFrame(results)
    print(df.to_string(index=False))
    print("=" * 90)
    
    avg_single = sum(r["Single Guess (s)"] for r in results) / len(results)
    avg_top10 = sum(r["Top 10 List (s)"] for r in results) / len(results)
    
    print("\n### Performance Summary:")
    print(f"* **Average Time for Single Best Guess (Playing):**   {avg_single:.2f} seconds")
    print(f"* **Average Time for Top 10 Ranked List (Analyzing):** {avg_top10:.2f} seconds")
    print("=" * 90)

if __name__ == "__main__":
    run_bot3_speed_test()