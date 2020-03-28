from bokeh.models import Div


def prepare_data(data, variables, bg_vars, nice_names, labels):
    return {"shares": {}, "selectors": {}}


def setup_plot(shares, selectors, bg_var="all"):
    return Div(text="This group is not being plotted at the moment.")


def condition_plot(plot, selectors, bg_var, n_categories):
    pass
