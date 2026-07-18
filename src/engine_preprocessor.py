import numpy as np
import pandas as pd
from pathlib import Path

class EnginePreprocessor:
    def __init__(
        self, 
        allowed_guesses_path: str = "data/allowed_guesses.csv", 
        plausible_solutions_path: str = None
    ):
        """
        Initializes the preprocessor. If plausible_solutions_path is None,
        it defaults to using the allowed guesses for both guesses and targets.
        """
        self.base_dir = Path(__file__).resolve().parent.parent
        self.guesses_path = self.base_dir / allowed_guesses_path
        
        # Load lists (safely handling headerless files)
        self.allowed_guesses = self._load_word_list(self.guesses_path)
        
        if plausible_solutions_path is None:
            print("No separate solutions list provided. Generating symmetric guess-vs-guess matrix.")
            self.plausible_solutions = self.allowed_guesses
        else:
            self.solutions_path = self.base_dir / plausible_solutions_path
            self.plausible_solutions = self._load_word_list(self.solutions_path)
        
        # Blazingly fast memory-view string-to-integer conversion
        self.guesses_ascii = self._words_to_ascii_array(self.allowed_guesses)
        self.solutions_ascii = self._words_to_ascii_array(self.plausible_solutions)
        
        # Precompute character occurrences in target words once to save loop overhead
        num_targets = len(self.plausible_solutions)
        self.target_counts_precomputed = np.zeros((num_targets, 26), dtype=np.uint8)
        solutions_mapped = self.solutions_ascii - 97 # Map 'a'-'z' to 0-25
        for col in range(5):
            np.add.at(self.target_counts_precomputed, (np.arange(num_targets), solutions_mapped[:, col]), 1)

    def _load_word_list(self, file_path: Path) -> list:
        """Loads a single-column, headerless word file, formatting strings cleanly."""
        try:
            df = pd.read_csv(file_path, header=None)
            words = df[0].astype(str).str.strip().str.lower().tolist()
            words.sort()  # Guarantee deterministic indexing
            return words
        except FileNotFoundError:
            raise FileNotFoundError(f"Could not locate word list file at: {file_path}")

    def _words_to_ascii_array(self, word_list: list) -> np.ndarray:
        """Instantly converts a Python string list to a 2D uint8 ASCII matrix."""
        return np.array(word_list, dtype='S5').view(np.uint8).reshape(-1, 5)

    def compute_feedback_row(self, guess: np.ndarray, targets: np.ndarray) -> np.ndarray:
        """
        Compares ONE guess against ALL targets simultaneously.
        Returns a 1D array of shape (M,) containing integer codes (0-242).
        """
        num_targets = targets.shape[0]
        scores = np.zeros((num_targets, 5), dtype=np.uint8)
        
        # 1. Green Pass
        greens = (targets == guess)  # Shape: (M, 5) boolean mask
        scores[greens] = 2
        
        # Copy our precomputed counts so we can modify them dynamically
        target_counts = self.target_counts_precomputed.copy()
        guess_mapped = guess - 97
        
        # Subtract green characters from counts so they aren't double-counted as yellows
        for col in range(5):
            green_mask = greens[:, col]
            guess_char = guess_mapped[col]
            rows = np.where(green_mask)[0]
            target_counts[rows, guess_char] -= 1
            
        # 2. Yellow Pass
        for col in range(5):
            not_green_mask = ~greens[:, col]
            guess_char = guess_mapped[col]
            
            # Check where targets have the character available
            has_char = target_counts[:, guess_char] > 0
            yellow_mask = not_green_mask & has_char
            
            scores[yellow_mask, col] = 1
            # Consume the letter to handle duplicates correctly
            target_counts[yellow_mask, guess_char] -= 1
            
        # 3. Base-3 Encoding to convert ternary array [a, b, c, d, e] to a base-10 int
        powers_of_three = np.array([81, 27, 9, 3, 1], dtype=np.uint8)
        return np.dot(scores, powers_of_three)

    def generate_and_save_matrix(self, output_filename: str = "feedback_matrix.npy"):
        """Generates the giant feedback matrix and writes it to a fast-loading .npy file."""
        num_guesses = len(self.allowed_guesses)
        num_targets = len(self.plausible_solutions)
        
        feedback_matrix = np.zeros((num_guesses, num_targets), dtype=np.uint8)
        print(f"Generating {num_guesses} x {num_targets} feedback matrix...")
        
        for i in range(num_guesses):
            guess_vector = self.guesses_ascii[i]
            feedback_matrix[i, :] = self.compute_feedback_row(guess_vector, self.solutions_ascii)
            
            if i % 2500 == 0 and i > 0:
                print(f"Processed {i}/{num_guesses} words...")
                
        output_path = self.base_dir / "data" / output_filename
        np.save(output_path, feedback_matrix)
        print(f"Success! Matrix saved to: {output_path}")

if __name__ == "__main__":
    preprocessor = EnginePreprocessor()
    preprocessor.generate_and_save_matrix()