from pathlib import Path


DASHBOARD_ROOT = Path(__file__).parent.resolve()

MAPS_DIR = DASHBOARD_ROOT / "components" / "maps"

UNIVARIATE_DISTRIBUTIONS_DIR = (
    DASHBOARD_ROOT / "components" / "univariate_distributions"
)

APP_DIR = DASHBOARD_ROOT / "app"


PLOT_WIDTH = 600
