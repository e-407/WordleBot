from abc import ABC, abstractmethod
from collections import defaultdict

class BaseBot(ABC):
    def __init__(self, all_words: list, feedback_matrix, guess_to_idx: dict, target_to_idx: dict):
        self.name = "Base Bot"
        self.all_words = all_words
        self.matrix = feedback_matrix
        self.guess_to_idx = guess_to_idx
        self.target_to_idx = target_to_idx
        self.idx_to_guess = {v: k for k, v in self.guess_to_idx.items()}

    @abstractmethod
    def reset(self):
        """Called at the start of every game to reset the candidate pool."""
        pass

    @abstractmethod
    def update_state(self, guess_idx: int, feedback: int):
        """Filters the active target candidate list using the matrix row."""
        pass

    @abstractmethod
    def get_best_guess(self) -> int:
        """Returns the chosen guess's integer index."""
        pass

    def end_game(self, target_word: str):
        # Base implementation does nothing.
        # Future bots will override this to update priors and clear caches.
        pass

def get_feedback(guess: str, target: str) -> tuple:
    """Standard feedback calculator. 0 = Gray, 1 = Yellow, 2 = Green."""
    feedback = [0] * 5
    target_counts = defaultdict(int)
    
    for char in target:
        target_counts[char] += 1
        
    for i in range(5):
        if guess[i] == target[i]:
            feedback[i] = 2
            target_counts[guess[i]] -= 1
            
    for i in range(5):
        if feedback[i] == 0 and target_counts[guess[i]] > 0:
            feedback[i] = 1
            target_counts[guess[i]] -= 1
            
    return tuple(feedback)