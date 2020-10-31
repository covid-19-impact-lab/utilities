from bokeh.layouts import Column
from bokeh.models.widgets import Div

from utilities.dashboard.config import PLOT_WIDTH
from utilities.dashboard.config import TITLE_STYLE


def create_intro_page(title, top_text, plot_intro, groupby_title, language):
    """Create the overview tab showing the distribution of any group of variables.

    Returns:
        page (bokeh Column)

    """
    title = Div(text=title, style=TITLE_STYLE, margin=(10, 0, 10, 0), width=PLOT_WIDTH)
    intro = Div(text=top_text, margin=(10, 0, 10, 0), style={"text-align": "justify"})
    plot_title = Div(text=groupby_title, style=TITLE_STYLE, margin=(30, 0, 10, 0))
    plot_intro = Div(
        text=plot_intro, margin=(10, 0, 30, 0), style={"text-align": "justify"}
    )

    intro_page = Column(title, intro, plot_title, plot_intro)
    return intro_page
