import numpy as np
import pandas as pd
from pandas.api.types import is_categorical


def convert_dtypes(data, data_name, description, logging="print"):
    """Convert and check dtypes to match between data and description.
    Args:
        data (pd.DataFrame): DataFrame with the survey data.
        data_name (str): name of the column containing the variable names in 
            the raw dataset.
        description (pd.DataFrame): DataFrame describing the finished DataFrame.
        logging (str, optional): Path to a text file, "print" or None

    Returns:
        data (pd.DataFrame): DataFrame satisfying the 
    
    """
    dict_data = description.set_index('new_name')[["type", "categories_english", "ordered"]]
    overlap = set(data.columns).intersection(dict_data.index)
    dict_data = dict_data.loc[overlap]
    col_to_dtype = dict_data.T.to_dict()
    for col, col_dict in col_to_dtype.items():
        dtype = col_dict["type"]
        if dtype == "boolean":
            if data[col].dtype.name == "category":
               data[col] = data[col].replace({"Ja": True, "Nee": False})
            else:
                try:
                    data[col] = data[col].astype(dtype)
                except TypeError:
                    print(col, data[col].dtype, data[col].unique())
        elif dtype == "Categorical":
            pass
            # cats = col_dict["categories_english"]
            # ordered = col_dict["ordered"]
            # data[col] = pd.Categorical(values=data[col], categories=cats, ordered=ordered)
        elif dtype == "str":
            data[col].replace({"": np.nan}, inplace=True)
        else: # Int or float
            data[col] = data[col].astype(dtype)
    return data


def check_description(data, data_name, description, logging="print"):
    """Perform various checks on the description table.

    Args:
        data (pd.DataFrame): DataFrame with the survey data.
        data_name (str): column name of the raw variable names
        description (pd.DataFrame): DataFrame describing the finished DataFrame.
        logging (str, optional): Path to a text file, "print" or None

    """
    _check_new_names(new_names=description["new_name"], logging=logging)
    _check_types(types=description["type"], logging=logging)
    _check_var_overlap_btw_description_and_data(
        data_vars=data.columns,
        covered=description[data_name].unique(),
        logging=logging,
    )

    # warn if label missing
    # warn if topic missing


def _check_new_names(new_names, logging):
    if new_names.duplicated().any(): 
        msg = f"{new_names[new_names.duplicated()]} are duplicates in the new_name column."
        _custom_logging(msg=msg, logging=logging)
    if new_names.isnull().any(): 
        msg = "The new name column should not contain NaNs"
        _custom_logging(msg=msg, logging=logging)

    lengths = new_names.str.len()
    too_long = new_names[lengths > 31]
    if len(too_long) > 0:
        msg = "The following new names are too long for STATA:\n\t" + \
            "\n\t".join(too_long)
        _custom_logging(msg=msg, logging=logging)


def _check_types(types, logging):
    if types.isnull().any(): 
        msg = "You should declare a type for every variable."
        _custom_logging(msg=msg, logging=logging)

    known_types = ["boolean", "Int64", "float", "Categorical", "str"]
    if not types.isin(known_types).all():
        unknown_types = types[~types.isin(known_types)].tolist()
        msg = "There are unknokn types: \n" + "\n\t".join(unknown_types)
        _custom_logging(msg=msg, logging=logging)


def _check_var_overlap_btw_description_and_data(data_vars, covered, logging):
    missing_in_description = [x for x in data_vars if x not in covered]
    if len(missing_in_description) > 0:
        msg = "The following variables from the raw dataset are not " + \
            "covered by the description table: \n\t" + \
            "\n\t".join(sorted(missing_in_description))
        _custom_logging(msg=msg, logging=logging)
    missing_in_data = [str(x) for x in covered if x not in data_vars]
    if len(missing_in_data) > 0:
        msg = "The following variables from the description table are not " + \
            "in the raw dataset: \n\t" + \
            "\n\t".join(sorted(missing_in_data))
        _custom_logging(msg=msg, logging=logging)


def _check_categorical_cols(description, data_name, logging):
    cat_df = description[description["type"] == "Categorical"]
    no_categories = cat_df["categories_english"].isnull()
    if no_categories.any():
        msg = "English category labels are missing for: \n\t" + "\n\t".join(
            cat_df[no_categories]["new_name"])
        _custom_logging(msg=msg, logging=logging)
    ordered_bool = cat_df["ordered"].isin([True, False])
    if not ordered_bool.all():
        msg = "The ordered column must be boolean but is not for: \n\t" + \
            "\n\t".join(cat_df[~ordered_bool]["new_name"])

    # if categories and old_categories are given they must have same length



def _load_description(path, data_name):
    description = pd.read_csv(path)
    description.replace({"TRUE": True, "FALSE": False}, inplace=True)
    # use nullable pandas dtypes
    description["type"].replace({"int": "Int64", "bool": "boolean"}, inplace=True)
    # drop empty rows and columns
    description.dropna(how='all', axis=0, inplace=True)
    description.dropna(how='all', axis=1, inplace=True)
    # get relevant slice
    description = description[description["new_name"].notnull()]
    description = description[description["new_name"] != False]
    return description


def _custom_logging(msg, logging):
    """Print or write msg to a file."""
    padded = '\n\n' + msg + '\n\n'
    if logging == "print":
        print(padded)
    elif logging is not None:
        with open(logging, 'a') as f:
            f.write(padded)


def cat_to_float(sr):
    if is_categorical(sr):
        res = sr.cat.codes.replace({-1: np.nan}).astype(float)
    else:
        res = sr
    return res
