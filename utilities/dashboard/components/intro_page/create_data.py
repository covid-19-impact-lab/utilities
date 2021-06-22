from utilities.dashboard.config import INTRO_PAGE_DIR


def create_intro_page_data(language, dataset_name):
    """Create a dictionary with several dataset and language specific text snippets and headers."""
    metadata_path = INTRO_PAGE_DIR / "metadata" / dataset_name

    res = {}
    with open(metadata_path / f"top_text_{language}.txt", "r", encoding="utf-8") as f:
        res["top_text"] = f.read()
    with open(metadata_path / f"plot_intro_{language}.txt", "r", encoding="utf-8") as f:
        res["plot_intro"] = f.read()
    with open(metadata_path / f"bottom_text_{language}.txt", "r", encoding="utf-8") as f:
        res["bottom_text"] = f.read()
    with open(metadata_path / f"boxplot_text_{language}.txt", "r", encoding="utf-8") as f:
        res["boxplot_text"] = f.read()

    if language == "english":
        res["title"] = "Explore What People Believe and Do in Response to CoViD-19"
        res["groupby_title"] = "Group Differences"
        res["bottom_title"] = "Labour Supply"
        res["boxplot_title"] = "Childcare"
    elif language == "german":
        res["title"] = (
            "Was denken die Menschen zur Corona-Pandemie, wie stark "
            + "sind sie von ihr betroffen und wie passen sie ihr Verhalten an?"
        )
        res["groupby_title"] = "Unterschiede zwischen Gruppen"
        res["bottom_title"] = "Arbeitsangebot"
        res["boxplot_title"] = "Kinderbetreuung"
    else:
        raise NotImplementedError("The language you supplied is not supported yet.")
    return res
