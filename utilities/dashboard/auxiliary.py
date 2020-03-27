from bokeh.plotting import figure


def create_standard_figure(title, name, tooltips=None):
    """Return a styled, empty figure of predetermined height and width.

    Args:
        title (str): Title of the figure.
        tooltips (list): List of bokeh tooltips to add to the figure.

    Returns:
        fig (bokeh Figure)

    """
    fig = figure(
        plot_height=350, plot_width=700, title=title, tooltips=tooltips, name=name
    )
    fig.title.text_font_size = "15pt"
    fig.min_border_left = 50
    fig.min_border_right = 50
    fig.min_border_top = 20
    fig.min_border_bottom = 50
    fig.toolbar_location = None
    return fig
