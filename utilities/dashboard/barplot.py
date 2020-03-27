from pandas.api.types import is_bool_dtype
from stacked_barplot import condition_plot
from stacked_barplot import prepare_data as prepare_stacked_data
from stacked_barplot import setup_plot


def prepare_data(data, variables, bg_vars, nice_names):
    for var in variables:
        assert is_bool_dtype(data[var])

    plot_data = prepare_stacked_data(data, variables, bg_vars, nice_names)
    del plot_data["shares"]["False"]
    return plot_data
