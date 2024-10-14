from utilities.dashboard.components.debugging import no_plot
from utilities.dashboard.components.univariate_distributions import barplot
from utilities.dashboard.components.univariate_distributions import distplot
from utilities.dashboard.components.univariate_distributions import stacked_barplot
from utilities.dashboard.config import UNIVARIATE_DISTRIBUTIONS_DIR


plot_modules = {
    "stacked_barplot": stacked_barplot,
    "barplot": barplot,
    "no_plot": no_plot,
    "distplot": distplot,
}


def create_univariate_distributions_data(
    data,
    variable_mappings,
    nice_names,
    groups,
    group_info,
    menu_labels,
    language,
    april_wave=None,
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

    # text for plot is processed separately
    metadata_path = UNIVARIATE_DISTRIBUTIONS_DIR / "metadata"
    if april_wave == "yes":
        if language == "english":
            with open(
                metadata_path / f"plot_intro_april_english.txt", "r", encoding="utf-8"
            ) as f:
                plot_data["plot_intro"] = f.read()
            plot_data["title"] = (
                "How Does the CoVid-19 Pandemic Affect Different Groups?"
            )
        elif language == "german":
            with open(
                metadata_path / f"plot_intro_april_german.txt", "r", encoding="utf-8"
            ) as f:
                plot_data["plot_intro"] = f.read()
            plot_data["title"] = (
                "Wie sind unterschiedliche Gruppen von der Corona Pandemie betroffen?"
            )

    else:
        if language == "english":
            with open(
                metadata_path / f"plot_intro_english.txt", "r", encoding="utf-8"
            ) as f:
                plot_data["plot_intro"] = f.read()
            plot_data["title"] = (
                "How Does the CoVid-19 Pandemic Affect Different Groups?"
            )
        elif language == "german":
            with open(
                metadata_path / f"plot_intro_german.txt", "r", encoding="utf-8"
            ) as f:
                plot_data["plot_intro"] = f.read()
            plot_data["title"] = (
                "Wie sind unterschiedliche Gruppen von der Corona Pandemie betroffen?"
            )

    res["plot_data"] = plot_data
    res["background_variables"] = [
        nice_names[var] for var in relevant_bg_vars if var != "prov"
    ]

    return res
