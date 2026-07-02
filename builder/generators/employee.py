from pathlib import Path

from template import Template
from schema_loader import SchemaLoader
from utils import title
from utils import react_input
from utils import state_name


def generate_employee(config):

    schema = SchemaLoader().load("employees")

    columns = []

    for c in schema["columns"]:

        columns.append({

            "name": c["name"],

            "label": title(c["name"]),

            "type": c["type"],

            "input": react_input(c),

            "state": state_name(c["name"])

        })

    t = Template()

    component = Path(config["components"]) / "employee"

    page = Path(config["app"]) / "employees"

    data = {

        "title": "Employee",

        "columns": columns

    }

    t.render(
        "employee/form.j2",
        data,
        component / "EmployeeForm.tsx"
    )

    t.render(
        "employee/table.j2",
        data,
        component / "EmployeeTable.tsx"
    )

    t.render(
        "employee/profile.j2",
        data,
        component / "EmployeeProfile.tsx"
    )

    t.render(
        "employee/page.j2",
        data,
        page / "page.tsx"
    )

    print()
    print("=" * 60)
    print("Employee Module Generated Successfully.")
    print("=" * 60)