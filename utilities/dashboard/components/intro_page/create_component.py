from bokeh.layouts import Column
from bokeh.models.widgets import Div

from utilities.dashboard.config import PLOT_WIDTH
from utilities.dashboard.config import TITLE_STYLE
from utilities.dashboard.config import SUBTITLE_STYLE


def create_intro_page(title, top_text, plot_intro, groupby_title, bottom_text, bottom_title, april_title, april_intro, language):
    """Create the overview tab showing the distribution of any group of variables.

    Returns:
        page (bokeh Column)

    """
    title = Div(text=title, style=TITLE_STYLE, margin=(10, 0, 10, 0), width=PLOT_WIDTH)
    intro = Div(text=top_text, margin=(10, 0, 10, 0), style={"text-align": "justify"})
    plot_title = Div(text=groupby_title, style=SUBTITLE_STYLE, margin=(5, 0, 10, 0))
    plot_intro = Div(
        text=plot_intro, margin=(10, 0, 20, 0), style={"text-align": "justify"}
    )
    labour_intro = Div(text=bottom_text, margin=(10, 0, 20, 0), style={"text-align":
    "justify" })
    labour_title = Div(text=bottom_title, style=SUBTITLE_STYLE, margin=(5, 0, 10, 0))
    april_intro = Div(
        text=april_intro, margin=(10, 0, 20, 0), style={"text-align": "justify"}
    )
    april_title =  Div(text=april_title, style=SUBTITLE_STYLE, margin=(5, 0, 10, 0))


    intro_page = Column(title, intro, plot_title, plot_intro, labour_title, labour_intro, april_title, april_intro)
    return intro_page
