import json
from pathlib import Path

from database import Database


class Schema:

    def __init__(self):

        self.db = Database()

        self.root = Path(__file__).parent

    def employees(self):

        rows = self.db.get("employees")

        if len(rows) == 0:
            print("No Data")
            return

        columns = []

        for key, value in rows[0].items():

            if isinstance(value, bool):
                dtype = "boolean"

            elif isinstance(value, int):
                dtype = "integer"

            elif isinstance(value, float):
                dtype = "number"

            elif value is None:
                dtype = "unknown"

            else:
                dtype = "string"

            columns.append({

                "name": key,

                "type": dtype

            })

        schema = {

            "table": "employees",

            "columns": columns

        }

        schema_folder = self.root / "schemas"

        schema_folder.mkdir(exist_ok=True)

        schema_file = schema_folder / "employees.json"

        schema_file.write_text(

            json.dumps(schema, indent=4),

            encoding="utf8"

        )

        print("=" * 60)

        print("Schema Exported Successfully")

        print(schema_file)

        print("=" * 60)