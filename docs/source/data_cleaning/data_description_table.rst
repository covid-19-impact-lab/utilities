==========================
The Data Description Table
==========================

The data description table helps with data cleaning and data documentation. 
In essence, it describes the finished dataset. 

For data cleaning it contains the following columns:

- `old_name`: 
    The variable name in the raw dataset (e.g. c01q01).
- `new_name`: 
    The name you want to give that variable (e.g. p_infected).
- `type`: 
    The data type the variable should have (``int, str, float, Categorical``).
- `ordered`: 
    ``True`` if categories are ordered. 
    Only applicable if the data type is ``Categorical``.
- `categories`: 
    List of the categories the variable will have after the data cleaning. 
    In case the variable is ordered they must be ordered from lowest to highest.
    Only applicable if the data type is ``Categorical``.
- `old_categories`: 
    List of the categories the variable takes in the raw dataset. 


For data documentation the `type`, `ordered` and `categories` variables are very useful. 
For example they allow automatic generation of distribution plots. 
In addition, the data description table also contains variables showing which variables belong together and provides additional information on each variable:

- `nice_name`: 
    A name for the variable to be used in a text body
- `label`: 
    A description of the variable (e.g. the question from the questionnaire).
- `topic`: 
    Category to wihch a variable belongs. 
    You can think of it as the title of of a page documenting all variables in that topic.
- `subtopic`: 
    Variables with the same subtopic will be plotted together.




