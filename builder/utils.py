import re


def title(text):

    text = text.replace("_", " ")

    return text.title()


def react_input(column):

    t = column["type"]

    if t in ["date"]:
        return "date"

    if t in ["boolean"]:
        return "checkbox"

    if t in ["number", "integer"]:
        return "number"

    return "text"


def state_name(name):

    parts = name.split("_")

    first = parts[0]

    for p in parts[1:]:

        first += p.capitalize()

    return first