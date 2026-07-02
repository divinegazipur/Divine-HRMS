import json
from pathlib import Path

from database import Database
from cli import command
from schema import Schema
from generators.employee import generate_employee
from init import Initializer

ROOT = Path(__file__).parent

config = json.loads(
    (ROOT / "config.json").read_text(encoding="utf8")
)


def show():

    db = Database()

    employees = db.get("employees")

    print("=" * 60)
    print(config["project_name"])
    print("=" * 60)

    print(f"Employees : {len(employees)}")
    print()

    for emp in employees[:5]:
        print(
            emp["employee_id"],
            "|",
            emp["full_name"]
        )


def main():

    cmd, module = command()

    # Default
    if cmd == "list":
        show()
        return

    # Initialize Builder
    if cmd == "init":
        Initializer().create()
        return

    # Inspect Database
    if cmd == "inspect":

        if module == "employees":
            Schema().employees()
            return

        print("Unknown Module")
        return

    # Generate CRUD
    if cmd == "crud":

        if module == "employees":
            generate_employee(config)
            return

        print("Unknown Module")
        return

    print("Unknown Command")


if __name__ == "__main__":
    main()