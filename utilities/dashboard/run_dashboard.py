import sys
import os
from pathlib import Path
from utilities.dashboard import dashboard_app

if __name__ == "__main__":
    path_to_pickle = Path(sys.argv[1])
    path_to_app = Path(dashboard_app.__file__).resolve()
    command = f"bokeh serve --show {path_to_app} --args {path_to_pickle}"
    print("\n\n", 80 * "-", "\n", command, 80 * "-", "\n", "\n\n")
    os.system(command)
