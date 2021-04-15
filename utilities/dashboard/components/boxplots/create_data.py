from utilities.dashboard.components.boxplots.boxplot import process_data
from utilities.dashboard.config import BOXPLOTS_DIR


def create_boxplots_data(data, variable_mappings, nice_names):
    """Create data needed to generate boxplots tab.

    Args:
        data (pd.DataFrame): Raw dataframe to process.
        variable_mappings (dict): Dictionary of boxplots metadata.
        nice_names (dict): Dictionary mapping variables' names to nice names.

    Returns:
        dict: Dictionary containing all data needed to generate the boxplots.

    """
    outcomes = variable_mappings["outcome_variables"]
    bg_vars_1 = variable_mappings["background_variables"]
    bg_var_2 = variable_mappings["secondary_background_variable"]
    sample_var = variable_mappings["sample_variable"]


    boxplots_data = process_data(
        data=data,
        bg_vars_1=bg_vars_1,
        bg_var_2=bg_var_2,
        outcomes=outcomes,
        sample_var=sample_var,
        nice_names=nice_names,
    )

    return boxplots_data
