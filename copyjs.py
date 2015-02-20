import os
from pyperclip import copy

PATH = 'src'

code = ""
for filename in os.listdir(PATH):
    if os.path.splitext(filename)[-1] == '.js':
        with open(os.path.join(PATH,filename), 'r') as f:
            code += f.read() + "\n"
copy(code)