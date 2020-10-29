from bokeh.models.widgets import Div

from utilities.dashboard.config import HEADER_STYLE


def adjust_lower_level_selection_menu_to_higher_level(
    attr, old, new, high_to_lower, lower_selector, caption_func=None, map_page=None
):
    """Adjust lower level select menu according to new higher level."""
    new_groups = high_to_lower[new]
    lower_selector.options = new_groups
    lower_selector.value = new_groups[0]
    if caption_func is not None:
        map_page.children[-1] = caption_func(group=new)


def create_caption_for_variable_group(
    group,
    group_to_header,
    group_to_caption,
    group_to_variables,
    variable_to_nice_name,
    variable_to_label,
):
    variables = group_to_variables[group]
    nice_vars = [variable_to_nice_name[var] for var in variables]
    labels = [variable_to_label[var] for var in variables]
    text = group_to_header[group]
    if len(variables) > 1:
        text += "<br> <br>" + "<br>".join(
            f"<b>{name}</b>: {label}" for name, label in zip(nice_vars, labels)
        )
    if isinstance(group_to_caption[group], str):
        text += "<br> <br>" + group_to_caption[group]

    element = Div(text=text, name="bottom", margin=(20, 0, 10, 0), style=HEADER_STYLE)
    return element
