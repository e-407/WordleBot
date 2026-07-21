import numpy as np
import pandas as pd
from pathlib import Path

class GameEngine:
    def __init__(
        self, 
        allowed_guesses_path: str = "data/allowed_guesses.csv", 
        feedback_matrix_path: str = "data/feedback_matrix.npy"
    ):
        self.base_dir = Path(__file__).resolve().parent.parent
        
        # Load words
        self.allowed_guesses = self._load_word_list(self.base_dir / allowed_guesses_path)
        
        # Load precomputed feedback matrix
        matrix_full_path = self.base_dir / feedback_matrix_path
        print(f"Loading feedback matrix from: {matrix_full_path}")
        self.feedback_matrix = np.load(matrix_full_path)
        
        # Detect dimensions
        num_guesses, num_targets = self.feedback_matrix.shape
        
        # Setup target lists
        if num_guesses == num_targets:
            self.plausible_solutions = self.allowed_guesses
        else:
            # Fallback if you have separate lists
            self.plausible_solutions = self.allowed_guesses[:num_targets]
            
        # Create fast index lookups
        self.guess_to_idx = {word: i for i, word in enumerate(self.allowed_guesses)}
        self.idx_to_guess = {i: word for i, word in enumerate(self.allowed_guesses)}
        
        self.target_to_idx = {word: i for i, word in enumerate(self.plausible_solutions)}
        self.idx_to_target = {i: word for i, word in enumerate(self.plausible_solutions)}
        
        self.target_idx = None
        self.turns_taken = 0

    def _load_word_list(self, file_path: Path) -> list:
        df = pd.read_csv(file_path, header=None)
        words = df[0].astype(str).str.strip().str.lower().tolist()
        words.sort()
        return words

    def start_new_game(self, target_word: str = None):
        """Resets the referee state and picks a secret word."""
        self.turns_taken = 0
        if target_word is not None:
            clean_word = target_word.strip().lower()
            if clean_word not in self.target_to_idx:
                raise ValueError(f"'{clean_word}' is not a registered plausible solution.")
            self.target_idx = self.target_to_idx[clean_word]
        else:
            self.target_idx = np.random.randint(0, len(self.plausible_solutions))

    def evaluate_guess(self, guess_word: str) -> int:
        """Evaluates a raw string guess, incrementing turns."""
        clean_word = guess_word.strip().lower()
        if clean_word not in self.guess_to_idx:
            raise ValueError(f"'{clean_word}' is not an allowed guess.")
        guess_idx = self.guess_to_idx[clean_word]
        return self.evaluate_guess_idx(guess_idx)

    def evaluate_guess_idx(self, guess_idx: int) -> int:
        """Evaluates a guess directly using its precomputed matrix index."""
        self.turns_taken += 1
        return self.feedback_matrix[guess_idx, self.target_idx]
    
    def pattern_to_code(self, pattern: str) -> int:
        """Converts a 5-character string ('YBBGY') to a matrix integer (0-242)."""
        mapping = {'B': 0, 'Y': 1, 'G': 2, '⬛': 0, '🟨': 1, '🟩': 2}
        code = 0
        for i, char in enumerate(pattern):
            code += mapping.get(char, 0) * (3 ** (4 - i))
        return int(code)

    def code_to_pattern(self, code: int) -> str:
        """Converts a matrix integer (0-242) back to a 5-character string."""
        mapping = {0: 'B', 1: 'Y', 2: 'G'}
        pattern = ""
        for i in range(4, -1, -1):
            div = 3 ** i
            val = code // div
            code %= div
            pattern += mapping[val]
        return pattern