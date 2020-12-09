import os
import sys
from pathlib import Path

import click

from utilities.dashboard.config import APP_DIR


@click.command()
@click.option(
    "--data_dir",
    prompt="Dashboard data directory",
    help="Path to dashboard data directory.",
)
def run_dashboard(data_dir):
    """Run dashboard.

    Args:
        APP_DIR (str): Path to app directory.
        data_dir (str): Path to data directory.

    """
    data_dir = Path(data_dir)
    path_to_app = Path(__file__).resolve().parent / "app"
    command = f"bokeh serve --show {APP_DIR} --args {data_dir}"  # noqa
    print("\n\n", 80 * "-", "\n\n", command, "\n\n", 80 * "-", "\n\n")
    os.system(command)


if __name__ == "__main__":
    run_dashboard()
