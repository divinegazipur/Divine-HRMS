from pathlib import Path


class Initializer:

    def __init__(self):
        self.root = Path(__file__).parent

    def create(self):

        folders = [

            "templates",
            "templates/employee",
            "templates/attendance",
            "templates/payroll",
            "templates/leave",

            "generators",

            "output"
        ]

        files = [

            "template.py",

            "templates/employee/form.j2",
            "templates/employee/table.j2",
            "templates/employee/profile.j2",
            "templates/employee/page.j2",

            "templates/attendance/form.j2",
            "templates/payroll/form.j2",
            "templates/leave/form.j2"

        ]

        for folder in folders:

            (self.root / folder).mkdir(
                parents=True,
                exist_ok=True
            )

        for file in files:

            path = self.root / file

            path.parent.mkdir(
                parents=True,
                exist_ok=True
            )

            if not path.exists():
                path.write_text(
                    "",
                    encoding="utf8"
                )

        print("=" * 60)
        print("Builder Initialized Successfully.")
        print("=" * 60)