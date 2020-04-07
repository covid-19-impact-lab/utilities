from functools import partial

from utilities.dashboard.app.general_barplot import condition_plot
from utilities.dashboard.app.general_barplot import setup_plot
from utilities.dashboard.app.general_barplot import prepare_data as general_prepare_data

prepare_data = partial(general_prepare_data, keep_last=False)
