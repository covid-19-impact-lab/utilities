from functools import partial

from utilities.dashboard.components.univariate_distributions.general_barplot import (
    condition_plot,
)
from utilities.dashboard.components.univariate_distributions.general_barplot import (
    prepare_data as general_prepare_data,
)
from utilities.dashboard.components.univariate_distributions.general_barplot import (
    setup_plot,
)

prepare_data = partial(general_prepare_data, keep_last=True)
