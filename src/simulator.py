import numpy as np
import pandas as pd
import time
from pathlib import Path

from engine import GameEngine
from base_bot import get_feedback
from bot1 import Bot1
from bot2 import Bot2
from bot3 import Bot3

class Simulator:
    # CHANGED: Replaced 'bot: BaseBot' with generic type-hinting to support duck-typing
    def __init__(self, engine: GameEngine, bot):
        self.engine = engine
        self.bot = bot

    def play_single_game(self, target_word: str = None, silent: bool = True) -> int:
        """Simulates a complete single game of Wordle."""
        # Ensure the bot supports full game simulation loops
        if not all(hasattr(self.bot, attr) for attr in ['reset', 'update_state', 'get_best_guess']):
            bot_name = getattr(self.bot, 'name', self.bot.__class__.__name__)
            print(f"Error: {bot_name} does not implement the full stateful simulation interface.")
            return 7

        self.engine.start_new_game(target_word)
        self.bot.reset()
        
        secret_word = self.engine.idx_to_target[self.engine.target_idx]
        if not silent:
            print(f"\n--- Starting Game: Secret Word is '{secret_word.upper()}' ---")
            
        while self.engine.turns_taken < 6:
            guess_idx = self.bot.get_best_guess()
            guess_word = self.engine.idx_to_guess[guess_idx]
            
            feedback = self.engine.evaluate_guess_idx(guess_idx)
            self.bot.update_state(guess_idx, feedback)
            
            if not silent:
                # CHANGED: Safely fetch length of active_targets across different bot implementations
                active_count = len(getattr(self.bot, 'active_targets', []))
                print(f"Turn {self.engine.turns_taken}: Guessed '{guess_word.upper()}' | "
                      f"Feedback Code: {feedback} | "
                      f"Active targets left: {active_count}")
                
            if feedback == 242:  # All Greens
                if not silent:
                    print(f"Solved! Took {self.engine.turns_taken} turns.")
                return self.engine.turns_taken
                
        if not silent:
            print(f"Failed to solve! Secret word was: '{secret_word.upper()}'")
        return 7

    def run_benchmark(self, target_words: list = None, file_path: str = None) -> dict:
        """
        Runs the bot deterministically over a given set of target words.
        Uses a single thread to maximize memoization cache hits.
        """
        targets = []
        
        # 1. Resolve target word source
        if file_path is not None:
            path = self.engine.base_dir / file_path
            print(f"Loading benchmark words from: {path}")
            if path.suffix == '.csv':
                df = pd.read_csv(path, header=None)
                targets = df[0].astype(str).str.strip().str.lower().tolist()
            else:
                with open(path, 'r') as f:
                    targets = [line.strip().lower() for line in f if line.strip()]
        elif target_words is not None:
            targets = [word.strip().lower() for word in target_words]
        else:
            targets = self.engine.plausible_solutions

        # 2. Filter valid targets
        valid_targets = [w for w in targets if w in self.engine.target_to_idx]
        num_games = len(valid_targets)
        
        if num_games == 0:
            print("Error: No valid target words found to run.")
            return {}

        print(f"\nStarting benchmark over {num_games} words...")
        start_time = time.time()
        scores = []

        # 3. Game execution loop
        for i, word in enumerate(valid_targets):
            score = self.play_single_game(target_word=word, silent=True)
            scores.append(score)
            
            if (i + 1) % 1000 == 0 or (i + 1) == num_games:
                elapsed = time.time() - start_time
                games_per_sec = (i + 1) / elapsed
                # CHANGED: Safely read memo cache size using getattr to handle bots without optimization caches
                cache_size = len(getattr(self.bot, 'memo', {}))
                print(f"Progress: {i+1:5d}/{num_games} ({((i+1)/num_games)*100:5.1f}%) | "
                      f"Speed: {games_per_sec:5.1f} games/s | "
                      f"Cache Size: {cache_size}")

        elapsed_total = time.time() - start_time
        bot_label = getattr(self.bot, 'name', self.bot.__class__.__name__)
        return self._generate_report(scores, elapsed_total, label=f"{bot_label.upper()} SUMMARY")

    def _generate_report(self, scores: list, elapsed: float, label: str) -> dict:
        """Helper to generate and print performance statistics."""
        scores = np.array(scores)
        num_games = len(scores)
        
        wins = scores[scores <= 6]
        win_rate = len(wins) / num_games * 100.0
        avg_guesses = np.mean(wins) if len(wins) > 0 else 0.0
        
        distribution = {t: int(np.sum(scores == t)) for t in range(1, 8)}
        
        print("\n" + "="*40)
        print(f"         {label}")
        print("="*40)
        print(f"Total Words Run:     {num_games}")
        print(f"Total Play Time:     {elapsed:.2f}s ({elapsed/num_games:.4f}s per game)")
        print(f"Win Rate:            {win_rate:.2f}%")
        print(f"Average Solve Score: {avg_guesses:.3f} turns")
        print("-" * 40)
        print("Score Distribution:")
        for t in range(1, 7):
            bars = "█" * int((distribution[t] / num_games) * 30 if num_games > 0 else 0)
            print(f"  {t} turns: {distribution[t]:04d} | {bars}")
        failures = distribution[7]
        fail_bars = "█" * int((failures / num_games) * 30 if num_games > 0 else 0)
        print(f"  Failed:  {failures:04d} | {fail_bars}")
        print("="*40)
        
        return {
            "win_rate": win_rate,
            "avg_guesses": avg_guesses,
            "distribution": distribution,
            "total_time": elapsed
        }

