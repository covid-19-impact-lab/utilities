===================
Data Cleaning Tools
===================

.. motivation 
This toolbox provides functions that allow to automate and speed up data cleaning. 
The information that allows us to automate parts of the data cleaning can also be used
to automate the generation of data documentation and data visualization. 

.. data description table 
To do this, we rely on a table that describes what the finished dataset looks like
and provides information how variables are related to each other. 

The module `data_cleaning.py` provides variables to clean a dataset using this table. 
We outline a workflow to clean data efficiently below.

Because of the overlap between COVID-19 questionnaires we maintain one table for all questionnaires.

.. toctree::
   :maxdepth: 1

   data_description_table
   data_cleaning
