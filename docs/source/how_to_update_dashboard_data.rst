How to update the dashboard data
================================

Group Differences
------------------------

Currently, the Group Differences Tabs rely on the same data source,
therefore they will be updated together. To update these Tabs you need to:

- Include the new variables/remove the old variables from `group_info.csv` and
  `data_description.csv` in `utilities/dashboard/liss`.
  The former file is the most important because it determines which variables
  will be included in the Tabs. The latter provides descriptions for the variables
  in the source data. Please adhere to the format of the existing files when
  adding new variables.
- Update `data_functions.py`, again in `utilities/dashboard/liss`.
  This file contains functions for the preparation of the source data
  (e.g. renaming of variables, conversion of dtypes). As an example, you may
  want to remove hard-coded variables which do no longer belong to the new data.
- Update `from_data_to_dashboard` in `utilities/dashboard`. You will
  need to change the name of the source data.

Labor Supply
------------

The Labor Supply Tab relies on an independent dataset. To update it you need to:

- Include the new variables/remove the old variables from
  `run_charts_description.csv`in `utilities/utilities/dashboard/liss`. Please
  stick to the current format.
- Update the function `_preprocess_data` in
  `utilities/dashboard/components/run_charts/lineplot.py`. This function prepares
  the source data, mostly by implementing data restrictions (e.g. on age) and by
  renaming the values that categorical variables can take if the original names
  are problematic.
- Update `from_data_to_dashboard` in `utilities/dashboard`, as above.
