import os
import json
import shutil

def export_code_to_txt():
    # Get the directory where this script is located
    base_dir = os.path.dirname(os.path.abspath(__file__))
    
    # Create the output directory
    output_dir = os.path.join(base_dir, "exported_code_txt")
    os.makedirs(output_dir, exist_ok=True)
    
    print(f"Creating .txt files in: {output_dir}\n")

    # 1. Process .py files in 'src'
    src_dir = os.path.join(base_dir, "src")
    if os.path.exists(src_dir):
        for root, _, files in os.walk(src_dir):
            for file in files:
                if file.endswith(".py"):
                    src_path = os.path.join(root, file)
                    
                    # Create a new filename: script.py -> script_py.txt
                    base_name = os.path.splitext(file)[0]
                    dst_name = f"{base_name}_py.txt"
                    dst_path = os.path.join(output_dir, dst_name)
                    
                    # Copy the file over as text
                    shutil.copy2(src_path, dst_path)
                    print(f"Copied: {file} -> {dst_name}")

    # 2. Process .ipynb files in 'notebooks'
    nb_dir = os.path.join(base_dir, "notebooks")
    if os.path.exists(nb_dir):
        for root, _, files in os.walk(nb_dir):
            for file in files:
                if file.endswith(".ipynb"):
                    src_path = os.path.join(root, file)
                    
                    # Create a new filename: analysis.ipynb -> analysis_ipynb.txt
                    base_name = os.path.splitext(file)[0]
                    dst_name = f"{base_name}_ipynb.txt"
                    dst_path = os.path.join(output_dir, dst_name)
                    
                    # Extract only the code cells from the notebook JSON
                    try:
                        with open(src_path, 'r', encoding='utf-8') as f:
                            nb_data = json.load(f)
                        
                        with open(dst_path, 'w', encoding='utf-8') as out_f:
                            for cell in nb_data.get("cells", []):
                                if cell.get("cell_type") == "code":
                                    # Join the source lines and write to file
                                    source = "".join(cell.get("source", []))
                                    out_f.write(source)
                                    out_f.write("\n\n# " + "-"*40 + "\n\n")
                        print(f"Extracted: {file} -> {dst_name}")
                    except Exception as e:
                        print(f"Error processing notebook {file}: {e}")

    print("\nDone! All files have been converted to .txt.")

if __name__ == "__main__":
    export_code_to_txt()