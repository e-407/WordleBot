import datetime
import csv
import time
import requests
import os

def fetch_wordle_history():
    # Wordle launch date (Game #0)
    start_date = datetime.date(2021, 6, 19)
    # Today's date (July 15, 2026)
    end_date = datetime.date(2026, 7, 15)
    
    # Target path pointing directly to your past_answers.csv
    csv_path = os.path.join("data", "past_answers.csv")
    
    # Ensure the data directory exists
    os.makedirs(os.path.dirname(csv_path), exist_ok=True)
    
    print(f"Starting fetch from {start_date} to {end_date}...")
    
    # Open CSV file to write the results
    with open(csv_path, mode="w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        # Write headers
        writer.writerow(["game_num", "date", "solution"])
        
        current_date = start_date
        while current_date <= end_date:
            date_str = current_date.strftime("%Y-%m-%d")
            url = f"https://www.nytimes.com/svc/wordle/v2/{date_str}.json"
            
            try:
                # Set a reasonable timeout to handle network lag
                response = requests.get(url, timeout=5)
                
                if response.status_code == 200:
                    data = response.json()
                    solution = data.get("solution")
                    
                    if solution:
                        # Fallback calculation if "days_since_launch" is missing or None in the API
                        game_num = data.get("days_since_launch")
                        if game_num is None:
                            game_num = (current_date - start_date).days
                        
                        writer.writerow([game_num, date_str, solution.lower()])
                        print(f"Saved Game #{game_num:04d} | {date_str} | {solution.lower()}")
                elif response.status_code == 404:
                    print(f"No game scheduled for {date_str} (HTTP 404)")
                else:
                    print(f"Error fetching {date_str}: HTTP {response.status_code}")
                    
            except requests.exceptions.RequestException as e:
                print(f"Network error on {date_str}: {e}")
                # Wait longer on network error before retrying
                time.sleep(2)
                continue
            
            # Sleep briefly (100ms) to respect NYT rate limits
            time.sleep(0.1)
            current_date += datetime.timedelta(days=1)
            
    print(f"\nSuccess! Wordle dataset successfully written to {csv_path}")

if __name__ == "__main__":
    fetch_wordle_history()