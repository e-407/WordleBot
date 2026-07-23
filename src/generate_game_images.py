import json
import sys
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

# Setup paths
PROJECT_ROOT = Path(__file__).resolve().parent.parent if '__file__' in globals() else Path().resolve()
DATA_DIR = PROJECT_ROOT / 'data'
OUTPUT_DIR = DATA_DIR / 'game_images'
JSON_PATH = DATA_DIR / 'test_suite_results.json'

# Wordle Dark Theme Color Palette
COLOR_BG = (18, 18, 19)
COLOR_CARD_BG = (24, 24, 25)
COLOR_BORDER = (58, 58, 60)
COLOR_GREEN = (83, 141, 78)
COLOR_YELLOW = (181, 159, 59)
COLOR_GRAY = (58, 58, 60)
COLOR_TEXT_PRIMARY = (255, 255, 255)
COLOR_TEXT_MUTED = (160, 161, 162)

def get_font(size: int, bold: bool = False):
    """Loads system TrueType font or falls back to PIL default."""
    font_names = ["arialbd.ttf" if bold else "arial.ttf", "DejaVuSans-Bold.ttf" if bold else "DejaVuSans.ttf", "Helvetica.ttf"]
    for font_name in font_names:
        try:
            return ImageFont.truetype(font_name, size)
        except OSError:
            continue
    return ImageFont.load_default()

def draw_square_tile(draw, x, y, size, letter, feedback_char, font):
    """Draws a crisp, perfectly square letter tile with vertically centered text."""
    color_map = {
        'G': COLOR_GREEN,
        'Y': COLOR_YELLOW,
        'B': COLOR_GRAY
    }
    fill_color = color_map.get(feedback_char, COLOR_GRAY)
    
    # Strictly Square Rectangle
    draw.rectangle([x, y, x + size, y + size], fill=fill_color)
    
    # Perfect Center Text Alignment ('mm' = middle-middle)
    center_x = x + size / 2
    center_y = y + size / 2
    draw.text((center_x, center_y), letter.upper(), fill=COLOR_TEXT_PRIMARY, font=font, anchor="mm")

def create_game_card(game_data: dict, output_file: Path):
    target_word = game_data["target"].upper()
    turns_taken = game_data["turns_taken"]
    total_time = game_data["total_game_time_sec"]
    history = game_data["turn_history"]
    
    # High-Resolution Grid Layout Parameters
    card_width = 1150
    header_height = 80
    tile_size = 64
    tile_gap = 8
    
    # CRITICAL: Row height strictly matches tile + gap to form a continuous grid
    row_height = tile_size + tile_gap 
    card_height = header_height + (len(history) * row_height) + 30
    
    # Canvas
    img = Image.new("RGB", (card_width, card_height), COLOR_BG)
    draw = ImageDraw.Draw(img)
    
    # Outer Card Border
    draw.rectangle([10, 10, card_width - 10, card_height - 10], fill=COLOR_CARD_BG, outline=COLOR_BORDER, width=2)
    
    # Fonts
    title_font = get_font(26, bold=True)
    subtitle_font = get_font(17)
    letter_font = get_font(34, bold=True) # Increased font size
    info_font = get_font(14, bold=True)
    top_choices_font = get_font(13)
    
    # Header
    draw.text((30, 25), f"TARGET: {target_word}", fill=COLOR_TEXT_PRIMARY, font=title_font)
    summary_str = f"Solved in {turns_taken} turns  |  Time: {total_time:.2f}s"
    draw.text((card_width - 30, 30), summary_str, fill=COLOR_TEXT_MUTED, font=subtitle_font, anchor="ra")
    
    draw.line([30, 65, card_width - 30, 65], fill=COLOR_BORDER, width=1)
    
    # Contiguous Grid Rendering
    start_y = 85
    for idx, turn_data in enumerate(history):
        y = start_y + (idx * row_height)
        
        guess = turn_data["chosen_guess"]
        feedback = turn_data["feedback"]
        pool_size = turn_data["pool_size_before"]
        top_suggestions = turn_data.get("top_4_suggestions", [])
        
        # Draw 5 Grid Tiles
        grid_x_start = 30
        for i in range(5):
            tx = grid_x_start + (i * (tile_size + tile_gap))
            draw_square_tile(draw, tx, y, tile_size, guess[i], feedback[i], letter_font)
            
        # Pack metadata to the right of the grid row
        info_x = grid_x_start + (5 * tile_size) + (4 * tile_gap) + 40
        chosen_skill = next((g["skill"] for g in top_suggestions if g["word"].lower() == guess.lower()), 99)
        
        info_str = f"Pool Remaining: {pool_size} words   •   Played Skill: {chosen_skill}/99"
        draw.text((info_x, y + 10), info_str, fill=COLOR_TEXT_PRIMARY, font=info_font)
        
        if top_suggestions:
            choices_formatted = [f"{g['word'].upper()} ({g['skill']})" for g in top_suggestions[:4]]
            choices_str = "Top Suggestions: " + "  •  ".join(choices_formatted)
            draw.text((info_x, y + 36), choices_str, fill=COLOR_TEXT_MUTED, font=top_choices_font)

    img.save(output_file, "PNG")

def main():
    if not JSON_PATH.exists():
        print(f"Error: Could not find '{JSON_PATH}'. Run run_test_suite.py first!")
        sys.exit(1)
        
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    
    with open(JSON_PATH, "r") as f:
        data = json.load(f)
        
    games = data.get("games", [])
    
    for game in games:
        game_id = game["game_id"]
        target = game["target"].lower()
        output_file = OUTPUT_DIR / f"game_{game_id:02d}_{target}.png"
        
        create_game_card(game, output_file)
        
    print(f"All {len(games)} tight-grid images successfully rendered to: {OUTPUT_DIR}")

if __name__ == "__main__":
    main()