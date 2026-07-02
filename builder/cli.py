import sys


def command():

    if len(sys.argv) < 2:
        return "list", None

    cmd = sys.argv[1]

    module = None

    if len(sys.argv) >= 3:
        module = sys.argv[2]

    return cmd, module