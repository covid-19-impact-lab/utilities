from utilities.dashboard.components.debugging import no_plot
from utilities.dashboard.components.univariate_distributions import barplot
from utilities.dashboard.components.univariate_distributions import distplot
from utilities.dashboard.components.univariate_distributions import stacked_barplot


plot_modules = {
    "stacked_barplot": stacked_barplot,
    "barplot": barplot,
    "no_plot": no_plot,
    "distplot": distplot,
}


def create_univariate_distributions_data(
    data, variable_mappings, nice_names, groups, group_info, menu_labels, language
):
    vm = variable_mappings

    relevant_bg_vars = vm["group_to_variables"]["Background Overview"]

    res = {}
    group_to_plot_type = group_info.set_index(f"group_{language}")[
        "plot_type"
    ].to_dict()
    res["group_to_plot_type"] = group_to_plot_type

    plot_data = {}

    for g in groups:
        plot_type = group_to_plot_type[g]
        prepare_data = getattr(plot_modules[plot_type], "prepare_data")
        plot_data[g] = prepare_data(
            data=data,
            variables=vm["group_to_variables"][g],
            bg_vars=[x for x in relevant_bg_vars if x != "prov"],
            nice_names=nice_names,
            labels=vm["variable_to_label"],
            nothing_string=menu_labels["nothing_category"],
        )

    res["plot_data"] = plot_data
    res["background_variables"] = [
        nice_names[var] for var in relevant_bg_vars if var != "prov"
    ]

    return res
