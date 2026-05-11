export const interviewData = {
  "python": [
    {
      "id": "python-introduction",
      "title": "Introduction to Python",
      "category": "Basic",
      "definition": "Python is a high-level, interpreted, and object-oriented programming language created by Guido van Rossum in 1991.",
      "sections": [
        {
          "type": "text",
          "value": "What is Python?\n. Core Concept:\nPython is simple, easy to read, and easy to write, making it one of the most popular programming languages in the world.\nIt is used for:\n• Web Development, Data Science, AI & ML, Automation, Game Development, Cyber Security, Cloud Computing, and Software Development."
        },
        {
          "type": "text",
          "value": "Simple Example of Python"
        },
        {
          "type": "code",
          "value": "print(\"Hello World\")"
        },
        {
          "type": "output",
          "value": "Hello World"
        },
        {
          "type": "text",
          "value": "Features & Advantages of Python\n1. Easy to Learn and Use: Syntax is simple and readable like English.\n2. Free and Open Source: Completely free to use and publicly available.\n3. Interpreted Language: Executes code line by line, making debugging easier.\n4. Platform Independent: Runs on Windows, Linux, and macOS without code changes.\n5. Object-Oriented: Supports Classes, Objects, Inheritance, and more.\n6. Large Standard Library: Built-in modules like math, random, os, and datetime.\n7. Huge Community Support: Millions of developers and vast learning resources."
        },
        {
          "type": "text",
          "value": "Why Learn Python?\n• Beginner Friendly & Easy Syntax\n• High Salary Opportunities & Large Job Market\n• Best Language for AI, ML, and Automation\n• Essential for Interviews and Modern Projects\n\nCompanies using Python: Google, Instagram, Netflix, Spotify."
        },
        {
          "type": "text",
          "value": "Quick Revision:\n• Nature: Interpreted & OOP\n• Benefit: Beginner Friendly\n• Usage: AI, Data Science, Web\n• Key: Simple Syntax"
        }
      ],
      "questions": [
        {
          "question": "Who created Python and when?",
          "answer": "Guido van Rossum in 1991."
        },
        {
          "question": "Why is Python called an interpreted language?",
          "answer": "Because it executes code line by line rather than compiling the whole program at once."
        }
      ]
    },
    {
      "id": "python-syntax-basics",
      "title": "Python Syntax Basics",
      "category": "Basic",
      "definition": "The fundamental building blocks of Python syntax including indentation, execution, and comments.",
      "sections": [
        {
          "type": "text",
          "value": "Python syntax is the set of rules that define how Python programs are written and interpreted.\nPython is simple and easy to read because it uses clear English-like statements."
        },
        {
          "type": "code",
          "value": "print(\"Hello, World!\")"
        },
        {
          "type": "output",
          "value": "Hello, World!"
        },
        {
          "type": "text",
          "value": "Execute Python Syntax\n\nPython code can be executed in different ways:\n\n1. Using Command Line\nType directly in terminal or command prompt:"
        },
        {
          "type": "code",
          "value": "print(\"Welcome to Python\")"
        },
        {
          "type": "output",
          "value": "Welcome to Python"
        },
        {
          "type": "text",
          "value": "2. Using Python File\nSave the file with .py extension.\n• Example: app.py\nprint(\"Python Program\")\n• Run the file using:\npython app.py"
        },
        {
          "type": "text",
          "value": "Semicolons in Python:\nSemicolons (;) are optional in Python.\nYou can write multiple statements on a single line by separating them with semicolons."
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "x = 10; y = 20; print(x + y)"
        },
        {
          "type": "output",
          "value": "30"
        },
        {
          "type": "text",
          "value": "Usually, Python programs are written with one statement per line for better readability."
        },
        {
          "type": "text",
          "value": "Recommended Style"
        },
        {
          "type": "code",
          "value": "x = 10\ny = 20\nprint(x + y)"
        },
        {
          "type": "text",
          "value": "Print Without a New Line:\nBy default, the print() function ends with a new line.\nIf you want to print multiple outputs on the same line, use the end parameter."
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "print(\"Hello World!\", end=\" \")\nprint(\"I will print on the same line.\")"
        },
        {
          "type": "output",
          "value": "Hello World! I will print on the same line."
        },
        {
          "type": "text",
          "value": "Here:\n• end=\" \" replaces the default new line with a space.\n• This helps print the next statement on the same line."
        },
        {
          "type": "text",
          "value": "Mix Text and Numbers:\nYou can combine text and numbers in a single print() statement by separating them with commas."
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "print(\"I am\", 35, \"years old.\")"
        },
        {
          "type": "output",
          "value": "I am 35 years old."
        },
        {
          "type": "text",
          "value": "Here:\n• \"I am\" → text (string)\n• 35 → number (integer)\n• Python automatically adds spaces between values separated by commas."
        },
        {
          "type": "text",
          "value": "Python Indentation:\nIndentation refers to the spaces at the beginning of a code line.\nIn Python, indentation is very important because it defines a block of code.\nOther programming languages use braces { }, but Python uses indentation."
        },
        {
          "type": "text",
          "value": "Correct Example"
        },
        {
          "type": "code",
          "value": "if 5 > 2:\n    print(\"Five is greater than two\")"
        },
        {
          "type": "output",
          "value": "Five is greater than two"
        },
        {
          "type": "text",
          "value": "Incorrect Example"
        },
        {
          "type": "code",
          "value": "if 5 > 2:\nprint(\"Five is greater than two\")"
        },
        {
          "type": "output",
          "value": "IndentationError: expected an indented block"
        }
      ],
      "questions": [
        {
          "question": "What is indentation in Python?",
          "answer": "Indentation refers to the spaces at the beginning of a code line used to define code blocks."
        },
        {
          "question": "How to print on the same line without a new line?",
          "answer": "Use the 'end' parameter in the print() function, e.g., print('Hello', end=' ')."
        }
      ]
    },
    {
      "id": "python-variables",
      "title": "Python Variables",
      "category": "Basic",
      "definition": "Variables are containers for storing data values. Python has no command for declaring a variable; it is created when you assign a value to it.",
      "sections": [
        {
          "type": "text",
          "value": "Python Variables:\nVariables are containers for storing data values."
        },
        {
          "type": "text",
          "value": "Creating Variables\nPython has no command for declaring a variable.\nA variable is created when you assign a value to it."
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "name = \"Vasu\"\nage = 23\nprint(name)\nprint(age)"
        },
        {
          "type": "output",
          "value": "Vasu\n23"
        },
        {
          "type": "text",
          "value": "Variables Can Change Type\nVariables do not need a fixed type.\nThe type can change after assignment."
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "name = \"Sudha\"\nprint(name)\nname = 100\nprint(name)"
        },
        {
          "type": "output",
          "value": "Sudha\n100"
        },
        {
          "type": "text",
          "value": "Casting\nCasting is used to specify the data type of a variable."
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "x = str(10)\ny = int(25)\nz = float(5)\nprint(x)\nprint(y)\nprint(z)"
        },
        {
          "type": "output",
          "value": "10\n25\n5.0"
        },
        {
          "type": "text",
          "value": "Get the Type\nUse the type() function to check the data type."
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "name = \"Vasudha\"\nage = 23\nprint(type(name))\nprint(type(age))"
        },
        {
          "type": "output",
          "value": "<class 'str'>\n<class 'int'>"
        },
        {
          "type": "text",
          "value": "Single or Double Quotes\nStrings can be written using single quotes or double quotes."
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "name1 = 'Vasu'\nname2 = \"Sudha\"\nprint(name1)\nprint(name2)"
        },
        {
          "type": "output",
          "value": "Vasu\nSudha"
        },
        {
          "type": "text",
          "value": "Case-Sensitive Variables\nVariable names are case-sensitive."
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "name = \"Vasu\"\nName = \"Sudha\"\nNAME = \"Vasudha\"\nprint(name)\nprint(Name)\nprint(NAME)"
        },
        {
          "type": "output",
          "value": "Vasu\nSudha\nVasudha"
        },
        {
          "type": "text",
          "value": "Variable Names\nVariable names can be short or descriptive.\n\nValid Variable Names:\nx = \"Vasu\"\nage = 23\nstudent_name = \"Sudha\"\n_total = 500"
        },
        {
          "type": "text",
          "value": "Rules for Variable Names\n\n✅ Allowed:\n• Must start with a letter or _\n• Can contain letters, numbers, and _\n• Variable names are case-sensitive\n\n❌ Not Allowed:\n• Cannot start with a number\n• Cannot contain spaces or special symbols\n• Cannot use Python keywords"
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "my_name = \"Vasu\"\n# invalid examples\n# 1name = \"Sudha\"\n# my-name = \"Vasudha\""
        },
        {
          "type": "text",
          "value": "Multi Word Variable Names\n\nCamel Case:\nEach word starts with a capital letter except the first word.\nmyVariableName = \"Vasu\"\n\nPascal Case:\nEach word starts with a capital letter.\nMyVariableName = \"Sudha\"\n\nSnake Case:\nEach word is separated using _.\nmy_variable_name = \"Vasudharini\""
        },
        {
          "type": "text",
          "value": "Many Values to Multiple Variables\nPython allows assigning multiple values in one line."
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "x, y, z = \"Vasu\", \"Sudha\", \"Vasudha\"\nprint(x)\nprint(y)\nprint(z)"
        },
        {
          "type": "output",
          "value": "Vasu\nSudha\nVasudha"
        },
        {
          "type": "text",
          "value": "Note: Number of variables and values must match."
        },
        {
          "type": "text",
          "value": "One Value to Multiple Variables\nYou can assign the same value to multiple variables."
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "x = y = z = \"Vasudharini\"\nprint(x)\nprint(y)\nprint(z)"
        },
        {
          "type": "output",
          "value": "Vasudharini\nVasudharini\nVasudharini"
        },
        {
          "type": "text",
          "value": "Output Variables\nThe print() function is used to display variables."
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "x = \"Python is awesome\"\nprint(x)"
        },
        {
          "type": "output",
          "value": "Python is awesome"
        },
        {
          "type": "text",
          "value": "Output Multiple Variables Using Comma"
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "x = \"Python\"\ny = \"is\"\nz = \"awesome\"\nprint(x, y, z)"
        },
        {
          "type": "output",
          "value": "Python is awesome"
        },
        {
          "type": "text",
          "value": "Output Multiple Variables Using +"
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "x = \"Python \"\ny = \"is \"\nz = \"awesome\"\nprint(x + y + z)"
        },
        {
          "type": "output",
          "value": "Python is awesome"
        },
        {
          "type": "text",
          "value": "Note: Spaces are added after \"Python \" and \"is \" for correct formatting."
        },
        {
          "type": "text",
          "value": "Using + With Numbers\nFor numbers, + works as a mathematical operator."
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "x = 5\ny = 10\nprint(x + y)"
        },
        {
          "type": "output",
          "value": "15"
        },
        {
          "type": "text",
          "value": "Error When Combining String and Number Using +\nExample:\nx = 5\ny = \"Vasu\"\n# print(x + y)"
        },
        {
          "type": "output",
          "value": "TypeError: unsupported operand type(s)"
        },
        {
          "type": "text",
          "value": "Python gives an error because string and integer cannot be added using +."
        },
        {
          "type": "text",
          "value": "Correct Way Using Comma\nUse commas to print different data types together."
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "x = 5\ny = \"Vasu\"\nprint(x, y)"
        },
        {
          "type": "output",
          "value": "5 Vasu"
        },
        {
          "type": "text",
          "value": "Variable Quick Revision:\n• Variables → Store data values\n• Assignment → Creates variables\n• Casting → Specify data type\n• type() → Check variable type\n• Quotes → Single or double quotes for strings\n• Case-Sensitive → name and Name are different\n• Multi Variables → Assign many values in one line\n• Output → Use print() to display variables"
        }
      ],
      "questions": [
        {
          "question": "Does Python require a command for declaring variables?",
          "answer": "No, a variable is created the moment you first assign a value to it."
        },
        {
          "question": "Are Python variable names case-sensitive?",
          "answer": "Yes, 'age' and 'Age' are treated as two different variables."
        }
      ]
    },
    {
      "id": "python-variable-scope",
      "title": "Global & Local Variables",
      "category": "Basic",
      "definition": "Understanding the scope of variables in Python, including global variables accessible everywhere and local variables restricted to functions.",
      "sections": [
        {
          "type": "text",
          "value": "Global Variables and Local Variables in Python\n\nVariables in Python can be divided into:\n• Global Variables\n• Local Variables"
        },
        {
          "type": "text",
          "value": "Global Variables\nA global variable is created outside a function.\nIt can be used both inside and outside the function."
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "name = \"Vasudha\"   # global variable\n\ndef show():\n    print(\"Inside function:\", name)\n\nshow()\n\nprint(\"Outside function:\", name)"
        },
        {
          "type": "output",
          "value": "Inside function: Vasudha\nOutside function: Vasudha"
        },
        {
          "type": "text",
          "value": "Local Variables\nA local variable is created inside a function.\nIt can only be used inside that function."
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "def student():\n    name = \"Vasu\"   # local variable\n    print(name)\n\nstudent()"
        },
        {
          "type": "output",
          "value": "Vasu"
        },
        {
          "type": "text",
          "value": "Local Variable Cannot Be Accessed Outside\nExample:"
        },
        {
          "type": "code",
          "value": "def student():\n    name = \"Sudha\"\n\nstudent()\n\n# print(name)"
        },
        {
          "type": "output",
          "value": "NameError: name 'name' is not defined"
        },
        {
          "type": "text",
          "value": "Using Global Variable Inside Function\nExample:"
        },
        {
          "type": "code",
          "value": "course = \"Python\"\n\ndef display():\n    print(\"Learning\", course)\n\ndisplay()"
        },
        {
          "type": "output",
          "value": "Learning Python"
        },
        {
          "type": "text",
          "value": "Global Keyword\nUse the global keyword if you want to modify a global variable inside a function."
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "name = \"Vasu\"\n\ndef change():\n    global name\n    name = \"Vasudharini\"\n\nchange()\n\nprint(name)"
        },
        {
          "type": "output",
          "value": "Vasudharini"
        },
        {
          "type": "text",
          "value": "Difference Between Global and Local Variables"
        },
        {
          "type": "table",
          "headers": [
            "Feature",
            "Global Variable",
            "Local Variable"
          ],
          "rows": [
            [
              "Declaration",
              "Outside function",
              "Inside function"
            ],
            [
              "Accessibility",
              "Everywhere",
              "Only inside function"
            ],
            [
              "Execution Life",
              "Program duration",
              "Function duration"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Variable Scope Quick Revision:\n• Global Variable → Created outside function\n• Local Variable → Created inside function\n• Global variables can be used anywhere\n• Local variables work only inside function\n• global keyword → Modify global variable inside function"
        }
      ],
      "questions": [
        {
          "question": "What is the difference between global and local variables?",
          "answer": "Global variables are created outside functions and can be used everywhere, while local variables are created inside functions and only exist within them."
        },
        {
          "question": "How to modify a global variable inside a function?",
          "answer": "Use the 'global' keyword before the variable name inside the function."
        }
      ]
    },
    {
      "id": "python-comments",
      "title": "Comments & Practice",
      "category": "Basic",
      "definition": "Understanding how to document code with comments and a complete practice example of Python basics.",
      "sections": [
        {
          "type": "text",
          "value": "Python Comments:\nComments are used to explain Python code.\nThey help make the code easier to read and understand.\nComments can also be used to prevent execution of code while testing."
        },
        {
          "type": "text",
          "value": "Single-Line Comment\nUse #"
        },
        {
          "type": "code",
          "value": "# This is a comment\nprint(\"Hello\")"
        },
        {
          "type": "text",
          "value": "Multi-Line Comment\nUse triple quotes:"
        },
        {
          "type": "code",
          "value": "\"\"\"\nThis is a\nmulti-line comment\n\"\"\"\n\nprint(\"Python\")"
        },
        {
          "type": "text",
          "value": "Complete Example"
        },
        {
          "type": "code",
          "value": "# Python Basics Example\n\nname = \"Vasudha\"\nage = 23\n\nif age > 18:\n    print(name, \"is eligible to vote\")"
        },
        {
          "type": "output",
          "value": "Vasudha is eligible to vote"
        },
        {
          "type": "text",
          "value": "Quick Revision"
        },
        {
          "type": "text",
          "value": "• Syntax → Rules of writing Python code\n• Execute → Run code using terminal or .py file\n• Indentation → Spaces used to define code blocks\n• Variables → Store values/data\n• Comments → Explain code"
        }
      ],
      "questions": [
        {
          "question": "How do you write a single-line comment in Python?",
          "answer": "Using the '#' symbol at the beginning of the line."
        },
        {
          "question": "How to write multi-line comments?",
          "answer": "You can use triple quotes (\"\"\" or ''') at the start and end of the comment block."
        }
      ]
    },
    {
      "id": "python-data-types",
      "title": "Python Data Types",
      "category": "Basic",
      "definition": "Data types specify the type of value a variable stores. Python automatically identifies the data type when a value is assigned.",
      "sections": [
        {
          "type": "text",
          "value": "Built-in Data Types in Python\nPython has several built-in data types:"
        },
        {
          "type": "table",
          "headers": [
            "Category",
            "Data Types"
          ],
          "rows": [
            [
              "Text Type",
              "str"
            ],
            [
              "Numeric Types",
              "int, float, complex"
            ],
            [
              "Sequence Types",
              "list, tuple, range"
            ],
            [
              "Mapping Type",
              "dict"
            ],
            [
              "Set Types",
              "set, frozenset"
            ],
            [
              "Boolean Type",
              "bool"
            ],
            [
              "Binary Types",
              "bytes, bytearray, memoryview"
            ],
            [
              "None Type",
              "NoneType"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Text Type (str)\nUsed to store text."
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "name = \"Vasu\"\nprint(name)\nprint(type(name))"
        },
        {
          "type": "output",
          "value": "Vasu\n<class 'str'>"
        },
        {
          "type": "text",
          "value": "Sequence Types\n\nList (list):\nOrdered, changeable collection."
        },
        {
          "type": "code",
          "value": "names = [\"Vasu\", \"Sudha\", \"Vasudha\"]\nprint(names)\nprint(type(names))"
        },
        {
          "type": "output",
          "value": "['Vasu', 'Sudha', 'Vasudha']\n<class 'list'>"
        },
        {
          "type": "text",
          "value": "Tuple (tuple):\nOrdered, unchangeable collection."
        },
        {
          "type": "code",
          "value": "names = (\"Vasu\", \"Sudha\")\nprint(names)\nprint(type(names))"
        },
        {
          "type": "output",
          "value": "('Vasu', 'Sudha')\n<class 'tuple'>"
        },
        {
          "type": "text",
          "value": "Range (range):\nSequence of numbers."
        },
        {
          "type": "code",
          "value": "x = range(5)\nprint(x)\nprint(type(x))"
        },
        {
          "type": "output",
          "value": "range(0, 5)\n<class 'range'>"
        },
        {
          "type": "text",
          "value": "Mapping Type (dict)\nStores data in key-value pairs."
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "student = {\n    \"name\": \"Vasudharini\",\n    \"age\": 23\n}\nprint(student)\nprint(type(student))"
        },
        {
          "type": "output",
          "value": "{'name': 'Vasudharini', 'age': 23}\n<class 'dict'>"
        },
        {
          "type": "text",
          "value": "Set Types\n\nSet (set):\nUnordered collection of unique values.\nnumbers = {1, 2, 3, 4}\n\nFrozen Set (frozenset):\nUnchangeable set.\nx = frozenset({1, 2, 3})"
        },
        {
          "type": "code",
          "value": "numbers = {1, 2, 3, 4}\nprint(type(numbers))\n\nx = frozenset({1, 2, 3})\nprint(type(x))"
        },
        {
          "type": "output",
          "value": "<class 'set'>\n<class 'frozenset'>"
        },
        {
          "type": "text",
          "value": "Boolean Type (bool)\nRepresents True or False."
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "is_python_easy = True\nprint(type(is_python_easy))"
        },
        {
          "type": "output",
          "value": "<class 'bool'>"
        },
        {
          "type": "text",
          "value": "Binary Types\n\nBytes (bytes):\nx = b\"Hello\"\n\nBytearray (bytearray):\nx = bytearray(5)\n\nMemoryview (memoryview):\nx = memoryview(bytes(5))"
        },
        {
          "type": "code",
          "value": "x_bytes = b\"Hello\"\nprint(type(x_bytes))\n\nx_bytearray = bytearray(5)\nprint(type(x_bytearray))\n\nx_mem = memoryview(bytes(5))\nprint(type(x_mem))"
        },
        {
          "type": "output",
          "value": "<class 'bytes'>\n<class 'bytearray'>\n<class 'memoryview'>"
        },
        {
          "type": "text",
          "value": "None Type (NoneType)\nRepresents no value."
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "x = None\nprint(type(x))"
        },
        {
          "type": "output",
          "value": "<class 'NoneType'>"
        },
        {
          "type": "text",
          "value": "Get Data Type\nUse the type() function to get the data type."
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "name = \"Sudha\"\nage = 23\nprint(type(name))\nprint(type(age))"
        },
        {
          "type": "output",
          "value": "<class 'str'>\n<class 'int'>"
        },
        {
          "type": "text",
          "value": "Data Type Quick Revision:\n• str → Text values\n• int → Whole numbers\n• float → Decimal numbers\n• complex → Imaginary numbers\n• list → Ordered and changeable collection\n• tuple → Ordered and unchangeable collection\n• dict → Key-value pairs\n• set → Unique unordered values\n• bool → True or False\n• NoneType → No value"
        }
      ],
      "questions": [
        {
          "question": "How do you check the data type of a variable in Python?",
          "answer": "Using the built-in type() function."
        },
        {
          "question": "Does Python have dynamic typing?",
          "answer": "Yes, you don't need to declare the type of a variable, and it can change during execution."
        }
      ]
    },
    {
      "id": "python-numbers",
      "title": "Python Numbers",
      "category": "Basic",
      "definition": "Python has three numeric data types: int, float, and complex. This section covers their usage and type conversion.",
      "sections": [
        {
          "type": "text",
          "value": "Python Numbers\nPython has three numeric data types:\n• int\n• float\n• complex"
        },
        {
          "type": "text",
          "value": "Integer (int)\nIntegers are whole numbers without decimal points."
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "x = 10\ny = -25\n\nprint(type(x))\nprint(type(y))"
        },
        {
          "type": "output",
          "value": "<class 'int'>\n<class 'int'>"
        },
        {
          "type": "text",
          "value": "Float (float)\nFloats are numbers with decimal points."
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "x = 10.5\ny = -7.8\n\nprint(type(x))\nprint(type(y))"
        },
        {
          "type": "output",
          "value": "<class 'float'>\n<class 'float'>"
        },
        {
          "type": "text",
          "value": "Complex\nComplex numbers contain an imaginary part represented by j."
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "x = 3+5j\ny = 5j\nz = -5j\n\nprint(type(x))\nprint(type(y))\nprint(type(z))"
        },
        {
          "type": "output",
          "value": "<class 'complex'>\n<class 'complex'>\n<class 'complex'>"
        },
        {
          "type": "text",
          "value": "Type Conversion:\nYou can convert one numeric type into another using:\n• int()\n• float()\n• complex()"
        },
        {
          "type": "text",
          "value": "Example: Convert From One Type to Another"
        },
        {
          "type": "code",
          "value": "x = 1       # int\ny = 2.8     # float\nz = 1j      # complex\n\n# convert from int to float\na = float(x)\n\n# convert from float to int\nb = int(y)\n\n# convert from int to complex\nc = complex(x)\n\nprint(a)\nprint(b)\nprint(c)\n\nprint(type(a))\nprint(type(b))\nprint(type(c))"
        },
        {
          "type": "output",
          "value": "1.0\n2\n(1+0j)\n\n<class 'float'>\n<class 'int'>\n<class 'complex'>"
        },
        {
          "type": "text",
          "value": "Important Notes\n\n• int() removes the decimal part\nprint(int(5.9))\n# Output: 5\n\n• float() converts numbers into decimal form\nprint(float(10))\n# Output: 10.0\n\n• complex() adds an imaginary part\nprint(complex(7))\n# Output: (7+0j)"
        },
        {
          "type": "text",
          "value": "Numbers Quick Revision:\n• int → Whole numbers\n• float → Decimal numbers\n• complex → Numbers with imaginary part\n• int() → Convert to integer\n• float() → Convert to float\n• complex() → Convert to complex number"
        }
      ],
      "questions": [
        {
          "question": "What are the three numeric types in Python?",
          "answer": "Int, Float, and Complex."
        },
        {
          "question": "How do you convert a float to an integer?",
          "answer": "Using the int() function, which will remove the decimal part (not round it)."
        }
      ]
    },
    {
      "id": "python-casting",
      "title": "Python Casting",
      "category": "Basic",
      "definition": "Casting means converting one data type into another data type. Python uses constructor functions like int(), float(), and str() for explicit casting.",
      "sections": [
        {
          "type": "text",
          "value": "Python Casting\nCasting means converting one data type into another data type.\nSometimes, you may want to specify the type of a variable manually.\nPython uses constructor functions for casting."
        },
        {
          "type": "text",
          "value": "int()\nConverts a value into an integer.\n• Removes decimal values\n• String must contain a valid whole number"
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "x = int(5)\ny = int(7.9)\nz = int(\"10\")\nprint(x)\nprint(y)\nprint(z)"
        },
        {
          "type": "output",
          "value": "5\n7\n10"
        },
        {
          "type": "text",
          "value": "float()\nConverts a value into a float number."
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "x = float(5)\ny = float(7.8)\nz = float(\"25\")\nprint(x)\nprint(y)\nprint(z)"
        },
        {
          "type": "output",
          "value": "5.0\n7.8\n25.0"
        },
        {
          "type": "text",
          "value": "str()\nConverts a value into a string."
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "x = str(10)\ny = str(5.5)\nz = str(\"Vasu\")\nprint(x)\nprint(y)\nprint(z)"
        },
        {
          "type": "output",
          "value": "10\n5.5\nVasu"
        },
        {
          "type": "text",
          "value": "Checking Data Types After Casting\nUse the type() function."
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "x = int(5.9)\ny = float(10)\nz = str(25)\nprint(type(x))\nprint(type(y))\nprint(type(z))"
        },
        {
          "type": "output",
          "value": "<class 'int'>\n<class 'float'>\n<class 'str'>"
        },
        {
          "type": "text",
          "value": "More Examples\n\nInteger to Float:\nx = 15\nprint(float(x))\n# Output: 15.0\n\nFloat to Integer:\nx = 9.8\nprint(int(x))\n# Output: 9\n\nNumber to String:\nage = 23\nprint(str(age))\n# Output: 23"
        },
        {
          "type": "text",
          "value": "Important Notes\n• int() removes decimal values instead of rounding.\n• float() always returns a decimal value.\n• str() converts values into text format.\n• Invalid strings cannot be converted to numbers (e.g., int(\"Vasu\") raises ValueError)."
        },
        {
          "type": "text",
          "value": "Casting Quick Revision:\n• Casting → Convert one data type to another\n• int() → Convert to integer\n• float() → Convert to float\n• str() → Convert to string\n• type() → Check data type after conversion"
        }
      ],
      "questions": [
        {
          "question": "What functions does Python use for casting?",
          "answer": "Python uses constructor functions: int(), float(), and str()."
        },
        {
          "question": "What happens if you try to cast an invalid string (like 'abc') to an integer?",
          "answer": "It will raise a ValueError."
        }
      ]
    },
    {
      "id": "python-strings",
      "title": "Python Strings",
      "category": "Basic",
      "definition": "In Python, a string is a sequence of characters. This section covers quoting, indexing, slicing, and string membership tests.",
      "sections": [
        {
          "type": "text",
          "value": "Python Strings\nIn Python, a string is a sequence of characters enclosed in single quotes (' ') or double quotes (\" \")."
        },
        {
          "type": "code",
          "value": "print(\"Hello\")\nprint('Hello')"
        },
        {
          "type": "output",
          "value": "Hello\nHello"
        },
        {
          "type": "text",
          "value": "Quotes Inside Quotes\nYou can use quotes inside a string if they are different from the outer quotes."
        },
        {
          "type": "code",
          "value": "print(\"It's alright\")\nprint(\"He is called 'Johnny'\")\nprint('He is called \"Johnny\"')"
        },
        {
          "type": "output",
          "value": "It's alright\nHe is called 'Johnny'\nHe is called \"Johnny\""
        },
        {
          "type": "text",
          "value": "Assign String to a Variable\nStrings can be stored in variables."
        },
        {
          "type": "code",
          "value": "a = \"Hello\"\nprint(a)"
        },
        {
          "type": "output",
          "value": "Hello"
        },
        {
          "type": "text",
          "value": "Multiline Strings\nUse triple double quotes (\"\"\" \"\"\") or triple single quotes (''' ''') for multiline strings."
        },
        {
          "type": "code",
          "value": "a = \"\"\"Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit,\nsed do eiusmod tempor incididunt\nut labore et dolore magna aliqua.\"\"\"\n\nprint(a)"
        },
        {
          "type": "output",
          "value": "Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit,\nsed do eiusmod tempor incididunt\nut labore et dolore magna aliqua."
        },
        {
          "type": "text",
          "value": "Strings are Arrays\nStrings behave like arrays of characters. Each character has an index position starting from 0."
        },
        {
          "type": "code",
          "value": "a = \"Hello, World!\"\nprint(a[1])"
        },
        {
          "type": "output",
          "value": "e"
        },
        {
          "type": "text",
          "value": "Python indexing starts from 0 (from the beginning), and negative indexing starts from -1 (from the end)."
        },
        {
          "type": "table",
          "headers": [
            "Char",
            "H",
            "e",
            "l",
            "l",
            "o",
            ",",
            " ",
            "W",
            "o",
            "r",
            "l",
            "d",
            "!"
          ],
          "rows": [
            [
              "Index",
              "0",
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
              "12"
            ],
            [
              "Negative",
              "-13",
              "-12",
              "-11",
              "-10",
              "-9",
              "-8",
              "-7",
              "-6",
              "-5",
              "-4",
              "-3",
              "-2",
              "-1"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Looping Through a String\nWe can loop through each character using a for loop."
        },
        {
          "type": "code",
          "value": "for x in \"banana\":\n    print(x)"
        },
        {
          "type": "output",
          "value": "b\na\nn\na\nn\na"
        },
        {
          "type": "text",
          "value": "String Length\nUse the len() function to find the length of a string."
        },
        {
          "type": "code",
          "value": "a = \"Hello, World!\"\nprint(len(a))"
        },
        {
          "type": "output",
          "value": "13"
        },
        {
          "type": "text",
          "value": "Check String Using in\nThe in keyword checks whether a word or character exists in a string."
        },
        {
          "type": "code",
          "value": "txt = \"The best things in life are free!\"\nprint(\"free\" in txt)"
        },
        {
          "type": "output",
          "value": "True"
        },
        {
          "type": "text",
          "value": "Using in with if"
        },
        {
          "type": "code",
          "value": "txt = \"The best things in life are free!\"\n\nif \"free\" in txt:\n    print(\"Yes, 'free' is present.\")"
        },
        {
          "type": "output",
          "value": "Yes, 'free' is present."
        },
        {
          "type": "text",
          "value": "Check String Using not in\nThe not in keyword checks whether something is NOT present in a string."
        },
        {
          "type": "code",
          "value": "txt = \"The best things in life are free!\"\nprint(\"expensive\" not in txt)"
        },
        {
          "type": "output",
          "value": "True"
        },
        {
          "type": "text",
          "value": "Using not in with if"
        },
        {
          "type": "code",
          "value": "txt = \"The best things in life are free!\"\n\nif \"expensive\" not in txt:\n    print(\"No, 'expensive' is NOT present.\")"
        },
        {
          "type": "output",
          "value": "No, 'expensive' is NOT present."
        },
        {
          "type": "text",
          "value": "Strings Quick Revision"
        },
        {
          "type": "table",
          "headers": [
            "Concept",
            "Example"
          ],
          "rows": [
            [
              "String",
              "\"Hello\""
            ],
            [
              "Single Quotes",
              "'Python'"
            ],
            [
              "Double Quotes",
              "\"Python\""
            ],
            [
              "Multiline String",
              "\"\"\"Hello\"\"\""
            ],
            [
              "Access Character",
              "a[0]"
            ],
            [
              "Loop String",
              "for x in a"
            ],
            [
              "Length",
              "len(a)"
            ],
            [
              "Check Present",
              "\"a\" in txt"
            ],
            [
              "Check Not Present",
              "\"a\" not in txt"
            ]
          ]
        }
      ],
      "questions": [
        {
          "question": "How do you check if a character exists in a string?",
          "answer": "Using the 'in' keyword (e.g., 'a' in 'banana')."
        },
        {
          "question": "How do you find the number of characters in a string?",
          "answer": "Using the built-in len() function."
        }
      ]
    },
    {
      "id": "python-string-slicing",
      "title": "Python - Slicing Strings",
      "category": "Basic",
      "definition": "String slicing is used to extract a part (substring) of a string using a range of indices.",
      "sections": [
        {
          "type": "text",
          "value": "What is String Slicing?\nString slicing is used to extract a part (substring) of a string.\n\nSyntax:\nstring[start:end]\n• start → starting index\n• end → ending index (not included)"
        },
        {
          "type": "text",
          "value": "Example 1: Basic Slicing"
        },
        {
          "type": "code",
          "value": "b = \"Hello, World!\"\nprint(b[2:5])"
        },
        {
          "type": "output",
          "value": "llo"
        },
        {
          "type": "text",
          "value": "Explanation:\nStart = 2 (l), End = 5 (stops before index 5). Result: llo"
        },
        {
          "type": "text",
          "value": "Slice From the Start\nIf start index is omitted, Python starts from index 0."
        },
        {
          "type": "code",
          "value": "b = \"Hello, World!\"\nprint(b[:5])"
        },
        {
          "type": "output",
          "value": "Hello"
        },
        {
          "type": "text",
          "value": "Slice To the End\nIf end index is omitted, slicing continues till the end."
        },
        {
          "type": "code",
          "value": "b = \"Hello, World!\"\nprint(b[2:])"
        },
        {
          "type": "output",
          "value": "llo, World!"
        },
        {
          "type": "text",
          "value": "Negative Indexing\nNegative indexes count from the end (-1 is the last character)."
        },
        {
          "type": "code",
          "value": "b = \"Hello, World!\"\nprint(b[-5:-2])"
        },
        {
          "type": "output",
          "value": "orl"
        },
        {
          "type": "text",
          "value": "Important Points"
        },
        {
          "type": "table",
          "headers": [
            "Slicing",
            "Meaning"
          ],
          "rows": [
            [
              "s[2:5]",
              "index 2 to 4"
            ],
            [
              "s[:5]",
              "start to 4"
            ],
            [
              "s[2:]",
              "2 to end"
            ],
            [
              "s[-5:-2]",
              "negative slicing"
            ],
            [
              "s[:]",
              "full string copy"
            ]
          ]
        },
        {
          "type": "text",
          "value": "More Examples\n\nExample 1:\nname = \"Python\"\nprint(name[1:4])\n# Output: yth\n\nExample 2:\nname = \"Python\"\nprint(name[:3])\n# Output: Pyt\n\nExample 3:\nname = \"Python\"\nprint(name[3:])\n# Output: hon\n\nExample 4:\nname = \"Python\"\nprint(name[-4:-1])\n# Output: tho"
        },
        {
          "type": "text",
          "value": "Quick Revision"
        },
        {
          "type": "table",
          "headers": [
            "Syntax",
            "Result"
          ],
          "rows": [
            [
              "s[1:5]",
              "start to end-1"
            ],
            [
              "s[:5]",
              "from beginning"
            ],
            [
              "s[2:]",
              "till end"
            ],
            [
              "s[-4:-1]",
              "negative slicing"
            ],
            [
              "s[:]",
              "full copy"
            ]
          ]
        }
      ],
      "questions": [
        {
          "question": "Does slicing include the end index?",
          "answer": "No. The end index is excluded."
        },
        {
          "question": "What is negative indexing?",
          "answer": "Accessing characters from the end of the string using negative numbers (e.g., -1 for the last character)."
        },
        {
          "question": "How to copy an entire string using slicing?",
          "answer": "Use s[:] to copy the entire string."
        }
      ]
    },
    {
      "id": "python-modify-strings",
      "title": "Python - Modify Strings",
      "category": "Basic",
      "definition": "Python provides many built-in string methods to modify and work with strings easily.",
      "sections": [
        {
          "type": "text",
          "value": "1. Upper Case\nThe upper() method converts all characters in a string to uppercase."
        },
        {
          "type": "code",
          "value": "a = \"Hello, World!\"\nprint(a.upper())"
        },
        {
          "type": "output",
          "value": "HELLO, WORLD!"
        },
        {
          "type": "text",
          "value": "2. Lower Case\nThe lower() method converts all characters in a string to lowercase."
        },
        {
          "type": "code",
          "value": "a = \"Hello, World!\"\nprint(a.lower())"
        },
        {
          "type": "output",
          "value": "hello, world!"
        },
        {
          "type": "text",
          "value": "3. Remove Whitespace\nWhitespace means spaces before or after the text.\nThe strip() method removes spaces from the beginning and end of a string."
        },
        {
          "type": "code",
          "value": "a = \" Hello, World! \"\nprint(a.strip())"
        },
        {
          "type": "output",
          "value": "Hello, World!"
        },
        {
          "type": "text",
          "value": "4. Replace String\nThe replace() method replaces one string with another string."
        },
        {
          "type": "code",
          "value": "a = \"Hello, World!\"\nprint(a.replace(\"H\", \"J\"))"
        },
        {
          "type": "output",
          "value": "Jello, World!"
        },
        {
          "type": "text",
          "value": "5. Split String\nThe split() method splits a string into multiple parts and returns a list based on a separator."
        },
        {
          "type": "code",
          "value": "a = \"Hello, World!\"\nprint(a.split(\",\"))"
        },
        {
          "type": "output",
          "value": "['Hello', ' World!']"
        },
        {
          "type": "text",
          "value": "Quick Revision:\n• upper() → CAPITAL LETTERS\n• lower() → small letters\n• strip() → removes extra spaces\n• replace() → changes text\n• split() → converts string into list"
        }
      ],
      "questions": [
        {
          "question": "What does the upper() method do?",
          "answer": "It converts all characters in a string to uppercase."
        },
        {
          "question": "What is the purpose of the strip() method?",
          "answer": "It removes any leading and trailing whitespace from the string."
        },
        {
          "question": "How do you replace a specific part of a string with another?",
          "answer": "Use the replace() method, e.g., string.replace('old', 'new')."
        },
        {
          "question": "What does the split() method return?",
          "answer": "It returns a list where the string has been split at each instance of the specified separator."
        }
      ]
    },
    {
      "id": "python-string-methods-reference",
      "title": "Python String Methods Reference",
      "category": "Basic",
      "definition": "Python provides a rich set of built-in string methods that return new values without modifying the original immutable string.",
      "sections": [
        {
          "type": "text",
          "value": "Note: All string methods return new values. They do NOT change the original string because strings in Python are immutable."
        },
        {
          "type": "table",
          "headers": [
            "Method",
            "Description"
          ],
          "rows": [
            [
              "capitalize()",
              "Converts first character to uppercase"
            ],
            [
              "casefold()",
              "Converts string into lowercase"
            ],
            [
              "center()",
              "Returns centered string"
            ],
            [
              "count()",
              "Counts occurrences of a value"
            ],
            [
              "endswith()",
              "Checks if string ends with specified value"
            ],
            [
              "find()",
              "Finds position of specified value (returns -1 if not found)"
            ],
            [
              "format()",
              "Formats values into string"
            ],
            [
              "index()",
              "Returns position of specified value (raises error if not found)"
            ],
            [
              "isalnum()",
              "Checks if all characters are alphanumeric"
            ],
            [
              "isalpha()",
              "Checks if all characters are alphabets"
            ],
            [
              "isdigit()",
              "Checks if all characters are digits"
            ],
            [
              "islower()",
              "Checks if all characters are lowercase"
            ],
            [
              "isnumeric()",
              "Checks if all characters are numeric"
            ],
            [
              "isspace()",
              "Checks if all characters are whitespace"
            ],
            [
              "isupper()",
              "Checks if all characters are uppercase"
            ],
            [
              "join()",
              "Joins iterable elements into string"
            ],
            [
              "replace()",
              "Replaces substring"
            ],
            [
              "split()",
              "Splits string into a list"
            ],
            [
              "startswith()",
              "Checks if string starts with value"
            ],
            [
              "strip()",
              "Removes spaces from both sides"
            ],
            [
              "swapcase()",
              "Swaps upper/lower case"
            ],
            [
              "title()",
              "Converts first letter of each word to uppercase"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Important String Methods with Examples"
        },
        {
          "type": "text",
          "value": "1. capitalize() & title()\ncapitalize() handles the first char only, while title() handles every word."
        },
        {
          "type": "code",
          "value": "a = \"python programming language\"\nprint(a.capitalize())\nprint(a.title())"
        },
        {
          "type": "output",
          "value": "Python programming language\nPython Programming Language"
        },
        {
          "type": "text",
          "value": "2. find() vs index()\nCrucial interview point: find() returns -1 on failure, index() raises an exception."
        },
        {
          "type": "code",
          "value": "a = \"Python\"\nprint(a.find(\"x\"))\n# print(a.index(\"x\")) # This would crash"
        },
        {
          "type": "output",
          "value": "-1"
        },
        {
          "type": "text",
          "value": "3. startswith() & endswith()\nUsed for pattern checking and file extension validation."
        },
        {
          "type": "code",
          "value": "file = \"data.csv\"\nprint(file.endswith(\".csv\"))"
        },
        {
          "type": "output",
          "value": "True"
        },
        {
          "type": "text",
          "value": "Interview Concept: Immutability\nYou cannot modify a string after creation. You must create a new one."
        },
        {
          "type": "code",
          "value": "a = \"hello\"\n# a[0] = \"H\" # Raises TypeError\na = \"H\" + a[1:] # Correct way\nprint(a)"
        },
        {
          "type": "output",
          "value": "Hello"
        },
        {
          "type": "text",
          "value": "Quick Revision:\n• find() vs index(): Error handling diff\n• capitalize() vs title(): Word vs Sentence\n• Immutability: Cannot change s[i] directly\n• join(): More efficient for concatenation than +"
        }
      ],
      "questions": [
        {
          "question": "What is the difference between find() and index()?",
          "answer": "Both find the position of a substring, but find() returns -1 if the value is not found, while index() raises a ValueError."
        },
        {
          "question": "Are Python strings mutable or immutable?",
          "answer": "Python strings are immutable, meaning their content cannot be changed after they are created."
        },
        {
          "question": "What is the difference between title() and capitalize()?",
          "answer": "capitalize() only converts the first character of the entire string to uppercase, while title() converts the first character of every word to uppercase."
        },
        {
          "question": "How do you check if a string consists only of digits?",
          "answer": "Using the string.isdigit() method."
        }
      ]
    },
    {
      "id": "python-string-concatenation",
      "title": "Python String Concatenation",
      "category": "Basic",
      "definition": "String concatenation is the process of joining two or more strings together using operators like + or specialized methods like join() and f-strings.",
      "sections": [
        {
          "type": "text",
          "value": "There are several ways to join strings in Python:\n1. + operator\n2. += operator\n3. join() method\n4. f-strings (Recommended)\n5. % formatting\n6. format() method"
        },
        {
          "type": "text",
          "value": "1. Using + Operator\nThe simplest way to join strings."
        },
        {
          "type": "code",
          "value": "first = \"Hello\"\nsecond = \"World\"\nresult = first + \" \" + second\nprint(result)"
        },
        {
          "type": "output",
          "value": "Hello World"
        },
        {
          "type": "text",
          "value": "2. Using join() Method\nMost efficient for joining multiple strings from a list or tuple."
        },
        {
          "type": "code",
          "value": "words = [\"I\", \"Love\", \"Python\"]\nresult = \" \".join(words)\nprint(result)"
        },
        {
          "type": "output",
          "value": "I Love Python"
        },
        {
          "type": "text",
          "value": "3. Using f-Strings (Modern Approach)\nIntroduced in Python 3.6, it is the most readable and concise way."
        },
        {
          "type": "code",
          "value": "name = \"Dhana\"\nage = 23\nresult = f\"My name is {name} and I am {age} years old.\"\nprint(result)"
        },
        {
          "type": "output",
          "value": "My name is Dhana and I am 23 years old."
        },
        {
          "type": "text",
          "value": "CRITICAL ERROR: String + Integer\nYou cannot concatenate a string with an integer directly."
        },
        {
          "type": "code",
          "value": "age = 23\n# print(\"Age is \" + age) # Raises TypeError\nprint(\"Age is \" + str(age)) # Correct way"
        },
        {
          "type": "output",
          "value": "Age is 23"
        },
        {
          "type": "text",
          "value": "Quick Revision Table"
        },
        {
          "type": "table",
          "headers": [
            "Method",
            "Example"
          ],
          "rows": [
            [
              "+",
              "\"Hello\" + \"World\""
            ],
            [
              "+=",
              "text += \"Python\""
            ],
            [
              "join()",
              "\" \".join(list)"
            ],
            [
              "f-string",
              "f\"{name}\""
            ],
            [
              "%",
              "\"%s\" % name"
            ],
            [
              "format()",
              "\"{}\".format(name)"
            ]
          ]
        }
      ],
      "questions": [
        {
          "question": "What is the most efficient way to join a large list of strings in Python?",
          "answer": "Using the 'join()' method is significantly more efficient than using '+' in a loop, as it calculates memory only once."
        },
        {
          "question": "Can you concatenate a string and an integer using the + operator?",
          "answer": "No, it will raise a TypeError. You must first convert the integer to a string using str() or use an f-string."
        },
        {
          "question": "When were f-strings introduced and why are they preferred?",
          "answer": "Introduced in Python 3.6, they are preferred because they are faster, more readable, and allow embedding expressions directly in the string."
        }
      ]
    },
    {
      "id": "python-string-formatting",
      "title": "Python String Formatting",
      "category": "Basic",
      "definition": "String formatting allows you to create dynamic strings by inserting and formatting values (like numbers, decimals, and padding) directly into text templates.",
      "sections": [
        {
          "type": "text",
          "value": "1. f-strings (Recommended, Python 3.6+)\nf-strings are the fastest and most readable way to format strings."
        },
        {
          "type": "code",
          "value": "name = \"Alice\"\nage = 25\nprint(f\"My name is {name} and I am {age} years old.\")\n# Expressions inside f-strings\nprint(f\"Next year I will be {age + 1}\")"
        },
        {
          "type": "output",
          "value": "My name is Alice and I am 25 years old.\nNext year I will be 26"
        },
        {
          "type": "text",
          "value": "2. str.format() method\nWorks by using placeholders {} which are filled by the format() method arguments."
        },
        {
          "type": "code",
          "value": "print(\"My name is {} and I am {}\".format(\"Alice\", 25))\n# Named placeholders\nprint(\"My name is {n} and I am {a}\".format(n=\"Alice\", a=25))"
        },
        {
          "type": "output",
          "value": "My name is Alice and I am 25\nMy name is Alice and I am 25"
        },
        {
          "type": "text",
          "value": "3. Formatting Numbers (Power of f-strings)\nf-strings allow you to format numbers for decimals, padding, and alignment easily."
        },
        {
          "type": "code",
          "value": "pi = 3.14159\nprint(f\"Two decimals: {pi:.2f}\")\n\nnum = 5\nprint(f\"Padding: {num:03}\")\n\nlarge_num = 1000000\nprint(f\"Commas: {large_num:,}\")\n\nscore = 0.85\nprint(f\"Percent: {score:.0%}\")"
        },
        {
          "type": "output",
          "value": "Two decimals: 3.14\nPadding: 005\nCommas: 1,000,000\nPercent: 85%"
        },
        {
          "type": "text",
          "value": "4. Alignment with f-strings\nYou can left, right, or center align text within a specific width."
        },
        {
          "type": "code",
          "value": "text = \"Hi\"\nprint(f\"|{text:<10}|\")  # Left\nprint(f\"|{text:>10}|\")  # Right\nprint(f\"|{text:^10}|\")  # Center"
        },
        {
          "type": "output",
          "value": "|Hi        |\n|        Hi|\n|    Hi    |"
        },
        {
          "type": "text",
          "value": "Quick Revision Summary:\n• f-strings: Modern, fast, readable\n• .format(): Traditional placeholder method\n• :.2f: Format to 2 decimal places\n• :,: Add thousands separator commas"
        }
      ],
      "questions": [
        {
          "question": "How do you limit a float to 2 decimal places using f-strings?",
          "answer": "Use the syntax f'{value:.2f}' inside the string."
        },
        {
          "question": "How can you add leading zeros to a number (e.g., convert 5 to 005)?",
          "answer": "Using padding syntax in f-strings: f'{num:03}' where 3 is the total width."
        },
        {
          "question": "What is the f-string syntax for adding thousand-separator commas to a large number?",
          "answer": "Use the syntax f'{number:,}'."
        },
        {
          "question": "What is the difference between <, >, and ^ in f-string alignment?",
          "answer": "< is for left alignment, > is for right alignment, and ^ is for center alignment."
        }
      ]
    },
    {
      "id": "python-placeholders-modifiers",
      "title": "Python Placeholders & Modifiers",
      "category": "Basic",
      "definition": "Placeholders { } allow for dynamic insertion of variables, expressions, and function results into strings, while Modifiers : format those values for precision, alignment, and display style.",
      "sections": [
        {
          "type": "text",
          "value": "1. What are Placeholders?\nIn f-strings, a placeholder is defined inside { }. It can contain variables, mathematical operations, and even function calls."
        },
        {
          "type": "code",
          "value": "name = \"python\"\nx = 10; y = 5\n# Operations and Functions inside placeholders\nprint(f\"Sum: {x + y}\")\nprint(f\"Upper: {name.upper()}\")\nprint(f\"Length: {len(name)}\")"
        },
        {
          "type": "output",
          "value": "Sum: 15\nUpper: PYTHON\nLength: 6"
        },
        {
          "type": "text",
          "value": "2. What are Modifiers?\nModifiers are used after a colon : inside the placeholder to change how the value is displayed.\nSyntax: {value:modifier}"
        },
        {
          "type": "text",
          "value": "📍 Float Precision (.2f)\nControls the number of decimal places for float numbers."
        },
        {
          "type": "code",
          "value": "price = 49.9876\nprint(f\"Price: {price:.2f}\")"
        },
        {
          "type": "output",
          "value": "Price: 49.99"
        },
        {
          "type": "text",
          "value": "📍 Zero Padding (:03)\nFills leading empty spaces with zeros until the specified width is reached."
        },
        {
          "type": "code",
          "value": "num = 5\nprint(f\"Padded: {num:03}\")"
        },
        {
          "type": "output",
          "value": "Padded: 005"
        },
        {
          "type": "text",
          "value": "📍 Comma Separator (:,)\nAutomatically adds commas to large numbers for better readability."
        },
        {
          "type": "code",
          "value": "amount = 1000000\nprint(f\"Total: {amount:,}\")"
        },
        {
          "type": "output",
          "value": "Total: 1,000,000"
        },
        {
          "type": "table",
          "headers": [
            "Modifier",
            "Meaning",
            "Example"
          ],
          "rows": [
            [
              ".2f",
              "2 decimal places",
              "3.14"
            ],
            [
              ":03",
              "Zero padding",
              "005"
            ],
            [
              ":<10",
              "Left align",
              "Text left"
            ],
            [
              ":>10",
              "Right align",
              "Text right"
            ],
            [
              ":^10",
              "Center align",
              "Text center"
            ],
            [
              ":,",
              "Comma separator",
              "1,000"
            ],
            [
              ".0%",
              "Percentage",
              "85%"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Quick Revision Summary:\n• { } → Placeholder for dynamic data\n• : → Starts the modifier section\n• .2f → Two decimal precision\n• 03 → Pad with zeros up to 3 digits"
        }
      ],
      "questions": [
        {
          "question": "Can you perform calculations inside a placeholder?",
          "answer": "Yes, f-strings allow mathematical operations like {x + y} directly inside the braces."
        },
        {
          "question": "How do you call a string method inside an f-string?",
          "answer": "You can call it directly, for example: f'{name.upper()}'."
        },
        {
          "question": "What is the syntax for a modifier in a placeholder?",
          "answer": "The syntax is {value:modifier}, where the colon separates the value from its formatting rule."
        },
        {
          "question": "What does the modifier :^10 do?",
          "answer": "It center-aligns the text within a field that is 10 characters wide."
        }
      ]
    },
    {
      "id": "python-escape-characters",
      "title": "Python Escape Characters",
      "category": "Basic",
      "definition": "Escape characters are special sequences that begin with a backslash (\\) and are used to represent characters that are otherwise difficult to include directly in a string.",
      "sections": [
        {
          "type": "text",
          "value": "Common Python Escape Characters Reference"
        },
        {
          "type": "table",
          "headers": [
            "Escape Character",
            "Description",
            "Example",
            "Output"
          ],
          "rows": [
            [
              "\\'",
              "Single Quote",
              "'It\\'s OK'",
              "It's OK"
            ],
            [
              "\\\"",
              "Double Quote",
              "\"He said \\\"Hi\\\"\"",
              "He said \"Hi\""
            ],
            [
              "\\\\",
              "Backslash",
              "\"C:\\\\Users\"",
              "C:\\Users"
            ],
            [
              "\\n",
              "New Line",
              "\"Hello\\nWorld\"",
              "Hello ↵ World"
            ],
            [
              "\\t",
              "Tab Space",
              "\"Hello\\tWorld\"",
              "Hello    World"
            ],
            [
              "\\r",
              "Carriage Return",
              "\"Hello\\rWorld\"",
              "Overwrites beginning"
            ],
            [
              "\\b",
              "Backspace",
              "\"Helloo\\b\"",
              "Hello"
            ],
            [
              "\\f",
              "Form Feed",
              "\"Hello\\fWorld\"",
              "Form feed character"
            ],
            [
              "\\ooo",
              "Octal Value",
              "\"\\110\"",
              "H"
            ],
            [
              "\\xhh",
              "Hexadecimal Value",
              "\"\\x48\"",
              "H"
            ],
            [
              "\\a",
              "Bell/Alert Sound",
              "\"\\a\"",
              "Alert sound"
            ],
            [
              "\\v",
              "Vertical Tab",
              "\"Hello\\vWorld\"",
              "Vertical spacing"
            ],
            [
              "\\0",
              "Null Character",
              "\"\\0\"",
              "Null character"
            ],
            [
              "\\N{name}",
              "Unicode by Name",
              "\"\\N{HEART SUIT}\"",
              "♥"
            ],
            [
              "\\uXXXX",
              "Unicode 16-bit Hex",
              "\"\\u03A9\"",
              "Ω"
            ],
            [
              "\\UXXXXXXXX",
              "Unicode 32-bit Hex",
              "\"\\U0001F600\"",
              "😀"
            ]
          ]
        },
        {
          "type": "text",
          "value": "1. Single Quote"
        },
        {
          "type": "code",
          "value": "txt = 'It\\'s alright.'\nprint(txt)"
        },
        {
          "type": "output",
          "value": "It's alright."
        },
        {
          "type": "text",
          "value": "2. Backslash"
        },
        {
          "type": "code",
          "value": "txt = \"This will insert one \\\\ backslash.\"\nprint(txt)"
        },
        {
          "type": "output",
          "value": "This will insert one \\ backslash."
        },
        {
          "type": "text",
          "value": "3. New Line (\\n)"
        },
        {
          "type": "code",
          "value": "txt = \"Hello\\nWorld\"\nprint(txt)"
        },
        {
          "type": "output",
          "value": "Hello\nWorld"
        },
        {
          "type": "text",
          "value": "4. Tab (\\t)"
        },
        {
          "type": "code",
          "value": "txt = \"Hello\\tWorld\"\nprint(txt)"
        },
        {
          "type": "output",
          "value": "Hello    World"
        },
        {
          "type": "text",
          "value": "5. Backspace (\\b)"
        },
        {
          "type": "code",
          "value": "txt = \"Hello\\bWorld\"\nprint(txt)"
        },
        {
          "type": "output",
          "value": "HellWorld"
        },
        {
          "type": "text",
          "value": "6. Form Feed (\\f)"
        },
        {
          "type": "code",
          "value": "txt = \"Hello\\fWorld\"\nprint(txt)"
        },
        {
          "type": "output",
          "value": "Hello\fWorld"
        },
        {
          "type": "text",
          "value": "7. Hex Value (\\xhh)"
        },
        {
          "type": "code",
          "value": "txt = \"\\x48\\x65\\x6c\\x6c\\x6f\"\nprint(txt)"
        },
        {
          "type": "output",
          "value": "Hello"
        },
        {
          "type": "text",
          "value": "📍 Raw Strings (ignore escape characters)\nPrefixing a string with 'r' tells Python to ignore escape sequences. This is essential for Windows file paths."
        },
        {
          "type": "code",
          "value": "print(r\"Hello\\nWorld\")\nprint(r\"C:\\Users\\Admin\")"
        },
        {
          "type": "output",
          "value": "Hello\\nWorld\nC:\\Users\\Admin"
        },
        {
          "type": "text",
          "value": "Quick Revision Summary:\n• \\\\ → Literal backslash\n• \\n → Move to next line\n• \\t → Insert a tab space\n• r\"...\" → Raw string (no escaping)"
        }
      ],
      "questions": [
        {
          "question": "What is the purpose of the backslash (\\) in a string?",
          "answer": "It serves as an escape character, indicating that the character following it has a special meaning (like \\n for newline)."
        },
        {
          "question": "How do you include a double quote inside a string that is already enclosed in double quotes?",
          "answer": "By using the escape sequence \\\"."
        },
        {
          "question": "What is a 'raw string' and how do you create one?",
          "answer": "A raw string treats backslashes as literal characters rather than escape sequences. It is created by adding an 'r' prefix (e.g., r'C:\\\\path')."
        },
        {
          "question": "Which escape sequence is used to represent a tab space?",
          "answer": "The \\t escape sequence."
        }
      ]
    },
    {
      "id": "python-booleans",
      "title": "Python Booleans",
      "category": "Basic",
      "definition": "In Python, a Boolean represents one of two values: True or False. Booleans are used to test conditions.",
      "sections": [
        {
          "type": "text",
          "value": "Boolean Values"
        },
        {
          "type": "code",
          "value": "print(True)\nprint(False)"
        },
        {
          "type": "output",
          "value": "True\nFalse"
        },
        {
          "type": "text",
          "value": "Boolean Type\nUse type() to check the data type."
        },
        {
          "type": "code",
          "value": "x = True\nprint(type(x))"
        },
        {
          "type": "output",
          "value": "<class 'bool'>"
        },
        {
          "type": "text",
          "value": "Boolean from Comparisons\nPython returns True or False when comparing values."
        },
        {
          "type": "text",
          "value": "Equal To (==)"
        },
        {
          "type": "code",
          "value": "print(10 == 10)\nprint(10 == 5)"
        },
        {
          "type": "output",
          "value": "True\nFalse"
        },
        {
          "type": "text",
          "value": "Not Equal To (!=)"
        },
        {
          "type": "code",
          "value": "print(10 != 5)\nprint(10 != 10)"
        },
        {
          "type": "output",
          "value": "True\nFalse"
        },
        {
          "type": "text",
          "value": "Greater Than (>)"
        },
        {
          "type": "code",
          "value": "print(20 > 10)\nprint(5 > 10)"
        },
        {
          "type": "output",
          "value": "True\nFalse"
        },
        {
          "type": "text",
          "value": "Less Than (<)"
        },
        {
          "type": "code",
          "value": "print(5 < 10)\nprint(20 < 10)"
        },
        {
          "type": "output",
          "value": "True\nFalse"
        },
        {
          "type": "text",
          "value": "Greater Than or Equal To (>=)"
        },
        {
          "type": "code",
          "value": "print(10 >= 10)\nprint(5 >= 10)"
        },
        {
          "type": "output",
          "value": "True\nFalse"
        },
        {
          "type": "text",
          "value": "Less Than or Equal To (<=)"
        },
        {
          "type": "code",
          "value": "print(5 <= 10)\nprint(20 <= 10)"
        },
        {
          "type": "output",
          "value": "True\nFalse"
        },
        {
          "type": "text",
          "value": "The bool() Function\nThe bool() function converts values into Boolean values."
        },
        {
          "type": "text",
          "value": "Values That Return True"
        },
        {
          "type": "code",
          "value": "print(bool(\"Hello\"))\nprint(bool(100))\nprint(bool([1, 2, 3]))"
        },
        {
          "type": "output",
          "value": "True\nTrue\nTrue"
        },
        {
          "type": "text",
          "value": "Values That Return False"
        },
        {
          "type": "code",
          "value": "print(bool(\"\"))\nprint(bool(0))\nprint(bool([]))\nprint(bool(None))"
        },
        {
          "type": "output",
          "value": "False\nFalse\nFalse\nFalse"
        },
        {
          "type": "text",
          "value": "Boolean Operators"
        },
        {
          "type": "table",
          "headers": [
            "Operator",
            "Meaning",
            "Example"
          ],
          "rows": [
            [
              "and",
              "Both conditions must be True",
              "5 > 2 and 10 > 5"
            ],
            [
              "or",
              "At least one condition must be True",
              "5 > 10 or 10 > 5"
            ],
            [
              "not",
              "Reverses the result",
              "not(5 > 2)"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Boolean Summary"
        },
        {
          "type": "table",
          "headers": [
            "Expression",
            "Output"
          ],
          "rows": [
            [
              "10 > 5",
              "True"
            ],
            [
              "10 < 5",
              "False"
            ],
            [
              "10 == 10",
              "True"
            ],
            [
              "10 != 10",
              "False"
            ],
            [
              "bool(1)",
              "True"
            ],
            [
              "bool(0)",
              "False"
            ],
            [
              "bool(\"Python\")",
              "True"
            ],
            [
              "bool(\"\")",
              "False"
            ]
          ]
        }
      ],
      "questions": [
        {
          "question": "What are the only two possible values for a Boolean in Python?",
          "answer": "True and False (note the capitalization)."
        },
        {
          "question": "Which values evaluate to False when passed to the bool() function?",
          "answer": "Empty strings (\"\"), the number 0, None, and empty collections like [], (), or {}."
        },
        {
          "question": "What does the 'not' operator do?",
          "answer": "It reverses the Boolean value; 'not True' becomes False, and 'not False' becomes True."
        },
        {
          "question": "What is the result of '5 > 10 or 10 > 5'?",
          "answer": "True, because the 'or' operator only requires one of the conditions to be True."
        }
      ]
    },
    {
      "id": "python-operators",
      "title": "Python Operators",
      "category": "Basic",
      "definition": "Operators are used to perform operations on variables and values.",
      "sections": [
        {
          "type": "text",
          "value": "1. Arithmetic Operators\nUsed for mathematical calculations."
        },
        {
          "type": "table",
          "headers": [
            "Operator",
            "Meaning",
            "Example"
          ],
          "rows": [
            [
              "+",
              "Addition",
              "a + b"
            ],
            [
              "-",
              "Subtraction",
              "a - b"
            ],
            [
              "*",
              "Multiplication",
              "a * b"
            ],
            [
              "/",
              "Division",
              "a / b"
            ],
            [
              "%",
              "Modulus",
              "a % b"
            ],
            [
              "**",
              "Power",
              "a ** b"
            ],
            [
              "//",
              "Floor Division",
              "a // b"
            ]
          ]
        },
        {
          "type": "code",
          "value": "a = 10\nb = 3\n\nprint(a + b)\nprint(a - b)\nprint(a * b)\nprint(a / b)\nprint(a % b)\nprint(a ** b)\nprint(a // b)"
        },
        {
          "type": "output",
          "value": "13\n7\n30\n3.3333333333333335\n1\n1000\n3"
        },
        {
          "type": "text",
          "value": "2. Assignment Operators\nUsed to assign values to variables."
        },
        {
          "type": "table",
          "headers": [
            "Operator",
            "Example",
            "Same As"
          ],
          "rows": [
            [
              "=",
              "x = 5",
              "Assign"
            ],
            [
              "+=",
              "x += 3",
              "x = x + 3"
            ],
            [
              "-=",
              "x -= 3",
              "x = x - 3"
            ],
            [
              "*=",
              "x *= 3",
              "x = x * 3"
            ],
            [
              "/=",
              "x /= 3",
              "x = x / 3"
            ]
          ]
        },
        {
          "type": "code",
          "value": "x = 5\n\nx += 3\nprint(x)\n\nx -= 2\nprint(x)\n\nx *= 4\nprint(x)"
        },
        {
          "type": "output",
          "value": "8\n6\n24"
        },
        {
          "type": "text",
          "value": "3. Comparison Operators\nUsed to compare two values."
        },
        {
          "type": "table",
          "headers": [
            "Operator",
            "Meaning"
          ],
          "rows": [
            [
              "==",
              "Equal"
            ],
            [
              "!=",
              "Not Equal"
            ],
            [
              ">",
              "Greater Than"
            ],
            [
              "<",
              "Less Than"
            ],
            [
              ">=",
              "Greater Than or Equal"
            ],
            [
              "<=",
              "Less Than or Equal"
            ]
          ]
        },
        {
          "type": "code",
          "value": "a = 10\nb = 5\n\nprint(a == b)\nprint(a != b)\nprint(a > b)\nprint(a < b)\nprint(a >= b)\nprint(a <= b)"
        },
        {
          "type": "output",
          "value": "False\nTrue\nTrue\nFalse\nTrue\nFalse"
        },
        {
          "type": "text",
          "value": "4. Logical Operators\nUsed to combine conditional statements."
        },
        {
          "type": "table",
          "headers": [
            "Operator",
            "Meaning"
          ],
          "rows": [
            [
              "and",
              "Returns True if both are true"
            ],
            [
              "or",
              "Returns True if one is true"
            ],
            [
              "not",
              "Reverse the result"
            ]
          ]
        },
        {
          "type": "code",
          "value": "x = 5\n\nprint(x > 2 and x < 10)\nprint(x > 10 or x < 10)\nprint(not(x > 2))"
        },
        {
          "type": "output",
          "value": "True\nTrue\nFalse"
        },
        {
          "type": "text",
          "value": "5. Identity Operators\nUsed to compare object memory locations."
        },
        {
          "type": "table",
          "headers": [
            "Operator",
            "Meaning"
          ],
          "rows": [
            [
              "is",
              "Same object"
            ],
            [
              "is not",
              "Not same object"
            ]
          ]
        },
        {
          "type": "code",
          "value": "a = [1, 2]\nb = a\nc = [1, 2]\n\nprint(a is b)\nprint(a is c)\nprint(a is not c)"
        },
        {
          "type": "output",
          "value": "True\nFalse\nTrue"
        },
        {
          "type": "text",
          "value": "6. Membership Operators\nUsed to test whether a value exists in a sequence."
        },
        {
          "type": "table",
          "headers": [
            "Operator",
            "Meaning"
          ],
          "rows": [
            [
              "in",
              "Value exists"
            ],
            [
              "not in",
              "Value does not exist"
            ]
          ]
        },
        {
          "type": "code",
          "value": "fruits = [\"apple\", \"banana\", \"mango\"]\n\nprint(\"apple\" in fruits)\nprint(\"grapes\" in fruits)\nprint(\"banana\" not in fruits)"
        },
        {
          "type": "output",
          "value": "True\nFalse\nFalse"
        },
        {
          "type": "text",
          "value": "7. Bitwise Operators\nUsed to perform operations on binary numbers."
        },
        {
          "type": "table",
          "headers": [
            "Operator",
            "Meaning"
          ],
          "rows": [
            [
              "&",
              "AND"
            ],
            [
              "|",
              "OR"
            ],
            [
              "^",
              "XOR"
            ],
            [
              "~",
              "NOT"
            ],
            [
              "<<",
              "Left Shift"
            ],
            [
              ">>",
              "Right Shift"
            ]
          ]
        },
        {
          "type": "code",
          "value": "a = 5\nb = 3\n\nprint(a & b)\nprint(a | b)\nprint(a ^ b)\nprint(a << 1)\nprint(a >> 1)"
        },
        {
          "type": "output",
          "value": "1\n7\n6\n10\n2"
        },
        {
          "type": "text",
          "value": "Quick Revision Summary:\n• Arithmetic: Math (+, -, *, /, %, **, //)\n• Assignment: Shorthand values (+=, -=)\n• Comparison: Equality and relative size (==, !=, >)\n• Identity: Memory check (is, is not)\n• Membership: Sequence check (in, not in)\n• Logical: Boolean combo (and, or, not)"
        }
      ],
      "questions": [
        {
          "question": "What is the difference between '/' and '//' in Python?",
          "answer": "'/' performs standard division and returns a float, while '//' performs floor division and returns the largest whole number (integer) less than or equal to the result."
        },
        {
          "question": "What is the result of 'is' vs '=='?",
          "answer": "'==' compares the values of two objects, while 'is' compares their identity (memory location) to see if they are the exact same object."
        },
        {
          "question": "What does the modulus operator (%) do?",
          "answer": "It returns the remainder of a division (e.g., 10 % 3 results in 1)."
        },
        {
          "question": "What are membership operators used for?",
          "answer": "They are used to check if a value exists within a sequence like a list, tuple, or string (using 'in' and 'not in')."
        }
      ]
    },
    {
      "id": "python-control-flow",
      "title": "Conditional Statements",
      "category": "Basic",
      "definition": "Conditional statements let you control the flow of your program based on true/false expressions. They are essential for decision-making in code.",
      "sections": [
        {
          "type": "text",
          "value": "Python supports the usual logical conditions from mathematics:\n• Equals: a == b\n• Not Equals: a != b\n• Less than: a < b\n• Less than or equal to: a <= b\n• Greater than: a > b\n• Greater than or equal to: a >= b\n\nThese conditions can be used in several ways, most commonly in 'if statements' and loops."
        },
        {
          "type": "text",
          "value": "2️⃣ Python if\nThe basic if statement executes a block of code only if a specified condition is True."
        },
        {
          "type": "code",
          "value": "age = 18\nif age >= 18:\n    print(\"You are eligible to vote\")"
        },
        {
          "type": "output",
          "value": "You are eligible to vote"
        },
        {
          "type": "text",
          "value": "3️⃣ Python elif\nShort for 'else if', it allows you to check multiple conditions if the previous ones were False."
        },
        {
          "type": "code",
          "value": "temperature = 22\nif temperature > 45:\n    print(\"It's hot outside!\")\nelif temperature > 35:\n    print(\"It's warm outside\")\nelif temperature > 25:\n    print(\"It's normal outside\")\nelse:\n    print(\"It's cold outside!\")"
        },
        {
          "type": "output",
          "value": "It's cold outside!"
        },
        {
          "type": "text",
          "value": "4️⃣ Python else\nThe else block captures anything that isn't caught by the preceding if/elif conditions."
        },
        {
          "type": "code",
          "value": "number = 7\nif number % 2 == 0:\n    print(\"The number is even\")\nelse:\n    print(\"The number is odd\")"
        },
        {
          "type": "output",
          "value": "The number is odd"
        },
        {
          "type": "text",
          "value": "🔸 Example: Number Analysis\nA practical demonstration of three-way branching logic."
        },
        {
          "type": "code",
          "value": "x = 0\n\nif x > 0:\n    print(\"Positive number\")\nelif x < 0:\n    print(\"Negative number\")\nelse:\n    print(\"Zero\")"
        },
        {
          "type": "output",
          "value": "Zero"
        },
        {
          "type": "text",
          "value": "5️⃣ Shorthand If (Ternary Operator)\nPython allows writing simple if-else statements in a single line for cleaner code."
        },
        {
          "type": "code",
          "value": "a = 10\nif a > 5: print(\"Greater\")\n\n# Full Ternary Example\nx = 7\nprint(\"Even\") if x % 2 == 0 else print(\"Odd\")"
        },
        {
          "type": "output",
          "value": "Greater\nOdd"
        },
        {
          "type": "text",
          "value": "6️⃣ Logical Operators\nLogical operators are used to combine multiple conditional statements."
        },
        {
          "type": "text",
          "value": "1️⃣ and Operator\nReturns True only if both conditions are true."
        },
        {
          "type": "code",
          "value": "age = 25\n\nif age > 18 and age < 30:\n    print(\"Eligible\")\n\n# age > 18 (True) and age < 30 (True) → Results in True"
        },
        {
          "type": "output",
          "value": "Eligible"
        },
        {
          "type": "text",
          "value": "2️⃣ or Operator\nReturns True if at least one condition is true."
        },
        {
          "type": "code",
          "value": "day = \"Sunday\"\n\nif day == \"Saturday\" or day == \"Sunday\":\n    print(\"Weekend\")\n\n# day == \"Saturday\" (False) or day == \"Sunday\" (True) → Results in True"
        },
        {
          "type": "output",
          "value": "Weekend"
        },
        {
          "type": "text",
          "value": "3️⃣ not Operator\nReverses the condition; True becomes False, and False becomes True."
        },
        {
          "type": "code",
          "value": "x = False\n\nif not x:\n    print(\"x is False\")\n\n# x is False, so 'not x' is True → Block executes"
        },
        {
          "type": "output",
          "value": "x is False"
        },
        {
          "type": "text",
          "value": "🔹 Combined Example: Outdoor Activities\nA comprehensive example using 'and', 'or', and 'not' together."
        },
        {
          "type": "code",
          "value": "temperature = 25\nis_raining = False\nis_weekend = True\n\nif (temperature > 20 and not is_raining) or is_weekend:\n    print(\"Great day for outdoor activities!\")"
        },
        {
          "type": "output",
          "value": "Great day for outdoor activities!"
        },
        {
          "type": "table",
          "headers": [
            "Operator",
            "Meaning",
            "Example"
          ],
          "rows": [
            [
              "and",
              "Both conditions must be True",
              "x > 1 and x < 10"
            ],
            [
              "or",
              "At least one condition is True",
              "x < 0 or x > 5"
            ],
            [
              "not",
              "Reverses the condition",
              "not x"
            ]
          ]
        },
        {
          "type": "text",
          "value": "7️⃣ Nested if Statements\nYou can place an if statement inside another if statement to check hierarchical conditions."
        },
        {
          "type": "text",
          "value": "🔹 Basic Example"
        },
        {
          "type": "code",
          "value": "x = 41\n\nif x > 10:\n    print(\"Above ten,\")\n    if x > 20:\n        print(\"and also above 20!\")\n    else:\n        print(\"but not above 20.\")"
        },
        {
          "type": "output",
          "value": "Above ten,\nand also above 20!"
        },
        {
          "type": "text",
          "value": "🔹 Example: Driving Eligibility"
        },
        {
          "type": "code",
          "value": "age = 25\nhas_license = True\n\nif age >= 18:\n    if has_license:\n        print(\"You can drive\")\n    else:\n        print(\"You need a license\")\nelse:\n    print(\"You are too young to drive\")"
        },
        {
          "type": "output",
          "value": "You can drive"
        },
        {
          "type": "text",
          "value": "🔹 Multiple Levels of Nesting\nYou can create many levels of nested if statements for complex decision trees."
        },
        {
          "type": "code",
          "value": "score = 85\nattendance = 90\nsubmitted = True\n\nif score >= 60:\n    if attendance >= 80:\n        if submitted:\n            print(\"Pass with good standing\")\n        else:\n            print(\"Pass but missing assignment\")\n    else:\n        print(\"Pass but low attendance\")\nelse:\n    print(\"Fail\")"
        },
        {
          "type": "output",
          "value": "Pass with good standing"
        },
        {
          "type": "text",
          "value": "🔹 Nested If vs Logical Operators\nSometimes nested if statements can be simplified using logical operators like 'and' for cleaner code."
        },
        {
          "type": "code",
          "value": "# Nested Version\nif temperature > 20:\n    if is_sunny:\n        print(\"Perfect beach weather!\")\n\n# Simplified Version using 'and'\nif temperature > 20 and is_sunny:\n    print(\"Perfect beach weather!\")"
        },
        {
          "type": "table",
          "headers": [
            "Feature",
            "Description"
          ],
          "rows": [
            [
              "Nested If",
              "if inside another if"
            ],
            [
              "Purpose",
              "Check conditions step by step"
            ],
            [
              "Advantage",
              "Fine-grained decision control"
            ],
            [
              "Alternative",
              "Use logical operators (and/or)"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Real-Life Examples of Nested If:\n• ATM PIN verification\n• Login systems\n• Student grading systems\n• Bank loan approval"
        },
        {
          "type": "text",
          "value": "8️⃣ Pass Statement\nSince code blocks cannot be empty, use 'pass' as a placeholder to avoid indentation errors."
        },
        {
          "type": "code",
          "value": "x = 5\nif x > 0:\n    pass # Placeholder for future logic"
        },
        {
          "type": "text",
          "value": "🔹 Complete Real-World Example: Grading System"
        },
        {
          "type": "code",
          "value": "marks = 85\nif marks >= 90:\n    print(\"Grade A\")\nelif marks >= 75:\n    print(\"Grade B\")\nelif marks >= 50:\n    print(\"Grade C\")\nelse:\n    print(\"Fail\")"
        },
        {
          "type": "output",
          "value": "Grade B"
        },
        {
          "type": "text",
          "value": "📍 Important Notes:\n• Use 4 spaces for Indentation to define code blocks.\n• Comparison Operators: ==, !=, >, <, >=, <=\n• Logical Operators: and, or, not"
        }
      ],
      "questions": [
        {
          "question": "What is the importance of indentation in Python conditional statements?",
          "answer": "Python uses indentation to define the scope and blocks of code. Incorrect indentation will lead to an IndentationError or logical bugs."
        },
        {
          "question": "What is the purpose of the 'pass' statement?",
          "answer": "The 'pass' statement is used as a placeholder in an empty block of code where the syntax requires some statement but no action is needed yet."
        },
        {
          "question": "How does the 'elif' keyword differ from a sequence of multiple 'if' statements?",
          "answer": "In an if-elif sequence, Python stops checking once it finds a True condition. In a series of 'if' statements, Python evaluates every single one, which is less efficient and can lead to multiple blocks executing."
        },
        {
          "question": "Explain the Python Ternary Operator syntax.",
          "answer": "The syntax is: [value_if_true] if [condition] else [value_if_false]. It allows for concise single-line decision making."
        }
      ]
    },
    {
      "id": "python-match-statement",
      "title": "Python Match Statement",
      "category": "Basic",
      "definition": "The match statement is used to perform different actions based on different conditions. It selects one of many code blocks to execute.",
      "sections": [
        {
          "type": "text",
          "value": "Syntax"
        },
        {
          "type": "code",
          "value": "match expression:\n    case x:\n        # code block\n    case y:\n        # code block\n    case z:\n        # code block"
        },
        {
          "type": "text",
          "value": "How Match Works\n• The match expression is evaluated once.\n• The value is compared with each case.\n• If a match is found, the corresponding code block executes.\n• If no match is found, the default case (_) can run."
        },
        {
          "type": "text",
          "value": "1. Example 1: Match Statement"
        },
        {
          "type": "code",
          "value": "day = 4\n\nmatch day:\n    case 1: print(\"Monday\")\n    case 2: print(\"Tuesday\")\n    case 3: print(\"Wednesday\")\n    case 4: print(\"Thursday\")\n    case 5: print(\"Friday\")\n    case 6: print(\"Saturday\")\n    case 7: print(\"Sunday\")"
        },
        {
          "type": "output",
          "value": "Thursday"
        },
        {
          "type": "text",
          "value": "2. Default Value (_)\nUse _ as the default case when no other cases match. It must be written last."
        },
        {
          "type": "code",
          "value": "day = 4\n\nmatch day:\n    case 6: print(\"Today is Saturday\")\n    case 7: print(\"Today is Sunday\")\n    case _: print(\"Looking forward to the Weekend\")"
        },
        {
          "type": "output",
          "value": "Looking forward to the Weekend"
        },
        {
          "type": "text",
          "value": "3. Combine Multiple Values Using |\nUse the pipe symbol | as an OR operator."
        },
        {
          "type": "code",
          "value": "day = 4\n\nmatch day:\n    case 1 | 2 | 3 | 4 | 5:\n        print(\"Today is a weekday\")\n    case 6 | 7:\n        print(\"I love weekends!\")"
        },
        {
          "type": "output",
          "value": "Today is a weekday"
        },
        {
          "type": "text",
          "value": "4. Match with If Condition (Guard)\nYou can add an if condition inside a case."
        },
        {
          "type": "code",
          "value": "month = 5\nday = 4\n\nmatch day:\n    case 1 | 2 | 3 | 4 | 5 if month == 4:\n        print(\"A weekday in April\")\n    case 1 | 2 | 3 | 4 | 5 if month == 5:\n        print(\"A weekday in May\")\n    case _:\n        print(\"No match\")"
        },
        {
          "type": "output",
          "value": "A weekday in May"
        },
        {
          "type": "text",
          "value": "5. Example 5: Match with Strings\nMatch can also be used for exact string comparison."
        },
        {
          "type": "code",
          "value": "fruit = \"apple\"\n\nmatch fruit:\n    case \"apple\":\n        print(\"Red Fruit\")\n    case \"banana\":\n        print(\"Yellow Fruit\")\n    case \"grapes\":\n        print(\"Green or Purple Fruit\")\n    case _:\n        print(\"Unknown Fruit\")"
        },
        {
          "type": "output",
          "value": "Red Fruit"
        },
        {
          "type": "text",
          "value": "📍 Common Use Cases\nThe match statement is particularly useful for:\n• Navigational menus and options\n• Command processing (CLI tools)\n• Strategic condition checking\n• Fixed-value selection logic"
        },
        {
          "type": "text",
          "value": "Match vs If-Else Summary"
        },
        {
          "type": "table",
          "headers": [
            "Match Statement",
            "If-Else Statement"
          ],
          "rows": [
            [
              "Cleaner for many conditions",
              "Can become lengthy"
            ],
            [
              "Easy to read",
              "More repetitive"
            ],
            [
              "Good for fixed values",
              "Better for complex logic"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Quick Revision"
        },
        {
          "type": "code",
          "value": "match variable:\n    case value1:\n        # code\n\n    case value2:\n        # code\n\n    case _:\n        # default code"
        }
      ],
      "questions": [
        {
          "question": "Which Python version introduced the 'match' statement?",
          "answer": "Python 3.10 introduced the match-case statement for structural pattern matching."
        },
        {
          "question": "What does the underscore (_) represent in a match statement?",
          "answer": "It serves as the default or catch-all case, matching any value that wasn't captured by the previous patterns."
        },
        {
          "question": "How do you match multiple possible values in a single 'case' block?",
          "answer": "By using the pipe (|) symbol between values, such as 'case 1 | 2 | 3:'."
        },
        {
          "question": "What is a 'guard' in a match statement?",
          "answer": "A guard is an 'if' condition added to a case pattern that must also evaluate to True for that case to execute."
        }
      ]
    },
    {
      "id": "python-lists",
      "title": "Lists",
      "category": "Basic",
      "definition": "Lists are used to store multiple items in a single variable. They are ordered, changeable (mutable), and allow duplicate values.",
      "sections": [
        {
          "type": "text",
          "value": "1. Creating and Accessing Lists\nLists are defined using square brackets [ ]. Items are indexed starting from 0."
        },
        {
          "type": "code",
          "value": "fruits = [\"apple\", \"banana\", \"cherry\"]\nprint(fruits)\nprint(fruits[1]) # Accessing second item"
        },
        {
          "type": "output",
          "value": "['apple', 'banana', 'cherry']\nbanana"
        },
        {
          "type": "text",
          "value": "2. Modifying Lists\nLists are mutable, meaning you can change, add, and remove items after the list has been created."
        },
        {
          "type": "code",
          "value": "fruits = [\"apple\", \"banana\"]\nfruits.append(\"orange\") # Adding\nfruits[0] = \"kiwi\" # Modifying\nprint(fruits)"
        },
        {
          "type": "output",
          "value": "['kiwi', 'banana', 'orange']"
        },
        {
          "type": "text",
          "value": "Quick Revision:\n• Syntax: [ ]\n• Mutable: Can be changed\n• Ordered: Maintains sequence\n• Duplicates: Allowed"
        }
      ],
      "questions": [
        {
          "question": "What does it mean that a list is 'mutable'?",
          "answer": "It means the items in the list can be changed, added, or removed after the list is created."
        },
        {
          "question": "How do you add an item to the end of a list?",
          "answer": "Using the append() method, for example: list.append(item)."
        }
      ]
    },
    {
      "id": "python-tuples",
      "title": "Tuples",
      "category": "Basic",
      "definition": "Tuples are used to store multiple items in a single variable. They are ordered and immutable (unchangeable).",
      "sections": [
        {
          "type": "text",
          "value": "1. Creating Tuples\nTuples are written with round brackets ( )."
        },
        {
          "type": "code",
          "value": "thistuple = (\"apple\", \"banana\", \"cherry\")\nprint(thistuple)"
        },
        {
          "type": "output",
          "value": "('apple', 'banana', 'cherry')"
        },
        {
          "type": "text",
          "value": "2. Immutability\nOnce a tuple is created, you cannot change its values. Tuples are unchangeable."
        },
        {
          "type": "code",
          "value": "x = (\"apple\", \"banana\")\n# x[0] = \"kiwi\" # This would cause an error"
        },
        {
          "type": "text",
          "value": "Quick Revision:\n• Syntax: ( )\n• Immutable: Cannot be changed\n• Ordered: Maintains sequence\n• Faster: Usually faster than lists"
        }
      ],
      "questions": [
        {
          "question": "Can you change an item in a tuple after it's created?",
          "answer": "No, tuples are immutable, meaning their elements cannot be changed, added, or removed once defined."
        },
        {
          "question": "When should you use a tuple instead of a list?",
          "answer": "Use a tuple when you have a collection of items that should not change throughout the program, ensuring data integrity."
        }
      ]
    },
    {
      "id": "python-sets",
      "title": "Sets",
      "category": "Basic",
      "definition": "Sets are used to store multiple items in a single variable. They are unordered, unchangeable, and do not allow duplicate values.",
      "sections": [
        {
          "type": "text",
          "value": "1. Creating Sets\nSets are written with curly brackets { }. They do not maintain any specific order."
        },
        {
          "type": "code",
          "value": "thisset = {\"apple\", \"banana\", \"cherry\"}\nprint(thisset)"
        },
        {
          "type": "output",
          "value": "{'banana', 'cherry', 'apple'}"
        },
        {
          "type": "text",
          "value": "2. No Duplicates\nSets automatically remove any duplicate items."
        },
        {
          "type": "code",
          "value": "nums = {1, 2, 2, 3, 3, 3}\nprint(nums)"
        },
        {
          "type": "output",
          "value": "{1, 2, 3}"
        },
        {
          "type": "text",
          "value": "Quick Revision:\n• Syntax: { }\n• Unordered: No index\n• Unique: No duplicates\n• Mutable: Can add/remove items"
        }
      ],
      "questions": [
        {
          "question": "How do sets handle duplicate values?",
          "answer": "Sets automatically ignore duplicate values; only unique items are stored."
        },
        {
          "question": "Can you access set items using an index?",
          "answer": "No, sets are unordered and unindexed, so you cannot access items by referring to an index."
        }
      ]
    },
    {
      "id": "python-dicts",
      "title": "Dictionaries",
      "category": "Basic",
      "definition": "Dictionaries are used to store data values in key:value pairs. They are ordered, changeable, and do not allow duplicate keys.",
      "sections": [
        {
          "type": "text",
          "value": "1. Creating Dictionaries\nDictionaries are written with curly brackets, and have keys and values."
        },
        {
          "type": "code",
          "value": "car = {\n  \"brand\": \"Ford\",\n  \"model\": \"Mustang\",\n  \"year\": 1964\n}\nprint(car[\"brand\"])"
        },
        {
          "type": "output",
          "value": "Ford"
        },
        {
          "type": "text",
          "value": "2. Modifying Dictionaries\nYou can change the value of a specific item by referring to its key name."
        },
        {
          "type": "code",
          "value": "car[\"year\"] = 2020\ncar[\"color\"] = \"red\" # Adding new key\nprint(car)"
        },
        {
          "type": "output",
          "value": "{'brand': 'Ford', 'model': 'Mustang', 'year': 2020, 'color': 'red'}"
        },
        {
          "type": "text",
          "value": "Quick Revision:\n• Syntax: { key: value }\n• Keys: Must be unique\n• Mutable: Can be changed\n• Access: Via keys, not index"
        }
      ],
      "questions": [
        {
          "question": "What happens if you try to add a duplicate key to a dictionary?",
          "answer": "Dictionaries cannot have two items with the same key. If you assign a new value to an existing key, it will overwrite the old value."
        },
        {
          "question": "How do you access a value in a dictionary?",
          "answer": "By referring to its key name inside square brackets, e.g., dict['key'], or using the get() method."
        }
      ]
    },
    {
      "id": "python-for-loop",
      "title": "For Loop",
      "category": "Loops",
      "definition": "A for loop is used for iterating over a sequence (that is either a list, a tuple, a dictionary, a set, or a string). It allows you to execute a set of statements, once for each item in a sequence.",
      "sections": [
        {
          "type": "text",
          "value": "1. Iterating Over a Range\nThe range() function returns a sequence of numbers, starting from 0 by default, and increments by 1 (by default), and stops before a specified number."
        },
        {
          "type": "code",
          "value": "for x in range(6):\n    print(x)\n\n# Specifying start and end\nfor x in range(2, 6):\n    print(x)"
        },
        {
          "type": "output",
          "value": "0\n1\n2\n3\n4\n5\n2\n3\n4\n5"
        },
        {
          "type": "text",
          "value": "2. Looping Through a String\nEven strings are iterable objects, they contain a sequence of characters."
        },
        {
          "type": "code",
          "value": "for x in \"banana\":\n  print(x)"
        },
        {
          "type": "output",
          "value": "b\na\nn\na\nn\na"
        },
        {
          "type": "text",
          "value": "3. The break Statement\nWith the break statement we can stop the loop before it has looped through all the items."
        },
        {
          "type": "code",
          "value": "fruits = [\"apple\", \"banana\", \"cherry\"]\nfor x in fruits:\n    print(x)\n    if x == \"banana\":\n        break"
        },
        {
          "type": "output",
          "value": "apple\nbanana"
        },
        {
          "type": "text",
          "value": "4. The continue Statement\nWith the continue statement we can stop the current iteration of the loop, and continue with the next."
        },
        {
          "type": "code",
          "value": "fruits = [\"apple\", \"banana\", \"cherry\"]\nfor x in fruits:\n    if x == \"banana\":\n        continue\n    print(x)"
        },
        {
          "type": "output",
          "value": "apple\ncherry"
        },
        {
          "type": "text",
          "value": "5. Else in For Loop\nThe else keyword in a for loop specifies a block of code to be executed when the loop is finished."
        },
        {
          "type": "code",
          "value": "for x in range(6):\n    print(x)\nelse:\n    print(\"Finally finished!\")"
        },
        {
          "type": "output",
          "value": "0\n1\n2\n3\n4\n5\nFinally finished!"
        },
        {
          "type": "text",
          "value": "♦ Quick Revision:\n• Range: range(start, stop, step)\n• break: Exits the loop\n• continue: Skips current iteration\n• else: Runs when loop finishes naturally"
        }
      ],
      "questions": [
        {
          "question": "What happens if a 'break' is executed inside a 'for' loop that has an 'else' block?",
          "answer": "The 'else' block will NOT be executed if the loop is terminated by a 'break' statement."
        },
        {
          "question": "How do you iterate over a dictionary using a for loop?",
          "answer": "You can use .items() to get both keys and values, .keys() for keys only, or .values() for values only."
        },
        {
          "question": "What is the purpose of the 'range()' function?",
          "answer": "It generates a sequence of numbers, which is commonly used to iterate a specific number of times in a for loop."
        }
      ]
    },
    {
      "id": "python-while-loop",
      "title": "While Loop",
      "category": "Loops",
      "definition": "The while loop executes a set of statements as long as a specified condition is true.",
      "sections": [
        {
          "type": "text",
          "value": "1. Basic While Loop\nThe loop will continue to run as long as the condition remains True. Remember to increment the counter, or the loop will continue forever."
        },
        {
          "type": "code",
          "value": "i = 1\nwhile i < 6:\n    print(i)\n    i += 1"
        },
        {
          "type": "output",
          "value": "1\n2\n3\n4\n5"
        },
        {
          "type": "text",
          "value": "2. The break Statement\nJust like in for loops, the break statement stops the while loop even if the condition is still true."
        },
        {
          "type": "code",
          "value": "i = 1\nwhile i < 6:\n    print(i)\n    if i == 3:\n        break\n    i += 1"
        },
        {
          "type": "output",
          "value": "1\n2\n3"
        },
        {
          "type": "text",
          "value": "3. The continue Statement\nThe continue statement stops the current iteration and continues with the next condition check."
        },
        {
          "type": "code",
          "value": "i = 0\nwhile i < 6:\n    i += 1\n    if i == 3:\n        continue\n    print(i)"
        },
        {
          "type": "output",
          "value": "1\n2\n4\n5\n6"
        },
        {
          "type": "text",
          "value": "4. Else in While Loop\nWith the else statement we can run a block of code once when the condition no longer is true."
        },
        {
          "type": "code",
          "value": "i = 1\nwhile i < 6:\n    print(i)\n    i += 1\nelse:\n    print(\"i is no longer less than 6\")"
        },
        {
          "type": "output",
          "value": "1\n2\n3\n4\n5\ni is no longer less than 6"
        },
        {
          "type": "text",
          "value": "♦ Quick Revision:\n• Condition: Checked before each iteration\n• Infinity: Occurs if condition never becomes False\n• break: Force exit\n• continue: Jump to next condition check"
        }
      ],
      "questions": [
        {
          "question": "What is an infinite loop and how do you avoid it?",
          "answer": "An infinite loop is a loop that never ends because the condition always stays True. It can be avoided by ensuring the loop variable is updated within the block."
        },
        {
          "question": "Can you use an 'else' block with a 'while' loop?",
          "answer": "Yes, the 'else' block executes when the 'while' condition becomes False."
        },
        {
          "question": "How does 'continue' work in a while loop?",
          "answer": "It skips the remaining code in the current iteration and immediately jumps back to re-evaluate the loop's condition."
        }
      ]
    },
    {
      "id": "intro-to-oop",
      "title": "Python is an Object-Oriented Programming (OOP) Language",
      "category": "OOP",
      "definition": "Python is an object-oriented language, allowing you to structure your code using Classes and Objects for better organization and management.",
      "sections": [
        {
          "type": "text",
          "value": "Why OOP is Used in Python:\n• Code Reusability: Reuse existing code using inheritance.\n• Security: Protect data using encapsulation and data hiding.\n• Abstraction: Hide implementation details and show only essential features.\n• Polymorphism: Allows one method to perform different behaviors.\n• Scalability: Easily expand large applications.\n• Real-World Modeling: Represent real-life objects like Students, Cars, or Bank Accounts.\n• Better Organization: Code becomes clean, modular, and easier to maintain."
        },
        {
          "type": "text",
          "value": "Core Concepts:\nClass, Object, Inheritance, Polymorphism, Encapsulation, Abstraction"
        },
        {
          "type": "code",
          "value": "class Student:\n    def __init__(self, name):\n        self.name = name\n\n    def display(self):\n        print(\"Student Name:\", self.name)\n\ns1 = Student(\"Vasu\")\ns1.display()"
        },
        {
          "type": "output",
          "value": "Student Name: Vasu"
        },
        {
          "type": "text",
          "value": "Real-World Example: Bank Account\n• Class → BankAccount\n• Objects → Customer accounts (each can have a different balance, account number, and transactions)."
        },
        {
          "type": "text",
          "value": "Advantages of OOP:\n• Classes & Objects: Better code structure\n• Inheritance: Reuse code\n• Encapsulation: Data security\n• Polymorphism: Flexibility\n• Abstraction: Hide complexity"
        },
        {
          "type": "text",
          "value": "Conclusion:\nObject-Oriented Programming helps Python developers build organized, reusable, secure, and scalable real-world software applications efficiently."
        },
        {
          "type": "text",
          "value": "Quick Revision:\n• Class: Blueprint\n• Object: Real Instance\n• Reusability: Inheritance\n• Security: Encapsulation\n• Hiding Details: Abstraction\n• Different Behaviors: Polymorphism"
        }
      ],
      "questions": [
        {
          "question": "What is OOP?",
          "answer": "Object-Oriented Programming is a way to organize code using classes and objects."
        },
        {
          "question": "Why is OOP used in Python?",
          "answer": "OOP helps in code reusability, security, scalability, and hiding implementation details, making programs more organized and manageable."
        },
        {
          "question": "Name the four pillars of OOP.",
          "answer": "Inheritance, Encapsulation, Abstraction, and Polymorphism."
        }
      ]
    },
    {
      "id": "what-is-a-class",
      "title": "What is a Class in Python?",
      "category": "OOP Basics",
      "definition": "A class is a blueprint or template used to create objects. It groups related data (attributes) and behavior (methods) together.",
      "sections": [
        {
          "type": "text",
          "value": ". Core Concept:\n• Class → Blueprint (e.g., Student plan)\n• Object → Real thing created from blueprint (e.g., a particular student like Vasudha)"
        },
        {
          "type": "text",
          "value": "Syntax:\nclass ClassName:\n    # attributes\n    # methods"
        },
        {
          "type": "code",
          "value": "class Student:\n    name = \"Vasudha\"\n    age = 23\n\nprint(Student.name)\nprint(Student.age)"
        },
        {
          "type": "output",
          "value": "Vasudha\n23"
        },
        {
          "type": "text",
          "value": "Explanation:\n. Class Name: \"class Student:\" creates a class called Student.\n. Attributes: \"name\" and \"age\" are class attributes (variables).\n. Accessing Attributes: Access attributes using the format \"ClassName.attribute\".\nImportant Points:\n• A class is used to create objects.\n• Variables inside a class are called attributes.\n• Functions inside a class are called methods.\n• A class helps organize code properly."
        },
        {
          "type": "text",
          "value": "Quick Revision:\n• Keyword: class\n• Purpose: Blueprint\n• Components: Attributes & Methods"
        }
      ],
      "questions": [
        {
          "question": "What is a class?",
          "answer": "A blueprint or template for creating objects."
        },
        {
          "question": "How do you define a class in Python?",
          "answer": "Using the 'class' keyword followed by the class name."
        },
        {
          "question": "Can a class have both variables and functions?",
          "answer": "Yes, they are called attributes and methods respectively."
        }
      ]
    },
    {
      "id": "the-pass-statement",
      "title": "The pass Statement in Python",
      "category": "OOP Basics",
      "definition": "A class cannot be empty in Python. If you create a class without any code inside it, Python gives an error. To avoid this, use the pass statement.",
      "sections": [
        {
          "type": "text",
          "value": "In Python, \"pass\" literally means \"do nothing.\" It serves as a placeholder for future code when a class or function body is required but not yet implemented."
        },
        {
          "type": "text",
          "value": "Syntax:\nclass ClassName:\n    pass"
        },
        {
          "type": "code",
          "value": "class Person:\n    pass"
        },
        {
          "type": "output",
          "value": "# No error occurs"
        },
        {
          "type": "text",
          "value": "Explanation:\n. Here, \"pass\" tells Python that the class is intentionally empty, preventing an IndentationError.\nWhy We Use pass:\n• When a class is not completed yet.\n• When we plan to add code later.\n• When we need an empty class temporarily."
        },
        {
          "type": "text",
          "value": "Quick Revision:\n• pass: Placeholder\n• Purpose: Avoid Syntax Error\n• Use Case: Future Code"
        }
      ],
      "questions": [
        {
          "question": "What does the pass statement do?",
          "answer": "It is a null operation; nothing happens when it executes. It acts as a placeholder."
        },
        {
          "question": "Why do we use pass in a class?",
          "answer": "To avoid IndentationErrors when a class body is required by syntax but not yet implemented."
        },
        {
          "question": "Is pass a reserved keyword?",
          "answer": "Yes, it is a built-in keyword in Python."
        }
      ]
    },
    {
      "id": "what-is-an-object",
      "title": "What is an Object in Python?",
      "category": "OOP Basics",
      "definition": "An object is a real instance created from a class. It gets access to all variables (attributes) and functions (methods) defined inside that class.",
      "sections": [
        {
          "type": "text",
          "value": ". Core Concept:\n• Class → Blueprint (e.g., Student plan)\n• Object → Real instance created from the blueprint (e.g., s1)"
        },
        {
          "type": "text",
          "value": "Syntax:\nobject_name = ClassName()"
        },
        {
          "type": "code",
          "value": "class Student:\n    name = \"Vasudha\"\n    age = 23\n\ns1 = Student()\n\nprint(s1.name)\nprint(s1.age)"
        },
        {
          "type": "output",
          "value": "Vasudha\n23"
        },
        {
          "type": "text",
          "value": "Explanation:\n. Step 1 — Create Class: \"class Student:\" defines the class template.\n. Step 2 — Class Attributes: \"name\" and \"age\" are variables defined in the class.\n. Step 3 — Create Object: \"s1 = Student()\" creates a specific instance named s1.\n. Step 4 — Access Data: Access attributes using the format \"object_name.attribute\"."
        },
        {
          "type": "text",
          "value": "Quick Revision:\n• Object: Instance\n• Access: dot (.) notation\n• Creation: ClassName()"
        }
      ],
      "questions": [
        {
          "question": "What is an object?",
          "answer": "A real instance created from a class template."
        },
        {
          "question": "How do you create an object in Python?",
          "answer": "By calling the class name followed by parentheses, e.g., obj = ClassName()."
        },
        {
          "question": "Can multiple objects be created from one class?",
          "answer": "Yes, a single class can be used to create an unlimited number of unique object instances."
        }
      ]
    },
    {
      "id": "what-is-init-method",
      "title": "What is __init__() in Python?",
      "category": "OOP Basics",
      "definition": "A built-in method automatically executed when an object is created, acting as a constructor.",
      "sections": [
        {
          "type": "text",
          "value": "Purpose of __init__():\n• It initializes object data.\n• It assigns values to object properties.\n• It performs operations needed when the object is created."
        },
        {
          "type": "text",
          "value": "Syntax:\nclass ClassName:\n    def __init__(self, parameters):\n        # initialization code"
        },
        {
          "type": "code",
          "value": "class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\np1 = Person(\"Vasu\", 23)\np2 = Person(\"Sudha\", 25)\n\nprint(\"Name of p1:\", p1.name)\nprint(\"Age of p2:\", p2.age)"
        },
        {
          "type": "output",
          "value": "Name of p1: Vasu\nAge of p2: 25"
        },
        {
          "type": "text",
          "value": "How it Works:\n. When the object is created: p1 = Person(\"Vasu\", 23)\n. Python automatically calls: __init__(\"Vasu\", 23)\n. Values self.name = \"Vasu\" and self.age = 23 are stored inside the object."
        },
        {
          "type": "text",
          "value": "Quick Revision:\n• __init__: Constructor\n• Trigger: Object Creation\n• Purpose: Initialization"
        }
      ],
      "questions": [
        {
          "question": "What is the __init__ method?",
          "answer": "A special built-in method that is automatically called when an object is created from a class."
        },
        {
          "question": "Why is __init__ called a constructor?",
          "answer": "Because its primary role is to 'construct' or initialize the object's attributes with specific values."
        },
        {
          "question": "Is the 'self' parameter mandatory in __init__?",
          "answer": "Yes, it must always be the first parameter to represent the specific instance being created."
        }
      ]
    },
    {
      "id": "default-values-init",
      "title": "Default Values in __init__()",
      "category": "OOP Basics",
      "definition": "Allows parameters in the __init__() method to have pre-assigned values if no argument is provided.",
      "sections": [
        {
          "type": "text",
          "value": "You can set default values for parameters in the constructor. If a value is not passed when creating the object, Python automatically uses the default value."
        },
        {
          "type": "text",
          "value": "Syntax:\ndef __init__(self, name, age=18):"
        },
        {
          "type": "code",
          "value": "class Person:\n    def __init__(self, name, age=18):\n        self.name = name\n        self.age = age\n\np1 = Person(\"Vasu\")\np2 = Person(\"Vasudharini\", 23)\n\nprint(p1.name, p1.age)\nprint(p2.name, p2.age)"
        },
        {
          "type": "output",
          "value": "Vasu 18\nVasudharini 23"
        },
        {
          "type": "text",
          "value": "How it Works:\n. Object 1: p1 = Person(\"Vasu\"): Only name is passed; age uses default 18.\n. Object 2: p2 = Person(\"Vasudharini\", 23): age 23 overrides the default value."
        },
        {
          "type": "text",
          "value": "Quick Revision:\n• Optional Args: Default Values\n• Override: Passing Arg\n• Usage: Flexible Initialization"
        }
      ],
      "questions": [
        {
          "question": "What are default values in __init__?",
          "answer": "Pre-assigned values in the constructor that Python uses if the user doesn't provide an argument during instantiation."
        },
        {
          "question": "How do you override a default value?",
          "answer": "By simply passing a new value for that parameter when creating the object."
        },
        {
          "question": "Can multiple parameters have default values?",
          "answer": "Yes, you can define default values for as many parameters as you like in the __init__ method."
        }
      ]
    },
    {
      "id": "multiple-parameters-init",
      "title": "Multiple Parameters in __init__()",
      "category": "OOP Basics",
      "definition": "The __init__() method can take as many parameters as needed to initialize multiple object properties.",
      "sections": [
        {
          "type": "text",
          "value": "The __init__() method can take as many parameters as needed to initialize multiple object properties."
        },
        {
          "type": "text",
          "value": "Syntax:\ndef __init__(self, param1, param2, param3, . .):"
        },
        {
          "type": "code",
          "value": "class Person:\n    def __init__(self, name, age, city, country):\n        self.name = name\n        self.age = age\n        self.city = city\n        self.country = country\n\np1 = Person(\"Vasu\", 23, \"Vijayawada\", \"Andhra Pradesh\")\n\nprint(p1.name)\nprint(p1.age)\nprint(p1.city)\nprint(p1.country)"
        },
        {
          "type": "output",
          "value": "Vasu\n23\nVijayawada\nAndhra Pradesh"
        },
        {
          "type": "text",
          "value": "How it Works:\n. Values are passed during object creation and stored in the object: self.name = \"Vasu\", self.age = 23, etc."
        },
        {
          "type": "text",
          "value": "Quick Revision:\n• Many Params: Complex Initialization\n• self: Mapping values\n• Usage: Rich Objects"
        }
      ],
      "questions": [
        {
          "question": "How many parameters can __init__ have?",
          "answer": "It can take as many parameters as required to fully initialize the object's state."
        },
        {
          "question": "Do all parameters need to be passed during instantiation?",
          "answer": "Only if they do not have default values defined in the method signature."
        },
        {
          "question": "What is the role of self with multiple parameters?",
          "answer": "It acts as the anchor that maps each incoming argument to a unique attribute of that specific object."
        }
      ]
    },
    {
      "id": "why-self-parameter",
      "title": "Why do we use self in Python?",
      "category": "OOP Basics",
      "definition": "The self parameter is a reference to the current object (instance) of the class, used to access object variables and methods.",
      "sections": [
        {
          "type": "text",
          "value": "Without self, Python cannot identify which object's data should be used. It serves as the link that connects a method to a specific instance of a class."
        },
        {
          "type": "text",
          "value": "Syntax:\ndef method_name(self, parameters):"
        },
        {
          "type": "code",
          "value": "class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\n    def printname(self):\n        print(self.name)\n\n    def greet(self):\n        print(f\"Hello, my name is {self.name}. I'm {self.age} years old\")\n\np1 = Person(\"Vasu\", 20)\np2 = Person(\"Dharini\", 18)\n\np1.printname()\np2.greet()"
        },
        {
          "type": "output",
          "value": "Vasu\nHello, my name is Dharini. I'm 18 years old"
        },
        {
          "type": "text",
          "value": "How self Works:\n. Object Creation: Stores specific values for each instance.\n. Method Call: Python automatically sends the object as \"self\" to access the correct data."
        },
        {
          "type": "text",
          "value": "Quick Revision:\n• self: Current Instance\n• Role: Connecting method to data\n• Position: First parameter"
        }
      ],
      "questions": [
        {
          "question": "What does the self parameter represent?",
          "answer": "It refers to the current instance of the class, allowing access to its attributes and methods."
        },
        {
          "question": "Why is self needed as the first parameter?",
          "answer": "To allow methods to access and modify the specific object's data (attributes)."
        },
        {
          "question": "Can you use a name other than self?",
          "answer": "Yes, but 'self' is the universal standard convention in the Python community."
        }
      ]
    },
    {
      "id": "self-naming-convention",
      "title": "self Does Not Have to Be Named self",
      "category": "OOP Basics",
      "definition": "In Python, the first parameter of an instance method does not have to be named \"self\"; it can be any valid variable name.",
      "sections": [
        {
          "type": "text",
          "value": "While names like \"myobject\" or \"abc\" work, it must always be the first parameter. By convention, \"self\" is used by almost all Python programmers for consistency."
        },
        {
          "type": "text",
          "value": "Syntax:\ndef method_name(any_name, parameters):"
        },
        {
          "type": "code",
          "value": "class Person:\n    def __init__(myobject, name, age):\n        myobject.name = name\n        myobject.age = age\n\n    def greet(abc):\n        print(\"Hello, my name is \" + abc.name)\n\np1 = Person(\"Vasu\", 23)\np1.greet()"
        },
        {
          "type": "output",
          "value": "Hello, my name is Vasu"
        },
        {
          "type": "text",
          "value": "How it Works:\n. Python always treats the first parameter of an instance method as the instance itself, regardless of its name."
        },
        {
          "type": "text",
          "value": "Quick Revision:\n• Name: Flexible\n• Position: Mandatory 1st\n• Standard: Use \"self\""
        }
      ],
      "questions": [
        {
          "question": "Is self a keyword in Python?",
          "answer": "No, it is just a strongly recommended naming convention for the first parameter of instance methods."
        },
        {
          "question": "Can I use 'this' instead of 'self'?",
          "answer": "Yes, any valid variable name works, but using 'this' or other names is discouraged for readability."
        },
        {
          "question": "What is the best practice for naming the first parameter?",
          "answer": "Always use 'self' to ensure your code is readable and consistent with Python's PEP 8 guidelines."
        }
      ]
    },
    {
      "id": "class-vs-object-properties",
      "title": "Class Properties vs Object Properties in Python",
      "category": "OOP Basics",
      "definition": "Class properties are shared by all instances of a class, while object (instance) properties are unique to each individual object.",
      "sections": [
        {
          "type": "text",
          "value": "1. Class Property\n• Defined directly inside the class but outside methods.\n• Shared by all objects of the class.\n• Changes affect all objects.\n\n2. Object (Instance) Property\n• Defined inside __init__() using self.\n• Separate copy for each object.\n• Different objects can have different values."
        },
        {
          "type": "code",
          "value": "class Person:\n    lastname = \"\"   # class property\n\n    def __init__(self, name):\n        self.name = name   # object property\n\n    def show_name(self):\n        print(f\"Hello, I'm {self.name} {self.lastname}\")\n\np1 = Person(\"Vasu\")\np2 = Person(\"Vasudha\")\n\nPerson.lastname = \"Chintada\"\n\nprint(p1.lastname)\nprint(p2.lastname)\n\np1.show_name()"
        },
        {
          "type": "output",
          "value": "Chintada\nChintada\nHello, I'm Vasu Chintada"
        },
        {
          "type": "text",
          "value": "Step-by-Step Execution:\n\nStep 1: Class Created\nPython creates the class Person.\n\nStep 2: Class Property Created\nlastname = \"\" is created for the whole class.\n\nStep 3: Objects Created\np1 = Person(\"Vasu\")\np2 = Person(\"Vasudha\")\nConstructor runs: p1.name = \"Vasu\", p2.name = \"Vasudha\".\nBoth share lastname = \"\".\n\nStep 4: Change Class Property\nPerson.lastname = \"Chintada\" changes the shared property.\n\nStep 5: Printing\np1.lastname and p2.lastname both show \"Chintada\".\n\nStep 6: Method Call\np1.show_name() uses self.name (Vasu) and self.lastname (Chintada)."
        },
        {
          "type": "table",
          "headers": [
            "Feature",
            "Class Variable",
            "Instance Variable"
          ],
          "rows": [
            [
              "Definition",
              "Shared by all objects",
              "Separate for each object"
            ],
            [
              "Memory",
              "Memory efficient",
              "Unique data for objects"
            ],
            [
              "Access",
              "ClassName.variable",
              "self.variable"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Another Example:"
        },
        {
          "type": "code",
          "value": "class Student:\n    school = \"KL University\"   # class property\n\n    def __init__(self, name):\n        self.name = name       # object property\n\ns1 = Student(\"Ram\")\ns2 = Student(\"Sita\")\n\nprint(s1.school)\nprint(s2.school)\nprint(s1.name)\nprint(s2.name)"
        },
        {
          "type": "output",
          "value": "KL University\nKL University\nRam\nSita"
        },
        {
          "type": "text",
          "value": "Quick Revision:\n• Class Prop: Shared, defined in class\n• Instance Prop: Unique, defined in __init__\n• Person.lastname: Class Access"
        }
      ],
      "questions": [
        {
          "question": "What is a class property?",
          "answer": "A variable defined inside a class but outside methods, shared by all instances of that class."
        },
        {
          "question": "What is an instance property?",
          "answer": "A variable defined inside __init__ using self, which is unique to each individual object."
        },
        {
          "question": "How do you access a class property?",
          "answer": "Using the format ClassName.property or object.property."
        }
      ]
    },
    {
      "id": "calling-methods-self",
      "title": "Calling Methods with self",
      "category": "OOP Basics",
      "definition": "You can call one method from another method inside the same class using the \"self\" parameter.",
      "sections": [
        {
          "type": "text",
          "value": "Since \"self\" refers to the current object, using \"self.method_name()\" tells Python to call that specific method for the current instance."
        },
        {
          "type": "text",
          "value": "Syntax:\nself.method_name()"
        },
        {
          "type": "code",
          "value": "class Person:\n    def __init__(self, name):\n        self.name = name\n\n    def greet(self):\n        return \"Hello, \" + self.name\n\n    def welcome(self):\n        message = self.greet()\n        print(message + \"! Welcome to our website.\")\n\np1 = Person(\"Vasu\")\np1.welcome()"
        },
        {
          "type": "output",
          "value": "Hello, Vasu! Welcome to our website."
        },
        {
          "type": "text",
          "value": "How it Works:\nStep 1 — Object Creation: p1 = Person(\"Vasu\")\n• Stores self.name = \"Vasu\" inside object p1.\nStep 2 — Method Call: p1.welcome()\n• Python automatically sends p1 as self.\n• Inside welcome(), message = self.greet() calls p1.greet().\n• The greet() method returns \"Hello, Vasu\", and the final message is printed.\nImportant Points:\n• self can call other methods inside the same class.\n• It helps reuse code effectively.\n• One method can use the result of another method to simplify logic.\n• self.method_name() specifically calls the method for the current instance."
        },
        {
          "type": "text",
          "value": "Quick Revision:\n• Syntax: self.method_name()\n• Context: Current instance\n• Usage: Reusable methods"
        }
      ],
      "questions": [
        {
          "question": "How do you call one method from another?",
          "answer": "By using the 'self' parameter followed by the method name, e.g., self.method_name()."
        },
        {
          "question": "Does self refer to the current object?",
          "answer": "Yes, it ensures that when one method calls another, it operates on the same instance's data."
        },
        {
          "question": "Why call methods within a class?",
          "answer": "To promote code reuse, simplify complex logic, and organize code into smaller, manageable pieces."
        }
      ]
    },
    {
      "id": "python-variable-types",
      "title": "Types of Variables in Python Class",
      "category": "OOP Basics",
      "definition": "Python classes support three main types of variables: Instance variables for object data, Class variables for shared data, and Local variables for temporary method-level data.",
      "sections": [
        {
          "type": "text",
          "value": ". Core Concept:\nThere are mainly 3 types of variables in Python classes:\n. Instance Variable\n. Class Variable\n. Local Variable"
        },
        {
          "type": "text",
          "value": "1. Instance Variable\nInstance variables belong to objects. A separate copy is created for each object. They are defined using the \"self\" parameter and can have different values for different objects."
        },
        {
          "type": "code",
          "value": "class Student:\n    def __init__(self, name, marks):\n        self.name = name\n        self.marks = marks\n\n    def display(self):\n        print(\"Name:\", self.name)\n        print(\"Marks:\", self.marks)\n\ns1 = Student(\"Ravi\", 90)\ns2 = Student(\"Anu\", 95)\ns1.display()\ns2.display()"
        },
        {
          "type": "output",
          "value": "Name: Ravi\nMarks: 90\nName: Anu\nMarks: 95"
        },
        {
          "type": "text",
          "value": "2. Class Variable\nClass variables are shared by all objects. They are defined inside the class but outside methods. They remain the same for every object unless changed."
        },
        {
          "type": "code",
          "value": "class Employee:\n    company = \"Infosys\" # class variable\n\n    def __init__(self, name):\n        self.name = name\n\n    def display(self):\n        print(\"Name:\", self.name)\n        print(\"Company:\", Employee.company)\n\ne1 = Employee(\"Ravi\")\ne2 = Employee(\"Anu\")\ne1.display()\ne2.display()"
        },
        {
          "type": "output",
          "value": "Name: Ravi\nCompany: Infosys\nName: Anu\nCompany: Infosys"
        },
        {
          "type": "text",
          "value": "3. Local Variable\nLocal variables are created inside methods and used only within that method. They are destroyed after the method execution."
        },
        {
          "type": "code",
          "value": "class Test:\n    def show(self):\n        msg = \"Hello Python\" # local variable\n        print(msg)\n\nt1 = Test()\nt1.show()"
        },
        {
          "type": "output",
          "value": "Hello Python"
        },
        {
          "type": "table",
          "headers": [
            "Variable Type",
            "Defined In",
            "Accessed Using",
            "Scope",
            "Memory"
          ],
          "rows": [
            [
              "Instance Variable",
              "Inside constructor/method using self",
              "Object",
              "Object level",
              "Separate for each object"
            ],
            [
              "Class Variable",
              "Inside class outside methods",
              "Class name/Object",
              "Shared by all objects",
              "Allocated once"
            ],
            [
              "Local Variable",
              "Inside methods",
              "Method only",
              "Local scope",
              "Temporary"
            ]
          ]
        },
        {
          "id": "class-vs-object-properties",
          "title": "Class Properties vs Object Properties",
          "category": "OOP Basics",
          "definition": "Class properties are variables shared by all instances of a class, while object (instance) properties are unique to each specific instance.",
          "sections": [
            {
              "type": "text",
              "value": "1. Class Property\n. Core Concept:\nDefined directly inside the class but outside methods.\nShared by all objects of the class.\nChanges affect all objects.\n\nclass Person:\n    lastname = \"\"   # class property\nHere, lastname belongs to the class itself."
            },
            {
              "type": "text",
              "value": "2. Object (Instance) Property\n. Core Concept:\nDefined inside __init__() using self.\nSeparate copy for each object.\nDifferent objects can have different values.\n\ndef __init__(self, name):\n    self.name = name\nHere, name belongs to each object separately."
            },
            {
              "type": "text",
              "value": "Your Program Explained"
            },
            {
              "type": "code",
              "value": "class Person:\n    lastname = \"\" \n\n    def __init__(self, name):\n        self.name = name\n\n    def show_name(self):\n        print(f\"Hello, I'm {self.name} {self.lastname}\")\n\np1 = Person(\"Vasu\")\np2 = Person(\"Vasudha\")\n\nPerson.lastname = \"Ch\"\n\nprint(p1.lastname)\nprint(p2.lastname)\np1.show_name()"
            },
            {
              "type": "output",
              "value": "Ch\nCh\nHello, I'm Vasu Ch"
            },
            {
              "type": "text",
              "value": "Step-by-Step Execution\n. Step 1: Class Created\nclass Person: Python creates the class Person.\n. Step 2: Class Property Created\nlastname = \"\": A single shared variable is created for the whole class.\n. Step 3: Objects Created\np1 = Person(\"Vasu\")\np2 = Person(\"Vasudha\")\nConstructor runs for each object. self.name is unique to p1 and p2.\n. Step 4: Change Class Property\nPerson.lastname = \"Ch\": Shared class property updated; all objects see the change.\n. Step 5: Printing\np1.lastname and p2.lastname both output \"Ch\".\n. Step 6: Method Call\np1.show_name() uses both the unique self.name and shared self.lastname."
            },
            {
              "type": "text",
              "value": "Memory Diagram\n\nClass Person\n----------------\nlastname = \"Ch\"\n\nObject p1\n----------------\nname = \"Vasu\"\n\nObject p2\n----------------\nname = \"Vasudha\""
            },
            {
              "type": "table",
              "headers": [
                "Feature",
                "Class Variable",
                "Instance Variable"
              ],
              "rows": [
                [
                  "Definition",
                  "Shared by all objects",
                  "Separate for each object"
                ],
                [
                  "Memory",
                  "Memory efficient (allocated once)",
                  "Unique data for objects"
                ],
                [
                  "Access",
                  "Accessed using ClassName.variable",
                  "Accessed using self.variable"
                ]
              ]
            },
            {
              "type": "text",
              "value": "Another Example"
            },
            {
              "type": "code",
              "value": "class Student:\n    school = \"KL University\"   # class property\n\n    def __init__(self, name):\n        self.name = name       # object property\n\ns1 = Student(\"Ram\")\ns2 = Student(\"Sita\")\n\nprint(s1.school)\nprint(s2.school)\nprint(s1.name)\nprint(s2.name)"
            },
            {
              "type": "output",
              "value": "KL University\nKL University\nRam\nSita"
            },
            {
              "type": "text",
              "value": "Quick Revision:\n• Class Variable: school (Shared)\n• Instance Variable: name (Unique)\n• Access: ClassName.variable vs self.variable"
            }
          ],
          "questions": []
        },
        {
          "type": "text",
          "value": "Detailed Explanation\n. Instance Variable: Created when object is created, stored inside object memory, accessed using self.\n. Class Variable: Shared among all objects, common data for every object, memory allocated only once.\n. Local Variable: Exists only inside method, cannot be accessed outside, removed after execution."
        },
        {
          "type": "text",
          "value": "Combined Example"
        },
        {
          "type": "code",
          "value": "class Employee:\n    # class variable\n    company = \"TCS\"\n\n    def __init__(self, name, salary):\n        # instance variables\n        self.name = name\n        self.salary = salary\n\n    def display(self):\n        # local variable\n        bonus = 5000\n        print(\"Name:\", self.name)\n        print(\"Salary:\", self.salary)\n        print(\"Company:\", Employee.company)\n        print(\"Bonus:\", bonus)\n\ne1 = Employee(\"Ravi\", 50000)\ne1.display()"
        },
        {
          "type": "output",
          "value": "Name: Ravi\nSalary: 50000\nCompany: TCS\nBonus: 5000"
        },
        {
          "type": "text",
          "value": "Quick Revision:\n• self.variable → Instance Variable\n• class variable → Shared Variable\n• inside method only → Local Variable"
        }
      ],
      "questions": [
        {
          "question": "What is an instance variable?",
          "answer": "An instance variable belongs to a specific object and is defined using 'self'."
        },
        {
          "question": "What is a class variable?",
          "answer": "A class variable is defined inside the class but outside methods and is shared by all objects."
        },
        {
          "question": "What is a local variable?",
          "answer": "A local variable is created inside a method and exists only during that method's execution."
        },
        {
          "question": "Which variable is shared by all objects?",
          "answer": "The Class variable."
        },
        {
          "question": "Which variable uses the self keyword?",
          "answer": "The Instance variable."
        }
      ]
    },
    {
      "id": "python-class-methods",
      "title": "Python Class Methods",
      "category": "OOP Basics",
      "definition": "Methods are functions defined inside a class that describe the behavior of objects, categorized into Instance, Class, and Static methods.",
      "sections": [
        {
          "type": "text",
          "value": ". Core Concept:\nMethods are functions defined inside a class. They describe the behavior of objects."
        },
        {
          "type": "text",
          "value": "Types of Methods in Python Classes\n. Instance Method: Works with object data (self).\n. Class Method: Works with class variables (cls).\n. Static Method: Utility/helper methods without self or cls."
        },
        {
          "type": "text",
          "value": "1. Instance Method\nInstance methods work with object data (instance variables) and use the self parameter to access and modify object data."
        },
        {
          "type": "code",
          "value": "class Student:\n    def __init__(self, name, marks):\n        self.name = name\n        self.marks = marks\n\n    # instance method\n    def display(self):\n        print(\"Name:\", self.name)\n        print(\"Marks:\", self.marks)\n\ns1 = Student(\"Ravi\", 90)\ns1.display()"
        },
        {
          "type": "output",
          "value": "Name: Ravi\nMarks: 90"
        },
        {
          "type": "text",
          "value": "2. Class Method\nClass methods work with class variables using the @classmethod decorator and the cls parameter."
        },
        {
          "type": "code",
          "value": "class College:\n    college_name = \"ABC College\"\n\n    @classmethod\n    def show_college(cls):\n        print(\"College Name:\", cls.college_name)\n\n# calling class method\nCollege.show_college()"
        },
        {
          "type": "output",
          "value": "College Name: ABC College"
        },
        {
          "type": "text",
          "value": "3. Static Method\nStatic methods are utility or helper methods that do not use object or class data, using the @staticmethod decorator."
        },
        {
          "type": "code",
          "value": "class Math:\n    @staticmethod\n    def add(a, b):\n        print(\"Sum:\", a + b)\n\n# calling static method\nMath.add(10, 20)"
        },
        {
          "type": "output",
          "value": "Sum: 30"
        },
        {
          "type": "text",
          "value": "Complete Example of All Methods"
        },
        {
          "type": "code",
          "value": "class Bank:\n    bank_name = \"SBI\"\n\n    def __init__(self, customer, balance):\n        self.customer = customer\n        self.balance = balance\n\n    def show_balance(self):\n        print(self.customer, \"Balance:\", self.balance)\n\n    @classmethod\n    def change_bank(cls, name):\n        cls.bank_name = name\n\n    @staticmethod\n    def bank_rules():\n        print(\"Minimum balance should be 1000\")\n\nb1 = Bank(\"Ravi\", 5000)\nb1.show_balance()\nBank.change_bank(\"HDFC\")\nprint(\"New Bank Name:\", Bank.bank_name)\nBank.bank_rules()"
        },
        {
          "type": "output",
          "value": "Ravi Balance: 5000\nNew Bank Name: HDFC\nMinimum balance should be 1000"
        },
        {
          "type": "table",
          "headers": [
            "Method Type",
            "Works With",
            "Parameter Used",
            "Access Data",
            "Called Using",
            "Decorator"
          ],
          "rows": [
            [
              "Instance Method",
              "Object variables",
              "self",
              "Instance data",
              "Object",
              "No decorator"
            ],
            [
              "Class Method",
              "Class variables",
              "cls",
              "Class data",
              "Class/Object",
              "@classmethod"
            ],
            [
              "Static Method",
              "Utility functions",
              "None",
              "Cannot access directly",
              "Class",
              "@staticmethod"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Method Calling Syntax\n. Instance Method: obj.method()\n. Class Method: ClassName.method()\n. Static Method: ClassName.method()"
        },
        {
          "type": "text",
          "value": "Quick Revision:\n• self → Object data (Instance)\n• cls → Class data (Class)\n• staticmethod → Utility/helper function"
        }
      ],
      "questions": [
        {
          "question": "What is an instance method?",
          "answer": "An instance method works with object variables and uses 'self' as its first parameter."
        },
        {
          "question": "What is a class method?",
          "answer": "A class method works with class variables and uses 'cls' as its first parameter, marked with @classmethod."
        },
        {
          "question": "What is a static method?",
          "answer": "A static method is a utility method that doesn't use self or cls, marked with @staticmethod."
        },
        {
          "question": "Which decorator is used for class methods?",
          "answer": "The @classmethod decorator."
        },
        {
          "question": "Which decorator is used for static methods?",
          "answer": "The @staticmethod decorator."
        }
      ]
    },
    {
      "id": "four-pillars-of-oop",
      "title": "The Four Pillars of OOP",
      "category": "OOP Core",
      "definition": "The four fundamental principles of Object-Oriented Programming (OOP) define its structure and power.",
      "sections": [
        {
          "type": "text",
          "value": "These pillars help in building reusable, secure, scalable, and flexible applications."
        },
        {
          "type": "text",
          "value": "1. Inheritance\nInheritance allows one class to inherit properties and methods from another class. It helps in code reusability and reducing duplicate code."
        },
        {
          "type": "code",
          "value": "class Parent:\n    def show(self):\n        print(\"Parent Class\")\n\nclass Child(Parent):\n    pass\n\nc1 = Child()\nc1.show()"
        },
        {
          "type": "output",
          "value": "Parent Class"
        },
        {
          "type": "text",
          "value": "Key Point: Child class can access parent class properties and methods."
        },
        {
          "type": "text",
          "value": "2. Encapsulation\nEncapsulation means wrapping data (variables) and methods (functions) into a single unit (class). It also protects data from direct access."
        },
        {
          "type": "code",
          "value": "class Bank:\n    def __init__(self):\n        self.__balance = 5000\n\n    def show_balance(self):\n        print(self.__balance)\n\nb1 = Bank()\nb1.show_balance()"
        },
        {
          "type": "output",
          "value": "5000"
        },
        {
          "type": "text",
          "value": "Key Point: Sensitive data is protected using private variables."
        },
        {
          "type": "text",
          "value": "3. Abstraction\nAbstraction means hiding internal implementation details and showing only essential features."
        },
        {
          "type": "code",
          "value": "from abc import ABC, abstractmethod\n\nclass Vehicle(ABC):\n    @abstractmethod\n    def start(self):\n        pass\n\nclass Car(Vehicle):\n    def start(self):\n        print(\"Car Starts\")\n\nc1 = Car()\nc1.start()"
        },
        {
          "type": "output",
          "value": "Car Starts"
        },
        {
          "type": "text",
          "value": "Key Point: User only knows what the object does, not how it works internally."
        },
        {
          "type": "text",
          "value": "4. Polymorphism\nPolymorphism allows one method to behave differently for different objects."
        },
        {
          "type": "code",
          "value": "class Dog:\n    def sound(self):\n        print(\"Dog barks\")\n\nclass Cat:\n    def sound(self):\n        print(\"Cat meows\")\n\nd1 = Dog()\nc1 = Cat()\n\nd1.sound()\nc1.sound()"
        },
        {
          "type": "output",
          "value": "Dog barks\nCat meows"
        },
        {
          "type": "text",
          "value": "Key Point: Same method name behaves differently for different classes."
        },
        {
          "type": "table",
          "headers": [
            "Pillar",
            "Key Concept",
            "Main Benefit"
          ],
          "rows": [
            [
              "Inheritance",
              "Acquiring properties from parent",
              "Code Reusability"
            ],
            [
              "Encapsulation",
              "Wrapping data and methods",
              "Data Security"
            ],
            [
              "Abstraction",
              "Hiding implementation details",
              "Hide Complexity"
            ],
            [
              "Polymorphism",
              "Same name, different behavior",
              "Flexibility"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Conclusion:\nThe Four Pillars of OOP help developers create clean, secure, and scalable real-world software models efficiently."
        },
        {
          "type": "text",
          "value": "Quick Revision:\n• Inheritance: Reusability\n• Encapsulation: Security\n• Abstraction: Hiding Complexity\n• Polymorphism: Flexibility"
        }
      ],
      "questions": [
        {
          "question": "What are the four pillars of OOP?",
          "answer": "Inheritance, Encapsulation, Abstraction, and Polymorphism."
        },
        {
          "question": "Which pillar is used for data security?",
          "answer": "Encapsulation."
        },
        {
          "question": "What does polymorphism mean?",
          "answer": "One method behaving differently for different objects."
        }
      ]
    },
    {
      "id": "python-inheritance",
      "title": "Python Inheritance",
      "category": "OOP Core",
      "definition": "Inheritance allows us to define a class that inherits all the methods and properties from another class, promoting reusability and cleaner code.",
      "sections": [
        {
          "type": "text",
          "value": "Core Concept\nInheritance allows us to define a class that inherits all the methods and properties from another class. It helps in code reusability, reducing duplicate code, and easier maintenance."
        },
        {
          "type": "text",
          "value": "Types of Classes\n. Parent Class (Base Class)\nThe class being inherited from is called Parent Class or Base Class.\n. Child Class (Derived Class)\nThe class that inherits from another class is called Child Class or Derived Class."
        },
        {
          "type": "text",
          "value": "Reusability Concept\nWe can use existing code again instead of writing the same code repeatedly.\nThis saves time, effort, and memory.\nOOP provides reusability mainly through:\n• Inheritance\n• Classes\n• Methods"
        },
        {
          "type": "code",
          "value": "# Parent Class\nclass BankAccount:\n    def __init__(self, name, balance):\n        self.name = name\n        self.balance = balance\n\n    def show_balance(self):\n        print(\"Balance:\", self.balance)\n\n# Child Class\nclass SavingsAccount(BankAccount):\n    def deposit(self, amount):\n        self.balance += amount\n        print(amount, \"deposited\")\n\n    def withdraw(self, amount):\n        if amount <= self.balance:\n            self.balance -= amount\n            print(amount, \"withdrawn\")\n        else:\n            print(\"Insufficient Balance\")\n\n# Object Creation\nuser1 = SavingsAccount(\"Vasudha\", 5000)\nuser1.show_balance()\nuser1.deposit(2000)\nuser1.show_balance()\nuser1.withdraw(3000)\nuser1.show_balance()"
        },
        {
          "type": "output",
          "value": "Balance: 5000\n2000 deposited\nBalance: 7000\n3000 withdrawn\nBalance: 4000"
        },
        {
          "type": "text",
          "value": "Step-by-Step Explanation\n. Parent Class: class BankAccount: This is the parent class containing common properties and methods.\n. Constructor: Initializes account holder name and balance.\n. Parent Method: show_balance() displays account balance.\n. Child Class: class SavingsAccount(BankAccount): Inherits from BankAccount and can access its variables and methods.\n. Method Reusability: user1.show_balance() belongs to parent class, but child class reused it. This is code reusability through inheritance."
        },
        {
          "type": "text",
          "value": "Real-World Understanding\n• Bank Account → Parent Class\n• Savings Account → Child Class\n• Common banking features → Reused methods"
        },
        {
          "type": "text",
          "value": "Summary:\n• Inheritance allows one class to acquire properties and methods from another class.\n• The existing code can be reused without rewriting it, which saves time and reduces duplication.\n• The parent class contains common features, while the child class extends or reuses those features."
        },
        {
          "type": "text",
          "value": "Quick Revision:\n• Parent Class: Base Class\n• Child Class: Derived Class\n• Benefit: Reusability"
        }
      ],
      "questions": [
        {
          "question": "What is inheritance?",
          "answer": "Inheritance allows a class to inherit properties and methods from another class."
        },
        {
          "question": "What is a parent class?",
          "answer": "The class being inherited from."
        },
        {
          "question": "What is the main benefit of inheritance?",
          "answer": "Code reusability."
        }
      ]
    },
    {
      "id": "python-super-function",
      "title": "Python super() Function",
      "category": "OOP Core",
      "definition": "The super() function is used to call the parent class constructor or methods from the child class.",
      "sections": [
        {
          "type": "text",
          "value": "What is super()?\nsuper() is used to call the parent class constructor and methods from the child class."
        },
        {
          "type": "text",
          "value": "Syntax\nsuper().__init__(name, balance)\nThis line calls the constructor of the parent class."
        },
        {
          "type": "text",
          "value": "Why Use super()?\nUsing super():\n• Reuses parent class code\n• Avoids duplicate code\n• Improves readability\n• Makes maintenance easier"
        },
        {
          "type": "text",
          "value": "Advantages of super()\n• Code Reusability: Reuses parent constructor/methods\n• Avoids Duplicate Code: No need to rewrite parent code\n• Easy Maintenance: Changes in parent reflect automatically\n• Better Readability: Cleaner and professional code"
        },
        {
          "type": "code",
          "value": "# Parent Class\nclass BankAccount:\n    def __init__(self, name, balance):\n        self.name = name\n        self.balance = balance\n\n    def show_balance(self):\n        print(\"Balance:\", self.balance)\n\n# Child Class\nclass SavingsAccount(BankAccount):\n    def __init__(self, name, balance):\n        # Calling Parent Constructor\n        super().__init__(name, balance)\n\n    def deposit(self, amount):\n        self.balance += amount\n        print(amount, \"deposited\")\n\n    def withdraw(self, amount):\n        if amount <= self.balance:\n            self.balance -= amount\n            print(amount, \"withdrawn\")\n        else:\n            print(\"Insufficient Balance\")\n\n# Object Creation\nuser1 = SavingsAccount(\"Vasudha\", 5000)\nuser1.show_balance()\nuser1.deposit(2000)\nuser1.withdraw(1000)\nuser1.show_balance()"
        },
        {
          "type": "output",
          "value": "Balance: 5000\n2000 deposited\n1000 withdrawn\nBalance: 6000"
        },
        {
          "type": "text",
          "value": "Step-by-Step Explanation\n. Parent Class: class BankAccount: Contains common variables and methods.\n. Parent Constructor: Initializes name and balance.\n. Child Class: class SavingsAccount(BankAccount): Inherits from BankAccount.\n. Using super(): super().__init__(name, balance) calls the parent constructor automatically.\nWhy is This Useful?\nWithout super(), self.name = name and self.balance = balance must be rewritten in the child class, causing duplicate code."
        },
        {
          "type": "text",
          "value": "Real-World Understanding\nThink of BankAccount as general banking features and SavingsAccount as a specialized account. Instead of rewriting common code, the child class reuses parent functionality using super()."
        },
        {
          "type": "text",
          "value": "Summary:\n• super() is used to call the parent class constructor or methods from the child class.\n• It helps in code reusability, avoids duplicate code, improves readability, and makes maintenance easier."
        },
        {
          "type": "text",
          "value": "Quick Revision:\n• super(): Call Parent\n• __init__(): Constructor\n• Benefit: No duplication"
        }
      ],
      "questions": [
        {
          "question": "What is the purpose of super()?",
          "answer": "To call parent class constructors or methods from a child class."
        },
        {
          "question": "Does super() help in reducing code duplication?",
          "answer": "Yes, it reuses the parent class constructor code."
        },
        {
          "question": "Where should super() be used?",
          "answer": "Inside the child class constructor or methods."
        }
      ]
    },
    {
      "id": "encapsulation-data-hiding",
      "title": "Encapsulation and Data Hiding",
      "category": "OOP Core",
      "definition": "Encapsulation and data hiding provide security in OOP by wrapping data and methods into a single unit and restricting direct access to sensitive information.",
      "sections": [
        {
          "type": "text",
          "value": "How does OOP provide Security?\nObject-Oriented Programming (OOP) provides security through:\n• Encapsulation\n• Data Hiding\nSensitive data is kept private inside a class and can be accessed only through controlled methods. This prevents:\n• unauthorized access\n• accidental modification of data"
        },
        {
          "type": "text",
          "value": "What is Encapsulation?\n. Core Concept:\nEncapsulation is the process of wrapping data (variables) and methods (functions) together into a single unit called a class, and restricting direct access to sensitive data.\n. Core Concept:\nEncapsulation means combining variables and methods together inside a class."
        },
        {
          "type": "text",
          "value": "Benefits of Encapsulation:\n• Security\n• Data protection\n• Better code organization\n• Controlled access to data\n• Easy maintenance"
        },
        {
          "type": "code",
          "value": "class BankAccount:\n    def __init__(self, name, balance):\n        self.name = name\n        self.__balance = balance   # private variable\n\n    def deposit(self, amount):\n        self.__balance += amount\n        print(amount, \"deposited\")\n\n    def withdraw(self, amount):\n        if amount <= self.__balance:\n            self.__balance -= amount\n            print(amount, \"withdrawn\")\n        else:\n            print(\"Insufficient Balance\")\n\n    def show_balance(self):\n        print(\"Balance:\", self.__balance)\n\nacc = BankAccount(\"Ravi\", 5000)\nacc.deposit(2000)\nacc.withdraw(1000)\nacc.show_balance()"
        },
        {
          "type": "output",
          "value": "2000 deposited\n1000 withdrawn\nBalance: 6000"
        },
        {
          "type": "text",
          "value": "Explanation:\nHere:\n• __balance is private\n• It cannot be accessed directly\n• Access happens only through methods: deposit(), withdraw(), show_balance()\nThis provides security."
        },
        {
          "type": "text",
          "value": "What is Data Hiding?\n. Core Concept:\nData Hiding means hiding sensitive data from direct external access using private variables.\nPrivate variables are created using: __variable\n. Core Concept:\nSensitive data is hidden from outside the class."
        },
        {
          "type": "code",
          "value": "class Student:\n    def __init__(self):\n        self.__marks = 95   # private variable\n\n    def show_marks(self):\n        print(self.__marks)\n\ns1 = Student()\ns1.show_marks()\n# print(s1.__marks) ❌ Error"
        },
        {
          "type": "output",
          "value": "95"
        },
        {
          "type": "text",
          "value": "Explanation:\n__marks is private.\nSo: s1.__marks cannot be accessed directly outside the class."
        },
        {
          "type": "text",
          "value": "Why Use Encapsulation and Data Hiding?\n• Security: Protects important data\n• Prevents Accidental Changes: Data cannot be modified directly\n• Maintainability: Easier to manage code\n• Controlled Access: Access only through methods\n• Better Organization: Clean and modular code"
        },
        {
          "type": "text",
          "value": "Difference Between Encapsulation and Data Hiding:\nEncapsulation:\n• Wrapping data and methods together into one unit (Class)\n• Focuses on code structure and organization\n• Achieved using classes\n• Example: Class with attributes and methods\nData Hiding:\n• Hiding sensitive data from direct external access\n• Focuses on security and protection\n• Achieved using private variables (__variable)\n• Example: __salary, __balance"
        },
        {
          "type": "text",
          "value": "One-Line Difference:\n• Encapsulation → Wrapping data + methods together\n• Data Hiding → Restricting direct access to data"
        },
        {
          "type": "text",
          "value": "Summary:\n• OOP provides security using encapsulation and data hiding.\n• Encapsulation wraps data and methods together inside a class, while data hiding restricts direct access to sensitive data using private variables.\n• This protects data from unauthorized or accidental modification."
        },
        {
          "type": "text",
          "value": "Quick Revision:\n• Encapsulation: Wrapping\n• Data Hiding: Restricting Access\n• Private: __variable"
        }
      ],
      "questions": [
        {
          "question": "How does OOP provide security?",
          "answer": "Through encapsulation and data hiding."
        },
        {
          "question": "What is the difference between encapsulation and data hiding?",
          "answer": "Encapsulation is wrapping data+methods; Data hiding is restricting access."
        },
        {
          "question": "How do you create a private variable in Python?",
          "answer": "By using double underscores (e.g., __balance)."
        }
      ]
    },
    {
      "id": "protected-private-variables",
      "title": "Protected and Private Variables in Python",
      "category": "OOP Core",
      "definition": "In Python, protected and private variables are used to restrict access to class members, with single underscores indicating internal use and double underscores for strict data hiding.",
      "sections": [
        {
          "type": "text",
          "value": "Protected and Private Variables in Python\n. Key Point\n• _single: Protected Variable (Meant for internal use)\n• __double: Private Variable (Used for data hiding)"
        },
        {
          "type": "text",
          "value": "_single → Protected Variable\n. Core Concept:\n• Indicates a protected variable\n• Meant for internal use\n• Can still be accessed outside the class\n• Used as a naming convention"
        },
        {
          "type": "text",
          "value": "__double → Private Variable\n. Core Concept:\n• Indicates a private variable\n• Used for data hiding\n• Cannot be directly accessed outside the class"
        },
        {
          "type": "code",
          "value": "class Employee:\n    def __init__(self):\n        self._name = \"Ravi\"          # protected\n        self.__salary = 50000       # private\n\nemp = Employee()\n\nprint(emp._name)       # Accessible\n# print(emp.__salary)  ❌ Error"
        },
        {
          "type": "output",
          "value": "Ravi"
        },
        {
          "type": "text",
          "value": "Explanation:\n. Protected Variable: self._name\nStarts with single underscore _ . Indicates internal/protected use but is still accessible outside the class.\nExample: print(emp._name) works successfully.\n. Private Variable: self.__salary\nStarts with double underscore __ . Used for data hiding. Cannot be directly accessed outside the class.\nExample: print(emp.__salary) ❌ Gives error."
        },
        {
          "type": "text",
          "value": "Accessing Private Variable Using Method"
        },
        {
          "type": "code",
          "value": "class Employee:\n    def __init__(self):\n        self.__salary = 50000\n\n    def show_salary(self):\n        print(self.__salary)\n\nemp = Employee()\nemp.show_salary()"
        },
        {
          "type": "output",
          "value": "50000"
        },
        {
          "type": "text",
          "value": "Explanation:\nPrivate variables should be accessed using methods. This provides security, controlled access, and data protection."
        },
        {
          "type": "text",
          "value": "Quick Revision Table:\n• Public (name) → Yes (Accessible outside class)\n• Protected (_name) → Yes (Convention)\n• Private (__name) → ❌ No"
        },
        {
          "type": "text",
          "value": "Quick Revision:\n• _var: Protected\n• __var: Private\n• name: Public"
        }
      ],
      "questions": [
        {
          "question": "What is a protected variable?",
          "answer": "A variable meant for internal use, indicated by a single underscore (_)."
        },
        {
          "question": "Can you access a private variable directly outside the class?",
          "answer": "No, it will result in an error."
        },
        {
          "question": "How do you indicate a private variable in Python?",
          "answer": "Using double underscores (e.g., __salary)."
        }
      ]
    },
    {
      "id": "python-abstraction",
      "title": "Python Abstraction in OOP",
      "category": "OOP Core",
      "definition": "Abstraction involves hiding the complex internal implementation details of an object and exposing only the essential functionalities to the user.",
      "sections": [
        {
          "type": "text",
          "value": "What is Abstraction?\n. Core Concept:\nAbstraction means hiding internal implementation details and showing only the important features to the user.\nIt focuses on:\n• What an object does\n• Not how it does it"
        },
        {
          "type": "text",
          "value": "Real-Life Examples:\n. ATM Machine:\nYou can withdraw money or check balance using buttons, but you do not know the internal banking process or server communication.\n. Car:\nYou drive using the steering and pedals, but you do not know the exact engine mechanism or fuel system details."
        },
        {
          "type": "text",
          "value": "Why Use Abstraction?\n• Hides Complex Code: User sees only essential features\n• Improves Security: Internal details remain hidden\n• Reduces Complexity: Easier to use programs\n• Easy Maintenance: Internal changes do not affect users\n• Provides Essential Features: Clean interface"
        },
        {
          "type": "text",
          "value": "How to Achieve Abstraction in Python?\nPython provides abstraction using:\n• Abstract Classes\n• Abstract Methods\nRequired Import:\nfrom abc import ABC, abstractmethod"
        },
        {
          "type": "text",
          "value": ". Core Concept:\n• ABC: Abstract Base Class\n• @abstractmethod: Abstract Method"
        },
        {
          "type": "code",
          "value": "from abc import ABC, abstractmethod\n\n# Abstract Class\nclass Animal(ABC):\n    @abstractmethod\n    def sound(self):\n        pass\n\n# Child Classes\nclass Dog(Animal):\n    def sound(self):\n        print(\"Dog barks\")\n\nclass Cat(Animal):\n    def sound(self):\n        print(\"Cat meows\")\n\nclass Cow(Animal):\n    def sound(self):\n        print(\"Cow moos\")\n\n# Objects\nd = Dog()\nc = Cat()\nw = Cow()\n\nd.sound()\nc.sound()\nw.sound()"
        },
        {
          "type": "output",
          "value": "Dog barks\nCat meows\nCow moos"
        },
        {
          "type": "text",
          "value": "Step-by-Step Explanation:\n. Abstract Class: class Animal(ABC): This is a blueprint and cannot be instantiated.\n. Abstract Method: @abstractmethod: Declared but not implemented.\n. Child Classes: Must implement the abstract method \"sound()\".\nImportant Point:\nAbstract class only defines the structure. Child classes must provide the implementation."
        },
        {
          "type": "text",
          "value": "Real Understanding:\n. What is Abstraction?\nHiding internal details and showing only essentials.\n. How is it achieved?\nUsing the \"abc\" module with abstract classes and methods.\n. What is an Abstract Class?\nA class containing one or more abstract methods.\n. What is an Abstract Method?\nA method declared in the parent but implemented in the child class."
        },
        {
          "type": "text",
          "value": "Quick Revision:\n• Abstraction → Hiding implementation details\n• Abstract Class → Blueprint class\n• Abstract Method → Method without implementation\n• Child Class → Implements abstract method"
        },
        {
          "type": "text",
          "value": "Quick Revision:\n• ABC: Abstract Base Class\n• @abstractmethod: Must be implemented by child\n• Implementation: Hidden"
        }
      ],
      "questions": [
        {
          "question": "What is abstraction?",
          "answer": "Hiding internal implementation and showing only essential features."
        },
        {
          "question": "How do you achieve abstraction in Python?",
          "answer": "Using the 'abc' module and @abstractmethod decorator."
        },
        {
          "question": "Can you create an object of an abstract class?",
          "answer": "No, abstract classes cannot be instantiated."
        }
      ]
    },
    {
      "id": "python-polymorphism",
      "title": "Python Polymorphism",
      "category": "OOP Core",
      "definition": "Polymorphism allows objects of different classes to be treated as objects of a common superclass, or more generally, it allows a single interface to represent different underlying forms.",
      "sections": [
        {
          "type": "text",
          "value": "What is Polymorphism?\nThe word \"polymorphism\" means: many forms. In Python, polymorphism means the same method, function, or operator can behave differently for different objects or classes."
        },
        {
          "type": "text",
          "value": "Why Use Polymorphism?\nPolymorphism helps to:\n• Increase flexibility\n• Reduce code complexity\n• Improve code reusability\n• Support dynamic behavior\n• Make code cleaner"
        },
        {
          "type": "text",
          "value": "Types of Polymorphism in Python:\n1️⃣ Method Overriding\n2️⃣ Method Overloading\n3️⃣ Operator Overloading\n4️⃣ Duck Typing"
        },
        {
          "type": "text",
          "value": "1️⃣ Method Overriding\n. Core Concept:\nWhen a child class changes the method of the parent class."
        },
        {
          "type": "code",
          "value": "class Animal:\n    def sound(self):\n        print(\"Animals make sound\")\n\nclass Dog(Animal):\n    def sound(self):\n        print(\"Dog barks\")\n\nobj = Dog()\nobj.sound()"
        },
        {
          "type": "output",
          "value": "Dog barks"
        },
        {
          "type": "text",
          "value": "Explanation:\n. Animal class has sound() method\n. Dog inherits Animal\n. Dog overrides the sound() method\n. Child class method executes instead of parent method"
        },
        {
          "type": "text",
          "value": "2️⃣ Method Overloading\n. Core Concept:\nPython does not support true method overloading like Java. We achieve similar behavior using: default arguments."
        },
        {
          "type": "code",
          "value": "class Calculator:\n    def add(self, a=0, b=0, c=0):\n        print(\"Sum =\", a + b + c)\n\nobj = Calculator()\nobj.add(10, 20)\nobj.add(10, 20, 30)"
        },
        {
          "type": "output",
          "value": "Sum = 30\nSum = 60"
        },
        {
          "type": "text",
          "value": "Explanation:\nSame method works with different number of arguments. This is called method overloading behavior."
        },
        {
          "type": "text",
          "value": "3️⃣ Operator Overloading\n. Core Concept:\nOperators can behave differently for different objects."
        },
        {
          "type": "code",
          "value": "print(10 + 20)\nprint(\"Hello \" + \"Python\")"
        },
        {
          "type": "output",
          "value": "30\nHello Python"
        },
        {
          "type": "text",
          "value": "Custom Operator Overloading:\n__add__() is a magic method. It changes the behavior of + operator for objects."
        },
        {
          "type": "code",
          "value": "class Book:\n    def __init__(self, pages):\n        self.pages = pages\n\n    def __add__(self, other):\n        return self.pages + other.pages\n\nb1 = Book(100)\nb2 = Book(200)\nprint(b1 + b2)"
        },
        {
          "type": "output",
          "value": "300"
        },
        {
          "type": "text",
          "value": "4️⃣ Duck Typing\n. Core Concept:\n\"If it looks like a duck and behaves like a duck, it is a duck.\" Python checks: behavior and methods, not object type."
        },
        {
          "type": "code",
          "value": "class Cat:\n    def sound(self):\n        print(\"Cat meows\")\n\nclass Bird:\n    def sound(self):\n        print(\"Bird chirps\")\n\ndef make_sound(obj):\n    obj.sound()\n\nc = Cat()\nb = Bird()\nmake_sound(c)\nmake_sound(b)"
        },
        {
          "type": "output",
          "value": "Cat meows\nBird chirps"
        },
        {
          "type": "table",
          "headers": [
            "Method Overloading",
            "Method Overriding"
          ],
          "rows": [
            [
              "Same method name with different arguments",
              "Same method in parent and child"
            ],
            [
              "Achieved using default arguments",
              "Achieved using inheritance"
            ],
            [
              "Happens inside same class",
              "Happens between parent and child class"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Quick Revision:\n• Overriding: Child changes Parent\n• Overloading: Multiple args\n• Duck Typing: Behavior over Type"
        }
      ],
      "questions": [
        {
          "question": "What is Polymorphism?",
          "answer": "Polymorphism means 'many forms'. In Python, it allows the same method, function, or operator to behave differently for different objects or classes."
        },
        {
          "question": "What are the four types of polymorphism in Python?",
          "answer": "Method Overriding, Method Overloading (via default arguments), Operator Overloading, and Duck Typing."
        },
        {
          "question": "What is Method Overriding?",
          "answer": "Method overriding occurs when a child class redefines a method that exists in its parent class."
        },
        {
          "question": "Does Python support true Method Overloading?",
          "answer": "No, but it can be achieved using default arguments in a single method."
        },
        {
          "question": "What is Operator Overloading?",
          "answer": "It means changing the default behavior of operators (like +) for custom objects using magic methods like __add__()."
        },
        {
          "question": "What is Duck Typing?",
          "answer": "A concept where an object's suitability is determined by its methods and behavior rather than its class type."
        }
      ]
    },
    {
      "id": "python-function-polymorphism",
      "title": "Function Polymorphism in Python",
      "category": "OOP Core",
      "definition": "Function Polymorphism means the same function works with different data types or objects. Python built-in functions can behave differently depending on the object passed.",
      "sections": [
        {
          "type": "text",
          "value": "What is Function Polymorphism?\nFunction Polymorphism means the same function works with different data types or objects.\nPython built-in functions can behave differently depending on the object passed."
        },
        {
          "type": "text",
          "value": "One-Line. Core Concept:\nA single function can work with multiple object types."
        },
        {
          "type": "text",
          "value": "Example 1 — len() Function"
        },
        {
          "type": "code",
          "value": "print(len(\"Python\"))\n\nprint(len([10, 20, 30, 40]))\n\nprint(len((1, 2, 3)))"
        },
        {
          "type": "output",
          "value": "6\n4\n3"
        },
        {
          "type": "text",
          "value": "Explanation:\nlen() works with:\n• String\n• List\n• Tuple\nSame function gives different behavior depending on the object."
        },
        {
          "type": "text",
          "value": "String Example"
        },
        {
          "type": "code",
          "value": "x = \"Hello World!\"\nprint(len(x))"
        },
        {
          "type": "output",
          "value": "12"
        },
        {
          "type": "text",
          "value": "len() returns number of characters."
        },
        {
          "type": "text",
          "value": "Tuple Example"
        },
        {
          "type": "code",
          "value": "mytuple = (\"apple\", \"banana\", \"cherry\")\nprint(len(mytuple))"
        },
        {
          "type": "output",
          "value": "3"
        },
        {
          "type": "text",
          "value": "len() returns number of tuple items."
        },
        {
          "type": "text",
          "value": "Dictionary Example"
        },
        {
          "type": "code",
          "value": "thisdict = {\n  \"brand\": \"Ford\",\n  \"model\": \"Mustang\",\n  \"year\": 1964\n}\n\nprint(len(thisdict))"
        },
        {
          "type": "output",
          "value": "3"
        },
        {
          "type": "text",
          "value": "len() returns number of key-value pairs."
        },
        {
          "type": "text",
          "value": "Example 2 — print() Function"
        },
        {
          "type": "code",
          "value": "print(\"Hello\")\n\nprint(100)\n\nprint([1, 2, 3])"
        },
        {
          "type": "output",
          "value": "Hello\n100\n[1, 2, 3]"
        },
        {
          "type": "text",
          "value": "Explanation:\nprint() can print:\n• string\n• integer\n• list\nSame function works with different data types."
        },
        {
          "type": "text",
          "value": "Example 3 — User-Defined Function Polymorphism"
        },
        {
          "type": "code",
          "value": "class Cat:\n    def sound(self):\n        print(\"Cat Meows\")\n\nclass Dog:\n    def sound(self):\n        print(\"Dog Barks\")\n\ndef animal_sound(animal):\n    animal.sound()\n\nc = Cat()\nd = Dog()\n\nanimal_sound(c)\nanimal_sound(d)"
        },
        {
          "type": "output",
          "value": "Cat Meows\nDog Barks"
        },
        {
          "type": "text",
          "value": "Explanation:\nSame function animal_sound() works with different objects.\nThis is function polymorphism."
        },
        {
          "type": "text",
          "value": "Example 4 — Bank Example"
        },
        {
          "type": "code",
          "value": "class SavingsAccount:\n    def interest(self):\n        print(\"Savings Interest Applied\")\n\nclass CurrentAccount:\n    def interest(self):\n        print(\"Current Account Interest Applied\")\n\ndef bank_process(account):\n    account.interest()\n\ns = SavingsAccount()\nc = CurrentAccount()\n\nbank_process(s)\nbank_process(c)"
        },
        {
          "type": "output",
          "value": "Savings Interest Applied\nCurrent Account Interest Applied"
        },
        {
          "type": "text",
          "value": "Explanation:\nSame function bank_process() works with different account objects."
        },
        {
          "type": "text",
          "value": "Important Point:\nPython does not check:\n• object type\n• class name\nIt only checks whether the required method exists.\nThis concept is related to: Duck Typing"
        },
        {
          "type": "text",
          "value": "Advantages of Function Polymorphism:\n• Flexible Code: Same function works with many objects\n• Reusable Functions: No need to write separate functions\n• Less Code Duplication: Cleaner code\n• Easy Maintenance: Simple updates"
        },
        {
          "type": "text",
          "value": "Quick Revision:\n• len(): String, List, Tuple, Dictionary\n• print(): All data types\n• User-defined Function: Different objects"
        }
      ],
      "questions": [
        {
          "question": "What is Function Polymorphism?",
          "answer": "Function polymorphism means the same function works with different types of objects or data."
        },
        {
          "question": "Give examples of function polymorphism.",
          "answer": "Examples: len(), print(), and User-defined functions."
        },
        {
          "question": "Which concept is related to function polymorphism?",
          "answer": "Duck Typing."
        }
      ]
    },
    {
      "id": "student-class-example",
      "title": "Student Class Example",
      "category": "OOP Practice",
      "definition": "A simple Python OOP example demonstrating how to use a constructor, instance variables, object creation, and method calling.",
      "sections": [
        {
          "type": "text",
          "value": "Step-by-Step Question\n. Create a class called Student\n. Add an __init__ method with parameters name and age\n. Store them using self\n. Add a method called display\n. Print the student's name and age\n. Create an object s1\n. Call the display() method"
        },
        {
          "type": "code",
          "value": "class Student:\n    # Constructor\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\n    # Method\n    def display(self):\n        print(\"Name:\", self.name)\n        print(\"Age:\", self.age)\n\n# Creating object\ns1 = Student(\"Vasudha\", 23)\n\n# Calling method\ns1.display()"
        },
        {
          "type": "output",
          "value": "Name: Vasudha\nAge: 23"
        },
        {
          "type": "text",
          "value": ". Core Concept:\nclass Student: Creates a class named Student.\n. Core Concept:\ndef __init__(self, name, age): A constructor that runs automatically when an object is created.\n. Core Concept:\nself.name = name: Stores object data inside the class.\n. Core Concept:\ns1.display(): Calls the method using the object instance."
        },
        {
          "type": "text",
          "value": "Quick Revision:\n• class: Blueprint\n• self: Instance reference\n• __init__: Auto-run constructor"
        }
      ],
      "questions": [
        {
          "question": "What does the display method do?",
          "answer": "It prints the student details (name and age) stored in the instance variables."
        },
        {
          "question": "Why use self.name instead of just name?",
          "answer": "To ensure the value is stored as an attribute of the specific object instance rather than a local variable."
        }
      ]
    },
    {
      "id": "dog-class-example",
      "title": "Dog Class Example",
      "category": "OOP Practice",
      "definition": "A simple Python OOP example demonstrating how to create a class, constructor, object, and method.",
      "sections": [
        {
          "type": "text",
          "value": "Step-by-Step Question\n. Create a class called Dog\n. Add an __init__ method with parameters name and age\n. Store them as properties using self\n. Add a method called bark\n. Print the dog's name followed by \" says Woof!\"\n. Create an object d1\n. Call the bark() method"
        },
        {
          "type": "code",
          "value": "class Dog:\n    # Constructor\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\n    # Method\n    def bark(self):\n        print(self.name + \" says Woof!\")\n\n# Create object\nd1 = Dog(\"Buddy\", 3)\n\n# Call method\nd1.bark()"
        },
        {
          "type": "output",
          "value": "Buddy says Woof!"
        },
        {
          "type": "text",
          "value": ". Core Concept:\nDog Class: A blueprint for dog objects.\nbark() method: Defines a specific behavior for the dog instance."
        },
        {
          "type": "text",
          "value": "Quick Revision:\n• Instance: d1\n• Method: bark()\n• Property: name"
        }
      ],
      "questions": [
        {
          "question": "How is the bark method called?",
          "answer": "Using the object name followed by a dot and the method name, e.g., d1.bark()."
        },
        {
          "question": "What is 'Buddy' in this code?",
          "answer": "It is the string literal passed as an argument to the constructor to initialize the dog's name."
        }
      ]
    },
    {
      "id": "person-class-example",
      "title": "Person Class Example",
      "category": "OOP Practice",
      "definition": "A simple Python OOP example demonstrating class creation, constructor, object creation, and method calling.",
      "sections": [
        {
          "type": "text",
          "value": "Step-by-Step Question\n. Create a class called Person\n. Add an __init__ method that takes name and age\n. Add a method called greet\n. Print \"Hello, my name is\" followed by the name\n. Create an object p1\n. Call the greet() method"
        },
        {
          "type": "code",
          "value": "class Person:\n    # Constructor\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\n    # Method\n    def greet(self):\n        print(\"Hello, my name is\", self.name)\n\n# Create object\np1 = Person(\"Vasu\", 23)\n\n# Call method\np1.greet()"
        },
        {
          "type": "output",
          "value": "Hello, my name is Vasu"
        },
        {
          "type": "text",
          "value": ". Core Concept:\nPerson Class: Represents a person with name and age.\ngreet() method: Uses self.name to provide a personalized greeting."
        },
        {
          "type": "text",
          "value": "Quick Revision:\n• Class Name: Person\n• Constructor: __init__\n• Greeting: greet()"
        }
      ],
      "questions": [
        {
          "question": "Can we create another object p2?",
          "answer": "Yes, you can create multiple objects like p2 = Person('Dharini', 20)."
        },
        {
          "question": "What is the first parameter of greet()?",
          "answer": "It is 'self', which refers to the current Person object instance."
        }
      ]
    },
    {
      "id": "car-class-example",
      "title": "Car Class Example",
      "category": "OOP Practice",
      "definition": "A simple Python OOP example demonstrating how to create a class, constructor, object, and method.",
      "sections": [
        {
          "type": "text",
          "value": "Step-by-Step Question\n. Create a class called Car\n. Add an __init__ method with a brand parameter\n. Store the brand as a property using self\n. Add a method called show\n. Print the brand name\n. Create an object c1 with brand \"Ford\"\n. Call the show() method"
        },
        {
          "type": "code",
          "value": "class Car:\n    # Constructor\n    def __init__(self, brand):\n        self.brand = brand\n\n    # Method\n    def show(self):\n        print(self.brand)\n\n# Create object\nc1 = Car(\"Ford\")\n\n# Call method\nc1.show()"
        },
        {
          "type": "output",
          "value": "Ford"
        },
        {
          "type": "text",
          "value": ". Core Concept:\nCar Class: A simple class with one attribute.\nshow() method: Accesses and prints the brand attribute."
        },
        {
          "type": "text",
          "value": "Quick Revision:\n• Object: c1\n• Property: brand\n• Action: show()"
        }
      ],
      "questions": [
        {
          "question": "What happens if you don't pass 'Ford'?",
          "answer": "Python raises a TypeError because 'brand' is a required parameter for the constructor."
        },
        {
          "question": "Is 'show' a built-in function?",
          "answer": "No, it is a custom method defined inside the Car class."
        }
      ]
    },
    {
      "id": "python-libraries",
      "title": "Essential Python Libraries",
      "category": "Python Libraries",
      "definition": "Python has a huge ecosystem of libraries, and the 'best' ones depend on what you want to do. Here’s a clear breakdown of the most important and widely used Python libraries by category:",
      "sections": [
        {
          "type": "text",
          "value": "🧠 Data Science & Machine Learning\n\n• NumPy – Fast array operations, linear algebra\n• Pandas – Data manipulation with DataFrames\n• Matplotlib – Basic data visualization\n• Seaborn – Advanced, prettier charts\n• Scikit-learn – ML models (regression, classification)\n• TensorFlow – Neural networks (Google)\n• PyTorch – Popular for research and AI"
        },
        {
          "type": "text",
          "value": "🧮 Core Data Handling\n\n1. NumPy\nPurpose: Foundation for numerical computing in Python.\nFeatures:\n• Fast array operations\n• Matrix calculations\n• Mathematical functions\n• Random number generation\n• Linear algebra support"
        },
        {
          "type": "code",
          "value": "import numpy as np\narr = np.array([1, 2, 3, 4])\nprint(arr)\nprint(arr * 2)\nprint(np.mean(arr))"
        },
        {
          "type": "output",
          "value": "[1 2 3 4]\n[2 4 6 8]\n2.5"
        },
        {
          "type": "text",
          "value": "2. pandas\nPurpose: Most important library for data analysis and manipulation.\n\nMain Structures:\n• Series → 1D data\n• DataFrame → Table-like data\n\nFeatures:\n• Data cleaning\n• Filtering\n• Grouping\n• Merging\n• Reading files: CSV, Excel, JSON, SQL"
        },
        {
          "type": "code",
          "value": "import pandas as pd\ndata = {\n    \"Name\": [\"Ram\", \"Sita\", \"Krishna\"],\n    \"Marks\": [85, 90, 78]\n}\ndf = pd.DataFrame(data)\nprint(df)"
        },
        {
          "type": "output",
          "value": "      Name  Marks\n0      Ram     85\n1     Sita     90\n2  Krishna     78"
        },
        {
          "type": "text",
          "value": "📊 Data Visualization Libraries\n\n3. Matplotlib\nPurpose: Basic plotting library.\nUsed For:\n• Line charts\n• Bar charts\n• Scatter plots\n• Histograms"
        },
        {
          "type": "code",
          "value": "import matplotlib.pyplot as plt\nx = [1, 2, 3, 4]\ny = [10, 20, 25, 30]\nplt.plot(x, y)\nplt.title(\"Line Chart\")\nplt.show()"
        },
        {
          "type": "text",
          "value": "4. Seaborn\nPurpose: Beautiful statistical visualizations.\nFeatures:\n• Built on Matplotlib\n• Attractive plots\n• Easy statistical charts"
        },
        {
          "type": "code",
          "value": "import seaborn as sns\nimport matplotlib.pyplot as plt\ntips = sns.load_dataset(\"tips\")\nsns.scatterplot(x=\"total_bill\", y=\"tip\", data=tips)\nplt.show()"
        },
        {
          "type": "text",
          "value": "5. Plotly\nPurpose: Interactive charts and dashboards.\nFeatures:\n• Zooming\n• Hover effects\n• Interactive dashboards"
        },
        {
          "type": "code",
          "value": "import plotly.express as px\ndf = px.data.iris()\nfig = px.scatter(df, x=\"sepal_width\", y=\"sepal_length\")\nfig.show()"
        },
        {
          "type": "text",
          "value": "📈 Statistics & Scientific Computing\n\n6. SciPy\nPurpose: Advanced scientific computations.\nFeatures:\n• Optimization\n• Probability\n• Integration\n• Statistics"
        },
        {
          "type": "code",
          "value": "from scipy import stats\ndata = [10, 20, 30, 40, 50]\n# Note: Use numpy for mean if scipy.stats.mean is unavailable in older versions\nprint(stats.describe(data)) "
        },
        {
          "type": "text",
          "value": "7. statsmodels\nPurpose: Statistical analysis and regression.\nFeatures:\n• Linear regression\n• Hypothesis testing\n• Time series analysis"
        },
        {
          "type": "code",
          "value": "import statsmodels.api as sm\nimport numpy as np\nx = np.array([1,2,3,4,5])\ny = np.array([2,4,5,4,5])\nx = sm.add_constant(x)\nmodel = sm.OLS(y, x).fit()\nprint(model.summary())"
        },
        {
          "type": "text",
          "value": "🤖 Machine Learning Libraries\n\n8. scikit-learn\nPurpose: Machine learning algorithms.\nFeatures:\n• Classification\n• Regression\n• Clustering\n• Model evaluation"
        },
        {
          "type": "code",
          "value": "from sklearn.linear_model import LinearRegression\nimport numpy as np\nx = np.array([[1], [2], [3], [4]])\ny = np.array([2, 4, 6, 8])\nmodel = LinearRegression()\nmodel.fit(x, y)\nprint(model.predict([[5]]))"
        },
        {
          "type": "output",
          "value": "[10.]"
        },
        {
          "type": "text",
          "value": "9. TensorFlow and PyTorch\nPurpose: Deep learning and neural networks.\nUsed For:\n• AI applications\n• Image recognition\n• NLP\n• Neural networks"
        },
        {
          "type": "text",
          "value": "🔢 Symbolic & Scientific Mathematics\n\n10. SymPy\nPurpose: Algebra and symbolic mathematics."
        },
        {
          "type": "code",
          "value": "from sympy import symbols, expand\nx = symbols('x')\expr = (x + 1) ** 2\nprint(expand(expr))"
        },
        {
          "type": "output",
          "value": "x**2 + 2*x + 1"
        },
        {
          "type": "text",
          "value": "🧰 Useful Supporting Tools\n\n11. Jupyter Notebook\nPurpose: Interactive coding environment.\nFeatures:\n• Write code\n• Visualize data\n• Add notes/documentation\n• Great for Data Science & ML"
        },
        {
          "type": "text",
          "value": "📚 Recommended Learning Order\n\nIf you want to Learn Data Science, learn in this order:\n1. Python Basics\n2. NumPy\n3. pandas\n4. Matplotlib\n5. Seaborn\n6. SQL\n7. Statistics Basics\n8. SciPy & statsmodels\n9. scikit-learn\n10. TensorFlow / PyTorch"
        },
        {
          "type": "table",
          "headers": ["Library", "Importance"],
          "rows": [
            ["NumPy", "Arrays & Math"],
            ["pandas", "Data Analysis"],
            ["Matplotlib", "Visualization"],
            ["Seaborn", "Statistical Charts"],
            ["scikit-learn", "Machine Learning"]
          ]
        }
      ],
      "questions": [
        {
          "question": "Which library is the most important for data analysis and manipulation?",
          "answer": "pandas"
        },
        {
          "question": "Which library is used for interactive dashboards and charts?",
          "answer": "Plotly"
        }
      ]
    },
  ],
  "mysql": [
    {
      "id": "mysql-intro-basics",
      "title": "MySQL Introduction & Basics",
      "category": "Basic",
      "definition": "MySQL is an open-source relational database management system (RDBMS) used to store, organize, and retrieve structured data efficiently.",
      "sections": [
        {
          "type": "text",
          "value": "🔑 Key Features:\n• Uses SQL (Structured Query Language) for querying data\n• Stores data in tables (rows and columns)\n• Supports relationships between tables\n• Fast, reliable, and widely supported\n• Works well with languages like PHP, Python, Java, and Node.js\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "📦 What MySQL is Used For:\n• Websites and web apps (e.g., user accounts, posts, transactions)\n• Data warehousing and analytics\n• E-commerce platforms\n• Content management systems like WordPress\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "⚙️ Who Develops It?\nMySQL is owned by Oracle Corporation, though it started as an independent open-source project.\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "🔄 MySQL vs Others:\n• MySQL – fast, easy, widely used\n• PostgreSQL – more advanced features, stricter standards\n• SQLite – lightweight, file-based\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "Database & MySQL Basics:\n\n1. What is Database?\nA Database is an organized collection of data that is stored electronically and can be easily accessed, managed, and updated. A database helps store information in a structured format.\n\nExamples:\n• Student records\n• Bank account details\n• Employee information\n• Online shopping orders\n• Hospital patient records\n\n------------------------------------------------"
        },
        {
          "type": "table",
          "headers": ["ID", "Name", "Course"],
          "rows": [
            ["1", "Ravi", "CSE"],
            ["2", "Priya", "ECE"]
          ]
        },
        {
          "type": "text",
          "value": "2. DBMS vs RDBMS:\n\n• DBMS: A software used to store and manage data as files (no relationships).\n• RDBMS: An advanced DBMS where data is stored in related tables using rows and columns.\n\n------------------------------------------------"
        },
        {
          "type": "table",
          "headers": ["Feature", "DBMS", "RDBMS"],
          "rows": [
            ["Full Form", "Database Management System", "Relational Database Management System"],
            ["Data Storage", "Stores data as files", "Stores data in tables"],
            ["Relationship", "No relation between data", "Supports relationships"],
            ["Security", "Less security", "More security"],
            ["Normalization", "Not supported fully", "Supports normalization"],
            ["Data Redundancy", "More", "Less"],
            ["Examples", "XML, File System", "MySQL, Oracle, PostgreSQL"]
          ]
        },
        {
          "type": "text",
          "value": "3. What is MySQL?\nMySQL is an open-source Relational Database Management System (RDBMS) used to store and manage data using SQL.\n\nDeveloped By: Oracle Corporation\n\nUses:\n• Web applications\n• Banking systems\n• E-commerce websites\n• College management systems\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "4. Features of MySQL:\n\n• Open Source: MySQL is free to use.\n• Fast Performance: Processes queries quickly.\n• Secure: Provides user authentication and access control.\n• Scalable: Can handle small and large applications.\n• Multi-user Support: Many users can access the database at the same time.\n• Cross Platform: Works on Windows, Linux, and macOS.\n• SQL Support: Uses SQL language for database operations.\n• Backup & Recovery: Supports data backup and restoration.\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "5. Advantages of MySQL:\n\n• Easy to Learn: Simple syntax and easy commands.\n• High Speed: Performs operations quickly.\n• Reliable: Widely used in real-world applications.\n• Cost Effective: Free community edition available.\n• Supports Large Databases: Can manage huge amounts of data.\n• Flexible: Works with Python, Java, PHP, Node.js.\n• Strong Community Support: Large developer community and documentation.\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "6. Real-World Uses of Databases:\n\n• Banking System: Account details, Transactions, ATM records.\n• College Management: Student details, Marks, Attendance.\n• Hospital Management: Patient records, Doctor info, Appointments.\n• E-Commerce Websites: Product details, Orders, Payments.\n• Social Media Applications: User profiles, Messages, Photos.\n• Railway/Airline Reservation: Ticket bookings, Passenger info.\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "7. SQL Overview:\nStructured Query Language (SQL) is used to Create, Insert, Update, Delete, and Retrieve data.\n\n------------------------------------------------"
        },
        {
          "type": "table",
          "headers": ["Type", "Purpose"],
          "rows": [
            ["DDL", "Defines database structure"],
            ["DML", "Manipulates data"],
            ["DQL", "Retrieves data"],
            ["DCL", "Controls permissions"],
            ["TCL", "Manages transactions"]
          ]
        },
        {
          "type": "table",
          "headers": ["Command", "Purpose"],
          "rows": [
            ["CREATE", "Create database/table"],
            ["INSERT", "Add records"],
            ["SELECT", "Retrieve records"],
            ["UPDATE", "Modify records"],
            ["DELETE", "Remove records"],
            ["DROP", "Delete database/table"],
            ["ALTER", "Modify table structure"]
          ]
        }
      ],
      "questions": [
        {
          "question": "What is the difference between DBMS and RDBMS?",
          "answer": "DBMS stores data as files and does not support relationships between data, while RDBMS stores data in tables and supports relationships, normalization, and higher security."
        },
        {
          "question": "Who owns and develops MySQL?",
          "answer": "MySQL is owned and developed by Oracle Corporation."
        },
        {
          "question": "What are some key advantages of using MySQL?",
          "answer": "Key advantages include being open-source, high performance, reliability, ease of learning, and strong flexibility with various programming languages."
        }
      ]
    },
    {
      "id": "mysql-table-concepts",
      "title": "Database Table Concepts",
      "category": "Basic",
      "definition": "Fundamental structural elements of a relational database, including the components of a table and the primary mechanisms for identifying and linking records.",
      "sections": [
        {
          "type": "text",
          "value": "1. Tables\nA table is a collection of related data stored in rows and columns in a database. It is similar to an Excel sheet, where each table stores data about one specific topic.\n\nExample Table: Student\n\n------------------------------------------------"
        },
        {
          "type": "table",
          "headers": ["Student_ID", "Name", "Course"],
          "rows": [
            ["101", "Ravi", "Python"],
            ["102", "Anu", "Java"]
          ]
        },
        {
          "type": "text",
          "value": "2. Rows & Records\nA row (or record) represents a single horizontal data entry in a table, containing complete information about one item.\n\nExample Row:\n101 | Ravi | Python\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "3. Columns\nA column represents a vertical field or attribute in a table, defining the type of data stored.\n\nExample Columns:\nStudent_ID, Name, Course\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "4. Primary Key\nA Primary Key is a column that uniquely identifies each record in a table.\n\nFeatures:\n• Cannot contain duplicate values\n• Cannot contain NULL values\n• Each table usually has one primary key\n\nExample: Student_ID is a Primary Key.\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "5. Foreign Key\nA Foreign Key is a column that links one table to another table by referring to the primary key of the related table.\n\nExample:\n• Students Table: Student_ID (PK)\n• Courses Table: Student_ID (FK) refers to Students Table.\n\n------------------------------------------------"
        },
        {
          "type": "table",
          "headers": ["Term", "Meaning"],
          "rows": [
            ["Table", "Collection of data"],
            ["Row", "Single horizontal data entry"],
            ["Column", "Vertical field/attribute"],
            ["Record", "Another name for row"],
            ["Primary Key", "Unique identifier"],
            ["Foreign Key", "Connects two tables"]
          ]
        }
      ],
      "questions": [
        {
          "question": "What is the difference between a row and a record?",
          "answer": "In database terms, 'row' and 'record' are used interchangeably. They both refer to a single horizontal set of data in a table."
        },
        {
          "question": "Can a Primary Key be NULL?",
          "answer": "No, a Primary Key must contain a unique value for each row and cannot be NULL."
        },
        {
          "question": "What is the purpose of a Foreign Key?",
          "answer": "A Foreign Key is used to create a relationship between two tables by linking a column in one table to the Primary Key of another."
        }
      ]
    },
    {
      "id": "mysql-database-ops",
      "title": "MySQL Database Operations",
      "category": "Basic",
      "definition": "Essential commands for managing databases in MySQL, including creation, listing, selection, and deletion.",
      "sections": [
        {
          "type": "text",
          "value": "1. Create Database\nUsed to create a new database.\n\nCommand: CREATE DATABASE college;\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "2. Show Databases\nLists all the databases available in the MySQL server.\n\nCommand: SHOW DATABASES;\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "3. Use Database\nSelects a specific database to start performing operations on its tables.\n\nCommand: USE college;\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "4. Drop Database\nRemoves an existing database along with all its tables and data permanently.\n\nCommand: DROP DATABASE college;"
        }
      ],
      "questions": [
        {
          "question": "What happens when you drop a database?",
          "answer": "The database, all its tables, and all the data contained within them are permanently deleted and cannot be recovered unless you have a backup."
        },
        {
          "question": "How do you verify if a database was created successfully?",
          "answer": "You can use the 'SHOW DATABASES;' command to list all databases and check if your new database appears in the list."
        }
      ]
    },
    {
      "id": "sql-data-types",
      "title": "Data Types in MySQL",
      "category": "Basic",
      "definition": "MySQL data types define the kind of values that can be stored in a table column, ensuring data integrity and efficient storage.",
      "sections": [
        {
          "type": "text",
          "value": "1. Numeric Types\nUsed to store numbers.\n\n• INT: Stores whole numbers\n• FLOAT: Stores decimal numbers with single precision\n• DOUBLE: Stores large decimal numbers with double precision\n• DECIMAL: Stores exact decimal values\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "INT\nUsed for integer (whole) numbers.\nSyntax: column_name INT;\nExample: CREATE TABLE students ( id INT);\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "FLOAT\nUsed for decimal values with approximate precision.\nSyntax: column_name FLOAT;\nExample: CREATE TABLE products ( price FLOAT);\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "DOUBLE\nUsed for large decimal numbers with higher precision.\nSyntax: column_name DOUBLE;\nExample: CREATE TABLE measurements ( value DOUBLE);\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "DECIMAL\nUsed for exact decimal values like money and financial data.\nSyntax: column_name DECIMAL(total_digits, decimal_digits);\nExample: CREATE TABLE salary ( amount DECIMAL(10,2));\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "2. String Types\nUsed to store text values.\n\n• CHAR: Fixed-length string\n• VARCHAR: Variable-length string\n• TEXT: Stores large text\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "CHAR\nStores fixed-length text.\nSyntax: column_name CHAR(size);\nExample: CREATE TABLE country ( code CHAR(3));\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "VARCHAR\nStores variable-length text.\nSyntax: column_name VARCHAR(size);\nExample: CREATE TABLE users ( name VARCHAR(50));\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "TEXT\nStores large amounts of text.\nSyntax: column_name TEXT;\nExample: CREATE TABLE messages ( content TEXT);\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "3. Date & Time Types\nUsed to store date and time values.\n\n• DATE: Stores only date\n• TIME: Stores only time\n• DATETIME: Stores both date and time\n• TIMESTAMP: Stores timestamp values\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "DATE\nStores only date.\nSyntax: column_name DATE;\nExample: CREATE TABLE events ( event_date DATE);\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "TIME\nStores only time.\nSyntax: column_name TIME;\nExample: CREATE TABLE schedule ( meeting_time TIME);\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "DATETIME\nStores both date and time.\nSyntax: column_name DATETIME;\nExample: CREATE TABLE logs ( created_at DATETIME);\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "TIMESTAMP\nStores date and time with automatic tracking.\nSyntax: column_name TIMESTAMP;\nExample: CREATE TABLE orders ( order_time TIMESTAMP);\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "4. Boolean Type\nUsed to store TRUE or FALSE values.\n\n• BOOLEAN: Stores true or false\n\nSyntax: column_name BOOLEAN;\nExample: CREATE TABLE users ( is_active BOOLEAN);"
        }
      ],
      "questions": [
        {
          "question": "What is the difference between CHAR and VARCHAR?",
          "answer": "CHAR is fixed-length (padded with spaces if the string is shorter), whereas VARCHAR is variable-length and only uses the space needed for the string plus one or two length bytes."
        },
        {
          "question": "When should you use DECIMAL over FLOAT or DOUBLE?",
          "answer": "DECIMAL should be used for financial data or any values where exact precision is required, as FLOAT and DOUBLE use approximate floating-point math."
        },
        {
          "question": "What is the default format for a DATE type in MySQL?",
          "answer": "The default format is 'YYYY-MM-DD'."
        }
      ]
    },
    {
      "id": "mysql-crud-operations",
      "title": "CRUD Operations in MySQL",
      "category": "Basic",
      "definition": "CRUD stands for Create, Read, Update, and Delete. These are the four basic actions performed on data in a database.",
      "sections": [
        {
          "type": "table",
          "headers": ["Operation", "Meaning", "MySQL Command"],
          "rows": [
            ["C", "Create", "INSERT"],
            ["R", "Read", "SELECT"],
            ["U", "Update", "UPDATE"],
            ["D", "Delete", "DELETE"]
          ]
        },
        {
          "type": "text",
          "value": "1. CREATE (INSERT)\nUsed to add new records into a table.\n\nSyntax:\nINSERT INTO table_name(column1, column2) VALUES(value1, value2);\n\nExample:\nINSERT INTO students(id, name) VALUES(1, 'Ram');\n\n------------------------------------------------"
        },
        {
          "type": "output",
          "value": "id\tname\n1\tRam"
        },
        {
          "type": "text",
          "value": "2. READ (SELECT)\nUsed to retrieve data from a table.\n\nSyntax:\nSELECT * FROM table_name;\n\nExample:\nSELECT * FROM students;\n\n------------------------------------------------"
        },
        {
          "type": "output",
          "value": "id\tname\n1\tRam"
        },
        {
          "type": "text",
          "value": "3. UPDATE\nUsed to modify existing records.\n\nSyntax:\nUPDATE table_name SET column_name = value WHERE condition;\n\nExample:\nUPDATE students SET name = 'Krishna' WHERE id = 1;\n\n------------------------------------------------"
        },
        {
          "type": "output",
          "value": "id\tname\n1\tKrishna"
        },
        {
          "type": "text",
          "value": "4. DELETE\nUsed to remove records from a table.\n\nSyntax:\nDELETE FROM table_name WHERE condition;\n\nExample:\nDELETE FROM students WHERE id = 1;\n\n------------------------------------------------"
        },
        {
          "type": "output",
          "value": "Record deleted successfully"
        },
        {
          "type": "table",
          "headers": ["CRUD", "SQL Command", "Purpose"],
          "rows": [
            ["Create", "INSERT", "Add new data"],
            ["Read", "SELECT", "View data"],
            ["Update", "UPDATE", "Modify data"],
            ["Delete", "DELETE", "Remove data"]
          ]
        }
      ],
      "questions": [
        {
          "question": "What does CRUD stand for?",
          "answer": "CRUD stands for Create, Read, Update, and Delete, representing the four basic functions of persistent storage."
        },
        {
          "question": "Which SQL command is used for the 'Update' operation in CRUD?",
          "answer": "The UPDATE command is used to modify existing records in a table."
        },
        {
          "question": "Why is the WHERE clause important in UPDATE and DELETE operations?",
          "answer": "The WHERE clause specifies which records should be updated or deleted. Without it, all records in the table would be affected."
        }
      ]
    },
    {
      "id": "mysql-constraints",
      "title": "Constraints in MySQL",
      "category": "Basic",
      "definition": "Constraints are rules applied on table columns to control the type of data that can be stored and maintain data integrity.",
      "sections": [
        {
          "type": "text",
          "value": "1. DEFAULT\nStores a default value when the user does not specify any value.\nExample: salary INT DEFAULT 10000\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "2. NOT NULL\nThe column does not accept NULL values.\nExample: name VARCHAR(50) NOT NULL\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "3. UNIQUE KEY\n• Allows only unique values\n• NULL values are allowed\n• A table can have multiple UNIQUE keys\nExample: email VARCHAR(100) UNIQUE\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "4. PRIMARY KEY\n• Allows only unique values\n• Does not allow NULL\n• Used to uniquely identify each record\n• Only one PRIMARY KEY can be used in a table\n• PRIMARY KEY can use AUTO_INCREMENT\nExample: id INT PRIMARY KEY AUTO_INCREMENT\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "5. AUTO_INCREMENT\nAutomatically increases the value for each new record. Usually used with PRIMARY KEY.\nExample: id INT AUTO_INCREMENT\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "6. CHECK\nUsed to apply a specific condition on a column.\nExample: age TINYINT CHECK(age >= 18)\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "7. FOREIGN KEY\nA FOREIGN KEY is a column in the child table that refers to the PRIMARY KEY of the parent table.\n\nImportant Points:\n• A table can have multiple foreign keys\n• One PRIMARY KEY can be referenced in multiple tables\n• FOREIGN KEY allows NULL values\n• FOREIGN KEY accepts duplicate values\n• Used to define relationships between tables\nExample: FOREIGN KEY (dept_id) REFERENCES department(id)\n\n------------------------------------------------"
        },
        {
          "type": "table",
          "headers": ["Constraint", "Allows NULL", "Allows Duplicates", "Purpose"],
          "rows": [
            ["DEFAULT", "Yes", "Yes", "Stores default value"],
            ["NOT NULL", "No", "Yes", "Prevents NULL values"],
            ["UNIQUE", "Yes", "No", "Stores unique values"],
            ["PRIMARY KEY", "No", "No", "Uniquely identifies rows"],
            ["AUTO_INCREMENT", "No", "No", "Automatically increments values"],
            ["CHECK", "Depends", "Depends", "Applies conditions"],
            ["FOREIGN KEY", "Yes", "Yes", "Creates relationship between tables"]
          ]
        }
      ],
      "questions": [
        {
          "question": "What is the difference between PRIMARY KEY and UNIQUE KEY?",
          "answer": "PRIMARY KEY does not allow NULL values and only one is allowed per table. UNIQUE KEY allows NULL values and multiple unique keys can exist in a single table.\n\n-----------------"
        },
        {
          "question": "Can a table have multiple FOREIGN KEY constraints?",
          "answer": "Yes, a table can have multiple foreign keys referencing different parent tables.\n\n-----------------"
        },
        {
          "question": "Does a FOREIGN KEY allow NULL and duplicate values?",
          "answer": "Yes, a foreign key can accept both NULL values and duplicate values, unlike a primary key.\n\n-----------------"
        },
        {
          "question": "What is the primary use of the AUTO_INCREMENT constraint?",
          "answer": "It is used to automatically generate a unique numeric value for each new record, typically for primary key columns."
        }
      ]
    },
    {
      "id": "mysql-constraints-practical",
      "title": "MySQL Constraints Practical Example",
      "category": "Basic",
      "definition": "A hands-on demonstration of all MySQL constraints working together across multiple tables to ensure data integrity.",
      "sections": [
        {
          "type": "text",
          "value": "Table 1: Departments\n\nCREATE TABLE departments (\n    dept_id INT AUTO_INCREMENT PRIMARY KEY,\n    dept_name VARCHAR(50) NOT NULL UNIQUE,\n    location VARCHAR(50) DEFAULT 'Hyderabad'\n);\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "Table 2: Employees\n\nCREATE TABLE employees (\n    emp_id INT AUTO_INCREMENT PRIMARY KEY,\n    emp_name VARCHAR(100) NOT NULL,\n    email VARCHAR(100) UNIQUE,\n    age INT CHECK (age >= 18),\n    salary DECIMAL(10,2) CHECK (salary > 10000),\n    gender VARCHAR(10) DEFAULT 'Not Specified',\n    dept_id INT,\n    FOREIGN KEY (dept_id) REFERENCES departments(dept_id)\n);\n\n------------------------------------------------"
        },
        {
          "type": "table",
          "headers": ["Constraint", "Used In"],
          "rows": [
            ["NOT NULL", "emp_name, dept_name"],
            ["UNIQUE", "email, dept_name"],
            ["PRIMARY KEY", "emp_id, dept_id"],
            ["FOREIGN KEY", "dept_id"],
            ["DEFAULT", "gender, location"],
            ["CHECK", "age, salary"],
            ["AUTO_INCREMENT", "emp_id, dept_id"]
          ]
        },
        {
          "type": "text",
          "value": "Insert Data into Departments:\n\nINSERT INTO departments (dept_name, location) VALUES\n('HR', 'Vijayawada'),\n('IT', 'Hyderabad'),\n('Finance', 'Bangalore');\n\n------------------------------------------------"
        },
        {
          "type": "table",
          "headers": ["dept_id", "dept_name", "location"],
          "rows": [
            ["1", "HR", "Vijayawada"],
            ["2", "IT", "Hyderabad"],
            ["3", "Finance", "Bangalore"]
          ]
        },
        {
          "type": "text",
          "value": "Insert Data into Employees:\n\nINSERT INTO employees(emp_name, email, age, salary, gender, dept_id) VALUES\n('Asha', 'asha@gmail.com', 22, 35000, 'Female', 1),\n('Rahul', 'rahul@gmail.com', 25, 50000, 'Male', 2),\n('Kiran', 'kiran@gmail.com', 28, 45000, DEFAULT, 3);\n\n------------------------------------------------"
        },
        {
          "type": "table",
          "headers": ["emp_id", "emp_name", "email", "age", "salary", "gender", "dept_id"],
          "rows": [
            ["1", "Asha", "asha@gmail.com", "22", "35000", "Female", "1"],
            ["2", "Rahul", "rahul@gmail.com", "25", "50000", "Male", "2"],
            ["3", "Kiran", "kiran@gmail.com", "28", "45000", "Not Specified", "3"]
          ]
        },
        {
          "type": "text",
          "value": "Constraint Error Examples:\n\n1. NOT NULL Error\nINSERT INTO employees(emp_name, age, salary) VALUES(NULL, 22, 30000);\nOutput: ERROR: emp_name cannot be NULL\n\n2. UNIQUE Error\nINSERT INTO employees(emp_name, email, age, salary) VALUES('Sai', 'asha@gmail.com', 23, 30000);\nOutput: ERROR: Duplicate entry for UNIQUE column 'email'\n\n3. CHECK Error\nINSERT INTO employees(emp_name, age, salary) VALUES('Ravi', 15, 20000);\nOutput: ERROR: CHECK constraint failed\n\n4. FOREIGN KEY Error\nINSERT INTO employees(emp_name, age, salary, dept_id) VALUES('Priya', 24, 40000, 10);\nOutput: ERROR: Cannot add or update child row: Foreign key constraint fails"
        }
      ],
      "questions": [
        {
          "question": "What happens if you try to insert a duplicate value into a column with a UNIQUE constraint?",
          "answer": "MySQL will return an error (e.g., 'Duplicate entry for UNIQUE column') and the record will not be inserted."
        },
        {
          "question": "In the example, why did the gender for 'Kiran' become 'Not Specified'?",
          "answer": "Because the 'DEFAULT' keyword was used in the INSERT statement, which tells MySQL to use the default value defined in the table structure."
        },
        {
          "question": "What is the requirement for a value inserted into the dept_id column of the Employees table?",
          "answer": "Due to the FOREIGN KEY constraint, any value inserted into Employees.dept_id must already exist in the Departments.dept_id column."
        }
      ]
    },
    {
      "id": "mysql-classification-relations",
      "title": "Classification of Relations in DBMS",
      "category": "Basic",
      "definition": "In DBMS, a relation is a table. Relations are classified based on their structural properties, data volume, constraints, and how they interact with other tables.",
      "sections": [
        {
          "type": "text",
          "value": "1. Based on Degree (Number of Attributes)\n• Unary Relation: Has only one column\n• Binary Relation: Has two columns\n• Ternary Relation: Has three columns\n• n-ary Relation: Has n columns\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "2. Based on Number of Tuples (Rows)\n• Empty Relation: Contains no rows\n• Non-empty Relation: Contains at least one row\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "3. Based on Relationship Between Tables\n• One-to-One (1:1): One record ↔ One record (e.g., Person ↔ Passport)\n• One-to-Many (1:M): One record ↔ Many records (e.g., Department → Employees)\n• Many-to-One (M:1): Many records ↔ One record (e.g., Employees → Manager)\n• Many-to-Many (M:N): Many records ↔ Many records (e.g., Students ↔ Courses)\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "4. Based on Key Constraints\n• Strong (Regular) Relation: Has a primary key and exists independently.\n• Weak Relation: Does not have a primary key; depends on a strong entity for existence.\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "5. Based on Normalization (Structure Quality)\n• Normalized Relations: Follow strict normal forms (1NF, 2NF, 3NF) to reduce redundancy.\n• Denormalized Relations: Intentionally include redundancy to improve query performance.\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "6. Based on Participation in Relationship\n• Total Participation: Every record in the table must be associated with the relationship.\n• Partial Participation: Participation in the relationship is optional.\n\n------------------------------------------------"
        },
        {
          "type": "table",
          "headers": ["Classification", "Key Property", "Example/Detail"],
          "rows": [
            ["Degree", "Number of columns", "Binary (2), Ternary (3)"],
            ["Cardinality", "Number of rows", "Empty vs Non-empty"],
            ["Relationships", "1:1, 1:M, M:1, M:N", "Person ↔ Passport"],
            ["Keys", "Primary Key presence", "Strong vs Weak"],
            ["Normalization", "Design quality", "1NF, 2NF, 3NF"],
            ["Participation", "Mandatory/Optional", "Total vs Partial"]
          ]
        }
      ],
      "questions": [
        {
          "question": "What is the difference between a Strong and a Weak relation?",
          "answer": "A Strong relation has its own primary key and exists independently, while a Weak relation depends on a Strong relation and usually doesn't have a primary key that can uniquely identify its records on its own."
        },
        {
          "question": "What does the 'Degree' of a relation mean?",
          "answer": "Degree refers to the total number of attributes (columns) present in a table."
        },
        {
          "question": "Which relationship type requires a Junction Table?",
          "answer": "A Many-to-Many (M:N) relationship typically requires a Junction Table to be implemented effectively in a relational database."
        }
      ]
    },
    {
      "id": "mysql-degree-relation",
      "title": "Degree of a Relation in DBMS",
      "category": "Basic",
      "definition": "The degree of a relation refers to the total number of attributes (columns) present in a table.",
      "sections": [
        {
          "type": "text",
          "value": "1. Unary Relation\nA relation that has only one attribute (column) is called a Unary Relation.\n• Example: A simple list of Student Names.\n• Degree = 1\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "2. Binary Relation\nA relation that has two attributes (columns) is called a Binary Relation.\n• Example: A table with Student_ID and Student_Name.\n• Degree = 2\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "3. Ternary Relation\nA relation that has three attributes (columns) is called a Ternary Relation.\n• Example: A table with Student_ID, Student_Name, and Course.\n• Degree = 3\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "4. n-ary Relation\nA relation that has 'n' number of attributes (columns) is called an n-ary Relation.\n• Example: A complex table with ID, Name, Course, Phone, and City.\n• Degree = n\n\n------------------------------------------------"
        },
        {
          "type": "table",
          "headers": ["Relation Type", "Number of Columns (Degree)"],
          "rows": [
            ["Unary Relation", "1"],
            ["Binary Relation", "2"],
            ["Ternary Relation", "3"],
            ["n-ary Relation", "n"]
          ]
        }
      ],
      "questions": [
        {
          "question": "What is the 'Degree' of a relation?",
          "answer": "Degree refers to the number of attributes (columns) in a table."
        },
        {
          "question": "If a table has 5 columns, what is its degree?",
          "answer": "The degree is 5 (it is a 5-ary or n-ary relation)."
        },
        {
          "question": "Does the number of rows affect the degree of a relation?",
          "answer": "No. The number of rows is called 'Cardinality'. Degree only refers to the number of columns."
        }
      ]
    },
    {
      "id": "mysql-cardinality-relation",
      "title": "Cardinality of a Relation in DBMS",
      "category": "Basic",
      "definition": "Cardinality refers to the total number of tuples (rows) present in a table at a given time.",
      "sections": [
        {
          "type": "text",
          "value": "1. Empty Relation\nA relation that contains no rows (tuples) is called an Empty Relation.\n• Row Count = 0\n• Example: A newly created table where no data has been inserted yet.\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "2. Non-empty Relation\nA relation that contains at least one row (tuple) is called a Non-empty Relation.\n• Row Count > 0\n• Example: A table containing one or more student records.\n\n------------------------------------------------"
        },
        {
          "type": "table",
          "headers": ["Relation Type", "Description"],
          "rows": [
            ["Empty Relation", "Contains no rows (Cardinality = 0)"],
            ["Non-empty Relation", "Contains one or more rows (Cardinality > 0)"]
          ]
        }
      ],
      "questions": [
        {
          "question": "What is 'Cardinality' in DBMS?",
          "answer": "Cardinality refers to the number of rows or tuples in a table."
        },
        {
          "question": "Does the number of columns affect the cardinality of a relation?",
          "answer": "No. The number of columns is called 'Degree'. Cardinality only refers to the number of rows."
        },
        {
          "question": "When is a table considered an Empty Relation?",
          "answer": "A table is an Empty Relation when it has been defined (schema exists) but contains zero records."
        }
      ]
    },
    {
      "id": "mysql-database-relationships",
      "title": "Types of Relationships in DBMS",
      "category": "Basic",
      "definition": "Database relationships are the connections established between tables that define how data in one table relates to data in another.",
      "sections": [
        {
          "type": "text",
          "value": "1. One-to-One Relationship (1:1)\nOne record in Table A is connected to only one record in Table B.\n\nReal-Time Example: Person ↔ Passport\n• One person has one passport\n• One passport belongs to one person\n\nOther examples: Employee ↔ Locker, User ↔ Aadhaar Card\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "2. One-to-Many Relationship (1:M)\nOne record in one table can relate to many records in another table.\n\nReal-Time Example: Department → Employees\n• One department has many employees\n• Each employee belongs to one department\n\nOther examples: Teacher → Students, Customer → Orders, Company → Employees\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "3. Many-to-One Relationship (M:1)\nMany records in one table relate to one record in another table (inverse of One-to-Many).\n\nReal-Time Example: Employees → Manager\n• Many employees work under one manager\n\nOther examples: Many students belong to one college, Many products belong to one category\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "4. Many-to-Many Relationship (M:N)\nMany records in one table relate to many records in another table. This usually requires a Junction Table.\n\nReal-Time Example: Students ↔ Courses\n• One student can join many courses\n• One course can have many students\n\nOther examples: Doctors ↔ Patients, Actors ↔ Movies, Authors ↔ Books\n\n------------------------------------------------"
        },
        {
          "type": "table",
          "headers": ["Relationship", "Meaning", "Example"],
          "rows": [
            ["One-to-One", "One record ↔ One record", "Person ↔ Passport"],
            ["One-to-Many", "One record ↔ Many records", "Department → Employees"],
            ["Many-to-One", "Many records ↔ One record", "Employees → Manager"],
            ["Many-to-Many", "Many records ↔ Many records", "Students ↔ Courses"]
          ]
        }
      ],
      "questions": [
        {
          "question": "What is a Junction Table and when is it used?",
          "answer": "A Junction Table (or associative table) is used to implement a Many-to-Many relationship. It contains foreign keys from both related tables."
        },
        {
          "question": "How do you implement a One-to-Many relationship in SQL?",
          "answer": "By placing a Foreign Key in the 'Many' side table that refers to the Primary Key of the 'One' side table."
        },
        {
          "question": "Give a real-world example of a One-to-One relationship.",
          "answer": "A common example is a Person and their Passport or a User and their unique Aadhaar Card."
        }
      ]
    },
    {
      "id": "mysql-strong-weak-relations",
      "title": "Strong vs Weak Relations in DBMS",
      "category": "Basic",
      "definition": "Relations are classified as Strong or Weak based on their independence and whether they possess a primary key that can uniquely identify records without external dependency.",
      "sections": [
        {
          "type": "text",
          "value": "1. Strong (Regular) Relation\nA relation that has its own Primary Key and can exist independently is called a Strong Relation.\n\nFeatures:\n• Has a primary key\n• Independent table\n• Does not depend on another table\n\nExample Table: Student\n• Student_ID (PK) is the Primary Key\n• The table can exist independently\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "2. Weak Relation\nA relation that does not have a sufficient primary key and depends on another relation (the strong relation) for its existence is called a Weak Relation.\n\nFeatures:\n• Depends on a strong relation\n• Uses foreign key relationship\n• Cannot exist independently\n\nExample Table: Dependent\n• This table depends on the Student table\n• Student_ID acts as a Foreign Key\n• Without the Student table, this table has no meaning.\n\n------------------------------------------------"
        },
        {
          "type": "table",
          "headers": ["Relation Type", "Description"],
          "rows": [
            ["Strong Relation", "Has primary key and exists independently"],
            ["Weak Relation", "Depends on another relation for existence"]
          ]
        }
      ],
      "questions": [
        {
          "question": "Can a Weak relation have its own primary key?",
          "answer": "A Weak relation typically does not have a complete primary key that can uniquely identify its records on its own. It often uses a 'Partial Key' combined with the Primary Key of its parent strong relation."
        },
        {
          "question": "What happens to a Weak relation if its parent Strong relation is deleted?",
          "answer": "Since the Weak relation depends on the Strong relation, deleting the Strong relation usually results in the deletion of the associated records in the Weak relation (often handled via 'ON DELETE CASCADE')."
        },
        {
          "question": "How is a Weak relation identified in an ER diagram?",
          "answer": "In an Entity-Relationship (ER) diagram, a weak entity is usually represented by a double rectangle."
        }
      ]
    },
    {
      "id": "mysql-normalized-denormalized",
      "title": "Normalized vs Denormalized Relations",
      "category": "Basic",
      "definition": "Normalization is the process of organizing data to reduce redundancy, while Denormalization is the intentional addition of redundant data to optimize read performance.",
      "sections": [
        {
          "type": "text",
          "value": "1. Normalized Relations\nNormalized relations follow rules (1NF, 2NF, 3NF) to minimize duplicate data and improve consistency.\n\nExample: Separating Student and Department data into two tables linked by Dept_ID.\n• Advantages: Reduces redundancy, saves space, avoids inconsistency.\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "2. Denormalized Relations\nDenormalization combines data into fewer tables to reduce the need for complex joins and speed up read operations.\n\nExample: Storing Dept_Name directly in the Student table.\n• Advantages: Faster retrieval, fewer joins.\n• Disadvantages: More redundancy, possible inconsistency.\n\n------------------------------------------------"
        },
        {
          "type": "table",
          "headers": ["Normalized Relation", "Denormalized Relation"],
          "rows": [
            ["Reduces redundancy", "Adds redundancy"],
            ["Uses multiple related tables", "Combines data into fewer tables"],
            ["Slower queries due to joins", "Faster queries"],
            ["Better consistency", "Better performance"]
          ]
        },
        {
          "type": "table",
          "headers": ["Used In", "Type"],
          "rows": [
            ["Banking Systems (OLTP)", "Normalized"],
            ["Data Warehouses (OLAP)", "Denormalized"],
            ["Reporting Systems", "Denormalized"]
          ]
        }
      ],
      "questions": [
        {
          "question": "What is the main goal of Normalization?",
          "answer": "The primary goal is to reduce data redundancy and ensure data consistency across the database."
        },
        {
          "question": "Why would a developer choose to denormalize a database?",
          "answer": "Denormalization is chosen when query performance and read speed are prioritized over storage efficiency and strict consistency, common in reporting or analytical systems."
        },
        {
          "question": "Give an example of an OLTP system vs an OLAP system regarding normalization.",
          "answer": "OLTP systems (like ATM transactions) are usually Normalized for high consistency, whereas OLAP systems (like annual sales reports) are Denormalized for high-speed analysis."
        }
      ]
    },
    {
      "id": "mysql-normal-forms",
      "title": "Normal Forms in DBMS (1NF, 2NF, 3NF)",
      "category": "Basic",
      "definition": "Normal Forms are a series of rules used to eliminate data redundancy and ensure logical data dependencies in a relational database.",
      "sections": [
        {
          "type": "text",
          "value": "1NF (First Normal Form)\nA table is in 1NF if each column contains atomic (single) values and there are no repeating groups.\n\n• Before 1NF: Student_ID (101), Name (Ravi), Subjects (Python, Java)\n• After 1NF: Split into separate rows for each subject.\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "2NF (Second Normal Form)\nA table is in 2NF if it is in 1NF and no partial dependency exists. All non-key attributes must depend on the entire primary key, not just a part of it.\n\n• Partial Dependency: When a column depends only on one part of a composite key.\n• Solution: Split into separate tables (e.g., Student, Course, and Enrollment).\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "3NF (Third Normal Form)\nA table is in 3NF if it is in 2NF and no transitive dependency exists. Non-key columns must not depend on other non-key columns.\n\n• Transitive Dependency: Emp_ID → Dept_ID → Dept_Name (where Dept_Name depends on Dept_ID).\n• Solution: Move Dept_Name to a separate Department table linked by Dept_ID.\n\n------------------------------------------------"
        },
        {
          "type": "table",
          "headers": ["Normal Form", "Rule", "Removes"],
          "rows": [
            ["1NF", "Atomic values only", "Repeating groups"],
            ["2NF", "Remove partial dependency", "Partial functional dependency"],
            ["3NF", "Remove transitive dependency", "Transitive dependency"]
          ]
        }
      ],
      "questions": [
        {
          "question": "What is 'Atomic Value' in 1NF?",
          "answer": "An atomic value is a single, indivisible value in a cell. For example, 'Java' is atomic, but 'Java, Python' is not."
        },
        {
          "question": "Explain Partial Dependency with an example.",
          "answer": "Partial Dependency occurs when a non-key attribute depends on only part of a composite primary key. Example: If (ID, CourseID) is the PK, but StudentName only depends on ID, it's a partial dependency."
        },
        {
          "question": "What is Transitive Dependency?",
          "answer": "Transitive Dependency occurs when a non-key attribute depends on another non-key attribute instead of the primary key. Example: ID → DeptID → DeptName."
        }
      ]
    },
    {
      "id": "mysql-participation-relationship",
      "title": "Total vs Partial Participation in DBMS",
      "category": "Basic",
      "definition": "Participation defines whether all records in an entity must participate in a relationship or if it is optional for some records.",
      "sections": [
        {
          "type": "text",
          "value": "1. Total Participation\nEvery record in the table must be associated with at least one record in another table. This is also called Mandatory Participation.\n\nExample: Employee → Department\n• Every employee must belong to a department.\n• No employee can exist without a Dept_ID.\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "2. Partial Participation\nSome records may or may not participate in the relationship. This is also called Optional Participation.\n\nExample: Employee → Parking Slot\n• Some employees have parking slots assigned.\n• Others (like new or remote staff) may not have one.\n\n------------------------------------------------"
        },
        {
          "type": "table",
          "headers": ["Total Participation", "Partial Participation"],
          "rows": [
            ["Participation is compulsory", "Participation is optional"],
            ["Every record must participate", "Some records may not participate"],
            ["Mandatory relationship", "Optional relationship"]
          ]
        },
        {
          "type": "table",
          "headers": ["Relationship", "Participation Type"],
          "rows": [
            ["Employee → Department", "Total Participation"],
            ["Customer → Loan", "Partial Participation"],
            ["Student → Course", "Partial Participation"],
            ["Citizen → Aadhaar", "Total Participation"]
          ]
        }
      ],
      "questions": [
        {
          "question": "How is Total Participation represented in an ER diagram?",
          "answer": "Total Participation is usually represented by a double line connecting the entity to the relationship diamond."
        },
        {
          "question": "What is another name for Total and Partial participation?",
          "answer": "Total Participation is called Mandatory Participation, and Partial Participation is called Optional Participation."
        },
        {
          "question": "Why is 'Citizen → Aadhaar' considered Total Participation?",
          "answer": "Because in the context of the system, every valid citizen is expected to be registered and associated with a unique Aadhaar record."
        }
      ]
    },
    {
      "id": "sql-command-types",
      "title": "SQL Command Types",
      "category": "Basic",
      "definition": "SQL has different sub-languages (categories of commands) based on the type of operation performed on the database.",
      "sections": [
        {
          "type": "text",
          "value": "Types (Sub-Languages) of SQL:\n\n1. DDL – Data Definition Language\nUsed to define or modify database structure (tables, schema).\nCommands:\n• CREATE → creates database/table\n• ALTER → modifies table structure\n• DROP → deletes table/database completely\n• TRUNCATE → removes all rows from table\n• RENAME → renames table"
        },
        {
          "type": "text",
          "value": "2. DML – Data Manipulation Language\nUsed to insert, update, or delete data in tables.\nCommands:\n• INSERT\n• UPDATE\n• DELETE"
        },
        {
          "type": "text",
          "value": "3. DQL – Data Query Language\nUsed to retrieve data from database.\nCommand:\n• SELECT"
        },
        {
          "type": "text",
          "value": "4. DCL – Data Control Language\nUsed to control permissions and access.\nCommands:\n• GRANT\n• REVOKE"
        },
        {
          "type": "text",
          "value": "5. TCL – Transaction Control Language\nUsed to manage transactions in database.\nCommands:\n• COMMIT\n• ROLLBACK\n• SAVEPOINT"
        },
        {
          "type": "table",
          "headers": ["Sub-language", "Full Form", "Purpose"],
          "rows": [
            ["DDL", "Data Definition Language", "Structure of database"],
            ["DML", "Data Manipulation Language", "Insert/update/delete data"],
            ["DQL", "Data Query Language", "Retrieve data"],
            ["DCL", "Data Control Language", "Permissions/security"],
            ["TCL", "Transaction Control Language", "Manage transactions"]
          ]
        }
      ],
      "questions": [
        {
          "question": "What is the difference between DDL and DML?",
          "answer": "DDL (Data Definition Language) is used to define or modify the structure of the database (like tables), while DML (Data Manipulation Language) is used to manage the data within those tables (like inserting or updating records)."
        },
        {
          "question": "Which command is used to remove all records from a table without deleting the table itself?",
          "answer": "The TRUNCATE command (DDL) or DELETE command (DML). TRUNCATE is generally faster as it doesn't log individual row deletions."
        },
        {
          "question": "What are TCL commands?",
          "answer": "TCL stands for Transaction Control Language. It includes commands like COMMIT (save changes), ROLLBACK (undo changes), and SAVEPOINT (set a recovery point) to manage database transactions."
        }
      ]
    },
    {
      "id": "sql-delete-truncate-drop",
      "title": "DELETE vs TRUNCATE vs DROP",
      "category": "Basic",
      "definition": "In SQL, DELETE, TRUNCATE, and DROP are all used to remove data or structures, but they differ significantly in their impact and behavior.",
      "sections": [
        {
          "type": "text",
          "value": "1. DELETE\nUsed to delete records (rows) from a table.\n• Table structure remains the same.\n• Can delete all rows or specific rows using a condition.\n\nSyntax:\nDELETE FROM table_name;\nDELETE FROM table_name WHERE condition;\n\n-----------------------------------------------"
        },
        {
          "type": "text",
          "value": "2. TRUNCATE\nRemoves all rows from a table.\n• Table structure remains.\n• Faster than DELETE.\n• Cannot use WHERE condition.\n\nSyntax:\nTRUNCATE TABLE table_name;\n\n-----------------------------------------------"
        },
        {
          "type": "text",
          "value": "3. DROP\nDeletes the entire table permanently.\n• Removes both data and table structure.\n\nSyntax:\nDROP TABLE table_name;\n\n-----------------------------------------------"
        },
        {
          "type": "text",
          "value": "4. ALTER DROP COLUMN\nRemoves a specific column from a table.\n• Remaining table and data stay unchanged.\n\nSyntax:\nALTER TABLE table_name DROP COLUMN column_name;"
        },
        {
          "type": "table",
          "headers": ["Feature", "DELETE", "TRUNCATE", "DROP"],
          "rows": [
            ["Purpose", "Deletes rows", "Removes all rows", "Deletes entire table"],
            ["Table Structure", "Remains", "Remains", "Removed"],
            ["Data Removed", "Selected or all rows", "All rows only", "Entire table + data"],
            ["WHERE Condition", "Allowed", "Not allowed", "Not allowed"],
            ["Speed", "Slower", "Faster", "Fastest"],
            ["Rollback Possible", "Yes (in transactions)", "Usually No", "No"],
            ["Auto Increment Reset", "No", "Yes", "Table removed completely"],
            ["Command Type", "DML", "DDL", "DDL"]
          ]
        }
      ],
      "questions": [
        {
          "question": "Which command is used to remove a specific column from a table?",
          "answer": "ALTER TABLE table_name DROP COLUMN column_name;"
        },
        {
          "question": "Can you rollback a DELETE command?",
          "answer": "Yes, DELETE is a DML command and its operations are logged, so they can be rolled back if they were part of a transaction."
        },
        {
          "question": "Why is TRUNCATE faster than DELETE?",
          "answer": "TRUNCATE is a DDL operation that deallocates the entire data pages rather than deleting rows one by one and logging each deletion, making it much faster for large tables."
        },
        {
          "question": "Does TRUNCATE reset identity/auto-increment values?",
          "answer": "Yes, TRUNCATE resets the auto-increment counter to its seed value, whereas DELETE does not."
        }
      ]
    },
    {
      "id": "sql-ddl-commands-practical",
      "title": "SQL DDL Commands with Employee Table",
      "category": "Basic",
      "definition": "A complete step-by-step guide to SQL DDL commands using an Employee table example.",
      "sections": [
        {
          "type": "text",
          "value": "1. Create Database\nCREATE DATABASE company_db;\n\n-----------------------------------------------"
        },
        {
          "type": "text",
          "value": "2. Use Database\nUSE company_db;\n\n-----------------------------------------------"
        },
        {
          "type": "text",
          "value": "3. Create Employee Table\nCREATE TABLE employee(\n    emp_id INT,\n    emp_name VARCHAR(50),\n    salary DECIMAL(10,2),\n    department VARCHAR(30)\n);\n\n-----------------------------------------------"
        },
        {
          "type": "text",
          "value": "4. Insert Data (At least 3 Records)\nINSERT INTO employee VALUES\n(101, 'Ravi', 45000, 'HR'),\n(102, 'Sita', 55000, 'IT'),\n(103, 'Kiran', 60000, 'Finance');\n\n-----------------------------------------------"
        },
        {
          "type": "text",
          "value": "5. View Data\nSELECT * FROM employee;"
        },
        {
          "type": "output",
          "value": "emp_id\temp_name\tsalary\tdepartment\n101\tRavi\t45000\tHR\n102\tSita\t55000\tIT\n103\tKiran\t60000\tFinance\n\n-----------------------------------------------"
        },
        {
          "type": "text",
          "value": "ALTER TABLE Commands:\n\nA. ADD Column\nAdd a new column email\nALTER TABLE employee\nADD email VARCHAR(50);\n\n-----------------------------------------------"
        },
        {
          "type": "text",
          "value": "B. DROP Column\nRemove email column\nALTER TABLE employee\nDROP COLUMN email;\n\n-----------------------------------------------"
        },
        {
          "type": "text",
          "value": "C. MODIFY Column\nChange datatype/size of existing column\nALTER TABLE employee\nMODIFY emp_name VARCHAR(100);\n\nBefore: VARCHAR(50)\nAfter: VARCHAR(100)\n\n-----------------------------------------------"
        },
        {
          "type": "text",
          "value": "D. CHANGE Column\nRename column and/or change datatype\nALTER TABLE employee\nCHANGE emp_name employee_name VARCHAR(100);\n\nResult: emp_name → employee_name\n\n-----------------------------------------------"
        },
        {
          "type": "text",
          "value": "E. RENAME Table\nRename table name\nRENAME TABLE employee TO employee_details;\n\nOR\n\nALTER TABLE employee\nRENAME TO employee_details;\n\n-----------------------------------------------"
        },
        {
          "type": "text",
          "value": "TRUNCATE TABLE\nDeletes all rows but table structure remains.\nTRUNCATE TABLE employee_details;\n\nResult:\n• Data deleted\n• Table exists\n\n-----------------------------------------------"
        },
        {
          "type": "text",
          "value": "DROP TABLE\nDeletes complete table with data.\nDROP TABLE employee_details;\n\nResult:\n• Table deleted permanently\n\n-----------------------------------------------"
        },
        {
          "type": "text",
          "value": "DROP DATABASE\nDeletes complete database.\nDROP DATABASE company_db;"
        },
        {
          "type": "table",
          "headers": ["Command", "Purpose"],
          "rows": [
            ["CREATE DATABASE", "Create database"],
            ["CREATE TABLE", "Create table"],
            ["INSERT", "Insert records"],
            ["SELECT", "View data"],
            ["ALTER ADD", "Add column"],
            ["ALTER DROP", "Delete column"],
            ["ALTER MODIFY", "Modify datatype"],
            ["ALTER CHANGE", "Rename/change column"],
            ["RENAME TABLE", "Rename table"],
            ["TRUNCATE", "Delete all rows only"],
            ["DROP TABLE", "Delete table completely"],
            ["DROP DATABASE", "Delete database completely"]
          ]
        }
      ],
      "questions": [
        {
          "question": "What happens to the data when you run TRUNCATE TABLE?",
          "answer": "All data (rows) are deleted, but the table structure and its columns remain intact for future use."
        },
        {
          "question": "What is the difference between DROP TABLE and TRUNCATE TABLE?",
          "answer": "DROP TABLE removes the entire table and its structure permanently from the database. TRUNCATE TABLE only removes the data rows, keeping the structure."
        },
        {
          "question": "How do you change both a column name and its data type at once?",
          "answer": "By using the ALTER TABLE CHANGE command."
        }
      ]
    },
    {
      "id": "sql-alter-table-syntax",
      "title": "ALTER TABLE Commands Syntax",
      "category": "Basic",
      "definition": "The ALTER TABLE statement is used to add, delete, or modify columns in an existing table, as well as to rename columns or the table itself.",
      "sections": [
        {
          "type": "text",
          "value": "1. ADD\nUsed to add a new column to a table.\n\nSyntax:\nALTER TABLE table_name\nADD COLUMN column_name datatype;\n\nExample:\nALTER TABLE employee\nADD COLUMN email VARCHAR(50);\n\n-----------------------------------------------"
        },
        {
          "type": "text",
          "value": "2. DROP\nUsed to delete a column from a table.\n\nSyntax:\nALTER TABLE table_name\nDROP COLUMN column_name;\n\nExample:\nALTER TABLE employee\nDROP COLUMN email;\n\n-----------------------------------------------"
        },
        {
          "type": "text",
          "value": "3. RENAME\nUsed to rename an existing column.\n\nSyntax:\nALTER TABLE table_name\nRENAME COLUMN old_column_name TO new_column_name;\n\nExample:\nALTER TABLE employee\nRENAME COLUMN emp_name TO employee_name;\n\n-----------------------------------------------"
        },
        {
          "type": "text",
          "value": "4. MODIFY\nUsed to change datatype/size of a column.\n\nSyntax:\nALTER TABLE table_name\nMODIFY COLUMN column_name new_datatype;\n\nExample:\nALTER TABLE employee\nMODIFY COLUMN emp_name VARCHAR(100);\n\n-----------------------------------------------"
        },
        {
          "type": "text",
          "value": "5. CHANGE\nUsed to rename a column and change its datatype at the same time.\n\nSyntax:\nALTER TABLE table_name\nCHANGE current_column_name new_column_name datatype;\n\nExample:\nALTER TABLE employee\nCHANGE emp_name employee_name VARCHAR(100);"
        },
        {
          "type": "table",
          "headers": ["Command", "Purpose"],
          "rows": [
            ["ADD", "Add new column"],
            ["DROP", "Delete column"],
            ["RENAME", "Rename column only"],
            ["MODIFY", "Change datatype only"],
            ["CHANGE", "Rename + datatype change"]
          ]
        }
      ],
      "questions": [
        {
          "question": "What is the key difference between MODIFY and CHANGE in MySQL?",
          "answer": "MODIFY allows you to change the data type of a column without renaming it. CHANGE requires you to specify a new column name, effectively allowing you to rename and modify the type simultaneously."
        },
        {
          "question": "How do you add multiple columns in a single ALTER TABLE statement?",
          "answer": "You can use commas to separate multiple ADD clauses: ALTER TABLE table_name ADD col1 type, ADD col2 type;"
        },
        {
          "question": "Is the COLUMN keyword mandatory in ALTER TABLE DROP?",
          "answer": "In most SQL dialects like MySQL, you can use 'DROP column_name' or 'DROP COLUMN column_name' interchangeably."
        }
      ]
    },
    {
      "id": "sql-dql-select",
      "title": "DQL (Data Query Language) - SELECT",
      "category": "Basic",
      "definition": "DQL is used to retrieve/fetch data from database tables. The primary command used in DQL is SELECT.",
      "sections": [
        {
          "type": "text",
          "value": "Command Used in DQL:\n• SELECT: Fetches data from table\n\n-----------------------------------------------"
        },
        {
          "type": "text",
          "value": "Employee Table Data Preparation:\n\nCREATE TABLE employee(\n    emp_id INT,\n    emp_name VARCHAR(50),\n    salary DECIMAL(10,2),\n    department VARCHAR(30)\n);\n\nINSERT INTO employee VALUES\n(101, 'Ravi', 45000, 'HR'),\n(102, 'Sita', 55000, 'IT'),\n(103, 'Kiran', 60000, 'Finance'),\n(104, 'Anu', 48000, 'Marketing'),\n(105, 'Rahul', 70000, 'IT');\n\n-----------------------------------------------"
        },
        {
          "type": "text",
          "value": "SELECT Statement Syntax:\n\nSELECT column_name FROM table_name;\n\nOR\n\nSELECT * FROM table_name;\n\n-----------------------------------------------"
        },
        {
          "type": "text",
          "value": "Example 1: View All Data\nSELECT * FROM employee;"
        },
        {
          "type": "output",
          "value": "emp_id\temp_name\tsalary\tdepartment\n101\tRavi\t45000\tHR\n102\tSita\t55000\tIT\n103\tKiran\t60000\tFinance\n104\tAnu\t48000\tMarketing\n105\tRahul\t70000\tIT"
        },
        {
          "type": "text",
          "value": "Example 2: View Specific Columns\nSELECT emp_name, salary FROM employee;"
        },
        {
          "type": "output",
          "value": "emp_name\tsalary\nRavi\t45000\nSita\t55000\nKiran\t60000\nAnu\t48000\nRahul\t70000"
        },
        {
          "type": "text",
          "value": "Example 3: Using WHERE Condition\nSELECT * FROM employee WHERE department = 'IT';"
        },
        {
          "type": "output",
          "value": "emp_id\temp_name\tsalary\tdepartment\n102\tSita\t55000\tIT\n105\tRahul\t70000\tIT"
        },
        {
          "type": "text",
          "value": "Example 4: Salary Greater Than 50000\nSELECT emp_name, salary FROM employee WHERE salary > 50000;"
        },
        {
          "type": "output",
          "value": "emp_name\tsalary\nSita\t55000\nKiran\t60000\nRahul\t70000"
        },
        {
          "type": "text",
          "value": "Example 5: Display Only Employee Names\nSELECT emp_name FROM employee;"
        },
        {
          "type": "output",
          "value": "emp_name\nRavi\nSita\nKiran\nAnu\nRahul"
        },
        {
          "type": "text",
          "value": "Important Points:\n• SELECT * → displays all columns\n• WHERE → filters rows\n• DQL only retrieves data\n• Does not modify table data"
        }
      ],
      "questions": [
        {
          "question": "What is the purpose of DQL in SQL?",
          "answer": "DQL (Data Query Language) is used specifically for fetching or retrieving data from the database without modifying the actual data or structure."
        },
        {
          "question": "What does 'SELECT *' represent?",
          "answer": "The asterisk (*) acts as a wildcard that tells SQL to retrieve all columns from the specified table."
        },
        {
          "question": "How do you filter specific records in a SELECT query?",
          "answer": "By using the WHERE clause followed by a condition (e.g., WHERE department = 'IT')."
        }
      ]
    },
    {
      "id": "sql-filtering-data",
      "title": "Filtering Data in SQL",
      "category": "Queries",
      "definition": "Filtering data means retrieving only the required records from a table using conditions.",
      "sections": [
        {
          "type": "text",
          "value": "Employee Table Setup:\n\nCREATE TABLE employee (\n    emp_id INT,\n    emp_name VARCHAR(50),\n    department VARCHAR(30),\n    salary INT,\n    city VARCHAR(30),\n    experience INT\n);\n\nINSERT INTO employee VALUES\n(101, 'Asha', 'HR', 35000, 'Hyderabad', 2),\n(102, 'Ravi', 'IT', 50000, 'Vijayawada', 5),\n(103, 'Sneha', 'Finance', 45000, 'Chennai', 4),\n(104, 'Kiran', 'IT', 60000, 'Bangalore', 6),\n(105, 'Meena', 'HR', 30000, 'Hyderabad', 1),\n(106, 'Arjun', 'Sales', 40000, 'Mumbai', 3),\n(107, 'Divya', 'IT', 70000, 'Delhi', 8),\n(108, 'Rahul', 'Finance', 48000, 'Pune', 4),\n(109, 'Pooja', 'Sales', 38000, 'Chennai', 2),\n(110, 'Vikas', 'IT', 55000, 'Hyderabad', 5);\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "1. WHERE Clause\nSyntax: SELECT * FROM table_name WHERE condition;\n\nExample: SELECT * FROM employee WHERE department = 'IT';"
        },
        {
          "type": "output",
          "value": "emp_id  emp_name  department  salary  city        experience\n102     Ravi      IT          50000   Vijayawada  5\n104     Kiran     IT          60000   Bangalore   6\n107     Divya     IT          70000   Delhi       8\n110     Vikas     IT          55000   Hyderabad   5\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "2. AND Operator\nSyntax: SELECT * FROM table_name WHERE condition1 AND condition2;\n\nExample: SELECT * FROM employee WHERE department = 'IT' AND salary > 55000;"
        },
        {
          "type": "output",
          "value": "emp_id  emp_name  department  salary  city        experience\n104     Kiran     IT          60000   Bangalore   6\n107     Divya     IT          70000   Delhi       8\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "3. OR Operator\nSyntax: SELECT * FROM table_name WHERE condition1 OR condition2;\n\nExample: SELECT * FROM employee WHERE city = 'Chennai' OR city = 'Mumbai';"
        },
        {
          "type": "output",
          "value": "emp_id  emp_name  department  salary  city      experience\n103     Sneha     Finance     45000   Chennai   4\n106     Arjun     Sales       40000   Mumbai    3\n109     Pooja     Sales       38000   Chennai   2\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "4. NOT Operator\nSyntax: SELECT * FROM table_name WHERE NOT condition;\n\nExample: SELECT * FROM employee WHERE NOT department = 'HR';"
        },
        {
          "type": "output",
          "value": "emp_id  emp_name  department  salary  city        experience\n102     Ravi      IT          50000   Vijayawada  5\n103     Sneha     Finance     45000   Chennai     4\n104     Kiran     IT          60000   Bangalore   6\n106     Arjun     Sales       40000   Mumbai      3\n107     Divya     IT          70000   Delhi       8\n108     Rahul     Finance     48000   Pune        4\n109     Pooja     Sales       38000   Chennai     2\n110     Vikas     IT          55000   Hyderabad   5\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "5. BETWEEN Operator\nSyntax: SELECT * FROM table_name WHERE column_name BETWEEN value1 AND value2;\n\nExample: SELECT * FROM employee WHERE salary BETWEEN 40000 AND 60000;"
        },
        {
          "type": "output",
          "value": "emp_id  emp_name  department  salary  city        experience\n102     Ravi      IT          50000   Vijayawada  5\n103     Sneha     Finance     45000   Chennai     4\n104     Kiran     IT          60000   Bangalore   6\n106     Arjun     Sales       40000   Mumbai      3\n108     Rahul     Finance     48000   Pune        4\n110     Vikas     IT          55000   Hyderabad   5\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "6. IN Operator\nSyntax: SELECT * FROM table_name WHERE column_name IN (value1, value2);\n\nExample: SELECT * FROM employee WHERE city IN ('Hyderabad', 'Delhi');"
        },
        {
          "type": "output",
          "value": "emp_id  emp_name  department  salary  city        experience\n101     Asha      HR          35000   Hyderabad   2\n105     Meena     HR          30000   Hyderabad   1\n107     Divya     IT          70000   Delhi       8\n110     Vikas     IT          55000   Hyderabad   5\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "7. LIKE Operator & Wildcards\nSyntax: SELECT * FROM table_name WHERE column_name LIKE pattern;\n\n% → Any number of characters\n_ → Single character\n\nExample 1 (%): SELECT * FROM employee WHERE city LIKE '%bad';\nExample 2 (_): SELECT * FROM employee WHERE emp_name LIKE 'R____';"
        },
        {
          "type": "output",
          "value": "Example 1 Output:\nemp_id  emp_name  department  salary  city        experience\n101     Asha      HR          35000   Hyderabad   2\n105     Meena     HR          30000   Hyderabad   1\n110     Vikas     IT          55000   Hyderabad   5\n\nExample 2 Output:\nemp_id  emp_name  department  salary  city        experience\n102     Ravi      IT          50000   Vijayawada  5\n108     Rahul     Finance     48000   Pune        4\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "8. LIMIT Clause\nSyntax: SELECT * FROM table_name LIMIT number;\n\nExample: SELECT * FROM employee LIMIT 5;"
        },
        {
          "type": "output",
          "value": "emp_id  emp_name  department  salary  city        experience\n101     Asha      HR          35000   Hyderabad   2\n102     Ravi      IT          50000   Vijayawada  5\n103     Sneha     Finance     45000   Chennai     4\n104     Kiran     IT          60000   Bangalore   6\n105     Meena     HR          30000   Hyderabad   1"
        }
      ],
      "questions": [
        {
          "question": "What is the difference between AND and OR operators?",
          "answer": "The AND operator requires all conditions to be true to return a record, whereas the OR operator returns a record if at least one of the conditions is true.\n\n-----------------"
        },
        {
          "question": "How do you search for a name starting with 'A' using LIKE?",
          "answer": "Using the query: SELECT * FROM table WHERE name LIKE 'A%';\n\n-----------------"
        },
        {
          "question": "Is the range in the BETWEEN operator inclusive?",
          "answer": "Yes, the BETWEEN operator includes both the start and end values in the range.\n\n-----------------"
        },
        {
          "question": "How do you fetch only the first 5 records of a table?",
          "answer": "By using the LIMIT clause: SELECT * FROM table LIMIT 5;"
        }
      ]
    },
    {
      "id": "sql-filtering-concepts",
      "title": "SQL Filtering Concepts",
      "category": "Basic",
      "definition": "Filtering data means retrieving only the required records from a table using conditions. This module covers the conceptual definitions of various filtering operators.",
      "sections": [
        {
          "type": "text",
          "value": "1. WHERE Clause\nThe WHERE clause is used to filter records based on a condition.\n• Returns only matching rows\n• Used with SELECT, UPDATE, and DELETE\n• Helps retrieve specific data from a table\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "2. AND Operator\nThe AND operator is used to combine multiple conditions.\n• All conditions must be TRUE\n• Returns records only if every condition matches\n• Used for more specific filtering\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "3. OR Operator\nThe OR operator is used to combine multiple conditions.\n• At least one condition must be TRUE\n• Returns records if any condition matches\n• Used for alternative filtering conditions\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "4. NOT Operator\nThe NOT operator is used to exclude records that match a condition.\n• Reverses the condition\n• Returns records that do not satisfy the condition\n• Used for negative filtering\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "5. BETWEEN Operator\nThe BETWEEN operator is used to filter data within a range.\n• Includes both starting and ending values\n• Works with numbers, dates, and text\n• Useful for ranges like marks, salary, age, dates\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "6. IN Operator\nThe IN operator is used to match multiple values in a condition.\n• Simplifies multiple OR conditions\n• Checks whether a value exists in a list\n• Makes queries shorter and cleaner\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "7. LIKE Operator\nThe LIKE operator is used for pattern matching.\n• Searches for specific patterns in text\n• Mostly used with character/string data\n• Works together with wildcards\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "8. Wildcards\nWildcards are special symbols used with the LIKE operator for pattern searching.\nCommon wildcards:\n• % → Represents zero, one, or many characters\n• _ → Represents a single character\n\nUsed to search names, find partial matches, and filter text patterns.\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "9. LIMIT Clause\nThe LIMIT clause is used to restrict the number of rows returned.\n• Returns only a specific number of records\n• Useful for large datasets\n• Commonly used for pagination and top results"
        }
      ],
      "questions": [
        {
          "question": "What is the primary purpose of the WHERE clause?",
          "answer": "To filter records in a database table based on specific conditions.\n\n-----------------"
        },
        {
          "question": "Which wildcard represents a single character in a LIKE pattern?",
          "answer": "The underscore (_) wildcard represents a single character.\n\n-----------------"
        },
        {
          "question": "When would you use the BETWEEN operator?",
          "answer": "When you need to filter data within a specific range, such as a range of salaries or dates."
        }
      ]
    },
    {
      "id": "sql-joins",
      "title": "SQL Joins",
      "category": "Queries",
      "definition": "A JOIN clause is used to combine rows from two or more tables, based on a related column between them.",
      "sections": [
        {
          "type": "text",
          "value": "Joins allow you to retrieve data from multiple tables in a single query by establishing relationships."
        },
        {
          "type": "text",
          "value": "Syntax:\nSELECT columns FROM t1 INNER JOIN t2 ON t1.id = t2.id;"
        },
        {
          "type": "code",
          "value": "SELECT Orders.OrderID, Customers.CustomerName\nFROM Orders\nINNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;"
        },
        {
          "type": "output",
          "value": "OrderID | CustomerName\n10308   | Ana Trujillo"
        },
        {
          "type": "text",
          "value": "Quick Revision:\n• Inner: Matching Only\n• Left: All Left + Matches\n• Right: All Right + Matches"
        }
      ],
      "questions": [
        {
          "question": "What is a SQL Join?",
          "answer": "A clause used to combine rows from two or more tables based on a related column between them."
        },
        {
          "question": "What is an Inner Join?",
          "answer": "An Inner Join returns only the records that have matching values in both tables."
        },
        {
          "question": "What is a Left Join?",
          "answer": "A Left Join returns all records from the left table, and the matched records from the right table."
        }
      ]
    }
  ],
  "dsa": [
    {
      "id": "linked-list-basics",
      "title": "Linked List Basics",
      "category": "Data Structures",
      "definition": "A linked list is a linear data structure where elements are not stored at contiguous memory locations.",
      "sections": [
        {
          "type": "text",
          "value": "Each element (node) contains data and a pointer to the next node."
        },
        {
          "type": "text",
          "value": "Syntax:\nclass Node:\n    def __init__(self, data):\n        self.data = data\n        self.next = None"
        },
        {
          "type": "code",
          "value": "node1 = Node(10)\nnode2 = Node(20)\nnode1.next = node2"
        },
        {
          "type": "output",
          "value": "node1.next.data -> 20"
        },
        {
          "type": "text",
          "value": "Quick Revision:\n• Structure: Node-based\n• Memory: Non-contiguous\n• Size: Dynamic"
        }
      ],
      "questions": [
        {
          "question": "What is a linked list?",
          "answer": "A linear data structure where elements are not stored at contiguous memory locations."
        },
        {
          "question": "What does a node contain?",
          "answer": "A node contains data and a reference (pointer) to the next node in the sequence."
        },
        {
          "question": "Difference between Array and Linked List?",
          "answer": "Arrays have fixed sizes and contiguous memory; Linked Lists have dynamic sizes and use pointers to connect non-contiguous memory."
        }
      ]
    }
  ],
  "aws": [
    {
      "id": "ec2-instances",
      "title": "Amazon EC2",
      "category": "Compute",
      "definition": "Amazon Elastic Compute Cloud (EC2) provides scalable computing capacity in the AWS Cloud.",
      "sections": [
        {
          "type": "text",
          "value": "It allows users to rent virtual computers (instances) to run their own applications with full root access."
        },
        {
          "type": "text",
          "value": "Usage:\nEC2 instances can be managed via the AWS Management Console, CLI, or SDKs."
        },
        {
          "type": "code",
          "value": "aws ec2 run-instances --image-id ami-12345 --count 1"
        },
        {
          "type": "output",
          "value": "Instance i-0123456789abcdef0 started."
        },
        {
          "type": "text",
          "value": "Quick Revision:\n• Service: Compute (IaaS)\n• Scaling: Horizontal & Vertical\n• Pricing: Pay-as-you-go"
        }
      ],
      "questions": [
        {
          "question": "What is Amazon EC2?",
          "answer": "A web service that provides secure, resizable compute capacity in the cloud."
        },
        {
          "question": "What is an instance type?",
          "answer": "A specific configuration of CPU, memory, storage, and networking capacity tailored for different workloads."
        },
        {
          "question": "What is an AMI?",
          "answer": "An Amazon Machine Image (AMI) provides the information required to launch an instance, including OS and application software."
        }
      ]
    }
  ],
  "api": [
    {
      "id": "api-basics",
      "title": "REST API Fundamentals",
      "category": "Basic",
      "definition": "REST (Representational State Transfer) is an architectural style for providing standards between computer systems on the web.",
      "sections": [
        {
          "type": "text",
          "value": "Key concepts: Resources, HTTP Methods (GET, POST, PUT, DELETE), and Status Codes."
        }
      ],
      "questions": [
        {
          "question": "What are the main HTTP methods used in REST APIs?",
          "answer": "GET (Read), POST (Create), PUT (Update), PATCH (Partial Update), and DELETE (Delete)."
        },
        {
          "question": "What does a 404 Status Code mean?",
          "answer": "It means 'Not Found' - the server could not find the requested resource."
        },
        {
          "question": "What is the difference between PUT and PATCH?",
          "answer": "PUT is used to replace an entire resource, while PATCH is used to apply partial modifications to a resource."
        }
      ]
    },
    {
      "id": "rest-api-basics",
      "title": "REST API Concepts",
      "category": "Web Services",
      "definition": "REST (Representational State Transfer) is an architectural style for providing standards between computer systems on the web.",
      "sections": [
        {
          "type": "text",
          "value": "REST (Representational State Transfer) uses HTTP methods like GET, POST, PUT, DELETE to interact with resources in a stateless manner."
        },
        {
          "type": "text",
          "value": "HTTP Methods:\n• GET: Retrieve data\n• POST: Create data\n• PUT: Update data\n• DELETE: Remove data"
        },
        {
          "type": "code",
          "value": "import requests\nresponse = requests.get(\"https://api.example.com/data\")\nprint(response.json())"
        },
        {
          "type": "output",
          "value": "{\"status\": \"success\", \"data\": [. .]}"
        },
        {
          "type": "text",
          "value": "Quick Revision:\n• Protocol: HTTP\n• Format: JSON/XML\n• Nature: Stateless"
        }
      ],
      "questions": [
        {
          "question": "What is REST?",
          "answer": "An architectural style for providing standards between computer systems on the web, using HTTP methods."
        },
        {
          "question": "Name common HTTP methods.",
          "answer": "GET (Retrieve), POST (Create), PUT (Update), PATCH (Partial Update), and DELETE (Remove)."
        },
        {
          "question": "Is REST stateless?",
          "answer": "Yes, each request from client to server must contain all the information necessary to understand and complete the request."
        }
      ]
    }
  ],
  "coding": [
    {
      "id": "coding-patterns",
      "title": "Essential Coding Patterns",
      "category": "Basic",
      "definition": "Coding patterns are reusable solutions to common algorithmic problems encountered in technical interviews.",
      "sections": [
        {
          "type": "text",
          "value": "Common patterns: Sliding Window, Two Pointers, Fast & Slow Pointers, Merge Intervals."
        }
      ],
      "questions": [
        {
          "question": "What is the Sliding Window pattern?",
          "answer": "It is used to perform operations on a specific window size of an array or string to reduce time complexity from O(N²) to O(N)."
        },
        {
          "question": "When should you use the Two Pointers approach?",
          "answer": "It's typically used on sorted arrays or linked lists where you need to find a pair or sub-segment that meets certain criteria."
        },
        {
          "question": "What is the Fast and Slow Pointers algorithm used for?",
          "answer": "It is primarily used to detect cycles in a linked list or to find the middle element of a list."
        }
      ]
    },
    {
      "id": "two-sum-problem",
      "title": "Two Sum Problem",
      "category": "Algorithms",
      "definition": "Given an array of integers and a target, return indices of the two numbers such that they add up to target.",
      "sections": [
        {
          "type": "text",
          "value": "Given an array of integers and a target, find two numbers that add up to the target and return their indices."
        },
        {
          "type": "text",
          "value": "Strategy:\nUse a Hash Map to store seen numbers and their indices for O(n) time complexity."
        },
        {
          "type": "code",
          "value": "def twoSum(nums, target):\n    prevMap = {} # val : index\n    for i, n in enumerate(nums):\n        diff = target - n\n        if diff in prevMap:\n            return [prevMap[diff], i]\n        prevMap[n] = i"
        },
        {
          "type": "output",
          "value": "nums = [2,7,11,15], target = 9 -> [0,1]"
        },
        {
          "type": "text",
          "value": "Quick Revision:\n• Best Approach: Hash Map\n• Time: O(n)\n• Space: O(n)"
        }
      ],
      "questions": [
        {
          "question": "What is the time complexity of the hash map approach for Two Sum?",
          "answer": "O(n), as we only traverse the list once and hash map lookups are O(1) on average."
        },
        {
          "question": "What is the space complexity?",
          "answer": "O(n) because in the worst case, we might store every element in the hash map."
        },
        {
          "question": "Can it be solved with two pointers?",
          "answer": "Yes, but only if the array is sorted. If unsorted, sorting it first makes the complexity O(n log n)."
        },
        {
          "question": "Can we solve it in O(1) space?",
          "answer": "Yes, by sorting the array and using two pointers, but time complexity becomes O(n log n)."
        }
      ]
    }
  ],
  "ml": [
    {
      "id": "ml-intro",
      "title": "Introduction to Machine Learning",
      "category": "Basic",
      "definition": "Machine Learning is a subset of AI that focuses on building systems that learn from data to make predictions or decisions.",
      "sections": [
        {
          "type": "text",
          "value": "Machine Learning types: Supervised, Unsupervised, and Reinforcement Learning."
        }
      ],
      "questions": [
        {
          "question": "What are the three main types of Machine Learning?",
          "answer": "Supervised Learning (learning from labeled data), Unsupervised Learning (finding patterns in unlabeled data), and Reinforcement Learning (learning through rewards/punishments)."
        },
        {
          "question": "What is the difference between Classification and Regression?",
          "answer": "Classification predicts a discrete label or category (e.g., Spam or Not Spam), while Regression predicts a continuous numerical value (e.g., Housing Prices)."
        },
        {
          "question": "What is Overfitting?",
          "answer": "Overfitting occurs when a model learns the training data too well, including its noise and outliers, causing it to perform poorly on new, unseen data."
        }
      ]
    }
  ],
  "flask": [
    {
      "id": "flask-intro",
      "title": "Introduction to Flask",
      "category": "Basic",
      "definition": "Flask is a lightweight WSGI web application framework in Python, designed to make getting started quick and easy.",
      "sections": [
        {
          "type": "text",
          "value": "Flask follows the micro-framework philosophy, providing the essentials while being highly extensible."
        }
      ],
      "questions": [
        {
          "question": "What is Flask?",
          "answer": "Flask is a micro-framework for Python that provides the core essentials for web development without forcing a specific project structure."
        },
        {
          "question": "How do you define a route in Flask?",
          "answer": "Using the @app.route('/') decorator above a function to map a URL to that specific function."
        },
        {
          "question": "What is the purpose of the 'render_template' function?",
          "answer": "It is used to render HTML files using the Jinja2 engine, allowing you to pass dynamic data from Python to your web pages."
        }
      ]
    }
  ]
};

export const technologies = [
  {
    "id": "python",
    "name": "Python",
    "icon": "SiPython",
    "color": "#3776AB",
    "description": "Master Python OOP, Basic, File Handling, Exception Handling and Libraries for interviews."
  },
  {
    "id": "mysql",
    "name": "MySQL",
    "icon": "SiMysql",
    "color": "#4479A1",
    "description": "Advanced SQL queries, joins, indexing, and optimization techniques."
  },
  {
    "id": "dsa",
    "name": "DSA",
    "icon": "SiGraphql",
    "color": "#FF6F61",
    "description": "Algorithms and Data Structures from arrays to dynamic programming."
  },
  {
    "id": "aws",
    "name": "AWS",
    "icon": "SiAmazonaws",
    "color": "#FF9900",
    "description": "Cloud infrastructure, serverless, and core AWS services."
  },
  {
    "id": "api",
    "name": "API",
    "icon": "SiPostman",
    "color": "#FF6C37",
    "description": "RESTful services, authentication, and API design patterns."
  },
  {
    "id": "coding",
    "name": "Coding",
    "icon": "SiVisualstudiocode",
    "color": "#007ACC",
    "description": "Real-world coding problems and implementation best practices."
  },
  {
    "id": "ml",
    "name": "Machine Learning",
    "icon": "SiScikitlearn",
    "color": "#F7931E",
    "description": "Supervised learning, classification, regression, and model tuning."
  },
  {
    "id": "flask",
    "name": "Flask",
    "icon": "SiFlask",
    "color": "#000000",
    "description": "Web development with Python, routing, and RESTful service creation."
  }
];
