import pandas as pd
from pandas.api.types import is_categorical


def convert_dtypes(data, data_name, description, logging="print"):
    """Convert and check dtypes to match between data and description.
from pandas.api.types import is_categorica
    Args:
        data (pd.DataFrame): DataFrame with the survey data.
        data_name (str): name of the column containing the variable names in 
            the raw dataset.
        description (pd.DataFrame): DataFrame describing the finished DataFrame.
        logging (str, optional): Path to a text file, "print" or None

    Returns:
        data (pd.DataFrame): DataFrame satisfying the 
    
    """
    pass


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
        descr_vars=description[data_name],
        logging=logging,
    )

    # warn if label missing
    # warn if topic missing


def _check_new_names(new_names, logging):
    if not new_names.duplicated().any(): 
        msg = "The new name column should not contain duplicates."
        _custom_logging(msg=msg, logging=logging)
    if not new_names.isnull().any(): 
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

    known_types = ["bool", "int", "float", "Categorical", "str"]
    if not types.isin(known_types).all():
        unknown_types = types[~types.isin(known_types)].tolist()
        msg = "There are unknokn types: \n" + "\n\t".join(unknown_types)
        _custom_logging(msg=msg, logging=logging)


def _check_var_overlap_btw_description_and_data(data_vars, covered, logging):
    missing_in_description = [x for x in data_vars if x not in descr_vars]
    if len(missing_in_description) > 0:
        msg = "The following variables from the raw dataset are not " + \
            "covered by the description table: \n\t" + \
            "\n\t".join(missing_in_description)
        _custom_logging(msg=msg, logging=logging)
    missing_in_data = [x for x in descr_vars if x not in data_vars]
    if len(missing_in_data) > 0:
        msg = "The following variables from the description table are not " + \
            "in the raw dataset: \n\t" + \
            "\n\t".join(missing_in_data)
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



def _load_description(path):
    description = pd.read_csv(
        path, true_values=["TRUE"], false_values=["FALSE"])
    description.dropna(how='all', axis=0, inplace=True)
    description.dropna(how='all', axis=1, inplace=True)
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
