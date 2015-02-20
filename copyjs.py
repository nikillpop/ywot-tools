import os
from pyperclip import copy

code = ""
for filename in os.listdir('src'):
    if os.path.splitext(filename)[-1] == '.js':
        with open(filename, 'r') as f:
            code += f.read() + "\n"
copy(code)