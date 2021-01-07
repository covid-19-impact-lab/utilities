from setuptools import find_packages
from setuptools import setup

p = find_packages()
print(p)

setup(
    name="utilities",
    version="0.3.8",
    description=(
        "Package with code that has to be shared across repos of covid-19-impact-lab"
    ),
    license="MIT",
    url="https://github.com/covid-19-impact-lab/covidlab-utilities",
    author="COVID-19 Impact Lab",
    author_email="klara.roehrl@gmail.com",
    packages=p,
    zip_safe=False,
    package_data={
        "utilities": [
            "dashboard/app/static/*.*",
            "dashboard/app/templates/*.html",
            "dashboard/components/maps/liss_provinces.geojson",
            "dashboard/gesis/provinces.geojson",
            "dashboard/liss/provinces.geojson",
            "dashboard/*/*.txt",
            "dashboard/*/*.csv",
            "dashboard/*/*.yaml",
            "dashboard/*/*.py",
            "dashboard/components/intro_page/metadata/*/*.*",
            "dashboard/components/run_charts/metadata/*/*.*",
        ],
    },
    include_package_data=True,
)
