from pathlib import Path
from jinja2 import Environment, FileSystemLoader


class Template:

    def __init__(self):

        self.root = Path(__file__).parent

        self.env = Environment(

            loader=FileSystemLoader(
                self.root / "templates"
            ),

            trim_blocks=True,
            lstrip_blocks=True
        )

    def render(
        self,
        template,
        data,
        output
    ):

        tpl = self.env.get_template(template)

        content = tpl.render(**data)

        output = Path(output)

        output.parent.mkdir(
            parents=True,
            exist_ok=True
        )

        output.write_text(
            content,
            encoding="utf8"
        )

        print(f"Generated : {output}")