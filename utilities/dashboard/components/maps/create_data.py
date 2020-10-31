from utilities.dashboard.components.maps.mapplot import prepare_maps_data


def create_maps_data(data, variable_mappings, nice_names, groups, language, data_name):
    if language == "english":
        translations = {
            "Province": "Province",
            "No. Obs": "No. Obs",
            "Question": "Question",
            "Value": "Value",
            "Share": "Share",
            "Mean": "Mean",
            "Most Common": "Most Common",
        }
    elif language == "german":
        translations = {
            "Province": "Provinz",
            "No. Obs": "Antworten",
            "Question": "Frage",
            "Value": "Wert",
            "Share": "Anteil",
            "Mean": "Mittelwert",
            "Most Common": "Häufigste Antwort",
        }
    maps_data = {"tooltips": translations}

    for g in groups:
        maps_data[g] = prepare_maps_data(
            data=data,
            variables=variable_mappings["group_to_variables"][g],
            nice_names=nice_names,
            labels=variable_mappings["variable_to_label"],
            data_name=data_name,
        )

    return maps_data
