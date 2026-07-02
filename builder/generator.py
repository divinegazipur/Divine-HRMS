import os


class Generator:

    def __init__(self, config):
        self.config = config

    def write(self, path, content):

        folder = os.path.dirname(path)

        os.makedirs(folder, exist_ok=True)

        with open(path, "w", encoding="utf8") as f:
            f.write(content)

        print("Generated:", path)