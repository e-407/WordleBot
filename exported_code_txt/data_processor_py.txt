import pandas as pd
from pathlib import Path

# Set up paths relative to the script location
BASE_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = BASE_DIR / 'data'

def load_allowed_guesses() -> list:
    """Loads the master list of all valid Wordle words."""
    allowed_path = DATA_DIR / 'allowed_guesses.csv'
    if not allowed_path.exists():
        raise FileNotFoundError(f"Master word list not found at {allowed_path}")
    
    df = pd.read_csv(allowed_path, header=None)
    return df[0].astype(str).str.strip().str.lower().tolist()

def process_wordletools_data():
    """
    Processes the WordleTools dataset.
    Strips percentages, converts to decimals, and fills missing words with 0.0.
    """
    input_path = DATA_DIR / 'wordletools_data.txt'
    output_path = DATA_DIR / 'wordletools_priors.csv'
    
    print(f"Processing WordleTools data from {input_path}...")
    
    if not input_path.exists():
        print(f"Error: {input_path} not found. Skipping WordleTools data processing.")
        return

    wt_priors = {}
    with open(input_path, 'r', encoding='utf-8') as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
                
            # Split by whitespace. Example line: "ABASE    52.8829%"
            parts = line.split()
            if len(parts) >= 2:
                word = parts[0].strip().lower()
                prior_str = parts[1].replace('%', '').strip()
                
                try:
                    prior_float = float(prior_str) / 100.0
                    wt_priors[word] = prior_float
                except ValueError:
                    print(f"Warning: Could not parse percentage for word '{word}'")

    master_words = load_allowed_guesses()
    final_data = []
    
    for word in master_words:
        prior = wt_priors.get(word, 0.0)
        final_data.append({'word': word, 'prior': prior})
        
    df_wt = pd.DataFrame(final_data)
    df_wt.to_csv(output_path, index=False)
    print(f"Successfully saved {len(df_wt)} WordleTools priors to {output_path}\n")


def process_original_nyt_data():
    """
    Processes the original NYT unprocessed data using strict TSV parsing.
    Extracts 'prior' and 'expectedAdditionalGuesses'.
    """
    input_path = DATA_DIR / 'unprocessed_word_data_2.txt'
    output_path = DATA_DIR / 'unseen_cleaned_priors.csv'
    
    print(f"Processing original NYT data from {input_path}...")
    
    if not input_path.exists():
        print(f"Error: {input_path} not found. Skipping NYT data processing.")
        return

    # Read the file as a Tab-Separated Values dataframe
    try:
        df_raw = pd.read_csv(input_path, sep='\t')
    except Exception as e:
        print(f"Failed to read the file as TSV: {e}")
        return

    # Ensure the columns we need actually exist
    required_cols = ['word', 'prior', 'expectedAdditionalGuesses']
    missing_cols = [c for c in required_cols if c not in df_raw.columns]
    if missing_cols:
        print(f"Error: Missing columns {missing_cols} in {input_path}")
        return

    # Build a quick lookup dictionary
    extracted_data = {}
    for _, row in df_raw.iterrows():
        word = str(row['word']).strip().lower()
        prior = float(row['prior']) if pd.notna(row['prior']) else 0.0
        expected = float(row['expectedAdditionalGuesses']) if pd.notna(row['expectedAdditionalGuesses']) else 0.0
        
        extracted_data[word] = {
            'prior': prior,
            'expected_guesses': expected
        }

    # Map against the master list of 14,855 words to ensure perfect alignment
    master_words = load_allowed_guesses()
    final_data = []
    
    for word in master_words:
        stats = extracted_data.get(word, {'prior': 0.0, 'expected_guesses': 0.0})
        final_data.append({
            'word': word,
            'prior': stats['prior'],
            'expected_guesses': stats['expected_guesses']
        })
        
    df_nyt = pd.DataFrame(final_data)
    df_nyt.to_csv(output_path, index=False)
    print(f"Successfully saved {len(df_nyt)} NYT priors + expected guesses to {output_path}")


if __name__ == "__main__":
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    
    #process_wordletools_data()
    process_original_nyt_data()