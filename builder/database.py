import json
import requests
from pathlib import Path

ROOT = Path(__file__).parent

config = json.loads(
    (ROOT / "config.json").read_text(encoding="utf8")
)


class Database:

    def __init__(self):
        self.url = config["url"]
        self.key = config["key"]

        self.headers = {
            "apikey": self.key,
            "Authorization": f"Bearer {self.key}"
        }

    def get(self, table):

        response = requests.get(
            f"{self.url}/rest/v1/{table}?select=*",
            headers=self.headers
        )

        response.raise_for_status()

        return response.json()