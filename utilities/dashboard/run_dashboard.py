import sys
import os
from pathlib import Path

if __name__ == "__main__":
    path_to_pickle = Path(sys.argv[1])
    path_to_app = Path(__file__).resolve().parent / "app"
    command = f"bokeh serve --show {path_to_app} --args {path_to_pickle}" # noqa
    print("\n\n", 80 * "-", "\n\n", command, "\n\n", 80 * "-", "\n\n")
    os.system(command)