# =============================================================================
# MOVED OUTSIDE THE CLASS: Standalone helper functions for running tests
# =============================================================================

def format_feedback(feedback_tuple: tuple) -> str:
    """Converts the internal tuple to emojis."""
    mapping = {0: "⬛", 1: "🟨", 2: "🟩"}
    return "".join(mapping[val] for val in feedback_tuple)

def run_scenario_benchmarks(bot, all_words: list):
    bot_name = getattr(bot, 'name', bot.__class__.__name__)
    print(f"\n{'='*60}")
    print(f"RUNNING SCENARIO BENCHMARKS FOR: {bot_name}")
    print(f"{'='*60}")
    
    if not hasattr(bot, 'get_top_guesses'):
        print(f"Skipping scenario benchmarking: {bot_name} does not implement 'get_top_guesses'.")
        print(f"{'='*60}\n")
        return
    
    # FIX: Restrict candidate pool to valid targets with non-zero priors
    valid_targets = getattr(bot, 'valid_guesses', all_words)
    
    scenarios = [
        ("Green T", (0, 0, 0, 2, 0)),
        ("Yellow L, A and E", (0, 1, 1, 0, 1)),
        ("Green T and E", (0, 0, 0, 2, 2)),
        ("Yellow S and A", (1, 0, 1, 0, 0)),
        ("Green S, Yellow A, T, E", (2, 0, 1, 1, 1))
    ]
    
    initial_guess = "slate"
    
    for desc, feedback in scenarios:
        print(f"\nScenario: {desc}")
        print(f"Initial: {initial_guess.upper()} -> {format_feedback(feedback)}")
        
        # Filter from valid_targets instead of all_words
        candidates = [w for w in valid_targets if get_feedback(initial_guess, w) == feedback]
        print(f"Remaining Candidates: {len(candidates)}")
        
        if not candidates:
            print("No valid candidates left. Skipping.")
            continue
            
        top_guesses = bot.get_top_guesses(candidates, top_n=4)
        
        for i, g in enumerate(top_guesses, 1):
            metrics = ""
            if 'skill' in g and 'expected_score' in g:
                metrics = f" | Skill: {g['skill']} | Exp. Score: {g['expected_score']:.4f}"
            elif 'entropy' in g:
                metrics = f" | Entropy: {g['entropy']:.4f} bits | Win Prob: {g['win_prob']:.2%}"
                
            print(f"  {i}. {g['word'].upper()}{metrics}")
            
    print(f"\n{'='*60}\n")

if __name__ == "__main__":
    # 1. Resolve paths dynamically based on the script's location
    BASE_DIR = Path(__file__).resolve().parent.parent
    WORDS_FILE = BASE_DIR / 'data' / 'wordle_4500_guesses.csv'
    PRIORS_FILE = BASE_DIR / 'data' / 'priors_4500.csv'
    
    if not WORDS_FILE.exists() or not PRIORS_FILE.exists():
        print(f"Error: Missing required files.\nEnsure they exist at:\n- {WORDS_FILE}\n- {PRIORS_FILE}")
    else:
        # 2. Start the shared GameEngine
        print("Initializing Game Engine and loading Feedback Matrix...")
        engine = GameEngine()
        all_words = engine.allowed_guesses
        priors_path_str = str(PRIORS_FILE)
        
        # 3. Initialize the newly optimized 2-Turn Lookahead Bot 3
        print("Initializing Bot 3 (2-Turn Lookahead) with Engine Matrix...")
        try:
            bot3 = Bot3(
                all_words=all_words, 
                priors_path=priors_path_str, 
                feedback_matrix=engine.feedback_matrix, 
                guess_to_idx=engine.guess_to_idx, 
                target_to_idx=engine.target_to_idx
            )
        except Exception as e:
            print(f"Failed to initialize Bot3: {e}")
            bot3 = None
        
        # 4. Run the scenario benchmarks safely for Bot 3
        if bot3:
            print("\n" + "="*60)
            print("         STARTING BOT 3 SCENARIO BENCHMARK")
            print("="*60)
            run_scenario_benchmarks(bot3, all_words)