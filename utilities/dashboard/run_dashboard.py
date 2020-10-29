import os
import sys
from pathlib import Path

from utilities.dashboard.config import APP_DIR

if __name__ == "__main__":
    data_dir = Path(sys.argv[1])
    path_to_app = Path(__file__).resolve().parent / "app"
    command = f"bokeh serve --show {APP_DIR} --args {data_dir}"  # noqa
    print("\n\n", 80 * "-", "\n\n", command, "\n\n", 80 * "-", "\n\n")
    os.system(command)
