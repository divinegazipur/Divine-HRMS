import json
from pathlib import Path


class SchemaLoader:

    def __init__(self):

        self.root = Path(__file__).parent

    def load(self, table):

        file = self.root / "schemas" / f"{table}.json"

        if not file.exists():

            raise Exception(f"{table}.json not found.")

        return json.loads(
            file.read_text(
                encoding="utf8"
            )
        )