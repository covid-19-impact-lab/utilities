from pathlib import Path


DASHBOARD_ROOT = Path(__file__).parent.resolve()

MAPS_DIR = DASHBOARD_ROOT / "components" / "maps"

INTRO_PAGE_DIR = DASHBOARD_ROOT / "components" / "intro_page"

UNIVARIATE_DISTRIBUTIONS_DIR = (
    DASHBOARD_ROOT / "components" / "univariate_distributions"
)

APP_DIR = DASHBOARD_ROOT / "app"


PLOT_WIDTH = 600


TITLE_STYLE = {"font-size": "150%", "text-align": "left"}

HEADER_STYLE = {"color": "#808080"}
