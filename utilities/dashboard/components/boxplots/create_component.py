from functools import partial

from bokeh.layouts import Column
from bokeh.layouts import Row
from bokeh.models import Select
from bokeh.models.widgets import Div

from utilities.dashboard.components.boxplots.boxplot import setup_plot
from utilities.dashboard.config import PLOT_WIDTH
from utilities.dashboard.config import TITLE_STYLE


def create_boxplots(data, variable_mappings, language, menu_labels):
    """Create the childcare tab, showing boxplots for selected outcome and
    background variables.

    Args:
        data (dict): Dictionary of boxplots data.
        variable_mappings (dict): Dictionary of boxplots metadata.
        language (str): One of ["english", "german"].
        menu_labels (dict): Dictionary of menu labels.

    Returns:
        bokeh Column

    """
    outcome_variables = variable_mappings["outcome_variables"]
    background_variables = variable_mappings["background_variables"]
    secondary_background_variable = variable_mappings["secondary_background_variable"]
    sample_categories = variable_mappings["sample_categories"]
    nice_name_to_outcome = variable_mappings["nice_name_to_outcome"]
    nice_name_to_background = variable_mappings["nice_name_to_background"]
    nice_name_to_sample_cat = variable_mappings["nice_name_to_sample_cat"]

    dict_var = variable_mappings["outcome_variable_to_nice_name"]
    dict_bg_var = variable_mappings["background_variable_to_nice_name"]
    dict_sample_cat = variable_mappings["sample_cat_to_nice_name"]

    outcome_variable = outcome_variables[0]
    background_variable = background_variables[0]
    sample_category = sample_categories[0]

    selection_menus = [
        Select(
            title=menu_labels["outcome"],
            options=[dict_var[var] for var in outcome_variables],
            value=dict_var[outcome_variable],
            name="outcome_variable_selector",
            width=220,
        ),
        Select(
            title=menu_labels["split_by"],
            options=[dict_bg_var[var] for var in background_variables],
            value=dict_bg_var[background_variable],
            name="background_variable_selector",
            width=220,
        ),
        Select(
            title=menu_labels["sample"],
            options=[dict_sample_cat[cat] for cat in sample_categories],
            value=dict_sample_cat[sample_category],
            name="sample_category_selector",
            width=220,
        ),
    ]

    boxplot = setup_plot(
        data_dict=data,
        bg_var_1=background_variable,
        bg_var_2=secondary_background_variable,
        outcome=outcome_variable,
        sample=sample_category,
        language=language,
    )

    title = Div(
        text=data["title"], style=TITLE_STYLE, margin=(10, 0, 10, 0), width=PLOT_WIDTH
    )

    top_text = Div(
        text=data["top_text"],
        margin=(10, 0, 10, 0),
        style={"text-align": "justify"},
        width=PLOT_WIDTH,
    )

    bottom_text = Div(
        text=data["bottom_text"],
        margin=(10, 0, 10, 0),
        style={"text-align": "justify"},
        width=PLOT_WIDTH,
    )

    boxplots_page = Column(title, top_text, Row(*selection_menus), boxplot, bottom_text)

    boxplots_selectors = boxplots_page.children[2].children

    outcome_variable_callback = partial(
        update_outcome_variable,
        boxplots_page=boxplots_page,
        data_dict=data,
        nice_name_to_background=nice_name_to_background,
        nice_name_to_outcome=nice_name_to_outcome,
        nice_name_to_sample_cat=nice_name_to_sample_cat,
        selection_menus=selection_menus,
        setup_plot=setup_plot,
        secondary_background_variable=secondary_background_variable,
        language=language,
    )

    boxplots_selectors[0].on_change("value", outcome_variable_callback)

    background_variable_callback = partial(
        update_background_variable,
        boxplots_page=boxplots_page,
        data_dict=data,
        nice_name_to_background=nice_name_to_background,
        nice_name_to_outcome=nice_name_to_outcome,
        nice_name_to_sample_cat=nice_name_to_sample_cat,
        selection_menus=selection_menus,
        setup_plot=setup_plot,
        secondary_background_variable=secondary_background_variable,
        language=language,
    )

    boxplots_selectors[1].on_change("value", background_variable_callback)

    sample_callback = partial(
        update_sample,
        boxplots_page=boxplots_page,
        data_dict=data,
        nice_name_to_background=nice_name_to_background,
        nice_name_to_outcome=nice_name_to_outcome,
        nice_name_to_sample_cat=nice_name_to_sample_cat,
        selection_menus=selection_menus,
        setup_plot=setup_plot,
        secondary_background_variable=secondary_background_variable,
        language=language,
    )

    boxplots_selectors[2].on_change("value", sample_callback)

    return boxplots_page


def update_outcome_variable(
    attr,
    old,
    new,
    boxplots_page,
    data_dict,
    nice_name_to_background,
    nice_name_to_outcome,
    nice_name_to_sample_cat,
    selection_menus,
    setup_plot,
    secondary_background_variable,
    language,
):
    bg_var_1 = nice_name_to_background[selection_menus[1].value]
    sample = nice_name_to_sample_cat[selection_menus[2].value]
    outcome = nice_name_to_outcome[new]
    new_boxplot = setup_plot(
        data_dict=data_dict,
        bg_var_1=bg_var_1,
        bg_var_2=secondary_background_variable,
        outcome=outcome,
        sample=sample,
        language=language,
    )
    boxplots_page.children[3] = new_boxplot
    selection_menus[0].value = new


def update_background_variable(
    attr,
    old,
    new,
    boxplots_page,
    data_dict,
    nice_name_to_background,
    nice_name_to_outcome,
    nice_name_to_sample_cat,
    selection_menus,
    setup_plot,
    secondary_background_variable,
    language,
):
    bg_var_1 = nice_name_to_background[new]
    sample = nice_name_to_sample_cat[selection_menus[2].value]
    outcome = nice_name_to_outcome[selection_menus[0].value]
    new_boxplot = setup_plot(
        data_dict=data_dict,
        bg_var_1=bg_var_1,
        bg_var_2=secondary_background_variable,
        outcome=outcome,
        sample=sample,
        language=language,
    )
    boxplots_page.children[3] = new_boxplot
    selection_menus[1].value = new


def update_sample(
    attr,
    old,
    new,
    boxplots_page,
    data_dict,
    nice_name_to_background,
    nice_name_to_outcome,
    nice_name_to_sample_cat,
    selection_menus,
    setup_plot,
    secondary_background_variable,
    language,
):
    bg_var_1 = nice_name_to_background[selection_menus[1].value]
    sample = nice_name_to_sample_cat[new]
    outcome = nice_name_to_outcome[selection_menus[0].value]
    new_boxplot = setup_plot(
        data_dict=data_dict,
        bg_var_1=bg_var_1,
        bg_var_2=secondary_background_variable,
        outcome=outcome,
        sample=sample,
        language=language,
    )
    boxplots_page.children[3] = new_boxplot
    selection_menus[2].value = new
