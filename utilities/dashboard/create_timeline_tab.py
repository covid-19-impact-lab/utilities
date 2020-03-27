from bokeh.layouts import Column
from bokeh.models import Panel
from bokeh.models.widgets import Div


def create_timeline_tab(timeline_tab_data):
    timeline_title = Div(
        text="Timeline Not Implemented Yet", style={"font-size": "200%"}
    )
    timeline_col = Column(*[timeline_title])
    timeline_tab = Panel(child=timeline_col, title="Timeline", name="timeline_panel")
    return timeline_tab
