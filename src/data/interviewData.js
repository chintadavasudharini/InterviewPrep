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
      "id": "python-none",
      "title": "Python None",
      "category": "Basic",
      "definition": "None is a special constant in Python that represents the absence of a value or a null value. It is an object of its own data type, NoneType.",
      "sections": [
        {
          "type": "text",
          "value": "⭐ Understanding None\nNone is used to define a null variable or an object. It is not the same as 0, False, or an empty string. Variables can be assigned None to indicate 'no value', 'not set', or an 'empty result'."
        },
        {
          "type": "code",
          "value": "x = None\nprint(x)\nprint(type(x))"
        },
        {
          "type": "output",
          "value": "None\n<class 'NoneType'>"
        },
        {
          "type": "text",
          "value": "🔍 Comparing to None\nTo compare a value to None, you should always use the 'is' and 'is not' identity operators, rather than equality operators (==)."
        },
        {
          "type": "code",
          "value": "result = None\n\nif result is None:\n    print(\"No result yet\")\nelse:\n    print(\"Result is ready\")"
        },
        {
          "type": "output",
          "value": "No result yet"
        },
        {
          "type": "text",
          "value": "🔥 None in Boolean Context\nIn Python, None is considered 'Falsy'. When converted to a boolean, it returns False."
        },
        {
          "type": "code",
          "value": "print(bool(None))"
        },
        {
          "type": "output",
          "value": "False"
        },
        {
          "type": "text",
          "value": "⚙️ Functions and None\nIf a function does not have an explicit return statement, Python automatically returns None."
        },
        {
          "type": "code",
          "value": "def myfunc():\n    x = 5\n\nx = myfunc()\nprint(x)"
        },
        {
          "type": "output",
          "value": "None"
        },
        {
          "type": "text",
          "value": "👉 Critical Comparisons"
        },
        {
          "type": "table",
          "headers": [
            "Value",
            "Meaning"
          ],
          "rows": [
            [
              "None",
              "Absence of value (NoneType)"
            ],
            [
              "0",
              "The number zero (int)"
            ],
            [
              "False",
              "Boolean false (bool)"
            ],
            [
              "\"\"",
              "Empty string (str)"
            ],
            [
              "[]",
              "Empty list (list)"
            ]
          ]
        },
        {
          "type": "text",
          "value": "🎯 Real-Time Example\nChecking if a user has provided their name."
        },
        {
          "type": "code",
          "value": "name = None\n\nif name is None:\n    print(\"Please enter your name\")"
        },
        {
          "type": "output",
          "value": "Please enter your name"
        },
        {
          "type": "text",
          "value": "🚀 Quick Summary\n• Represents absence of value.\n• Data type: NoneType.\n• Use 'is None' for identity checks.\n• Functions without 'return' return None.\n• Considered False in boolean logic."
        }
      ],
      "questions": [
        {
          "question": "What is None in Python?",
          "answer": "None is a special constant representing the absence of a value or a null state. It is a singleton object of the NoneType class."
        },
        {
          "question": "Why is 'is None' preferred over '== None'?",
          "answer": "Since None is a singleton (only one instance exists in memory), identity comparison using 'is' is faster and more reliable than equality comparison using '=='."
        },
        {
          "question": "What does a function return if it lacks a return statement?",
          "answer": "Python functions implicitly return 'None' if no explicit return value is specified."
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
      "id": "python-collections",
      "title": "Python Collections (List, Tuple, Set, Dictionary)",
      "category": "Basic",
      "definition": "Python has 4 built-in data types used to store collections of data: List, Tuple, Set, and Dictionary.",
      "sections": [
        {
          "type": "text",
          "value": "Python has 4 built-in data types used to store collections of data:\n\n1. List []\nA list is:\n• Ordered\n• Changeable (mutable)\n• Allows duplicates"
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "fruits = [\"apple\", \"banana\", \"mango\"]\n\nprint(fruits)"
        },
        {
          "type": "output",
          "value": "['apple', 'banana', 'mango']"
        },
        {
          "type": "text",
          "value": "2. Tuple ()\nA tuple is:\n• Ordered\n• Unchangeable (immutable)\n• Allows duplicates"
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "colors = (\"red\", \"green\", \"blue\")\n\nprint(colors)"
        },
        {
          "type": "output",
          "value": "('red', 'green', 'blue')"
        },
        {
          "type": "text",
          "value": "3. Set {}\nA set is:\n• Unordered\n• No duplicates\n• Changeable"
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "numbers = {1, 2, 3, 4, 4, 5}\n\nprint(numbers)"
        },
        {
          "type": "output",
          "value": "{1, 2, 3, 4, 5}\n\n(duplicate 4 removed automatically)"
        },
        {
          "type": "text",
          "value": "4. Dictionary {key:value}\nA dictionary stores data in:\n• Key : Value pairs\n• Ordered (Python 3.7+)\n• Changeable\n• No duplicate keys"
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "student = {\n    \"name\": \"Rani\",\n    \"age\": 22,\n    \"course\": \"Python\"\n}\n\nprint(student)"
        },
        {
          "type": "output",
          "value": "{'name': 'Rani', 'age': 22, 'course': 'Python'}"
        },
        {
          "type": "text",
          "value": "Difference Between List, Tuple, Set, Dictionary"
        },
        {
          "type": "table",
          "headers": [
            "Feature",
            "List",
            "Tuple",
            "Set",
            "Dictionary"
          ],
          "rows": [
            [
              "Symbol",
              "[]",
              "()",
              "{}",
              "{key:value}"
            ],
            [
              "Ordered",
              "Yes",
              "Yes",
              "No",
              "Yes"
            ],
            [
              "Mutable",
              "Yes",
              "No",
              "Yes",
              "Yes"
            ],
            [
              "Duplicates",
              "Yes",
              "Yes",
              "No",
              "Keys No"
            ],
            [
              "Indexing",
              "Yes",
              "Yes",
              "No",
              "By Key"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Simple Example Using All Collections"
        },
        {
          "type": "code",
          "value": "# List\na = [1, 2, 3]\n\n# Tuple\nb = (4, 5, 6)\n\n# Set\nc = {7, 8, 9}\n\n# Dictionary\nd = {\"name\": \"Ram\", \"age\": 25}\n\nprint(a)\nprint(b)\nprint(c)\nprint(d)"
        },
        {
          "type": "output",
          "value": "[1, 2, 3]\n(4, 5, 6)\n{8, 9, 7}\n{'name': 'Ram', 'age': 25}"
        }
      ],
      "questions": [
        {
          "question": "What are the four main built-in collection data types in Python?",
          "answer": "List, Tuple, Set, and Dictionary."
        },
        {
          "question": "Which Python collection is unordered and does not allow duplicate members?",
          "answer": "A Set."
        },
        {
          "question": "What is the main difference between a List and a Tuple?",
          "answer": "Lists are mutable (can be changed), while Tuples are immutable (cannot be changed)."
        }
      ]
    },
    {
      "id": "python-list-details",
      "title": "Python - List",
      "category": "Basic",
      "definition": "Lists are used to store multiple items in a single variable. Lists are created using square brackets.",
      "sections": [
        {
          "type": "text",
          "value": "List Items\nList items are ordered, changeable, and allow duplicate values.\nList items are indexed, the first item has index [0], the second item has index [1] etc."
        },
        {
          "type": "text",
          "value": "Ordered\nWhen we say that lists are ordered, it means that the items have a defined order, and that order will not change.\nIf you add new items to a list, the new items will be placed at the end of the list.\nNote: There are some list methods that will change the order, but in general: the order of the items will not change."
        },
        {
          "type": "text",
          "value": "Changeable\nThe list is changeable, meaning that we can change, add, and remove items in a list after it has been created."
        },
        {
          "type": "text",
          "value": "Allow Duplicates\nSince lists are indexed, lists can have items with the same value:"
        },
        {
          "type": "text",
          "value": "List Length"
        },
        {
          "type": "code",
          "value": "thislist = [\"apple\", \"banana\", \"cherry\"]\nprint(len(thislist))"
        },
        {
          "type": "output",
          "value": "3"
        },
        {
          "type": "text",
          "value": "List Items - Data Types\nList items can be of any data type\nA list can contain different data types"
        },
        {
          "type": "text",
          "value": "type()\nFrom Python's perspective, lists are defined as objects with the data type 'list':\n<class 'list'>"
        },
        {
          "type": "text",
          "value": "The list() Constructor\nThe list() constructor is used to create a list in Python.\nSyntax\nlist(iterable)\niterable can be:\nstring\ntuple\nset\nrange\ndictionary\netc."
        },
        {
          "type": "text",
          "value": "Create List from Tuple"
        },
        {
          "type": "code",
          "value": "t = (1, 2, 3)\na = list(t)\nprint(a)"
        },
        {
          "type": "output",
          "value": "[1, 2, 3]"
        }
      ],
      "questions": [
        {
          "question": "How are lists created in Python?",
          "answer": "Lists are created using square brackets []."
        },
        {
          "question": "What does it mean that a list is 'ordered'?",
          "answer": "It means that the items have a defined order, and that order will not change unless specific methods are used."
        },
        {
          "question": "Can a Python list contain different data types?",
          "answer": "Yes, a list can contain items of any data type and can even mix different data types."
        }
      ]
    },
    {
      "id": "python-access-list-items",
      "title": "Python - Access List Items",
      "category": "Basic",
      "definition": "List items are indexed and you can access them by referring to the index number.",
      "sections": [
        {
          "type": "text",
          "value": "Access List Items\nList items are indexed and you can access them by referring to the index number\nNote: The first item has index 0."
        },
        {
          "type": "text",
          "value": "Negative Indexing\nNegative indexing means start from the end\n-1 refers to the last item, -2 refers to the second last item etc."
        },
        {
          "type": "text",
          "value": "Range of Indexes\nYou can specify a range of indexes by specifying where to start and where to end the range.\nWhen specifying a range, the return value will be a new list with the specified items."
        },
        {
          "type": "code",
          "value": "thislist = [\"apple\", \"banana\", \"cherry\", \"orange\", \"kiwi\", \"melon\", \"mango\"]\nprint(thislist[2:5])\nprint(thislist[:4])\nprint(thislist[2:])"
        },
        {
          "type": "output",
          "value": "['cherry', 'orange', 'kiwi']\n['apple', 'banana', 'cherry', 'orange']\n['cherry', 'orange', 'kiwi', 'melon', 'mango']"
        },
        {
          "type": "text",
          "value": "Return the third, fourth, and fifth item\nThe search will start at index 2 (included) and end at index 5 (not included)."
        },
        {
          "type": "text",
          "value": "Range of Negative Indexes\nSpecify negative indexes if you want to start the search from the end of the list:"
        },
        {
          "type": "code",
          "value": "thislist = [\"apple\", \"banana\", \"cherry\", \"orange\", \"kiwi\", \"melon\", \"mango\"]\nprint(thislist[-4:-1])"
        },
        {
          "type": "output",
          "value": "['orange', 'kiwi', 'melon']"
        },
        {
          "type": "text",
          "value": "returns the items from \"orange\" (-4) to, but NOT including \"mango\" (-1)"
        }
      ],
      "questions": [
        {
          "question": "What is the index of the first item in a Python list?",
          "answer": "The first item has index 0."
        },
        {
          "question": "What does negative indexing -1 refer to?",
          "answer": "It refers to the last item in the list."
        },
        {
          "question": "How do you specify a range of items from index 2 to 5 (not including 5)?",
          "answer": "By using the syntax list[2:5]."
        }
      ]
    },
    {
      "id": "python-change-list-items",
      "title": "Python – Change List Items",
      "category": "Basic",
      "definition": "Lists are mutable, which means you can change, update, or replace items after the list is created.",
      "sections": [
        {
          "type": "text",
          "value": "Change Single Item\nSyntax\nlist_name[index] = new_value"
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "fruits = [\"apple\", \"banana\", \"mango\"]\n\nfruits[1] = \"orange\"\n\nprint(fruits)"
        },
        {
          "type": "output",
          "value": "['apple', 'orange', 'mango']"
        },
        {
          "type": "text",
          "value": "Change Using Negative Index"
        },
        {
          "type": "code",
          "value": "fruits = [\"apple\", \"banana\", \"mango\"]\n\nfruits[-1] = \"grapes\"\n\nprint(fruits)"
        },
        {
          "type": "output",
          "value": "['apple', 'banana', 'grapes']"
        },
        {
          "type": "text",
          "value": "Change Range of Items\nSyntax\nlist[start:end] = [values]"
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "nums = [10, 20, 30, 40, 50]\n\nnums[1:3] = [200, 300]\n\nprint(nums)"
        },
        {
          "type": "output",
          "value": "[10, 200, 300, 40, 50]"
        },
        {
          "type": "text",
          "value": "Insert More Items Than Replaced"
        },
        {
          "type": "code",
          "value": "nums = [1, 2, 3]\n\nnums[1:2] = [20, 30, 40]\n\nprint(nums)"
        },
        {
          "type": "output",
          "value": "[1, 20, 30, 40, 3]"
        },
        {
          "type": "text",
          "value": "Replace Multiple Items with Fewer Items"
        },
        {
          "type": "code",
          "value": "nums = [1, 2, 3, 4, 5]\n\nnums[1:4] = [100]\n\nprint(nums)"
        },
        {
          "type": "output",
          "value": "[1, 100, 5]"
        },
        {
          "type": "text",
          "value": "Change All Items"
        },
        {
          "type": "code",
          "value": "colors = [\"red\", \"blue\", \"green\"]\n\ncolors[:] = [\"black\", \"white\", \"pink\"]\n\nprint(colors)"
        },
        {
          "type": "output",
          "value": "['black', 'white', 'pink']"
        },
        {
          "type": "text",
          "value": "Change Nested List Item"
        },
        {
          "type": "code",
          "value": "data = [[1, 2], [3, 4]]\n\ndata[1][0] = 100\n\nprint(data)"
        },
        {
          "type": "output",
          "value": "[[1, 2], [100, 4]]"
        },
        {
          "type": "text",
          "value": "Using Loop to Change Items"
        },
        {
          "type": "code",
          "value": "nums = [1, 2, 3, 4]\n\nfor i in range(len(nums)):\n    nums[i] = nums[i] * 2\n\nprint(nums)"
        },
        {
          "type": "output",
          "value": "[2, 4, 6, 8]"
        },
        {
          "type": "text",
          "value": "Important Points\n• Lists are mutable\n• Index starts from 0\n• Negative index starts from -1\n• Slicing excludes ending index\n• Multiple values can be replaced at once"
        }
      ],
      "questions": [
        {
          "question": "What does it mean that a list is mutable?",
          "answer": "It means you can change, update, or replace items after the list has been created."
        },
        {
          "question": "How can you change a range of items in a list?",
          "answer": "By using slicing: list[start:end] = [new_values]."
        },
        {
          "question": "How do you update a nested list item?",
          "answer": "By using multiple indices, e.g., list[outer_index][inner_index] = new_value."
        }
      ]
    },
    {
      "id": "python-add-list-items",
      "title": "Python – Add List Items",
      "category": "Basic",
      "definition": "You can add items to a list using different methods such as append(), insert(), and extend().",
      "sections": [
        {
          "type": "text",
          "value": "Methods to Add Items"
        },
        {
          "type": "table",
          "headers": [
            "Method",
            "Purpose"
          ],
          "rows": [
            [
              "append()",
              "Add one item at end"
            ],
            [
              "insert()",
              "Add item at specific position"
            ],
            [
              "extend()",
              "Add multiple items"
            ],
            [
              "+ operator",
              "Join lists"
            ]
          ]
        },
        {
          "type": "text",
          "value": "1. append()\n\nAdds one item at the end of the list.\n\nSyntax\nlist_name.append(value)"
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "fruits = [\"apple\", \"banana\"]\n\nfruits.append(\"mango\")\n\nprint(fruits)"
        },
        {
          "type": "output",
          "value": "['apple', 'banana', 'mango']"
        },
        {
          "type": "text",
          "value": "Add Number"
        },
        {
          "type": "code",
          "value": "nums = [1, 2, 3]\n\nnums.append(4)\n\nprint(nums)"
        },
        {
          "type": "output",
          "value": "[1, 2, 3, 4]"
        },
        {
          "type": "text",
          "value": "2. insert()\n\nAdds item at a specific index position.\n\nSyntax\nlist_name.insert(index, value)"
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "fruits = [\"apple\", \"mango\"]\n\nfruits.insert(1, \"banana\")\n\nprint(fruits)"
        },
        {
          "type": "output",
          "value": "['apple', 'banana', 'mango']"
        },
        {
          "type": "text",
          "value": "Insert at Beginning"
        },
        {
          "type": "code",
          "value": "nums = [20, 30]\n\nnums.insert(0, 10)\n\nprint(nums)"
        },
        {
          "type": "output",
          "value": "[10, 20, 30]"
        },
        {
          "type": "text",
          "value": "3. extend()\n\nAdds multiple items to the list.\n\nSyntax\nlist1.extend(list2)"
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "a = [1, 2]\nb = [3, 4]\n\na.extend(b)\n\nprint(a)"
        },
        {
          "type": "output",
          "value": "[1, 2, 3, 4]"
        },
        {
          "type": "text",
          "value": "Add Tuple Using extend()"
        },
        {
          "type": "code",
          "value": "nums = [1, 2]\n\nnums.extend((3, 4))\n\nprint(nums)"
        },
        {
          "type": "output",
          "value": "[1, 2, 3, 4]"
        },
        {
          "type": "text",
          "value": "4. Using + Operator"
        },
        {
          "type": "code",
          "value": "a = [1, 2]\nb = [3, 4]\n\nc = a + b\n\nprint(c)"
        },
        {
          "type": "output",
          "value": "[1, 2, 3, 4]"
        },
        {
          "type": "text",
          "value": "Add List Inside List"
        },
        {
          "type": "code",
          "value": "a = [1, 2]\n\na.append([3, 4])\n\nprint(a)"
        },
        {
          "type": "output",
          "value": "[1, 2, [3, 4]]"
        },
        {
          "type": "text",
          "value": "append() adds the entire list as a single element.\n\nDifference Between append() and extend()"
        },
        {
          "type": "table",
          "headers": [
            "append()",
            "extend()"
          ],
          "rows": [
            [
              "Adds one item",
              "Adds multiple items"
            ],
            [
              "List becomes nested if list added",
              "Adds elements individually"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "a = [1, 2]\nb = [3, 4]\n\na.append(b)\n\nprint(a)"
        },
        {
          "type": "output",
          "value": "[1, 2, [3, 4]]"
        },
        {
          "type": "code",
          "value": "a = [1, 2]\nb = [3, 4]\n\na.extend(b)\n\nprint(a)"
        },
        {
          "type": "output",
          "value": "[1, 2, 3, 4]"
        },
        {
          "type": "text",
          "value": "Add Multiple Items After a Specific Index in Python List\n\nYou can add multiple items after a specific index using slicing \n\nUsing Slicing \nSyntax\nlist[index+1:index+1] = [items]"
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "nums = [1, 2, 5, 6]\nnums[2:2] = [3, 4]\nprint(nums)"
        },
        {
          "type": "output",
          "value": "[1, 2, 3, 4, 5, 6]"
        },
        {
          "type": "text",
          "value": "Explanation\n• nums[2:2] → Insert at index 2\n• [3,4] → Multiple items added"
        },
        {
          "type": "text",
          "value": "Important Points\n• append() → adds one item\n• insert() → adds at specific position\n• extend() → adds multiple items\n• + joins lists\n• Lists are mutable (changeable)"
        }
      ],
      "questions": [
        {
          "question": "What is the difference between append() and extend() in Python lists?",
          "answer": "append() adds its argument as a single element to the end of a list, whereas extend() iterates over its argument adding each element to the list, extending the list."
        },
        {
          "question": "How do you insert an item at a specific position in a list?",
          "answer": "Using the insert() method: list.insert(index, element)."
        },
        {
          "question": "Can you use the + operator to join two lists?",
          "answer": "Yes, the + operator concatenates two lists and returns a new list."
        }
      ]
    },
    {
      "id": "python-remove-list-items",
      "title": "Python – Remove List Items",
      "category": "Basic",
      "definition": "You can remove items from a list using different methods such as remove(), pop(), clear(), and the del keyword.",
      "sections": [
        {
          "type": "text",
          "value": "Methods to Remove Items"
        },
        {
          "type": "table",
          "headers": [
            "Method",
            "Purpose"
          ],
          "rows": [
            [
              "remove()",
              "Remove specific value"
            ],
            [
              "pop()",
              "Remove using index"
            ],
            [
              "del",
              "Delete item or entire list"
            ],
            [
              "clear()",
              "Remove all items"
            ]
          ]
        },
        {
          "type": "text",
          "value": "1. remove()\n\nRemoves a specific value.\n\nSyntax\nlist_name.remove(value)"
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "fruits = [\"apple\", \"banana\", \"mango\"]\n\nfruits.remove(\"banana\")\n\nprint(fruits)"
        },
        {
          "type": "output",
          "value": "['apple', 'mango']"
        },
        {
          "type": "text",
          "value": "Important Point\n\nIf duplicate values exist, only the first occurrence is removed."
        },
        {
          "type": "code",
          "value": "nums = [1, 2, 2, 3]\n\nnums.remove(2)\n\nprint(nums)"
        },
        {
          "type": "output",
          "value": "[1, 2, 3]"
        },
        {
          "type": "text",
          "value": "2. pop()\n\nRemoves item using index.\n\nSyntax\nlist_name.pop(index)"
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "nums = [10, 20, 30, 40]\n\nnums.pop(1)\n\nprint(nums)"
        },
        {
          "type": "output",
          "value": "[10, 30, 40]"
        },
        {
          "type": "text",
          "value": "pop() Without Index\n\nRemoves last item."
        },
        {
          "type": "code",
          "value": "nums = [10, 20, 30]\n\nnums.pop()\n\nprint(nums)"
        },
        {
          "type": "output",
          "value": "[10, 20]"
        },
        {
          "type": "text",
          "value": "Store Removed Item"
        },
        {
          "type": "code",
          "value": "nums = [100, 200, 300]\n\nx = nums.pop()\n\nprint(x)\nprint(nums)"
        },
        {
          "type": "output",
          "value": "300\n[100, 200]"
        },
        {
          "type": "text",
          "value": "3. del Keyword\n\nDeletes item using index."
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "nums = [1, 2, 3, 4]\n\ndel nums[1]\n\nprint(nums)"
        },
        {
          "type": "output",
          "value": "[1, 3, 4]"
        },
        {
          "type": "text",
          "value": "Delete Multiple Items"
        },
        {
          "type": "code",
          "value": "nums = [10, 20, 30, 40, 50]\n\ndel nums[1:4]\n\nprint(nums)"
        },
        {
          "type": "output",
          "value": "[10, 50]"
        },
        {
          "type": "text",
          "value": "Delete Entire List"
        },
        {
          "type": "code",
          "value": "nums = [1, 2, 3]\n\ndel nums\n\n# After deleting, using nums gives error."
        },
        {
          "type": "text",
          "value": "4. clear()\n\nRemoves all items but keeps the list."
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "nums = [1, 2, 3]\n\nnums.clear()\n\nprint(nums)"
        },
        {
          "type": "output",
          "value": "[]"
        },
        {
          "type": "text",
          "value": "Difference Between remove() and pop()"
        },
        {
          "type": "table",
          "headers": [
            "remove()",
            "pop()"
          ],
          "rows": [
            [
              "Removes by value",
              "Removes by index"
            ],
            [
              "No return value",
              "Returns removed item"
            ],
            [
              "Error if value not found",
              "Error if index invalid"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Important Points\n• remove() → remove by value\n• pop() → remove by index\n• del → delete items or entire list\n• clear() → empty the list\n• Lists are mutable"
        }
      ],
      "questions": [
        {
          "question": "What is the difference between remove() and pop()?",
          "answer": "remove() removes the first occurrence of a specific value, while pop() removes an item at a specific index and returns it."
        },
        {
          "question": "What happens if you use pop() without an index?",
          "answer": "It removes and returns the last item in the list."
        },
        {
          "question": "How do you empty a list without deleting the list object itself?",
          "answer": "Using the clear() method: list.clear()."
        }
      ]
    },
    {
      "id": "python-loop-lists",
      "title": "Python – Loop Lists",
      "category": "Basic",
      "definition": "Looping through a list means accessing each item one by one using various methods provided by Python.",
      "sections": [
        {
          "type": "text",
          "value": "Looping through a list means accessing each item one by one.\n\nPython provides different ways to loop through lists."
        },
        {
          "type": "text",
          "value": "Example List"
        },
        {
          "type": "code",
          "value": "fruits = [\"apple\", \"banana\", \"mango\"]"
        },
        {
          "type": "text",
          "value": "1. Loop Using for Loop\n\nMost commonly used method.\n\nSyntax\nfor variable in list:\n    print(variable)"
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "fruits = [\"apple\", \"banana\", \"mango\"]\n\nfor i in fruits:\n    print(i)"
        },
        {
          "type": "output",
          "value": "apple\nbanana\nmango"
        },
        {
          "type": "text",
          "value": "2. Loop Using range() and len()\n\nUsed when index positions are needed."
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "fruits = [\"apple\", \"banana\", \"mango\"]\n\nfor i in range(len(fruits)):\n    print(i, fruits[i])"
        },
        {
          "type": "output",
          "value": "0 apple\n1 banana\n2 mango"
        },
        {
          "type": "text",
          "value": "Explanation"
        },
        {
          "type": "table",
          "headers": [
            "Part",
            "Meaning"
          ],
          "rows": [
            [
              "len(fruits)",
              "Total items"
            ],
            [
              "range()",
              "Generates indexes"
            ],
            [
              "fruits[i]",
              "Access item using index"
            ]
          ]
        },
        {
          "type": "text",
          "value": "3. Loop Using while Loop"
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "fruits = [\"apple\", \"banana\", \"mango\"]\n\ni = 0\n\nwhile i < len(fruits):\n    print(fruits[i])\n    i += 1"
        },
        {
          "type": "output",
          "value": "apple\nbanana\nmango"
        },
        {
          "type": "text",
          "value": "4. Loop Using List Comprehension\n\nShort method."
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "fruits = [\"apple\", \"banana\", \"mango\"]\n\n[print(i) for i in fruits]"
        },
        {
          "type": "output",
          "value": "apple\nbanana\nmango"
        },
        {
          "type": "text",
          "value": "5. Loop with Index and Value Using enumerate()\n\nenumerate() is used to get both:\n• index\n• value"
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "fruits = [\"apple\", \"banana\", \"mango\"]\n\nfor index, value in enumerate(fruits):\n    print(index, value)"
        },
        {
          "type": "output",
          "value": "0 apple\n1 banana\n2 mango"
        },
        {
          "type": "text",
          "value": "6. Nested Loop in Lists"
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "data = [[1, 2], [3, 4]]\n\nfor row in data:\n    for item in row:\n        print(item)"
        },
        {
          "type": "output",
          "value": "1\n2\n3\n4"
        },
        {
          "type": "text",
          "value": "Reverse Loop"
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "nums = [1, 2, 3, 4]\n\nfor i in reversed(nums):\n    print(i)"
        },
        {
          "type": "output",
          "value": "4\n3\n2\n1"
        },
        {
          "type": "text",
          "value": "Important Points\n• for loop is most commonly used\n• range(len(list)) gives indexes\n• while loop works using condition\n• enumerate() gives index + value\n• Nested loops work for nested lists"
        }
      ],
      "questions": [
        {
          "question": "What is the most common way to loop through a list in Python?",
          "answer": "Using a 'for' loop: for x in list: print(x)."
        },
        {
          "question": "How can you loop through a list and get both the index and the value at the same time?",
          "answer": "Using the enumerate() function: for index, value in enumerate(list): print(index, value)."
        },
        {
          "question": "How do you loop through a list in reverse order?",
          "answer": "By using the reversed() function: for x in reversed(list): print(x)."
        }
      ]
    },
    {
      "id": "python-enumerate",
      "title": "Python enumerate()",
      "category": "Basic",
      "definition": "enumerate() is used to get both the index and value while looping through a list or any iterable.",
      "sections": [
        {
          "type": "text",
          "value": "enumerate() is used to get both:\n• index\n• value\n\nwhile looping through a list (or any iterable)."
        },
        {
          "type": "text",
          "value": "Syntax\nenumerate(iterable, start)"
        },
        {
          "type": "table",
          "headers": [
            "Parameter",
            "Meaning"
          ],
          "rows": [
            [
              "iterable",
              "List, tuple, string, etc."
            ],
            [
              "start",
              "Starting index (optional)"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Without enumerate()"
        },
        {
          "type": "code",
          "value": "fruits = [\"apple\", \"banana\", \"mango\"]\n\nindex = 0\n\nfor i in fruits:\n    print(index, i)\n    index += 1"
        },
        {
          "type": "output",
          "value": "0 apple\n1 banana\n2 mango"
        },
        {
          "type": "text",
          "value": "Using enumerate()"
        },
        {
          "type": "code",
          "value": "fruits = [\"apple\", \"banana\", \"mango\"]\n\nfor index, value in enumerate(fruits):\n    print(index, value)"
        },
        {
          "type": "output",
          "value": "0 apple\n1 banana\n2 mango"
        },
        {
          "type": "text",
          "value": "Explanation"
        },
        {
          "type": "table",
          "headers": [
            "Variable",
            "Stores"
          ],
          "rows": [
            [
              "index",
              "Position number"
            ],
            [
              "value",
              "Actual item"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Start Index from 1"
        },
        {
          "type": "code",
          "value": "fruits = [\"apple\", \"banana\", \"mango\"]\n\nfor index, value in enumerate(fruits, start=1):\n    print(index, value)"
        },
        {
          "type": "output",
          "value": "1 apple\n2 banana\n3 mango"
        },
        {
          "type": "text",
          "value": "Convert enumerate Object to List"
        },
        {
          "type": "code",
          "value": "fruits = [\"apple\", \"banana\"]\n\nx = list(enumerate(fruits))\n\nprint(x)"
        },
        {
          "type": "output",
          "value": "[(0, 'apple'), (1, 'banana')]"
        },
        {
          "type": "text",
          "value": "Using enumerate() with String"
        },
        {
          "type": "code",
          "value": "name = \"Python\"\n\nfor index, value in enumerate(name):\n    print(index, value)"
        },
        {
          "type": "output",
          "value": "0 P\n1 y\n2 t\n3 h\n4 o\n5 n"
        },
        {
          "type": "text",
          "value": "Using enumerate() with Tuple"
        },
        {
          "type": "code",
          "value": "data = (10, 20, 30)\n\nfor index, value in enumerate(data):\n    print(index, value)"
        },
        {
          "type": "output",
          "value": "0 10\n1 20\n2 30"
        },
        {
          "type": "text",
          "value": "Important Points\n• enumerate() gives index + value\n• Commonly used with loops\n• Cleaner than manually increasing index\n• Returns an enumerate object\n• Default starting index is 0"
        }
      ],
      "questions": [
        {
          "question": "What parameters does the enumerate() function take?",
          "answer": "It takes an iterable (like a list or tuple) and an optional 'start' parameter to specify the beginning index."
        },
        {
          "question": "How do you start counting from 1 instead of 0 using enumerate()?",
          "answer": "By providing the start=1 argument: enumerate(iterable, start=1)."
        },
        {
          "question": "What type of object does enumerate() return?",
          "answer": "It returns an enumerate object, which is an iterator that yields tuples containing the index and the value."
        }
      ]
    },
    {
      "id": "python-list-comprehension",
      "title": "Python – List Comprehension",
      "category": "Basic",
      "definition": "List comprehension is a short and easy way to create lists using a single line of code.",
      "sections": [
        {
          "type": "text",
          "value": "List comprehension is a short and easy way to create lists using a single line of code.\n\nThe Syntax\nnewlist = [expression for item in iterable if condition == True]\nThe return value is a new list, leaving the old list unchanged."
        },
        {
          "type": "text",
          "value": "Syntax\n[new_value for item in iterable]"
        },
        {
          "type": "text",
          "value": "Basic Example"
        },
        {
          "type": "code",
          "value": "nums = [x for x in range(1, 6)]\n\nprint(nums)"
        },
        {
          "type": "output",
          "value": "[1, 2, 3, 4, 5]"
        },
        {
          "type": "text",
          "value": "Without List Comprehension"
        },
        {
          "type": "code",
          "value": "nums = []\n\nfor x in range(1, 6):\n    nums.append(x)\n\nprint(nums)"
        },
        {
          "type": "output",
          "value": "[1, 2, 3, 4, 5]"
        },
        {
          "type": "text",
          "value": "1. Square Numbers"
        },
        {
          "type": "code",
          "value": "nums = [x*x for x in range(1, 6)]\n\nprint(nums)"
        },
        {
          "type": "output",
          "value": "[1, 4, 9, 16, 25]"
        },
        {
          "type": "text",
          "value": "2. Even Numbers"
        },
        {
          "type": "code",
          "value": "even = [x for x in range(1, 11) if x % 2 == 0]\n\nprint(even)"
        },
        {
          "type": "output",
          "value": "[2, 4, 6, 8, 10]"
        },
        {
          "type": "text",
          "value": "Syntax with Condition\n[new_value for item in iterable if condition]"
        },
        {
          "type": "text",
          "value": "3. Odd Numbers"
        },
        {
          "type": "code",
          "value": "odd = [x for x in range(1, 11) if x % 2 != 0]\n\nprint(odd)"
        },
        {
          "type": "output",
          "value": "[1, 3, 5, 7, 9]"
        },
        {
          "type": "text",
          "value": "4. Convert Strings to Uppercase"
        },
        {
          "type": "code",
          "value": "fruits = [\"apple\", \"banana\", \"mango\"]\n\nnew = [x.upper() for x in fruits]\n\nprint(new)"
        },
        {
          "type": "output",
          "value": "['APPLE', 'BANANA', 'MANGO']"
        },
        {
          "type": "text",
          "value": "5. List Comprehension with if-else\nSyntax\n[value_if_true if condition else value_if_false for item in iterable]"
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "nums = [1, 2, 3, 4, 5]\n\nresult = [\"Even\" if x % 2 == 0 else \"Odd\" for x in nums]\n\nprint(result)"
        },
        {
          "type": "output",
          "value": "['Odd', 'Even', 'Odd', 'Even', 'Odd']"
        },
        {
          "type": "text",
          "value": "6. Using String in List Comprehension"
        },
        {
          "type": "code",
          "value": "name = \"python\"\n\nletters = [x for x in name]\n\nprint(letters)"
        },
        {
          "type": "output",
          "value": "['p', 'y', 't', 'h', 'o', 'n']"
        },
        {
          "type": "text",
          "value": "7. Nested List Comprehension"
        },
        {
          "type": "code",
          "value": "matrix = [[1, 2], [3, 4]]\n\nnums = [item for row in matrix for item in row]\n\nprint(nums)"
        },
        {
          "type": "output",
          "value": "[1, 2, 3, 4]"
        },
        {
          "type": "text",
          "value": "Important Points\n• Shorter and cleaner code\n• Used to create new lists\n• Can include conditions\n• Faster than normal loops in many cases\n• Very commonly asked in interviews"
        },
        {
          "type": "text",
          "value": "General Forms\n\nSimple\n[x for x in iterable]\n\nWith Condition\n[x for x in iterable if condition]\n\nWith if-else\n[value1 if condition else value2 for x in iterable]"
        }
      ],
      "questions": [
        {
          "question": "What is list comprehension in Python?",
          "answer": "It's a concise way to create lists using a single line of code, often as an alternative to traditional for loops."
        },
        {
          "question": "How do you add a condition to a list comprehension?",
          "answer": "By adding an 'if' statement at the end: [x for x in range(10) if x % 2 == 0]."
        },
        {
          "question": "Can you use if-else logic inside a list comprehension?",
          "answer": "Yes, but the syntax changes: [value_if_true if condition else value_if_false for item in iterable]."
        }
      ]
    },
    {
      "id": "python-sort-lists",
      "title": "Python – Sort Lists",
      "category": "Basic",
      "definition": "Sorting means arranging list items in ascending or descending order using sort() or sorted().",
      "sections": [
        {
          "type": "text",
          "value": "Sorting means arranging list items in:\n• Ascending order\n• Descending order\n\nPython provides:\n• sort()\n• sorted()"
        },
        {
          "type": "text",
          "value": "1. sort()\n\nsort() changes the original list.\n\nSyntax\nlist_name.sort()"
        },
        {
          "type": "text",
          "value": "Sort Numbers in Ascending Order"
        },
        {
          "type": "code",
          "value": "nums = [4, 1, 3, 2]\n\nnums.sort()\n\nprint(nums)"
        },
        {
          "type": "output",
          "value": "[1, 2, 3, 4]"
        },
        {
          "type": "text",
          "value": "Sort Strings Alphabetically"
        },
        {
          "type": "code",
          "value": "fruits = [\"mango\", \"apple\", \"banana\"]\n\nfruits.sort()\n\nprint(fruits)"
        },
        {
          "type": "output",
          "value": "['apple', 'banana', 'mango']"
        },
        {
          "type": "text",
          "value": "2. Descending Order\n\nUse reverse=True\n\nSyntax\nlist_name.sort(reverse=True)"
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "nums = [4, 1, 3, 2]\n\nnums.sort(reverse=True)\n\nprint(nums)"
        },
        {
          "type": "output",
          "value": "[4, 3, 2, 1]"
        },
        {
          "type": "text",
          "value": "Sort Strings in Reverse Alphabetical Order"
        },
        {
          "type": "code",
          "value": "fruits = [\"mango\", \"apple\", \"banana\"]\n\nfruits.sort(reverse=True)\n\nprint(fruits)"
        },
        {
          "type": "output",
          "value": "['mango', 'banana', 'apple']"
        },
        {
          "type": "text",
          "value": "3. Case-Sensitive Sorting\n\nUppercase letters come first."
        },
        {
          "type": "code",
          "value": "names = [\"banana\", \"Apple\", \"cat\"]\n\nnames.sort()\n\nprint(names)"
        },
        {
          "type": "output",
          "value": "['Apple', 'banana', 'cat']"
        },
        {
          "type": "text",
          "value": "Case-Insensitive Sorting\n\nUse key=str.lower"
        },
        {
          "type": "code",
          "value": "names = [\"banana\", \"Apple\", \"cat\"]\n\nnames.sort(key=str.lower)\n\nprint(names)"
        },
        {
          "type": "output",
          "value": "['Apple', 'banana', 'cat']"
        },
        {
          "type": "text",
          "value": "4. sorted() Function\n\nReturns a new sorted list.\n\nOriginal list remains unchanged.\n\nSyntax\nsorted(list_name)"
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "nums = [4, 1, 3, 2]\n\nnew = sorted(nums)\n\nprint(new)\nprint(nums)"
        },
        {
          "type": "output",
          "value": "[1, 2, 3, 4]\n[4, 1, 3, 2]"
        },
        {
          "type": "text",
          "value": "5. Sort by Length"
        },
        {
          "type": "code",
          "value": "words = [\"apple\", \"kiwi\", \"banana\"]\n\nwords.sort(key=len)\n\nprint(words)"
        },
        {
          "type": "output",
          "value": "['kiwi', 'apple', 'banana']"
        },
        {
          "type": "text",
          "value": "6. Custom Sorting\n\nSort based on last digit."
        },
        {
          "type": "code",
          "value": "nums = [23, 11, 45, 32]\n\nnums.sort(key=lambda x: x % 10)\n\nprint(nums)"
        },
        {
          "type": "output",
          "value": "[11, 32, 23, 45]"
        },
        {
          "type": "text",
          "value": "7. Reverse List (Not Sorting)\n\nreverse() only reverses current order."
        },
        {
          "type": "code",
          "value": "nums = [1, 2, 3]\n\nnums.reverse()\n\nprint(nums)"
        },
        {
          "type": "output",
          "value": "[3, 2, 1]"
        },
        {
          "type": "text",
          "value": "Difference Between sort() and sorted()"
        },
        {
          "type": "table",
          "headers": [
            "sort()",
            "sorted()"
          ],
          "rows": [
            [
              "Changes original list",
              "Creates new list"
            ],
            [
              "Works only on lists",
              "Works on any iterable"
            ],
            [
              "Faster",
              "Slightly slower"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Important Points\n• sort() modifies original list\n• sorted() returns new sorted list\n• reverse=True gives descending order\n• key= is used for custom sorting\n• reverse() only reverses order, not sort"
        }
      ],
      "questions": [
        {
          "question": "What is the difference between sort() and sorted()?",
          "answer": "sort() modifies the original list in place and returns None, whereas sorted() returns a new sorted list and leaves the original iterable unchanged."
        },
        {
          "question": "How do you sort a list in descending order?",
          "answer": "By passing the argument reverse=True to either the sort() method or the sorted() function."
        },
        {
          "question": "How can you perform a case-insensitive sort on a list of strings?",
          "answer": "By using the key argument with str.lower: list.sort(key=str.lower)."
        }
      ]
    },
    {
      "id": "python-custom-sorting",
      "title": "Python Custom Sorting Using key",
      "category": "Basic",
      "definition": "Custom sorting allows you to specify a function that determines the sorting criteria using the key parameter.",
      "sections": [
        {
          "type": "text",
          "value": "You can customize the sort order by providing a function to the key parameter."
        },
        {
          "type": "code",
          "value": "def myfunc(n):\n    return abs(n - 50)\n\nthislist = [100, 50, 65, 82, 23]\n\nthislist.sort(key = myfunc)\n\nprint(thislist)"
        },
        {
          "type": "output",
          "value": "[50, 65, 23, 82, 100]"
        },
        {
          "type": "text",
          "value": "Explanation\n\nThe list is sorted based on the distance from 50.\n\nFunction\ndef myfunc(n):\n    return abs(n - 50)\n\n• abs() returns positive value\n• Calculates how far each number is from 50"
        },
        {
          "type": "table",
          "headers": [
            "Number",
            "Calculation",
            "Result"
          ],
          "rows": [
            [
              "100",
              "abs(100 - 50)",
              "50"
            ],
            [
              "50",
              "abs(50 - 50)",
              "0"
            ],
            [
              "65",
              "abs(65 - 50)",
              "15"
            ],
            [
              "82",
              "abs(82 - 50)",
              "32"
            ],
            [
              "23",
              "abs(23 - 50)",
              "27"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Sorting Based on Results\n\nThe values are arranged according to:\n0, 15, 27, 32, 50\n\nCorresponding numbers:\n50, 65, 23, 82, 100"
        },
        {
          "type": "text",
          "value": "Final Sorted List"
        },
        {
          "type": "code",
          "value": "[50, 65, 23, 82, 100]"
        },
        {
          "type": "text",
          "value": "Important Point\n• sort(key = function_name)\n• key decides how sorting should happen\n• Original values stay same\n• Sorting depends on returned value from function"
        },
        {
          "type": "text",
          "value": "Same Using Lambda Function"
        },
        {
          "type": "code",
          "value": "thislist = [100, 50, 65, 82, 23]\n\nthislist.sort(key=lambda n: abs(n - 50))\n\nprint(thislist)"
        },
        {
          "type": "output",
          "value": "[50, 65, 23, 82, 100]"
        }
      ],
      "questions": [
        {
          "question": "What does the 'key' parameter do in the sort() method?",
          "answer": "It specifies a function to be called on each list element prior to making comparisons. The return value of this function determines the sort order."
        },
        {
          "question": "Does using a 'key' function change the actual values in the list?",
          "answer": "No, it only changes how they are compared for sorting. The original values remain unchanged in the final sorted list."
        },
        {
          "question": "How can you use a lambda function for custom sorting?",
          "answer": "By passing the lambda as the key argument, e.g., list.sort(key=lambda x: abs(x-50))."
        }
      ]
    },
    {
      "id": "python-copy-lists",
      "title": "Python – Copy Lists",
      "category": "Basic",
      "definition": "Copying a list means creating another list with the same elements. It is essential for maintaining independent data structures.",
      "sections": [
        {
          "type": "text",
          "value": "Copying a list means creating another list with the same elements.\n\nWhy Copy Needed?\n\nIf you directly assign one list to another:\na = [1, 2, 3]\nb = a\n\nBoth variables point to the same list. Changing one affects the other."
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "a = [1, 2, 3]\nb = a\n\nb[0] = 100\n\nprint(a)\nprint(b)"
        },
        {
          "type": "output",
          "value": "[100, 2, 3]\n[100, 2, 3]"
        },
        {
          "type": "text",
          "value": "Methods to Copy Lists"
        },
        {
          "type": "table",
          "headers": [
            "Method",
            "Description"
          ],
          "rows": [
            [
              "copy()",
              "Creates copy"
            ],
            [
              "list()",
              "Using constructor"
            ],
            [
              "slicing [:]",
              "Using slice"
            ],
            [
              "copy module",
              "Deep copy"
            ]
          ]
        },
        {
          "type": "text",
          "value": "1. Using copy()\n\nSyntax\nnew_list = old_list.copy()"
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "a = [1, 2, 3]\nb = a.copy()\n\nb[0] = 100\n\nprint(a)\nprint(b)"
        },
        {
          "type": "output",
          "value": "[1, 2, 3]\n[100, 2, 3]"
        },
        {
          "type": "text",
          "value": "2. Using list()"
        },
        {
          "type": "code",
          "value": "a = [10, 20, 30]\nb = list(a)\n\nprint(b)"
        },
        {
          "type": "output",
          "value": "[10, 20, 30]"
        },
        {
          "type": "text",
          "value": "3. Using Slicing [:]"
        },
        {
          "type": "code",
          "value": "a = [1, 2, 3]\nb = a[:]\n\nprint(b)"
        },
        {
          "type": "output",
          "value": "[1, 2, 3]"
        },
        {
          "type": "text",
          "value": "4. Using copy.deepcopy()\n\nUsed for nested lists."
        },
        {
          "type": "text",
          "value": "Problem with Normal Copy"
        },
        {
          "type": "code",
          "value": "a = [[1, 2], [3, 4]]\nb = a.copy()\n\nb[0][0] = 100\n\nprint(a)\nprint(b)"
        },
        {
          "type": "output",
          "value": "[[100, 2], [3, 4]]\n[[100, 2], [3, 4]]"
        },
        {
          "type": "text",
          "value": "Inner lists are still shared.\n\nDeep Copy"
        },
        {
          "type": "code",
          "value": "import copy\n\na = [[1, 2], [3, 4]]\nb = copy.deepcopy(a)\n\nb[0][0] = 100\n\nprint(a)\nprint(b)"
        },
        {
          "type": "output",
          "value": "[[1, 2], [3, 4]]\n[[100, 2], [3, 4]]"
        },
        {
          "type": "difference",
          "type": "text",
          "value": "Difference Between Shallow Copy and Deep Copy"
        },
        {
          "type": "table",
          "headers": [
            "Shallow Copy",
            "Deep Copy"
          ],
          "rows": [
            [
              "Copies outer list only",
              "Copies all nested objects"
            ],
            [
              "Inner objects shared",
              "Fully independent"
            ],
            [
              "Faster",
              "Slightly slower"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Important Points\n• = does not create copy\n• copy(), list(), [:] create shallow copies\n• deepcopy() creates full independent copy\n• Use deepcopy() for nested lists"
        }
      ],
      "questions": [
        {
          "question": "What is the difference between a shallow copy and a deep copy?",
          "answer": "A shallow copy creates a new collection object but populates it with references to the same items in the original. A deep copy recursively creates new copies of everything found in the original, making the new object fully independent."
        },
        {
          "question": "Why shouldn't you use '=' to copy a list?",
          "answer": "Because '=' only creates a new reference to the same memory object. Any change made to one list will reflect in the other."
        },
        {
          "question": "Which method should you use to copy a list containing other lists?",
          "answer": "You should use copy.deepcopy() from the 'copy' module to ensure that nested lists are also copied and not shared."
        }
      ]
    },
    {
      "id": "python-shallow-vs-deep-copy",
      "title": "Shallow Copy and Deep Copy in Python",
      "category": "Basic",
      "definition": "When copying lists (especially nested lists), Python provides shallow copy and deep copy to manage how inner objects are handled.",
      "sections": [
        {
          "type": "text",
          "value": "1. Shallow Copy\n\nA shallow copy copies:\n• only the outer object\n• inner objects are shared\n\nSo, changes inside nested items affect both lists."
        },
        {
          "type": "text",
          "value": "Example of Shallow Copy"
        },
        {
          "type": "code",
          "value": "a = [[1, 2], [3, 4]]\n\nb = a.copy()\n\nb[0][0] = 100\n\nprint(a)\nprint(b)"
        },
        {
          "type": "output",
          "value": "[[100, 2], [3, 4]]\n[[100, 2], [3, 4]]"
        },
        {
          "type": "text",
          "value": "Why?\nb = a.copy()\n\nOnly outer list is copied. Inner lists are still shared:\n[1, 2]\n[3, 4]\n\nBoth a and b point to same inner lists."
        },
        {
          "type": "text",
          "value": "Memory Representation\na ------> [ inner1 , inner2 ]\n               ↑\nb ------> [ --- ]\n\nBoth use same inner objects."
        },
        {
          "type": "text",
          "value": "Methods for Shallow Copy"
        },
        {
          "type": "table",
          "headers": [
            "Method",
            "Example"
          ],
          "rows": [
            [
              "copy()",
              "b = a.copy()"
            ],
            [
              "slicing",
              "b = a[:]"
            ],
            [
              "list()",
              "b = list(a)"
            ]
          ]
        },
        {
          "type": "text",
          "value": "2. Deep Copy\n\nDeep copy copies:\n• outer object\n• all inner objects\n\nEverything becomes fully independent."
        },
        {
          "type": "text",
          "value": "Example of Deep Copy"
        },
        {
          "type": "code",
          "value": "import copy\n\na = [[1, 2], [3, 4]]\n\nb = copy.deepcopy(a)\n\nb[0][0] = 100\n\nprint(a)\nprint(b)"
        },
        {
          "type": "output",
          "value": "[[1, 2], [3, 4]]\n[[100, 2], [3, 4]]"
        },
        {
          "type": "text",
          "value": "Why?\ncopy.deepcopy(a)\n\ncreates completely separate inner lists."
        },
        {
          "type": "text",
          "value": "Memory Representation\na ------> [ inner1 , inner2 ]\n\nb ------> [ new1 , new2 ]\n\nNo shared objects."
        },
        {
          "type": "text",
          "value": "Difference Between Shallow Copy and Deep Copy"
        },
        {
          "type": "table",
          "headers": [
            "Shallow Copy",
            "Deep Copy"
          ],
          "rows": [
            [
              "Copies outer object only",
              "Copies all objects"
            ],
            [
              "Inner objects shared",
              "Fully independent"
            ],
            [
              "Faster",
              "Slower"
            ],
            [
              "Less memory",
              "More memory"
            ],
            [
              "Changes may affect original",
              "No effect on original"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Simple Example\n\nShallow Copy"
        },
        {
          "type": "code",
          "value": "a = [[10]]\nb = a.copy()\nb[0][0] = 99\nprint(a)"
        },
        {
          "type": "output",
          "value": "[[99]]\n\nOriginal changed."
        },
        {
          "type": "text",
          "value": "Deep Copy"
        },
        {
          "type": "code",
          "value": "import copy\n\na = [[10]]\nb = copy.deepcopy(a)\nb[0][0] = 99\nprint(a)"
        },
        {
          "type": "output",
          "value": "[[10]]\n\nOriginal unchanged."
        },
        {
          "type": "text",
          "value": "Important Points\n• = → no copy, same object\n• copy() → shallow copy\n• deepcopy() → full independent copy\n• Deep copy mainly used for nested lists/dictionaries"
        }
      ],
      "questions": [
        {
          "question": "What happens if you modify a nested element in a shallowly copied list?",
          "answer": "The change will reflect in both the original and the copied list because they both share references to the same inner objects."
        },
        {
          "question": "Why is deep copy slower and more memory-intensive than shallow copy?",
          "answer": "Because it recursively duplicates every object found within the original structure, creating entirely new objects in memory instead of just copying references."
        },
        {
          "question": "When is it absolutely necessary to use copy.deepcopy()?",
          "answer": "When dealing with nested data structures (like lists within lists or dictionaries within lists) where you need the new copy to be completely independent of the original."
        }
      ]
    },
    {
      "id": "python-join-lists",
      "title": "Python – Join Lists",
      "category": "Basic",
      "definition": "Joining lists means combining two or more lists into one list using various methods like the + operator, extend(), or loops.",
      "sections": [
        {
          "type": "text",
          "value": "Joining lists means combining two or more lists into one list."
        },
        {
          "type": "table",
          "headers": [
            "Method",
            "Description"
          ],
          "rows": [
            [
              "+ operator",
              "Combines lists"
            ],
            [
              "extend()",
              "Adds elements of another list"
            ],
            [
              "loop + append()",
              "Add items one by one"
            ],
            [
              "list comprehension",
              "Join while processing"
            ],
            [
              "* operator",
              "Repeat lists"
            ]
          ]
        },
        {
          "type": "text",
          "value": "1. Using + Operator\n\nMost common method.\n\nSyntax\nnew_list = list1 + list2"
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "a = [1, 2]\nb = [3, 4]\n\nc = a + b\n\nprint(c)"
        },
        {
          "type": "output",
          "value": "[1, 2, 3, 4]"
        },
        {
          "type": "text",
          "value": "Join String Lists"
        },
        {
          "type": "code",
          "value": "fruits1 = [\"apple\", \"banana\"]\nfruits2 = [\"mango\", \"grapes\"]\n\nresult = fruits1 + fruits2\n\nprint(result)"
        },
        {
          "type": "output",
          "value": "['apple', 'banana', 'mango', 'grapes']"
        },
        {
          "type": "text",
          "value": "2. Using extend()\n\nAdds elements of one list into another.\n\nSyntax\nlist1.extend(list2)"
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "a = [1, 2]\nb = [3, 4]\n\na.extend(b)\n\nprint(a)"
        },
        {
          "type": "output",
          "value": "[1, 2, 3, 4]"
        },
        {
          "type": "text",
          "value": "Difference Between + and extend()"
        },
        {
          "type": "table",
          "headers": [
            "+ Operator",
            "extend()"
          ],
          "rows": [
            [
              "Creates new list",
              "Modifies existing list"
            ],
            [
              "Original lists unchanged",
              "Original list changes"
            ]
          ]
        },
        {
          "type": "text",
          "value": "3. Using Loop + append()"
        },
        {
          "type": "code",
          "value": "a = [1, 2]\nb = [3, 4]\n\nfor i in b:\n    a.append(i)\n\nprint(a)"
        },
        {
          "type": "output",
          "value": "[1, 2, 3, 4]"
        },
        {
          "type": "text",
          "value": "4. Using List Comprehension"
        },
        {
          "type": "code",
          "value": "a = [1, 2]\nb = [3, 4]\n\nresult = [x for x in a] + [y for y in b]\n\nprint(result)"
        },
        {
          "type": "output",
          "value": "[1, 2, 3, 4]"
        },
        {
          "type": "text",
          "value": "5. Using * Operator\n\nRepeats list items."
        },
        {
          "type": "code",
          "value": "a = [1, 2]\n\nprint(a * 3)"
        },
        {
          "type": "output",
          "value": "[1, 2, 1, 2, 1, 2]"
        },
        {
          "type": "text",
          "value": "Join Nested Lists"
        },
        {
          "type": "code",
          "value": "a = [[1, 2]]\nb = [[3, 4]]\n\nc = a + b\n\nprint(c)"
        },
        {
          "type": "output",
          "value": "[[1, 2], [3, 4]]"
        },
        {
          "type": "text",
          "value": "Important Points\n• + creates new joined list\n• extend() modifies original list\n• append() adds single item\n• extend() adds multiple items\n• * repeats lists"
        },
        {
          "type": "text",
          "value": "append() vs extend()"
        },
        {
          "type": "text",
          "value": "append()"
        },
        {
          "type": "code",
          "value": "a = [1, 2]\n\na.append([3, 4])\n\nprint(a)"
        },
        {
          "type": "output",
          "value": "[1, 2, [3, 4]]"
        },
        {
          "type": "text",
          "value": "extend()"
        },
        {
          "type": "code",
          "value": "a = [1, 2]\n\na.extend([3, 4])\n\nprint(a)"
        },
        {
          "type": "output",
          "value": "[1, 2, 3, 4]"
        }
      ],
      "questions": [
        {
          "question": "What is the primary difference between the + operator and the extend() method for joining lists?",
          "answer": "The + operator creates and returns a new list containing elements from both lists, whereas extend() modifies the original list in-place by adding elements from the second list."
        },
        {
          "question": "How does append() differ from extend() when adding a list to another list?",
          "answer": "append() adds the entire list as a single nested element, while extend() iterates through the list and adds each element individually."
        },
        {
          "question": "What happens when you multiply a list by an integer using the * operator?",
          "answer": "It performs list repetition, creating a new list that contains the elements of the original list repeated the specified number of times."
        }
      ]
    },
    {
      "id": "python-list-methods",
      "title": "Python – List Methods",
      "category": "Basic",
      "definition": "List methods are built-in functions used to perform operations on lists such as adding, removing, and sorting items.",
      "sections": [
        {
          "type": "text",
          "value": "List methods are built-in functions used to perform operations on lists."
        },
        {
          "type": "table",
          "headers": [
            "Method",
            "Purpose"
          ],
          "rows": [
            [
              "append()",
              "Add item at end"
            ],
            [
              "insert()",
              "Add item at specific position"
            ],
            [
              "extend()",
              "Add multiple items"
            ],
            [
              "remove()",
              "Remove specific item"
            ],
            [
              "pop()",
              "Remove item using index"
            ],
            [
              "clear()",
              "Remove all items"
            ],
            [
              "index()",
              "Find position of item"
            ],
            [
              "count()",
              "Count occurrences"
            ],
            [
              "sort()",
              "Sort list"
            ],
            [
              "reverse()",
              "Reverse list"
            ],
            [
              "copy()",
              "Copy list"
            ]
          ]
        },
        {
          "type": "text",
          "value": "1. append()\n\nAdds one item at the end."
        },
        {
          "type": "code",
          "value": "nums = [1, 2]\n\nnums.append(3)\n\nprint(nums)"
        },
        {
          "type": "output",
          "value": "[1, 2, 3]"
        },
        {
          "type": "text",
          "value": "2. insert()\n\nAdds item at a specific index."
        },
        {
          "type": "code",
          "value": "nums = [1, 3]\n\nnums.insert(1, 2)\n\nprint(nums)"
        },
        {
          "type": "output",
          "value": "[1, 2, 3]"
        },
        {
          "type": "text",
          "value": "3. extend()\n\nAdds multiple items."
        },
        {
          "type": "code",
          "value": "a = [1, 2]\n\na.extend([3, 4])\n\nprint(a)"
        },
        {
          "type": "output",
          "value": "[1, 2, 3, 4]"
        },
        {
          "type": "text",
          "value": "4. remove()\n\nRemoves first matching value."
        },
        {
          "type": "code",
          "value": "nums = [1, 2, 3]\n\nnums.remove(2)\n\nprint(nums)"
        },
        {
          "type": "output",
          "value": "[1, 3]"
        },
        {
          "type": "text",
          "value": "5. pop()\n\nRemoves item using index."
        },
        {
          "type": "code",
          "value": "nums = [10, 20, 30]\n\nnums.pop(1)\n\nprint(nums)"
        },
        {
          "type": "output",
          "value": "[10, 30]"
        },
        {
          "type": "text",
          "value": "pop() Without Index"
        },
        {
          "type": "code",
          "value": "nums = [10, 20, 30]\n\nnums.pop()\n\nprint(nums)"
        },
        {
          "type": "output",
          "value": "[10, 20]"
        },
        {
          "type": "text",
          "value": "6. clear()\n\nRemoves all items."
        },
        {
          "type": "code",
          "value": "nums = [1, 2, 3]\n\nnums.clear()\n\nprint(nums)"
        },
        {
          "type": "output",
          "value": "[]"
        },
        {
          "type": "text",
          "value": "7. index()\n\nReturns index position of item."
        },
        {
          "type": "code",
          "value": "fruits = [\"apple\", \"banana\", \"mango\"]\n\nprint(fruits.index(\"banana\"))"
        },
        {
          "type": "output",
          "value": "1"
        },
        {
          "type": "text",
          "value": "8. count()\n\nCounts occurrences of value."
        },
        {
          "type": "code",
          "value": "nums = [1, 2, 2, 3, 2]\n\nprint(nums.count(2))"
        },
        {
          "type": "output",
          "value": "3"
        },
        {
          "type": "text",
          "value": "9. sort()\n\nSorts list in ascending order."
        },
        {
          "type": "code",
          "value": "nums = [4, 1, 3, 2]\n\nnums.sort()\n\nprint(nums)"
        },
        {
          "type": "output",
          "value": "[1, 2, 3, 4]"
        },
        {
          "type": "text",
          "value": "Descending Sort"
        },
        {
          "type": "code",
          "value": "nums = [4, 1, 3, 2]\n\nnums.sort(reverse=True)\n\nprint(nums)"
        },
        {
          "type": "output",
          "value": "[4, 3, 2, 1]"
        },
        {
          "type": "text",
          "value": "10. reverse()\n\nReverses current order."
        },
        {
          "type": "code",
          "value": "nums = [1, 2, 3]\n\nnums.reverse()\n\nprint(nums)"
        },
        {
          "type": "output",
          "value": "[3, 2, 1]"
        },
        {
          "type": "text",
          "value": "11. copy()\n\nCreates shallow copy."
        },
        {
          "type": "code",
          "value": "a = [1, 2, 3]\n\nb = a.copy()\n\nprint(b)"
        },
        {
          "type": "output",
          "value": "[1, 2, 3]"
        },
        {
          "type": "text",
          "value": "Summary Table"
        },
        {
          "type": "table",
          "headers": [
            "Method",
            "Example"
          ],
          "rows": [
            [
              "append()",
              "a.append(5)"
            ],
            [
              "insert()",
              "a.insert(1,5)"
            ],
            [
              "extend()",
              "a.extend([3,4])"
            ],
            [
              "remove()",
              "a.remove(2)"
            ],
            [
              "pop()",
              "a.pop()"
            ],
            [
              "clear()",
              "a.clear()"
            ],
            [
              "index()",
              "a.index(5)"
            ],
            [
              "count()",
              "a.count(2)"
            ],
            [
              "sort()",
              "a.sort()"
            ],
            [
              "reverse()",
              "a.reverse()"
            ],
            [
              "copy()",
              "a.copy()"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Important Points\n• Lists are mutable\n• Methods modify the original list\n• append() adds one item\n• extend() adds multiple items\n• sort() arranges items\n• copy() creates shallow copy"
        }
      ],
      "questions": [
        {
          "question": "Which list method can be used to add multiple elements at once?",
          "answer": "The extend() method is used to add all elements of an iterable to the end of the list."
        },
        {
          "question": "What is the difference between remove() and pop()?",
          "answer": "remove() deletes the first matching value, while pop() removes an item at a specific index and returns it."
        },
        {
          "question": "How do you find the total number of times a specific value appears in a list?",
          "answer": "Using the count() method: list.count(value)."
        }
      ]
    },
    {
      "id": "python-tuples",
      "title": "Python Tuples",
      "category": "Basic",
      "definition": "A Tuple is used to store multiple items in a single variable. It is one of 4 built-in collection data types in Python, alongside Lists, Sets, and Dictionaries.",
      "sections": [
        {
          "type": "text",
          "value": "mytuple = (\"apple\", \"banana\", \"cherry\")\n\nA Tuple is used to store multiple items in a single variable.\n\nPython has 4 built-in collection data types:\n• List\n• Tuple\n• Set\n• Dictionary"
        },
        {
          "type": "text",
          "value": "What is a Tuple?\n\nA tuple is:\n• Ordered\n• Unchangeable (Immutable)\n• Allows Duplicate Values\n\nTuples are written using round brackets ()."
        },
        {
          "type": "text",
          "value": "Example: Create a Tuple"
        },
        {
          "type": "code",
          "value": "thistuple = (\"apple\", \"banana\", \"cherry\")\n\nprint(thistuple)"
        },
        {
          "type": "output",
          "value": "('apple', 'banana', 'cherry')"
        },
        {
          "type": "text",
          "value": "Tuple Items\n\nTuple items are:\n• Indexed\n• Ordered\n• Immutable\n• Can contain duplicates"
        },
        {
          "type": "text",
          "value": "Ordered\n\nTuples maintain the insertion order."
        },
        {
          "type": "code",
          "value": "thistuple = (\"apple\", \"banana\", \"cherry\")\n\nprint(thistuple[0])"
        },
        {
          "type": "output",
          "value": "apple"
        },
        {
          "type": "text",
          "value": "Unchangeable (Immutable)\n\nAfter creating a tuple, you cannot:\n• change items\n• add items\n• remove items"
        },
        {
          "type": "text",
          "value": "❌ This will give an error:"
        },
        {
          "type": "code",
          "value": "thistuple = (\"apple\", \"banana\", \"cherry\")\n\nthistuple[1] = \"orange\""
        },
        {
          "type": "output",
          "value": "TypeError"
        },
        {
          "type": "text",
          "value": "Allow Duplicates\n\nTuples can store duplicate values."
        },
        {
          "type": "code",
          "value": "thistuple = (\"apple\", \"banana\", \"cherry\", \"apple\", \"cherry\")\n\nprint(thistuple)"
        },
        {
          "type": "output",
          "value": "('apple', 'banana', 'cherry', 'apple', 'cherry')"
        },
        {
          "type": "text",
          "value": "Tuple Length\n\nUse len() to find the number of items."
        },
        {
          "type": "code",
          "value": "thistuple = (\"apple\", \"banana\", \"cherry\")\n\nprint(len(thistuple))"
        },
        {
          "type": "output",
          "value": "3"
        },
        {
          "type": "text",
          "value": "Create Tuple With One Item\n\nFor a single item tuple, comma is mandatory."
        },
        {
          "type": "text",
          "value": "Correct"
        },
        {
          "type": "code",
          "value": "thistuple = (\"apple\",)\n\nprint(type(thistuple))"
        },
        {
          "type": "output",
          "value": "<class 'tuple'>"
        },
        {
          "type": "text",
          "value": "Wrong (Not a Tuple)"
        },
        {
          "type": "code",
          "value": "thistuple = (\"apple\")\n\nprint(type(thistuple))"
        },
        {
          "type": "output",
          "value": "<class 'str'>"
        },
        {
          "type": "text",
          "value": "Because Python treats it as a string unless a comma is added."
        },
        {
          "type": "text",
          "value": "Tuple Data Types\n\nTuples can store any data type."
        },
        {
          "type": "text",
          "value": "String Tuple"
        },
        {
          "type": "code",
          "value": "tuple1 = (\"apple\", \"banana\", \"cherry\")"
        },
        {
          "type": "text",
          "value": "Integer Tuple"
        },
        {
          "type": "code",
          "value": "tuple2 = (1, 5, 7, 9, 3)"
        },
        {
          "type": "text",
          "value": "Boolean Tuple"
        },
        {
          "type": "code",
          "value": "tuple3 = (True, False, False)"
        },
        {
          "type": "text",
          "value": "Mixed Data Types in Tuple\n\nA tuple can contain different data types together."
        },
        {
          "type": "code",
          "value": "tuple1 = (\"abc\", 34, True, 40, \"male\")\n\nprint(tuple1)"
        },
        {
          "type": "output",
          "value": "('abc', 34, True, 40, 'male')"
        },
        {
          "type": "text",
          "value": "type() Function\n\nUse type() to check the data type."
        },
        {
          "type": "code",
          "value": "mytuple = (\"apple\", \"banana\", \"cherry\")\n\nprint(type(mytuple))"
        },
        {
          "type": "output",
          "value": "<class 'tuple'>"
        },
        {
          "type": "text",
          "value": "tuple() Constructor\n\nYou can also create a tuple using the tuple() constructor."
        },
        {
          "type": "code",
          "value": "thistuple = tuple((\"apple\", \"banana\", \"cherry\"))\n\nprint(thistuple)"
        },
        {
          "type": "output",
          "value": "('apple', 'banana', 'cherry')"
        },
        {
          "type": "text",
          "value": "⚠ Note the double brackets:\ntuple((\"a\", \"b\"))\n\n• Outer brackets → function call\n• Inner brackets → tuple items"
        },
        {
          "type": "text",
          "value": "Difference Between List and Tuple"
        },
        {
          "type": "table",
          "headers": [
            "Feature",
            "List",
            "Tuple"
          ],
          "rows": [
            [
              "Brackets",
              "[]",
              "()"
            ],
            [
              "Changeable",
              "Yes",
              "No"
            ],
            [
              "Ordered",
              "Yes",
              "Yes"
            ],
            [
              "Duplicates",
              "Yes",
              "Yes"
            ],
            [
              "Faster",
              "No",
              "Yes"
            ]
          ]
        },
        {
          "type": "text",
          "value": "When to Use Tuple?\n\nUse tuples when:\n• Data should not change\n• Fixed values are needed\n• Better performance is required"
        },
        {
          "type": "text",
          "value": "Example:"
        },
        {
          "type": "code",
          "value": "days = (\"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\")"
        },
        {
          "type": "text",
          "value": "Important Interview Points\n• Tuple is immutable.\n• Tuple uses ().\n• Single-item tuple needs a comma.\n• Tuple allows duplicate values.\n• Tuple items are indexed.\n• Tuples are faster than lists."
        }
      ],
      "questions": [
        {
          "question": "What is the primary characteristic of a tuple that distinguishes it from a list?",
          "answer": "Tuples are immutable (unchangeable), meaning once they are created, you cannot change, add, or remove items. Lists, on the other hand, are mutable."
        },
        {
          "question": "How do you create a tuple with only one item?",
          "answer": "To create a single-item tuple, you must add a trailing comma after the item: mytuple = ('apple',). Without the comma, Python will treat it as a string."
        },
        {
          "question": "Which constructor can be used to convert an iterable into a tuple?",
          "answer": "The tuple() constructor can be used to create a tuple from any iterable object like a list, string, or range."
        }
      ]
    },
    {
      "id": "python-access-tuple-items",
      "title": "Python - Access Tuple Items",
      "category": "Basic",
      "definition": "Tuple items can be accessed using indexing, negative indexing, and slicing. You can also check for item existence using the 'in' keyword.",
      "sections": [
        {
          "type": "text",
          "value": "Tuple items can be accessed using:\n• Indexing\n• Negative Indexing\n• Range/Slicing\n• Membership (in keyword)"
        },
        {
          "type": "text",
          "value": "Access Tuple Items Using Index\n\nUse square brackets [] with index numbers."
        },
        {
          "type": "code",
          "value": "thistuple = (\"apple\", \"banana\", \"cherry\")\n\nprint(thistuple[1])"
        },
        {
          "type": "output",
          "value": "banana"
        },
        {
          "type": "text",
          "value": "📌 Index starts from 0"
        },
        {
          "type": "table",
          "headers": [
            "Item",
            "Index"
          ],
          "rows": [
            [
              "apple",
              "0"
            ],
            [
              "banana",
              "1"
            ],
            [
              "cherry",
              "2"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Negative Indexing\n\nNegative indexing starts from the end."
        },
        {
          "type": "table",
          "headers": [
            "Item",
            "Negative Index"
          ],
          "rows": [
            [
              "apple",
              "-3"
            ],
            [
              "banana",
              "-2"
            ],
            [
              "cherry",
              "-1"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "thistuple = (\"apple\", \"banana\", \"cherry\")\n\nprint(thistuple[-1])"
        },
        {
          "type": "output",
          "value": "cherry"
        },
        {
          "type": "text",
          "value": "Range of Indexes (Slicing)\n\nSyntax:\ntuple[start:end]\n• start → included\n• end → excluded"
        },
        {
          "type": "text",
          "value": "Example: Access Multiple Items"
        },
        {
          "type": "code",
          "value": "thistuple = (\"apple\", \"banana\", \"cherry\", \"orange\", \"kiwi\", \"melon\", \"mango\")\n\nprint(thistuple[2:5])"
        },
        {
          "type": "output",
          "value": "('cherry', 'orange', 'kiwi')"
        },
        {
          "type": "text",
          "value": "Explanation"
        },
        {
          "type": "table",
          "headers": [
            "Index",
            "Value"
          ],
          "rows": [
            [
              "2",
              "cherry"
            ],
            [
              "3",
              "orange"
            ],
            [
              "4",
              "kiwi"
            ],
            [
              "5",
              "melon ❌ excluded"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Range From Beginning\n\nIf start index is omitted, Python starts from index 0."
        },
        {
          "type": "code",
          "value": "thistuple = (\"apple\", \"banana\", \"cherry\", \"orange\", \"kiwi\", \"melon\", \"mango\")\n\nprint(thistuple[:4])"
        },
        {
          "type": "output",
          "value": "('apple', 'banana', 'cherry', 'orange')"
        },
        {
          "type": "text",
          "value": "Range Till End\n\nIf end index is omitted, Python goes till the last item."
        },
        {
          "type": "code",
          "value": "thistuple = (\"apple\", \"banana\", \"cherry\", \"orange\", \"kiwi\", \"melon\", \"mango\")\n\nprint(thistuple[2:])"
        },
        {
          "type": "output",
          "value": "('cherry', 'orange', 'kiwi', 'melon', 'mango')"
        },
        {
          "type": "text",
          "value": "Range of Negative Indexes\n\nYou can also slice using negative indexes."
        },
        {
          "type": "code",
          "value": "thistuple = (\"apple\", \"banana\", \"cherry\", \"orange\", \"kiwi\", \"melon\", \"mango\")\n\nprint(thistuple[-4:-1])"
        },
        {
          "type": "output",
          "value": "('orange', 'kiwi', 'melon')"
        },
        {
          "type": "text",
          "value": "Explanation"
        },
        {
          "type": "table",
          "headers": [
            "Negative Index",
            "Value"
          ],
          "rows": [
            [
              "-4",
              "orange"
            ],
            [
              "-3",
              "kiwi"
            ],
            [
              "-2",
              "melon"
            ],
            [
              "-1",
              "mango ❌ excluded"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Check if Item Exists\n\nUse the in keyword."
        },
        {
          "type": "code",
          "value": "thistuple = (\"apple\", \"banana\", \"cherry\")\n\nif \"apple\" in thistuple:\n    print(\"Yes, 'apple' is in the fruits tuple\")"
        },
        {
          "type": "output",
          "value": "Yes, 'apple' is in the fruits tuple"
        },
        {
          "type": "text",
          "value": "Check if Item Does NOT Exist\n\nUse not in."
        },
        {
          "type": "code",
          "value": "thistuple = (\"apple\", \"banana\", \"cherry\")\n\nif \"orange\" not in thistuple:\n    print(\"Orange is not present\")"
        },
        {
          "type": "output",
          "value": "Orange is not present"
        },
        {
          "type": "text",
          "value": "Important Interview Points\n• Tuple indexing starts from 0\n• Negative indexing starts from -1\n• Slicing returns a new tuple\n• End index is always excluded\n• in keyword checks existence\n• Tuples are immutable, but items can still be accessed using indexes"
        },
        {
          "type": "text",
          "value": "Quick Revision Table"
        },
        {
          "type": "table",
          "headers": [
            "Operation",
            "Example"
          ],
          "rows": [
            [
              "First item",
              "t[0]"
            ],
            [
              "Last item",
              "t[-1]"
            ],
            [
              "Range",
              "t[1:4]"
            ],
            [
              "From start",
              "t[:3]"
            ],
            [
              "Till end",
              "t[2:]"
            ],
            [
              "Negative slice",
              "t[-4:-1]"
            ],
            [
              "Check item",
              "\"apple\" in t"
            ]
          ]
        }
      ],
      "questions": [
        {
          "question": "What is the result of slicing a tuple, and does it modify the original tuple?",
          "answer": "Slicing a tuple returns a new tuple containing the specified range of items. It does NOT modify the original tuple because tuples are immutable."
        },
        {
          "question": "What does a negative index of -1 refer to in a tuple?",
          "answer": "A negative index of -1 refers to the very last item in the tuple."
        },
        {
          "question": "In the slice thistuple[2:5], which index positions are included in the result?",
          "answer": "The items at index positions 2, 3, and 4 are included. The item at index position 5 is excluded."
        }
      ]
    },
    {
      "id": "python-update-tuples",
      "title": "Python - Update Tuples",
      "category": "Basic",
      "definition": "Tuples are immutable, but you can update them using workarounds like converting them to lists or using concatenation.",
      "sections": [
        {
          "type": "text",
          "value": "Tuples are immutable (unchangeable). That means after creating a tuple, you cannot:\n• Change items\n• Add items\n• Remove items\n\nBut Python provides some workarounds using lists."
        },
        {
          "type": "text",
          "value": "Change Tuple Values\n\n❌ Direct modification is not allowed."
        },
        {
          "type": "code",
          "value": "x = (\"apple\", \"banana\", \"cherry\")\n\nx[1] = \"kiwi\""
        },
        {
          "type": "output",
          "value": "TypeError"
        },
        {
          "type": "text",
          "value": "Workaround: Convert Tuple → List → Tuple\n\nSteps:\n1. Convert tuple to list\n2. Change the list\n3. Convert list back to tuple"
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "x = (\"apple\", \"banana\", \"cherry\")\ny = list(x)\ny[1] = \"kiwi\"\nx = tuple(y)\n\nprint(x)"
        },
        {
          "type": "output",
          "value": "('apple', 'kiwi', 'cherry')"
        },
        {
          "type": "text",
          "value": "Add Items to Tuple\n\nTuples do not support append(), insert(), or extend() because they are immutable. But there are workarounds."
        },
        {
          "type": "text",
          "value": "Method 1: Convert into List"
        },
        {
          "type": "code",
          "value": "thistuple = (\"apple\", \"banana\", \"cherry\")\ny = list(thistuple)\ny.append(\"orange\")\nthistuple = tuple(y)\n\nprint(thistuple)"
        },
        {
          "type": "output",
          "value": "('apple', 'banana', 'cherry', 'orange')"
        },
        {
          "type": "text",
          "value": "Method 2: Add Tuple to Tuple\n\nYou can concatenate tuples using +."
        },
        {
          "type": "code",
          "value": "thistuple = (\"apple\", \"banana\", \"cherry\")\ny = (\"orange\",)\nthistuple += y\n\nprint(thistuple)"
        },
        {
          "type": "output",
          "value": "('apple', 'banana', 'cherry', 'orange')"
        },
        {
          "type": "text",
          "value": "Important Note: Single Item Tuple\n\nA comma , is mandatory."
        },
        {
          "type": "text",
          "value": "Correct"
        },
        {
          "type": "code",
          "value": "y = (\"orange\",)"
        },
        {
          "type": "text",
          "value": "Wrong"
        },
        {
          "type": "code",
          "value": "y = (\"orange\")"
        },
        {
          "type": "text",
          "value": "Without comma, Python treats it as a string."
        },
        {
          "type": "text",
          "value": "Add Multiple Items"
        },
        {
          "type": "code",
          "value": "thistuple = (\"apple\", \"banana\")\ny = (\"orange\", \"kiwi\")\nthistuple += y\n\nprint(thistuple)"
        },
        {
          "type": "output",
          "value": "('apple', 'banana', 'orange', 'kiwi')"
        },
        {
          "type": "text",
          "value": "Remove Items from Tuple\n\n❌ Direct removal is not possible."
        },
        {
          "type": "code",
          "value": "thistuple.remove(\"apple\")"
        },
        {
          "type": "output",
          "value": "AttributeError"
        },
        {
          "type": "text",
          "value": "Workaround: Convert into List"
        },
        {
          "type": "code",
          "value": "thistuple = (\"apple\", \"banana\", \"cherry\")\ny = list(thistuple)\ny.remove(\"apple\")\nthistuple = tuple(y)\n\nprint(thistuple)"
        },
        {
          "type": "output",
          "value": "('banana', 'cherry')"
        },
        {
          "type": "text",
          "value": "Delete Entire Tuple\n\nUse del keyword."
        },
        {
          "type": "code",
          "value": "thistuple = (\"apple\", \"banana\", \"cherry\")\ndel thistuple\n\n# This will raise an error because thistuple no longer exists\n# print(thistuple)"
        },
        {
          "type": "output",
          "value": "NameError"
        },
        {
          "type": "text",
          "value": "Difference Between remove() and del"
        },
        {
          "type": "table",
          "headers": [
            "Keyword/Method",
            "Purpose"
          ],
          "rows": [
            [
              "remove()",
              "Removes a specific item from a list (used in workaround)"
            ],
            [
              "del",
              "Deletes the entire tuple/variable"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Important Interview Points\n• Tuples are immutable.\n• Tuple items cannot be directly updated.\n• Use list conversion as workaround.\n• Tuples do not support append() or remove().\n• Tuples can be concatenated using +.\n• del deletes the entire tuple."
        },
        {
          "type": "text",
          "value": "Quick Revision Table"
        },
        {
          "type": "table",
          "headers": [
            "Operation",
            "Possible?",
            "Method"
          ],
          "rows": [
            [
              "Change item",
              "❌ Directly",
              "Convert to list"
            ],
            [
              "Add item",
              "❌ Directly",
              "list() or tuple concat"
            ],
            [
              "Remove item",
              "❌ Directly",
              "Convert to list"
            ],
            [
              "Delete tuple",
              "✅",
              "del"
            ]
          ]
        }
      ],
      "questions": [
        {
          "question": "What is the standard workaround to modify an item in a tuple?",
          "answer": "The standard workaround is to convert the tuple into a list using the list() constructor, modify the list, and then convert it back into a tuple using the tuple() constructor."
        },
        {
          "question": "Can you use the '+' operator to add items to a tuple?",
          "answer": "Yes, you can concatenate two tuples using the '+' operator to create a new tuple. Note that if you're adding a single item, it must be defined as a single-item tuple with a trailing comma."
        },
        {
          "question": "What happens when you try to use the .append() method on a tuple?",
          "answer": "It will raise an AttributeError because tuples are immutable and do not have an append() method."
        }
      ]
    },
    {
      "id": "python-unpack-tuples",
      "title": "Python - Unpack Tuples",
      "category": "Basic",
      "definition": "Packing is the process of storing multiple values in a single tuple, while unpacking is the process of extracting those values back into separate variables.",
      "sections": [
        {
          "type": "text",
          "value": "Packing a Tuple\n\nWhen values are stored inside a tuple, it is called packing."
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "fruits = (\"apple\", \"banana\", \"cherry\")"
        },
        {
          "type": "text",
          "value": "Here, \"apple\", \"banana\", and \"cherry\" are packed into one tuple variable called fruits."
        },
        {
          "type": "text",
          "value": "Unpacking a Tuple\n\nExtracting tuple values into variables is called unpacking."
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "fruits = (\"apple\", \"banana\", \"cherry\")\n\n(green, yellow, red) = fruits\n\nprint(green)\nprint(yellow)\nprint(red)"
        },
        {
          "type": "output",
          "value": "apple\nbanana\ncherry"
        },
        {
          "type": "text",
          "value": "How Unpacking Works"
        },
        {
          "type": "table",
          "headers": [
            "Tuple Value",
            "Variable"
          ],
          "rows": [
            [
              "apple",
              "green"
            ],
            [
              "banana",
              "yellow"
            ],
            [
              "cherry",
              "red"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Important Rule\n\nThe number of variables must match the number of tuple items."
        },
        {
          "type": "text",
          "value": "✅ Correct:"
        },
        {
          "type": "code",
          "value": "(a, b, c) = (10, 20, 30)"
        },
        {
          "type": "text",
          "value": "❌ Wrong:"
        },
        {
          "type": "code",
          "value": "(a, b) = (10, 20, 30)"
        },
        {
          "type": "output",
          "value": "ValueError"
        },
        {
          "type": "text",
          "value": "Because there are more values than variables."
        },
        {
          "type": "text",
          "value": "Using Asterisk *\n\nUse * when the number of variables is less than the number of tuple values. The * collects remaining items as a list."
        },
        {
          "type": "text",
          "value": "Example 1: Asterisk at Last Variable"
        },
        {
          "type": "code",
          "value": "fruits = (\"apple\", \"banana\", \"cherry\", \"strawberry\", \"raspberry\")\n\n(green, yellow, *red) = fruits\n\nprint(green)\nprint(yellow)\nprint(red)"
        },
        {
          "type": "output",
          "value": "apple\nbanana\n['cherry', 'strawberry', 'raspberry']"
        },
        {
          "type": "text",
          "value": "Explanation"
        },
        {
          "type": "table",
          "headers": [
            "Variable",
            "Value"
          ],
          "rows": [
            [
              "green",
              "apple"
            ],
            [
              "yellow",
              "banana"
            ],
            [
              "red",
              "['cherry', 'strawberry', 'raspberry']"
            ]
          ]
        },
        {
          "type": "text",
          "value": "📌 red becomes a list."
        },
        {
          "type": "text",
          "value": "Example 2: Asterisk in Middle"
        },
        {
          "type": "code",
          "value": "fruits = (\"apple\", \"mango\", \"papaya\", \"pineapple\", \"cherry\")\n\n(green, *tropic, red) = fruits\n\nprint(green)\nprint(tropic)\nprint(red)"
        },
        {
          "type": "output",
          "value": "apple\n['mango', 'papaya', 'pineapple']\ncherry"
        },
        {
          "type": "text",
          "value": "Explanation"
        },
        {
          "type": "table",
          "headers": [
            "Variable",
            "Value"
          ],
          "rows": [
            [
              "green",
              "apple"
            ],
            [
              "tropic",
              "['mango', 'papaya', 'pineapple']"
            ],
            [
              "red",
              "cherry"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Python automatically assigns:\n• first value → green\n• last value → red\n• remaining values → tropic"
        },
        {
          "type": "text",
          "value": "Example 3: Asterisk at Beginning"
        },
        {
          "type": "code",
          "value": "fruits = (\"apple\", \"banana\", \"cherry\", \"orange\")\n\n(*first, last) = fruits\n\nprint(first)\nprint(last)"
        },
        {
          "type": "output",
          "value": "['apple', 'banana', 'cherry']\norange"
        },
        {
          "type": "text",
          "value": "Unpacking Without Brackets\n\nBrackets are optional."
        },
        {
          "type": "code",
          "value": "fruits = (\"apple\", \"banana\", \"cherry\")\n\ngreen, yellow, red = fruits\n\nprint(green)"
        },
        {
          "type": "output",
          "value": "apple"
        },
        {
          "type": "text",
          "value": "Real-Time Example"
        },
        {
          "type": "code",
          "value": "student = (\"Vasu\", 23, \"Python\")\n\nname, age, course = student\n\nprint(name)\nprint(age)\nprint(course)"
        },
        {
          "type": "output",
          "value": "Vasu\n23\nPython"
        },
        {
          "type": "text",
          "value": "Important Interview Points\n• Packing → storing multiple values in tuple\n• Unpacking → extracting tuple values into variables\n• Variable count must match tuple items\n• * collects remaining items as a list\n• Only one * variable is allowed in unpacking"
        },
        {
          "type": "text",
          "value": "Quick Revision Table"
        },
        {
          "type": "table",
          "headers": [
            "Concept",
            "Example"
          ],
          "rows": [
            [
              "Packing",
              "t = (1,2,3)"
            ],
            [
              "Unpacking",
              "a,b,c = t"
            ],
            [
              "Asterisk unpacking",
              "a,*b = t"
            ],
            [
              "Remaining values",
              "Stored as list"
            ],
            [
              "Multiple unpacking",
              "a,*b,c = t"
            ]
          ]
        }
      ],
      "questions": [
        {
          "question": "What is the difference between tuple packing and unpacking?",
          "answer": "Packing is the process of assigning multiple values to a single tuple variable. Unpacking is the reverse process, where the items within a tuple are assigned to multiple individual variables."
        },
        {
          "question": "How do you handle a situation where the number of variables is less than the number of items in a tuple during unpacking?",
          "answer": "You can use an asterisk (*) before one of the variable names. This variable will collect the remaining items as a list."
        },
        {
          "question": "Where can the asterisk (*) be placed during tuple unpacking, and what is its effect?",
          "answer": "The asterisk can be placed at the beginning, middle, or end of the variable sequence. It always collects the 'overflowing' items into a list, matching other variables to the corresponding items at the start or end of the tuple."
        }
      ]
    },
    {
      "id": "python-loop-tuples",
      "title": "Python - Loop Tuples",
      "category": "Basic",
      "definition": "You can iterate through tuple items using a for loop, by referring to index numbers, using a while loop, or with the enumerate() function.",
      "sections": [
        {
          "type": "text",
          "value": "You can loop through tuple items using:\n• for loop\n• Index numbers\n• while loop"
        },
        {
          "type": "text",
          "value": "Loop Through a Tuple Using for Loop\n\nThe easiest way to iterate through a tuple is using a for loop."
        },
        {
          "type": "code",
          "value": "thistuple = (\"apple\", \"banana\", \"cherry\")\n\nfor x in thistuple:\n    print(x)"
        },
        {
          "type": "output",
          "value": "apple\nbanana\ncherry"
        },
        {
          "type": "text",
          "value": "How It Works"
        },
        {
          "type": "table",
          "headers": [
            "Iteration",
            "x Value"
          ],
          "rows": [
            [
              "1",
              "apple"
            ],
            [
              "2",
              "banana"
            ],
            [
              "3",
              "cherry"
            ]
          ]
        },
        {
          "type": "text",
          "value": "The loop automatically takes one item at a time."
        },
        {
          "type": "text",
          "value": "Loop Through Index Numbers\n\nYou can also access tuple items using index numbers. Use:\n• len() → gives tuple length\n• range() → generates index numbers"
        },
        {
          "type": "code",
          "value": "thistuple = (\"apple\", \"banana\", \"cherry\")\n\nfor i in range(len(thistuple)):\n    print(thistuple[i])"
        },
        {
          "type": "output",
          "value": "apple\nbanana\ncherry"
        },
        {
          "type": "text",
          "value": "Explanation"
        },
        {
          "type": "text",
          "value": "Step 1: len(thistuple)\nlen(thistuple) Output: 3\n\nStep 2: range(3)\nProduces indexes: 0, 1, 2\n\nStep 3: thistuple[i]\nAccesses items using indexes."
        },
        {
          "type": "table",
          "headers": [
            "i",
            "thistuple[i]"
          ],
          "rows": [
            [
              "0",
              "apple"
            ],
            [
              "1",
              "banana"
            ],
            [
              "2",
              "cherry"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Using a while Loop\n\nYou can also iterate using a while loop."
        },
        {
          "type": "code",
          "value": "thistuple = (\"apple\", \"banana\", \"cherry\")\n\ni = 0\n\nwhile i < len(thistuple):\n    print(thistuple[i])\n    i = i + 1"
        },
        {
          "type": "output",
          "value": "apple\nbanana\ncherry"
        },
        {
          "type": "text",
          "value": "Explanation\n\n• Initial Value: i = 0 (Start from first index)\n• Condition: i < len(thistuple) (Loop runs while index is less than tuple length)\n• Increment: i = i + 1 (Moves to next index)\n\n📌 Without increment → infinite loop."
        },
        {
          "type": "text",
          "value": "Using enumerate()\n\nenumerate() gives both index and value."
        },
        {
          "type": "code",
          "value": "thistuple = (\"apple\", \"banana\", \"cherry\")\n\nfor index, value in enumerate(thistuple):\n    print(index, value)"
        },
        {
          "type": "output",
          "value": "0 apple\n1 banana\n2 cherry"
        },
        {
          "type": "text",
          "value": "Difference Between Loops"
        },
        {
          "type": "table",
          "headers": [
            "Loop Type",
            "Best For"
          ],
          "rows": [
            [
              "for item in tuple",
              "Direct item access"
            ],
            [
              "for i in range(len())",
              "Index-based access"
            ],
            [
              "while loop",
              "Manual control"
            ],
            [
              "enumerate()",
              "Index + value together"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Real-Time Example"
        },
        {
          "type": "code",
          "value": "students = (\"Vasu\", \"Ravi\", \"Anu\")\n\nfor student in students:\n    print(\"Welcome\", student)"
        },
        {
          "type": "output",
          "value": "Welcome Vasu\nWelcome Ravi\nWelcome Anu"
        },
        {
          "type": "text",
          "value": "Important Interview Points\n• Tuples are iterable.\n• for loop is the easiest method.\n• range(len(tuple)) is used for index access.\n• while loop needs manual increment.\n• enumerate() returns index and value together."
        },
        {
          "type": "text",
          "value": "Quick Revision Table"
        },
        {
          "type": "table",
          "headers": [
            "Method",
            "Syntax"
          ],
          "rows": [
            [
              "Direct loop",
              "for x in tuple:"
            ],
            [
              "Index loop",
              "for i in range(len(tuple)):"
            ],
            [
              "While loop",
              "while i < len(tuple):"
            ],
            [
              "Enumerate",
              "for i, x in enumerate(tuple):"
            ]
          ]
        }
      ],
      "questions": [
        {
          "question": "Which loop is generally preferred for simple iteration over a tuple in Python?",
          "answer": "The 'for item in tuple' loop is generally preferred because it is the most concise and readable way to access items directly."
        },
        {
          "question": "How can you access both the index and the value while looping through a tuple?",
          "answer": "You can use the built-in enumerate() function, which returns a tuple containing the index and the value for each item during iteration."
        },
        {
          "question": "What is a potential danger when using a while loop to iterate through a tuple?",
          "answer": "If you forget to increment the index variable (e.g., i += 1), you will create an infinite loop because the condition will always remain true."
        }
      ]
    },
    {
      "id": "python-join-tuples",
      "title": "Python - Join Tuples",
      "category": "Basic",
      "definition": "Joining tuples involves combining two or more tuples to create a new tuple using the concatenation (+) or repetition (*) operators.",
      "sections": [
        {
          "type": "text",
          "value": "Joining tuples means combining two or more tuples into one tuple.\n\nSince tuples are immutable, we cannot directly modify them, but we can create a new tuple by joining existing tuples."
        },
        {
          "type": "text",
          "value": "Join Two Tuples Using +\n\nUse the + operator to concatenate tuples."
        },
        {
          "type": "code",
          "value": "tuple1 = (\"apple\", \"banana\", \"cherry\")\ntuple2 = (\"orange\", \"kiwi\", \"melon\")\n\ntuple3 = tuple1 + tuple2\n\nprint(tuple3)"
        },
        {
          "type": "output",
          "value": "('apple', 'banana', 'cherry', 'orange', 'kiwi', 'melon')"
        },
        {
          "type": "text",
          "value": "How It Works"
        },
        {
          "type": "table",
          "headers": [
            "Tuple",
            "Values"
          ],
          "rows": [
            [
              "tuple1",
              "apple, banana, cherry"
            ],
            [
              "tuple2",
              "orange, kiwi, melon"
            ],
            [
              "tuple3",
              "combination of both"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Join Multiple Tuples\n\nYou can join more than two tuples."
        },
        {
          "type": "code",
          "value": "tuple1 = (1, 2)\ntuple2 = (3, 4)\ntuple3 = (5, 6)\n\nresult = tuple1 + tuple2 + tuple3\n\nprint(result)"
        },
        {
          "type": "output",
          "value": "(1, 2, 3, 4, 5, 6)"
        },
        {
          "type": "text",
          "value": "Multiply Tuples\n\nUse * operator to repeat tuple items."
        },
        {
          "type": "code",
          "value": "fruits = (\"apple\", \"banana\", \"cherry\")\n\nmytuple = fruits * 2\n\nprint(mytuple)"
        },
        {
          "type": "output",
          "value": "('apple', 'banana', 'cherry', 'apple', 'banana', 'cherry')"
        },
        {
          "type": "text",
          "value": "Another Example"
        },
        {
          "type": "code",
          "value": "numbers = (1, 2, 3)\n\nprint(numbers * 3)"
        },
        {
          "type": "output",
          "value": "(1, 2, 3, 1, 2, 3, 1, 2, 3)"
        },
        {
          "type": "text",
          "value": "Important Note\n\nJoining creates a new tuple. Original tuples remain unchanged."
        },
        {
          "type": "code",
          "value": "tuple1 = (1, 2)\ntuple2 = (3, 4)\n\ntuple3 = tuple1 + tuple2\n\nprint(tuple1)\nprint(tuple2)\nprint(tuple3)"
        },
        {
          "type": "output",
          "value": "(1, 2)\n(3, 4)\n(1, 2, 3, 4)"
        },
        {
          "type": "text",
          "value": "Join Tuple with Single Item\n\nRemember the comma , for single-item tuples."
        },
        {
          "type": "text",
          "value": "Correct"
        },
        {
          "type": "code",
          "value": "tuple1 = (\"apple\",)\ntuple2 = (\"banana\",)\n\nprint(tuple1 + tuple2)"
        },
        {
          "type": "output",
          "value": "('apple', 'banana')"
        },
        {
          "type": "text",
          "value": "Wrong"
        },
        {
          "type": "code",
          "value": "tuple1 = (\"apple\")"
        },
        {
          "type": "text",
          "value": "This becomes a string, not a tuple."
        },
        {
          "type": "text",
          "value": "Real-Time Example"
        },
        {
          "type": "code",
          "value": "frontend = (\"HTML\", \"CSS\")\nbackend = (\"Python\", \"Flask\")\n\nfullstack = frontend + backend\n\nprint(fullstack)"
        },
        {
          "type": "output",
          "value": "('HTML', 'CSS', 'Python', 'Flask')"
        },
        {
          "type": "text",
          "value": "Difference Between + and *"
        },
        {
          "type": "table",
          "headers": [
            "Operator",
            "Purpose"
          ],
          "rows": [
            [
              "+",
              "Combines tuples"
            ],
            [
              "*",
              "Repeats tuple items"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Important Interview Points\n• Tuples are joined using +\n• Tuple multiplication uses *\n• Joining creates a new tuple\n• Original tuples are unchanged\n• Single-item tuple requires comma"
        },
        {
          "type": "text",
          "value": "Quick Revision Table"
        },
        {
          "type": "table",
          "headers": [
            "Operation",
            "Example"
          ],
          "rows": [
            [
              "Join tuples",
              "t1 + t2"
            ],
            [
              "Repeat tuple",
              "t * 3"
            ],
            [
              "Single-item tuple",
              "(\"apple\",)"
            ],
            [
              "Immutable",
              "Original tuple not modified"
            ]
          ]
        }
      ],
      "questions": [
        {
          "question": "What happens to the original tuples when you join them using the '+' operator?",
          "answer": "The original tuples remain unchanged. The '+' operator creates a brand new tuple that contains the elements of both."
        },
        {
          "question": "How can you create a tuple that repeats the elements of another tuple three times?",
          "answer": "You can use the multiplication operator (*): new_tuple = original_tuple * 3."
        },
        {
          "question": "Can you join a tuple with a string directly using the '+' operator?",
          "answer": "No, you can only concatenate a tuple with another tuple. To add a single string item, you must first convert it into a single-item tuple by adding a trailing comma: tuple1 + ('new_item',)."
        }
      ]
    },
    {
      "id": "python-tuple-methods",
      "title": "Python - Tuple Methods",
      "category": "Basic",
      "definition": "Python tuples have only two built-in methods, count() and index(), because they are immutable and do not support methods that modify the collection.",
      "sections": [
        {
          "type": "text",
          "value": "Python tuples have only 2 built-in methods because tuples are immutable (unchangeable)."
        },
        {
          "type": "table",
          "headers": [
            "Method",
            "Description"
          ],
          "rows": [
            [
              "count()",
              "Returns the number of times a value occurs"
            ],
            [
              "index()",
              "Returns the index of the first occurrence of a value"
            ]
          ]
        },
        {
          "type": "text",
          "value": "1. count() Method\n\nThe count() method returns how many times a specified value appears in the tuple."
        },
        {
          "type": "text",
          "value": "Syntax\ntuple.count(value)"
        },
        {
          "type": "text",
          "value": "Example 1"
        },
        {
          "type": "code",
          "value": "thistuple = (1, 3, 7, 8, 7, 5, 4, 6, 8, 5)\n\nx = thistuple.count(5)\n\nprint(x)"
        },
        {
          "type": "output",
          "value": "2"
        },
        {
          "type": "text",
          "value": "Because 5 appears 2 times."
        },
        {
          "type": "text",
          "value": "Example 2"
        },
        {
          "type": "code",
          "value": "fruits = (\"apple\", \"banana\", \"apple\", \"cherry\", \"apple\")\n\nprint(fruits.count(\"apple\"))"
        },
        {
          "type": "output",
          "value": "3"
        },
        {
          "type": "text",
          "value": "Example 3: Boolean Values"
        },
        {
          "type": "code",
          "value": "numbers = (True, False, True, True)\n\nprint(numbers.count(True))"
        },
        {
          "type": "output",
          "value": "3"
        },
        {
          "type": "text",
          "value": "2. index() Method\n\nThe index() method returns the position (index) of the first occurrence of a value."
        },
        {
          "type": "text",
          "value": "Syntax\ntuple.index(value)"
        },
        {
          "type": "text",
          "value": "Example 1"
        },
        {
          "type": "code",
          "value": "thistuple = (1, 3, 7, 8, 7, 5, 4, 6, 8, 5)\n\nx = thistuple.index(8)\n\nprint(x)"
        },
        {
          "type": "output",
          "value": "3"
        },
        {
          "type": "text",
          "value": "Because the first 8 is at index 3."
        },
        {
          "type": "text",
          "value": "Example 2"
        },
        {
          "type": "code",
          "value": "fruits = (\"apple\", \"banana\", \"cherry\")\n\nprint(fruits.index(\"banana\"))"
        },
        {
          "type": "output",
          "value": "1"
        },
        {
          "type": "text",
          "value": "Important Note About index()\n\nIf the value is not found, Python raises an error."
        },
        {
          "type": "code",
          "value": "fruits = (\"apple\", \"banana\", \"cherry\")\n\n# print(fruits.index(\"orange\"))"
        },
        {
          "type": "output",
          "value": "ValueError"
        },
        {
          "type": "text",
          "value": "Avoid Error Using in"
        },
        {
          "type": "code",
          "value": "fruits = (\"apple\", \"banana\", \"cherry\")\n\nif \"orange\" in fruits:\n    print(fruits.index(\"orange\"))\nelse:\n    print(\"Item not found\")"
        },
        {
          "type": "output",
          "value": "Item not found"
        },
        {
          "type": "text",
          "value": "Difference Between count() and index()"
        },
        {
          "type": "table",
          "headers": [
            "Method",
            "Purpose",
            "Return Type"
          ],
          "rows": [
            [
              "count()",
              "Counts occurrences",
              "Integer"
            ],
            [
              "index()",
              "Finds position",
              "Integer"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Real-Time Example"
        },
        {
          "type": "code",
          "value": "students = (\"Vasu\", \"Anu\", \"Ravi\", \"Anu\")\n\nprint(\"Anu appears:\", students.count(\"Anu\"))\nprint(\"Ravi index:\", students.index(\"Ravi\"))"
        },
        {
          "type": "output",
          "value": "Anu appears: 2\nRavi index: 2"
        },
        {
          "type": "text",
          "value": "Important Interview Points\n• Tuples have only 2 methods.\n• Tuples are immutable.\n• count() counts occurrences.\n• index() returns first occurrence index.\n• index() raises ValueError if item not found."
        },
        {
          "type": "text",
          "value": "Quick Revision Table"
        },
        {
          "type": "table",
          "headers": [
            "Method",
            "Example",
            "Output"
          ],
          "rows": [
            [
              "count()",
              "t.count(5)",
              "Number of occurrences"
            ],
            [
              "index()",
              "t.index(5)",
              "Position of first occurrence"
            ]
          ]
        }
      ],
      "questions": [
        {
          "question": "Why do tuples have significantly fewer methods than lists in Python?",
          "answer": "Tuples are immutable, so they do not support any methods that would modify the collection (like append, remove, sort, or clear). They only provide read-only methods like count() and index()."
        },
        {
          "question": "What happens if you use the .index() method for a value that exists multiple times in a tuple?",
          "answer": "The .index() method will only return the index of the very first occurrence of that value."
        },
        {
          "question": "How can you safely find the index of an item without risking a ValueError?",
          "answer": "You should first check if the item exists in the tuple using the 'in' keyword before calling the .index() method."
        }
      ]
    },
    {
      "id": "python-sets",
      "title": "Python Sets",
      "category": "Basic",
      "definition": "A set is an unordered, unindexed, and unchangeable collection of unique items. While you cannot modify individual items, you can add or remove them from the set.",
      "sections": [
        {
          "type": "text",
          "value": "myset = {\"apple\", \"banana\", \"cherry\"}\n\nA set is used to store multiple items in a single variable. A set is:\n• Unordered\n• Unchangeable (Partial: items cannot be changed, but can be added/removed)\n• Unindexed\n• No duplicate values allowed"
        },
        {
          "type": "text",
          "value": "Creating a Set\n\nSets are written using curly braces {}."
        },
        {
          "type": "code",
          "value": "thisset = {\"apple\", \"banana\", \"cherry\"}\nprint(thisset)"
        },
        {
          "type": "output",
          "value": "{'banana', 'apple', 'cherry'}"
        },
        {
          "type": "text",
          "value": "⚠️ Order may change every time because sets are unordered."
        },
        {
          "type": "text",
          "value": "Characteristics of Sets"
        },
        {
          "type": "text",
          "value": "1. Unordered\n\nSet items do not have a fixed order. Possible outputs for {\"apple\", \"banana\", \"cherry\"} could be {'banana', 'cherry', 'apple'} or any other combination.\n\n⚠️ You cannot access items using index: thisset[0] # Error"
        },
        {
          "type": "text",
          "value": "2. Unchangeable\n\nYou cannot modify existing items directly. However, you can add or remove items."
        },
        {
          "type": "text",
          "value": "3. Duplicate Values Not Allowed\n\nSets automatically remove duplicates."
        },
        {
          "type": "code",
          "value": "thisset = {\"apple\", \"banana\", \"cherry\", \"apple\"}\nprint(thisset)"
        },
        {
          "type": "output",
          "value": "{'apple', 'banana', 'cherry'}"
        },
        {
          "type": "text",
          "value": "Only one \"apple\" is stored."
        },
        {
          "type": "text",
          "value": "True and 1 in Sets\n\nIn Python, True == 1, so they are treated as duplicates."
        },
        {
          "type": "code",
          "value": "thisset = {\"apple\", \"banana\", \"cherry\", True, 1, 2}\nprint(thisset)"
        },
        {
          "type": "output",
          "value": "{True, 2, 'banana', 'apple', 'cherry'}"
        },
        {
          "type": "text",
          "value": "1 is ignored because True already exists."
        },
        {
          "type": "text",
          "value": "False and 0 in Sets\n\nFalse == 0, so they are treated as duplicates."
        },
        {
          "type": "code",
          "value": "thisset = {\"apple\", \"banana\", \"cherry\", False, True, 0}\nprint(thisset)"
        },
        {
          "type": "output",
          "value": "{False, True, 'banana', 'apple', 'cherry'}"
        },
        {
          "type": "text",
          "value": "0 is ignored because False already exists."
        },
        {
          "type": "text",
          "value": "Length of a Set\n\nUse len() to find number of items."
        },
        {
          "type": "code",
          "value": "thisset = {\"apple\", \"banana\", \"cherry\"}\nprint(len(thisset))"
        },
        {
          "type": "output",
          "value": "3"
        },
        {
          "type": "text",
          "value": "Set Items Can Have Different Data Types"
        },
        {
          "type": "code",
          "value": "set1 = {\"apple\", \"banana\", \"cherry\"}\nset2 = {1, 5, 7, 9, 3}\nset3 = {True, False}\n\n# Mixed Data Types\nmixed_set = {\"abc\", 34, True, 40, \"male\"}"
        },
        {
          "type": "text",
          "value": "Checking the Data Type"
        },
        {
          "type": "code",
          "value": "myset = {\"apple\", \"banana\", \"cherry\"}\nprint(type(myset))"
        },
        {
          "type": "output",
          "value": "<class 'set'>"
        },
        {
          "type": "text",
          "value": "Using the set() Constructor\n\nYou can also create a set using set()."
        },
        {
          "type": "code",
          "value": "thisset = set((\"apple\", \"banana\", \"cherry\"))\nprint(thisset)"
        },
        {
          "type": "text",
          "value": "⚠️ Notice the double parentheses: set((\"apple\", \"banana\", \"cherry\")). This is because set() takes one iterable argument."
        },
        {
          "type": "text",
          "value": "Important Differences Table"
        },
        {
          "type": "table",
          "headers": [
            "Feature",
            "List",
            "Tuple",
            "Set"
          ],
          "rows": [
            [
              "Ordered",
              "✔️",
              "✔️",
              "❌"
            ],
            [
              "Changeable",
              "✔️",
              "❌",
              "Partial (Add/Remove)"
            ],
            [
              "Duplicates Allowed",
              "✔️",
              "✔️",
              "❌"
            ],
            [
              "Indexed",
              "✔️",
              "✔️",
              "❌"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Simple Real-Time Example\n\nRemoving duplicate student names:"
        },
        {
          "type": "code",
          "value": "students = {\"Ram\", \"Sita\", \"Ram\", \"Krishna\"}\nprint(students)"
        },
        {
          "type": "output",
          "value": "{'Ram', 'Sita', 'Krishna'}"
        }
      ],
      "questions": [
        {
          "question": "Why are sets described as 'unordered'?",
          "answer": "Sets are unordered because their items do not have a defined sequence or fixed position. This means that items may appear in a different order every time you print or iterate through the set."
        },
        {
          "question": "How do sets handle boolean values like True and False in relation to integers?",
          "answer": "In Python, True is equivalent to 1 and False is equivalent to 0. Since sets only allow unique values, they treat True/1 and False/0 as duplicates and only store the one that was added first."
        },
        {
          "question": "Can you access a specific item in a set using an index (e.g., myset[0])?",
          "answer": "No, sets are unindexed. Attempting to access an item by index will result in a TypeError."
        }
      ]
    },
    {
      "id": "python-access-set-items",
      "title": "Python - Access Set Items",
      "category": "Basic",
      "definition": "Because sets are unordered and unindexed, you cannot access their items using an index. Instead, you must iterate through them using a loop or check for membership using the 'in' keyword.",
      "sections": [
        {
          "type": "text",
          "value": "Access Items in a Set\n\nSets are unordered and unindexed. So, you cannot access set items using index numbers like lists or tuples."
        },
        {
          "type": "text",
          "value": "❌ Not allowed:"
        },
        {
          "type": "code",
          "value": "thisset = {\"apple\", \"banana\", \"cherry\"}\n\n# print(thisset[0])"
        },
        {
          "type": "output",
          "value": "TypeError: 'set' object is not subscriptable"
        },
        {
          "type": "text",
          "value": "Loop Through Set Items\n\nYou can access items by using a for loop."
        },
        {
          "type": "code",
          "value": "thisset = {\"apple\", \"banana\", \"cherry\"}\n\nfor x in thisset:\n    print(x)"
        },
        {
          "type": "output",
          "value": "banana\napple\ncherry"
        },
        {
          "type": "text",
          "value": "⚠️ Order may change because sets are unordered."
        },
        {
          "type": "text",
          "value": "Check if Item Exists (in Keyword)\n\nUse in to check whether an item exists in a set."
        },
        {
          "type": "code",
          "value": "thisset = {\"apple\", \"banana\", \"cherry\"}\n\nprint(\"banana\" in thisset)"
        },
        {
          "type": "output",
          "value": "True"
        },
        {
          "type": "text",
          "value": "Check if Item Does NOT Exist (not in)\n\nUse not in to check whether an item is absent."
        },
        {
          "type": "code",
          "value": "thisset = {\"apple\", \"banana\", \"cherry\"}\n\nprint(\"banana\" not in thisset)"
        },
        {
          "type": "output",
          "value": "False"
        },
        {
          "type": "text",
          "value": "More Examples"
        },
        {
          "type": "text",
          "value": "Example 1"
        },
        {
          "type": "code",
          "value": "colors = {\"red\", \"blue\", \"green\"}\nprint(\"red\" in colors)"
        },
        {
          "type": "output",
          "value": "True"
        },
        {
          "type": "text",
          "value": "Example 2"
        },
        {
          "type": "code",
          "value": "colors = {\"red\", \"blue\", \"green\"}\nprint(\"yellow\" in colors)"
        },
        {
          "type": "output",
          "value": "False"
        },
        {
          "type": "text",
          "value": "Example 3"
        },
        {
          "type": "code",
          "value": "numbers = {10, 20, 30, 40}\n\nfor n in numbers:\n    print(n)"
        },
        {
          "type": "output",
          "value": "40\n10\n20\n30"
        },
        {
          "type": "text",
          "value": "Change Items in a Set\n\nOnce a set is created, you cannot directly change items."
        },
        {
          "type": "text",
          "value": "❌ Example"
        },
        {
          "type": "code",
          "value": "thisset = {\"apple\", \"banana\", \"cherry\"}\n\n# thisset[1] = \"orange\""
        },
        {
          "type": "output",
          "value": "TypeError"
        },
        {
          "type": "text",
          "value": "But You Can Add New Items\n\nUse add() method."
        },
        {
          "type": "code",
          "value": "thisset = {\"apple\", \"banana\", \"cherry\"}\n\nthisset.add(\"orange\")\n\nprint(thisset)"
        },
        {
          "type": "output",
          "value": "{'banana', 'orange', 'apple', 'cherry'}"
        },
        {
          "type": "text",
          "value": "Quick Summary"
        },
        {
          "type": "table",
          "headers": [
            "Operation",
            "Allowed?"
          ],
          "rows": [
            [
              "Access using index",
              "❌"
            ],
            [
              "Loop through set",
              "✔️"
            ],
            [
              "Check item using in",
              "✔️"
            ],
            [
              "Change existing item directly",
              "❌"
            ],
            [
              "Add new item",
              "✔️"
            ]
          ]
        }
      ],
      "questions": [
        {
          "question": "What error do you get if you try to access a set item by index?",
          "answer": "You will get a 'TypeError' stating that a 'set' object is not subscriptable."
        },
        {
          "question": "How can you check if a specific value exists within a set without using a loop?",
          "answer": "You can use the 'in' keyword (membership operator), which returns True if the value exists and False otherwise."
        },
        {
          "question": "Since you cannot change an item in a set, what is the standard way to 'update' it?",
          "answer": "You must remove the old item (using .remove() or .remove()) and then add the new item using the .add() method."
        }
      ]
    },
    {
      "id": "python-add-set-items",
      "title": "Python - Add Set Items",
      "category": "Basic",
      "definition": "While sets are partially unchangeable, you can add new items to them using the add() method for a single item or the update() method for multiple items from any iterable.",
      "sections": [
        {
          "type": "text",
          "value": "Add Items to a Set\n\nSets are unchangeable, but you can still add new items or remove items. To add items, Python provides:\n• add() → add one item\n• update() → add multiple items"
        },
        {
          "type": "text",
          "value": "1. add() Method\n\nUse add() to add a single item to a set."
        },
        {
          "type": "text",
          "value": "Syntax\nsetname.add(item)"
        },
        {
          "type": "text",
          "value": "Example: Add One Item"
        },
        {
          "type": "code",
          "value": "thisset = {\"apple\", \"banana\", \"cherry\"}\n\nthisset.add(\"orange\")\n\nprint(thisset)"
        },
        {
          "type": "output",
          "value": "{'banana', 'orange', 'apple', 'cherry'}"
        },
        {
          "type": "text",
          "value": "⚠️ Order may vary because sets are unordered."
        },
        {
          "type": "text",
          "value": "Adding Duplicate Items\n\nIf the item already exists, it will not be added again."
        },
        {
          "type": "code",
          "value": "thisset = {\"apple\", \"banana\", \"cherry\"}\n\nthisset.add(\"apple\")\n\nprint(thisset)"
        },
        {
          "type": "output",
          "value": "{'banana', 'apple', 'cherry'}"
        },
        {
          "type": "text",
          "value": "No duplicate value is added."
        },
        {
          "type": "text",
          "value": "2. update() Method\n\nUse update() to add multiple items from another iterable (Set, List, Tuple, Dictionary, String, etc.)."
        },
        {
          "type": "text",
          "value": "Syntax\nsetname.update(iterable)"
        },
        {
          "type": "text",
          "value": "Add One Set into Another Set"
        },
        {
          "type": "code",
          "value": "thisset = {\"apple\", \"banana\", \"cherry\"}\ntropical = {\"pineapple\", \"mango\", \"papaya\"}\n\nthisset.update(tropical)\n\nprint(thisset)"
        },
        {
          "type": "output",
          "value": "{'banana', 'papaya', 'mango', 'apple', 'pineapple', 'cherry'}"
        },
        {
          "type": "text",
          "value": "Add List Items into a Set"
        },
        {
          "type": "code",
          "value": "thisset = {\"apple\", \"banana\", \"cherry\"}\nmylist = [\"kiwi\", \"orange\"]\n\nthisset.update(mylist)\n\nprint(thisset)"
        },
        {
          "type": "output",
          "value": "{'banana', 'orange', 'apple', 'kiwi', 'cherry'}"
        },
        {
          "type": "text",
          "value": "Add Tuple Items into a Set"
        },
        {
          "type": "code",
          "value": "thisset = {\"apple\", \"banana\"}\nmytuple = (\"grapes\", \"mango\")\n\nthisset.update(mytuple)\n\nprint(thisset)"
        },
        {
          "type": "output",
          "value": "{'banana', 'mango', 'grapes', 'apple'}"
        },
        {
          "type": "text",
          "value": "Add Characters from a String\n\nA string is also iterable. Each character is added separately."
        },
        {
          "type": "code",
          "value": "thisset = {\"apple\", \"banana\"}\n\nthisset.update(\"hi\")\n\nprint(thisset)"
        },
        {
          "type": "output",
          "value": "{'banana', 'h', 'apple', 'i'}"
        },
        {
          "type": "text",
          "value": "Add Dictionary to Set\n\nOnly dictionary keys are added."
        },
        {
          "type": "code",
          "value": "thisset = {\"apple\", \"banana\"}\nmydict = {\"name\": \"Ram\", \"age\": 22}\n\nthisset.update(mydict)\n\nprint(thisset)"
        },
        {
          "type": "output",
          "value": "{'banana', 'name', 'apple', 'age'}"
        },
        {
          "type": "text",
          "value": "Difference Between add() and update()"
        },
        {
          "type": "table",
          "headers": [
            "Method",
            "Purpose",
            "Adds"
          ],
          "rows": [
            [
              "add()",
              "Add one item",
              "Single item"
            ],
            [
              "update()",
              "Add multiple items",
              "Iterable items"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Important Note\n\n❌ Wrong: thisset.add([\"kiwi\", \"orange\"])\nOutput: TypeError: unhashable type: 'list'\n\nBecause lists cannot be added as a single set item. Correct way is using .update()."
        },
        {
          "type": "text",
          "value": "Real-Time Example\n\nRemove duplicate student names while adding new students:"
        },
        {
          "type": "code",
          "value": "students = {\"Ram\", \"Sita\"}\nnew_students = [\"Krishna\", \"Ram\", \"Anu\"]\n\nstudents.update(new_students)\n\nprint(students)"
        },
        {
          "type": "output",
          "value": "{'Ram', 'Sita', 'Krishna', 'Anu'}"
        }
      ],
      "questions": [
        {
          "question": "What is the primary difference between the .add() and .update() methods in Python sets?",
          "answer": "The .add() method is used to add a single element to a set, whereas the .update() method is used to add multiple elements from any iterable (like a list, tuple, or even another set)."
        },
        {
          "question": "What happens if you try to add a list as an item using the .add() method?",
          "answer": "It will raise a 'TypeError: unhashable type: list' because set items must be hashable (immutable), and a list is mutable. To add the elements of a list, you should use .update() instead."
        },
        {
          "question": "If you update a set with a dictionary, what values are actually added to the set?",
          "answer": "When updating a set with a dictionary, only the keys of the dictionary are added to the set; the values are ignored."
        }
      ]
    },
    {
      "id": "python-remove-set-items",
      "title": "Python - Remove Set Items",
      "category": "Basic",
      "definition": "Python provides several methods to remove items from a set, including remove(), discard(), pop(), clear(), and the del keyword, each with different behaviors regarding missing items and memory.",
      "sections": [
        {
          "type": "text",
          "value": "Python provides several ways to remove items from a set. Methods used:\n• remove()\n• discard()\n• pop()\n• clear()\n• del"
        },
        {
          "type": "text",
          "value": "1. remove() Method\n\nUse remove() to remove a specific item."
        },
        {
          "type": "text",
          "value": "Syntax\nsetname.remove(item)"
        },
        {
          "type": "code",
          "value": "thisset = {\"apple\", \"banana\", \"cherry\"}\n\nthisset.remove(\"banana\")\n\nprint(thisset)"
        },
        {
          "type": "output",
          "value": "{'apple', 'cherry'}"
        },
        {
          "type": "text",
          "value": "⚠️ Important Note: If the item does not exist, remove() gives an error."
        },
        {
          "type": "code",
          "value": "thisset = {\"apple\", \"banana\", \"cherry\"}\n\n# thisset.remove(\"orange\")"
        },
        {
          "type": "output",
          "value": "KeyError: 'orange'"
        },
        {
          "type": "text",
          "value": "2. discard() Method\n\ndiscard() also removes an item."
        },
        {
          "type": "text",
          "value": "Syntax\nsetname.discard(item)"
        },
        {
          "type": "code",
          "value": "thisset = {\"apple\", \"banana\", \"cherry\"}\n\nthisset.discard(\"banana\")\n\nprint(thisset)"
        },
        {
          "type": "output",
          "value": "{'apple', 'cherry'}"
        },
        {
          "type": "text",
          "value": "⚠️ Important Difference: If the item does not exist, discard() does NOT give an error."
        },
        {
          "type": "code",
          "value": "thisset = {\"apple\", \"banana\", \"cherry\"}\n\nthisset.discard(\"orange\")\n\nprint(thisset)"
        },
        {
          "type": "output",
          "value": "{'banana', 'apple', 'cherry'}"
        },
        {
          "type": "text",
          "value": "Difference Between remove() and discard()"
        },
        {
          "type": "table",
          "headers": [
            "Method",
            "If Item Exists",
            "If Item Does Not Exist"
          ],
          "rows": [
            [
              "remove()",
              "Removes item",
              "❌ Error"
            ],
            [
              "discard()",
              "Removes item",
              "✔️ No error"
            ]
          ]
        },
        {
          "type": "text",
          "value": "3. pop() Method\n\npop() removes a random item from the set. Because sets are unordered, you do not know which item will be removed."
        },
        {
          "type": "text",
          "value": "Syntax\nsetname.pop()"
        },
        {
          "type": "code",
          "value": "thisset = {\"apple\", \"banana\", \"cherry\"}\n\nx = thisset.pop()\n\nprint(x)\nprint(thisset)"
        },
        {
          "type": "output",
          "value": "banana\n{'apple', 'cherry'}"
        },
        {
          "type": "text",
          "value": "⚠️ The removed item may be different every time. pop() returns the removed item."
        },
        {
          "type": "text",
          "value": "pop() on Empty Set"
        },
        {
          "type": "code",
          "value": "thisset = set()\n# thisset.pop()"
        },
        {
          "type": "output",
          "value": "KeyError: 'pop from an empty set'"
        },
        {
          "type": "text",
          "value": "4. clear() Method\n\nclear() removes all items from the set. The set still exists, but becomes empty."
        },
        {
          "type": "code",
          "value": "thisset = {\"apple\", \"banana\", \"cherry\"}\n\nthisset.clear()\n\nprint(thisset)"
        },
        {
          "type": "output",
          "value": "set()"
        },
        {
          "type": "text",
          "value": "5. del Keyword\n\ndel deletes the entire set completely."
        },
        {
          "type": "code",
          "value": "thisset = {\"apple\", \"banana\", \"cherry\"}\n\ndel thisset\n\n# print(thisset)"
        },
        {
          "type": "output",
          "value": "NameError: name 'thisset' is not defined"
        },
        {
          "type": "text",
          "value": "Difference Between clear() and del"
        },
        {
          "type": "table",
          "headers": [
            "Method",
            "Result"
          ],
          "rows": [
            [
              "clear()",
              "Empties the set"
            ],
            [
              "del",
              "Deletes the set completely"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Real-Time Examples"
        },
        {
          "type": "text",
          "value": "Example 1: Remove Duplicate Completed Tasks"
        },
        {
          "type": "code",
          "value": "tasks = {\"Coding\", \"Reading\", \"Exercise\"}\ntasks.remove(\"Reading\")\n\nprint(tasks)"
        },
        {
          "type": "output",
          "value": "{'Coding', 'Exercise'}"
        },
        {
          "type": "text",
          "value": "Example 2: Safely Remove Item"
        },
        {
          "type": "code",
          "value": "fruits = {\"apple\", \"banana\"}\nfruits.discard(\"orange\")\n\nprint(fruits)"
        },
        {
          "type": "output",
          "value": "{'apple', 'banana'}"
        },
        {
          "type": "text",
          "value": "Example 3: Empty the Set"
        },
        {
          "type": "code",
          "value": "students = {\"Ram\", \"Sita\", \"Krishna\"}\nstudents.clear()\n\nprint(students)"
        },
        {
          "type": "output",
          "value": "set()"
        },
        {
          "type": "text",
          "value": "Quick Summary Table"
        },
        {
          "type": "table",
          "headers": [
            "Method",
            "Purpose"
          ],
          "rows": [
            [
              "remove()",
              "Remove specific item"
            ],
            [
              "discard()",
              "Remove item safely"
            ],
            [
              "pop()",
              "Remove random item"
            ],
            [
              "clear()",
              "Remove all items"
            ],
            [
              "del",
              "Delete entire set"
            ]
          ]
        }
      ],
      "questions": [
        {
          "question": "What is the critical difference between the .remove() and .discard() methods?",
          "answer": "The .remove() method will raise a 'KeyError' if the specified item is not found in the set. The .discard() method will not raise any error if the item is missing."
        },
        {
          "question": "How does the .pop() method behave with sets compared to lists?",
          "answer": "In sets, .pop() removes a random element because sets are unordered, and you cannot specify an index. In lists, .pop() typically removes the last item or an item at a specific index."
        },
        {
          "question": "What is the result of using .clear() on a set, and how does it differ from using 'del'?",
          "answer": ".clear() removes all elements from the set, leaving an empty set variable behind. 'del' deletes the set variable entirely from memory."
        }
      ]
    },
    {
      "id": "python-loop-sets",
      "title": "Python - Loop Sets",
      "category": "Basic",
      "definition": "Sets can be iterated using a for loop to access each item. Because sets are unordered, the order of items in the loop may vary between executions.",
      "sections": [
        {
          "type": "text",
          "value": "Loop Through a Set\n\nYou can loop through the items of a set using a for loop. Since sets are unordered, the output order may change every time."
        },
        {
          "type": "text",
          "value": "Syntax\nfor variable in setname:\n    print(variable)"
        },
        {
          "type": "text",
          "value": "Example 1: Loop Through a Set"
        },
        {
          "type": "code",
          "value": "thisset = {\"apple\", \"banana\", \"cherry\"}\n\nfor x in thisset:\n    print(x)"
        },
        {
          "type": "output",
          "value": "banana\napple\ncherry"
        },
        {
          "type": "text",
          "value": "⚠️ Order may vary because sets are unordered."
        },
        {
          "type": "text",
          "value": "How It Works\n• for x in thisset: x stores one item at a time.\n• Loop continues until all items are printed."
        },
        {
          "type": "text",
          "value": "Example 2: Print Each Item"
        },
        {
          "type": "code",
          "value": "colors = {\"red\", \"green\", \"blue\"}\n\nfor color in colors:\n    print(color)"
        },
        {
          "type": "output",
          "value": "green\nblue\nred"
        },
        {
          "type": "text",
          "value": "Example 3: Using end"
        },
        {
          "type": "code",
          "value": "numbers = {1, 2, 3, 4}\n\nfor n in numbers:\n    print(n, end=\" \")"
        },
        {
          "type": "output",
          "value": "1 2 3 4"
        },
        {
          "type": "text",
          "value": "Example 4: Check Items While Looping"
        },
        {
          "type": "code",
          "value": "fruits = {\"apple\", \"banana\", \"mango\"}\n\nfor fruit in fruits:\n    if fruit == \"banana\":\n        print(\"Banana Found\")"
        },
        {
          "type": "output",
          "value": "Banana Found"
        },
        {
          "type": "text",
          "value": "Example 5: Count Items Using Loop"
        },
        {
          "type": "code",
          "value": "thisset = {\"apple\", \"banana\", \"cherry\"}\n\ncount = 0\n\nfor x in thisset:\n    count += 1\n\nprint(count)"
        },
        {
          "type": "output",
          "value": "3"
        },
        {
          "type": "text",
          "value": "Convert Set to List While Looping\n\nSometimes we convert a set into a list for indexing or sorting purposes."
        },
        {
          "type": "code",
          "value": "thisset = {\"apple\", \"banana\", \"cherry\"}\n\nmylist = list(thisset)\n\nfor x in mylist:\n    print(x)"
        },
        {
          "type": "output",
          "value": "banana\napple\ncherry"
        },
        {
          "type": "text",
          "value": "Nested Loop with Sets"
        },
        {
          "type": "code",
          "value": "set1 = {\"a\", \"b\"}\nset2 = {1, 2}\n\nfor x in set1:\n    for y in set2:\n        print(x, y)"
        },
        {
          "type": "output",
          "value": "a 1\na 2\nb 1\nb 2"
        },
        {
          "type": "text",
          "value": "Important Notes Table"
        },
        {
          "type": "table",
          "headers": [
            "Feature",
            "Set Support"
          ],
          "rows": [
            [
              "Ordered",
              "❌ No"
            ],
            [
              "Indexed",
              "❌ No"
            ],
            [
              "Supports Looping",
              "✔️ Yes"
            ],
            [
              "Duplicate Values",
              "❌ No"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Real-Time Example: Student Names"
        },
        {
          "type": "code",
          "value": "students = {\"Ram\", \"Sita\", \"Krishna\"}\n\nfor student in students:\n    print(\"Welcome\", student)"
        },
        {
          "type": "output",
          "value": "Welcome Ram\nWelcome Krishna\nWelcome Sita"
        },
        {
          "type": "text",
          "value": "Quick Summary Table"
        },
        {
          "type": "table",
          "headers": [
            "Operation",
            "Example"
          ],
          "rows": [
            [
              "Loop set",
              "for x in thisset:"
            ],
            [
              "Print item",
              "print(x)"
            ],
            [
              "Nested loop",
              "for x in set1: for y in set2:"
            ],
            [
              "Check condition",
              "if x == value:"
            ]
          ]
        }
      ],
      "questions": [
        {
          "question": "Can you use a while loop with a set in the same way you use it with a list?",
          "answer": "Not directly using an index, because sets are unindexed. You would first need to convert the set to a list using list() or use an iterator."
        },
        {
          "question": "Does the order of items during a loop through a set match the order in which they were added?",
          "answer": "No. Sets are unordered, so they do not keep track of the insertion order. The items will appear in an unpredictable order during iteration."
        },
        {
          "question": "Why would you convert a set to a list before looping?",
          "answer": "Converting a set to a list allows you to sort the items or access them by index, which is not possible with the set itself."
        }
      ]
    },
    {
      "id": "python-join-sets",
      "title": "Python - Join Sets",
      "category": "Basic",
      "definition": "Joining sets involves combining elements from two or more sets using methods like union(), update(), intersection(), difference(), and symmetric_difference(), or their corresponding operators.",
      "sections": [
        {
          "type": "text",
          "value": "There are several ways to join two or more sets in Python."
        },
        {
          "type": "table",
          "headers": [
            "Method",
            "Purpose"
          ],
          "rows": [
            [
              "union()",
              "Combines all unique items"
            ],
            [
              "update()",
              "Adds items into existing set"
            ],
            [
              "intersection()",
              "Keeps only common items"
            ],
            [
              "difference()",
              "Keeps items only in first set"
            ],
            [
              "symmetric_difference()",
              "Keeps non-common items"
            ]
          ]
        },
        {
          "type": "text",
          "value": "1. union()\n\nThe union() method returns a new set containing all items from both sets."
        },
        {
          "type": "code",
          "value": "set1 = {\"a\", \"b\", \"c\"}\nset2 = {1, 2, 3}\n\nset3 = set1.union(set2)\n\nprint(set3)"
        },
        {
          "type": "output",
          "value": "{1, 2, 3, 'a', 'b', 'c'}"
        },
        {
          "type": "text",
          "value": "Using | Operator"
        },
        {
          "type": "code",
          "value": "set1 = {\"a\", \"b\", \"c\"}\nset2 = {1, 2, 3}\n\nset3 = set1 | set2\n\nprint(set3)"
        },
        {
          "type": "text",
          "value": "Join Multiple Sets"
        },
        {
          "type": "code",
          "value": "set1 = {\"a\", \"b\", \"c\"}\nset2 = {1, 2, 3}\nset3 = {\"John\", \"Elena\"}\nset4 = {\"apple\", \"banana\"}\n\n# Using union()\nmyset = set1.union(set2, set3, set4)\n\n# Using |\nmyset2 = set1 | set2 | set3 | set4"
        },
        {
          "type": "text",
          "value": "Join Set with Tuple\n\nunion() can join sets with other iterable data types like tuples and lists."
        },
        {
          "type": "code",
          "value": "x = {\"a\", \"b\", \"c\"}\ny = (1, 2, 3)\n\nz = x.union(y)\n\nprint(z)"
        },
        {
          "type": "output",
          "value": "{1, 2, 3, 'a', 'b', 'c'}"
        },
        {
          "type": "text",
          "value": "⚠️ The | operator works only between sets."
        },
        {
          "type": "text",
          "value": "2. update()\n\nupdate() inserts items from one set into another. It changes the original set."
        },
        {
          "type": "code",
          "value": "set1 = {\"a\", \"b\", \"c\"}\nset2 = {1, 2, 3}\n\nset1.update(set2)\n\nprint(set1)"
        },
        {
          "type": "output",
          "value": "{1, 2, 3, 'a', 'b', 'c'}"
        },
        {
          "type": "text",
          "value": "Difference Between union() and update()"
        },
        {
          "type": "table",
          "headers": [
            "Method",
            "Returns New Set",
            "Changes Original Set"
          ],
          "rows": [
            [
              "union()",
              "✔️ Yes",
              "❌ No"
            ],
            [
              "update()",
              "❌ No",
              "✔️ Yes"
            ]
          ]
        },
        {
          "type": "text",
          "value": "3. intersection()\n\nKeeps only duplicate/common items."
        },
        {
          "type": "code",
          "value": "set1 = {\"apple\", \"banana\", \"cherry\"}\nset2 = {\"google\", \"microsoft\", \"apple\"}\n\nset3 = set1.intersection(set2)\n\nprint(set3)"
        },
        {
          "type": "output",
          "value": "{'apple'}"
        },
        {
          "type": "text",
          "value": "Using & Operator"
        },
        {
          "type": "code",
          "value": "set3 = set1 & set2"
        },
        {
          "type": "text",
          "value": "intersection_update()\n\nChanges the original set and keeps only common items."
        },
        {
          "type": "code",
          "value": "set1 = {\"apple\", \"banana\", \"cherry\"}\nset2 = {\"google\", \"microsoft\", \"apple\"}\n\nset1.intersection_update(set2)\n\nprint(set1)"
        },
        {
          "type": "output",
          "value": "{'apple'}"
        },
        {
          "type": "text",
          "value": "True and 1 in Intersection\n\nTrue and 1 are treated as duplicates. Same for False and 0."
        },
        {
          "type": "code",
          "value": "set1 = {\"apple\", 1, \"banana\", 0, \"cherry\"}\nset2 = {False, \"google\", 1, \"apple\", 2, True}\n\nset3 = set1.intersection(set2)\n\nprint(set3)"
        },
        {
          "type": "output",
          "value": "{False, 1, 'apple'}"
        },
        {
          "type": "text",
          "value": "4. difference()\n\nReturns items from first set that are not in second set."
        },
        {
          "type": "code",
          "value": "set1 = {\"apple\", \"banana\", \"cherry\"}\nset2 = {\"google\", \"microsoft\", \"apple\"}\n\nset3 = set1.difference(set2)\n\nprint(set3)"
        },
        {
          "type": "output",
          "value": "{'banana', 'cherry'}"
        },
        {
          "type": "text",
          "value": "Using - Operator"
        },
        {
          "type": "code",
          "value": "set3 = set1 - set2"
        },
        {
          "type": "text",
          "value": "difference_update()\n\nChanges original set by removing common items."
        },
        {
          "type": "code",
          "value": "set1 = {\"apple\", \"banana\", \"cherry\"}\nset2 = {\"google\", \"microsoft\", \"apple\"}\n\nset1.difference_update(set2)\n\nprint(set1)"
        },
        {
          "type": "output",
          "value": "{'banana', 'cherry'}"
        },
        {
          "type": "text",
          "value": "5. symmetric_difference()\n\nKeeps items that are NOT common in both sets."
        },
        {
          "type": "code",
          "value": "set1 = {\"apple\", \"banana\", \"cherry\"}\nset2 = {\"google\", \"microsoft\", \"apple\"}\n\nset3 = set1.symmetric_difference(set2)\n\nprint(set3)"
        },
        {
          "type": "output",
          "value": "{'banana', 'cherry', 'google', 'microsoft'}"
        },
        {
          "type": "text",
          "value": "Using ^ Operator"
        },
        {
          "type": "code",
          "value": "set3 = set1 ^ set2"
        },
        {
          "type": "text",
          "value": "symmetric_difference_update()\n\nChanges original set and keeps only non-common items."
        },
        {
          "type": "code",
          "value": "set1 = {\"apple\", \"banana\", \"cherry\"}\nset2 = {\"google\", \"microsoft\", \"apple\"}\n\nset1.symmetric_difference_update(set2)\n\nprint(set1)"
        },
        {
          "type": "output",
          "value": "{'banana', 'cherry', 'google', 'microsoft'}"
        },
        {
          "type": "text",
          "value": "Quick Summary Table"
        },
        {
          "type": "table",
          "headers": [
            "Method",
            "Result"
          ],
          "rows": [
            [
              "union()",
              "All unique items"
            ],
            [
              "update()",
              "Adds items to original set"
            ],
            [
              "intersection()",
              "Common items only"
            ],
            [
              "difference()",
              "Items only in first set"
            ],
            [
              "symmetric_difference()",
              "Non-common items"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Operators Summary"
        },
        {
          "type": "table",
          "headers": [
            "Operator",
            "Equivalent Method"
          ],
          "rows": [
            [
              "|",
              "union()"
            ],
            [
              "&",
              "intersection()"
            ],
            [
              "-",
              "difference()"
            ],
            [
              "^",
              "symmetric_difference()"
            ]
          ]
        }
      ],
      "questions": [
        {
          "question": "What is the difference between union() and intersection() in Python sets?",
          "answer": "union() combines all unique elements from both sets, while intersection() only returns elements that are present in both sets."
        },
        {
          "question": "Which set method would you use if you want to find elements that are in set A but not in set B?",
          "answer": "You would use the .difference() method (or the '-' operator): setA.difference(setB)."
        },
        {
          "question": "What does the .symmetric_difference() method return?",
          "answer": "It returns a new set containing only the elements that are unique to each set (elements not present in both sets)."
        }
      ]
    },
    {
      "id": "python-frozenset",
      "title": "Python frozenset",
      "category": "Basic",
      "definition": "A frozenset is an immutable version of a Python set. Once created, its elements cannot be added, removed, or modified, making it hashable and suitable for use as dictionary keys or elements of other sets.",
      "sections": [
        {
          "type": "text",
          "value": "A frozenset is an immutable version of a set.\n• set → mutable (can change)\n• frozenset → immutable (cannot change)\n\nOnce a frozenset is created, you cannot add, remove, or update items."
        },
        {
          "type": "text",
          "value": "Syntax\nfrozenset(iterable)"
        },
        {
          "type": "text",
          "value": "Creating a frozenset"
        },
        {
          "type": "code",
          "value": "myset = frozenset({\"apple\", \"banana\", \"cherry\"})\n\nprint(myset)"
        },
        {
          "type": "output",
          "value": "frozenset({'banana', 'apple', 'cherry'})"
        },
        {
          "type": "text",
          "value": "Type of frozenset"
        },
        {
          "type": "code",
          "value": "myset = frozenset({\"apple\", \"banana\"})\n\nprint(type(myset))"
        },
        {
          "type": "output",
          "value": "<class 'frozenset'>"
        },
        {
          "type": "text",
          "value": "Why Use frozenset?\n• Data that should not change\n• Safer collections\n• Sets as dictionary keys\n• Sets inside another set"
        },
        {
          "type": "text",
          "value": "Difference Between set and frozenset"
        },
        {
          "type": "table",
          "headers": ["Feature", "set", "frozenset"],
          "rows": [
            ["Mutable", "✔️ Yes", "❌ No"],
            ["Add items", "✔️ Yes", "❌ No"],
            ["Remove items", "✔️ Yes", "❌ No"],
            ["Indexed", "❌ No", "❌ No"],
            ["Duplicate values", "❌ No", "❌ No"]
          ]
        },
        {
          "type": "text",
          "value": "Cannot Add Items"
        },
        {
          "type": "code",
          "value": "myset = frozenset({\"apple\", \"banana\"})\n\n# myset.add(\"orange\")"
        },
        {
          "type": "output",
          "value": "AttributeError: 'frozenset' object has no attribute 'add'"
        },
        {
          "type": "text",
          "value": "Cannot Remove Items"
        },
        {
          "type": "code",
          "value": "myset = frozenset({\"apple\", \"banana\"})\n\n# myset.remove(\"apple\")"
        },
        {
          "type": "output",
          "value": "AttributeError: 'frozenset' object has no attribute 'remove'"
        },
        {
          "type": "text",
          "value": "Loop Through frozenset\n\nYou can loop through items using for."
        },
        {
          "type": "code",
          "value": "myset = frozenset({\"apple\", \"banana\", \"cherry\"})\n\nfor x in myset:\n    print(x)"
        },
        {
          "type": "output",
          "value": "banana\napple\ncherry"
        },
        {
          "type": "text",
          "value": "Check Item Exists"
        },
        {
          "type": "code",
          "value": "myset = frozenset({\"apple\", \"banana\", \"cherry\"})\n\nprint(\"banana\" in myset)"
        },
        {
          "type": "output",
          "value": "True"
        },
        {
          "type": "text",
          "value": "frozenset with List"
        },
        {
          "type": "code",
          "value": "numbers = [1, 2, 3, 4]\n\nfset = frozenset(numbers)\n\nprint(fset)"
        },
        {
          "type": "output",
          "value": "frozenset({1, 2, 3, 4})"
        },
        {
          "type": "text",
          "value": "frozenset Methods\n\nfrozenset supports read-only set methods:"
        },
        {
          "type": "table",
          "headers": ["Method", "Purpose"],
          "rows": [
            ["union()", "Combine sets"],
            ["intersection()", "Common items"],
            ["difference()", "Different items"],
            ["issubset()", "Check subset"],
            ["issuperset()", "Check superset"]
          ]
        },
        {
          "type": "text",
          "value": "Example: union()"
        },
        {
          "type": "code",
          "value": "a = frozenset({1, 2, 3})\nb = frozenset({3, 4, 5})\n\nc = a.union(b)\n\nprint(c)"
        },
        {
          "type": "output",
          "value": "frozenset({1, 2, 3, 4, 5})"
        },
        {
          "type": "text",
          "value": "Example: intersection()"
        },
        {
          "type": "code",
          "value": "a = frozenset({1, 2, 3})\nb = frozenset({2, 3, 4})\n\nprint(a.intersection(b))"
        },
        {
          "type": "output",
          "value": "frozenset({2, 3})"
        },
        {
          "type": "text",
          "value": "frozenset as Dictionary Key\n\nNormal sets cannot be dictionary keys because they are mutable. But frozenset can be used."
        },
        {
          "type": "code",
          "value": "mydict = {\n    frozenset({1, 2, 3}): \"Numbers\"\n}\n\nprint(mydict)"
        },
        {
          "type": "output",
          "value": "{frozenset({1, 2, 3}): 'Numbers'}"
        },
        {
          "type": "text",
          "value": "Set Inside Another Set\n\nNormal sets cannot be stored inside sets."
        },
        {
          "type": "code",
          "value": "a = {1, 2}\n# b = {a}\n# Output: TypeError: unhashable type: 'set'"
        },
        {
          "type": "text",
          "value": "Using frozenset"
        },
        {
          "type": "code",
          "value": "a = frozenset({1, 2})\n\nb = {a}\n\nprint(b)"
        },
        {
          "type": "output",
          "value": "{frozenset({1, 2})}"
        },
        {
          "type": "text",
          "value": "Real-Time Example: Store permanent user roles"
        },
        {
          "type": "code",
          "value": "roles = frozenset({\"Admin\", \"Manager\", \"HR\"})\n\nprint(roles)"
        },
        {
          "type": "text",
          "value": "These roles cannot be modified accidentally."
        },
        {
          "type": "text",
          "value": "Quick Summary"
        },
        {
          "type": "table",
          "headers": ["Topic", "frozenset Support"],
          "rows": [
            ["Mutable", "❌ No"],
            ["Ordered", "❌ No"],
            ["Duplicate values", "❌ No"],
            ["Add/Remove items", "❌ Not allowed"],
            ["Looping", "✔️ Yes"],
            ["Membership check", "✔️ Yes"],
            ["Dictionary key", "✔️ Yes"]
          ]
        }
      ],
      "questions": [
        {
          "question": "What is the main difference between a set and a frozenset?",
          "answer": "A set is mutable (you can add or remove items), while a frozenset is immutable (it cannot be changed after creation)."
        },
        {
          "question": "Why can a frozenset be used as a dictionary key while a normal set cannot?",
          "answer": "Dictionary keys must be hashable (immutable). Since a normal set is mutable, it is unhashable. A frozenset is immutable and therefore hashable, making it valid for use as a key."
        },
        {
          "question": "Does a frozenset support the .add() or .remove() methods?",
          "answer": "No. Attempting to use .add() or .remove() on a frozenset will raise an AttributeError because it is immutable."
        }
      ]
    },
    {
      "id": "python-frozenset-methods",
      "title": "Python frozenset Methods",
      "category": "Basic",
      "definition": "While frozensets are immutable and do not support methods that modify data (like add or remove), they support a wide range of read-only operations for set comparison, subset checking, and combining elements.",
      "sections": [
        {
          "type": "text",
          "value": "A frozenset is immutable, so methods that modify data like add() or remove() are not available. However, many read-only set operations are supported."
        },
        {
          "type": "table",
          "headers": [
            "Method",
            "Purpose"
          ],
          "rows": [
            [
              "copy()",
              "Returns a copy"
            ],
            [
              "difference()",
              "Items only in first set"
            ],
            [
              "intersection()",
              "Common items"
            ],
            [
              "isdisjoint()",
              "Check no common items"
            ],
            [
              "issubset()",
              "Check subset"
            ],
            [
              "issuperset()",
              "Check superset"
            ],
            [
              "symmetric_difference()",
              "Non-common items"
            ],
            [
              "union()",
              "Combine all unique items"
            ]
          ]
        },
        {
          "type": "text",
          "value": "1. copy()\n\nReturns a copy of the frozenset."
        },
        {
          "type": "code",
          "value": "a = frozenset({1, 2, 3})\n\nb = a.copy()\n\nprint(b)"
        },
        {
          "type": "output",
          "value": "frozenset({1, 2, 3})"
        },
        {
          "type": "text",
          "value": "2. difference()\n\nReturns items present in first frozenset but not in second. Use the - operator as a shorthand."
        },
        {
          "type": "code",
          "value": "a = frozenset({1, 2, 3, 4})\nb = frozenset({3, 4})\n\nc = a.difference(b)\n# OR\n# c = a - b\n\nprint(c)"
        },
        {
          "type": "output",
          "value": "frozenset({1, 2})"
        },
        {
          "type": "text",
          "value": "3. intersection()\n\nReturns common items from both frozensets. Use the & operator as a shorthand."
        },
        {
          "type": "code",
          "value": "a = frozenset({1, 2, 3})\nb = frozenset({2, 3, 4})\n\nc = a.intersection(b)\n# OR\n# c = a & b\n\nprint(c)"
        },
        {
          "type": "output",
          "value": "frozenset({2, 3})"
        },
        {
          "type": "text",
          "value": "4. isdisjoint()\n\nReturns True if both sets have no common items."
        },
        {
          "type": "code",
          "value": "a = frozenset({1, 2})\nb = frozenset({3, 4})\n\nprint(a.isdisjoint(b))"
        },
        {
          "type": "output",
          "value": "True"
        },
        {
          "type": "text",
          "value": "5. issubset()\n\nReturns True if all items of one set exist in another. Use the <= operator as a shorthand."
        },
        {
          "type": "code",
          "value": "a = frozenset({1, 2})\nb = frozenset({1, 2, 3, 4})\n\nprint(a.issubset(b))"
        },
        {
          "type": "output",
          "value": "True"
        },
        {
          "type": "text",
          "value": "6. issuperset()\n\nReturns True if a set contains all items of another set. Use the >= operator as a shorthand."
        },
        {
          "type": "code",
          "value": "a = frozenset({1, 2, 3, 4})\nb = frozenset({1, 2})\n\nprint(a.issuperset(b))"
        },
        {
          "type": "output",
          "value": "True"
        },
        {
          "type": "text",
          "value": "7. symmetric_difference()\n\nReturns items not common in both sets. Use the ^ operator as a shorthand."
        },
        {
          "type": "code",
          "value": "a = frozenset({1, 2, 3})\nb = frozenset({3, 4, 5})\n\nc = a.symmetric_difference(b)\n# OR\n# c = a ^ b\n\nprint(c)"
        },
        {
          "type": "output",
          "value": "frozenset({1, 2, 4, 5})"
        },
        {
          "type": "text",
          "value": "8. union()\n\nCombines all unique items. Use the | operator as a shorthand."
        },
        {
          "type": "code",
          "value": "a = frozenset({1, 2})\nb = frozenset({3, 4})\n\nc = a.union(b)\n# OR\n# c = a | b\n\nprint(c)"
        },
        {
          "type": "output",
          "value": "frozenset({1, 2, 3, 4})"
        },
        {
          "type": "text",
          "value": "Chaining Multiple Methods"
        },
        {
          "type": "code",
          "value": "a = frozenset({1, 2})\nb = frozenset({2, 3})\nc = frozenset({4, 5})\n\nresult = a.union(b).union(c)\n\nprint(result)"
        },
        {
          "type": "output",
          "value": "frozenset({1, 2, 3, 4, 5})"
        },
        {
          "type": "text",
          "value": "⚠️ Important Note: These methods are NOT available in frozenset because it is immutable:\n• add()\n• remove()\n• discard()\n• update()\n• clear()\n• pop()"
        },
        {
          "type": "text",
          "value": "Real-Time Example: Student Course Groups"
        },
        {
          "type": "code",
          "value": "python_students = frozenset({\"Ram\", \"Sita\", \"Anu\"})\njava_students = frozenset({\"Sita\", \"Kiran\"})\n\ncommon = python_students.intersection(java_students)\n\nprint(common)"
        },
        {
          "type": "output",
          "value": "frozenset({'Sita'})"
        },
        {
          "type": "text",
          "value": "Quick Summary Table"
        },
        {
          "type": "table",
          "headers": [
            "Method",
            "Purpose"
          ],
          "rows": [
            [
              "union()",
              "Combine sets"
            ],
            [
              "intersection()",
              "Common items"
            ],
            [
              "difference()",
              "Different items"
            ],
            [
              "symmetric_difference()",
              "Non-common items"
            ],
            [
              "issubset()",
              "Check subset"
            ],
            [
              "issuperset()",
              "Check superset"
            ],
            [
              "isdisjoint()",
              "Check no common items"
            ],
            [
              "copy()",
              "Copy frozenset"
            ]
          ]
        }
      ],
      "questions": [
        {
          "question": "Can you use the .union() method on a frozenset to join it with a regular set?",
          "answer": "Yes. A frozenset's .union() method can accept any iterable, including a regular set. The result will always be a new frozenset."
        },
        {
          "question": "What is the difference between .difference() and .symmetric_difference() in frozensets?",
          "answer": ".difference() returns items only in the first set. .symmetric_difference() returns items that are unique to each set (not common to both)."
        },
        {
          "question": "How do you check if two frozensets have absolutely no items in common?",
          "answer": "You can use the .isdisjoint() method, which returns True if there are zero common elements."
        }
      ]
    },
    {
      "id": "python-set-methods-complete",
      "title": "Python - Set Methods",
      "category": "Basic",
      "definition": "Python sets provide a comprehensive collection of built-in methods designed for element manipulation, set comparison, and performing mathematical operations such as union, intersection, and difference.",
      "sections": [
        {
          "type": "text",
          "value": "Python sets provide many built-in methods to add, remove, join, and compare sets."
        },
        {
          "type": "table",
          "headers": [
            "Method",
            "Description"
          ],
          "rows": [
            [
              "add()",
              "Adds one item"
            ],
            [
              "clear()",
              "Removes all items"
            ],
            [
              "copy()",
              "Returns copy of set"
            ],
            [
              "difference()",
              "Items only in first set"
            ],
            [
              "difference_update()",
              "Removes common items"
            ],
            [
              "discard()",
              "Removes item safely"
            ],
            [
              "intersection()",
              "Common items only"
            ],
            [
              "intersection_update()",
              "Keeps only common items"
            ],
            [
              "isdisjoint()",
              "Checks no common items"
            ],
            [
              "issubset()",
              "Checks subset"
            ],
            [
              "issuperset()",
              "Checks superset"
            ],
            [
              "pop()",
              "Removes random item"
            ],
            [
              "remove()",
              "Removes specific item"
            ],
            [
              "symmetric_difference()",
              "Non-common items"
            ],
            [
              "symmetric_difference_update()",
              "Updates with non-common items"
            ],
            [
              "union()",
              "Combines sets"
            ],
            [
              "update()",
              "Adds items from another iterable"
            ]
          ]
        },
        {
          "type": "text",
          "value": "1. add()\nAdds one item to the set."
        },
        {
          "type": "code",
          "value": "fruits = {\"apple\", \"banana\"}\nfruits.add(\"orange\")\n\nprint(fruits)"
        },
        {
          "type": "output",
          "value": "{'banana', 'orange', 'apple'}"
        },
        {
          "type": "text",
          "value": "2. clear()\nRemoves all items from the set."
        },
        {
          "type": "code",
          "value": "fruits = {\"apple\", \"banana\"}\nfruits.clear()\n\nprint(fruits)"
        },
        {
          "type": "output",
          "value": "set()"
        },
        {
          "type": "text",
          "value": "3. copy()\nReturns a copy of the set."
        },
        {
          "type": "code",
          "value": "a = {\"apple\", \"banana\"}\nb = a.copy()\n\nprint(b)"
        },
        {
          "type": "output",
          "value": "{'apple', 'banana'}"
        },
        {
          "type": "text",
          "value": "4. difference()\nReturns items present only in first set."
        },
        {
          "type": "code",
          "value": "a = {\"apple\", \"banana\", \"cherry\"}\nb = {\"banana\"}\n\nprint(a.difference(b))"
        },
        {
          "type": "output",
          "value": "{'apple', 'cherry'}"
        },
        {
          "type": "text",
          "value": "5. difference_update()\nRemoves common items from original set."
        },
        {
          "type": "code",
          "value": "a = {\"apple\", \"banana\", \"cherry\"}\nb = {\"banana\"}\n\na.difference_update(b)\n\nprint(a)"
        },
        {
          "type": "output",
          "value": "{'apple', 'cherry'}"
        },
        {
          "type": "text",
          "value": "6. discard()\nRemoves item safely without error."
        },
        {
          "type": "code",
          "value": "fruits = {\"apple\", \"banana\"}\nfruits.discard(\"banana\")\n\nprint(fruits)"
        },
        {
          "type": "output",
          "value": "{'apple'}"
        },
        {
          "type": "text",
          "value": "7. intersection()\nReturns common items."
        },
        {
          "type": "code",
          "value": "a = {\"apple\", \"banana\"}\nb = {\"banana\", \"orange\"}\n\nprint(a.intersection(b))"
        },
        {
          "type": "output",
          "value": "{'banana'}"
        },
        {
          "type": "text",
          "value": "8. intersection_update()\nKeeps only common items in original set."
        },
        {
          "type": "code",
          "value": "a = {\"apple\", \"banana\"}\nb = {\"banana\", \"orange\"}\n\na.intersection_update(b)\n\nprint(a)"
        },
        {
          "type": "output",
          "value": "{'banana'}"
        },
        {
          "type": "text",
          "value": "9. isdisjoint()\nReturns True if no common items exist."
        },
        {
          "type": "code",
          "value": "a = {\"apple\", \"banana\"}\nb = {\"orange\", \"kiwi\"}\n\nprint(a.isdisjoint(b))"
        },
        {
          "type": "output",
          "value": "True"
        },
        {
          "type": "text",
          "value": "10. issubset()\nChecks whether all items exist in another set."
        },
        {
          "type": "code",
          "value": "a = {\"apple\"}\nb = {\"apple\", \"banana\"}\n\nprint(a.issubset(b))"
        },
        {
          "type": "output",
          "value": "True"
        },
        {
          "type": "text",
          "value": "11. issuperset()\nChecks whether set contains all items of another set."
        },
        {
          "type": "code",
          "value": "a = {\"apple\", \"banana\"}\nb = {\"apple\"}\n\nprint(a.issuperset(b))"
        },
        {
          "type": "output",
          "value": "True"
        },
        {
          "type": "text",
          "value": "12. pop()\nRemoves random item."
        },
        {
          "type": "code",
          "value": "fruits = {\"apple\", \"banana\", \"orange\"}\n\nx = fruits.pop()\n\nprint(x)\nprint(fruits)"
        },
        {
          "type": "output",
          "value": "banana\n{'apple', 'orange'}"
        },
        {
          "type": "text",
          "value": "13. remove()\nRemoves specific item. Gives error if item does not exist."
        },
        {
          "type": "code",
          "value": "fruits = {\"apple\", \"banana\"}\nfruits.remove(\"banana\")\n\nprint(fruits)"
        },
        {
          "type": "output",
          "value": "{'apple'}"
        },
        {
          "type": "text",
          "value": "14. symmetric_difference()\nReturns non-common items."
        },
        {
          "type": "code",
          "value": "a = {\"apple\", \"banana\"}\nb = {\"banana\", \"orange\"}\n\nprint(a.symmetric_difference(b))"
        },
        {
          "type": "output",
          "value": "{'apple', 'orange'}"
        },
        {
          "type": "text",
          "value": "15. symmetric_difference_update()\nUpdates original set with non-common items."
        },
        {
          "type": "code",
          "value": "a = {\"apple\", \"banana\"}\nb = {\"banana\", \"orange\"}\n\na.symmetric_difference_update(b)\n\nprint(a)"
        },
        {
          "type": "output",
          "value": "{'apple', 'orange'}"
        },
        {
          "type": "text",
          "value": "16. union()\nCombines all unique items."
        },
        {
          "type": "code",
          "value": "a = {\"apple\", \"banana\"}\nb = {\"orange\", \"kiwi\"}\n\nprint(a.union(b))"
        },
        {
          "type": "output",
          "value": "{'banana', 'orange', 'apple', 'kiwi'}"
        },
        {
          "type": "text",
          "value": "17. update()\nAdds items from another iterable."
        },
        {
          "type": "code",
          "value": "a = {\"apple\", \"banana\"}\nb = {\"orange\", \"kiwi\"}\n\na.update(b)\n\nprint(a)"
        },
        {
          "type": "output",
          "value": "{'banana', 'orange', 'apple', 'kiwi'}"
        },
        {
          "type": "text",
          "value": "Operators Equivalent"
        },
        {
          "type": "table",
          "headers": [
            "Operator",
            "Method"
          ],
          "rows": [
            [
              "|",
              "union()"
            ],
            [
              "&",
              "intersection()"
            ],
            [
              "-",
              "difference()"
            ],
            [
              "^",
              "symmetric_difference()"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Real-Time Example: Student Groups"
        },
        {
          "type": "code",
          "value": "python_students = {\"Ram\", \"Sita\"}\njava_students = {\"Sita\", \"Kiran\"}\n\nall_students = python_students.union(java_students)\n\nprint(all_students)"
        },
        {
          "type": "output",
          "value": "{'Ram', 'Sita', 'Kiran'}"
        },
        {
          "type": "text",
          "value": "Quick Summary Categories"
        },
        {
          "type": "table",
          "headers": [
            "Category",
            "Methods"
          ],
          "rows": [
            [
              "Add Items",
              "add(), update()"
            ],
            [
              "Remove Items",
              "remove(), discard(), pop(), clear()"
            ],
            [
              "Join Sets",
              "union(), intersection()"
            ],
            [
              "Compare Sets",
              "issubset(), issuperset(), isdisjoint()"
            ],
            [
              "Modify Sets",
              "difference_update(), intersection_update()"
            ]
          ]
        }
      ],
      "questions": [
        {
          "question": "What is the difference between remove() and discard()?",
          "answer": "Both remove an item, but remove() raises a KeyError if the item is not found, while discard() does nothing."
        },
        {
          "question": "How do 'update' methods (like difference_update) differ from their counterparts (like difference)?",
          "answer": "Counterparts return a NEW set without modifying the original. 'Update' methods modify the ORIGINAL set in-place and usually return None."
        },
        {
          "question": "What happens when you use .pop() on a set?",
          "answer": "It removes and returns a random element from the set. Since sets are unordered, you cannot predict which element will be removed."
        }
      ]
    },
    {
      "id": "python-dictionaries",
      "title": "Python Dictionaries",
      "category": "Basic",
      "definition": "A Python dictionary is an ordered (as of Python 3.7), changeable collection that stores data in key:value pairs. Dictionaries do not allow duplicate keys and are highly efficient for data retrieval.",
      "sections": [
        {
          "type": "text",
          "value": "A dictionary in Python is used to store data in key : value pairs.\n• Keys must be unique\n• Values can be any data type\n\nDictionaries are:\n• Ordered\n• Changeable (mutable)\n• No duplicate keys allowed"
        },
        {
          "type": "text",
          "value": "Creating a Dictionary"
        },
        {
          "type": "code",
          "value": "thisdict = {\n  \"brand\": \"Ford\",\n  \"model\": \"Mustang\",\n  \"year\": 1964\n}\n\nprint(thisdict)"
        },
        {
          "type": "output",
          "value": "{'brand': 'Ford', 'model': 'Mustang', 'year': 1964}"
        },
        {
          "type": "text",
          "value": "Access Dictionary Items\n\nUse the key name inside square brackets []."
        },
        {
          "type": "code",
          "value": "thisdict = {\n  \"brand\": \"Ford\",\n  \"model\": \"Mustang\",\n  \"year\": 1964\n}\n\nprint(thisdict[\"brand\"])"
        },
        {
          "type": "output",
          "value": "Ford"
        },
        {
          "type": "text",
          "value": "Ordered or Unordered?\n\nAs of Python version 3.7, dictionaries are ordered. In Python 3.6 and earlier, dictionaries were unordered.\n\nBeing 'Ordered' means:\n• Items keep insertion order\n• Order will remain same"
        },
        {
          "type": "code",
          "value": "data = {\n  \"a\": 1,\n  \"b\": 2,\n  \"c\": 3\n}\n\nprint(data)"
        },
        {
          "type": "output",
          "value": "{'a': 1, 'b': 2, 'c': 3}"
        },
        {
          "type": "text",
          "value": "Changeable\n\nDictionaries are mutable, so values can be changed."
        },
        {
          "type": "code",
          "value": "thisdict = {\n  \"brand\": \"Ford\",\n  \"year\": 1964\n}\n\nthisdict[\"year\"] = 2025\n\nprint(thisdict)"
        },
        {
          "type": "output",
          "value": "{'brand': 'Ford', 'year': 2025}"
        },
        {
          "type": "text",
          "value": "Duplicate Keys Not Allowed\n\nIf duplicate keys are used, the latest value overwrites the old value."
        },
        {
          "type": "code",
          "value": "thisdict = {\n  \"brand\": \"Ford\",\n  \"year\": 1964,\n  \"year\": 2020\n}\n\nprint(thisdict)"
        },
        {
          "type": "output",
          "value": "{'brand': 'Ford', 'year': 2020}"
        },
        {
          "type": "text",
          "value": "Dictionary Length\n\nUse len() to count items."
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
          "value": "Dictionary Data Types\n\nDictionary values can store different data types, including lists."
        },
        {
          "type": "code",
          "value": "thisdict = {\n  \"brand\": \"Ford\",\n  \"electric\": False,\n  \"year\": 1964,\n  \"colors\": [\"red\", \"white\", \"blue\"]\n}\n\nprint(thisdict)"
        },
        {
          "type": "output",
          "value": "{\n 'brand': 'Ford',\n 'electric': False,\n 'year': 1964,\n 'colors': ['red', 'white', 'blue']\n}"
        },
        {
          "type": "text",
          "value": "type() Function\n\nUse type() to check the data type."
        },
        {
          "type": "code",
          "value": "print(type(thisdict))"
        },
        {
          "type": "output",
          "value": "<class 'dict'>"
        },
        {
          "type": "text",
          "value": "Using dict() Constructor\n\nYou can also create a dictionary using the dict() constructor."
        },
        {
          "type": "code",
          "value": "thisdict = dict(\n  name = \"John\",\n  age = 36,\n  country = \"Norway\"\n)\n\nprint(thisdict)"
        },
        {
          "type": "output",
          "value": "{'name': 'John', 'age': 36, 'country': 'Norway'}"
        },
        {
          "type": "text",
          "value": "Real-Time Example\n\nStoring a student record:"
        },
        {
          "type": "code",
          "value": "student = {\n  \"id\": 101,\n  \"name\": \"Vasudha\",\n  \"course\": \"Python\",\n  \"marks\": 95\n}\n\nprint(student[\"name\"])\nprint(student[\"marks\"])"
        },
        {
          "type": "output",
          "value": "Vasudha\n95"
        },
        {
          "type": "text",
          "value": "Important Points"
        },
        {
          "type": "table",
          "headers": [
            "Feature",
            "Description"
          ],
          "rows": [
            [
              "Ordered",
              "Maintains insertion order"
            ],
            [
              "Changeable",
              "Can add/update/delete items"
            ],
            [
              "Duplicate Keys",
              "Not allowed (overwrites older)"
            ],
            [
              "Syntax",
              "{key: value}"
            ],
            [
              "Data Type",
              "dict"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Dictionary Syntax Guide"
        },
        {
          "type": "code",
          "value": "dictionary_name = {\n   key1: value1,\n   key2: value2\n}"
        }
      ],
      "questions": [
        {
          "question": "What happens if you try to add a duplicate key to a Python dictionary?",
          "answer": "Python dictionaries do not allow duplicate keys. If you provide a duplicate key, the latest value assigned to that key will overwrite the previous one."
        },
        {
          "question": "Since which version of Python are dictionaries considered 'ordered'?",
          "answer": "Dictionaries are considered ordered starting from Python version 3.7. In version 3.6, they were also ordered in CPython, but it became a language feature in 3.7."
        },
        {
          "question": "How do you access a value in a dictionary if you know its key?",
          "answer": "You can access a value by placing the key name inside square brackets [] after the dictionary variable, e.g., my_dict['key_name']."
        }
      ]
    },
    {
      "id": "python-access-dictionary-items",
      "title": "Python - Access Dictionary Items",
      "category": "Basic",
      "definition": "Dictionary items can be accessed via their keys using either square bracket notation or the get() method. Python also provides view objects for keys, values, and items that dynamically update as the dictionary changes.",
      "sections": [
        {
          "type": "text",
          "value": "Dictionary items are accessed using their key names."
        },
        {
          "type": "text",
          "value": "Access Items Using []\n\nUse square brackets with the key name."
        },
        {
          "type": "code",
          "value": "thisdict = {\n  \"brand\": \"Ford\",\n  \"model\": \"Mustang\",\n  \"year\": 1964\n}\n\nx = thisdict[\"model\"]\n\nprint(x)"
        },
        {
          "type": "output",
          "value": "Mustang"
        },
        {
          "type": "text",
          "value": "Access Items Using get()\n\nget() also returns the value of a key, but it handles missing keys differently."
        },
        {
          "type": "code",
          "value": "thisdict = {\n  \"brand\": \"Ford\",\n  \"model\": \"Mustang\",\n  \"year\": 1964\n}\n\nx = thisdict.get(\"model\")\n\nprint(x)"
        },
        {
          "type": "output",
          "value": "Mustang"
        },
        {
          "type": "text",
          "value": "Difference Between [] and get()"
        },
        {
          "type": "table",
          "headers": [
            "Method",
            "If Key Does Not Exist"
          ],
          "rows": [
            [
              "dict[key]",
              "Gives Error (KeyError)"
            ],
            [
              "dict.get(key)",
              "Returns None (or a default value)"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Example Using []"
        },
        {
          "type": "code",
          "value": "thisdict = {\"brand\": \"Ford\"}\n# print(thisdict[\"model\"]) # Output: KeyError: 'model'"
        },
        {
          "type": "text",
          "value": "Example Using get()"
        },
        {
          "type": "code",
          "value": "thisdict = {\"brand\": \"Ford\"}\nprint(thisdict.get(\"model\"))"
        },
        {
          "type": "output",
          "value": "None"
        },
        {
          "type": "text",
          "value": "Get Keys Using keys()\n\nThe keys() method returns a view object containing all keys in the dictionary."
        },
        {
          "type": "code",
          "value": "thisdict = {\n  \"brand\": \"Ford\",\n  \"model\": \"Mustang\",\n  \"year\": 1964\n}\n\nx = thisdict.keys()\n\nprint(x)"
        },
        {
          "type": "output",
          "value": "dict_keys(['brand', 'model', 'year'])"
        },
        {
          "type": "text",
          "value": "keys() is Dynamic (View Object)\n\nIf the dictionary changes, the keys view also updates automatically."
        },
        {
          "type": "code",
          "value": "car = {\n  \"brand\": \"Ford\",\n  \"model\": \"Mustang\",\n  \"year\": 1964\n}\n\nx = car.keys()\nprint(x)   # before change\n\ncar[\"color\"] = \"white\"\nprint(x)   # after change"
        },
        {
          "type": "output",
          "value": "dict_keys(['brand', 'model', 'year'])\ndict_keys(['brand', 'model', 'year', 'color'])"
        },
        {
          "type": "text",
          "value": "Get Values Using values()\n\nThe values() method returns a view object containing all values."
        },
        {
          "type": "code",
          "value": "thisdict = {\n  \"brand\": \"Ford\",\n  \"model\": \"Mustang\",\n  \"year\": 1964\n}\n\nx = thisdict.values()\n\nprint(x)"
        },
        {
          "type": "output",
          "value": "dict_values(['Ford', 'Mustang', 1964])"
        },
        {
          "type": "text",
          "value": "values() Updates Automatically"
        },
        {
          "type": "code",
          "value": "car = {\n  \"brand\": \"Ford\",\n  \"model\": \"Mustang\",\n  \"year\": 1964\n}\n\nx = car.values()\nprint(x)\n\ncar[\"year\"] = 2020\nprint(x)"
        },
        {
          "type": "output",
          "value": "dict_values(['Ford', 'Mustang', 1964])\ndict_values(['Ford', 'Mustang', 2020])"
        },
        {
          "type": "text",
          "value": "Get Items Using items()\n\nThe items() method returns a view object containing key-value pairs as tuples."
        },
        {
          "type": "code",
          "value": "thisdict = {\n  \"brand\": \"Ford\",\n  \"model\": \"Mustang\",\n  \"year\": 1964\n}\n\nx = thisdict.items()\n\nprint(x)"
        },
        {
          "type": "output",
          "value": "dict_items([('brand', 'Ford'), ('model', 'Mustang'), ('year', 1964)])"
        },
        {
          "type": "text",
          "value": "items() Updates Automatically"
        },
        {
          "type": "code",
          "value": "car = {\n  \"brand\": \"Ford\",\n  \"model\": \"Mustang\",\n  \"year\": 1964\n}\n\nx = car.items()\nprint(x)\n\ncar[\"color\"] = \"red\"\nprint(x)"
        },
        {
          "type": "output",
          "value": "dict_items([('brand', 'Ford'), ('model', 'Mustang'), ('year', 1964)])\ndict_items([('brand', 'Ford'), ('model', 'Mustang'), ('year', 1964), ('color', 'red')])"
        },
        {
          "type": "text",
          "value": "Check if Key Exists Using in\n\nUse the in keyword to check whether a key exists in the dictionary."
        },
        {
          "type": "code",
          "value": "thisdict = {\n  \"brand\": \"Ford\",\n  \"model\": \"Mustang\",\n  \"year\": 1964\n}\n\nif \"model\" in thisdict:\n    print(\"Yes, model key exists\")"
        },
        {
          "type": "output",
          "value": "Yes, model key exists"
        },
        {
          "type": "text",
          "value": "Real-Time Example: Student Record Access"
        },
        {
          "type": "code",
          "value": "student = {\n  \"id\": 101,\n  \"name\": \"Vasudha\",\n  \"course\": \"Python\",\n  \"marks\": 95\n}\n\nprint(student[\"name\"])\nprint(student.keys())\nprint(student.values())\nprint(student.items())\n\nif \"course\" in student:\n    print(\"Course key exists\")"
        },
        {
          "type": "output",
          "value": "Vasudha\ndict_keys(['id', 'name', 'course', 'marks'])\ndict_values([101, 'Vasudha', 'Python', 95])\ndict_items([('id', 101), ('name', 'Vasudha'), ('course', 'Python'), ('marks', 95)])\nCourse key exists"
        },
        {
          "type": "text",
          "value": "Important Access Methods"
        },
        {
          "type": "table",
          "headers": [
            "Method",
            "Purpose"
          ],
          "rows": [
            [
              "dict[key]",
              "Access value (raises error if missing)"
            ],
            [
              "get()",
              "Access value safely (returns None if missing)"
            ],
            [
              "keys()",
              "Get all keys as a dynamic view"
            ],
            [
              "values()",
              "Get all values as a dynamic view"
            ],
            [
              "items()",
              "Get key-value pairs as tuples"
            ],
            [
              "in",
              "Check for key existence"
            ]
          ]
        }
      ],
      "questions": [
        {
          "question": "What is the advantage of using the .get() method over square brackets []?",
          "answer": "The .get() method returns None (or a specified default value) if the key does not exist, preventing the program from crashing with a KeyError."
        },
        {
          "question": "What does it mean that .keys(), .values(), and .items() return 'view objects'?",
          "answer": "View objects are dynamic. This means if you change the dictionary (add, update, or remove items), the view object will reflect those changes automatically without needing to call the method again."
        },
        {
          "question": "How can you check if a specific key exists in a dictionary using a single line of code?",
          "answer": "You can use the 'in' keyword, for example: 'my_key' in my_dictionary."
        }
      ]
    },
    {
      "id": "python-change-dictionary-items",
      "title": "Python - Change Dictionary Items",
      "category": "Basic",
      "definition": "Dictionaries are mutable collections, allowing you to modify existing values by referring to their keys or using the update() method. The update() method is particularly useful for changing multiple items simultaneously or adding new items if the specified keys do not already exist.",
      "sections": [
        {
          "type": "text",
          "value": "Dictionaries are changeable, which means you can modify their values after creation."
        },
        {
          "type": "text",
          "value": "Change Values\n\nYou can change the value of a specific item by referring to its key name:\n\nSyntax: dictionary[key] = new_value"
        },
        {
          "type": "code",
          "value": "thisdict = {\n  \"brand\": \"Ford\",\n  \"model\": \"Mustang\",\n  \"year\": 1964\n}\n\nthisdict[\"year\"] = 2020\n\nprint(thisdict)"
        },
        {
          "type": "output",
          "value": "{'brand': 'Ford', 'model': 'Mustang', 'year': 2020}"
        },
        {
          "type": "text",
          "value": "Change Multiple Items Using update()\n\nThe update() method updates the dictionary with items from a given argument. The argument must be a dictionary, or an iterable object with key:value pairs.\n\nSyntax: dictionary.update({key:value})"
        },
        {
          "type": "code",
          "value": "thisdict = {\n  \"brand\": \"Ford\",\n  \"model\": \"Mustang\",\n  \"year\": 1964\n}\n\nthisdict.update({\"year\": 2025})\n\nprint(thisdict)"
        },
        {
          "type": "output",
          "value": "{'brand': 'Ford', 'model': 'Mustang', 'year': 2025}"
        },
        {
          "type": "text",
          "value": "Change Multiple Values Individually"
        },
        {
          "type": "code",
          "value": "student = {\n  \"name\": \"Vasudha\",\n  \"course\": \"Python\",\n  \"marks\": 85\n}\n\nstudent[\"marks\"] = 95\nstudent[\"course\"] = \"Full Stack Python\"\n\nprint(student)"
        },
        {
          "type": "output",
          "value": "{\n 'name': 'Vasudha',\n 'course': 'Full Stack Python',\n 'marks': 95\n}"
        },
        {
          "type": "text",
          "value": "Using update() for Multiple Changes"
        },
        {
          "type": "code",
          "value": "student = {\n  \"name\": \"Vasudha\",\n  \"course\": \"Python\",\n  \"marks\": 85\n}\n\nstudent.update({\n  \"marks\": 99,\n  \"course\": \"MERN Stack\"\n})\n\nprint(student)"
        },
        {
          "type": "output",
          "value": "{\n 'name': 'Vasudha',\n 'course': 'MERN Stack',\n 'marks': 99\n}"
        },
        {
          "type": "text",
          "value": "Add New Item While Updating\n\nIf the key provided to update() does not exist, the item will be added to the dictionary."
        },
        {
          "type": "code",
          "value": "car = {\n  \"brand\": \"Ford\",\n  \"model\": \"Mustang\"\n}\n\ncar.update({\"color\": \"Black\"})\n\nprint(car)"
        },
        {
          "type": "output",
          "value": "{'brand': 'Ford', 'model': 'Mustang', 'color': 'Black'}"
        },
        {
          "type": "text",
          "value": "Difference Between Assignment and update()"
        },
        {
          "type": "table",
          "headers": [
            "Method",
            "Purpose"
          ],
          "rows": [
            [
              "dict[key] = value",
              "Change or add a single item"
            ],
            [
              "update()",
              "Change or add multiple items at once"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Real-Time Example: Employee Record Update"
        },
        {
          "type": "code",
          "value": "employee = {\n  \"id\": 101,\n  \"name\": \"Ravi\",\n  \"salary\": 25000\n}\n\n# Change salary\nemployee[\"salary\"] = 30000\n\n# Add department\nemployee[\"department\"] = \"IT\"\n\nprint(employee)"
        },
        {
          "type": "output",
          "value": "{'id': 101, 'name': 'Ravi', 'salary': 30000, 'department': 'IT'}"
        },
        {
          "type": "text",
          "value": "Important Points\n• Dictionaries are mutable objects.\n• Existing values can be changed via their keys.\n• New key:value pairs can be added using the same syntax.\n• update() can modify multiple items together or add new ones."
        },
        {
          "type": "text",
          "value": "Quick Summary"
        },
        {
          "type": "table",
          "headers": [
            "Operation",
            "Example"
          ],
          "rows": [
            [
              "Change item",
              "dict[\"age\"] = 25"
            ],
            [
              "Update item",
              "dict.update({\"age\": 25})"
            ],
            [
              "Add new item",
              "dict[\"city\"] = \"Delhi\""
            ],
            [
              "Multiple updates",
              "dict.update({\"a\": 1, \"b\": 2})"
            ]
          ]
        }
      ],
      "questions": [
        {
          "question": "What is the primary difference between dictionary[key] = value and dictionary.update()?",
          "answer": "Assignment (dict[key] = value) is typically used for changing or adding a single item. update() is used for changing or adding multiple items simultaneously using another dictionary or iterable."
        },
        {
          "question": "Does the .update() method only modify existing keys?",
          "answer": "No. If a key provided to the .update() method does not exist in the original dictionary, it will be added as a new key-value pair."
        },
        {
          "question": "Are dictionaries mutable or immutable in Python?",
          "answer": "Dictionaries are mutable, meaning their contents (values) can be changed after the dictionary has been created."
        }
      ]
    },
    {
      "id": "python-add-dictionary-items",
      "title": "Python - Add Dictionary Items",
      "category": "Basic",
      "definition": "Python dictionaries are dynamic, meaning they can grow in size after initialization. New key-value pairs can be added using square bracket assignment or the update() method, allowing for flexible data structures that can include nested dictionaries and various data types.",
      "sections": [
        {
          "type": "text",
          "value": "Dictionaries are dynamic, so you can add new items anytime."
        },
        {
          "type": "text",
          "value": "Add Items Using New Key\n\nYou can add a new item by using a new key name inside square brackets.\n\nSyntax: dictionary[\"new_key\"] = value"
        },
        {
          "type": "code",
          "value": "thisdict = {\n  \"brand\": \"Ford\",\n  \"model\": \"Mustang\",\n  \"year\": 1964\n}\n\nthisdict[\"color\"] = \"red\"\n\nprint(thisdict)"
        },
        {
          "type": "output",
          "value": "{'brand': 'Ford', 'model': 'Mustang', 'year': 1964, 'color': 'red'}"
        },
        {
          "type": "text",
          "value": "Add Multiple Items Using update()\n\nThe update() method can add many items at once.\n\nSyntax: dictionary.update({key:value})"
        },
        {
          "type": "code",
          "value": "thisdict = {\n  \"brand\": \"Ford\",\n  \"model\": \"Mustang\"\n}\n\nthisdict.update({\n  \"year\": 2025,\n  \"color\": \"black\"\n})\n\nprint(thisdict)"
        },
        {
          "type": "output",
          "value": "{'brand': 'Ford', 'model': 'Mustang', 'year': 2025, 'color': 'black'}"
        },
        {
          "type": "text",
          "value": "Add Different Data Types\n\nDictionary values can be any datatype, including lists and booleans."
        },
        {
          "type": "code",
          "value": "student = {\n  \"name\": \"Vasudha\"\n}\n\nstudent[\"marks\"] = 95\nstudent[\"passed\"] = True\nstudent[\"skills\"] = [\"Python\", \"SQL\", \"Flask\"]\n\nprint(student)"
        },
        {
          "type": "output",
          "value": "{'name': 'Vasudha', 'marks': 95, 'passed': True, 'skills': ['Python', 'SQL', 'Flask']}"
        },
        {
          "type": "text",
          "value": "Add Nested Dictionary\n\nYou can store a dictionary within another dictionary."
        },
        {
          "type": "code",
          "value": "employee = {\n  \"id\": 101,\n  \"name\": \"Ravi\"\n}\n\nemployee[\"address\"] = {\n  \"city\": \"Vijayawada\",\n  \"state\": \"AP\"\n}\n\nprint(employee)"
        },
        {
          "type": "output",
          "value": "{'id': 101, 'name': 'Ravi', 'address': {'city': 'Vijayawada', 'state': 'AP'}}"
        },
        {
          "type": "text",
          "value": "Add Item Using User Input"
        },
        {
          "type": "code",
          "value": "student = {}\n\n# name = input(\"Enter name: \")\n# marks = int(input(\"Enter marks: \"))\n\n# student[\"name\"] = name\n# student[\"marks\"] = marks\n\n# print(student)"
        },
        {
          "type": "text",
          "value": "Sample Output:\nEnter name: Vasudha\nEnter marks: 98\n{'name': 'Vasudha', 'marks': 98}"
        },
        {
          "type": "text",
          "value": "Difference Between Add and Update"
        },
        {
          "type": "table",
          "headers": [
            "Method",
            "Purpose"
          ],
          "rows": [
            [
              "dict[key] = value",
              "Add a single item"
            ],
            [
              "update()",
              "Add multiple items at once"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Real-Time Example: Bank Account Record"
        },
        {
          "type": "code",
          "value": "bank = {\n  \"name\": \"Vasudha\",\n  \"balance\": 5000\n}\n\nbank[\"account_type\"] = \"Savings\"\nbank[\"branch\"] = \"Vijayawada\"\n\nprint(bank)"
        },
        {
          "type": "output",
          "value": "{'name': 'Vasudha', 'balance': 5000, 'account_type': 'Savings', 'branch': 'Vijayawada'}"
        },
        {
          "type": "text",
          "value": "Important Points\n• Dictionaries are mutable and dynamic.\n• New keys can be added anytime by simple assignment.\n• If you use an existing key, the value will be updated rather than added.\n• update() is the most efficient way for bulk additions."
        },
        {
          "type": "text",
          "value": "Quick Summary"
        },
        {
          "type": "table",
          "headers": [
            "Operation",
            "Example"
          ],
          "rows": [
            [
              "Add single item",
              "dict[\"age\"] = 25"
            ],
            [
              "Add multiple items",
              "dict.update({\"a\": 1, \"b\": 2})"
            ],
            [
              "Add list value",
              "dict[\"skills\"] = [\"Python\"]"
            ],
            [
              "Add nested dictionary",
              "dict[\"address\"] = {...}"
            ]
          ]
        }
      ],
      "questions": [
        {
          "question": "How do you add a new key-value pair to an existing dictionary?",
          "answer": "You can add a new item by providing a new key inside square brackets and assigning it a value: dictionary['new_key'] = value."
        },
        {
          "question": "Can you add multiple items to a dictionary in a single statement?",
          "answer": "Yes, you can use the .update() method with a dictionary of new key-value pairs to add multiple items at once."
        },
        {
          "question": "What happens if you try to 'add' an item using a key that already exists?",
          "answer": "If the key already exists, Python will not add a new item; instead, it will update the existing key with the new value you provided."
        }
      ]
    },
    {
      "id": "python-remove-dictionary-items",
      "title": "Python - Remove Dictionary Items",
      "category": "Basic",
      "definition": "Python provides multiple ways to remove items from a dictionary, ranging from targeted removal via pop() and del, to bulk removal using clear(). Understanding the nuances—such as pop() returning the removed value and popitem() targeting the most recent insertion—is crucial for effective memory and data management.",
      "sections": [
        {
          "type": "text",
          "value": "Python provides several methods to remove items from a dictionary."
        },
        {
          "type": "text",
          "value": "Remove Item Using pop()\n\nThe pop() method removes the item with the specified key and returns the value of that item.\n\nSyntax: dictionary.pop(key)"
        },
        {
          "type": "code",
          "value": "thisdict = {\n  \"brand\": \"Ford\",\n  \"model\": \"Mustang\",\n  \"year\": 1964\n}\n\nthisdict.pop(\"model\")\n\nprint(thisdict)"
        },
        {
          "type": "output",
          "value": "{'brand': 'Ford', 'year': 1964}"
        },
        {
          "type": "text",
          "value": "pop() Returns Removed Value"
        },
        {
          "type": "code",
          "value": "student = {\n  \"name\": \"Vasudha\",\n  \"marks\": 95\n}\n\nx = student.pop(\"marks\")\n\nprint(x)\nprint(student)"
        },
        {
          "type": "output",
          "value": "95\n{'name': 'Vasudha'}"
        },
        {
          "type": "text",
          "value": "Remove Last Inserted Item Using popitem()\n\nThe popitem() method removes the last inserted item (in versions before 3.7, a random item was removed instead).\n\nSyntax: dictionary.popitem()"
        },
        {
          "type": "code",
          "value": "thisdict = {\n  \"brand\": \"Ford\",\n  \"model\": \"Mustang\",\n  \"year\": 1964\n}\n\nthisdict.popitem()\n\nprint(thisdict)"
        },
        {
          "type": "output",
          "value": "{'brand': 'Ford', 'model': 'Mustang'}"
        },
        {
          "type": "text",
          "value": "Delete Item Using del\n\nThe del keyword removes the item with the specified key name.\n\nSyntax: del dictionary[key]"
        },
        {
          "type": "code",
          "value": "thisdict = {\n  \"brand\": \"Ford\",\n  \"model\": \"Mustang\",\n  \"year\": 1964\n}\n\ndel thisdict[\"year\"]\n\nprint(thisdict)"
        },
        {
          "type": "output",
          "value": "{'brand': 'Ford', 'model': 'Mustang'}"
        },
        {
          "type": "text",
          "value": "Delete Entire Dictionary\n\nThe del keyword can also delete the dictionary completely."
        },
        {
          "type": "code",
          "value": "thisdict = {\n  \"brand\": \"Ford\",\n  \"model\": \"Mustang\"\n}\n\ndel thisdict\n\n# print(thisdict) # This would cause a NameError"
        },
        {
          "type": "output",
          "value": "NameError: name 'thisdict' is not defined"
        },
        {
          "type": "text",
          "value": "Clear Dictionary Using clear()\n\nThe clear() method empties the dictionary of all items, but the dictionary object still exists.\n\nSyntax: dictionary.clear()"
        },
        {
          "type": "code",
          "value": "thisdict = {\n  \"brand\": \"Ford\",\n  \"model\": \"Mustang\",\n  \"year\": 1964\n}\n\nthisdict.clear()\n\nprint(thisdict)"
        },
        {
          "type": "output",
          "value": "{}"
        },
        {
          "type": "text",
          "value": "Difference Between clear() and del"
        },
        {
          "type": "table",
          "headers": [
            "Method",
            "Result"
          ],
          "rows": [
            [
              "clear()",
              "Removes all items; dictionary becomes empty {}"
            ],
            [
              "del",
              "Deletes the entire dictionary object from memory"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Remove Item Comparison"
        },
        {
          "type": "table",
          "headers": [
            "Method",
            "Feature"
          ],
          "rows": [
            [
              "pop()",
              "Removes specific item and returns its value"
            ],
            [
              "del",
              "Removes specific item only (no return value)"
            ],
            [
              "popitem()",
              "Removes the last inserted item as a tuple"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Real-Time Example: Employee Record Cleanup"
        },
        {
          "type": "code",
          "value": "employee = {\n  \"id\": 101,\n  \"name\": \"Ravi\",\n  \"salary\": 30000,\n  \"department\": \"IT\"\n}\n\nemployee.pop(\"salary\")\ndel employee[\"department\"]\n\nprint(employee)"
        },
        {
          "type": "output",
          "value": "{'id': 101, 'name': 'Ravi'}"
        },
        {
          "type": "text",
          "value": "Important Points\n• pop(key) is safe if you want to store the removed value.\n• popitem() is useful for LIFO (Last-In, First-Out) operations.\n• del is a statement, not a method, and can be used on the entire object.\n• clear() is the best way to reuse a dictionary variable without re-initializing."
        },
        {
          "type": "text",
          "value": "Quick Summary"
        },
        {
          "type": "table",
          "headers": [
            "Method",
            "Purpose"
          ],
          "rows": [
            [
              "pop(key)",
              "Remove specific item and get value"
            ],
            [
              "popitem()",
              "Remove last inserted item"
            ],
            [
              "del dict[key]",
              "Delete specific item (no return)"
            ],
            [
              "del dict",
              "Delete whole dictionary object"
            ],
            [
              "clear()",
              "Remove all items (keep object)"
            ]
          ]
        }
      ],
      "questions": [
        {
          "question": "What is the difference between the pop() method and the del keyword for removing items?",
          "answer": "The .pop() method removes the item and returns its value, which can be stored in a variable. The del keyword simply removes the item and does not return anything."
        },
        {
          "question": "What happens when you use .popitem() on a dictionary?",
          "answer": "In Python 3.7 and later, .popitem() removes and returns the last inserted key-value pair as a tuple. In earlier versions, it removed a random item."
        },
        {
          "question": "How do you empty a dictionary without deleting the dictionary variable itself?",
          "answer": "You can use the .clear() method. It removes all elements from the dictionary, leaving it as an empty dictionary {}."
        }
      ]
    },
    {
      "id": "python-loop-dictionaries",
      "title": "Python - Loop Dictionaries",
      "category": "Basic",
      "definition": "You can loop through a dictionary using a for loop. By default, looping through a dictionary returns the keys, but Python provides methods like keys(), values(), and items() to iterate over specific components.",
      "sections": [
        {
          "type": "text",
          "value": "You can loop through a dictionary using a for loop.\nBy default, looping through a dictionary returns the keys."
        },
        {
          "type": "text",
          "value": "Loop Through Keys"
        },
        {
          "type": "code",
          "value": "thisdict = {\n  \"brand\": \"Ford\",\n  \"model\": \"Mustang\",\n  \"year\": 1964\n}\n\nfor x in thisdict:\n    print(x)"
        },
        {
          "type": "output",
          "value": "brand\nmodel\nyear"
        },
        {
          "type": "text",
          "value": "Print Values Using Keys"
        },
        {
          "type": "code",
          "value": "thisdict = {\n  \"brand\": \"Ford\",\n  \"model\": \"Mustang\",\n  \"year\": 1964\n}\n\nfor x in thisdict:\n    print(thisdict[x])"
        },
        {
          "type": "output",
          "value": "Ford\nMustang\n1964"
        },
        {
          "type": "text",
          "value": "Loop Through Values Using values()"
        },
        {
          "type": "code",
          "value": "thisdict = {\n  \"brand\": \"Ford\",\n  \"model\": \"Mustang\",\n  \"year\": 1964\n}\n\nfor x in thisdict.values():\n    print(x)"
        },
        {
          "type": "output",
          "value": "Ford\nMustang\n1964"
        },
        {
          "type": "text",
          "value": "Loop Through Keys Using keys()"
        },
        {
          "type": "code",
          "value": "thisdict = {\n  \"brand\": \"Ford\",\n  \"model\": \"Mustang\",\n  \"year\": 1964\n}\n\nfor x in thisdict.keys():\n    print(x)"
        },
        {
          "type": "output",
          "value": "brand\nmodel\nyear"
        },
        {
          "type": "text",
          "value": "Loop Through Both Keys and Values Using items()\nThe items() method returns key-value pairs as tuples."
        },
        {
          "type": "code",
          "value": "thisdict = {\n  \"brand\": \"Ford\",\n  \"model\": \"Mustang\",\n  \"year\": 1964\n}\n\nfor x, y in thisdict.items():\n    print(x, y)"
        },
        {
          "type": "output",
          "value": "brand Ford\nmodel Mustang\nyear 1964"
        },
        {
          "type": "text",
          "value": "Using Formatted Output"
        },
        {
          "type": "code",
          "value": "student = {\n  \"name\": \"Vasudha\",\n  \"course\": \"Python\",\n  \"marks\": 95\n}\n\nfor key, value in student.items():\n    print(key, \":\", value)"
        },
        {
          "type": "output",
          "value": "name : Vasudha\ncourse : Python\nmarks : 95"
        },
        {
          "type": "text",
          "value": "Important Points\n• Looping directly over a dictionary iterates through its keys.\n• .values() allows iterating through values only.\n• .keys() explicitly iterates through keys.\n• .items() is the most efficient way to get both keys and values."
        },
        {
          "type": "text",
          "value": "Quick Summary"
        },
        {
          "type": "table",
          "headers": [
            "Loop Method",
            "What it Returns"
          ],
          "rows": [
            [
              "for x in dict",
              "Keys"
            ],
            [
              "for x in dict.values()",
              "Values"
            ],
            [
              "for x in dict.keys()",
              "Keys"
            ],
            [
              "for x, y in dict.items()",
              "Key-Value Tuples"
            ]
          ]
        }
      ],
      "questions": [
        {
          "question": "What is the default behavior when looping through a dictionary in Python?",
          "answer": "By default, looping through a dictionary returns its keys."
        },
        {
          "question": "How do you loop through both keys and values of a dictionary simultaneously?",
          "answer": "You can use the .items() method, which returns each item as a key-value pair in a tuple format."
        },
        {
          "question": "Which method would you use to iterate only over the values of a dictionary?",
          "answer": "The .values() method."
        }
      ]
    },
    {
      "id": "python-copy-dictionaries",
      "title": "Python - Copy Dictionaries",
      "category": "Basic",
      "definition": "You cannot copy a dictionary simply by using dict2 = dict1 because dict2 will only be a reference to dict1. To create a real copy, use the copy() method or the dict() constructor.",
      "sections": [
        {
          "type": "text",
          "value": "You cannot copy a dictionary simply by using:\ndict2 = dict1\nBecause dict2 will only be a reference to dict1, and changes made in dict1 or dict2 will automatically appers for both dicts\nBecause both variables will refer to the same dictionary.\nTo create a real copy, use:\ncopy() method\ndict() constructor"
        },
        {
          "type": "text",
          "value": "Problem with Direct Assignment"
        },
        {
          "type": "code",
          "value": "dict1 = {\n  \"name\": \"Vasudha\",\n  \"course\": \"Python\"\n}\n\ndict2 = dict1\n\ndict2[\"course\"] = \"MERN\"\n\nprint(dict1)\nprint(dict2)"
        },
        {
          "type": "output",
          "value": "{'name': 'Vasudha', 'course': 'MERN'}\n\n{'name': 'Vasudha', 'course': 'MERN'}\n\nBoth changed because both point to the same memory."
        },
        {
          "type": "text",
          "value": "Copy Dictionary Using copy()\nThe copy() method creates a new dictionary."
        },
        {
          "type": "text",
          "value": "Syntax\nnew_dict = old_dict.copy()"
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "thisdict = {\n  \"brand\": \"Ford\",\n  \"model\": \"Mustang\",\n  \"year\": 1964\n}\n\nmydict = thisdict.copy()\n\nprint(mydict)"
        },
        {
          "type": "output",
          "value": "{'brand': 'Ford', 'model': 'Mustang', 'year': 1964}"
        },
        {
          "type": "text",
          "value": "Verify Independent Copy"
        },
        {
          "type": "code",
          "value": "dict1 = {\n  \"name\": \"Vasudha\",\n  \"course\": \"Python\"\n}\n\ndict2 = dict1.copy()\n\ndict2[\"course\"] = \"Django\"\n\nprint(dict1)\nprint(dict2)"
        },
        {
          "type": "output",
          "value": "{'name': 'Vasudha', 'course': 'Python'}\n\n{'name': 'Vasudha', 'course': 'Django'}\n\nNow changes affect only copied dictionary."
        },
        {
          "type": "text",
          "value": "Copy Dictionary Using dict()\nYou can also use the dict() constructor."
        },
        {
          "type": "text",
          "value": "Syntax\nnew_dict = dict(old_dict)"
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "thisdict = {\n  \"brand\": \"Ford\",\n  \"model\": \"Mustang\",\n  \"year\": 1964\n}\n\nmydict = dict(thisdict)\n\nprint(mydict)"
        },
        {
          "type": "output",
          "value": "{'brand': 'Ford', 'model': 'Mustang', 'year': 1964}"
        },
        {
          "type": "text",
          "value": "Real-Time Example"
        },
        {
          "type": "code",
          "value": "student = {\n  \"name\": \"Vasudha\",\n  \"marks\": 95,\n  \"course\": \"Python\"\n}\n\nbackup = student.copy()\n\nbackup[\"marks\"] = 100\n\nprint(\"Original:\", student)\nprint(\"Copied:\", backup)"
        },
        {
          "type": "output",
          "value": "Original: {'name': 'Vasudha', 'marks': 95, 'course': 'Python'}\n\nCopied: {'name': 'Vasudha', 'marks': 100, 'course': 'Python'}"
        },
        {
          "type": "text",
          "value": "Shallow Copy\ncopy() and dict() create a shallow copy.\nThis means:\n• Outer dictionary is copied\n• Nested objects still share memory"
        },
        {
          "type": "text",
          "value": "Example of Shallow Copy"
        },
        {
          "type": "code",
          "value": "dict1 = {\n  \"student\": {\n      \"name\": \"Vasudha\"\n  }\n}\n\ndict2 = dict1.copy()\n\ndict2[\"student\"][\"name\"] = \"Ravi\"\n\nprint(dict1)\nprint(dict2)"
        },
        {
          "type": "output",
          "value": "{\n 'student': {'name': 'Ravi'}\n}\n\n{\n 'student': {'name': 'Ravi'}\n}\n\nNested dictionary changed in both."
        },
        {
          "type": "text",
          "value": "Deep Copy\nFor completely separate nested copies, use deepcopy() from copy module."
        },
        {
          "type": "code",
          "value": "import copy\n\ndict1 = {\n  \"student\": {\n      \"name\": \"Vasudha\"\n  }\n}\n\ndict2 = copy.deepcopy(dict1)\n\ndict2[\"student\"][\"name\"] = \"Ravi\"\n\nprint(dict1)\nprint(dict2)"
        },
        {
          "type": "output",
          "value": "{\n 'student': {'name': 'Vasudha'}\n}\n\n{\n 'student': {'name': 'Ravi'}\n}"
        },
        {
          "type": "text",
          "value": "Difference Between Copy Methods"
        },
        {
          "type": "table",
          "headers": [
            "Method",
            "Type"
          ],
          "rows": [
            [
              "=",
              "Reference copy"
            ],
            [
              "copy()",
              "Shallow copy"
            ],
            [
              "dict()",
              "Shallow copy"
            ],
            [
              "deepcopy()",
              "Deep copy"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Important Points\n• = does not create a new dictionary.\n• copy() creates independent outer copy.\n• Nested objects still share memory in shallow copy.\n• Use deepcopy() for complete independent copy."
        },
        {
          "type": "text",
          "value": "Quick Summary"
        },
        {
          "type": "table",
          "headers": [
            "Operation",
            "Example"
          ],
          "rows": [
            [
              "Reference copy",
              "b = a"
            ],
            [
              "Shallow copy",
              "b = a.copy()"
            ],
            [
              "Constructor copy",
              "b = dict(a)"
            ],
            [
              "Deep copy",
              "copy.deepcopy(a)"
            ]
          ]
        }
      ],
      "questions": [
        {
          "question": "Why is dict2 = dict1 not a true way to copy a dictionary?",
          "answer": "Because it only creates a reference to the same dictionary. Any changes made to one will automatically be reflected in the other."
        },
        {
          "question": "What is the difference between a shallow copy and a deep copy?",
          "answer": "A shallow copy (using .copy() or dict()) copies the outer dictionary but nested objects still share memory. A deep copy (using copy.deepcopy()) creates completely independent copies of all nested objects."
        },
        {
          "question": "Which module is required to perform a deep copy of a dictionary?",
          "answer": "The 'copy' module."
        }
      ]
    },
    {
      "id": "python-nested-dictionaries",
      "title": "Python - Nested Dictionaries",
      "category": "Basic",
      "definition": "A Nested Dictionary means a dictionary inside another dictionary. It is used to store grouped or complex data effectively.",
      "sections": [
        {
          "type": "text",
          "value": "A Nested Dictionary means a dictionary inside another dictionary.\nIt is used to store grouped or complex data."
        },
        {
          "type": "text",
          "value": "Create a Nested Dictionary"
        },
        {
          "type": "code",
          "value": "myfamily = {\n  \"child1\": {\n    \"name\": \"Emil\",\n    \"year\": 2004\n  },\n  \"child2\": {\n    \"name\": \"Tobias\",\n    \"year\": 2007\n  },\n  \"child3\": {\n    \"name\": \"Linus\",\n    \"year\": 2011\n  }\n}\n\nprint(myfamily)"
        },
        {
          "type": "output",
          "value": "{\n 'child1': {'name': 'Emil', 'year': 2004},\n 'child2': {'name': 'Tobias', 'year': 2007},\n 'child3': {'name': 'Linus', 'year': 2011}\n}"
        },
        {
          "type": "text",
          "value": "Access Items in Nested Dictionary\nUse multiple keys."
        },
        {
          "type": "text",
          "value": "Syntax\ndictionary[outer_key][inner_key]"
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "myfamily = {\n  \"child1\": {\n    \"name\": \"Emil\",\n    \"year\": 2004\n  },\n  \"child2\": {\n    \"name\": \"Tobias\",\n    \"year\": 2007\n  }\n}\n\nprint(myfamily[\"child1\"][\"name\"])"
        },
        {
          "type": "output",
          "value": "Emil"
        },
        {
          "type": "text",
          "value": "Change Values in Nested Dictionary"
        },
        {
          "type": "code",
          "value": "myfamily = {\n  \"child1\": {\n    \"name\": \"Emil\",\n    \"year\": 2004\n  }\n}\n\nmyfamily[\"child1\"][\"year\"] = 2010\n\nprint(myfamily)"
        },
        {
          "type": "output",
          "value": "{\n 'child1': {'name': 'Emil', 'year': 2010}\n}"
        },
        {
          "type": "text",
          "value": "Add Items to Nested Dictionary"
        },
        {
          "type": "code",
          "value": "student = {\n  \"s1\": {\n    \"name\": \"Vasudha\",\n    \"marks\": 95\n  }\n}\n\nstudent[\"s1\"][\"course\"] = \"Python\"\n\nprint(student)"
        },
        {
          "type": "output",
          "value": "{\n 's1': {\n    'name': 'Vasudha',\n    'marks': 95,\n    'course': 'Python'\n }\n}"
        },
        {
          "type": "text",
          "value": "Add New Nested Dictionary"
        },
        {
          "type": "code",
          "value": "students = {\n  \"s1\": {\n    \"name\": \"Vasudha\"\n  }\n}\n\nstudents[\"s2\"] = {\n  \"name\": \"Ravi\",\n  \"marks\": 88\n}\n\nprint(students)"
        },
        {
          "type": "output",
          "value": "{\n 's1': {'name': 'Vasudha'},\n 's2': {'name': 'Ravi', 'marks': 88}\n}"
        },
        {
          "type": "text",
          "value": "Create Nested Dictionary Using Separate Dictionaries"
        },
        {
          "type": "code",
          "value": "child1 = {\n  \"name\": \"Emil\",\n  \"year\": 2004\n}\n\nchild2 = {\n  \"name\": \"Tobias\",\n  \"year\": 2007\n}\n\nchild3 = {\n  \"name\": \"Linus\",\n  \"year\": 2011\n}\n\nmyfamily = {\n  \"child1\": child1,\n  \"child2\": child2,\n  \"child3\": child3\n}\n\nprint(myfamily)"
        },
        {
          "type": "output",
          "value": "{\n 'child1': {'name': 'Emil', 'year': 2004},\n 'child2': {'name': 'Tobias', 'year': 2007},\n 'child3': {'name': 'Linus', 'year': 2011}\n}"
        },
        {
          "type": "text",
          "value": "Loop Through Nested Dictionaries"
        },
        {
          "type": "code",
          "value": "myfamily = {\n  \"child1\": {\n    \"name\": \"Emil\",\n    \"year\": 2004\n  },\n  \"child2\": {\n    \"name\": \"Tobias\",\n    \"year\": 2007\n  }\n}\n\nfor x, obj in myfamily.items():\n    print(x)\n\n    for y in obj:\n        print(f\"{y} : {obj[y]}\")"
        },
        {
          "type": "output",
          "value": "child1\nname: Emil\nyear: 2004\n\nchild2\nname: Tobias\nyear: 2007"
        },
        {
          "type": "text",
          "value": "Real-Time Example"
        },
        {
          "type": "code",
          "value": "employees = {\n  \"emp1\": {\n    \"name\": \"Vasudha\",\n    \"department\": \"IT\",\n    \"salary\": 50000\n  },\n\n  \"emp2\": {\n    \"name\": \"Ravi\",\n    \"department\": \"HR\",\n    \"salary\": 40000\n  }\n}\n\nprint(employees[\"emp1\"][\"salary\"])"
        },
        {
          "type": "output",
          "value": "50000"
        },
        {
          "type": "text",
          "value": "Advantages of Nested Dictionaries"
        },
        {
          "type": "table",
          "headers": [
            "Advantage",
            "Description"
          ],
          "rows": [
            [
              "Organized Data",
              "Stores related data together"
            ],
            [
              "Flexible",
              "Can store complex structures"
            ],
            [
              "Easy Access",
              "Access using multiple keys"
            ],
            [
              "Real-Time Usage",
              "Used in JSON, APIs, databases"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Important Points\n• Nested dictionary = dictionary inside dictionary\n• Access using multiple keys\n• Can update/add/remove inner dictionary items\n• Commonly used in real-world applications"
        },
        {
          "type": "text",
          "value": "Quick Summary"
        },
        {
          "type": "table",
          "headers": [
            "Operation",
            "Example"
          ],
          "rows": [
            [
              "Access nested item",
              "dict[\"a\"][\"b\"]"
            ],
            [
              "Change nested value",
              "dict[\"a\"][\"b\"] = 10"
            ],
            [
              "Add nested item",
              "dict[\"a\"][\"c\"] = 20"
            ],
            [
              "Add new nested dict",
              "dict[\"x\"] = {...}"
            ],
            [
              "Loop nested dict",
              "for x,y in dict.items()"
            ]
          ]
        }
      ],
      "questions": [
        {
          "question": "What is a nested dictionary in Python?",
          "answer": "A nested dictionary is a dictionary that contains other dictionaries as its values."
        },
        {
          "question": "How do you access a specific value in a nested dictionary?",
          "answer": "You use multiple sets of square brackets, one for each level of the dictionary: dictionary[outer_key][inner_key]."
        },
        {
          "question": "Can you create a nested dictionary using pre-existing dictionary variables?",
          "answer": "Yes, you can assign pre-defined dictionaries as values to keys in a new dictionary."
        }
      ]
    },
    {
      "id": "python-dictionary-methods",
      "title": "Python Dictionary Methods",
      "category": "Basic",
      "definition": "Python provides many built-in methods to work with dictionaries, allowing for efficient data manipulation including clearing, copying, accessing, and updating items.",
      "sections": [
        {
          "type": "text",
          "value": "Python provides many built-in methods to work with dictionaries."
        },
        {
          "type": "text",
          "value": "List of Dictionary Methods"
        },
        {
          "type": "table",
          "headers": [
            "Method",
            "Description"
          ],
          "rows": [
            [
              "clear()",
              "Removes all items"
            ],
            [
              "copy()",
              "Returns a copy of dictionary"
            ],
            [
              "fromkeys()",
              "Creates dictionary from keys"
            ],
            [
              "get()",
              "Returns value of key"
            ],
            [
              "items()",
              "Returns key-value pairs"
            ],
            [
              "keys()",
              "Returns all keys"
            ],
            [
              "pop()",
              "Removes specified key"
            ],
            [
              "popitem()",
              "Removes last inserted item"
            ],
            [
              "setdefault()",
              "Returns value of key"
            ],
            [
              "update()",
              "Updates dictionary"
            ],
            [
              "values()",
              "Returns all values"
            ]
          ]
        },
        {
          "type": "text",
          "value": "1. clear()\nRemoves all items from dictionary."
        },
        {
          "type": "code",
          "value": "student = {\n  \"name\": \"Vasudha\",\n  \"marks\": 95\n}\n\nstudent.clear()\n\nprint(student)"
        },
        {
          "type": "output",
          "value": "{}"
        },
        {
          "type": "text",
          "value": "2. copy()\nReturns a copy of dictionary."
        },
        {
          "type": "code",
          "value": "student = {\n  \"name\": \"Vasudha\",\n  \"marks\": 95\n}\n\nx = student.copy()\n\nprint(x)"
        },
        {
          "type": "output",
          "value": "{'name': 'Vasudha', 'marks': 95}"
        },
        {
          "type": "text",
          "value": "3. fromkeys()\nCreates a new dictionary using given keys."
        },
        {
          "type": "text",
          "value": "Syntax\ndict.fromkeys(keys, value)"
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "x = ('key1', 'key2', 'key3')\n\ny = 0\n\nthisdict = dict.fromkeys(x, y)\n\nprint(thisdict)"
        },
        {
          "type": "output",
          "value": "{'key1': 0, 'key2': 0, 'key3': 0}"
        },
        {
          "type": "text",
          "value": "4. get()\nReturns value of specified key."
        },
        {
          "type": "code",
          "value": "student = {\n  \"name\": \"Vasudha\",\n  \"marks\": 95\n}\n\nprint(student.get(\"name\"))"
        },
        {
          "type": "output",
          "value": "Vasudha"
        },
        {
          "type": "text",
          "value": "5. items()\nReturns all key-value pairs."
        },
        {
          "type": "code",
          "value": "student = {\n  \"name\": \"Vasudha\",\n  \"marks\": 95\n}\n\nprint(student.items())"
        },
        {
          "type": "output",
          "value": "dict_items([('name', 'Vasudha'), ('marks', 95)])"
        },
        {
          "type": "text",
          "value": "6. keys()\nReturns all keys."
        },
        {
          "type": "code",
          "value": "student = {\n  \"name\": \"Vasudha\",\n  \"marks\": 95\n}\n\nprint(student.keys())"
        },
        {
          "type": "output",
          "value": "dict_keys(['name', 'marks'])"
        },
        {
          "type": "text",
          "value": "7. pop()\nRemoves specified key."
        },
        {
          "type": "code",
          "value": "student = {\n  \"name\": \"Vasudha\",\n  \"marks\": 95\n}\n\nstudent.pop(\"marks\")\n\nprint(student)"
        },
        {
          "type": "output",
          "value": "{'name': 'Vasudha'}"
        },
        {
          "type": "text",
          "value": "8. popitem()\nRemoves last inserted item."
        },
        {
          "type": "code",
          "value": "student = {\n  \"name\": \"Vasudha\",\n  \"marks\": 95\n}\n\nstudent.popitem()\n\nprint(student)"
        },
        {
          "type": "output",
          "value": "{'name': 'Vasudha'}"
        },
        {
          "type": "text",
          "value": "9. setdefault()\nReturns value of key.\nIf key does not exist, inserts key with specified value."
        },
        {
          "type": "text",
          "value": "Syntax\ndictionary.setdefault(key, default_value)"
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "student = {\n  \"name\": \"Vasudha\",\n  \"marks\": 95\n}\n\nx = student.setdefault(\"course\", \"Python\")\n\nprint(x)\n\nprint(student)"
        },
        {
          "type": "output",
          "value": "Python\n\n{\n 'name': 'Vasudha',\n 'marks': 95,\n 'course': 'Python'\n}"
        },
        {
          "type": "text",
          "value": "10. update()\nUpdates dictionary with new items."
        },
        {
          "type": "code",
          "value": "student = {\n  \"name\": \"Vasudha\"\n}\n\nstudent.update({\n  \"marks\": 95,\n  \"course\": \"Python\"\n})\n\nprint(student)"
        },
        {
          "type": "output",
          "value": "{\n 'name': 'Vasudha',\n 'marks': 95,\n 'course': 'Python'\n}"
        },
        {
          "type": "text",
          "value": "11. values()\nReturns all values."
        },
        {
          "type": "code",
          "value": "student = {\n  \"name\": \"Vasudha\",\n  \"marks\": 95\n}\n\nprint(student.values())"
        },
        {
          "type": "output",
          "value": "dict_values(['Vasudha', 95])"
        },
        {
          "type": "text",
          "value": "Real-Time Example"
        },
        {
          "type": "code",
          "value": "employee = {\n  \"id\": 101,\n  \"name\": \"Ravi\",\n  \"salary\": 30000\n}\n\nprint(employee.keys())\n\nprint(employee.values())\n\nprint(employee.items())\n\nemployee.update({\"department\": \"IT\"})\n\nprint(employee)"
        },
        {
          "type": "output",
          "value": "dict_keys(['id', 'name', 'salary'])\n\ndict_values([101, 'Ravi', 30000])\n\ndict_items([\n('id', 101),\n('name', 'Ravi'),\n('salary', 30000)\n])\n\n{\n 'id': 101,\n 'name': 'Ravi',\n 'salary': 30000,\n 'department': 'IT'\n}"
        },
        {
          "type": "text",
          "value": "Most Important Dictionary Methods"
        },
        {
          "type": "table",
          "headers": [
            "Method",
            "Common Use"
          ],
          "rows": [
            [
              "get()",
              "Safe value access"
            ],
            [
              "keys()",
              "Get all keys"
            ],
            [
              "values()",
              "Get all values"
            ],
            [
              "items()",
              "Get key-value pairs"
            ],
            [
              "update()",
              "Add/update items"
            ],
            [
              "pop()",
              "Remove specific item"
            ],
            [
              "copy()",
              "Copy dictionary"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Quick Summary"
        },
        {
          "type": "table",
          "headers": [
            "Method",
            "Purpose"
          ],
          "rows": [
            [
              "clear()",
              "Remove all items"
            ],
            [
              "copy()",
              "Copy dictionary"
            ],
            [
              "fromkeys()",
              "Create dictionary from keys"
            ],
            [
              "get()",
              "Get value"
            ],
            [
              "items()",
              "Get all items"
            ],
            [
              "keys()",
              "Get all keys"
            ],
            [
              "pop()",
              "Remove key"
            ],
            [
              "popitem()",
              "Remove last item"
            ],
            [
              "setdefault()",
              "Insert if key absent"
            ],
            [
              "update()",
              "Update dictionary"
            ],
            [
              "values()",
              "Get all values"
            ]
          ]
        }
      ],
      "questions": [
        {
          "question": "What is the difference between pop() and popitem()?",
          "answer": "pop() removes an item with a specific key, while popitem() removes the last inserted item in the dictionary."
        },
        {
          "question": "How does the setdefault() method work?",
          "answer": "setdefault() returns the value of a key if it exists. If the key does not exist, it inserts the key with the specified default value."
        },
        {
          "question": "What does the fromkeys() method do?",
          "answer": "It creates a new dictionary from a sequence of keys and a single optional value for all of them."
        }
      ]
    },
    {
      "id": "python-functions",
      "title": "Python Functions",
      "category": "Basic",
      "definition": "In Python, functions are reusable blocks of code that perform a specific task. They help you organize programs, avoid repetition, and make code easier to read and maintain.",
      "sections": [
        {
          "type": "text",
          "value": "In Python, functions are reusable blocks of code that perform a specific task. They help you organize programs, avoid repetition, and make code easier to read and maintain. A function can return data as a result."
        },
        {
          "type": "text",
          "value": "🧩 Basic Structure of a Function\n\ndef function_name(parameters):\n    # code block\n    return result\n\n• def → keyword to define a function\n• function_name → name you choose\n• parameters → inputs (optional)\n• return → sends back a result (optional)"
        },
        {
          "type": "text",
          "value": "Creating a Function\nIn Python, a function is defined using the def keyword, followed by a function name and parentheses:\nThe code inside the function must be indented. Python uses indentation to define code blocks."
        },
        {
          "type": "text",
          "value": "Calling a Function\nTo call a function, write its name followed by parentheses"
        },
        {
          "type": "code",
          "value": "def name():\n    print(\"Vasudharini\")\nname()"
        },
        {
          "type": "output",
          "value": "Vasudharini"
        },
        {
          "type": "text",
          "value": "Function Names\nFunction names follow the same rules as variable names in Python:\n• A function name must start with a letter or underscore\n• A function name can only contain letters, numbers, and underscores\n• Function names are case-sensitive (myFunction and myfunction are different)"
        },
        {
          "type": "text",
          "value": "Example\nValid function names:\n• calculate_sum()\n• _private_function()\n• myFunction2()"
        },
        {
          "type": "text",
          "value": "✨ Example 1: Simple Function"
        },
        {
          "type": "code",
          "value": "def greet():\n    print(\"Hello, world!\")\ngreet()"
        },
        {
          "type": "output",
          "value": "Hello, world!"
        },
        {
          "type": "text",
          "value": "🔢 Example 2: Function with Parameters"
        },
        {
          "type": "code",
          "value": "def even_odd(n):\n    if n % 2 == 0:\n        print(\"Even\")\n    else:\n        print(\"Odd\")\neven_odd(10)"
        },
        {
          "type": "output",
          "value": "Even"
        },
        {
          "type": "text",
          "value": "🔁 Example 3: Function with Return Value"
        },
        {
          "type": "code",
          "value": "def add(a, b):\n    return a + b\nresult = add(3, 5)\nprint(result)"
        },
        {
          "type": "output",
          "value": "8"
        },
        {
          "type": "text",
          "value": "You can use the returned value directly:\nUsing the return value directly"
        },
        {
          "type": "code",
          "value": "def get_greeting():\n  return \"Hello from a function\"\nprint(get_greeting())"
        },
        {
          "type": "output",
          "value": "Hello from a function"
        },
        {
          "type": "text",
          "value": "The pass Statement\nFunction definitions cannot be empty. If you need to create a function placeholder without any code, use the pass statement."
        },
        {
          "type": "code",
          "value": "def my_function():\n  pass"
        },
        {
          "type": "text",
          "value": "The pass statement is often used when developing, allowing you to define the structure first and implement details later."
        },
        {
          "type": "text",
          "value": "Parameters vs Arguments\nThe terms parameter and argument can be used for the same thing:\n information that are passed into a function.\n\nFrom a function's perspective:\nA parameter is the variable listed inside the parentheses in the function definition.\nAn argument is the actual value that is sent to the function when it is called."
        },
        {
          "type": "text",
          "value": "Quick Summary"
        },
        {
          "type": "table",
          "headers": [
            "Concept",
            "Description"
          ],
          "rows": [
            [
              "def",
              "Keyword to define a function"
            ],
            [
              "Indentation",
              "Required to define the code block"
            ],
            [
              "return",
              "Sends data back to the caller"
            ],
            [
              "Calling",
              "Executing the function via name()"
            ],
            [
              "pass",
              "Placeholder for empty functions"
            ],
            [
              "Parameter",
              "Variable in function definition"
            ],
            [
              "Argument",
              "Actual value sent during call"
            ]
          ]
        }
      ],
      "questions": [
        {
          "question": "What is the keyword used to define a function in Python?",
          "answer": "The def keyword."
        },
        {
          "question": "How do you call a function in Python?",
          "answer": "By writing the function name followed by parentheses, e.g., my_function()."
        },
        {
          "question": "What is the purpose of the 'pass' statement in a function?",
          "answer": "It serves as a placeholder when a function definition is empty, preventing errors while the actual implementation is pending."
        },
        {
          "question": "What is the difference between a parameter and an argument?",
          "answer": "A parameter is the variable listed inside the function definition parentheses, while an argument is the actual value sent to the function when it is called."
        }
      ]
    },
    {
      "id": "python-function-arguments",
      "title": "Python Function Arguments",
      "category": "Basic",
      "definition": "Arguments are values passed into a function during a call. Python supports various argument types including positional, keyword, and default arguments, allowing functions to handle diverse data types and return results effectively.",
      "sections": [
        {
          "type": "text",
          "value": "Arguments\nValues can be passed into functions as arguments.\nArguments are specified after the function name, inside the parentheses. You can add as many arguments as you want, just separate them with a comma.\nFunction arguments are values passed to a function when calling it."
        },
        {
          "type": "text",
          "value": "A function with one argument:"
        },
        {
          "type": "code",
          "value": "def my_function(fname):\n  print(fname + \" Chintada\")\n\nmy_function(\"Vasudharini\")\nmy_function(\"Srinivas\")\nmy_function(\"DhanaLakshmi\")"
        },
        {
          "type": "output",
          "value": "Vasudharini Chintada\nSrinivas Chintada\nDhanaLakshmi Chintada"
        },
        {
          "type": "text",
          "value": "fname → parameter\n\"Vasudharini\", \"Srinivas\", \"DhanaLakshmi\" → argument"
        },
        {
          "type": "text",
          "value": "Number of Arguments\nBy default, a function must be called with the correct number of arguments.\nIf your function expects 2 arguments, you must call it with exactly 2 arguments."
        },
        {
          "type": "text",
          "value": "This function expects 2 arguments, and gets 2 arguments"
        },
        {
          "type": "code",
          "value": "def my_function(fname, lname):\n  print(fname + \" \" + lname)\n\nmy_function(\"Vasudharini\", \"Chintada\")"
        },
        {
          "type": "output",
          "value": "Vasudharini Chintada"
        },
        {
          "type": "text",
          "value": "📌 Types of Function Arguments in Python"
        },
        {
          "type": "text",
          "value": "1. Keyword Arguments\nYou can send arguments with the key = value syntax.\nThe phrase Keyword Arguments is often shortened to kwargs in Python documentation.\nArguments are passed using parameter names."
        },
        {
          "type": "code",
          "value": "def my_function(animal, name):\n  print(\"I have a\", animal)\n  print(\"My\", animal + \"'s name is\", name)\n\nmy_function(name = \"Buddy\", animal = \"dog\")"
        },
        {
          "type": "output",
          "value": "I have a dog\nMy dog's name is Buddy"
        },
        {
          "type": "text",
          "value": "✅ This way, with keyword arguments, the order of the arguments does not matter."
        },
        {
          "type": "text",
          "value": "2. Positional Arguments\nWhen you call a function with arguments without using keywords, they are called positional arguments.\nValues are passed in the correct order."
        },
        {
          "type": "code",
          "value": "def my_function(animal, name):\n  print(\"I have a\", animal)\n  print(\"My\", animal + \"'s name is\", name)\n\nmy_function(\"dog\", \"Buddy\")"
        },
        {
          "type": "output",
          "value": "I have a dog\nMy dog's name is Buddy"
        },
        {
          "type": "text",
          "value": "⚠️ The order matters with positional arguments."
        },
        {
          "type": "text",
          "value": "3. Default Arguments\nYou can assign default values to parameters. If the function is called without an argument, it uses the default value\nA default value is assigned to a parameter."
        },
        {
          "type": "code",
          "value": "def my_function(name = \"friend\"):\n  print(\"Hello\", name)\n\nmy_function(\"Vasu\")\nmy_function()\nmy_function(\"Vasudha\")"
        },
        {
          "type": "output",
          "value": "Hello Vasu\nHello friend\nHello Vasudha"
        },
        {
          "type": "text",
          "value": "Mixing Positional and Keyword Arguments\nYou can mix positional and keyword arguments in a function call."
        },
        {
          "type": "code",
          "value": "def my_function(animal, name, age):\n  print(\"I have a\", age, \"year old\", animal, \"named\", name)\nmy_function(\"dog\", age = 5, name = \"Buddy\")"
        },
        {
          "type": "output",
          "value": "I have a 5 year old dog named Buddy"
        },
        {
          "type": "text",
          "value": "However, positional arguments must come before keyword arguments"
        },
        {
          "type": "text",
          "value": "Passing Different Data Types\nYou can send any data type as an argument to a function (string, number, list, dictionary, etc.).\n\nThe data type will be preserved inside the function:"
        },
        {
          "type": "text",
          "value": "Sending a list as an argument:"
        },
        {
          "type": "code",
          "value": "def my_function(fruits):\n  for fruit in fruits:\n    print(fruit)\n\nmy_fruits = [\"apple\", \"banana\", \"cherry\"]\nmy_function(my_fruits)"
        },
        {
          "type": "output",
          "value": "apple\nbanana\ncherry"
        },
        {
          "type": "text",
          "value": "Sending a dictionary as an argument:"
        },
        {
          "type": "code",
          "value": "def my_function(person):\n  print(\"Name:\", person[\"name\"])\n  print(\"Age:\", person[\"age\"])\n\nmy_person = {\"name\": \"Emil\", \"age\": 25}\nmy_function(my_person)"
        },
        {
          "type": "output",
          "value": "Name: Emil\nAge: 25"
        },
        {
          "type": "text",
          "value": "Return Values\nFunctions can return values using the return statement"
        },
        {
          "type": "code",
          "value": "def my_function(x, y):\n  return x + y\n\nresult = my_function(5, 3)\nprint(result)"
        },
        {
          "type": "output",
          "value": "8"
        },
        {
          "type": "text",
          "value": "Returning Different Data Types\nFunctions can return any data type, including lists, tuples, dictionaries, and more."
        },
        {
          "type": "text",
          "value": "A function that returns a list:"
        },
        {
          "type": "code",
          "value": "def my_function():\n  return [\"apple\", \"banana\", \"cherry\"]\n\nfruits = my_function()\nprint(fruits[0])\nprint(fruits[1])\nprint(fruits[2])"
        },
        {
          "type": "output",
          "value": "apple\nbanana\ncherry"
        },
        {
          "type": "text",
          "value": "A function that returns a tuple:"
        },
        {
          "type": "code",
          "value": "def my_function():\n  return (10, 20)\n\nx, y = my_function()\nprint(\"x:\", x)\nprint(\"y:\", y)"
        },
        {
          "type": "output",
          "value": "x: 10\ny: 20"
        },
        {
          "type": "text",
          "value": "Quick Summary"
        },
        {
          "type": "table",
          "headers": [
            "Argument Type",
            "Behavior"
          ],
          "rows": [
            [
              "Positional",
              "Order matters"
            ],
            [
              "Keyword",
              "key=value syntax, order doesn't matter"
            ],
            [
              "Default",
              "Uses a pre-defined value if omitted"
            ],
            [
              "Mixing",
              "Positional must precede Keyword"
            ]
          ]
        }
      ],
      "questions": [
        {
          "question": "What are positional arguments?",
          "answer": "Arguments that must be passed in the correct positional order."
        },
        {
          "question": "What happens if you call a function with fewer arguments than expected?",
          "answer": "Python will raise a TypeError, stating that the function is missing required positional arguments."
        },
        {
          "question": "Can you mix positional and keyword arguments in a single function call?",
          "answer": "Yes, but positional arguments must always come before keyword arguments."
        }
      ]
    },
    {
      "id": "python-positional-keyword-only",
      "title": "Positional-Only and Keyword-Only Arguments",
      "category": "Basic",
      "definition": "Python allows you to restrict how arguments are passed to a function using the / and * symbols. Positional-only arguments must be passed by position, while keyword-only arguments must be passed using parameter names.",
      "sections": [
        {
          "type": "text",
          "value": "Python allows you to control how arguments are passed to a function.\nThere are 3 types:\n\n• Positional-only arguments → must be passed by position\n• Keyword-only arguments → must be passed using parameter names\n• Normal arguments → can be passed either way"
        },
        {
          "type": "text",
          "value": "1. Positional-Only Arguments (/)\nUse / in the function definition.\nArguments before / are positional-only."
        },
        {
          "type": "text",
          "value": "Syntax\ndef function_name(arg1, arg2, /):\n    pass"
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "def my_function(name, /):\n    print(\"Hello\", name)\n\nmy_function(\"Emil\")"
        },
        {
          "type": "output",
          "value": "Hello Emil"
        },
        {
          "type": "text",
          "value": "Here:\n\n\"Emil\" is passed by position\nname= is NOT allowed"
        },
        {
          "type": "text",
          "value": "Invalid Example"
        },
        {
          "type": "code",
          "value": "def my_function(name, /):\n    print(\"Hello\", name)\n\nmy_function(name=\"Emil\")"
        },
        {
          "type": "output",
          "value": "TypeError"
        },
        {
          "type": "text",
          "value": "Because name is positional-only."
        },
        {
          "type": "text",
          "value": "Why Use Positional-Only Arguments?\nUseful when:\n\n• Parameter names should not matter\n• You may change parameter names later\n• Built-in functions behave this way\n\nExample:\npow(2, 3)\nYou normally use positions, not:\npow(base=2, exp=3)"
        },
        {
          "type": "text",
          "value": "2. Keyword-Only Arguments (*)\nUse * before parameters.\nArguments after * are keyword-only."
        },
        {
          "type": "text",
          "value": "Syntax\ndef function_name(*, arg1, arg2):\n    pass"
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "def my_function(*, name):\n    print(\"Hello\", name)\n\nmy_function(name=\"Emil\")"
        },
        {
          "type": "output",
          "value": "Hello Emil"
        },
        {
          "type": "text",
          "value": "Invalid Example"
        },
        {
          "type": "code",
          "value": "def my_function(*, name):\n    print(\"Hello\", name)\n\nmy_function(\"Emil\")"
        },
        {
          "type": "output",
          "value": "TypeError"
        },
        {
          "type": "text",
          "value": "Because name must be passed as a keyword."
        },
        {
          "type": "text",
          "value": "Why Use Keyword-Only Arguments?\nUseful when:\n\n• Function has many optional arguments\n• Improves readability\n• Avoids confusion\n\nExample:\ndef student(*, name, age):\n    print(name, age)\n\nstudent(name=\"Ram\", age=21)\nThis is clearer than:\nstudent(\"Ram\", 21)"
        },
        {
          "type": "text",
          "value": "3. Combining Both (/ and *)\nYou can use both together.\n\n• Before / → positional-only\n• Between / and * → normal arguments\n• After * → keyword-only"
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "def my_function(a, b, /, *, c, d):\n    return a + b + c + d\n\nresult = my_function(5, 10, c=15, d=20)\n\nprint(result)"
        },
        {
          "type": "output",
          "value": "50"
        },
        {
          "type": "text",
          "value": "Understanding the Function\ndef my_function(a, b, /, *, c, d):"
        },
        {
          "type": "table",
          "headers": [
            "Argument",
            "Type"
          ],
          "rows": [
            [
              "a",
              "positional-only"
            ],
            [
              "b",
              "positional-only"
            ],
            [
              "c",
              "keyword-only"
            ],
            [
              "d",
              "keyword-only"
            ]
          ]
        },
        {
          "type": "text",
          "value": "So:\n\nmy_function(5, 10, c=15, d=20)\n\n✅ Correct\n\nBut:\n\nmy_function(a=5, b=10, c=15, d=20)\n\n❌ Error"
        },
        {
          "type": "text",
          "value": "Full Example with All Types"
        },
        {
          "type": "code",
          "value": "def details(id, /, name, *, city):\n    print(\"ID:\", id)\n    print(\"Name:\", name)\n    print(\"City:\", city)\n\ndetails(101, \"Rahul\", city=\"Hyderabad\")"
        },
        {
          "type": "output",
          "value": "ID: 101\nName: Rahul\nCity: Hyderabad"
        },
        {
          "type": "text",
          "value": "Argument Type Summary"
        },
        {
          "type": "table",
          "headers": [
            "Symbol",
            "Meaning"
          ],
          "rows": [
            [
              "/",
              "Positional-only arguments before it"
            ],
            [
              "*",
              "Keyword-only arguments after it"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Quick Comparison"
        },
        {
          "type": "table",
          "headers": [
            "Function Definition",
            "Valid Call"
          ],
          "rows": [
            [
              "def f(x, /)",
              "f(10)"
            ],
            [
              "def f(*, x)",
              "f(x=10)"
            ],
            [
              "def f(x)",
              "f(10) or f(x=10)"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Real-World Example"
        },
        {
          "type": "code",
          "value": "def create_account(username, /, *, password):\n    print(\"Account created\")\n# Correct\ncreate_account(\"vasu\", password=\"1234\")\n# Wrong\ncreate_account(username=\"vasu\", password=\"1234\")"
        },
        {
          "type": "text",
          "value": "Because username is positional-only."
        }
      ],
      "questions": [
        {
          "question": "What does the / symbol indicate in a function definition?",
          "answer": "It indicates that all arguments before it must be passed by position only (no keywords allowed)."
        },
        {
          "question": "How do you enforce keyword-only arguments in Python?",
          "answer": "By placing a * symbol before the keyword-only parameters in the function definition."
        },
        {
          "question": "In the function def func(a, /, b, *, c):, what is the nature of the argument b?",
          "answer": "Argument b is a 'normal' argument that can be passed either by position or by keyword."
        }
      ]
    },
    {
      "id": "python-examples-positional-keyword-only",
      "title": "Clear Examples for Positional-Only and Keyword-Only Arguments",
      "category": "Basic",
      "definition": "To master positional-only (/) and keyword-only (*) arguments, it is essential to understand the difference between correct and incorrect function calls. These examples clarify how Python enforces argument passing rules.",
      "sections": [
        {
          "type": "text",
          "value": "1. Positional-Only Arguments (/)\nArguments before / must be given by position only."
        },
        {
          "type": "text",
          "value": "Example 1"
        },
        {
          "type": "code",
          "value": "def student(name, /):\n    print(name)\n\nstudent(\"Rahul\")"
        },
        {
          "type": "output",
          "value": "Rahul\n\n✅ Correct because \"Rahul\" is passed by position."
        },
        {
          "type": "text",
          "value": "Wrong Example"
        },
        {
          "type": "code",
          "value": "def student(name, /):\n    print(name)\n\nstudent(name=\"Rahul\")"
        },
        {
          "type": "output",
          "value": "TypeError\n\n❌ Wrong because positional-only arguments cannot use name=."
        },
        {
          "type": "text",
          "value": "Real Understanding"
        },
        {
          "type": "code",
          "value": "def add(a, b, /):\n    print(a + b)\n\nadd(10, 20)"
        },
        {
          "type": "output",
          "value": "30\n\n✅ Correct"
        },
        {
          "type": "text",
          "value": "Wrong"
        },
        {
          "type": "code",
          "value": "add(a=10, b=20)"
        },
        {
          "type": "output",
          "value": "TypeError\n\n❌ Because a and b are positional-only."
        },
        {
          "type": "text",
          "value": "Easy Memory Trick\n/\nMeans:\n👉 \"Use only position\""
        },
        {
          "type": "text",
          "value": "2. Keyword-Only Arguments (*)\nArguments after * must use parameter names."
        },
        {
          "type": "text",
          "value": "Example 1"
        },
        {
          "type": "code",
          "value": "def student(*, name):\n    print(name)\n\nstudent(name=\"Rahul\")"
        },
        {
          "type": "output",
          "value": "Rahul\n\n✅ Correct because keyword is used."
        },
        {
          "type": "text",
          "value": "Wrong Example"
        },
        {
          "type": "code",
          "value": "def student(*, name):\n    print(name)\n\nstudent(\"Rahul\")"
        },
        {
          "type": "output",
          "value": "TypeError\n\n❌ Wrong because keyword-only arguments require name=."
        },
        {
          "type": "text",
          "value": "Real Understanding"
        },
        {
          "type": "code",
          "value": "def login(*, username, password):\n    print(\"Username:\", username)\n    print(\"Password:\", password)\n\nlogin(username=\"vasu\", password=\"1234\")"
        },
        {
          "type": "output",
          "value": "Username: vasu\nPassword: 1234\n\n✅ Correct"
        },
        {
          "type": "text",
          "value": "Wrong"
        },
        {
          "type": "code",
          "value": "login(\"vasu\", \"1234\")"
        },
        {
          "type": "output",
          "value": "TypeError\n\n❌ Because username and password are keyword-only."
        },
        {
          "type": "text",
          "value": "Easy Memory Trick\n*\nMeans:\n👉 \"Use parameter names\""
        },
        {
          "type": "text",
          "value": "3. Combining Both Together"
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "def employee(id, /, *, name):\n    print(\"ID:\", id)\n    print(\"Name:\", name)\n\nemployee(101, name=\"Rahul\")"
        },
        {
          "type": "output",
          "value": "ID: 101\nName: Rahul"
        },
        {
          "type": "text",
          "value": "Understanding"
        },
        {
          "type": "table",
          "headers": [
            "Argument",
            "Type"
          ],
          "rows": [
            [
              "id",
              "positional-only"
            ],
            [
              "name",
              "keyword-only"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Correct Call\nemployee(101, name=\"Rahul\")\n\n✅ Correct\n\nWrong Call 1\nemployee(id=101, name=\"Rahul\")\n\n❌ Error because id is positional-only.\n\nWrong Call 2\nemployee(101, \"Rahul\")\n\n❌ Error because name is keyword-only."
        },
        {
          "type": "text",
          "value": "Simple Visual Understanding"
        },
        {
          "type": "text",
          "value": "Positional-Only\ndef fun(a, /):\n\n✅ Call like:\n\nfun(10)\n\n❌ Not:\n\nfun(a=10)"
        },
        {
          "type": "text",
          "value": "Keyword-Only\ndef fun(*, a):\n\n✅ Call like:\n\nfun(a=10)\n\n❌ Not:\n\nfun(10)"
        },
        {
          "type": "text",
          "value": "Final Comparison Table"
        },
        {
          "type": "table",
          "headers": [
            "Type",
            "Symbol",
            "How to Pass"
          ],
          "rows": [
            [
              "Positional-only",
              "/",
              "By position only"
            ],
            [
              "Keyword-only",
              "*",
              "By parameter name only"
            ]
          ]
        },
        {
          "type": "text",
          "value": "One Perfect Example"
        },
        {
          "type": "code",
          "value": "def details(id, /, age, *, city):\n    print(id)\n    print(age)\n    print(city)\n\ndetails(101, 22, city=\"Vijayawada\")"
        },
        {
          "type": "output",
          "value": "101\n22\nVijayawada"
        },
        {
          "type": "text",
          "value": "Argument Types Here"
        },
        {
          "type": "table",
          "headers": [
            "Argument",
            "Type"
          ],
          "rows": [
            [
              "id",
              "positional-only"
            ],
            [
              "age",
              "normal"
            ],
            [
              "city",
              "keyword-only"
            ]
          ]
        },
        {
          "type": "text",
          "value": "So:\n\ndetails(101, 22, city=\"Vijayawada\")\n\n✅ Correct\n\ndetails(id=101, age=22, city=\"Vijayawada\")\n\n❌ Error (id cannot use keyword)\n\ndetails(101, 22, \"Vijayawada\")\n\n❌ Error (city must use keyword)"
        }
      ],
      "questions": [
        {
          "question": "What happens if you try to pass a positional-only argument using its name?",
          "answer": "Python raises a TypeError."
        },
        {
          "question": "Why is student(\"Rahul\") invalid for def student(*, name):?",
          "answer": "Because the * symbol enforces that all following arguments must be passed using keywords, and 'Rahul' is being passed by position."
        },
        {
          "question": "In def details(id, /, age, *, city):, can age be passed as a keyword argument?",
          "answer": "Yes, because age is placed between / and *, making it a normal argument that accepts both positional and keyword passing."
        }
      ]
    },
    {
      "id": "python-args-kwargs",
      "title": "Python *args and **kwargs",
      "category": "Basic",
      "definition": "When the number of arguments passed into a function is unknown, Python provides *args and **kwargs. *args collects extra positional arguments into a tuple, while **kwargs collects keyword arguments into a dictionary.",
      "sections": [
        {
          "type": "text",
          "value": "By default, a function must be called with the correct number of arguments."
        },
        {
          "type": "code",
          "value": "def add(a, b):\n    print(a + b)\n\nadd(10, 20)"
        },
        {
          "type": "output",
          "value": "30"
        },
        {
          "type": "text",
          "value": "Here, the function expects exactly 2 arguments. But sometimes, we do not know how many arguments will be passed.\nFor this, Python provides:\n• *args → accepts multiple positional arguments\n• **kwargs → accepts multiple keyword arguments"
        },
        {
          "type": "text",
          "value": "⭐ *args (Arbitrary Positional Arguments)\nIf you do not know how many positional arguments will be passed into a function, use *args.\nIt collects all extra positional arguments into a tuple."
        },
        {
          "type": "text",
          "value": "Syntax:\ndef function_name(*args):\n    pass"
        },
        {
          "type": "text",
          "value": "Example 1: Basic *args"
        },
        {
          "type": "code",
          "value": "def my_function(*kids):\n    print(\"The youngest child is\", kids[2])\n\nmy_function(\"Vasu\", \"Vasudha\", \"Vasudharini\")"
        },
        {
          "type": "output",
          "value": "The youngest child is Vasudharini"
        },
        {
          "type": "text",
          "value": "🔍 What Happens Internally?"
        },
        {
          "type": "code",
          "value": "def my_function(*args):\n    print(\"Type:\", type(args))\n    print(\"First argument:\", args[0])\n    print(\"Second argument:\", args[1])\n    print(\"Thrid argument:\", args[2])\n    print(\"All arguments:\", args)\n\nmy_function(\"Vasu\", \"Vasudha\", \"Vasudharini\")"
        },
        {
          "type": "output",
          "value": "Type: <class 'tuple'>\nFirst argument: Vasu\nSecond argument: Vasudha\nThrid argument: Vasudharini\nAll arguments: ('Vasu', 'Vasudha', 'Vasudharini')\n\n✅ args becomes a tuple."
        },
        {
          "type": "text",
          "value": "Using *args with Regular Arguments\nRegular parameters must come before *args."
        },
        {
          "type": "code",
          "value": "def my_function(greeting, *names):\n    for name in names:\n        print(greeting, name)\n\nmy_function(\"Hello\", \"Vasu\", \"Vasudha\", \"Vasudharini\")"
        },
        {
          "type": "output",
          "value": "Hello Vasu\nHello Vasudha\nHello Vasudharini"
        },
        {
          "type": "text",
          "value": "Practical Example: Sum of Numbers"
        },
        {
          "type": "code",
          "value": "def my_function(*numbers):\n    total = 0\n    for num in numbers:\n        total += num\n    return total\n\nprint(my_function(1, 2, 3))\nprint(my_function(10, 20, 30, 40))\nprint(my_function(5))"
        },
        {
          "type": "output",
          "value": "6\n100\n5"
        },
        {
          "type": "text",
          "value": "Practical Example: Find Maximum Value"
        },
        {
          "type": "code",
          "value": "def my_function(*numbers):\n    if len(numbers) == 0:\n        return None\n    max_num = numbers[0]\n    for num in numbers:\n        if num > max_num:\n            max_num = num\n    return max_num\n\nprint(my_function(3, 7, 2, 9, 1))"
        },
        {
          "type": "output",
          "value": "9"
        },
        {
          "type": "text",
          "value": "⭐ **kwargs (Arbitrary Keyword Arguments)\nIf you do not know how many keyword arguments will be passed, use **kwargs.\nIt collects all keyword arguments into a dictionary."
        },
        {
          "type": "text",
          "value": "Syntax:\ndef function_name(**kwargs):\n    pass"
        },
        {
          "type": "text",
          "value": "Example 1: Basic **kwargs"
        },
        {
          "type": "code",
          "value": "def my_function(**kid):\n    print(\"Her last name is\", kid[\"lname\"])\n\nmy_function(fname=\"Vasudharini\", lname=\"Chintada\")"
        },
        {
          "type": "output",
          "value": "Her last name is Chintada"
        },
        {
          "type": "text",
          "value": "🔍 What Happens Internally?"
        },
        {
          "type": "code",
          "value": "def my_function(**myvar):\n    print(\"Type:\", type(myvar))\n    print(\"Name:\", myvar[\"name\"])\n    print(\"Age:\", myvar[\"age\"])\n    print(\"City:\", myvar[\"city\"])\n    print(\"All data:\", myvar)\n\nmy_function(name=\"Vasudharini\", age=23, city=\"Vijayawada\")"
        },
        {
          "type": "output",
          "value": "Type: <class 'dict'>\nName: Vasudharini\nAge: 23\nCity: Vijayawada\nAll data: {'name': 'Vasudharini', 'age': 23, 'city': 'Vijayawada'}\n\n✅ kwargs becomes a dictionary."
        },
        {
          "type": "text",
          "value": "Using **kwargs with Regular Arguments\nRegular parameters must come before **kwargs."
        },
        {
          "type": "code",
          "value": "def my_function(username, **details):\n    print(\"Username:\", username)\n    print(\"Additional details:\")\n    for key, value in details.items():\n        print(key + \":\", value)\n\nmy_function(\"vasudharini\", age=23, city=\"Vijayawada\", hobby=\"coding\")"
        },
        {
          "type": "output",
          "value": "Username: vasudharini\nAdditional details:\nage: 23\ncity: Vijayawada\nhobby: coding"
        },
        {
          "type": "text",
          "value": "⭐ Combining *args and **kwargs\nYou can use both together.\nCorrect Order: Regular parameters → *args → **kwargs"
        },
        {
          "type": "code",
          "value": "def my_function(title, *args, **kwargs):\n    print(\"Title:\", title)\n    print(\"Positional arguments:\", args)\n    print(\"Keyword arguments:\", kwargs)\n\nmy_function(\n    \"User Info\",\n    \"vasu\",\n    \"vasudharini\",\n    age=25,\n    city=\"Vijayawada\"\n)"
        },
        {
          "type": "output",
          "value": "Title: User Info\nPositional arguments: ('vasu', 'vasudharini')\nKeyword arguments: {'age': 25, 'city': 'Vijayawada'}"
        },
        {
          "type": "text",
          "value": "🔥 Unpacking Arguments\n* and ** are also used while calling functions."
        },
        {
          "type": "text",
          "value": "Unpacking a List with *"
        },
        {
          "type": "code",
          "value": "def my_function(a, b, c):\n    return a + b + c\n\nnumbers = [1, 2, 3]\nresult = my_function(*numbers)\nprint(result)"
        },
        {
          "type": "output",
          "value": "6\n\nInternally my_function(*numbers) is same as my_function(1, 2, 3)"
        },
        {
          "type": "text",
          "value": "Unpacking a Dictionary with **"
        },
        {
          "type": "code",
          "value": "def my_function(fname, lname):\n    print(\"Hello\", fname, lname)\n\nperson = {\n    \"fname\": \"Vasudharini\",\n    \"lname\": \"Chintada\"\n}\n\nmy_function(**person)"
        },
        {
          "type": "output",
          "value": "Hello Vasudharini Chintada\n\nInternally my_function(**person) is same as my_function(fname=\"Vasudharini\", lname=\"Chintada\")"
        },
        {
          "type": "text",
          "value": "🧠 Important Difference"
        },
        {
          "type": "table",
          "headers": [
            "Feature",
            "*args",
            "**kwargs"
          ],
          "rows": [
            [
              "Accepts",
              "Positional arguments",
              "Keyword arguments"
            ],
            [
              "Stored As",
              "Tuple",
              "Dictionary"
            ],
            [
              "Symbol",
              "*",
              "**"
            ]
          ]
        },
        {
          "type": "text",
          "value": "📌 Remember"
        },
        {
          "type": "table",
          "headers": [
            "Usage",
            "Purpose"
          ],
          "rows": [
            [
              "*args in definition",
              "Collect positional arguments"
            ],
            [
              "**kwargs in definition",
              "Collect keyword arguments"
            ],
            [
              "*list in function call",
              "Unpack list/tuple"
            ],
            [
              "**dict in function call",
              "Unpack dictionary"
            ]
          ]
        },
        {
          "type": "text",
          "value": "🎯 Real-Time Example"
        },
        {
          "type": "code",
          "value": "def employee(name, *skills, **details):\n    print(\"Name:\", name)\n    print(\"\\nSkills:\")\n    for skill in skills:\n        print(skill)\n    print(\"\\nDetails:\")\n    for key, value in details.items():\n        print(key, \":\", value)\n\nemployee(\n    \"Vasu\",\n    \"Python\",\n    \"Flask\",\n    \"MySQL\",\n    age=23,\n    city=\"Vijayawada\"\n)"
        },
        {
          "type": "output",
          "value": "Name: Vasu\n\nSkills:\nPython\nFlask\nMySQL\n\nDetails:\nage : 23\ncity : Vijayawada"
        }
      ],
      "questions": [
        {
          "question": "What is the difference between *args and **kwargs?",
          "answer": "*args is used to pass a variable number of positional arguments (stored as a tuple), while **kwargs is used to pass a variable number of keyword arguments (stored as a dictionary)."
        },
        {
          "question": "What is the correct order of parameters when combining regular arguments, *args, and **kwargs?",
          "answer": "The correct order is: Regular parameters, then *args, then **kwargs."
        },
        {
          "question": "How do you unpack a list into a function call?",
          "answer": "You use the * operator before the list name in the function call, like func(*my_list)."
        }
      ]
    },
    {
      "id": "python-args-kwargs-mastery",
      "title": "Python *args and **kwargs (Practical Examples)",
      "category": "Basic",
      "definition": "Mastering *args and **kwargs is essential for writing flexible Python functions. These examples demonstrate how to handle a variable number of positional and keyword arguments effectively using specific real-world data patterns.",
      "sections": [
        {
          "type": "text",
          "value": "*args and **kwargs are used when you do not know how many arguments will be passed to a function."
        },
        {
          "type": "text",
          "value": "⭐ *args (Non-Keyword Variable Arguments)\n*args allows a function to accept multiple positional arguments. It stores values in a tuple."
        },
        {
          "type": "text",
          "value": "Syntax:\ndef function_name(*args):\n    pass"
        },
        {
          "type": "text",
          "value": "Example 1: Basic *args"
        },
        {
          "type": "code",
          "value": "def numbers(*args):\n    print(args)\n\nnumbers(1, 2, 3, 4)"
        },
        {
          "type": "output",
          "value": "(1, 2, 3, 4)"
        },
        {
          "type": "text",
          "value": "Example 2: Loop Through *args"
        },
        {
          "type": "code",
          "value": "def show(*names):\n    for i in names:\n        print(i)\n\nshow(\"vasu\", \"vasudha\", \"vasudharini\")"
        },
        {
          "type": "output",
          "value": "vasu\nvasudha\nvasudharini"
        },
        {
          "type": "text",
          "value": "Example 3: Sum of Numbers Using *args"
        },
        {
          "type": "code",
          "value": "def total(*nums):\n    result = 0\n    for i in nums:\n        result += i\n    print(\"Total =\", result)\n\ntotal(10, 20, 30)"
        },
        {
          "type": "output",
          "value": "Total = 60"
        },
        {
          "type": "text",
          "value": "🔥 Important Point\nargs is just a name. You can use any name."
        },
        {
          "type": "code",
          "value": "def demo(*x):\n    print(x)\n\ndemo(1, 2)"
        },
        {
          "type": "output",
          "value": "(1, 2)"
        },
        {
          "type": "text",
          "value": "⭐ **kwargs (Keyword Variable Arguments)\n**kwargs allows a function to accept multiple keyword arguments. It stores values in a dictionary."
        },
        {
          "type": "text",
          "value": "Syntax:\ndef function_name(**kwargs):\n    pass"
        },
        {
          "type": "text",
          "value": "Example 1: Basic **kwargs"
        },
        {
          "type": "code",
          "value": "def details(**kwargs):\n    print(kwargs)\n\ndetails(name=\"Vasudharini\", age=23)"
        },
        {
          "type": "output",
          "value": "{'name': 'Vasudharini', 'age': 23}"
        },
        {
          "type": "text",
          "value": "Example 2: Access Dictionary Values"
        },
        {
          "type": "code",
          "value": "def student(**data):\n    print(\"Name:\", data[\"name\"])\n    print(\"Age:\", data[\"age\"])\n\nstudent(name=\"Vasudharini\", age=23)"
        },
        {
          "type": "output",
          "value": "Name: Vasudharini\nAge: 23"
        },
        {
          "type": "text",
          "value": "Example 3: Loop Through **kwargs"
        },
        {
          "type": "code",
          "value": "def info(**data):\n    for key, value in data.items():\n        print(key, \"=\", value)\n\ninfo(name=\"Vasudharini\", age=23, city=\"Vijayawada\")"
        },
        {
          "type": "output",
          "value": "name = Vasudharini\nage = 23\ncity = Vijayawada"
        },
        {
          "type": "text",
          "value": "🔥 Important Point\nkwargs is also just a name."
        },
        {
          "type": "code",
          "value": "def demo(**x):\n    print(x)\n\ndemo(a=1, b=2)"
        },
        {
          "type": "output",
          "value": "{'a': 1, 'b': 2}"
        },
        {
          "type": "text",
          "value": "🔄 Difference Between *args and **kwargs"
        },
        {
          "type": "table",
          "headers": [
            "Feature",
            "*args",
            "**kwargs"
          ],
          "rows": [
            [
              "Accepts",
              "Positional arguments",
              "Keyword arguments"
            ],
            [
              "Stores data in",
              "Tuple",
              "Dictionary"
            ],
            [
              "Symbol",
              "*",
              "**"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Using Both Together"
        },
        {
          "type": "code",
          "value": "def demo(*args, **kwargs):\n    print(\"Args:\", args)\n    print(\"Kwargs:\", kwargs)\n\ndemo(1, 2, 3, name=\"Vasudharini\", age=23)"
        },
        {
          "type": "output",
          "value": "Args: (1, 2, 3)\nKwargs: {'name': 'Vasudharini', 'age': 23}"
        },
        {
          "type": "text",
          "value": "📌 Order of Arguments in Functions\nCorrect order: Regular parameters → Default arguments → *args → **kwargs"
        },
        {
          "type": "code",
          "value": "def demo(a, b=10, *args, **kwargs):\n    print(a, b, args, kwargs)\n\ndemo(1, 20, 2, 3, name=\"Vasudharini\")"
        },
        {
          "type": "output",
          "value": "1 20 (2, 3) {'name': 'Vasudharini'}"
        },
        {
          "type": "text",
          "value": "🎯 Real-World Example"
        },
        {
          "type": "code",
          "value": "def employee(name, *skills, **details):\n    print(\"Name:\", name)\n    print(\"\\nSkills:\")\n    for i in skills:\n        print(i)\n    print(\"\\nDetails:\")\n    for k, v in details.items():\n        print(k, \":\", v)\n\nemployee(\n    \"Vasudharini\",\n    \"Python\",\n    \"Django\",\n    age=23,\n    city=\"Vijayawada\"\n)"
        },
        {
          "type": "output",
          "value": "Name: Vasudharini\n\nSkills:\nPython\nDjango\n\nDetails:\nage : 23\ncity : Vijayawada"
        }
      ],
      "questions": [
        {
          "question": "In the function def show(*names):, what is the data type of names?",
          "answer": "It is a tuple."
        },
        {
          "question": "What is the purpose of the ** prefix in a function parameter?",
          "answer": "It allows the function to collect any number of keyword arguments into a dictionary."
        },
        {
          "question": "Can you use a name other than args or kwargs?",
          "answer": "Yes, args and kwargs are just conventions; you can use any name as long as it is preceded by * or **."
        }
      ]
    },
    {
      "id": "python-scope",
      "title": "Python Scope",
      "category": "Basic",
      "definition": "Scope determines the visibility and accessibility of a variable in different regions of a program. Python follows the LEGB rule (Local, Enclosing, Global, Built-in) to resolve variable names.",
      "sections": [
        {
          "type": "text",
          "value": "A variable is only available inside the region where it is created. This is called scope. Python has mainly 4 types of scope:\n• Local Scope\n• Enclosing Scope\n• Global Scope\n• Built-in Scope"
        },
        {
          "type": "text",
          "value": "1. Local Scope\nA variable created inside a function belongs to the local scope. It can only be used inside that function."
        },
        {
          "type": "code",
          "value": "def my_function():\n    x = 10\n    print(x)\n\nmy_function()"
        },
        {
          "type": "output",
          "value": "10"
        },
        {
          "type": "text",
          "value": "Accessing Local Variable Outside Function"
        },
        {
          "type": "code",
          "value": "def my_function():\n    x = 10\n\nprint(x)"
        },
        {
          "type": "output",
          "value": "NameError: name 'x' is not defined\n\n✅ Because x exists only inside the function."
        },
        {
          "type": "text",
          "value": "2. Global Scope\nA variable created outside all functions is called a global variable. It can be used anywhere in the program."
        },
        {
          "type": "code",
          "value": "x = 100\n\ndef my_function():\n    print(x)\n\nmy_function()\nprint(x)"
        },
        {
          "type": "output",
          "value": "100\n100"
        },
        {
          "type": "text",
          "value": "Local vs Global Variable\nIf a local variable and global variable have the same name, the local variable gets priority inside the function."
        },
        {
          "type": "code",
          "value": "x = 50\n\ndef my_function():\n    x = 10\n    print(\"Local x =\", x)\n\nmy_function()\nprint(\"Global x =\", x)"
        },
        {
          "type": "output",
          "value": "Local x = 10\nGlobal x = 50"
        },
        {
          "type": "text",
          "value": "3. The global Keyword\nNormally, you cannot change a global variable inside a function directly. Use the global keyword to modify it."
        },
        {
          "type": "text",
          "value": "❌ Without global"
        },
        {
          "type": "code",
          "value": "x = 10\n\ndef my_function():\n    x = 20\n    print(x)\n\nmy_function()\nprint(x)"
        },
        {
          "type": "output",
          "value": "20\n10\n\n✅ The global variable is not changed."
        },
        {
          "type": "text",
          "value": "✅ With global"
        },
        {
          "type": "code",
          "value": "x = 10\n\ndef my_function():\n    global x\n    x = 20\n\nmy_function()\nprint(x)"
        },
        {
          "type": "output",
          "value": "20\n\n✅ Now the global variable is modified."
        },
        {
          "type": "text",
          "value": "Creating Global Variable Inside Function"
        },
        {
          "type": "code",
          "value": "def my_function():\n    global x\n    x = 100\n\nmy_function()\nprint(x)"
        },
        {
          "type": "output",
          "value": "100"
        },
        {
          "type": "text",
          "value": "4. Enclosing Scope (Nested Functions)\nA variable in the outer function can be accessed inside the inner function."
        },
        {
          "type": "code",
          "value": "def outer():\n    x = \"Python\"\n    def inner():\n        print(x)\n    inner()\n\nouter()"
        },
        {
          "type": "output",
          "value": "Python"
        },
        {
          "type": "text",
          "value": "The nonlocal Keyword\nUsed to modify a variable from the enclosing function."
        },
        {
          "type": "code",
          "value": "def outer():\n    x = 10\n    def inner():\n        nonlocal x\n        x = 20\n        print(\"Inner:\", x)\n    inner()\n    print(\"Outer:\", x)\n\nouter()"
        },
        {
          "type": "output",
          "value": "Inner: 20\nOuter: 20"
        },
        {
          "type": "text",
          "value": "5. Built-in Scope\nPython already has built-in names/functions available everywhere like print(), len(), type(), and range()."
        },
        {
          "type": "code",
          "value": "x = [1, 2, 3]\nprint(len(x))"
        },
        {
          "type": "output",
          "value": "3"
        },
        {
          "type": "text",
          "value": "🧠 LEGB Rule in Python\nPython searches variables in this order: Local → Enclosing → Global → Built-in."
        },
        {
          "type": "table",
          "headers": [
            "Scope",
            "Meaning"
          ],
          "rows": [
            [
              "L",
              "Local"
            ],
            [
              "E",
              "Enclosing"
            ],
            [
              "G",
              "Global"
            ],
            [
              "B",
              "Built-in"
            ]
          ]
        },
        {
          "type": "text",
          "value": "LEGB Example"
        },
        {
          "type": "code",
          "value": "x = \"global\"\n\ndef outer():\n    x = \"enclosing\"\n    def inner():\n        x = \"local\"\n        print(\"Inner:\", x)\n    inner()\n    print(\"Outer:\", x)\n\nouter()\nprint(\"Global:\", x)"
        },
        {
          "type": "output",
          "value": "Inner: local\nOuter: enclosing\nGlobal: global"
        },
        {
          "type": "text",
          "value": "Summary Table"
        },
        {
          "type": "table",
          "headers": [
            "Scope Type",
            "Defined Where",
            "Accessible Where"
          ],
          "rows": [
            [
              "Local",
              "Inside function",
              "Only inside function"
            ],
            [
              "Global",
              "Outside function",
              "Entire program"
            ],
            [
              "Enclosing",
              "Outer function",
              "Inner function"
            ],
            [
              "Built-in",
              "Python built-ins",
              "Everywhere"
            ]
          ]
        },
        {
          "type": "text",
          "value": "🎯 Real-Time Example"
        },
        {
          "type": "code",
          "value": "balance = 1000\n\ndef deposit(amount):\n    global balance\n    balance += amount\n    print(\"Updated Balance:\", balance)\n\ndeposit(500)\nprint(\"Final Balance:\", balance)"
        },
        {
          "type": "output",
          "value": "Updated Balance: 1500\nFinal Balance: 1500"
        }
      ],
      "questions": [
        {
          "question": "What is the LEGB rule in Python?",
          "answer": "It is the order in which Python searches for variables: Local, Enclosing, Global, and then Built-in."
        },
        {
          "question": "How can you modify a global variable inside a function?",
          "answer": "By using the 'global' keyword followed by the variable name before assigning a new value."
        },
        {
          "question": "What is the purpose of the 'nonlocal' keyword?",
          "answer": "It is used in nested functions to work with variables defined in the outer (enclosing) function's scope."
        }
      ]
    },
    {
      "id": "python-scope-tutorial",
      "title": "Python Scope (Tutorial)",
      "category": "Basic",
      "definition": "A comprehensive guide to understanding variable accessibility in Python. This module covers the nuances of local, global, enclosing, and built-in scopes, specifically focusing on nested function behaviors and keyword interactions.",
      "sections": [
        {
          "type": "text",
          "value": "A variable is only available inside the region where it is created. This is called scope."
        },
        {
          "type": "text",
          "value": "📌 Types of Scope in Python\nPython mainly has: Local, Global, Enclosing, and Built-in Scope. Python follows the LEGB Rule to search for variables."
        },
        {
          "type": "text",
          "value": "1. Local Scope\nA variable created inside a function belongs to the local scope. It can only be used inside that function."
        },
        {
          "type": "code",
          "value": "def myfunc():\n    x = 300\n    print(x)\n\nmyfunc()"
        },
        {
          "type": "output",
          "value": "300\n\n✅ x exists only inside myfunc()."
        },
        {
          "type": "text",
          "value": "Accessing Local Variable Outside Function"
        },
        {
          "type": "code",
          "value": "def myfunc():\n    x = 300\n\nprint(x)"
        },
        {
          "type": "output",
          "value": "NameError: name 'x' is not defined\n\nBecause x is local to the function."
        },
        {
          "type": "text",
          "value": "2. Function Inside Function\nA local variable can also be accessed by functions inside that function."
        },
        {
          "type": "code",
          "value": "def myfunc():\n    x = 300\n    def myinnerfunc():\n        print(x)\n    myinnerfunc()\n\nmyfunc()"
        },
        {
          "type": "output",
          "value": "300\n\n✅ Inner functions can access variables from outer functions. This is called Enclosing Scope."
        },
        {
          "type": "text",
          "value": "3. Global Scope\nA variable created outside all functions is called a global variable. It can be used anywhere in the program."
        },
        {
          "type": "code",
          "value": "x = 300\n\ndef myfunc():\n    print(x)\n\nmyfunc()\nprint(x)"
        },
        {
          "type": "output",
          "value": "300\n300\n\n✅ Global variables are accessible inside and outside functions."
        },
        {
          "type": "text",
          "value": "4. Naming Variables (Local vs Global)\nIf the same variable name exists inside and outside a function, Python treats them as different variables."
        },
        {
          "type": "code",
          "value": "x = 300\n\ndef myfunc():\n    x = 200\n    print(x)\n\nmyfunc()\nprint(x)"
        },
        {
          "type": "output",
          "value": "200\n300"
        },
        {
          "type": "table",
          "headers": [
            "Variable",
            "Scope",
            "Value"
          ],
          "rows": [
            [
              "Local x",
              "Inside function",
              "200"
            ],
            [
              "Global x",
              "Outside function",
              "300"
            ]
          ]
        },
        {
          "type": "text",
          "value": "✅ Local variable gets priority inside the function."
        },
        {
          "type": "text",
          "value": "5. The global Keyword\nUse global when you want to create or modify a global variable inside a function."
        },
        {
          "type": "text",
          "value": "Creating Global Variable Inside Function"
        },
        {
          "type": "code",
          "value": "def myfunc():\n    global x\n    x = 300\n\nmyfunc()\nprint(x)"
        },
        {
          "type": "output",
          "value": "300"
        },
        {
          "type": "text",
          "value": "Changing Global Variable Inside Function"
        },
        {
          "type": "code",
          "value": "x = 300\n\ndef myfunc():\n    global x\n    x = 200\n\nmyfunc()\nprint(x)"
        },
        {
          "type": "output",
          "value": "200\n\n✅ global allows changing the original global variable."
        },
        {
          "type": "text",
          "value": "6. The nonlocal Keyword\nnonlocal is used inside nested functions. It allows the inner function to modify variables from the outer function."
        },
        {
          "type": "code",
          "value": "def myfunc1():\n    x = \"Jane\"\n    def myfunc2():\n        nonlocal x\n        x = \"hello\"\n    myfunc2()\n    return x\n\nprint(myfunc1())"
        },
        {
          "type": "output",
          "value": "hello"
        },
        {
          "type": "text",
          "value": "🔥 Difference Between global and nonlocal"
        },
        {
          "type": "table",
          "headers": [
            "Keyword",
            "Used For"
          ],
          "rows": [
            [
              "global",
              "Modify global variable"
            ],
            [
              "nonlocal",
              "Modify enclosing function variable"
            ]
          ]
        },
        {
          "type": "text",
          "value": "7. Built-in Scope\nPython has built-in names available everywhere."
        },
        {
          "type": "code",
          "value": "numbers = [1, 2, 3]\nprint(len(numbers))"
        },
        {
          "type": "output",
          "value": "3"
        },
        {
          "type": "text",
          "value": "🧠 The LEGB Rule\nPython searches variables in this order: Local → Enclosing → Global → Built-in."
        },
        {
          "type": "table",
          "headers": [
            "Letter",
            "Scope"
          ],
          "rows": [
            [
              "L",
              "Local"
            ],
            [
              "E",
              "Enclosing"
            ],
            [
              "G",
              "Global"
            ],
            [
              "B",
              "Built-in"
            ]
          ]
        },
        {
          "type": "text",
          "value": "LEGB Example"
        },
        {
          "type": "code",
          "value": "x = \"global\"\n\ndef outer():\n    x = \"enclosing\"\n    def inner():\n        x = \"local\"\n        print(\"Inner:\", x)\n    inner()\n    print(\"Outer:\", x)\n\nouter()\nprint(\"Global:\", x)"
        },
        {
          "type": "output",
          "value": "Inner: local\nOuter: enclosing\nGlobal: global"
        },
        {
          "type": "text",
          "value": "🔍 How Python Searches\nInside inner():\n1. Checks Local → \"local\" found (Stops searching)\n\nIf not found:\n2. checks Enclosing\n3. then Global\n4. then Built-in"
        },
        {
          "type": "text",
          "value": "📌 Summary Table"
        },
        {
          "type": "table",
          "headers": [
            "Scope Type",
            "Created Where",
            "Accessible Where"
          ],
          "rows": [
            [
              "Local",
              "Inside function",
              "Only inside function"
            ],
            [
              "Enclosing",
              "Outer function",
              "Inner function"
            ],
            [
              "Global",
              "Outside function",
              "Entire program"
            ],
            [
              "Built-in",
              "Python built-ins",
              "Everywhere"
            ]
          ]
        },
        {
          "type": "text",
          "value": "🎯 Real-Time Example"
        },
        {
          "type": "code",
          "value": "balance = 1000\n\ndef deposit(amount):\n    global balance\n    balance += amount\n    print(\"Updated Balance:\", balance)\n\ndeposit(500)\nprint(\"Final Balance:\", balance)"
        },
        {
          "type": "output",
          "value": "Updated Balance: 1500\nFinal Balance: 1500"
        }
      ],
      "questions": [
        {
          "question": "What is the difference between global and nonlocal keywords?",
          "answer": "'global' is used to access or modify variables at the top level of a script, while 'nonlocal' is used in nested functions to modify variables in the immediate outer function scope."
        },
        {
          "question": "Why does a local variable take priority over a global one with the same name inside a function?",
          "answer": "Because Python follows the LEGB rule, searching the Local scope first before checking the Global scope."
        },
        {
          "question": "What happens if a variable is not found in the Local, Enclosing, or Global scopes?",
          "answer": "Python finally checks the Built-in scope. If it's still not found, it raises a NameError."
        }
      ]
    },
    {
      "id": "python-decorators",
      "title": "Python Decorators",
      "category": "Basic",
      "definition": "A decorator is a function that modifies the behavior of another function without changing its original code. It is a powerful tool for code reuse and for adding extra functionality to existing functions.",
      "sections": [
        {
          "type": "text",
          "value": "Decorators are used to add extra functionality, reuse code, and avoid repetition. In Python, functions are treated like variables, meaning they can be passed as arguments and can return other functions."
        },
        {
          "type": "text",
          "value": "⭐ Function Inside Function"
        },
        {
          "type": "code",
          "value": "def outer():\n    def inner():\n        print(\"Inner Function\")\n    inner()\n\nouter()"
        },
        {
          "type": "output",
          "value": "Inner Function"
        },
        {
          "type": "text",
          "value": "⭐ Returning a Function"
        },
        {
          "type": "code",
          "value": "def outer():\n    def inner():\n        print(\"Hello from inner\")\n    return inner\n\nx = outer()\nx()"
        },
        {
          "type": "output",
          "value": "Hello from inner"
        },
        {
          "type": "text",
          "value": "🎯 What is a Decorator?\nA decorator takes a function, adds some functionality, and returns the modified function."
        },
        {
          "type": "code",
          "value": "def decorator_function(original_function):\n    def wrapper():\n        print(\"Before the function call\")\n        original_function()\n        print(\"After the function call\")\n    return wrapper\n\ndef display():\n    print(\"Hello World\")\n\ndecorated = decorator_function(display)\ndecorated()"
        },
        {
          "type": "output",
          "value": "Before the function call\nHello World\nAfter the function call"
        },
        {
          "type": "table",
          "headers": [
            "Step",
            "Description"
          ],
          "rows": [
            [
              "display",
              "Original function"
            ],
            [
              "wrapper",
              "Adds extra functionality"
            ],
            [
              "decorator_function()",
              "Returns wrapper"
            ],
            [
              "decorated()",
              "Executes modified function"
            ]
          ]
        },
        {
          "type": "text",
          "value": "⭐ Using @ Decorator Syntax\nPython provides a shortcut using @ to apply a decorator to a function."
        },
        {
          "type": "code",
          "value": "def decorator_function(original_function):\n    def wrapper():\n        print(\"Before function\")\n        original_function()\n        print(\"After function\")\n    return wrapper\n\n@decorator_function\ndef display():\n    print(\"Hello\")\n\ndisplay()"
        },
        {
          "type": "output",
          "value": "Before function\nHello\nAfter function"
        },
        {
          "type": "text",
          "value": "🔥 Decorator with Arguments\nIf the original function has parameters, the wrapper must also accept parameters using *args and **kwargs for flexibility."
        },
        {
          "type": "code",
          "value": "def decorator_function(original_function):\n    def wrapper(*args, **kwargs):\n        print(\"Before function\")\n        original_function(*args, **kwargs)\n        print(\"After function\")\n    return wrapper\n\n@decorator_function\ndef greet(name):\n    print(\"Hello\", name)\n\n@decorator_function\ndef add(a, b):\n    print(a + b)\n\ngreet(\"Alice\")\nadd(10, 20)"
        },
        {
          "type": "output",
          "value": "Before function\nHello Alice\nAfter function\nBefore function\n30\nAfter function"
        },
        {
          "type": "text",
          "value": "🎯 Real-World Example: Login Check"
        },
        {
          "type": "code",
          "value": "def login_required(function):\n    def wrapper():\n        print(\"Checking login...\")\n        function()\n    return wrapper\n\n@login_required\ndef dashboard():\n    print(\"Welcome to Dashboard\")\n\ndashboard()"
        },
        {
          "type": "output",
          "value": "Checking login...\nWelcome to Dashboard"
        },
        {
          "type": "text",
          "value": "⭐ Multiple Decorators\nYou can apply more than one decorator by stacking them."
        },
        {
          "type": "code",
          "value": "def decorator1(func):\n    def wrapper():\n        print(\"Decorator 1\")\n        func()\n    return wrapper\n\ndef decorator2(func):\n    def wrapper():\n        print(\"Decorator 2\")\n        func()\n    return wrapper\n\n@decorator1\n@decorator2\ndef display():\n    print(\"Hello\")\n\ndisplay()"
        },
        {
          "type": "output",
          "value": "Decorator 1\nDecorator 2\nHello"
        },
        {
          "type": "text",
          "value": "🔥 Built-in Decorators in Python"
        },
        {
          "type": "table",
          "headers": [
            "Decorator",
            "Purpose"
          ],
          "rows": [
            [
              "@staticmethod",
              "Static method"
            ],
            [
              "@classmethod",
              "Class method"
            ],
            [
              "@property",
              "Getter method"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Example: @staticmethod and @property"
        },
        {
          "type": "code",
          "value": "class Student:\n    def __init__(self, name):\n        self._name = name\n    @property\n    def name(self):\n        return self._name\n    @staticmethod\n    def info():\n        print(\"Student class\")\n\ns = Student(\"Alice\")\nprint(s.name)\nStudent.info()"
        },
        {
          "type": "output",
          "value": "Alice\nStudent class"
        },
        {
          "type": "text",
          "value": "🧠 Summary"
        },
        {
          "type": "table",
          "headers": [
            "Concept",
            "Description"
          ],
          "rows": [
            [
              "Decorator",
              "Function that modifies another function"
            ],
            [
              "wrapper",
              "Inner function inside decorator"
            ],
            [
              "@decorator",
              "Shortcut syntax"
            ],
            [
              "*args, **kwargs",
              "Makes decorator flexible"
            ]
          ]
        },
        {
          "type": "text",
          "value": "🎯 Simple Visual Flow\n@decorator\ndef hello():\n    pass\n\nis equal to:\nhello = decorator(hello)"
        }
      ],
      "questions": [
        {
          "question": "What is a decorator in Python?",
          "answer": "A decorator is a function that takes another function as an argument, adds some functionality, and returns a new function without modifying the original function's source code."
        },
        {
          "question": "What is the purpose of the wrapper function inside a decorator?",
          "answer": "The wrapper function contains the actual logic that adds behavior before and/or after the original function is executed."
        },
        {
          "question": "How do you handle function arguments in a decorator?",
          "answer": "By using *args and **kwargs in the wrapper function definition and when calling the original function inside the wrapper."
        }
      ]
    },
    {
      "id": "python-decorators-advanced",
      "title": "Python Decorators (Advanced Concepts)",
      "category": "Basic",
      "definition": "Building upon basic decorators, this module explores advanced patterns such as decorators with arguments, preserving function metadata with functools.wraps, and understanding the execution order of multiple stacked decorators.",
      "sections": [
        {
          "type": "text",
          "value": "Decorators let you add extra behavior to a function without changing the original function code. A decorator is a function that takes another function as input and returns a modified function."
        },
        {
          "type": "text",
          "value": "🧠 Basic Idea\n@decorator_name\ndef myfunction():\n    pass\n\nis equal to:\nmyfunction = decorator_name(myfunction)"
        },
        {
          "type": "text",
          "value": "⭐ Basic Decorator Example"
        },
        {
          "type": "code",
          "value": "def changecase(func):\n    def myinner():\n        return func().upper()\n    return myinner\n\n@changecase\ndef myfunction():\n    return \"Hello Sally\"\n\nprint(myfunction())"
        },
        {
          "type": "output",
          "value": "HELLO SALLY"
        },
        {
          "type": "table",
          "headers": [
            "Part",
            "Meaning"
          ],
          "rows": [
            [
              "changecase",
              "Decorator function"
            ],
            [
              "myfunction",
              "Original function"
            ],
            [
              "myinner",
              "Wrapper function"
            ],
            [
              "@changecase",
              "Applies decorator"
            ]
          ]
        },
        {
          "type": "text",
          "value": "🔥 How It Works Internally\nmyfunction = changecase(myfunction)\nThe decorator takes the original function, modifies its behavior, and returns a new function."
        },
        {
          "type": "text",
          "value": "⭐ Multiple Decorator Calls\nThe same decorator can be used on many functions."
        },
        {
          "type": "code",
          "value": "def changecase(func):\n    def myinner():\n        return func().upper()\n    return myinner\n\n@changecase\ndef myfunction():\n    return \"Hello Sally\"\n\n@changecase\ndef otherfunction():\n    return \"I am speed!\"\n\nprint(myfunction())\nprint(otherfunction())"
        },
        {
          "type": "output",
          "value": "HELLO SALLY\nI AM SPEED!"
        },
        {
          "type": "text",
          "value": "⭐ Decorators with Function Arguments\nIf the decorated function accepts arguments, the wrapper must also accept arguments using *args and **kwargs to be flexible."
        },
        {
          "type": "code",
          "value": "def changecase(func):\n    def myinner(*args, **kwargs):\n        return func(*args, **kwargs).upper()\n    return myinner\n\n@changecase\ndef myfunction(nam):\n    return \"Hello \" + nam\n\nprint(myfunction(\"John\"))"
        },
        {
          "type": "output",
          "value": "HELLO JOHN"
        },
        {
          "type": "text",
          "value": "⭐ Decorator with Arguments\nDecorators themselves can also take arguments. This requires an extra wrapper level."
        },
        {
          "type": "code",
          "value": "def changecase(n):\n    def decorator(func):\n        def myinner():\n            if n == 1:\n                return func().lower()\n            else:\n                return func().upper()\n        return myinner\n    return decorator\n\n@changecase(1)\ndef myfunction():\n    return \"Hello Linus\"\n\nprint(myfunction())"
        },
        {
          "type": "output",
          "value": "hello linus"
        },
        {
          "type": "text",
          "value": "⭐ Multiple Decorators\nYou can apply more than one decorator to a function. Decorators are executed from bottom to top."
        },
        {
          "type": "code",
          "value": "def changecase(func):\n    def myinner():\n        return func().upper()\n    return myinner\n\ndef addgreeting(func):\n    def myinner():\n        return \"Hello \" + func() + \" Have a good day!\"\n    return myinner\n\n@changecase\n@addgreeting\ndef myfunction():\n    return \"Tobias\"\n\nprint(myfunction())"
        },
        {
          "type": "output",
          "value": "HELLO TOBIAS HAVE A GOOD DAY!"
        },
        {
          "type": "text",
          "value": "🔍 Order of Execution\nPython applies decorators in reverse order.\n@decorator1\n@decorator2\ndef test():\n    pass\n\nInternally: test = decorator1(decorator2(test))"
        },
        {
          "type": "text",
          "value": "⭐ Function Metadata and the Problem with Decorators\nFunctions have metadata like __name__. However, decorators replace the original function with the wrapper function, causing metadata loss."
        },
        {
          "type": "code",
          "value": "def changecase(func):\n    def myinner():\n        return func().upper()\n    return myinner\n\n@changecase\ndef myfunction():\n    return \"Have a great day!\"\n\nprint(myfunction.__name__)"
        },
        {
          "type": "output",
          "value": "myinner\n\n⚠️ Original function name 'myfunction' is lost."
        },
        {
          "type": "text",
          "value": "⭐ Fix Using functools.wraps\nPython provides functools.wraps to preserve original function metadata."
        },
        {
          "type": "code",
          "value": "import functools\n\ndef changecase(func):\n    @functools.wraps(func)\n    def myinner():\n        return func().upper()\n    return myinner\n\n@changecase\ndef myfunction():\n    return \"Have a great day!\"\n\nprint(myfunction.__name__)"
        },
        {
          "type": "output",
          "value": "myfunction\n\n✅ Original metadata is preserved."
        },
        {
          "type": "text",
          "value": "📌 Summary Table"
        },
        {
          "type": "table",
          "headers": [
            "Concept",
            "Description"
          ],
          "rows": [
            [
              "Decorator",
              "Function that modifies another function"
            ],
            [
              "Wrapper",
              "Inner function inside decorator"
            ],
            [
              "@decorator",
              "Shortcut syntax"
            ],
            [
              "*args, **kwargs",
              "Accept flexible arguments"
            ],
            [
              "functools.wraps",
              "Preserve original metadata"
            ]
          ]
        }
      ],
      "questions": [
        {
          "question": "In what order are multiple decorators executed in Python?",
          "answer": "Decorators are executed from the bottom up (closest to the function definition first)."
        },
        {
          "question": "What is the problem with losing function metadata when using decorators?",
          "answer": "Losing metadata like '__name__' can make debugging difficult and break tools that rely on function introspection."
        },
        {
          "question": "How do you pass arguments to a decorator itself?",
          "answer": "By creating another outer function level that accepts the arguments and returns the actual decorator function."
        }
      ]
    },
    {
      "id": "python-lambda",
      "title": "Python Lambda Functions",
      "category": "Basic",
      "definition": "A lambda function is a small anonymous function in Python. Anonymous means the function has no name. Lambda functions can take any number of arguments, but they can have only one expression.",
      "sections": [
        {
          "type": "text",
          "value": "Syntax:\nlambda arguments : expression"
        },
        {
          "type": "text",
          "value": "✅ Normal Function vs Lambda Function"
        },
        {
          "type": "code",
          "value": "# Normal Function\ndef add(a, b):\n    return a + b\n\nprint(add(10, 20))\n\n# Lambda Function\nadd_lambda = lambda a, b: a + b\n\nprint(add_lambda(10, 20))"
        },
        {
          "type": "output",
          "value": "30\n30"
        },
        {
          "type": "text",
          "value": "🔍 Explanation\nlambda a, b: a + b\n• lambda: Keyword\n• a, b: Arguments\n• a + b: Expression returned automatically"
        },
        {
          "type": "text",
          "value": "⭐ Lambda with One Argument"
        },
        {
          "type": "code",
          "value": "square = lambda x: x * x\nprint(square(5))"
        },
        {
          "type": "output",
          "value": "25"
        },
        {
          "type": "text",
          "value": "⭐ Lambda with Multiple Arguments"
        },
        {
          "type": "code",
          "value": "multiply = lambda a, b, c: a * b * c\nprint(multiply(2, 3, 4))"
        },
        {
          "type": "output",
          "value": "24"
        },
        {
          "type": "text",
          "value": "⭐ Immediately Calling Lambda Function"
        },
        {
          "type": "code",
          "value": "print((lambda a, b: a + b)(5, 10))"
        },
        {
          "type": "output",
          "value": "15"
        },
        {
          "type": "text",
          "value": "⭐ Why Use Lambda Functions?\nLambda functions are useful for short functions, one-time use, and passing functions as arguments."
        },
        {
          "type": "text",
          "value": "⭐ Using Lambda Inside Another Function"
        },
        {
          "type": "code",
          "value": "def myfunc(n):\n    return lambda a: a * n\n\ndouble = myfunc(2)\nprint(double(10))"
        },
        {
          "type": "output",
          "value": "20"
        },
        {
          "type": "text",
          "value": "🔍 Explanation\ndouble = myfunc(2) returns lambda a: a * 2.\n\nYou can use the same function definition to make both functions in the same program:"
        },
        {
          "type": "code",
          "value": "def myfunc(n):\n  return lambda a : a * n\n\nmydoubler = myfunc(2)\nmytripler = myfunc(3)\n\nprint(mydoubler(11))\nprint(mytripler(11))"
        },
        {
          "type": "output",
          "value": "22\n33"
        },
        {
          "type": "text",
          "value": "Use lambda functions when an anonymous function is required for a short period of time."
        },
        {
          "type": "text",
          "value": "⭐ Lambda with map()\nmap() applies a function to every item in an iterable."
        },
        {
          "type": "code",
          "value": "numbers = [1, 2, 3, 4]\nresult = list(map(lambda x: x * 2, numbers))\nprint(result)"
        },
        {
          "type": "output",
          "value": "[2, 4, 6, 8]"
        },
        {
          "type": "text",
          "value": "⭐ Lambda with filter()\nfilter() selects items based on a condition."
        },
        {
          "type": "code",
          "value": "numbers = [1, 2, 3, 4, 5, 6]\nresult = list(filter(lambda x: x % 2 == 0, numbers))\nprint(result)"
        },
        {
          "type": "output",
          "value": "[2, 4, 6]"
        },
        {
          "type": "text",
          "value": "⭐ Lambda with sorted()\nUsed for custom sorting."
        },
        {
          "type": "code",
          "value": "students = [\n    (\"John\", 25),\n    (\"Alice\", 20),\n    (\"Bob\", 22)\n]\n\nstudents.sort(key=lambda x: x[1])\nprint(students)"
        },
        {
          "type": "output",
          "value": "[('Alice', 20), ('Bob', 22), ('John', 25)]"
        },
        {
          "type": "text",
          "value": "⭐ Lambda with Conditional Expression"
        },
        {
          "type": "code",
          "value": "check = lambda x: \"Even\" if x % 2 == 0 else \"Odd\"\n\nprint(check(10))\nprint(check(7))"
        },
        {
          "type": "output",
          "value": "Even\nOdd"
        },
        {
          "type": "text",
          "value": "❌ Limitations of Lambda\nLambda functions can contain only one expression, cannot have multiple statements, and are not suitable for complex logic."
        },
        {
          "type": "text",
          "value": "❌ Invalid Lambda Example (Causes Error)"
        },
        {
          "type": "code",
          "value": "# lambda x:\n#     y = x + 1\n#     return y"
        },
        {
          "type": "text",
          "value": "✅ Use Normal Function for Complex Logic"
        },
        {
          "type": "code",
          "value": "def calculate(x):\n    y = x + 1\n    return y\n\nprint(calculate(5))"
        },
        {
          "type": "output",
          "value": "6"
        },
        {
          "type": "text",
          "value": "🔥 Difference Between def and lambda"
        },
        {
          "type": "table",
          "headers": [
            "Feature",
            "def Function",
            "lambda Function"
          ],
          "rows": [
            [
              "Name",
              "Has name",
              "Anonymous"
            ],
            [
              "Statements",
              "Multiple allowed",
              "Only one expression"
            ],
            [
              "Complexity",
              "Suitable for large logic",
              "Suitable for short logic"
            ],
            [
              "Return",
              "Uses return",
              "Returns automatically"
            ]
          ]
        },
        {
          "type": "text",
          "value": "📌 Real-Time Example"
        },
        {
          "type": "code",
          "value": "employees = [\n    {\"name\": \"Alice\", \"salary\": 50000},\n    {\"name\": \"Bob\", \"salary\": 30000},\n    {\"name\": \"John\", \"salary\": 40000}\n]\n\nemployees.sort(key=lambda emp: emp[\"salary\"])\n\nfor emp in employees:\n    print(emp)"
        },
        {
          "type": "output",
          "value": "{'name': 'Bob', 'salary': 30000}\n{'name': 'John', 'salary': 40000}\n{'name': 'Alice', 'salary': 50000}"
        },
        {
          "type": "text",
          "value": "🧠 Summary"
        },
        {
          "type": "table",
          "headers": [
            "Concept",
            "Description"
          ],
          "rows": [
            [
              "lambda",
              "Anonymous function"
            ],
            [
              "Syntax",
              "lambda arguments : expression"
            ],
            [
              "Returns",
              "Automatically"
            ],
            [
              "Best Use",
              "Short temporary functions"
            ]
          ]
        }
      ],
      "questions": [
        {
          "question": "What is an anonymous function in Python?",
          "answer": "An anonymous function is a function without a name, defined using the 'lambda' keyword rather than the standard 'def' keyword."
        },
        {
          "question": "What is the primary limitation of a lambda function?",
          "answer": "It can only contain a single expression and cannot include multiple statements or assignments."
        },
        {
          "question": "How do you immediately call a lambda function?",
          "answer": "By wrapping the entire lambda definition in parentheses and providing arguments in another set of parentheses, like: (lambda x: x+1)(5)."
        }
      ]
    },
    {
      "id": "python-lambda-sorting",
      "title": "Lambda for Custom Sorting",
      "category": "Basic",
      "definition": "One of the most common uses for lambda functions is as a key for sorting complex data structures like lists of tuples or dictionaries. This guide breaks down exactly how Python uses lambdas to determine sort order.",
      "sections": [
        {
          "type": "text",
          "value": "When you have a list of tuples, you might want to sort by a specific value (like age or name) instead of the whole tuple. The 'key' argument in the sort() method allows you to pass a lambda function to tell Python which index to use for sorting."
        },
        {
          "type": "code",
          "value": "students = [\n    (\"John\", 20),\n    (\"Alice\", 25),\n    (\"Bob\", 22)\n]\n\n# Sort by age (index 1)\nstudents.sort(key=lambda x: x[1])\nprint(students)"
        },
        {
          "type": "output",
          "value": "[('John', 20), ('Bob', 22), ('Alice', 25)]"
        },
        {
          "type": "text",
          "value": "🧠 Step-by-Step Explanation"
        },
        {
          "type": "text",
          "value": "1. Original List\nEach item is a tuple: (name, age)\n[('John', 20), ('Alice', 25), ('Bob', 22)]"
        },
        {
          "type": "text",
          "value": "2. Understanding lambda x: x[1]\n• x represents each tuple during iteration\n• x[1] means the second value (age)"
        },
        {
          "type": "text",
          "value": "3. Internal Iteration Trace\n• Tuple 1: x = (\"John\", 20) → x[1] = 20\n• Tuple 2: x = (\"Alice\", 25) → x[1] = 25\n• Tuple 3: x = (\"Bob\", 22) → x[1] = 22\n\nPython sorts using the values: 20, 25, 22. After sorting: 20, 22, 25."
        },
        {
          "type": "text",
          "value": "Easy Meaning: lambda x: x[1] means 👉 \"Take the second value from each tuple and sort using it.\""
        },
        {
          "type": "text",
          "value": "⭐ Sort by Name Instead\nUsing index 0 (the name) as the sorting key."
        },
        {
          "type": "code",
          "value": "students = [(\"John\", 20), (\"Alice\", 25), (\"Bob\", 22)]\nstudents.sort(key=lambda x: x[0])\nprint(students)"
        },
        {
          "type": "output",
          "value": "[('Alice', 25), ('Bob', 22), ('John', 20)]"
        },
        {
          "type": "text",
          "value": "⭐ Descending Order\nLargest age comes first by using the 'reverse=True' parameter."
        },
        {
          "type": "code",
          "value": "students = [(\"John\", 20), (\"Alice\", 25), (\"Bob\", 22)]\nstudents.sort(key=lambda x: x[1], reverse=True)\nprint(students)"
        },
        {
          "type": "output",
          "value": "[('Alice', 25), ('Bob', 22), ('John', 20)]"
        }
      ],
      "questions": [
        {
          "question": "How do you sort a list of tuples by the first element using a lambda?",
          "answer": "By using 'list.sort(key=lambda x: x[0])' or 'sorted(list, key=lambda x: x[0])'."
        },
        {
          "question": "What does the 'x' represent in 'lambda x: x[1]' when used in sorting?",
          "answer": "The 'x' represents each individual element (in this case, a tuple) within the list being sorted."
        },
        {
          "question": "Can you use a lambda to sort in descending order?",
          "answer": "Yes, by combining the lambda 'key' with the 'reverse=True' parameter in the sort() or sorted() function."
        }
      ]
    },
    {
      "id": "python-generators",
      "title": "Python Generators",
      "category": "Basic",
      "definition": "A generator is a special type of function that returns values one at a time using the yield keyword instead of return. They are highly memory-efficient for working with large datasets.",
      "sections": [
        {
          "type": "text",
          "value": "Generators are used to save memory and generate values lazily (one by one). This is especially useful for infinite sequences or large files."
        },
        {
          "type": "text",
          "value": "Normal Function vs Generator\nA normal function stops after a return statement, while a generator pauses at yield and can resume later."
        },
        {
          "type": "code",
          "value": "def mygenerator():\n    yield 1\n    yield 2\n    yield 3\n\nx = mygenerator()\nprint(next(x))\nprint(next(x))\nprint(next(x))"
        },
        {
          "type": "output",
          "value": "1\n2\n3"
        },
        {
          "type": "text",
          "value": "🔍 What is yield?\nYield pauses the function, saves the current state, and resumes from the same point when next() is called again."
        },
        {
          "type": "text",
          "value": "⭐ Using Generator with Loop\nGenerators are commonly used with for-loops, which automatically handle the next() calls and StopIteration."
        },
        {
          "type": "code",
          "value": "def mygenerator():\n    yield 10\n    yield 20\n    yield 30\n\nfor i in mygenerator():\n    print(i)"
        },
        {
          "type": "output",
          "value": "10\n20\n30"
        },
        {
          "type": "text",
          "value": "⭐ Generator vs List (Memory Advantage)\nLists store all values in memory at once, while generators produce values only when needed."
        },
        {
          "type": "code",
          "value": "# Using List (Memory intensive)\ndef mylist():\n    return [i for i in range(5)]\n\n# Using Generator (Memory efficient)\ndef mygenerator():\n    for i in range(5):\n        yield i\n\nprint(mylist())\nprint(list(mygenerator()))"
        },
        {
          "type": "output",
          "value": "[0, 1, 2, 3, 4]\n[0, 1, 2, 3, 4]"
        },
        {
          "type": "text",
          "value": "⭐ Generator Expression\nSimilar to list comprehension but uses parentheses. It returns a generator object instead of a full list."
        },
        {
          "type": "code",
          "value": "numbers = (x * x for x in range(5))\n\nfor i in numbers:\n    print(i)"
        },
        {
          "type": "output",
          "value": "0\n1\n4\n9\n16"
        },
        {
          "type": "text",
          "value": "⭐ Infinite Generator\nGenerators can represent infinite sequences without crashing the program (as long as you don't try to convert them to a list)."
        },
        {
          "type": "code",
          "value": "def infinite():\n    i = 1\n    while True:\n        yield i\n        i += 1\n\nx = infinite()\nprint(next(x))\nprint(next(x))\nprint(next(x))"
        },
        {
          "type": "output",
          "value": "1\n2\n3"
        },
        {
          "type": "text",
          "value": "🔥 Difference Between return and yield"
        },
        {
          "type": "table",
          "headers": [
            "Feature",
            "return",
            "yield"
          ],
          "rows": [
            [
              "Stops function",
              "Yes",
              "Pauses function"
            ],
            [
              "Returns",
              "One value",
              "Multiple values over time"
            ],
            [
              "Memory usage",
              "Higher",
              "Lower"
            ]
          ]
        },
        {
          "type": "text",
          "value": "🔥 Difference Between Normal Function and Generator"
        },
        {
          "type": "table",
          "headers": [
            "Feature",
            "Normal Function",
            "Generator"
          ],
          "rows": [
            [
              "Keyword",
              "return",
              "yield"
            ],
            [
              "Output",
              "Entire result",
              "One value at a time"
            ],
            [
              "Execution",
              "Runs fully",
              "Pauses and resumes"
            ]
          ]
        },
        {
          "type": "text",
          "value": "📌 Advantages of Generators:\n• Memory efficient\n• Faster for large data processing\n• Easy iteration via lazy evaluation\n• Supports large/infinite datasets"
        }
      ],
      "questions": [
        {
          "question": "What is the primary difference between a list and a generator?",
          "answer": "A list stores all its elements in memory at once, while a generator produces elements one by one on demand, saving memory."
        },
        {
          "question": "What does the 'yield' keyword do?",
          "answer": "It pauses the function and returns a value to the caller, while preserving the function's state (variables) so it can resume from where it left off."
        },
        {
          "question": "What happens when you call next() on an exhausted generator?",
          "answer": "It raises a 'StopIteration' exception, indicating that there are no more values to yield."
        }
      ]
    },
    {
      "id": "python-generators-tutorial",
      "title": "Python Generators (Advanced Concepts)",
      "category": "Basic",
      "definition": "Building upon basic generators, this module explores advanced features like the send() and close() methods, infinite sequence generation (Fibonacci), and memory-efficient aggregations using generator expressions.",
      "sections": [
        {
          "type": "text",
          "value": "Generators are special functions that can pause execution, save their state, and resume later. When a generator is called, it returns a generator object instead of executing immediately."
        },
        {
          "type": "text",
          "value": "⭐ Simple Generator Example\nUnlike normal functions, generators yield values one at a time and maintain their local variables between calls."
        },
        {
          "type": "code",
          "value": "def my_generator():\n    yield 1\n    yield 2\n    yield 3\n\nfor value in my_generator():\n    print(value)"
        },
        {
          "type": "output",
          "value": "1\n2\n3"
        },
        {
          "type": "text",
          "value": "🔍 Important Point\nCalling my_generator() does NOT run the function immediately; it creates a generator object. Execution starts only when iterating over it."
        },
        {
          "type": "text",
          "value": "⭐ Manual Control with next()\nYou can manually step through a generator using the next() function. Once all values are yielded, it raises a StopIteration exception."
        },
        {
          "type": "code",
          "value": "def simple_gen():\n    yield \"Emil\"\n    yield \"Tobias\"\n    yield \"Linus\"\n\ngen = simple_gen()\nprint(next(gen))\nprint(next(gen))\nprint(next(gen))"
        },
        {
          "type": "output",
          "value": "Emil\nTobias\nLinus"
        },
        {
          "type": "text",
          "value": "⭐ Fibonacci Generator\nGenerators are perfect for representing infinite sequences without consuming massive amounts of memory."
        },
        {
          "type": "code",
          "value": "def fibonacci():\n    a, b = 0, 1\n    while True:\n        yield a\n        a, b = b, a + b\n\ngen = fibonacci()\nfor _ in range(10):\n    print(next(gen))"
        },
        {
          "type": "output",
          "value": "0\n1\n1\n2\n3\n5\n8\n13\n21\n34"
        },
        {
          "type": "text",
          "value": "⭐ Generator Expressions with sum()\nYou can use generator expressions inside aggregation functions like sum() to process data without creating temporary lists."
        },
        {
          "type": "code",
          "value": "total = sum(x * x for x in range(10))\nprint(total)"
        },
        {
          "type": "output",
          "value": "285"
        },
        {
          "type": "text",
          "value": "⭐ Generator Methods: send() and close()\nGenerators can receive data from the caller using send() and can be manually terminated using close()."
        },
        {
          "type": "text",
          "value": "1. send() Method\nSends a value back into the generator. The generator must be 'primed' by calling next() first."
        },
        {
          "type": "code",
          "value": "def echo_generator():\n    while True:\n        received = yield\n        print(\"Received:\", received)\n\ngen = echo_generator()\nnext(gen) # Priming\ngen.send(\"Hello\")\ngen.send(\"World\")"
        },
        {
          "type": "output",
          "value": "Received: Hello\nReceived: World"
        },
        {
          "type": "text",
          "value": "2. close() Method\nStops the generator immediately. Any code in a 'finally' block will still execute."
        },
        {
          "type": "code",
          "value": "def my_gen():\n    try:\n        yield 1\n        yield 2\n    finally:\n        print(\"Generator closed\")\n\ngen = my_gen()\nprint(next(gen))\ngen.close()"
        },
        {
          "type": "output",
          "value": "1\nGenerator closed"
        },
        {
          "type": "text",
          "value": "🔥 Difference Between return and yield"
        },
        {
          "type": "table",
          "headers": [
            "Feature",
            "return",
            "yield"
          ],
          "rows": [
            [
              "Stops function",
              "Yes",
              "No (Pauses)"
            ],
            [
              "Returns values",
              "One time",
              "Multiple times"
            ],
            [
              "State saved",
              "No",
              "Yes"
            ]
          ]
        },
        {
          "type": "text",
          "value": "📌 Summary Table"
        },
        {
          "type": "table",
          "headers": [
            "Concept",
            "Description"
          ],
          "rows": [
            [
              "Generator",
              "Function using yield"
            ],
            [
              "yield",
              "Pauses function and saves state"
            ],
            [
              "send()",
              "Sends value into generator"
            ],
            [
              "close()",
              "Stops generator"
            ]
          ]
        }
      ],
      "questions": [
        {
          "question": "What does 'priming' a generator mean?",
          "answer": "It means calling next() on a generator for the first time to start its execution up to the first 'yield' statement, which is necessary before using send()."
        },
        {
          "question": "Can you send values into a generator? If so, how?",
          "answer": "Yes, using the 'send()' method. The value sent is received as the result of the 'yield' expression inside the generator function."
        },
        {
          "question": "What is the benefit of using a generator expression with sum()?",
          "answer": "It processes each number one by one and adds it to the total, avoiding the need to create and store a full list of squares in memory."
        }
      ]
    },
    {
      "id": "python-recursion",
      "title": "Python Recursion",
      "category": "Basic",
      "definition": "Recursion is a programming technique where a function calls itself to solve smaller instances of the same problem. Every recursive function must have a base case to terminate and avoid infinite loops.",
      "sections": [
        {
          "type": "text",
          "value": "A recursive function solves a problem by breaking it into smaller subproblems. It consists of two parts: a Base Case (to stop recursion) and a Recursive Call (where the function calls itself)."
        },
        {
          "type": "text",
          "value": "⚠️ Important Rule\nWithout a base case, recursion runs forever, leading to a 'RecursionError: maximum recursion depth exceeded'."
        },
        {
          "type": "text",
          "value": "⭐ Simple Recursion with Base Case\nIn this example, the function counts down from 'n' and stops when 'n' reaches 0."
        },
        {
          "type": "code",
          "value": "def count(n):\n    if n == 0:\n        return\n    print(n)\n    count(n - 1)\n\ncount(5)"
        },
        {
          "type": "output",
          "value": "5\n4\n3\n2\n1"
        },
        {
          "type": "text",
          "value": "⭐ Mathematical Recursion: Factorial\nFactorial formula: n! = n × (n-1)!"
        },
        {
          "type": "code",
          "value": "def factorial(n):\n    if n == 0 or n == 1:\n        return 1\n    return n * factorial(n - 1)\n\nprint(factorial(5))"
        },
        {
          "type": "output",
          "value": "120"
        },
        {
          "type": "text",
          "value": "🔍 Execution Trace for factorial(5):\n5 * factorial(4) → 5 * 4 * factorial(3) → 5 * 4 * 3 * factorial(2) → 5 * 4 * 3 * 2 * factorial(1) = 120"
        },
        {
          "type": "text",
          "value": "⭐ Fibonacci Sequence Using Recursion\nFormula: F(n) = F(n-1) + F(n-2)"
        },
        {
          "type": "code",
          "value": "def fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n - 1) + fibonacci(n - 2)\n\nfor i in range(10):\n    print(fibonacci(i), end=' ')"
        },
        {
          "type": "output",
          "value": "0 1 1 2 3 5 8 13 21 34"
        },
        {
          "type": "text",
          "value": "⭐ Reverse String Using Recursion"
        },
        {
          "type": "code",
          "value": "def reverse(text):\n    if len(text) == 0:\n        return text\n    return reverse(text[1:]) + text[0]\n\nprint(reverse(\"Python\"))"
        },
        {
          "type": "output",
          "value": "nohtyP"
        },
        {
          "type": "text",
          "value": "🔥 Recursion vs Loop"
        },
        {
          "type": "table",
          "headers": [
            "Feature",
            "Recursion",
            "Loop (Iterative)"
          ],
          "rows": [
            [
              "Code Style",
              "Cleaner, more expressive",
              "Uses counters and conditions"
            ],
            [
              "Memory",
              "Higher (uses stack space)",
              "Lower"
            ],
            [
              "Speed",
              "Often slower",
              "Usually faster"
            ],
            [
              "Best for",
              "Trees, graphs, math",
              "Simple iterations"
            ]
          ]
        },
        {
          "type": "text",
          "value": "⭐ Recursion Limit\nPython limits recursion depth to prevent stack overflows. You can check and modify this limit using the 'sys' module."
        },
        {
          "type": "code",
          "value": "import sys\nprint(\"Current limit:\", sys.getrecursionlimit())\n\n# To change limit:\n# sys.setrecursionlimit(2000)"
        },
        {
          "type": "output",
          "value": "Current limit: 1000"
        },
        {
          "type": "text",
          "value": "📌 Real-Time Example: Directory Traversal\nRecursively exploring folders and subfolders to find all files."
        },
        {
          "type": "code",
          "value": "import os\n\ndef show_files(path):\n    for item in os.listdir(path):\n        full_path = os.path.join(path, item)\n        if os.path.isdir(full_path):\n            show_files(full_path)\n        else:\n            print(full_path)"
        },
        {
          "type": "text",
          "value": "🧠 Summary Table"
        },
        {
          "type": "table",
          "headers": [
            "Concept",
            "Description"
          ],
          "rows": [
            [
              "Base Case",
              "The condition that stops the recursion"
            ],
            [
              "Recursive Call",
              "The line where the function calls itself"
            ],
            [
              "Call Stack",
              "The memory area where calls are stored"
            ],
            [
              "RecursionError",
              "Occurs when depth exceeds limit"
            ]
          ]
        }
      ],
      "questions": [
        {
          "question": "What are the two essential components of a recursive function?",
          "answer": "A base case (to terminate the recursion) and a recursive call (to perform the repeated logic on a smaller problem)."
        },
        {
          "question": "What is a 'RecursionError' in Python?",
          "answer": "It is an error that occurs when a recursive function reaches the maximum allowed depth, usually because a base case is missing or never reached."
        },
        {
          "question": "Which is more memory-efficient: Recursion or Loops?",
          "answer": "Loops (iterative approach) are generally more memory-efficient because they don't add new frames to the call stack for every iteration."
        }
      ]
    },
    {
      "id": "python-recursion-tutorial",
      "title": "Python Recursion (Tutorial)",
      "category": "Basic",
      "definition": "This module provides a step-by-step tutorial on recursion, focusing on list processing, base case logic, and practical mathematical sequences like Fibonacci and factorials.",
      "sections": [
        {
          "type": "text",
          "value": "Recursion is when a function calls itself to solve problems by breaking them into smaller subproblems. Every recursive function must contain a Base Case and a Recursive Case."
        },
        {
          "type": "text",
          "value": "Part vs Purpose Table"
        },
        {
          "type": "table",
          "headers": [
            "Part",
            "Purpose"
          ],
          "rows": [
            [
              "Base Case",
              "Stops the recursion"
            ],
            [
              "Recursive Case",
              "Calls the function again with a smaller problem"
            ]
          ]
        },
        {
          "type": "text",
          "value": "⭐ Simple Recursive Function: Countdown"
        },
        {
          "type": "code",
          "value": "def countdown(n):\n    if n <= 0:\n        print(\"Done!\")\n    else:\n        print(n)\n        countdown(n - 1)\n\ncountdown(5)"
        },
        {
          "type": "output",
          "value": "5\n4\n3\n2\n1\nDone!"
        },
        {
          "type": "text",
          "value": "⭐ Fibonacci Sequence Logic\nIn the sequence 0, 1, 1, 2, 3, 5, 8, 13..., each number is the sum of the previous two."
        },
        {
          "type": "code",
          "value": "def fibonacci(n):\n    if n <= 1:\n        return n\n    else:\n        return fibonacci(n - 1) + fibonacci(n - 2)\n\nprint(fibonacci(7))"
        },
        {
          "type": "output",
          "value": "13"
        },
        {
          "type": "text",
          "value": "⭐ Recursion with Lists\nRecursion can process lists element by element using slicing."
        },
        {
          "type": "text",
          "value": "1. Sum of List Elements"
        },
        {
          "type": "code",
          "value": "def sum_list(numbers):\n    if len(numbers) == 0:\n        return 0\n    else:\n        return numbers[0] + sum_list(numbers[1:])\n\nmy_list = [1, 2, 3, 4, 5]\nprint(sum_list(my_list))"
        },
        {
          "type": "output",
          "value": "15"
        },
        {
          "type": "text",
          "value": "2. Find Maximum Value in List"
        },
        {
          "type": "code",
          "value": "def find_max(numbers):\n    if len(numbers) == 1:\n        return numbers[0]\n    else:\n        max_of_rest = find_max(numbers[1:])\n        return numbers[0] if numbers[0] > max_of_rest else max_of_rest\n\nmy_list = [3, 7, 2, 9, 1]\nprint(find_max(my_list))"
        },
        {
          "type": "output",
          "value": "9"
        },
        {
          "type": "text",
          "value": "⭐ Handling the Recursion Limit\nPython prevents crashes by limiting depth. You can check or increase this if necessary."
        },
        {
          "type": "code",
          "value": "import sys\nprint(\"Limit:\", sys.getrecursionlimit())\n\nsys.setrecursionlimit(2000)\nprint(\"New Limit:\", sys.getrecursionlimit())"
        },
        {
          "type": "output",
          "value": "Limit: 1000\nNew Limit: 2000"
        },
        {
          "type": "text",
          "value": "🔥 Summary"
        },
        {
          "type": "table",
          "headers": [
            "Concept",
            "Description"
          ],
          "rows": [
            [
              "Recursion",
              "Function calling itself"
            ],
            [
              "Base Case",
              "Stops recursion"
            ],
            [
              "Recursive Case",
              "Function calls itself"
            ],
            [
              "Call Stack",
              "Stores recursive calls"
            ]
          ]
        }
      ],
      "questions": [
        {
          "question": "How does 'numbers[1:]' help in list recursion?",
          "answer": "It creates a new list excluding the first element, allowing the recursive call to process the 'rest' of the list until it becomes empty."
        },
        {
          "question": "What is the base case for summing a list recursively?",
          "answer": "The base case is when the list is empty (length 0), at which point the function returns 0 to stop further calls."
        },
        {
          "question": "Is it always safe to increase the recursion limit?",
          "answer": "No, increasing the limit too much can cause a program to crash with a stack overflow if the physical memory (stack space) is exhausted."
        }
      ]
    },
    {
      "id": "python-recursion-mastery",
      "title": "Python Recursive Code Examples",
      "category": "Basic",
      "definition": "This comprehensive reference guide provides 15 essential recursive programming examples in Python, covering mathematical logic, string manipulation, list processing, and number system conversions.",
      "sections": [
        {
          "type": "text",
          "value": "Recursion is a powerful tool for solving problems that can be divided into identical subproblems. Below are 15 common interview-focused recursive code snippets."
        },
        {
          "type": "text",
          "value": "1. Countdown Program\nCounts down from n to 1."
        },
        {
          "type": "code",
          "value": "def countdown(n):\n    if n <= 0:\n        print(\"Done\")\n    else:\n        print(n)\n        countdown(n - 1)\n\ncountdown(5)"
        },
        {
          "type": "output",
          "value": "5\n4\n3\n2\n1\nDone"
        },
        {
          "type": "text",
          "value": "2. Factorial Calculation\nCalculates n! = n * (n-1)!"
        },
        {
          "type": "code",
          "value": "def factorial(n):\n    if n == 0 or n == 1:\n        return 1\n    return n * factorial(n - 1)\n\nprint(factorial(5))"
        },
        {
          "type": "output",
          "value": "120"
        },
        {
          "type": "text",
          "value": "3. Fibonacci Series\nPrints the sequence up to n terms."
        },
        {
          "type": "code",
          "value": "def fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n - 1) + fibonacci(n - 2)\n\nfor i in range(10):\n    print(fibonacci(i), end=\" \")"
        },
        {
          "type": "output",
          "value": "0 1 1 2 3 5 8 13 21 34"
        },
        {
          "type": "text",
          "value": "4. Sum of Natural Numbers\nCalculates the sum of numbers from 1 to n."
        },
        {
          "type": "code",
          "value": "def total(n):\n    if n == 0:\n        return 0\n    return n + total(n - 1)\n\nprint(total(5))"
        },
        {
          "type": "output",
          "value": "15"
        },
        {
          "type": "text",
          "value": "5. Reverse a String"
        },
        {
          "type": "code",
          "value": "def reverse(text):\n    if len(text) == 0:\n        return text\n    return reverse(text[1:]) + text[0]\n\nprint(reverse(\"Python\"))"
        },
        {
          "type": "output",
          "value": "nohtyP"
        },
        {
          "type": "text",
          "value": "6. Power of a Number\nCalculates a to the power of n."
        },
        {
          "type": "code",
          "value": "def power(a, n):\n    if n == 0:\n        return 1\n    return a * power(a, n - 1)\n\nprint(power(2, 3))"
        },
        {
          "type": "output",
          "value": "8"
        },
        {
          "type": "text",
          "value": "7. Find Maximum in List"
        },
        {
          "type": "code",
          "value": "def find_max(numbers):\n    if len(numbers) == 1:\n        return numbers[0]\n    max_rest = find_max(numbers[1:])\n    return numbers[0] if numbers[0] > max_rest else max_rest\n\nmy_list = [3, 7, 2, 9, 1]\nprint(find_max(my_list))"
        },
        {
          "type": "output",
          "value": "9"
        },
        {
          "type": "text",
          "value": "8. Sum of List Elements"
        },
        {
          "type": "code",
          "value": "def sum_list(numbers):\n    if len(numbers) == 0:\n        return 0\n    return numbers[0] + sum_list(numbers[1:])\n\nmy_list = [1, 2, 3, 4, 5]\nprint(sum_list(my_list))"
        },
        {
          "type": "output",
          "value": "15"
        },
        {
          "type": "text",
          "value": "9. Palindrome Check"
        },
        {
          "type": "code",
          "value": "def palindrome(text):\n    if len(text) <= 1:\n        return True\n    if text[0] != text[-1]:\n        return False\n    return palindrome(text[1:-1])\n\nprint(palindrome(\"madam\"))\nprint(palindrome(\"python\"))"
        },
        {
          "type": "output",
          "value": "True\nFalse"
        },
        {
          "type": "text",
          "value": "10. Decimal to Binary Conversion"
        },
        {
          "type": "code",
          "value": "def binary(n):\n    if n == 0:\n        return \"\"\n    return binary(n // 2) + str(n % 2)\n\nprint(binary(10))"
        },
        {
          "type": "output",
          "value": "1010"
        },
        {
          "type": "text",
          "value": "11. GCD (Greatest Common Divisor)\nEuclidean algorithm: GCD(a,b) = GCD(b, a % b)"
        },
        {
          "type": "code",
          "value": "def gcd(a, b):\n    if b == 0:\n        return a\n    return gcd(b, a % b)\n\nprint(gcd(12, 18))"
        },
        {
          "type": "output",
          "value": "6"
        },
        {
          "type": "text",
          "value": "12. Multiplication Using Recursion"
        },
        {
          "type": "code",
          "value": "def multiply(a, b):\n    if b == 0:\n        return 0\n    return a + multiply(a, b - 1)\n\nprint(multiply(5, 3))"
        },
        {
          "type": "output",
          "value": "15"
        },
        {
          "type": "text",
          "value": "13. Count Digits in a Number"
        },
        {
          "type": "code",
          "value": "def count_digits(n):\n    if n == 0:\n        return 0\n    return 1 + count_digits(n // 10)\n\nprint(count_digits(12345))"
        },
        {
          "type": "output",
          "value": "5"
        },
        {
          "type": "text",
          "value": "14. Sum of Digits"
        },
        {
          "type": "code",
          "value": "def sum_digits(n):\n    if n == 0:\n        return 0\n    return n % 10 + sum_digits(n // 10)\n\nprint(sum_digits(1234))"
        },
        {
          "type": "output",
          "value": "10"
        },
        {
          "type": "text",
          "value": "15. Print Numbers 1 to N (Head Recursion)\nBy calling recursion before printing, numbers are displayed in ascending order."
        },
        {
          "type": "code",
          "value": "def print_numbers(n):\n    if n == 0:\n        return\n    print_numbers(n - 1)\n    print(n)\n\nprint_numbers(5)"
        },
        {
          "type": "output",
          "value": "1\n2\n3\n4\n5"
        },
        {
          "type": "text",
          "value": "🧠 Structural Reminder\nEvery recursive function requires a Base Case to stop and a Recursive Call that moves toward the base case."
        }
      ],
      "questions": [
        {
          "question": "What is the Euclidean algorithm in recursion?",
          "answer": "It is an efficient method for computing the GCD of two numbers by repeatedly replacing the larger number with its remainder when divided by the smaller number until the remainder is zero."
        },
        {
          "question": "Explain the difference between Head and Tail recursion in the examples above.",
          "answer": "In 'Countdown' (Tail), the recursive call is the last action. In 'Print 1 to N' (Head), the recursive call happens before the print statement, causing numbers to be processed in reverse order on the return path."
        },
        {
          "question": "Why is the base case for 'Palindrome' check 'len(text) <= 1'?",
          "answer": "Because a string with one character or an empty string is by definition a palindrome, and it represents the smallest possible subproblem."
        }
      ]
    },
    {
      "id": "python-range",
      "title": "Python range()",
      "category": "Basic",
      "definition": "In Python, range() is a built-in function used to generate a sequence of numbers. It’s commonly used in loops like for.",
      "sections": [
        {
          "type": "text",
          "value": "Basic Syntax:\nrange(start, stop, step)"
        },
        {
          "type": "text",
          "value": "🔍 How it works\n• start (optional): The number to begin from. (default = 0)\n• stop (required): The number to stop before. (Note: This number is NOT included in the result)\n• step (optional): The difference between each number. (default = 1)"
        },
        {
          "type": "text",
          "value": "⭐ Example 1: Simple range\nIf only one number is provided, it is treated as the 'stop' value."
        },
        {
          "type": "code",
          "value": "for i in range(5):\n    print(i, end=\" \")"
        },
        {
          "type": "output",
          "value": "0 1 2 3 4"
        },
        {
          "type": "text",
          "value": "⭐ Example 2: With start and stop\nSpecifying both where to begin and where to end."
        },
        {
          "type": "code",
          "value": "for i in range(2, 6):\n    print(i, end=\" \")"
        },
        {
          "type": "output",
          "value": "2 3 4 5"
        },
        {
          "type": "text",
          "value": "⭐ Example 3: With step\nUsing the third parameter to skip numbers."
        },
        {
          "type": "code",
          "value": "for i in range(1, 10, 2):\n    print(i, end=\" \")"
        },
        {
          "type": "output",
          "value": "1 3 5 7 9"
        },
        {
          "type": "text",
          "value": "⭐ Example 4: Reverse range\nUsing a negative step value to count backwards."
        },
        {
          "type": "code",
          "value": "for i in range(10, 0, -1):\n    print(i, end=\" \")"
        },
        {
          "type": "output",
          "value": "10 9 8 7 6 5 4 3 2 1"
        },
        {
          "type": "text",
          "value": "🔥 Key Points to Remember"
        },
        {
          "type": "table",
          "headers": [
            "Feature",
            "Detail"
          ],
          "rows": [
            [
              "Exclusion",
              "The 'stop' value is always excluded."
            ],
            [
              "Efficiency",
              "It is a lazy iterator—it doesn't store all numbers in memory."
            ],
            [
              "List Conversion",
              "Can be converted to a list using list(range(5))."
            ],
            [
              "Default Start",
              "If start is omitted, it defaults to 0."
            ]
          ]
        },
        {
          "type": "text",
          "value": "🎯 Quick Tip: Memory Efficiency\nrange() doesn't actually produce a list of numbers. It is a range object that produces numbers on demand, making it extremely efficient even for very large ranges like range(1000000)."
        }
      ],
      "questions": [
        {
          "question": "Is the 'stop' value included in a range() function result?",
          "answer": "No, the range() function stops exactly one step before the 'stop' value."
        },
        {
          "question": "What happens if the step value is negative?",
          "answer": "The range() function counts downwards, provided that the 'start' value is greater than the 'stop' value."
        },
        {
          "question": "How can you convert a range object into a physical list of numbers?",
          "answer": "By using the list() constructor, for example: list(range(5))."
        }
      ]
    },
    {
      "id": "python-range-advanced",
      "title": "Python range() - Part 2",
      "category": "Basic",
      "definition": "In Python, the built-in range() function returns an immutable sequence of numbers and is mainly used in loops.",
      "sections": [
        {
          "type": "text",
          "value": "• Immutable means the values cannot be changed after creation.\n• range() creates a special data type called range."
        },
        {
          "type": "text",
          "value": "Syntax:\nrange(start, stop, step)"
        },
        {
          "type": "table",
          "headers": [
            "Parameter",
            "Meaning"
          ],
          "rows": [
            [
              "start",
              "Starting value (default = 0)"
            ],
            [
              "stop",
              "Ending value (excluded)"
            ],
            [
              "step",
              "Difference between numbers (default = 1)"
            ]
          ]
        },
        {
          "type": "text",
          "value": "1. range() with One Argument\nWhen only one argument is given, it becomes the stop value."
        },
        {
          "type": "code",
          "value": "x = range(10)\n\nprint(list(x))"
        },
        {
          "type": "output",
          "value": "[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]"
        },
        {
          "type": "text",
          "value": "🔍 Explanation\nStart defaults to 0\nStop is 10 (excluded)\n\nSo range(10) means range(0, 10, 1)."
        },
        {
          "type": "text",
          "value": "2. range() with Two Arguments\nFirst argument = start\nSecond argument = stop"
        },
        {
          "type": "code",
          "value": "x = range(3, 10)\n\nprint(list(x))"
        },
        {
          "type": "output",
          "value": "[3, 4, 5, 6, 7, 8, 9]"
        },
        {
          "type": "text",
          "value": "🔍 Explanation\nStarts from 3\nStops before 10"
        },
        {
          "type": "text",
          "value": "3. range() with Three Arguments\nThird argument is the step value."
        },
        {
          "type": "code",
          "value": "x = range(3, 10, 2)\n\nprint(list(x))"
        },
        {
          "type": "output",
          "value": "[3, 5, 7, 9]"
        },
        {
          "type": "text",
          "value": "🔍 Explanation\nThe numbers increase by 2."
        },
        {
          "type": "text",
          "value": "⭐ Using range() in Loops"
        },
        {
          "type": "code",
          "value": "for i in range(5):\n    print(i)"
        },
        {
          "type": "output",
          "value": "0\n1\n2\n3\n4"
        },
        {
          "type": "text",
          "value": "⭐ Reverse Range\nUsing a negative step:"
        },
        {
          "type": "code",
          "value": "for i in range(10, 0, -1):\n    print(i)"
        },
        {
          "type": "output",
          "value": "10\n9\n8\n7\n6\n5\n4\n3\n2\n1"
        },
        {
          "type": "text",
          "value": "⭐ Convert Range to List\nA range object is not directly displayed clearly, so we often convert it to a list."
        },
        {
          "type": "code",
          "value": "print(list(range(5)))\nprint(list(range(1, 6)))\nprint(list(range(5, 20, 3)))"
        },
        {
          "type": "output",
          "value": "[0, 1, 2, 3, 4]\n[1, 2, 3, 4, 5]\n[5, 8, 11, 14, 17]"
        },
        {
          "type": "text",
          "value": "🔥 Accessing Elements in a Range"
        },
        {
          "type": "code",
          "value": "r = range(10)\n\nprint(r[2])"
        },
        {
          "type": "output",
          "value": "2"
        },
        {
          "type": "text",
          "value": "🔥 Slicing Ranges"
        },
        {
          "type": "code",
          "value": "r = range(10)\n\nprint(r[:5])\nprint(list(r[:5]))"
        },
        {
          "type": "output",
          "value": "range(0, 5)\n[0, 1, 2, 3, 4]"
        },
        {
          "type": "text",
          "value": "🔥 Membership Testing (in Operator)"
        },
        {
          "type": "code",
          "value": "r = range(0, 10, 2)\n\nprint(6 in r)\nprint(7 in r)"
        },
        {
          "type": "output",
          "value": "True\nFalse"
        },
        {
          "type": "text",
          "value": "🔍 Explanation\nRange contains: 0, 2, 4, 6, 8. So 6 is present (True) and 7 is absent (False)."
        },
        {
          "type": "text",
          "value": "🔥 Length of a Range"
        },
        {
          "type": "code",
          "value": "r = range(0, 10, 2)\n\nprint(len(r))"
        },
        {
          "type": "output",
          "value": "5"
        },
        {
          "type": "text",
          "value": "🔍 Explanation\nElements are: 0, 2, 4, 6, 8. Total = 5."
        },
        {
          "type": "text",
          "value": "📌 Important Points\n✅ start is inclusive\n✅ stop is exclusive\n✅ Default start = 0\n✅ Default step = 1\n✅ Supports indexing and slicing\n✅ Immutable sequence"
        },
        {
          "type": "text",
          "value": "❌ Common Mistake"
        },
        {
          "type": "code",
          "value": "print(list(range(1, 5)))"
        },
        {
          "type": "output",
          "value": "[1, 2, 3, 4]"
        },
        {
          "type": "text",
          "value": "⚠️ Many beginners expect 5 also, but the stop value is not included."
        },
        {
          "type": "text",
          "value": "🚀 Quick Summary Table"
        },
        {
          "type": "table",
          "headers": [
            "Code",
            "Output Sequence"
          ],
          "rows": [
            [
              "range(5)",
              "0 1 2 3 4"
            ],
            [
              "range(1, 5)",
              "1 2 3 4"
            ],
            [
              "range(1, 10, 2)",
              "1 3 5 7 9"
            ],
            [
              "range(10, 0, -1)",
              "10 9 8 7 6 5 4 3 2 1"
            ]
          ]
        }
      ],
      "questions": [
        {
          "question": "What does it mean that a range object is immutable?",
          "answer": "It means the numbers within the sequence cannot be modified after the range object is created."
        },
        {
          "question": "How do you check if a specific number exists in a range without using a loop?",
          "answer": "You can use the 'in' operator for membership testing, e.g., '6 in range(0, 10, 2)'."
        },
        {
          "question": "Can you access a specific element in a range using an index?",
          "answer": "Yes, range objects support indexing just like lists and tuples, e.g., r[2] will return the third element."
        }
      ]
    },
    {
      "id": "python-arrays",
      "title": "Python Arrays",
      "category": "Basic",
      "definition": "In Python, arrays are used to store multiple values in a single variable. While Python doesn't have a built-in 'array' type like C or Java, it uses lists as flexible arrays.",
      "sections": [
        {
          "type": "text",
          "value": "Python provides three primary ways to work with arrays:\n1. Python Lists (Most Common)\n2. The array Module (Typed Arrays)\n3. NumPy Arrays (Scientific Computing)"
        },
        {
          "type": "text",
          "value": "1. Python Lists (Most Common \"Array\")\nA list is the standard, most flexible way to create an array in Python."
        },
        {
          "type": "code",
          "value": "numbers = [1, 2, 3, 4, 5]\nprint(numbers[0])"
        },
        {
          "type": "output",
          "value": "1"
        },
        {
          "type": "text",
          "value": "⭐ Features of Lists:\n• Can store different data types (mixed types)\n• Dynamic size (can grow or shrink)\n• Supports indexing and slicing"
        },
        {
          "type": "code",
          "value": "numbers.append(6)     # Add element\nnumbers.remove(2)     # Remove element\nprint(numbers[1:4])   # Slice"
        },
        {
          "type": "output",
          "value": "[3, 4, 5]"
        },
        {
          "type": "text",
          "value": "2. Using the array Module (Typed Arrays)\nFor more memory-efficient arrays where all elements are of the same type."
        },
        {
          "type": "code",
          "value": "import array\n\narr = array.array('i', [1, 2, 3, 4])\nprint(arr[2])"
        },
        {
          "type": "output",
          "value": "3"
        },
        {
          "type": "table",
          "headers": [
            "Type Code",
            "Meaning"
          ],
          "rows": [
            [
              "'i'",
              "Signed Integer"
            ],
            [
              "'f'",
              "Floating point"
            ],
            [
              "'d'",
              "Double precision float"
            ]
          ]
        },
        {
          "type": "text",
          "value": "👉 Unlike lists, all elements in an array.array must be the same type."
        },
        {
          "type": "text",
          "value": "3. NumPy Arrays (Advanced & Powerful)\nFor scientific computing and large-scale mathematical operations."
        },
        {
          "type": "code",
          "value": "import numpy as np\n\narr = np.array([1, 2, 3, 4])\nprint(arr * 2)"
        },
        {
          "type": "output",
          "value": "[2 4 6 8]"
        },
        {
          "type": "text",
          "value": "⭐ Why NumPy?\n• Significantly faster than lists for math\n• Supports vectorization (no loops needed)\n• Standard for Data Science and AI"
        },
        {
          "type": "text",
          "value": "4. Multi-Dimensional Arrays\nLists can act as 2D arrays (matrices) using nested structures."
        },
        {
          "type": "code",
          "value": "matrix = [\n    [1, 2, 3],\n    [4, 5, 6]\n]\n\nprint(matrix[1][2])"
        },
        {
          "type": "output",
          "value": "6"
        },
        {
          "type": "text",
          "value": "🔥 Quick Comparison Table"
        },
        {
          "type": "table",
          "headers": [
            "Feature",
            "List",
            "array module",
            "NumPy"
          ],
          "rows": [
            [
              "Flexible Type",
              "✅ Yes",
              "❌ No",
              "❌ No"
            ],
            [
              "Math Speed",
              "❌ Slow",
              "✅ Fast",
              "🚀 Very Fast"
            ],
            [
              "Multi-Dim",
              "✅ Nested",
              "❌ 1D Only",
              "✅ Optimized"
            ],
            [
              "Use Case",
              "General Use",
              "Memory Efficiency",
              "Data Science"
            ]
          ]
        },
        {
          "type": "text",
          "value": "✔️ Simple Rule:\n• Use lists for most general tasks.\n• Use NumPy for heavy mathematical or data science work."
        }
      ],
      "questions": [
        {
          "question": "Does Python have a built-in 'array' data type like C++?",
          "answer": "Not as a primitive type. Python primarily uses 'lists' as flexible arrays, but provides the 'array' module for typed, memory-efficient arrays."
        },
        {
          "question": "What is the main limitation of the 'array' module compared to a list?",
          "answer": "All elements in an 'array.array' object must be of the same data type, whereas a list can store mixed data types."
        },
        {
          "question": "Why is NumPy preferred for data science over standard Python lists?",
          "answer": "NumPy arrays are much faster for mathematical operations because they use contiguous memory and support vectorized operations that avoid Python loop overhead."
        }
      ]
    },
    {
      "id": "python-arrays-part2",
      "title": "Python Arrays - Part 2",
      "category": "Basic",
      "definition": "Python uses lists as flexible arrays. This module covers core operations, built-in methods, and practical programs for working with array-like structures in Python.",
      "sections": [
        {
          "type": "text",
          "value": "⚠️ Note: Python does not have a built-in array data type like C or Java. Instead, lists are commonly used as arrays."
        },
        {
          "type": "text",
          "value": "🎯 What is an Array?\nAn array is a variable that can store multiple values in a single variable."
        },
        {
          "type": "code",
          "value": "cars = [\"Ford\", \"Volvo\", \"BMW\"]\nprint(cars)"
        },
        {
          "type": "output",
          "value": "['Ford', 'Volvo', 'BMW']"
        },
        {
          "type": "text",
          "value": "⭐ Why Use Arrays (Lists)?\nArrays help when storing many values, looping through items, searching data, and sorting data."
        },
        {
          "type": "code",
          "value": "cars = [\"Ford\", \"Volvo\", \"BMW\"]\n\nfor car in cars:\n    print(car)"
        },
        {
          "type": "output",
          "value": "Ford\nVolvo\nBMW"
        },
        {
          "type": "text",
          "value": "🔥 Access Array Elements\nUse the index number (starting from 0) to access specific items."
        },
        {
          "type": "code",
          "value": "cars = [\"Ford\", \"Volvo\", \"BMW\"]\nprint(cars[0])"
        },
        {
          "type": "output",
          "value": "Ford"
        },
        {
          "type": "table",
          "headers": [
            "Value",
            "Index"
          ],
          "rows": [
            [
              "Ford",
              "0"
            ],
            [
              "Volvo",
              "1"
            ],
            [
              "BMW",
              "2"
            ]
          ]
        },
        {
          "type": "text",
          "value": "⭐ Change Array Elements\nYou can modify an element by referring to its index."
        },
        {
          "type": "code",
          "value": "cars = [\"Ford\", \"Volvo\", \"BMW\"]\ncars[0] = \"Toyota\"\nprint(cars)"
        },
        {
          "type": "output",
          "value": "['Toyota', 'Volvo', 'BMW']"
        },
        {
          "type": "text",
          "value": "📏 Array Length\nUse the len() function to find the number of elements."
        },
        {
          "type": "code",
          "value": "cars = [\"Ford\", \"Volvo\", \"BMW\"]\nprint(len(cars))"
        },
        {
          "type": "output",
          "value": "3"
        },
        {
          "type": "text",
          "value": "👉 Note: Length is always 1 more than the highest index."
        },
        {
          "type": "text",
          "value": "➕ Add & Insert Elements"
        },
        {
          "type": "code",
          "value": "cars = [\"Ford\", \"Volvo\", \"BMW\"]\n\ncars.append(\"Honda\")     # Add to end\ncars.insert(1, \"Toyota\") # Insert at index 1\n\nprint(cars)"
        },
        {
          "type": "output",
          "value": "['Ford', 'Toyota', 'Volvo', 'BMW', 'Honda']"
        },
        {
          "type": "text",
          "value": "➖ Remove Elements\nUse pop() for index-based removal and remove() for value-based removal."
        },
        {
          "type": "code",
          "value": "cars = [\"Ford\", \"Volvo\", \"BMW\"]\n\ncars.pop(1)      # Removes index 1 (Volvo)\ncars.remove(\"Ford\") # Removes value \"Ford\"\n\nprint(cars)"
        },
        {
          "type": "output",
          "value": "['BMW']"
        },
        {
          "type": "text",
          "value": "🔥 Array (List) Methods Summary"
        },
        {
          "type": "table",
          "headers": [
            "Method",
            "Description"
          ],
          "rows": [
            [
              "append()",
              "Adds element at end"
            ],
            [
              "clear()",
              "Removes all elements"
            ],
            [
              "copy()",
              "Returns copy of list"
            ],
            [
              "count()",
              "Counts occurrences"
            ],
            [
              "extend()",
              "Adds another list"
            ],
            [
              "index()",
              "Returns index of value"
            ],
            [
              "insert()",
              "Adds at specific position"
            ],
            [
              "pop()",
              "Removes by index"
            ],
            [
              "remove()",
              "Removes by value"
            ],
            [
              "reverse()",
              "Reverses list"
            ],
            [
              "sort()",
              "Sorts list"
            ]
          ]
        },
        {
          "type": "text",
          "value": "⭐ Example Using Multiple Methods"
        },
        {
          "type": "code",
          "value": "numbers = [4, 2, 8, 1]\n\nnumbers.append(10)\nnumbers.sort()\nnumbers.reverse()\n\nprint(numbers)"
        },
        {
          "type": "output",
          "value": "[10, 8, 4, 2, 1]"
        },
        {
          "type": "text",
          "value": "🔍 Real Array Module in Python\nPython provides a specialized array module for typed data."
        },
        {
          "type": "code",
          "value": "import array\narr = array.array('i', [1, 2, 3, 4])\nprint(arr)"
        },
        {
          "type": "output",
          "value": "array('i', [1, 2, 3, 4])"
        },
        {
          "type": "table",
          "headers": [
            "Feature",
            "List",
            "Array Module"
          ],
          "rows": [
            [
              "Built-in",
              "✅ Yes",
              "❌ No (Import needed)"
            ],
            [
              "Mixed Types",
              "✅ Allowed",
              "❌ Not Allowed"
            ],
            [
              "Numeric Speed",
              "❌ Slow",
              "✅ Fast"
            ]
          ]
        },
        {
          "type": "text",
          "value": "💻 Practice Programs"
        },
        {
          "type": "text",
          "value": "1. Sum of Array Elements"
        },
        {
          "type": "code",
          "value": "numbers = [10, 20, 30, 40]\ntotal = 0\nfor x in numbers:\n    total += x\nprint(\"Sum =\", total)"
        },
        {
          "type": "output",
          "value": "Sum = 100"
        },
        {
          "type": "text",
          "value": "2. Find Largest Element"
        },
        {
          "type": "code",
          "value": "numbers = [12, 45, 7, 89, 23]\nlargest = numbers[0]\nfor x in numbers:\n    if x > largest:\n        largest = x\nprint(\"Largest =\", largest)"
        },
        {
          "type": "output",
          "value": "Largest = 89"
        },
        {
          "type": "text",
          "value": "3. Search Element"
        },
        {
          "type": "code",
          "value": "numbers = [1, 2, 3, 4, 5]\nsearch = 4\nif search in numbers:\n    print(\"Found\")\nelse:\n    print(\"Not Found\")"
        },
        {
          "type": "output",
          "value": "Found"
        }
      ],
      "questions": [
        {
          "question": "What is the difference between pop() and remove()?",
          "answer": "pop() removes an element at a specific index, while remove() deletes the first occurrence of a specific value from the list."
        },
        {
          "question": "How do you add an element to a specific position in an array?",
          "answer": "Using the insert() method, which takes the index and the value as arguments, e.g., cars.insert(1, 'Toyota')."
        },
        {
          "question": "Why would you use the 'array' module instead of a list?",
          "answer": "When working with large amounts of numeric data of the same type, as it is more memory-efficient and faster than standard lists."
        }
      ]
    },
    {
      "id": "python-iterators",
      "title": "Python Iterators",
      "category": "Basic",
      "definition": "Iterators are objects that allow you to traverse through a sequence of elements one at a time, without needing to store the entire sequence in memory at once.",
      "sections": [
        {
          "type": "text",
          "value": "🔁 What is an Iterator?\nAn iterator is any object that implements two special methods:\n• __iter__() → returns the iterator object itself\n• __next__() → returns the next value, and raises StopIteration when done"
        },
        {
          "type": "text",
          "value": "🧠 Basic Example of Manual Iteration"
        },
        {
          "type": "code",
          "value": "my_list = [1, 2, 3]\n\n# Get iterator\nit = iter(my_list)\n\n# Iterate manually\nprint(next(it))\nprint(next(it))\nprint(next(it))"
        },
        {
          "type": "output",
          "value": "1\n2\n3"
        },
        {
          "type": "text",
          "value": "👉 Note: Calling next(it) again will raise a StopIteration exception."
        },
        {
          "type": "text",
          "value": "🔄 Using Iterators in Loops\nA for loop automatically handles iterator creation and next() calls behind the scenes."
        },
        {
          "type": "code",
          "value": "# This loop:\nfor item in [1, 2, 3]:\n    print(item)\n\n# Is equivalent to this logic:\nit = iter([1, 2, 3])\nwhile True:\n    try:\n        item = next(it)\n        print(item)\n    except StopIteration:\n        break"
        },
        {
          "type": "output",
          "value": "1\n2\n3"
        },
        {
          "type": "text",
          "value": "🏗️ Creating Your Own Iterator\nYou can define a custom iterator by implementing __iter__ and __next__ in a class."
        },
        {
          "type": "code",
          "value": "class CountUp:\n    def __init__(self, max):\n        self.max = max\n        self.current = 0\n\n    def __iter__(self):\n        return self\n\n    def __next__(self):\n        if self.current < self.max:\n            self.current += 1\n            return self.current\n        else:\n            raise StopIteration\n\ncounter = CountUp(3)\nfor num in counter:\n    print(num)"
        },
        {
          "type": "output",
          "value": "1\n2\n3"
        },
        {
          "type": "text",
          "value": "⚡ Iterators vs Iterables"
        },
        {
          "type": "table",
          "headers": [
            "Term",
            "Definition",
            "Example"
          ],
          "rows": [
            [
              "Iterable",
              "Any object you can loop over",
              "[1, 2, 3] (List)"
            ],
            [
              "Iterator",
              "The object that performs iteration",
              "iter([1, 2, 3])"
            ]
          ]
        },
        {
          "type": "text",
          "value": "🚀 Generators (Shortcut for Iterators)\nGenerators are a simpler way to create iterators using the yield keyword."
        },
        {
          "type": "code",
          "value": "def count_up(max):\n    for i in range(1, max + 1):\n        yield i\n\nfor num in count_up(3):\n    print(num)"
        },
        {
          "type": "output",
          "value": "1\n2\n3"
        },
        {
          "type": "text",
          "value": "✅ Key Advantages of Iterators:\n• Memory efficient (lazy evaluation)\n• Clean iteration logic\n• Perfect for large or infinite sequences"
        }
      ],
      "questions": [
        {
          "question": "What two methods must an object implement to be considered an iterator?",
          "answer": "An object must implement the '__iter__()' method and the '__next__()' method."
        },
        {
          "question": "What exception is raised when an iterator has no more items to return?",
          "answer": "The 'StopIteration' exception is raised."
        },
        {
          "question": "How does a generator differ from a custom iterator class?",
          "answer": "A generator is a more concise way to create an iterator using the 'yield' keyword, which automatically handles the state and implementation of '__iter__()' and '__next__()'."
        }
      ]
    },
    {
      "id": "python-iterators-part2",
      "title": "Python Iterators - Part 2",
      "category": "Basic",
      "definition": "Deep dive into the iterator protocol, distinguishing between iterables and iterators, and exploring custom implementation with terminating conditions.",
      "sections": [
        {
          "type": "text",
          "value": "🔹 Iterator vs Iterable\n• Iterable: Any object you can loop through using a for loop (List, Tuple, String, Dictionary, Set).\n• Iterator: The object that actually performs the iteration."
        },
        {
          "type": "code",
          "value": "mylist = [1, 2, 3]\nmyit = iter(mylist)\n\nprint(next(myit))\nprint(next(myit))\nprint(next(myit))"
        },
        {
          "type": "output",
          "value": "1\n2\n3"
        },
        {
          "type": "table",
          "headers": [
            "Function",
            "Purpose"
          ],
          "rows": [
            [
              "iter()",
              "Converts iterable into iterator"
            ],
            [
              "next()",
              "Gets next value from iterator"
            ]
          ]
        },
        {
          "type": "text",
          "value": "🔹 Tuple & String Iterator Examples\nEven strings and tuples are iterable objects."
        },
        {
          "type": "code",
          "value": "mytuple = (\"apple\", \"banana\", \"cherry\")\nmyit = iter(mytuple)\nprint(next(myit))\n\nmystr = \"banana\"\nmyit_str = iter(mystr)\nprint(next(myit_str))"
        },
        {
          "type": "output",
          "value": "apple\nb"
        },
        {
          "type": "text",
          "value": "🔹 Looping Through an Iterator\nA for loop automatically uses an iterator internally."
        },
        {
          "type": "code",
          "value": "mytuple = (\"apple\", \"banana\", \"cherry\")\nfor x in mytuple:\n    print(x)"
        },
        {
          "type": "output",
          "value": "apple\nbanana\ncherry"
        },
        {
          "type": "text",
          "value": "🔹 Create Your Own Iterator\nTo create a custom iterator class, you must implement __iter__() and __next__()."
        },
        {
          "type": "code",
          "value": "class MyNumbers:\n    def __iter__(self):\n        self.a = 1\n        return self\n\n    def __next__(self):\n        x = self.a\n        self.a += 1\n        return x\n\nmyclass = MyNumbers()\nmyiter = iter(myclass)\n\nprint(next(myiter))\nprint(next(myiter))\nprint(next(myiter))"
        },
        {
          "type": "output",
          "value": "1\n2\n3"
        },
        {
          "type": "text",
          "value": "⚠️ Note: The example above is an infinite iterator because it lacks a terminating condition."
        },
        {
          "type": "text",
          "value": "🔹 StopIteration\nTo stop iteration after a certain point, you must raise StopIteration."
        },
        {
          "type": "code",
          "value": "class MyNumbers:\n    def __iter__(self):\n        self.a = 1\n        return self\n\n    def __next__(self):\n        if self.a <= 3:\n            x = self.a\n            self.a += 1\n            return x\n        else:\n            raise StopIteration\n\nmyclass = MyNumbers()\nfor x in myclass:\n    print(x)"
        },
        {
          "type": "output",
          "value": "1\n2\n3"
        },
        {
          "type": "text",
          "value": "🔹 Important Concepts Summary"
        },
        {
          "type": "table",
          "headers": [
            "Concept",
            "Meaning"
          ],
          "rows": [
            [
              "Iterable",
              "Object you can loop through"
            ],
            [
              "Iterator",
              "Object producing next values"
            ],
            [
              "iter()",
              "Creates iterator"
            ],
            [
              "next()",
              "Gets next item"
            ],
            [
              "StopIteration",
              "Stops iteration"
            ]
          ]
        },
        {
          "type": "text",
          "value": "📺 Real-Life Analogy: The TV Remote\n• TV Channels List → Iterable\n• Remote Button → Iterator\n• Pressing 'Next Channel' → next()"
        },
        {
          "type": "text",
          "value": "🔹 Iterable vs Iterator Comparison"
        },
        {
          "type": "table",
          "headers": [
            "Feature",
            "Iterable",
            "Iterator"
          ],
          "rows": [
            [
              "Can loop using for",
              "✅",
              "✅"
            ],
            [
              "Stores data",
              "✅",
              "Usually no"
            ],
            [
              "Uses iter()",
              "Returns iterator",
              "Returns itself"
            ],
            [
              "Uses next() directly",
              "❌",
              "✅"
            ]
          ]
        },
        {
          "type": "text",
          "value": "🚀 Generator vs Iterator\nGenerators are an easier way to create iterators using the yield keyword."
        },
        {
          "type": "code",
          "value": "def mygen():\n    yield 1\n    yield 2\n\ng = mygen()\nprint(next(g))\nprint(next(g))"
        },
        {
          "type": "output",
          "value": "1\n2"
        }
      ],
      "questions": [
        {
          "question": "What is the primary difference between an iterable and an iterator?",
          "answer": "An iterable is the data structure itself (like a list), while the iterator is the object that keeps track of the current position during iteration."
        },
        {
          "question": "Why is 'StopIteration' necessary in a custom iterator?",
          "answer": "It signals to the for loop (or any iteration tool) that there are no more elements to process, preventing infinite loops."
        },
        {
          "question": "What does iter() return when called on an iterator object?",
          "answer": "An iterator's __iter__() method simply returns 'self' (the iterator itself)."
        }
      ]
    },
    {
      "id": "python-modules",
      "title": "Python Modules",
      "category": "Basic",
      "definition": "A module in Python is a file containing Python code (.py extension) that can include functions, variables, and classes. Modules allow you to organize, reuse, and maintain code efficiently.",
      "sections": [
        {
          "type": "text",
          "value": "⭐ Why Use Modules?\n• Reuse code across different programs\n• Organize large programs into manageable files\n• Avoid redundant coding\n• Improve program maintainability"
        },
        {
          "type": "text",
          "value": "🏗️ Creating and Using a Module\nFirst, create a module file named mymodule.py:"
        },
        {
          "type": "code",
          "value": "# mymodule.py\ndef greeting(name):\n    print(\"Hello, \" + name)\n\nperson1 = {\n    \"name\": \"John\",\n    \"age\": 36\n}"
        },
        {
          "type": "text",
          "value": "Now, import and use it in another file:"
        },
        {
          "type": "code",
          "value": "import mymodule\n\nmymodule.greeting(\"Jonathan\")\nprint(mymodule.person1[\"age\"])"
        },
        {
          "type": "output",
          "value": "Hello, Jonathan\n36"
        },
        {
          "type": "text",
          "value": "🔥 Re-naming a Module (Alias)\nYou can create an alias when you import a module by using the 'as' keyword."
        },
        {
          "type": "code",
          "value": "import mymodule as mx\n\nprint(mx.person1[\"name\"])"
        },
        {
          "type": "output",
          "value": "John"
        },
        {
          "type": "text",
          "value": "🌍 Built-in Modules\nPython comes with many pre-installed modules ready for use."
        },
        {
          "type": "code",
          "value": "import platform\nimport math\nimport random\n\nprint(platform.system())  # e.g., Windows\nprint(math.sqrt(25))      # 5.0\nprint(random.randint(1, 10))"
        },
        {
          "type": "text",
          "value": "🔍 Using the dir() Function\nThe dir() function lists all the function names (or variable names) in a module."
        },
        {
          "type": "code",
          "value": "import platform\nprint(dir(platform))"
        },
        {
          "type": "text",
          "value": "⭐ Selective Import (from...import)\nYou can choose to import only specific parts from a module."
        },
        {
          "type": "code",
          "value": "from mymodule import person1\n\n# Note: No need to use 'mymodule.person1'\nprint(person1[\"name\"])"
        },
        {
          "type": "output",
          "value": "John"
        },
        {
          "type": "text",
          "value": "👉 Important Difference:"
        },
        {
          "type": "table",
          "headers": [
            "Using 'import'",
            "Using 'from...import'"
          ],
          "rows": [
            [
              "Requires module name prefix",
              "Direct access (no prefix)"
            ],
            [
              "Imports entire module",
              "Imports specific items"
            ]
          ]
        },
        {
          "type": "text",
          "value": "🎯 Real-Time Example: Calculator Module"
        },
        {
          "type": "code",
          "value": "# calculator.py\ndef add(a, b): return a + b\ndef sub(a, b): return a - b\n\n# main.py\nimport calculator\nprint(calculator.add(10, 5))"
        },
        {
          "type": "output",
          "value": "15"
        },
        {
          "type": "text",
          "value": "✅ Advantages Summary"
        },
        {
          "type": "table",
          "headers": [
            "Advantage",
            "Description"
          ],
          "rows": [
            [
              "Code Reuse",
              "Write once, use many times"
            ],
            [
              "Organization",
              "Separate code into logical files"
            ],
            [
              "Maintenance",
              "Easier debugging and updates"
            ],
            [
              "Collaboration",
              "Teams can work on different modules"
            ]
          ]
        },
        {
          "type": "text",
          "value": "🚀 Quick Summary"
        },
        {
          "type": "table",
          "headers": [
            "Concept",
            "Example"
          ],
          "rows": [
            [
              "Create",
              "filename.py"
            ],
            [
              "Import",
              "import filename"
            ],
            [
              "Alias",
              "import filename as alias"
            ],
            [
              "Specific Item",
              "from filename import item"
            ],
            [
              "Check Content",
              "dir(filename)"
            ]
          ]
        }
      ],
      "questions": [
        {
          "question": "What is the difference between 'import' and 'from...import'?",
          "answer": "Using 'import' requires you to use the module name to access its contents (e.g., math.sqrt), whereas 'from...import' allows direct access to specific items without the prefix."
        },
        {
          "question": "What does the dir() function return when called on a module?",
          "answer": "It returns a sorted list of strings containing the names of all variables, functions, and classes defined within that module."
        },
        {
          "question": "Why is 'from module import *' generally not recommended?",
          "answer": "It can lead to namespace pollution and confusion, as it's unclear which functions come from which module, and it might override existing names in your current scope."
        }
      ]
    },
    {
      "id": "python-regex",
      "title": "Python Regular Expressions (RegEx)",
      "category": "Basic",
      "definition": "Regular expressions (regex) are handled using the built-in re module. They allow you to search, match, and manipulate text patterns efficiently using a specialized syntax.",
      "sections": [
        {
          "type": "text",
          "value": "🔹 Basic Usage\nImport the 're' module to start working with patterns."
        },
        {
          "type": "code",
          "value": "import re\n\ntext = \"My phone number is 123-456-7890\"\nmatch = re.search(r\"\\d{3}-\\d{3}-\\d{4}\", text)\n\nif match:\n    print(\"Found:\", match.group())"
        },
        {
          "type": "output",
          "value": "Found: 123-456-7890"
        },
        {
          "type": "text",
          "value": "🔥 Common Functions"
        },
        {
          "type": "table",
          "headers": [
            "Function",
            "Description"
          ],
          "rows": [
            [
              "re.search()",
              "Finds first match anywhere in string"
            ],
            [
              "re.match()",
              "Checks only at the beginning of string"
            ],
            [
              "re.findall()",
              "Returns all matches as a list of strings"
            ],
            [
              "re.sub()",
              "Replaces matches with a replacement string"
            ]
          ]
        },
        {
          "type": "code",
          "value": "import re\ntext = \"apple banana apple\"\n\n# Find all occurrences\nprint(re.findall(r\"apple\", text))\n\n# Replace text\nprint(re.sub(r\"apple\", \"orange\", text))"
        },
        {
          "type": "output",
          "value": "['apple', 'apple']\norange banana orange"
        },
        {
          "type": "text",
          "value": "⚡ Common Regex Patterns"
        },
        {
          "type": "table",
          "headers": [
            "Pattern",
            "Meaning"
          ],
          "rows": [
            [
              ".",
              "Any character (except newline)"
            ],
            [
              "\\d",
              "Digit (0–9)"
            ],
            [
              "\\w",
              "Word character (a-z, A-Z, 0-9, _)"
            ],
            [
              "\\s",
              "Whitespace (space, tab, newline)"
            ],
            [
              "^ / $",
              "Start / End of string"
            ],
            [
              "* / +",
              "0 or more / 1 or more occurrences"
            ],
            [
              "?",
              "Optional (0 or 1 occurrence)"
            ],
            [
              "{n}",
              "Exactly n times"
            ]
          ]
        },
        {
          "type": "text",
          "value": "🚀 Practical Examples"
        },
        {
          "type": "text",
          "value": "1. Extracting Emails"
        },
        {
          "type": "code",
          "value": "import re\ntext = \"Contact: test@example.com\"\nemails = re.findall(r\"\\S+@\\S+\", text)\nprint(emails)"
        },
        {
          "type": "output",
          "value": "['test@example.com']"
        },
        {
          "type": "text",
          "value": "2. Validating a Number (fullmatch)"
        },
        {
          "type": "code",
          "value": "import re\nnumber = \"12345\"\nif re.fullmatch(r\"\\d+\", number):\n    print(\"Valid number\")"
        },
        {
          "type": "output",
          "value": "Valid number"
        },
        {
          "type": "text",
          "value": "3. Splitting Text on Multiple Delimiters"
        },
        {
          "type": "code",
          "value": "import re\ntext = \"apple,banana;orange\"\nparts = re.split(r\"[,;]\", text)\nprint(parts)"
        },
        {
          "type": "output",
          "value": "['apple', 'banana', 'orange']"
        },
        {
          "type": "text",
          "value": "✅ Professional Tips:\n• Use raw strings (r\"pattern\") to avoid backslash escaping issues.\n• Test regex patterns on small samples using tools like regex101 before coding.\n• Keep patterns readable—break down complex regex into commented segments if needed."
        }
      ],
      "questions": [
        {
          "question": "What is the difference between re.search() and re.match()?",
          "answer": "re.match() only checks for a match at the beginning of the string, while re.search() scans the entire string for the first location where the pattern matches."
        },
        {
          "question": "Why should we use raw strings (r'...') for regex patterns in Python?",
          "answer": "Raw strings treat backslashes as literal characters, preventing Python from interpreting them as escape sequences (like \\n for newline), which is crucial for regex tokens like \\d or \\w."
        },
        {
          "question": "How do you replace all occurrences of a pattern in a string?",
          "answer": "By using the 're.sub()' function, which takes the pattern, the replacement string, and the target text as arguments."
        }
      ]
    },
    {
      "id": "python-regex-part2",
      "title": "Python RegEx - Part 2",
      "category": "Basic",
      "definition": "Extended study of Python's re module, focusing on advanced pattern matching functions, validation logic, and practical data extraction techniques.",
      "sections": [
        {
          "type": "text",
          "value": "🎯 Why Use RegEx?\nRegEx is essential for validating emails, checking passwords, extracting phone numbers, and advanced text replacements."
        },
        {
          "type": "text",
          "value": "🔹 1. re.search()\nSearches the string and returns the first match found anywhere."
        },
        {
          "type": "code",
          "value": "import re\ntext = \"My number is 9876543210\"\nresult = re.search(r\"\\d+\", text)\nprint(result.group())"
        },
        {
          "type": "output",
          "value": "9876543210"
        },
        {
          "type": "text",
          "value": "🔹 2. re.findall()\nReturns all matches in a list. Ideal for extracting multiple values."
        },
        {
          "type": "code",
          "value": "import re\ntext = \"I have 2 apples and 5 bananas\"\nnumbers = re.findall(r\"\\d+\", text)\nprint(numbers)"
        },
        {
          "type": "output",
          "value": "['2', '5']"
        },
        {
          "type": "text",
          "value": "🔍 Explanation:\n• \\d → Digit (0–9)\n• + → One or more\nSo \\d+ matches numbers with one or more digits."
        },
        {
          "type": "text",
          "value": "🔹 3. re.match()\nChecks only at the beginning of the string. Returns None if the pattern is not at the very start."
        },
        {
          "type": "code",
          "value": "import re\ntext = \"Python is easy\"\nresult = re.match(r\"Python\", text)\nprint(\"Matched\" if result else \"Not Matched\")"
        },
        {
          "type": "output",
          "value": "Matched"
        },
        {
          "type": "text",
          "value": "🔹 4. re.sub() & re.split()\nPowerful tools for cleaning and parsing text."
        },
        {
          "type": "code",
          "value": "import re\ntext = \"apple,banana;orange\"\n\n# Replace text\nclean = re.sub(r\"cats\", \"dogs\", \"I like cats\")\n# Split using multiple delimiters\nparts = re.split(r\"[,;]\", text)\n\nprint(clean)\nprint(parts)"
        },
        {
          "type": "output",
          "value": "I like dogs\n['apple', 'banana', 'orange']"
        },
        {
          "type": "text",
          "value": "⚡ Important RegEx Symbols Reference"
        },
        {
          "type": "table",
          "headers": [
            "Symbol",
            "Meaning",
            "Example"
          ],
          "rows": [
            [
              ".",
              "Any character",
              "a.b"
            ],
            [
              "\\d / \\D",
              "Digit / Non-digit",
              "\\d+ / \\D+"
            ],
            [
              "\\w",
              "Word character",
              "\\w+"
            ],
            [
              "\\s",
              "Whitespace",
              "\\s+"
            ],
            [
              "^ / $",
              "Start / End of string",
              "^Hi / End$"
            ],
            [
              "* / +",
              "0+ / 1+ occurrences",
              "ab* / ab+"
            ],
            [
              "?",
              "Optional",
              "colou?r"
            ]
          ]
        },
        {
          "type": "text",
          "value": "🚀 Real-Time Examples"
        },
        {
          "type": "text",
          "value": "✅ Email Validation"
        },
        {
          "type": "code",
          "value": "import re\nemail = \"test@gmail.com\"\npattern = r\"^[a-zA-Z0-9._]+@[a-z]+\\.[a-z]{2,}$\"\nprint(\"Valid\" if re.match(pattern, email) else \"Invalid\")"
        },
        {
          "type": "output",
          "value": "Valid"
        },
        {
          "type": "text",
          "value": "✅ Phone Number Extraction & Space Removal"
        },
        {
          "type": "code",
          "value": "import re\ntext = \"Python    is    easy\"\n# Normalize spaces\nresult = re.sub(r\"\\s+\", \" \", text)\nprint(result)"
        },
        {
          "type": "output",
          "value": "Python is easy"
        },
        {
          "type": "text",
          "value": "🔹 Difference Between Common Functions"
        },
        {
          "type": "table",
          "headers": [
            "Function",
            "Purpose"
          ],
          "rows": [
            [
              "search()",
              "Find first match anywhere"
            ],
            [
              "match()",
              "Match only from beginning"
            ],
            [
              "findall()",
              "Return all matches in a list"
            ],
            [
              "sub()",
              "Replace patterns with text"
            ],
            [
              "split()",
              "Split string using patterns"
            ]
          ]
        },
        {
          "type": "text",
          "value": "💻 Mini Practice Programs"
        },
        {
          "type": "code",
          "value": "import re\ntext = \"Python Programming\"\n\n# 1. Find vowels\nvowels = re.findall(r\"[aeiou]\", text)\n# 2. Find words starting with P\np_words = re.findall(r\"\\bP\\w+\", text)\n\nprint(\"Vowels:\", vowels)\nprint(\"P words:\", p_words)"
        },
        {
          "type": "output",
          "value": "Vowels: ['o', 'o', 'a', 'i']\nP words: ['Python', 'Programming']"
        }
      ],
      "questions": [
        {
          "question": "What is the difference between \\d and \\D in RegEx?",
          "answer": "\\d matches any decimal digit (0-9), while \\D matches any character that is NOT a decimal digit."
        },
        {
          "question": "How do you make a character optional in a regex pattern?",
          "answer": "By using the '?' quantifier, which matches the preceding character 0 or 1 time (e.g., 'favou?r' matches both 'favor' and 'favour')."
        },
        {
          "question": "What does \\b signify in a regex pattern?",
          "answer": "\\b represents a word boundary, which is used to match patterns that are specifically at the start or end of a word."
        }
      ]
    },
    {
      "id": "python-pip",
      "title": "Python PIP (Package Manager)",
      "category": "Basic",
      "definition": "PIP is the standard package manager for Python. It allows you to install, update, and manage external libraries and dependencies that are not included in the standard Python library.",
      "sections": [
        {
          "type": "text",
          "value": "🚀 Core PIP Commands\nPIP simplifies the process of adding third-party functionality to your Python projects."
        },
        {
          "type": "table",
          "headers": [
            "Action",
            "Command"
          ],
          "rows": [
            [
              "Install Package",
              "pip install package_name"
            ],
            [
              "Specific Version",
              "pip install package_name==1.2.3"
            ],
            [
              "Upgrade",
              "pip install --upgrade package_name"
            ],
            [
              "Uninstall",
              "pip uninstall package_name"
            ],
            [
              "List Installed",
              "pip list"
            ],
            [
              "Show Details",
              "pip show package_name"
            ]
          ]
        },
        {
          "type": "text",
          "value": "🌍 Using PIP with Multiple Python Versions\nIf you have multiple versions of Python installed, use the -m flag to ensure you're targeting the correct environment."
        },
        {
          "type": "code",
          "value": "python -m pip install numpy\n# OR\npython3 -m pip install numpy"
        },
        {
          "type": "text",
          "value": "🛡️ Virtual Environments (venv)\nBest practice is to use virtual environments to isolate project dependencies and avoid version conflicts."
        },
        {
          "type": "code",
          "value": "# 1. Create the environment\npython -m venv venv\n\n# 2. Activate it\n# Windows:\nvenv\\Scripts\\activate\n# macOS/Linux:\nsource venv/bin/activate"
        },
        {
          "type": "text",
          "value": "📜 Dependency Management with Requirements Files\nYou can install all project dependencies at once using a requirements.txt file."
        },
        {
          "type": "code",
          "value": "pip install -r requirements.txt"
        },
        {
          "type": "text",
          "value": "✅ Benefits of PIP:\n• Access to thousands of libraries on PyPI (Python Package Index)\n• Simplified dependency resolution\n• Automated updates and removal"
        }
      ],
      "questions": [
        {
          "question": "What does PIP stand for?",
          "answer": "PIP is a recursive acronym for 'Pip Installs Packages' (or sometimes 'Preferred Installer Program')."
        },
        {
          "question": "How do you install a specific version of a library using PIP?",
          "answer": "By using the '==' operator followed by the version number, e.g., 'pip install requests==2.25.1'."
        },
        {
          "question": "Why should you use a requirements.txt file?",
          "answer": "It allows for consistent environments across different machines by recording all project dependencies and their versions, making it easy for others to install them using 'pip install -r'."
        }
      ]
    },
    {
      "id": "python-pip-part2",
      "title": "Python PIP - Part 2",
      "category": "Basic",
      "definition": "Extended guide on using PIP for package management, library integration, and troubleshooting common environment issues.",
      "sections": [
        {
          "type": "text",
          "value": "📦 What is a Package?\nA package is a collection of Python modules that provide extra functionality. Examples include:\n• NumPy (Math)\n• Pandas (Data Analysis)\n• Flask/Django (Web Development)"
        },
        {
          "type": "text",
          "value": "🔍 Checking and Installing PIP\nPIP usually comes pre-installed with Python 3.4+. You can verify it via terminal:"
        },
        {
          "type": "code",
          "value": "pip --version"
        },
        {
          "type": "output",
          "value": "pip 25.0 from C:\\Python\\Lib\\site-packages\\pip (python 3.12)"
        },
        {
          "type": "text",
          "value": "🏗️ Hands-on Example: The 'camelcase' Library"
        },
        {
          "type": "code",
          "value": "# 1. Install\npip install camelcase\n\n# 2. Use in Python\nimport camelcase\nc = camelcase.CamelCase()\ntxt = \"hello world\"\nprint(c.hump(txt))"
        },
        {
          "type": "output",
          "value": "Hello World"
        },
        {
          "type": "text",
          "value": "⚙️ Advanced Package Management"
        },
        {
          "type": "code",
          "value": "pip install --upgrade camelcase   # Update\npip uninstall camelcase           # Remove\npip list                          # List all\npip show numpy                    # Details"
        },
        {
          "type": "text",
          "value": "📜 Dependency Mastery\nYou can install specific versions, multiple packages, or use a requirements file for batch setup."
        },
        {
          "type": "code",
          "value": "pip install numpy==1.26.0\npip install numpy pandas matplotlib\npip install -r requirements.txt"
        },
        {
          "type": "text",
          "value": "🔥 Important PIP Commands Reference"
        },
        {
          "type": "table",
          "headers": [
            "Command",
            "Purpose"
          ],
          "rows": [
            [
              "pip --version",
              "Check pip version"
            ],
            [
              "pip install",
              "Install a package"
            ],
            [
              "pip uninstall",
              "Remove a package"
            ],
            [
              "pip list",
              "List installed packages"
            ],
            [
              "pip show",
              "Show package details"
            ],
            [
              "pip install -r",
              "Install from requirements file"
            ]
          ]
        },
        {
          "type": "text",
          "value": "🚀 Real-Time Framework Example: Flask"
        },
        {
          "type": "code",
          "value": "from flask import Flask\napp = Flask(__name__)\n\n@app.route('/')\ndef home(): return \"Hello Flask\"\n\n# app.run()"
        },
        {
          "type": "text",
          "value": "⚠️ Common Errors and Solutions\nIf 'pip' is not recognized, use the python module flag:"
        },
        {
          "type": "code",
          "value": "python -m pip install package_name"
        }
      ],
      "questions": [
        {
          "question": "What is the difference between a Module and a Package?",
          "answer": "A Module is a single Python file (.py), while a Package is a collection of modules organized in a folder structure."
        },
        {
          "question": "Where can you find official Python packages?",
          "answer": "Official packages are hosted on PyPI (Python Package Index) at pypi.org."
        },
        {
          "question": "Which command allows you to see the installation path of a package?",
          "answer": "The 'pip show package_name' command provides details including the version and location."
        }
      ]
    },
    {
      "id": "python-virtual-environment",
      "title": "Python Virtual Environment",
      "category": "Basic",
      "definition": "A Virtual Environment is an isolated space where you can install project-specific Python packages without affecting the global Python installation or other projects.",
      "sections": [
        {
          "type": "text",
          "value": "🚀 Why Use Virtual Environments?\nThey prevent version conflicts. For example, Project A might need Django 3.2, while Project B needs Django 5.0. Virtual environments keep these dependencies completely separate."
        },
        {
          "type": "text",
          "value": "🏗️ Creating a Virtual Environment\nNavigate to your project folder and run the venv module."
        },
        {
          "type": "code",
          "value": "# Windows\npython -m venv myenv\n\n# macOS/Linux\npython3 -m venv myenv"
        },
        {
          "type": "text",
          "value": "🔥 Activation Logic\nThe (myenv) prefix in your terminal indicates the environment is active."
        },
        {
          "type": "table",
          "headers": [
            "Platform",
            "Activation Command"
          ],
          "rows": [
            [
              "Windows",
              "myenv\\Scripts\\activate"
            ],
            [
              "macOS / Linux",
              "source myenv/bin/activate"
            ]
          ]
        },
        {
          "type": "text",
          "value": "🛡️ Dependency Management Workflow"
        },
        {
          "type": "code",
          "value": "pip install flask                # Install package\npip freeze > requirements.txt    # Save dependencies\npip install -r requirements.txt # Restore environment\ndeactivate                       # Exit environment"
        },
        {
          "type": "text",
          "value": "🎯 Complete Project Lifecycle Example"
        },
        {
          "type": "code",
          "value": "# Setup\nmkdir flaskproject && cd flaskproject\npython -m venv env\n# Activate (Windows)\nenv\\Scripts\\activate\n\n# Code (app.py)\nfrom flask import Flask\napp = Flask(__name__)\n@app.route('/')\ndef home(): return 'Hello Flask'\n# app.run(debug=True)"
        },
        {
          "type": "text",
          "value": "🔥 Global vs. Virtual Comparison"
        },
        {
          "type": "table",
          "headers": [
            "Feature",
            "Global Python",
            "Virtual Environment"
          ],
          "rows": [
            [
              "Isolation",
              "❌ Shared by all",
              "✅ Isolated per project"
            ],
            [
              "Conflicts",
              "⚠️ High risk",
              "🛡️ No conflicts"
            ],
            [
              "Management",
              "❌ Difficult",
              "✅ Very Easy"
            ]
          ]
        },
        {
          "type": "text",
          "value": "✅ Professional Best Practices:\n• Create one environment per project.\n• Always use a 'requirements.txt' file.\n• Add your environment folder (env/, venv/) to .gitignore."
        },
        {
          "type": "text",
          "value": "⚠️ Common Troubleshooting:\n• Windows PowerShell: If scripts are disabled, run 'Set-ExecutionPolicy RemoteSigned' as Admin.\n• PATH issues: Ensure Python is added to your system PATH."
        },
        {
          "type": "text",
          "value": "🚀 Advanced Ecosystem Tools:\n• pipenv: Combines pip and venv.\n• conda: Industry standard for Data Science and ML."
        }
      ],
      "questions": [
        {
          "question": "What is the primary purpose of a virtual environment?",
          "answer": "To provide an isolated environment for Python projects, ensuring that each project has its own set of dependencies and avoiding version conflicts between them."
        },
        {
          "question": "How do you record the current environment's dependencies into a file?",
          "answer": "By using the command 'pip freeze > requirements.txt'."
        },
        {
          "question": "How do you remove a virtual environment from your system?",
          "answer": "Simply deactivate it and then delete the virtual environment folder (e.g., 'rmdir /s myenv' on Windows)."
        }
      ]
    },
    {
      "id": "python-try-except",
      "title": "Python Try...Except",
      "category": "Basic",
      "definition": "Exception handling in Python is managed through try and except blocks. They allow you to catch runtime errors and handle them gracefully, preventing the program from crashing.",
      "sections": [
        {
          "type": "text",
          "value": "⭐ Basic Syntax\nThe 'try' block contains code that might raise an error, while the 'except' block contains code to handle that error."
        },
        {
          "type": "code",
          "value": "try:\n    x = int(input(\"Enter a number: \"))\n    print(10 / x)\nexcept:\n    print(\"Something went wrong!\")"
        },
        {
          "type": "text",
          "value": "🔍 Catching Specific Exceptions\nIt is better practice to catch specific errors so you can handle them differently based on the cause."
        },
        {
          "type": "code",
          "value": "try:\n    x = int(input(\"Enter a number: \"))\n    print(10 / x)\nexcept ValueError:\n    print(\"Invalid input! Please enter a number.\")\nexcept ZeroDivisionError:\n    print(\"Cannot divide by zero.\")"
        },
        {
          "type": "text",
          "value": "🔥 Using else and finally\n• else: Runs only if NO exceptions occurred.\n• finally: Runs ALWAYS, regardless of whether an error happened or not (useful for cleanup)."
        },
        {
          "type": "code",
          "value": "try:\n    x = int(input(\"Enter a number: \"))\n    result = 10 / x\nexcept ZeroDivisionError:\n    print(\"Cannot divide by zero.\")\nelse:\n    print(\"Result:\", result)\nfinally:\n    print(\"Execution finished.\")"
        },
        {
          "type": "text",
          "value": "🛡️ Catching Multiple Exceptions\nYou can group exceptions into a tuple to handle different errors with the same block of code."
        },
        {
          "type": "code",
          "value": "try:\n    num = int(\"abc\")\nexcept (ValueError, TypeError) as e:\n    print(\"Error encountered:\", e)"
        },
        {
          "type": "output",
          "value": "Error encountered: invalid literal for int() with base 10: 'abc'"
        },
        {
          "type": "text",
          "value": "✅ Key Best Practices:\n• Avoid bare 'except:' blocks; always specify the exception type if possible.\n• Use 'finally' to close files or database connections.\n• Keep 'try' blocks small to avoid catching unrelated errors."
        }
      ],
      "questions": [
        {
          "question": "What is the purpose of the 'else' block in try...except?",
          "answer": "The 'else' block is executed if and only if no exceptions were raised in the 'try' block."
        },
        {
          "question": "What is the difference between 'except' and 'finally'?",
          "answer": "The 'except' block runs only when an error occurs, whereas the 'finally' block runs every time, whether an error occurred or not."
        },
        {
          "question": "How do you access the error message in an except block?",
          "answer": "By using the 'as' keyword, for example: 'except Exception as e:', where 'e' becomes the variable containing the exception details."
        }
      ]
    },
    {
      "id": "python-try-except-part2",
      "title": "Python Try...Except - Part 2",
      "category": "Basic",
      "definition": "Extended study of Python's exception handling system, covering specialized error types, manual exception triggering, and resource cleanup patterns.",
      "sections": [
        {
          "type": "text",
          "value": "🎯 Graceful Error Handling\nWithout exception handling, a single error like an undefined variable will crash your entire program. With try-except, you can notify the user and keep the application running."
        },
        {
          "type": "code",
          "value": "try:\n    print(x) # x is not defined\nexcept NameError:\n    print(\"Variable x is not defined\")"
        },
        {
          "type": "output",
          "value": "Variable x is not defined"
        },
        {
          "type": "text",
          "value": "📚 Common Python Exceptions Reference"
        },
        {
          "type": "table",
          "headers": [
            "Exception",
            "Description"
          ],
          "rows": [
            [
              "NameError",
              "Variable is not defined in the current scope"
            ],
            [
              "TypeError",
              "Operation applied to an object of inappropriate type"
            ],
            [
              "ValueError",
              "Function receives argument of right type but inappropriate value"
            ],
            [
              "ZeroDivisionError",
              "Second argument of division or modulo is zero"
            ],
            [
              "IndexError",
              "Sequence subscript is out of range"
            ],
            [
              "KeyError",
              "Dictionary key is not found"
            ],
            [
              "FileNotFoundError",
              "File or directory is requested but doesn't exist"
            ]
          ]
        },
        {
          "type": "text",
          "value": "🔥 Deep Dive: else & finally\n• else block: Executes only if NO exceptions were raised.\n• finally block: Executes ALWAYS, primarily used for releasing external resources."
        },
        {
          "type": "code",
          "value": "try:\n    print(\"Hello\")\nexcept:\n    print(\"Error\")\nelse:\n    print(\"Success: No errors occurred\")\nfinally:\n    print(\"Cleanup: Task finished\")"
        },
        {
          "type": "output",
          "value": "Hello\nSuccess: No errors occurred\nCleanup: Task finished"
        },
        {
          "type": "text",
          "value": "📂 Real-World Scenario: File Handling\nUsing nested try blocks and finally to ensure files are closed regardless of success or failure."
        },
        {
          "type": "code",
          "value": "try:\n    f = open(\"demo.txt\")\n    try:\n        f.write(\"Hello\")\n    except:\n        print(\"Error writing to file\")\n    finally:\n        f.close()\nexcept:\n    print(\"Error: File could not be opened\")"
        },
        {
          "type": "text",
          "value": "🚀 Raising Exceptions (raise)\nYou can manually trigger exceptions when specific conditions are met using the 'raise' keyword."
        },
        {
          "type": "code",
          "value": "x = -1\nif x < 0:\n    raise Exception(\"No negative numbers allowed\")"
        },
        {
          "type": "text",
          "value": "💻 Capstone Example: Robust Division Tool"
        },
        {
          "type": "code",
          "value": "try:\n    a = int(input(\"Enter number: \"))\n    result = 10 / a\nexcept ZeroDivisionError:\n    print(\"Error: Cannot divide by zero\")\nexcept ValueError:\n    print(\"Error: Please enter numbers only\")\nelse:\n    print(\"Success! Result:\", result)\nfinally:\n    print(\"Environment reset. Ready for next input.\")"
        }
      ],
      "questions": [
        {
          "question": "What is the primary difference between the 'except' and 'finally' blocks?",
          "answer": "The 'except' block runs only if an exception is raised, while the 'finally' block runs unconditionally at the end of the try-except chain."
        },
        {
          "question": "Why is it important to use 'finally' when dealing with files or databases?",
          "answer": "External resources like files and database connections need to be explicitly closed or released to prevent memory leaks and locks. 'finally' ensures this happens even if an error occurs mid-process."
        },
        {
          "question": "How do you manually force an exception to occur in your code?",
          "answer": "By using the 'raise' keyword followed by the exception type and an optional error message, e.g., 'raise ValueError(\"Invalid input\")'."
        }
      ]
    },
    {
      "id": "python-file-handling",
      "title": "Python File Handling",
      "category": "Basic",
      "definition": "File handling in Python allows you to create, read, write, and delete files stored on the file system using built-in functions and the 'os' module.",
      "sections": [
        {
          "type": "text",
          "value": "📂 Opening a File\nPython uses the open() function to interact with files. It takes the filename and a mode as arguments."
        },
        {
          "type": "table",
          "headers": [
            "Mode",
            "Meaning",
            "Description"
          ],
          "rows": [
            [
              "'r'",
              "Read",
              "Default. Opens for reading. Error if file missing."
            ],
            [
              "'w'",
              "Write",
              "Opens for writing. Overwrites existing content."
            ],
            [
              "'a'",
              "Append",
              "Adds content to end of file without overwriting."
            ],
            [
              "'x'",
              "Create",
              "Creates a new file. Error if it already exists."
            ],
            [
              "'t' / 'b'",
              "Text / Binary",
              "Default is text mode ('t'). Binary ('b') for images/executables."
            ]
          ]
        },
        {
          "type": "text",
          "value": "📖 Reading Files\nYou can read the entire file, specific characters, or line-by-line."
        },
        {
          "type": "code",
          "value": "f = open(\"demo.txt\", \"r\")\nprint(f.read())       # Entire file\n# print(f.read(5))    # First 5 chars\n# print(f.readline()) # First line\nf.close()"
        },
        {
          "type": "text",
          "value": "💡 The 'with' Statement (Best Practice)\nUsing 'with' ensures the file is automatically closed, even if an error occurs. This is the professional standard for file handling."
        },
        {
          "type": "code",
          "value": "with open(\"demo.txt\", \"r\") as f:\n    data = f.read()\n    print(data)"
        },
        {
          "type": "text",
          "value": "✍️ Writing and Appending\n• 'w' overwrites everything.\n• 'a' keeps old data and adds new text to the end."
        },
        {
          "type": "code",
          "value": "# Writing\nwith open(\"demo.txt\", \"w\") as f:\n    f.write(\"Python File Handling\")\n\n# Appending\nwith open(\"demo.txt\", \"a\") as f:\n    f.write(\"\\nLearning Python\")"
        },
        {
          "type": "text",
          "value": "🗑️ Deleting Files and Folders\nTo remove files, you must import the 'os' module."
        },
        {
          "type": "code",
          "value": "import os\n\nif os.path.exists(\"demo.txt\"):\n    os.remove(\"demo.txt\")\n    print(\"File Deleted\")\nelse:\n    print(\"File Not Found\")\n\n# os.rmdir(\"myfolder\") # Delete empty folder"
        },
        {
          "type": "text",
          "value": "🚀 Industry Use Cases"
        },
        {
          "type": "table",
          "headers": [
            "Application",
            "Usage"
          ],
          "rows": [
            [
              "Banking App",
              "Store daily transaction logs"
            ],
            [
              "Notes App",
              "Save and load user text files"
            ],
            [
              "Data Analysis",
              "Read CSV and generate reports"
            ],
            [
              "Web Server",
              "Store application logs and errors"
            ]
          ]
        },
        {
          "type": "text",
          "value": "💻 Mini Practice Lab"
        },
        {
          "type": "code",
          "value": "# 1. Count characters\nwith open(\"demo.txt\", \"r\") as f:\n    print(\"Char count:\", len(f.read()))\n\n# 2. Copy file\nwith open(\"source.txt\", \"r\") as s, open(\"copy.txt\", \"w\") as c:\n    c.write(s.read())"
        }
      ],
      "questions": [
        {
          "question": "What is the difference between 'w' and 'a' modes?",
          "answer": "The 'w' (write) mode overwrites the existing content of the file, while 'a' (append) mode adds new content to the end of the file without deleting the existing data."
        },
        {
          "question": "Why is the 'with' statement preferred over manual f.close()?",
          "answer": "The 'with' statement provides better resource management by automatically closing the file once the block is exited, even if an exception is raised, which prevents memory leaks."
        },
        {
          "question": "Which method would you use to read a file line-by-line into a list?",
          "answer": "The 'f.readlines()' method reads all lines and returns them as a list of strings."
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
      "id": "python-oop-concepts-part2",
      "title": "Python OOP Concepts - Part 2",
      "category": "OOP Basics",
      "definition": "A deep dive into the four foundational pillars of Object-Oriented Programming: Encapsulation, Abstraction, Inheritance, and Polymorphism.",
      "sections": [
        {
          "type": "text",
          "value": "🛡️ 1. Encapsulation\nEncapsulation involves bundling data and methods into a single unit (class) and restricting access to some components. This protects data from accidental modification."
        },
        {
          "type": "code",
          "value": "class BankAccount:\n    def __init__(self):\n        self.__balance = 0   # Private variable\n\n    def deposit(self, amount):\n        self.__balance += amount\n\n    def get_balance(self):\n        return self.__balance\n\nacc = BankAccount()\nacc.deposit(5000)\nprint(acc.get_balance())"
        },
        {
          "type": "output",
          "value": "5000"
        },
        {
          "type": "text",
          "value": "🔍 2. Abstraction\nAbstraction focuses on hiding complex implementation details and showing only the essential features of an object. It reduces programming complexity and effort."
        },
        {
          "type": "code",
          "value": "class EmailService:\n    def send_email(self, to, body):\n        self.__connect()\n        print(f\"Sending email to {to}\")\n\n    def __connect(self):\n        print(\"Connecting to mail server...\")\n\nobj = EmailService()\nobj.send_email(\"user@example.com\", \"Hello\")"
        },
        {
          "type": "output",
          "value": "Connecting to mail server...\nSending email to user@example.com"
        },
        {
          "type": "text",
          "value": "🧬 3. Inheritance\nInheritance allows a new class (child) to inherit attributes and methods from an existing class (parent), promoting code reusability."
        },
        {
          "type": "code",
          "value": "class Animal:\n    def speak(self): print(\"Animal speaks\")\n\nclass Dog(Animal):\n    def speak(self): print(\"Woof!\")\n\nclass Cat(Animal):\n    def speak(self): print(\"Meow!\")\n\nd, c = Dog(), Cat()\nd.speak()\nc.speak()"
        },
        {
          "type": "output",
          "value": "Woof!\nMeow!"
        },
        {
          "type": "text",
          "value": "🎭 4. Polymorphism\nPolymorphism allows different classes to be treated as instances of the same parent class through the same interface (method name), with each class providing its own implementation."
        },
        {
          "type": "code",
          "value": "class Circle:\n    def draw(self): print(\"Drawing Circle\")\nclass Rectangle:\n    def draw(self): print(\"Drawing Rectangle\")\n\ndef display(shape):\n    shape.draw()\n\ndisplay(Circle())\ndisplay(Rectangle())"
        },
        {
          "type": "output",
          "value": "Drawing Circle\nDrawing Rectangle"
        },
        {
          "type": "text",
          "value": "📊 Quick Summary Table"
        },
        {
          "type": "table",
          "headers": [
            "Concept",
            "Key Purpose",
            "Real-World Example"
          ],
          "rows": [
            [
              "Encapsulation",
              "Data Security",
              "Private Bank Balance"
            ],
            [
              "Abstraction",
              "Hide Complexity",
              "Email Send Button"
            ],
            [
              "Inheritance",
              "Code Reusability",
              "Animal → Dog Hierarchy"
            ],
            [
              "Polymorphism",
              "Flexibility",
              "Shapes drawing differently"
            ]
          ]
        }
      ],
      "questions": [
        {
          "question": "What is method overriding in Python?",
          "answer": "Method overriding occurs when a child class provides a specific implementation of a method that is already defined in its parent class."
        },
        {
          "question": "Does Python support multiple inheritance?",
          "answer": "Yes, Python allows a class to inherit from more than one parent class, e.g., 'class C(A, B):'."
        },
        {
          "question": "What is the purpose of 'self' in Python classes?",
          "answer": "'self' represents the instance of the class and allows access to the attributes and methods of that specific object."
        }
      ]
    },
    {
      "id": "python-oop-interview-questions-part3",
      "title": "Python OOP Interview Questions - Part 3",
      "category": "OOP Basics",
      "definition": "A curated collection of the most frequent and essential Object-Oriented Programming interview questions, designed to reinforce core architectural concepts in Python.",
      "sections": [
        {
          "type": "text",
          "value": "🎯 1. What is OOP?\nObject-Oriented Programming (OOP) is a programming paradigm based on the concept of 'objects', which can contain data (attributes) and code (methods). It is designed to make code more modular, reusable, and easier to maintain."
        },
        {
          "type": "text",
          "value": "🏛️ 2. What are the 4 Pillars of OOP?\n• Encapsulation: Bundling data and methods.\n• Abstraction: Hiding implementation details.\n• Inheritance: Reusing code from parent classes.\n• Polymorphism: Different behaviors for the same interface."
        },
        {
          "type": "text",
          "value": "⚖️ 3. Difference: Encapsulation vs. Abstraction"
        },
        {
          "type": "table",
          "headers": [
            "Encapsulation",
            "Abstraction"
          ],
          "rows": [
            [
              "Hides data and attributes",
              "Hides internal implementation/logic"
            ],
            [
              "Uses private variables (__var)",
              "Uses abstract classes or methods"
            ],
            [
              "Focuses on 'How' to restrict access",
              "Focuses on 'What' the object does"
            ]
          ]
        },
        {
          "type": "text",
          "value": "🧬 4. What is Inheritance?\nInheritance is a mechanism where a child class acquires the properties and methods of a parent class. It allows for hierarchical classification and significant code reusability."
        },
        {
          "type": "text",
          "value": "🎭 5. What is Polymorphism?\nPolymorphism means 'many forms'. It allows a single function or method to behave differently based on the object it is acting upon."
        },
        {
          "type": "text",
          "value": "🔄 6. What is Method Overriding?\nMethod overriding allows a child class to provide a specific implementation for a method that is already defined in its parent class."
        },
        {
          "type": "code",
          "value": "class Parent:\n    def show(self): print(\"Parent\")\n\nclass Child(Parent):\n    def show(self): print(\"Child\")"
        },
        {
          "type": "text",
          "value": "🛠️ 7. What is a Constructor in Python?\nA constructor is a special method called __init__() that is automatically executed when an object of a class is created. It is used to initialize the object's attributes."
        },
        {
          "type": "text",
          "value": "👉 8. What is 'self' in Python?\n'self' is a reference to the current instance of the class. It is used to access variables and methods belonging to the class from within its own methods."
        },
        {
          "type": "text",
          "value": "🔗 9. Can Python support Multiple Inheritance?\nYes, Python supports multiple inheritance, where a single class can inherit from more than one parent class."
        },
        {
          "type": "code",
          "value": "class A: pass\nclass B: pass\nclass C(A, B): pass # Class C inherits from both A and B"
        },
        {
          "type": "text",
          "value": "🧊 10. What is an Object?\nAn object is a real-world entity and an 'instance' of a class. While a class is a blueprint, an object is the actual building created from that blueprint."
        }
      ],
      "questions": [
        {
          "question": "Which keyword is used for inheritance in Python?",
          "answer": "In Python, inheritance is specified by passing the parent class as an argument to the child class definition, e.g., 'class Child(Parent):'."
        },
        {
          "question": "What is the difference between a class and an object?",
          "answer": "A class is a blueprint or template, whereas an object is a specific instance of that class that contains actual data."
        },
        {
          "question": "Is the 'self' keyword mandatory in Python?",
          "answer": "Technically, you can use any name (it's just the first parameter of instance methods), but 'self' is the universal standard and must be present to access instance attributes."
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
          "value": "from sympy import symbols, expand\nx = symbols('x')expr = (x + 1) ** 2\nprint(expand(expr))"
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
          "headers": [
            "Library",
            "Importance"
          ],
          "rows": [
            [
              "NumPy",
              "Arrays & Math"
            ],
            [
              "pandas",
              "Data Analysis"
            ],
            [
              "Matplotlib",
              "Visualization"
            ],
            [
              "Seaborn",
              "Statistical Charts"
            ],
            [
              "scikit-learn",
              "Machine Learning"
            ]
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
    }
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
          "headers": [
            "ID",
            "Name",
            "Course"
          ],
          "rows": [
            [
              "1",
              "Ravi",
              "CSE"
            ],
            [
              "2",
              "Priya",
              "ECE"
            ]
          ]
        },
        {
          "type": "text",
          "value": "2. DBMS vs RDBMS:\n\n• DBMS: A software used to store and manage data as files (no relationships).\n• RDBMS: An advanced DBMS where data is stored in related tables using rows and columns.\n\n------------------------------------------------"
        },
        {
          "type": "table",
          "headers": [
            "Feature",
            "DBMS",
            "RDBMS"
          ],
          "rows": [
            [
              "Full Form",
              "Database Management System",
              "Relational Database Management System"
            ],
            [
              "Data Storage",
              "Stores data as files",
              "Stores data in tables"
            ],
            [
              "Relationship",
              "No relation between data",
              "Supports relationships"
            ],
            [
              "Security",
              "Less security",
              "More security"
            ],
            [
              "Normalization",
              "Not supported fully",
              "Supports normalization"
            ],
            [
              "Data Redundancy",
              "More",
              "Less"
            ],
            [
              "Examples",
              "XML, File System",
              "MySQL, Oracle, PostgreSQL"
            ]
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
          "headers": [
            "Type",
            "Purpose"
          ],
          "rows": [
            [
              "DDL",
              "Defines database structure"
            ],
            [
              "DML",
              "Manipulates data"
            ],
            [
              "DQL",
              "Retrieves data"
            ],
            [
              "DCL",
              "Controls permissions"
            ],
            [
              "TCL",
              "Manages transactions"
            ]
          ]
        },
        {
          "type": "table",
          "headers": [
            "Command",
            "Purpose"
          ],
          "rows": [
            [
              "CREATE",
              "Create database/table"
            ],
            [
              "INSERT",
              "Add records"
            ],
            [
              "SELECT",
              "Retrieve records"
            ],
            [
              "UPDATE",
              "Modify records"
            ],
            [
              "DELETE",
              "Remove records"
            ],
            [
              "DROP",
              "Delete database/table"
            ],
            [
              "ALTER",
              "Modify table structure"
            ]
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
      "id": "mysql-database-ops",
      "title": "MySQL Database Operations",
      "category": "Sub Commands",
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
          "headers": [
            "Student_ID",
            "Name",
            "Course"
          ],
          "rows": [
            [
              "101",
              "Ravi",
              "Python"
            ],
            [
              "102",
              "Anu",
              "Java"
            ]
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
          "headers": [
            "Term",
            "Meaning"
          ],
          "rows": [
            [
              "Table",
              "Collection of data"
            ],
            [
              "Row",
              "Single horizontal data entry"
            ],
            [
              "Column",
              "Vertical field/attribute"
            ],
            [
              "Record",
              "Another name for row"
            ],
            [
              "Primary Key",
              "Unique identifier"
            ],
            [
              "Foreign Key",
              "Connects two tables"
            ]
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
          "headers": [
            "Constraint",
            "Allows NULL",
            "Allows Duplicates",
            "Purpose"
          ],
          "rows": [
            [
              "DEFAULT",
              "Yes",
              "Yes",
              "Stores default value"
            ],
            [
              "NOT NULL",
              "No",
              "Yes",
              "Prevents NULL values"
            ],
            [
              "UNIQUE",
              "Yes",
              "No",
              "Stores unique values"
            ],
            [
              "PRIMARY KEY",
              "No",
              "No",
              "Uniquely identifies rows"
            ],
            [
              "AUTO_INCREMENT",
              "No",
              "No",
              "Automatically increments values"
            ],
            [
              "CHECK",
              "Depends",
              "Depends",
              "Applies conditions"
            ],
            [
              "FOREIGN KEY",
              "Yes",
              "Yes",
              "Creates relationship between tables"
            ]
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
          "headers": [
            "Constraint",
            "Used In"
          ],
          "rows": [
            [
              "NOT NULL",
              "emp_name, dept_name"
            ],
            [
              "UNIQUE",
              "email, dept_name"
            ],
            [
              "PRIMARY KEY",
              "emp_id, dept_id"
            ],
            [
              "FOREIGN KEY",
              "dept_id"
            ],
            [
              "DEFAULT",
              "gender, location"
            ],
            [
              "CHECK",
              "age, salary"
            ],
            [
              "AUTO_INCREMENT",
              "emp_id, dept_id"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Insert Data into Departments:\n\nINSERT INTO departments (dept_name, location) VALUES\n('HR', 'Vijayawada'),\n('IT', 'Hyderabad'),\n('Finance', 'Bangalore');\n\n------------------------------------------------"
        },
        {
          "type": "table",
          "headers": [
            "dept_id",
            "dept_name",
            "location"
          ],
          "rows": [
            [
              "1",
              "HR",
              "Vijayawada"
            ],
            [
              "2",
              "IT",
              "Hyderabad"
            ],
            [
              "3",
              "Finance",
              "Bangalore"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Insert Data into Employees:\n\nINSERT INTO employees(emp_name, email, age, salary, gender, dept_id) VALUES\n('Asha', 'asha@gmail.com', 22, 35000, 'Female', 1),\n('Rahul', 'rahul@gmail.com', 25, 50000, 'Male', 2),\n('Kiran', 'kiran@gmail.com', 28, 45000, DEFAULT, 3);\n\n------------------------------------------------"
        },
        {
          "type": "table",
          "headers": [
            "emp_id",
            "emp_name",
            "email",
            "age",
            "salary",
            "gender",
            "dept_id"
          ],
          "rows": [
            [
              "1",
              "Asha",
              "asha@gmail.com",
              "22",
              "35000",
              "Female",
              "1"
            ],
            [
              "2",
              "Rahul",
              "rahul@gmail.com",
              "25",
              "50000",
              "Male",
              "2"
            ],
            [
              "3",
              "Kiran",
              "kiran@gmail.com",
              "28",
              "45000",
              "Not Specified",
              "3"
            ]
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
          "headers": [
            "Classification",
            "Key Property",
            "Example/Detail"
          ],
          "rows": [
            [
              "Degree",
              "Number of columns",
              "Binary (2), Ternary (3)"
            ],
            [
              "Cardinality",
              "Number of rows",
              "Empty vs Non-empty"
            ],
            [
              "Relationships",
              "1:1, 1:M, M:1, M:N",
              "Person ↔ Passport"
            ],
            [
              "Keys",
              "Primary Key presence",
              "Strong vs Weak"
            ],
            [
              "Normalization",
              "Design quality",
              "1NF, 2NF, 3NF"
            ],
            [
              "Participation",
              "Mandatory/Optional",
              "Total vs Partial"
            ]
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
          "headers": [
            "Relation Type",
            "Number of Columns (Degree)"
          ],
          "rows": [
            [
              "Unary Relation",
              "1"
            ],
            [
              "Binary Relation",
              "2"
            ],
            [
              "Ternary Relation",
              "3"
            ],
            [
              "n-ary Relation",
              "n"
            ]
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
          "headers": [
            "Relation Type",
            "Description"
          ],
          "rows": [
            [
              "Empty Relation",
              "Contains no rows (Cardinality = 0)"
            ],
            [
              "Non-empty Relation",
              "Contains one or more rows (Cardinality > 0)"
            ]
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
          "headers": [
            "Relationship",
            "Meaning",
            "Example"
          ],
          "rows": [
            [
              "One-to-One",
              "One record ↔ One record",
              "Person ↔ Passport"
            ],
            [
              "One-to-Many",
              "One record ↔ Many records",
              "Department → Employees"
            ],
            [
              "Many-to-One",
              "Many records ↔ One record",
              "Employees → Manager"
            ],
            [
              "Many-to-Many",
              "Many records ↔ Many records",
              "Students ↔ Courses"
            ]
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
          "headers": [
            "Relation Type",
            "Description"
          ],
          "rows": [
            [
              "Strong Relation",
              "Has primary key and exists independently"
            ],
            [
              "Weak Relation",
              "Depends on another relation for existence"
            ]
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
      "id": "mysql-keys",
      "title": "Keys in MySQL / DBMS",
      "category": "Basic",
      "definition": "Keys are used to uniquely identify records in a table and create relationships between tables, ensuring data integrity and efficient retrieval.",
      "sections": [
        {
          "type": "text",
          "value": "1️⃣ Primary Key\n\nA Primary Key is a column (or combination of columns) that uniquely identifies each row in a table.\n\nFeatures:\n• Unique values only\n• Cannot contain NULL\n• One primary key per table"
        },
        {
          "type": "text",
          "value": "Example Table: Students"
        },
        {
          "type": "table",
          "headers": [
            "student_id",
            "name",
            "city"
          ],
          "rows": [
            [
              "101",
              "Ram",
              "Delhi"
            ],
            [
              "102",
              "Ravi",
              "Mumbai"
            ],
            [
              "103",
              "Sita",
              "Chennai"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Here, student_id is the Primary Key."
        },
        {
          "type": "code",
          "value": "CREATE TABLE Students (\n    student_id INT PRIMARY KEY,\n    name VARCHAR(50),\n    city VARCHAR(50)\n);"
        },
        {
          "type": "text",
          "value": "2️⃣ Foreign Key\n\nA Foreign Key is a column that creates a relationship between two tables. It refers to the Primary Key in another table."
        },
        {
          "type": "text",
          "value": "Example\nParent Table: Departments"
        },
        {
          "type": "table",
          "headers": [
            "dept_id",
            "dept_name"
          ],
          "rows": [
            [
              "1",
              "HR"
            ],
            [
              "2",
              "IT"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Child Table: Employees"
        },
        {
          "type": "table",
          "headers": [
            "emp_id",
            "name",
            "dept_id"
          ],
          "rows": [
            [
              "101",
              "Ram",
              "1"
            ],
            [
              "102",
              "Ravi",
              "2"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Here, dept_id in Employees is a Foreign Key."
        },
        {
          "type": "code",
          "value": "CREATE TABLE Departments (\n    dept_id INT PRIMARY KEY,\n    dept_name VARCHAR(50)\n);\n\nCREATE TABLE Employees (\n    emp_id INT PRIMARY KEY,\n    name VARCHAR(50),\n    dept_id INT,\n    FOREIGN KEY (dept_id) REFERENCES Departments(dept_id)\n);"
        },
        {
          "type": "text",
          "value": "3️⃣ Candidate Key\n\nA Candidate Key is a column that can uniquely identify rows. A table can have multiple candidate keys. One candidate key becomes the Primary Key."
        },
        {
          "type": "text",
          "value": "Example Table"
        },
        {
          "type": "table",
          "headers": [
            "student_id",
            "email",
            "phone"
          ],
          "rows": [
            [
              "101",
              "ram@gmail.com",
              "9876543210"
            ],
            [
              "102",
              "ravi@gmail.com",
              "9876543211"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Possible Candidate Keys:\n• student_id\n• email\n• phone\n\nAll are unique. One of them is selected as the Primary Key."
        },
        {
          "type": "text",
          "value": "4️⃣ Composite Key\n\nA Composite Key is a key made using two or more columns together. Used when a single column cannot uniquely identify rows."
        },
        {
          "type": "text",
          "value": "Example Table: Student_Courses"
        },
        {
          "type": "table",
          "headers": [
            "student_id",
            "course_id",
            "marks"
          ],
          "rows": [
            [
              "101",
              "C1",
              "85"
            ],
            [
              "101",
              "C2",
              "90"
            ],
            [
              "102",
              "C1",
              "88"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Here:\n• student_id alone → not unique\n• course_id alone → not unique\n• Combination of both → unique\n\nSo (student_id, course_id) is a Composite Key."
        },
        {
          "type": "code",
          "value": "CREATE TABLE Student_Courses (\n    student_id INT,\n    course_id VARCHAR(10),\n    marks INT,\n    PRIMARY KEY (student_id, course_id)\n);"
        },
        {
          "type": "text",
          "value": "5️⃣ Super Key\n\nA Super Key is any column or set of columns that uniquely identifies rows. It may contain extra unnecessary columns."
        },
        {
          "type": "text",
          "value": "Example Table"
        },
        {
          "type": "table",
          "headers": [
            "student_id",
            "email",
            "name"
          ],
          "rows": [
            [
              "101",
              "ram@gmail.com",
              "Ram"
            ],
            [
              "102",
              "ravi@gmail.com",
              "Ravi"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Possible Super Keys:\n• student_id\n• email\n• (student_id, name)\n• (email, name)\n\nBecause all combinations uniquely identify rows."
        },
        {
          "type": "text",
          "value": "Difference Between Keys"
        },
        {
          "type": "table",
          "headers": [
            "Key Type",
            "Unique",
            "NULL Allowed",
            "Multiple Allowed"
          ],
          "rows": [
            [
              "Primary Key",
              "Yes",
              "No",
              "No"
            ],
            [
              "Foreign Key",
              "No",
              "Yes",
              "Yes"
            ],
            [
              "Candidate Key",
              "Yes",
              "No",
              "Yes"
            ],
            [
              "Composite Key",
              "Yes",
              "Depends",
              "Yes"
            ],
            [
              "Super Key",
              "Yes",
              "Depends",
              "Yes"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Simple Real-Time Example: College Database"
        },
        {
          "type": "table",
          "headers": [
            "Key",
            "Example"
          ],
          "rows": [
            [
              "Primary Key",
              "Student ID"
            ],
            [
              "Foreign Key",
              "Department ID in Student Table"
            ],
            [
              "Candidate Key",
              "Email, Phone Number"
            ],
            [
              "Composite Key",
              "(Student ID + Course ID)"
            ],
            [
              "Super Key",
              "Student ID + Name"
            ]
          ]
        }
      ],
      "questions": [
        {
          "question": "What is the main difference between a Primary Key and a Foreign Key?",
          "answer": "A Primary Key uniquely identifies a row within its own table and cannot be NULL. A Foreign Key is a field that links to a Primary Key in another table to create a relationship."
        },
        {
          "question": "Can a table have more than one Primary Key?",
          "answer": "No, a table can have only one Primary Key. However, a Primary Key can consist of multiple columns (Composite Key)."
        },
        {
          "question": "What is a Candidate Key?",
          "answer": "A Candidate Key is a set of one or more columns that can uniquely identify a record in a table. From multiple candidate keys, one is chosen as the Primary Key."
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
          "headers": [
            "Total Participation",
            "Partial Participation"
          ],
          "rows": [
            [
              "Participation is compulsory",
              "Participation is optional"
            ],
            [
              "Every record must participate",
              "Some records may not participate"
            ],
            [
              "Mandatory relationship",
              "Optional relationship"
            ]
          ]
        },
        {
          "type": "table",
          "headers": [
            "Relationship",
            "Participation Type"
          ],
          "rows": [
            [
              "Employee → Department",
              "Total Participation"
            ],
            [
              "Customer → Loan",
              "Partial Participation"
            ],
            [
              "Student → Course",
              "Partial Participation"
            ],
            [
              "Citizen → Aadhaar",
              "Total Participation"
            ]
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
      "id": "mysql-order-execution",
      "title": "SQL Order of Execution",
      "category": "Basic",
      "definition": "The logical execution order of a SQL query is the sequence in which the database engine processes different clauses. It differs from the syntax order (how we write the query) and is crucial for understanding why certain aliases or conditions work while others do not.",
      "sections": [
        {
          "type": "text",
          "value": "🧠 Logical Execution Order of SQL\n\nEven though you write SELECT first, the database processes the query in this sequence:\n\n1. FROM – choose the tables\n2. JOIN – combine tables (if any)\n3. WHERE – filter rows\n4. GROUP BY – group rows\n5. HAVING – filter groups\n6. SELECT – choose columns / expressions\n7. DISTINCT – remove duplicates\n8. ORDER BY – sort results\n9. LIMIT / OFFSET – restrict output"
        },
        {
          "type": "text",
          "value": "🔍 Example Query"
        },
        {
          "type": "code",
          "value": "SELECT department, COUNT(*) AS total\nFROM employees\nWHERE salary > 50000\nGROUP BY department\nHAVING COUNT(*) > 5\nORDER BY total DESC;"
        },
        {
          "type": "text",
          "value": "⚙️ How it actually runs:\n1. FROM employees → get the table\n2. WHERE salary > 50000 → filter rows\n3. GROUP BY department → group rows\n4. HAVING COUNT(*) > 5 → filter groups\n5. SELECT department, COUNT(*) → compute output\n6. ORDER BY total DESC → sort result"
        },
        {
          "type": "text",
          "value": "⚠️ Key Points:\n• You cannot use aliases in WHERE (because SELECT happens later).\n• You can use aliases in ORDER BY (because it runs after SELECT).\n• HAVING is used for aggregated conditions, while WHERE is for row-level conditions."
        },
        {
          "type": "text",
          "value": "✍️ SQL Writing Order (Syntax Order)\n\nThis is the order in which we write an SQL query:\n\n1. SELECT\n2. FROM\n3. JOIN\n4. WHERE\n5. GROUP BY\n6. HAVING\n7. ORDER BY\n8. LIMIT"
        },
        {
          "type": "text",
          "value": "📌 Full Syntax Structure"
        },
        {
          "type": "code",
          "value": "SELECT column_names\nFROM table_name\nJOIN table_name\nON condition\nWHERE condition\nGROUP BY column_name\nHAVING condition\nORDER BY column_name ASC|DESC\nLIMIT number;"
        },
        {
          "type": "text",
          "value": "🧠 Writing Order vs Execution Order"
        },
        {
          "type": "table",
          "headers": [
            "Writing Order",
            "Execution Order"
          ],
          "rows": [
            [
              "SELECT",
              "FROM"
            ],
            [
              "FROM",
              "WHERE"
            ],
            [
              "WHERE",
              "GROUP BY"
            ],
            [
              "GROUP BY",
              "HAVING"
            ],
            [
              "HAVING",
              "SELECT"
            ],
            [
              "ORDER BY",
              "ORDER BY"
            ],
            [
              "LIMIT",
              "LIMIT"
            ]
          ]
        },
        {
          "type": "text",
          "value": "🔥 Easy Trick to Remember\n\n✍️ Writing Order: SFWGHOL (Select From Where Group Having Order Limit)\n\n⚙️ Execution Order: FWGHOSL (From Where Group Having Select Order Limit)"
        },
        {
          "type": "text",
          "value": "📌 Simple Meaning of Each Clause"
        },
        {
          "type": "table",
          "headers": [
            "Clause",
            "Purpose"
          ],
          "rows": [
            [
              "SELECT",
              "Choose columns"
            ],
            [
              "FROM",
              "Choose table"
            ],
            [
              "WHERE",
              "Filter rows"
            ],
            [
              "GROUP BY",
              "Create groups"
            ],
            [
              "HAVING",
              "Filter groups"
            ],
            [
              "ORDER BY",
              "Sort data"
            ],
            [
              "LIMIT",
              "Restrict rows"
            ]
          ]
        }
      ],
      "questions": [
        {
          "question": "Why can't we use column aliases in the WHERE clause?",
          "answer": "Because the WHERE clause is executed before the SELECT clause. The database engine hasn't processed the aliases defined in SELECT yet when it evaluates the WHERE condition."
        },
        {
          "question": "Can we use aliases in the ORDER BY clause?",
          "answer": "Yes, because the ORDER BY clause is executed after the SELECT clause, so the database engine is aware of the aliases at that stage."
        },
        {
          "question": "What is the difference between WHERE and HAVING in terms of execution order?",
          "answer": "WHERE is executed before the data is grouped (GROUP BY), so it filters individual rows. HAVING is executed after the data is grouped, so it filters the resulting groups based on aggregate functions."
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
          "headers": [
            "Normalized Relation",
            "Denormalized Relation"
          ],
          "rows": [
            [
              "Reduces redundancy",
              "Adds redundancy"
            ],
            [
              "Uses multiple related tables",
              "Combines data into fewer tables"
            ],
            [
              "Slower queries due to joins",
              "Faster queries"
            ],
            [
              "Better consistency",
              "Better performance"
            ]
          ]
        },
        {
          "type": "table",
          "headers": [
            "Used In",
            "Type"
          ],
          "rows": [
            [
              "Banking Systems (OLTP)",
              "Normalized"
            ],
            [
              "Data Warehouses (OLAP)",
              "Denormalized"
            ],
            [
              "Reporting Systems",
              "Denormalized"
            ]
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
          "headers": [
            "Normal Form",
            "Rule",
            "Removes"
          ],
          "rows": [
            [
              "1NF",
              "Atomic values only",
              "Repeating groups"
            ],
            [
              "2NF",
              "Remove partial dependency",
              "Partial functional dependency"
            ],
            [
              "3NF",
              "Remove transitive dependency",
              "Transitive dependency"
            ]
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
      "id": "mysql-denormalization-detailed",
      "title": "Denormalized Relations in DBMS",
      "category": "Basic",
      "definition": "A Denormalized Relation is a table that intentionally contains redundant (duplicate) data to improve query performance and reduce the number of joins.",
      "sections": [
        {
          "type": "text",
          "value": "Denormalized Relations in DBMS\n\nDefinition:\nA Denormalized Relation is a table that intentionally contains redundant (duplicate) data to improve query performance and reduce the number of joins.\nIt is the opposite of Normalization.\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "Why Denormalization is Used?\n• Normalization reduces redundancy but may require many joins.\n• Sometimes joins become slow in large databases.\n• So, developers combine data into fewer tables to make data retrieval faster.\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "Main Purpose:\n✅ Faster Read Operations\n✅ Fewer JOINs\n✅ Better Performance for Reports & Analytics\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "Disadvantages:\n❌ Data Redundancy\n❌ More Storage Needed\n❌ Data Inconsistency Risk\n❌ Updates become difficult\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "Example Scenario:\n1. Normalized Tables:\nStudents (student_id, student_name)\nCourses (course_id, course_name)\nEnrollments (student_id, course_id)\n\nTo get full details, we need multiple JOINs.\n\n2. Denormalized Table:\nStudent_Course (student_id, student_name, course_id, course_name)\nNow data is already combined, no JOIN needed.\n\n------------------------------------------------"
        },
        {
          "type": "table",
          "headers": ["Advantage", "Explanation"],
          "rows": [
            ["Faster Queries", "No complex joins"],
            ["Better Reporting", "Easy to generate reports"],
            ["Reduced Query Complexity", "Simple SELECT statements"],
            ["Useful in Data Warehouses", "Analytics become fast"]
          ]
        },
        {
          "type": "table",
          "headers": ["Disadvantage", "Explanation"],
          "rows": [
            ["Data Redundancy", "Same data repeated"],
            ["Update Problems", "Need to update in many places"],
            ["More Storage", "Duplicate data uses memory"],
            ["Inconsistency", "Different copies may mismatch"]
          ]
        },
        {
          "type": "text",
          "value": "Real-Time Example: E-commerce Website\n\nNormalized:\nCustomers, Orders, Products tables (requires many joins for history).\n\nDenormalized:\nOrder table storing customer_name and product_name directly for fast display.\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "When to Use Denormalization?\n✅ Read operations are very frequent\n✅ Performance is more important than storage\n✅ Reporting and Analytics systems\n✅ Data warehouses\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "When NOT to Use?\n❌ Frequent updates happen\n❌ Data consistency is critical\n❌ Storage space must be minimized\n\n------------------------------------------------"
        },
        {
          "type": "table",
          "headers": ["Normalization", "Denormalization"],
          "rows": [
            ["Removes redundancy", "Adds redundancy"],
            ["More joins", "Fewer joins"],
            ["Better consistency", "Better performance"],
            ["Less storage", "More storage"],
            ["Slower reads", "Faster reads"]
          ]
        },
        {
          "type": "text",
          "value": "Practical Example with Output:\nNormalized Tables:\n\nStudents: 1-Ravi, 2-Priya\nCourses: 101-Python, 102-MySQL\nEnrollments: (1, 101), (2, 102)\n\nQuery with JOIN Output:\nstudent_name | course_name\nRavi | Python\nPriya | MySQL\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "Denormalized student_course Table:\n\nstudent_id | student_name | course_id | course_name\n1 | Ravi | 101 | Python\n2 | Priya | 102 | MySQL\n\nNo JOIN required → Faster retrieval.\n\n------------------------------------------------"
        }
      ],
      "questions": [
        {
          "question": "What is the primary trade-off when using denormalization?",
          "answer": "The primary trade-off is improved read performance and reduced query complexity at the cost of increased data redundancy, higher storage requirements, and the risk of data inconsistency."
        },
        {
          "question": "Why is denormalization preferred in Data Warehouses?",
          "answer": "Data Warehouses focus on analytics and reporting where complex queries are frequent. Denormalization reduces the need for expensive JOIN operations on large datasets, significantly speeding up performance."
        }
      ]
    },
    {
      "id": "sql-command-types",
      "title": "SQL Command Types",
      "category": "Sub Commands",
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
          "headers": [
            "Sub-language",
            "Full Form",
            "Purpose"
          ],
          "rows": [
            [
              "DDL",
              "Data Definition Language",
              "Structure of database"
            ],
            [
              "DML",
              "Data Manipulation Language",
              "Insert/update/delete data"
            ],
            [
              "DQL",
              "Data Query Language",
              "Retrieve data"
            ],
            [
              "DCL",
              "Data Control Language",
              "Permissions/security"
            ],
            [
              "TCL",
              "Transaction Control Language",
              "Manage transactions"
            ]
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
      "id": "mysql-crud-operations",
      "title": "CRUD Operations in MySQL",
      "category": "Sub Commands",
      "definition": "CRUD stands for Create, Read, Update, and Delete. These are the four basic actions performed on data in a database.",
      "sections": [
        {
          "type": "table",
          "headers": [
            "Operation",
            "Meaning",
            "MySQL Command"
          ],
          "rows": [
            [
              "C",
              "Create",
              "INSERT"
            ],
            [
              "R",
              "Read",
              "SELECT"
            ],
            [
              "U",
              "Update",
              "UPDATE"
            ],
            [
              "D",
              "Delete",
              "DELETE"
            ]
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
          "headers": [
            "CRUD",
            "SQL Command",
            "Purpose"
          ],
          "rows": [
            [
              "Create",
              "INSERT",
              "Add new data"
            ],
            [
              "Read",
              "SELECT",
              "View data"
            ],
            [
              "Update",
              "UPDATE",
              "Modify data"
            ],
            [
              "Delete",
              "DELETE",
              "Remove data"
            ]
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
      "id": "sql-ddl-commands-practical",
      "title": "SQL DDL Commands with Employee Table",
      "category": "Sub Commands",
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
          "headers": [
            "Command",
            "Purpose"
          ],
          "rows": [
            [
              "CREATE DATABASE",
              "Create database"
            ],
            [
              "CREATE TABLE",
              "Create table"
            ],
            [
              "INSERT",
              "Insert records"
            ],
            [
              "SELECT",
              "View data"
            ],
            [
              "ALTER ADD",
              "Add column"
            ],
            [
              "ALTER DROP",
              "Delete column"
            ],
            [
              "ALTER MODIFY",
              "Modify datatype"
            ],
            [
              "ALTER CHANGE",
              "Rename/change column"
            ],
            [
              "RENAME TABLE",
              "Rename table"
            ],
            [
              "TRUNCATE",
              "Delete all rows only"
            ],
            [
              "DROP TABLE",
              "Delete table completely"
            ],
            [
              "DROP DATABASE",
              "Delete database completely"
            ]
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
      "category": "Sub Commands",
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
          "headers": [
            "Command",
            "Purpose"
          ],
          "rows": [
            [
              "ADD",
              "Add new column"
            ],
            [
              "DROP",
              "Delete column"
            ],
            [
              "RENAME",
              "Rename column only"
            ],
            [
              "MODIFY",
              "Change datatype only"
            ],
            [
              "CHANGE",
              "Rename + datatype change"
            ]
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
      "id": "mysql-alter-table-diff",
      "title": "RENAME vs MODIFY vs CHANGE",
      "category": "Sub Commands",
      "definition": "A detailed comparison of RENAME, MODIFY, and CHANGE commands used with ALTER TABLE to modify column structure in MySQL.",
      "sections": [
        {
          "type": "text",
          "value": "Difference Between RENAME, MODIFY, and CHANGE in MySQL\n\nThese commands are used with ALTER TABLE to change column structure in a table.\n\n------------------------------------------------"
        },
        {
          "type": "table",
          "headers": [
            "Command",
            "Purpose"
          ],
          "rows": [
            [
              "RENAME COLUMN",
              "Changes only the column name"
            ],
            [
              "MODIFY COLUMN",
              "Changes only the datatype or constraints"
            ],
            [
              "CHANGE COLUMN",
              "Changes both column name and datatype"
            ]
          ]
        },
        {
          "type": "text",
          "value": "1. RENAME COLUMN\nUsed to rename a column without changing its datatype.\n\nSyntax:\nALTER TABLE table_name RENAME COLUMN old_column_name TO new_column_name;\n\nExample:\nRename emp_name to employee_name\nALTER TABLE employees RENAME COLUMN emp_name TO employee_name;\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "Before Table:"
        },
        {
          "type": "table",
          "headers": [
            "emp_id",
            "emp_name"
          ],
          "rows": [
            [
              "101",
              "Ravi"
            ]
          ]
        },
        {
          "type": "text",
          "value": "After Table:"
        },
        {
          "type": "table",
          "headers": [
            "emp_id",
            "employee_name"
          ],
          "rows": [
            [
              "101",
              "Ravi"
            ]
          ]
        },
        {
          "type": "text",
          "value": "2. MODIFY COLUMN\nUsed to change the datatype, size, or constraints of a column.\n\nSyntax:\nALTER TABLE table_name MODIFY COLUMN column_name new_datatype;\n\nExample:\nChange salary datatype from INT to DECIMAL\nALTER TABLE employees MODIFY COLUMN salary DECIMAL(10,2);\n\n------------------------------------------------"
        },
        {
          "type": "table",
          "headers": [
            "Status",
            "Column Definition"
          ],
          "rows": [
            [
              "Before",
              "salary INT"
            ],
            [
              "After",
              "salary DECIMAL(10,2)"
            ]
          ]
        },
        {
          "type": "text",
          "value": "You can also add constraints during modification:\nALTER TABLE employees MODIFY COLUMN salary DECIMAL(10,2) NOT NULL;\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "3. CHANGE COLUMN\nUsed to rename the column and also modify its datatype at the same time.\n\nSyntax:\nALTER TABLE table_name CHANGE COLUMN old_column_name new_column_name new_datatype;\n\nExample:\nRename name to full_name and change datatype from VARCHAR(50) to VARCHAR(100).\nALTER TABLE employees CHANGE COLUMN name full_name VARCHAR(100);\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "Before:\nName: name, Datatype: VARCHAR(50), Value: Ravi\n\nAfter:\nName: full_name, Datatype: VARCHAR(100), Value: Ravi\n\n------------------------------------------------"
        },
        {
          "type": "table",
          "headers": [
            "Feature",
            "RENAME",
            "MODIFY",
            "CHANGE"
          ],
          "rows": [
            [
              "Rename column",
              "✅",
              "❌",
              "✅"
            ],
            [
              "Change datatype",
              "❌",
              "✅",
              "✅"
            ],
            [
              "Change constraints",
              "❌",
              "✅",
              "✅"
            ],
            [
              "Requires old & new name",
              "❌",
              "❌",
              "✅"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Easy Memory Trick:\n• RENAME → Name only\n• MODIFY → Datatype only\n• CHANGE → Name + Datatype together\n\n------------------------------------------------"
        }
      ],
      "questions": [
        {
          "question": "Which command is used if you only want to change the size of a VARCHAR column?",
          "answer": "The MODIFY COLUMN command is used to change the datatype or size without affecting the column name."
        },
        {
          "question": "When would you choose CHANGE over RENAME or MODIFY?",
          "answer": "You would use CHANGE when you need to perform both renaming and structural modification (like datatype change) in a single statement."
        }
      ]
    },
    {
      "id": "sql-delete-truncate-drop",
      "title": "DELETE vs TRUNCATE vs DROP",
      "category": "Sub Commands",
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
          "headers": [
            "Feature",
            "DELETE",
            "TRUNCATE",
            "DROP"
          ],
          "rows": [
            [
              "Purpose",
              "Deletes rows",
              "Removes all rows",
              "Deletes entire table"
            ],
            [
              "Table Structure",
              "Remains",
              "Remains",
              "Removed"
            ],
            [
              "Data Removed",
              "Selected or all rows",
              "All rows only",
              "Entire table + data"
            ],
            [
              "WHERE Condition",
              "Allowed",
              "Not allowed",
              "Not allowed"
            ],
            [
              "Speed",
              "Slower",
              "Faster",
              "Fastest"
            ],
            [
              "Rollback Possible",
              "Yes (in transactions)",
              "Usually No",
              "No"
            ],
            [
              "Auto Increment Reset",
              "No",
              "Yes",
              "Table removed completely"
            ],
            [
              "Command Type",
              "DML",
              "DDL",
              "DDL"
            ]
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
      "id": "mysql-dml",
      "title": "What is DML?",
      "category": "Sub Commands",
      "definition": "DML stands for Data Manipulation Language. It is used to manage data inside tables by adding, viewing, modifying, or removing records.",
      "sections": [
        {
          "type": "text",
          "value": "DML Commands:\n• INSERT → Add data\n• SELECT → View data\n• UPDATE → Modify data\n• DELETE → Remove data"
        },
        {
          "type": "text",
          "value": "Example Table\nCreate Table"
        },
        {
          "type": "code",
          "value": "CREATE TABLE employees (\n    emp_id INT,\n    emp_name VARCHAR(30),\n    department VARCHAR(20),\n    salary INT\n);"
        },
        {
          "type": "text",
          "value": "Table Structure"
        },
        {
          "type": "table",
          "headers": [
            "emp_id",
            "emp_name",
            "department",
            "salary"
          ],
          "rows": [
            [
              "101",
              "Ravi",
              "HR",
              "25000"
            ],
            [
              "102",
              "Priya",
              "IT",
              "40000"
            ],
            [
              "103",
              "Arun",
              "Sales",
              "30000"
            ],
            [
              "104",
              "Sneha",
              "IT",
              "45000"
            ]
          ]
        },
        {
          "type": "text",
          "value": "1️⃣ INSERT Command\nPurpose: Used to insert/add rows into a table.\n\nSyntax:\nINSERT INTO table_name\nVALUES(value1, value2, value3);"
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "INSERT INTO employees\nVALUES\n(101, 'Ravi', 'HR', 25000),\n(102, 'Priya', 'IT', 40000),\n(103, 'Arun', 'Sales', 30000),\n(104, 'Sneha', 'IT', 45000);"
        },
        {
          "type": "output",
          "value": "Query OK, 4 rows affected"
        },
        {
          "type": "text",
          "value": "2️⃣ SELECT Command\nPurpose: Used to display/view data from a table.\n\nExample:"
        },
        {
          "type": "code",
          "value": "SELECT * FROM employees;"
        },
        {
          "type": "text",
          "value": "Output"
        },
        {
          "type": "table",
          "headers": [
            "emp_id",
            "emp_name",
            "department",
            "salary"
          ],
          "rows": [
            [
              "101",
              "Ravi",
              "HR",
              "25000"
            ],
            [
              "102",
              "Priya",
              "IT",
              "40000"
            ],
            [
              "103",
              "Arun",
              "Sales",
              "30000"
            ],
            [
              "104",
              "Sneha",
              "IT",
              "45000"
            ]
          ]
        },
        {
          "type": "text",
          "value": "3️⃣ UPDATE Command\nPurpose: Used to modify existing data.\n\nSyntax:\nUPDATE table_name\nSET column_name = value\nWHERE condition;"
        },
        {
          "type": "text",
          "value": "Example: Increase Ravi's salary to 28000."
        },
        {
          "type": "code",
          "value": "UPDATE employees\nSET salary = 28000\nWHERE emp_name = 'Ravi';"
        },
        {
          "type": "output",
          "value": "Query OK, 1 row affected"
        },
        {
          "type": "text",
          "value": "Check Updated Table"
        },
        {
          "type": "code",
          "value": "SELECT * FROM employees;"
        },
        {
          "type": "text",
          "value": "Output"
        },
        {
          "type": "table",
          "headers": [
            "emp_id",
            "emp_name",
            "department",
            "salary"
          ],
          "rows": [
            [
              "101",
              "Ravi",
              "HR",
              "28000"
            ],
            [
              "102",
              "Priya",
              "IT",
              "40000"
            ],
            [
              "103",
              "Arun",
              "Sales",
              "30000"
            ],
            [
              "104",
              "Sneha",
              "IT",
              "45000"
            ]
          ]
        },
        {
          "type": "text",
          "value": "4️⃣ DELETE Command\nPurpose: Used to delete rows from a table.\n\nSyntax:\nDELETE FROM table_name\nWHERE condition;"
        },
        {
          "type": "text",
          "value": "Example: Delete employee Arun."
        },
        {
          "type": "code",
          "value": "DELETE FROM employees\nWHERE emp_id = 103;"
        },
        {
          "type": "output",
          "value": "Query OK, 1 row affected"
        },
        {
          "type": "text",
          "value": "Check Table"
        },
        {
          "type": "code",
          "value": "SELECT * FROM employees;"
        },
        {
          "type": "text",
          "value": "Output"
        },
        {
          "type": "table",
          "headers": [
            "emp_id",
            "emp_name",
            "department",
            "salary"
          ],
          "rows": [
            [
              "101",
              "Ravi",
              "HR",
              "28000"
            ],
            [
              "102",
              "Priya",
              "IT",
              "40000"
            ],
            [
              "104",
              "Sneha",
              "IT",
              "45000"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Important Notes\n\nWithout WHERE in UPDATE\nUPDATE employees\nSET salary = 50000;\n⚠️ Updates all rows.\n\nWithout WHERE in DELETE\nDELETE FROM employees;\n⚠️ Deletes all rows from table."
        },
        {
          "type": "text",
          "value": "Quick Summary"
        },
        {
          "type": "table",
          "headers": [
            "Command",
            "Purpose"
          ],
          "rows": [
            [
              "INSERT",
              "Add data"
            ],
            [
              "SELECT",
              "View data"
            ],
            [
              "UPDATE",
              "Modify data"
            ],
            [
              "DELETE",
              "Remove data"
            ]
          ]
        }
      ],
      "questions": [
        {
          "question": "What is DML in SQL?",
          "answer": "DML (Data Manipulation Language) is a sub-language of SQL used for managing and manipulating data within existing database tables."
        },
        {
          "question": "What happens if you run an UPDATE command without a WHERE clause?",
          "answer": "If you omit the WHERE clause in an UPDATE statement, all rows in the table will be updated with the new value."
        },
        {
          "question": "Which DML command is used to remove specific records from a table?",
          "answer": "The DELETE command combined with a WHERE clause is used to remove specific records."
        }
      ]
    },
    {
      "id": "sql-dql-select",
      "title": "DQL (Data Query Language) - SELECT",
      "category": "Sub Commands",
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
      "id": "mysql-dcl-commands",
      "title": "DCL (Data Control Language)",
      "category": "Sub Commands",
      "definition": "DCL is used to control user permissions and access in a database, allowing administrators to manage who can access and manipulate data.",
      "sections": [
        {
          "type": "text",
          "value": "DCL (Data Control Language)\nDCL is used to control user permissions and access in a database.\nIt helps the database administrator decide:\n• Who can access the database\n• What operations users can perform\n• Which tables users can use\n\n------------------------------------------------"
        },
        {
          "type": "table",
          "headers": [
            "Command",
            "Purpose"
          ],
          "rows": [
            [
              "GRANT",
              "Gives privileges to users"
            ],
            [
              "REVOKE",
              "Removes privileges from users"
            ]
          ]
        },
        {
          "type": "text",
          "value": "1. GRANT Command\nThe GRANT command is used to give permissions to a user.\n\nSyntax:\nGRANT privileges ON table_name TO user_name;\n\nExample:\nGRANT SELECT, INSERT ON employees TO user1;\n\nExplanation:\n• SELECT → Allows viewing data\n• INSERT → Allows adding records\n• User user1 can now read and insert data into the employees table.\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "2. REVOKE Command\nThe REVOKE command is used to remove permissions from a user.\n\nSyntax:\nREVOKE privileges ON table_name FROM user_name;\n\nExample:\nREVOKE INSERT ON employees FROM user1;\n\nExplanation:\n• Removes the INSERT permission from user1\n• The user can still use SELECT if it was not revoked.\n\n------------------------------------------------"
        },
        {
          "type": "table",
          "headers": [
            "Privilege",
            "Meaning"
          ],
          "rows": [
            [
              "SELECT",
              "Read data"
            ],
            [
              "INSERT",
              "Add new records"
            ],
            [
              "UPDATE",
              "Modify records"
            ],
            [
              "DELETE",
              "Remove records"
            ],
            [
              "ALL PRIVILEGES",
              "Gives all permissions"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Example with ALL PRIVILEGES:\n\nGrant All Permissions:\nGRANT ALL PRIVILEGES ON employees TO admin1;\n\nRemove All Permissions:\nREVOKE ALL PRIVILEGES ON employees FROM admin1;\n\n------------------------------------------------"
        },
        {
          "type": "table",
          "headers": [
            "GRANT",
            "REVOKE"
          ],
          "rows": [
            [
              "Gives permissions",
              "Removes permissions"
            ],
            [
              "Allows access",
              "Denies access"
            ],
            [
              "Used to authorize users",
              "Used to cancel authorization"
            ]
          ]
        }
      ],
      "questions": [
        {
          "question": "What is the main purpose of DCL in MySQL?",
          "answer": "DCL is used to manage database security by granting or revoking user permissions and access levels."
        },
        {
          "question": "What is the difference between GRANT and REVOKE?",
          "answer": "GRANT is used to give specific privileges to users, while REVOKE is used to take those privileges away."
        }
      ]
    },
    {
      "id": "mysql-dcl-practical",
      "title": "DCL Practical Example (Two Tables)",
      "category": "Sub Commands",
      "definition": "A hands-on demonstration of DCL commands (GRANT and REVOKE) using a two-table database system with specific user permissions.",
      "sections": [
        {
          "type": "text",
          "value": "DCL (Data Control Language) with Two Tables Example\n\nSuppose we have:\n• departments table\n• employees table\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "Step 1: Create Database\n\nCREATE DATABASE company_db;\nUSE company_db;\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "Step 2: Create First Table — departments\n\nCREATE TABLE departments (\n    dept_id INT PRIMARY KEY,\n    dept_name VARCHAR(50) NOT NULL\n);\n\nInsert Data:\nINSERT INTO departments VALUES\n(101, 'HR'),\n(102, 'IT'),\n(103, 'Finance');\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "Step 3: Create Second Table — employees\n\nCREATE TABLE employees (\n    emp_id INT PRIMARY KEY,\n    emp_name VARCHAR(50) NOT NULL,\n    salary DECIMAL(10,2),\n    dept_id INT,\n    FOREIGN KEY (dept_id) REFERENCES departments(dept_id)\n);\n\nInsert Data:\nINSERT INTO employees VALUES\n(1, 'Ravi', 45000, 101),\n(2, 'Priya', 60000, 102),\n(3, 'Arjun', 55000, 103);\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "Table Data Representation:\n\ndepartments Table:"
        },
        {
          "type": "table",
          "headers": [
            "dept_id",
            "dept_name"
          ],
          "rows": [
            [
              "101",
              "HR"
            ],
            [
              "102",
              "IT"
            ],
            [
              "103",
              "Finance"
            ]
          ]
        },
        {
          "type": "text",
          "value": "employees Table:"
        },
        {
          "type": "table",
          "headers": [
            "emp_id",
            "emp_name",
            "salary",
            "dept_id"
          ],
          "rows": [
            [
              "1",
              "Ravi",
              "45000",
              "101"
            ],
            [
              "2",
              "Priya",
              "60000",
              "102"
            ],
            [
              "3",
              "Arjun",
              "55000",
              "103"
            ]
          ]
        },
        {
          "type": "text",
          "value": "DCL Commands Application:\n\n1. GRANT Command\n\nSuppose we created a user named staff_user.\nWe want:\n• User can view data from both tables\n• User can insert records only into employees\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "Grant SELECT Permission on departments:\n\nGRANT SELECT ON departments TO staff_user;\n\nMeaning:\n• staff_user can view department details\n• Cannot modify data\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "Grant SELECT and INSERT on employees:\n\nGRANT SELECT, INSERT ON employees TO staff_user;\n\nMeaning:\n• staff_user can view employee records\n• Add new employees\n• Cannot delete or update records\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "Example Operations by staff_user:\n\n✅ Allowed (View departments):\nSELECT * FROM departments;\n\n✅ Allowed (Add Employee):\nINSERT INTO employees VALUES (4, 'Kiran', 50000, 102);\n\n❌ Not Allowed (Delete Employee):\nDELETE FROM employees WHERE emp_id = 1;\n\nError: DELETE permission was not granted.\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "2. REVOKE Command\n\nNow admin wants to remove INSERT permission from staff_user.\n\nREVOKE INSERT ON employees FROM staff_user;\n\nAfter REVOKE:\n\n✅ Allowed:\nSELECT * FROM employees; (User can still view records)\n\n❌ Not Allowed:\nINSERT INTO employees VALUES (5, 'Sneha', 48000, 101);\n\nError: INSERT permission was removed.\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "Grant/Remove All Permissions Example:\n\nGrant All Permissions:\nGRANT ALL PRIVILEGES ON employees TO admin_user;\n\nRemove All Permissions:\nREVOKE ALL PRIVILEGES ON employees FROM admin_user;\n\n------------------------------------------------"
        },
        {
          "type": "table",
          "headers": [
            "Command",
            "Purpose"
          ],
          "rows": [
            [
              "GRANT",
              "Gives permissions"
            ],
            [
              "REVOKE",
              "Removes permissions"
            ]
          ]
        },
        {
          "type": "table",
          "headers": [
            "Permission",
            "Meaning"
          ],
          "rows": [
            [
              "SELECT",
              "Read data"
            ],
            [
              "INSERT",
              "Add data"
            ],
            [
              "UPDATE",
              "Modify data"
            ],
            [
              "DELETE",
              "Remove data"
            ]
          ]
        },
        {
          "type": "text",
          "value": "About staff_user:\nstaff_user is a database user. Before using GRANT or REVOKE, we must first create the user.\n\nCreate User Example:\nCREATE USER 'staff_user'@'localhost' IDENTIFIED BY 'staff123';\n\nExplanation:\n• staff_user → Username\n• localhost → User can login only from same system\n• staff123 → Password\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "Complete DCL Flow:\n\nStep 1: Create User\nCREATE USER 'staff_user'@'localhost' IDENTIFIED BY 'staff123';\n\nStep 2: Grant Permissions\nGRANT SELECT ON company_db.departments TO 'staff_user'@'localhost';\nGRANT SELECT, INSERT ON company_db.employees TO 'staff_user'@'localhost';\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "What staff_user Can Do:\n\n✅ Allowed (View Departments):\nSELECT * FROM departments;\n\n✅ Allowed (Add Employee):\nINSERT INTO employees VALUES (4, 'Kiran', 50000, 102);\n\n❌ Not Allowed (Delete Employee):\nDELETE FROM employees WHERE emp_id = 1;\n\nError: DELETE permission is not given.\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "REVOKE Example:\n\nRemove INSERT permission:\nREVOKE INSERT ON company_db.employees FROM 'staff_user'@'localhost';\n\nNow staff_user can only view employee data.\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "View Existing Users:\nSELECT user, host FROM mysql.user;\n\n------------------------------------------------"
        },
        {
          "type": "table",
          "headers": [
            "Term",
            "Meaning"
          ],
          "rows": [
            [
              "User",
              "Database account"
            ],
            [
              "GRANT",
              "Give permissions"
            ],
            [
              "REVOKE",
              "Remove permissions"
            ],
            [
              "staff_user",
              "Example database username"
            ]
          ]
        },
        {
          "type": "text",
          "value": "CREATE USER Detailed Breakdown:\n\nCREATE USER 'staff_user'@'localhost' IDENTIFIED BY 'staff123';\nThis command creates a new MySQL user account.\n\n------------------------------------------------"
        },
        {
          "type": "table",
          "headers": [
            "Part",
            "Meaning"
          ],
          "rows": [
            [
              "CREATE USER",
              "Command used to create a new user"
            ],
            [
              "'staff_user'",
              "Username"
            ],
            [
              "'localhost'",
              "Host from where user can connect"
            ],
            [
              "IDENTIFIED BY",
              "Sets password for the user"
            ],
            [
              "'staff123'",
              "Password"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Detailed Explanation:\n\n1. CREATE USER\nUsed to create a new MySQL login account.\n\n2. 'staff_user'\nThis is the username (Example: admin, manager, employee1, staff_user). Just like creating Gmail usernames.\n\n3. @'localhost'\nThis specifies from where the user can connect. localhost means the same computer/system where MySQL server is running.\n\n'staff_user'@'localhost' means user staff_user can login only from this machine.\n\n------------------------------------------------"
        },
        {
          "type": "table",
          "headers": [
            "Example",
            "Meaning"
          ],
          "rows": [
            [
              "'user1'@'localhost'",
              "Access only from same computer"
            ],
            [
              "'user1'@'%'",
              "Access from any system"
            ],
            [
              "'user1'@'192.168.1.10'",
              "Access only from specific IP"
            ]
          ]
        },
        {
          "type": "text",
          "value": "4. IDENTIFIED BY\nUsed to assign password to the user.\n\n5. 'staff123'\nPassword for the account. User must enter this password while logging in.\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "Real Meaning of Entire Command:\nCREATE USER 'staff_user'@'localhost' IDENTIFIED BY 'staff123';\nmeans: Create a MySQL account named staff_user that can connect from the same computer using password staff123.\n\n------------------------------------------------"
        },
        {
          "type": "table",
          "headers": [
            "Real World (Analogy)",
            "MySQL"
          ],
          "rows": [
            [
              "Employee ID",
              "Username"
            ],
            [
              "Office Location",
              "Host"
            ],
            [
              "Password",
              "IDENTIFIED BY"
            ],
            [
              "Create new employee account",
              "CREATE USER"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Login Example:\nAfter creating user:\nmysql -u staff_user -p\nThen enter: staff123\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "⚠️ Important Note:\nCreating a user does NOT automatically give permissions. After creating the user, admin must give access using:\nGRANT SELECT ON company_db.employees TO 'staff_user'@'localhost';\nOtherwise, the user cannot access tables.\n\n------------------------------------------------"
        }
      ],
      "questions": [
        {
          "question": "Can a user perform SELECT operations after their INSERT permission is revoked?",
          "answer": "Yes, as long as the SELECT permission was granted separately and not revoked."
        },
        {
          "question": "What is the result of attempting a DELETE operation without the DELETE privilege?",
          "answer": "MySQL will return an error stating that the user does not have the necessary permission to execute the command."
        }
      ]
    },
    {
      "id": "mysql-tcl-commands",
      "title": "TCL (Transaction Control Language)",
      "category": "Sub Commands",
      "definition": "TCL commands are used to manage transactions in a database. A transaction is a group of SQL statements executed as a single unit.",
      "sections": [
        {
          "type": "text",
          "value": "TCL (Transaction Control Language)\nTCL commands are used to manage transactions in a database.\nA transaction is a group of SQL statements executed as a single unit.\n\nExamples of Transactions:\n• Money transfer from one account to another\n• Online ticket booking\n• ATM withdrawal\n\nLogic:\n• If all operations are successful → Save changes (COMMIT)\n• If any operation fails → Undo changes (ROLLBACK)\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "1. COMMIT\nCOMMIT is used to save all changes permanently in the database.\n\nSyntax:\nCOMMIT;\n\nExample:\nUPDATE employees SET salary = 50000 WHERE emp_id = 101;\nCOMMIT;\n\nOutput:\nChanges are saved permanently.\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "2. SAVEPOINT\nSAVEPOINT creates a temporary checkpoint inside a transaction. It helps to rollback to a specific point instead of undoing the entire transaction.\n\nSyntax:\nSAVEPOINT savepoint_name;\n\nExample:\nUPDATE accounts SET balance = balance - 1000 WHERE acc_no = 1;\nSAVEPOINT sp1;\nUPDATE accounts SET balance = balance + 1000 WHERE acc_no = 2;\n\nOutput:\nA rollback point named sp1 is created.\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "3. ROLLBACK\nROLLBACK is used to undo changes made in a transaction.\n\nSyntax:\nROLLBACK;\n\nRollback to Savepoint:\nROLLBACK TO savepoint_name;\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "Example 1 — Full Rollback:\nDELETE FROM students WHERE id = 5;\nROLLBACK;\n\nOutput:\nDeleted record is restored.\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "Example 2 — Rollback to Savepoint:\nUPDATE products SET price = 2000 WHERE id = 1;\nSAVEPOINT sp1;\nUPDATE products SET price = 3000 WHERE id = 2;\nROLLBACK TO sp1;\n\nOutput:\n• Changes before sp1 remain\n• Changes after sp1 are undone\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "Example 3 — Rollback to Commit (Bank Transaction):\nSTART TRANSACTION;\nUPDATE accounts SET balance = balance - 5000 WHERE acc_no = 101;\nUPDATE accounts SET balance = balance + 5000 WHERE acc_no = 102;\nCOMMIT;\n\nOutput:\n₹5000 transferred successfully and changes saved permanently.\n\nIf any error occurs:\nROLLBACK;\n\nOutput:\nAll changes are undone.\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "4. SET TRANSACTION\nSET TRANSACTION is used to set transaction properties.\n\nCommon Uses:\n• Read only transaction\n• Read write transaction\n• Isolation level settings\n\nSyntax:\nSET TRANSACTION READ ONLY;\nOR\nSET TRANSACTION READ WRITE;\n\nNote: READ ONLY allows only reading data, not modifying.\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "5. SET CONSTRAINT\nSET CONSTRAINT controls constraint checking behavior during a transaction.\n\nSyntax:\nSET CONSTRAINT constraint_name DEFERRED;\nOR\nSET CONSTRAINT constraint_name IMMEDIATE;\n\nNote: DEFERRED postpones checking until transaction completion.\n\n------------------------------------------------"
        },
        {
          "type": "table",
          "headers": [
            "Command",
            "Purpose"
          ],
          "rows": [
            [
              "COMMIT",
              "Saves changes permanently"
            ],
            [
              "SAVEPOINT",
              "Creates rollback point"
            ],
            [
              "ROLLBACK",
              "Undoes changes"
            ],
            [
              "SET TRANSACTION",
              "Sets transaction properties"
            ],
            [
              "SET CONSTRAINT",
              "Controls constraints"
            ]
          ]
        }
      ],
      "questions": [
        {
          "question": "What is the difference between ROLLBACK and ROLLBACK TO SAVEPOINT?",
          "answer": "ROLLBACK undoes all changes in the current transaction, while ROLLBACK TO SAVEPOINT only undoes changes made after a specific checkpoint."
        },
        {
          "question": "Why is COMMIT essential in database transactions?",
          "answer": "COMMIT ensures that once a group of operations is successful, the changes are written permanently to the disk and become visible to other users."
        }
      ]
    },
    {
      "id": "mysql-tcl-practical",
      "title": "TCL Practical Example (Bank System)",
      "category": "Sub Commands",
      "definition": "A hands-on demonstration of Transaction Control Language (TCL) including banking scenarios, transaction modes, and constraint management.",
      "sections": [
        {
          "type": "text",
          "value": "TCL Commands Example Using Bank Accounts Table\n\nStep 1 — Create Table\nCREATE TABLE accounts (\n    acc_no INT PRIMARY KEY,\n    name VARCHAR(50),\n    balance INT\n);\n\nStep 2 — Insert Data\nINSERT INTO accounts VALUES\n(101, 'Ravi', 10000),\n(102, 'Sita', 15000);\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "Initial Table Data:"
        },
        {
          "type": "table",
          "headers": [
            "acc_no",
            "name",
            "balance"
          ],
          "rows": [
            [
              "101",
              "Ravi",
              "10000"
            ],
            [
              "102",
              "Sita",
              "15000"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Example Using COMMIT, SAVEPOINT, and ROLLBACK\n\nScenario: Ravi transfers money to Sita.\n\nStep 3 — Start Transaction\nSTART TRANSACTION;\n\nStep 4 — Deduct Money from Ravi\nUPDATE accounts SET balance = balance - 5000 WHERE acc_no = 101;\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "Table After Deduction:"
        },
        {
          "type": "table",
          "headers": [
            "acc_no",
            "name",
            "balance"
          ],
          "rows": [
            [
              "101",
              "Ravi",
              "5000"
            ],
            [
              "102",
              "Sita",
              "15000"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Step 5 — Create SAVEPOINT\nSAVEPOINT transfer_point;\n\nMeaning: If something goes wrong later, we can rollback to this point.\n\nStep 6 — Add Money to Sita\nUPDATE accounts SET balance = balance + 5000 WHERE acc_no = 102;\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "Table After Transfer:"
        },
        {
          "type": "table",
          "headers": [
            "acc_no",
            "name",
            "balance"
          ],
          "rows": [
            [
              "101",
              "Ravi",
              "5000"
            ],
            [
              "102",
              "Sita",
              "20000"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Step 7 — Suppose Error Happens\n\nNow we decide to cancel the second update.\n\nROLLBACK TO SAVEPOINT:\nROLLBACK TO transfer_point;\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "Table After Rollback:"
        },
        {
          "type": "table",
          "headers": [
            "acc_no",
            "name",
            "balance"
          ],
          "rows": [
            [
              "101",
              "Ravi",
              "5000"
            ],
            [
              "102",
              "Sita",
              "15000"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Explanation:\n• Deduction from Ravi remains\n• Addition to Sita is undone\n\nStep 8 — COMMIT Changes\nCOMMIT;\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "Final Table Data:"
        },
        {
          "type": "table",
          "headers": [
            "acc_no",
            "name",
            "balance"
          ],
          "rows": [
            [
              "101",
              "Ravi",
              "5000"
            ],
            [
              "102",
              "Sita",
              "15000"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Full TCL Flow:\n\nSTART TRANSACTION;\nUPDATE accounts SET balance = balance - 5000 WHERE acc_no = 101;\nSAVEPOINT transfer_point;\nUPDATE accounts SET balance = balance + 5000 WHERE acc_no = 102;\nROLLBACK TO transfer_point;\nCOMMIT;\n\n------------------------------------------------"
        },
        {
          "type": "table",
          "headers": [
            "Command",
            "Purpose"
          ],
          "rows": [
            [
              "SAVEPOINT transfer_point",
              "Creates rollback point"
            ],
            [
              "ROLLBACK TO transfer_point",
              "Undoes changes after savepoint"
            ],
            [
              "COMMIT",
              "Saves final changes permanently"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Syntax of SET TRANSACTION\n\n1. READ ONLY\nAllows only reading data. INSERT, UPDATE, DELETE are not allowed. Used for reports and analysis.\n\nExample:\nSET TRANSACTION READ ONLY;\nSELECT * FROM employees;\n\nOutput:\nData can be viewed but cannot be modified.\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "2. READ WRITE\nAllows both reading and modifying data. INSERT, UPDATE, DELETE operations are allowed.\n\nExample:\nSET TRANSACTION READ WRITE;\nUPDATE employees SET salary = 60000 WHERE emp_id = 101;\n\nOutput:\nData is updated successfully.\n\n------------------------------------------------"
        },
        {
          "type": "table",
          "headers": [
            "Feature",
            "READ ONLY",
            "READ WRITE"
          ],
          "rows": [
            [
              "View Data",
              "Yes",
              "Yes"
            ],
            [
              "Insert Data",
              "No",
              "Yes"
            ],
            [
              "Update Data",
              "No",
              "Yes"
            ],
            [
              "Delete Data",
              "No",
              "Yes"
            ],
            [
              "Used For",
              "Reports, Analysis",
              "Normal Transactions"
            ]
          ]
        },
        {
          "type": "text",
          "value": "SET CONSTRAINT\nSET CONSTRAINT is used to control when constraints (PRIMARY KEY, FOREIGN KEY, UNIQUE, CHECK) are checked during a transaction. They can be checked immediately after each SQL statement or at the end of the transaction (COMMIT).\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "1. IMMEDIATE\nConstraint is checked immediately after executing each statement. If any rule is violated, an error occurs instantly.\n\nExample Setup:\nCREATE TABLE departments (dept_id INT PRIMARY KEY);\nCREATE TABLE employees (\n    emp_id INT PRIMARY KEY,\n    dept_id INT,\n    CONSTRAINT fk_dept FOREIGN KEY (dept_id) REFERENCES departments(dept_id)\n);\n\nUsing IMMEDIATE:\nSET CONSTRAINT fk_dept IMMEDIATE;\nINSERT INTO employees VALUES (101, 10);\n\nWhat Happens? \nDatabase immediately checks if dept_id 10 exists. Since it doesn't:\nOutput: ERROR: Foreign key constraint violated.\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "2. DEFERRED\nConstraint checking is postponed until COMMIT. Temporary invalid data is allowed during the transaction.\n\nExample Steps:\nStep 1 — START TRANSACTION;\nStep 2 — SET CONSTRAINT fk_dept DEFERRED;\nStep 3 — INSERT INTO employees VALUES (101, 10); (No error now)\nStep 4 — INSERT INTO departments VALUES (10);\nStep 5 — COMMIT;\n\nOutput:\nTransaction succeeds because by commit time, department 10 exists.\n\n------------------------------------------------"
        },
        {
          "type": "table",
          "headers": [
            "Feature",
            "IMMEDIATE",
            "DEFERRED"
          ],
          "rows": [
            [
              "Checking Time",
              "Checks constraint instantly",
              "Checks at COMMIT time"
            ],
            [
              "Error Timing",
              "Error occurs immediately",
              "Error occurs later if still invalid"
            ],
            [
              "Nature",
              "Strict checking",
              "Flexible temporary changes"
            ]
          ]
        },
        {
          "type": "table",
          "headers": [
            "Mode",
            "Real-Time Use Case"
          ],
          "rows": [
            [
              "IMMEDIATE",
              "Banking/Payment systems where data must always be valid"
            ],
            [
              "DEFERRED",
              "Bulk data import, inserting parent-child records in varying order"
            ]
          ]
        }
      ],
      "questions": [
        {
          "question": "What is the primary benefit of using DEFERRED constraints?",
          "answer": "It allows for temporary inconsistencies within a transaction, which is useful when multiple related tables need to be updated and the intermediate states might violate constraints."
        },
        {
          "question": "When would you use SET TRANSACTION READ ONLY?",
          "answer": "It is used when you only need to generate reports or perform data analysis and want to prevent any accidental data modification."
        }
      ]
    },
    {
      "id": "sql-filtering-concepts",
      "title": "SQL Filtering Concepts",
      "category": "Queries",
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
      "id": "sql-filtering-data",
      "title": "Filtering Data Example",
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
      "id": "mysql-like-wildcards",
      "title": "SQL LIKE Operator & Wildcards",
      "category": "Queries",
      "definition": "The LIKE operator in SQL/MySQL is used to search for a specified pattern in a column. It is primarily used with the WHERE clause for sophisticated string pattern matching.",
      "sections": [
        {
          "type": "text",
          "value": "Syntax\n\nSELECT column_name\nFROM table_name\nWHERE column_name LIKE pattern;\n\n------------------------------------------------"
        },
        {
          "type": "table",
          "headers": [
            "Wildcard",
            "Meaning"
          ],
          "rows": [
            [
              "%",
              "Represents zero, one, or many characters"
            ],
            [
              "_",
              "Represents a single character"
            ]
          ]
        },
        {
          "type": "text",
          "value": "1. % Wildcard\n\n% matches any number of characters.\n\nExample Table: students"
        },
        {
          "type": "table",
          "headers": [
            "id",
            "name"
          ],
          "rows": [
            ["1", "Ram"],
            ["2", "Ravi"],
            ["3", "Ramesh"],
            ["4", "Sita"],
            ["5", "Raj"]
          ]
        },
        {
          "type": "text",
          "value": "Example 1: Names starting with \"Ra\"\n\nSELECT * FROM students\nWHERE name LIKE 'Ra%';"
        },
        {
          "type": "output",
          "value": "id\tname\n1\tRam\n2\tRavi\n3\tRamesh\n5\tRaj"
        },
        {
          "type": "text",
          "value": "Example 2: Names ending with \"a\"\n\nSELECT * FROM students\nWHERE name LIKE '%a';"
        },
        {
          "type": "output",
          "value": "id\tname\n4\tSita"
        },
        {
          "type": "text",
          "value": "Example 3: Names containing \"am\"\n\nSELECT * FROM students\nWHERE name LIKE '%am%';"
        },
        {
          "type": "output",
          "value": "id\tname\n1\tRam\n3\tRamesh\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "2. _ Wildcard\n\n_ matches exactly one character."
        },
        {
          "type": "text",
          "value": "Example 1: Names with 3 letters\n\nSELECT * FROM students\nWHERE name LIKE '___';"
        },
        {
          "type": "output",
          "value": "id\tname\n1\tRam\n5\tRaj"
        },
        {
          "type": "text",
          "value": "Example 2: Names starting with \"R\" and having 4 letters\n\nSELECT * FROM students\nWHERE name LIKE 'R___';"
        },
        {
          "type": "output",
          "value": "id\tname\n2\tRavi\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "Combined Wildcards\n\nExample: Starts with R and Ends with h\n\nSELECT * FROM students\nWHERE name LIKE 'R%h';"
        },
        {
          "type": "output",
          "value": "id\tname\n3\tRamesh\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "LIKE with Numbers\n\nLIKE can also be used with numeric values by treating them as strings.\n\nExample: Salaries starting with 5\n\nSELECT * FROM employees\nWHERE salary LIKE '5%';"
        },
        {
          "type": "text",
          "value": "NOT LIKE\n\nUsed to exclude matching patterns.\n\nExample: Names that do NOT start with \"R\"\n\nSELECT * FROM students\nWHERE name NOT LIKE 'R%';"
        },
        {
          "type": "output",
          "value": "id\tname\n4\tSita\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "Case Sensitivity\n\nIn MySQL, LIKE is usually case-insensitive by default.\n\nSELECT * FROM students\nWHERE name LIKE 'ram%';\nMatches: Ram, RAM, ram (depending on collation).\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "Difference Between = and LIKE"
        },
        {
          "type": "table",
          "headers": [
            "Feature",
            "= Operator",
            "LIKE Operator"
          ],
          "rows": [
            [
              "Matching Type",
              "Exact match",
              "Pattern match"
            ],
            [
              "Wildcards",
              "No wildcards",
              "Uses wildcards"
            ],
            [
              "Speed",
              "Faster",
              "Slightly slower"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Difference Between LIKE and IN"
        },
        {
          "type": "table",
          "headers": [
            "Feature",
            "LIKE",
            "IN"
          ],
          "rows": [
            [
              "Purpose",
              "Pattern matching",
              "Exact multiple values"
            ],
            [
              "Example",
              "WHERE name LIKE 'R%'",
              "WHERE name IN ('Ram','Ravi')"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Important Pattern Examples"
        },
        {
          "type": "table",
          "headers": [
            "Pattern",
            "Meaning"
          ],
          "rows": [
            ["'A%'", "Starts with A"],
            ["'%A'", "Ends with A"],
            ["'%A%'", "Contains A"],
            ["'A____'", "5-letter words starting with A"],
            ["'__a%'", "Third character is a"],
            ["'_a%'", "Second character is a"]
          ]
        },
        {
          "type": "text",
          "value": "Real-Time Examples\n\n• Gmail Search: SELECT * FROM users WHERE email LIKE '%@gmail.com';\n• Phone Numbers: SELECT * FROM customers WHERE phone LIKE '9%';\n• Employee Search: SELECT * FROM employees WHERE name LIKE '%k';\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "Summary\n\n• LIKE is used for pattern matching.\n• % → multiple characters, _ → single character.\n• Used with WHERE clause.\n• NOT LIKE excludes patterns.\n• Common in searching names, emails, phone numbers, etc."
        }
      ],
      "questions": [
        {
          "question": "1. What is the use of LIKE in SQL?",
          "answer": "Used to search data using patterns."
        },
        {
          "question": "2. Difference between % and _?",
          "answer": "% represents multiple characters, while _ represents a single character."
        },
        {
          "question": "3. Difference between LIKE and IN?",
          "answer": "LIKE is used for pattern matching (e.g., name LIKE 'R%'), while IN is used for matching exact multiple values (e.g., name IN ('Ram','Ravi'))."
        },
        {
          "question": "4. Can LIKE be used with numbers?",
          "answer": "Yes, it can be used with numbers, although it is mainly used with text."
        },
        {
          "question": "5. What is NOT LIKE?",
          "answer": "Used to exclude matching patterns."
        }
      ]
    },
    {
      "id": "mysql-like-examples-pro",
      "title": "SQL LIKE Operator: 20+ Practical Examples",
      "category": "Queries",
      "definition": "A comprehensive guide to the SQL LIKE operator using a 10-record Employees dataset, covering 20 distinct pattern matching scenarios including prefixes, suffixes, character positioning, and combined wildcards.",
      "sections": [
        {
          "type": "text",
          "value": "Database Setup\n\nTo follow along with these examples, create and populate the following employees table."
        },
        {
          "type": "code",
          "value": "CREATE TABLE employees (\n    id INT PRIMARY KEY,\n    name VARCHAR(50),\n    age INT,\n    city VARCHAR(50),\n    department VARCHAR(50),\n    salary INT\n);\n\nINSERT INTO employees VALUES\n(1, 'Ram', 25, 'Hyderabad', 'HR', 35000),\n(2, 'Ravi', 28, 'Vijayawada', 'IT', 50000),\n(3, 'Sita', 24, 'Chennai', 'Finance', 42000),\n(4, 'Kiran', 30, 'Bangalore', 'IT', 60000),\n(5, 'Anu', 27, 'Mumbai', 'Marketing', 45000),\n(6, 'Rajesh', 32, 'Delhi', 'Sales', 55000),\n(7, 'Sneha', 26, 'Pune', 'HR', 38000),\n(8, 'Arjun', 29, 'Hyderabad', 'IT', 62000),\n(9, 'Divya', 23, 'Chennai', 'Support', 30000),\n(10, 'Mahesh', 35, 'Bangalore', 'Finance', 70000);"
        },
        {
          "type": "text",
          "value": "Employees Table Data"
        },
        {
          "type": "table",
          "headers": [
            "id",
            "name",
            "age",
            "city",
            "department",
            "salary"
          ],
          "rows": [
            ["1", "Ram", "25", "Hyderabad", "HR", "35000"],
            ["2", "Ravi", "28", "Vijayawada", "IT", "50000"],
            ["3", "Sita", "24", "Chennai", "Finance", "42000"],
            ["4", "Kiran", "30", "Bangalore", "IT", "60000"],
            ["5", "Anu", "27", "Mumbai", "Marketing", "45000"],
            ["6", "Rajesh", "32", "Delhi", "Sales", "55000"],
            ["7", "Sneha", "26", "Pune", "HR", "38000"],
            ["8", "Arjun", "29", "Hyderabad", "IT", "62000"],
            ["9", "Divya", "23", "Chennai", "Support", "30000"],
            ["10", "Mahesh", "35", "Bangalore", "Finance", "70000"]
          ]
        },
        {
          "type": "text",
          "value": "1. Starts With (A%)\nExample: Names starting with 'R'\nSELECT * FROM employees WHERE name LIKE 'R%';"
        },
        {
          "type": "output",
          "value": "id\tname\n1\tRam\n2\tRavi\n6\tRajesh\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "2. Ends With (%a)\nExample: Names ending with 'a'\nSELECT * FROM employees WHERE name LIKE '%a';"
        },
        {
          "type": "output",
          "value": "id\tname\n3\tSita\n9\tDivya\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "3. Contains (%text%)\nExample: Names containing 'vi'\nSELECT * FROM employees WHERE name LIKE '%vi%';"
        },
        {
          "type": "output",
          "value": "id\tname\n2\tRavi\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "4. Exact Number of Characters (_)\nExample: Names having exactly 3 letters\nSELECT * FROM employees WHERE name LIKE '___';"
        },
        {
          "type": "output",
          "value": "id\tname\n1\tRam\n5\tAnu\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "5. Starts With and Fixed Length\nExample: 4-letter names starting with 'R'\nSELECT * FROM employees WHERE name LIKE 'R___';"
        },
        {
          "type": "output",
          "value": "id\tname\n2\tRavi\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "6. Second Character Matching\nExample: Names where second letter is 'a'\nSELECT * FROM employees WHERE name LIKE '_a%';"
        },
        {
          "type": "output",
          "value": "id\tname\n1\tRam\n2\tRavi\n4\tKiran\n6\tRajesh\n10\tMahesh\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "7. Third Character Matching\nExample: Names where third character is 'v'\nSELECT * FROM employees WHERE name LIKE '__v%';"
        },
        {
          "type": "output",
          "value": "id\tname\n9\tDivya\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "8. Starts and Ends With\nExample: Names starting with 'R' and ending with 'h'\nSELECT * FROM employees WHERE name LIKE 'R%h';"
        },
        {
          "type": "output",
          "value": "id\tname\n6\tRajesh\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "9. City Starts With H\nSELECT * FROM employees WHERE city LIKE 'H%';"
        },
        {
          "type": "output",
          "value": "city\nHyderabad\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "10. Department Ends With e\nSELECT * FROM employees WHERE department LIKE '%e';"
        },
        {
          "type": "output",
          "value": "department\nFinance\nSales\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "11. Department Contains 'an'\nSELECT * FROM employees WHERE department LIKE '%an%';"
        },
        {
          "type": "output",
          "value": "department\nFinance\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "12. Salary Starts With 5\nSELECT * FROM employees WHERE salary LIKE '5%';"
        },
        {
          "type": "output",
          "value": "salary\n50000\n55000\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "13. NOT LIKE\nExample: Names NOT starting with 'R'\nSELECT * FROM employees WHERE name NOT LIKE 'R%';"
        },
        {
          "type": "output",
          "value": "id\tname\n3\tSita\n4\tKiran\n5\tAnu\n7\tSneha\n8\tArjun\n9\tDivya\n10\tMahesh\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "14. Multiple _ Wildcards\nExample: Names with exactly 5 letters\nSELECT * FROM employees WHERE name LIKE '_____';"
        },
        {
          "type": "output",
          "value": "name\nKiran\nSneha\nDivya\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "15. Combination of % and _\nExample: Names starting with 'R' and having at least 4 characters\nSELECT * FROM employees WHERE name LIKE 'R___%';"
        },
        {
          "type": "output",
          "value": "name\nRavi\nRajesh\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "16. City Contains 'a'\nSELECT * FROM employees WHERE city LIKE '%a%';"
        },
        {
          "type": "output",
          "value": "city\nHyderabad\nVijayawada\nChennai\nBangalore\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "17. Names Ending With 'n'\nSELECT * FROM employees WHERE name LIKE '%n';"
        },
        {
          "type": "output",
          "value": "name\nKiran\nArjun\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "18. Names Starting With Any Single Character + 'i'\nSELECT * FROM employees WHERE name LIKE '_i%';"
        },
        {
          "type": "output",
          "value": "name\nSita\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "19. Cities Having Exactly 5 Letters\nSELECT * FROM employees WHERE city LIKE '_____';"
        },
        {
          "type": "output",
          "value": "city\nDelhi\nPune\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "20. Departments Starting With 'M'\nSELECT * FROM employees WHERE department LIKE 'M%';"
        },
        {
          "type": "output",
          "value": "department\nMarketing"
        }
      ],
      "questions": [
        {
          "question": "1. What is LIKE used for?",
          "answer": "Used for pattern matching in SQL."
        },
        {
          "question": "2. Difference between % and _",
          "answer": "% represents zero or many characters, while _ represents exactly one character."
        },
        {
          "question": "3. Difference between LIKE and =",
          "answer": "LIKE is used for pattern matching (supporting wildcards), whereas = is used for exact matching."
        },
        {
          "question": "4. Can LIKE be used with numbers?",
          "answer": "Yes. For example, 'WHERE salary LIKE 6%' finds salaries starting with 6."
        },
        {
          "question": "5. What is NOT LIKE?",
          "answer": "It is used to exclude records that match a specific pattern."
        }
      ]
    },
    {
      "id": "mysql-in-operator",
      "title": "SQL IN Operator & NOT IN",
      "category": "Queries",
      "definition": "The IN operator in MySQL is used to filter records by checking if a value matches any value in a list or subquery. It serves as a cleaner, more readable alternative to multiple OR conditions.",
      "sections": [
        {
          "type": "text",
          "value": "Basic Syntax\n\nSELECT column_name\nFROM table_name\nWHERE column_name IN (value1, value2, value3, ...);\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "1. Basic Example\nSuppose you want to find employees who belong to specific departments."
        },
        {
          "type": "code",
          "value": "SELECT * \nFROM employees\nWHERE department IN ('HR', 'Finance', 'IT');"
        },
        {
          "type": "text",
          "value": "✅ This returns employees who belong to either HR, Finance, or IT.\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "2. Using IN with Numbers\nIN works equally well with numeric data types."
        },
        {
          "type": "code",
          "value": "SELECT * \nFROM orders\nWHERE order_id IN (101, 102, 103);"
        },
        {
          "type": "text",
          "value": "------------------------------------------------"
        },
        {
          "type": "text",
          "value": "3. Using IN with Subquery\nYou can use a subquery to provide the list of values dynamically."
        },
        {
          "type": "code",
          "value": "SELECT * \nFROM employees\nWHERE department_id IN (\n    SELECT id FROM departments WHERE location = 'New York'\n);"
        },
        {
          "type": "text",
          "value": "✅ This gets all employees working in departments that are located in New York.\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "4. NOT IN Operator\nWorks as the opposite of IN, returning records that do NOT match any value in the list."
        },
        {
          "type": "code",
          "value": "SELECT * \nFROM employees\nWHERE department NOT IN ('HR', 'IT');"
        },
        {
          "type": "text",
          "value": "------------------------------------------------"
        },
        {
          "type": "text",
          "value": "⚠️ Important Notes\n\n1. Better than OR:\nIN is a cleaner alternative to multiple OR conditions.\n\n-- Instead of:\nWHERE department = 'HR' OR department = 'Finance'\n-- Use:\nWHERE department IN ('HR', 'Finance')\n\n2. NULL Values:\nBe extremely careful with NULL values when using NOT IN. If the list contains a NULL value, the NOT IN operator will return no rows because NULL is considered unknown."
        }
      ],
      "questions": [
        {
          "question": "What is the primary advantage of using the IN operator?",
          "answer": "It provides a cleaner and more readable syntax when checking a column against multiple possible values, replacing long strings of OR conditions."
        },
        {
          "question": "How does the IN operator work with subqueries?",
          "answer": "The inner query (subquery) executes first to generate a list of values, and then the outer query uses that list to filter its own results."
        },
        {
          "question": "What is the major pitfall of using NOT IN with NULL values?",
          "answer": "If a subquery or a list used with NOT IN returns even a single NULL value, the entire query will return an empty result set because comparing anything to NULL results in 'Unknown'."
        }
      ]
    },
    {
      "id": "mysql-in-vs-or",
      "title": "Difference Between IN and OR",
      "category": "Queries",
      "definition": "Both IN and OR are used to filter rows based on multiple conditions. While they can often achieve the same results for a single column, they have distinct use cases based on readability, performance, and column involvement.",
      "sections": [
        {
          "type": "text",
          "value": "1. OR Operator\nThe OR operator is used to combine multiple conditions. A record is included if at least one of the conditions is true."
        },
        {
          "type": "code",
          "value": "SELECT *\nFROM employees\nWHERE department = 'HR'\n   OR department = 'IT'\n   OR department = 'Finance';"
        },
        {
          "type": "text",
          "value": "------------------------------------------------"
        },
        {
          "type": "text",
          "value": "2. IN Operator\nThe IN operator is used to check if a value exists in a specified list. It is a more compact way to handle multiple values for the same column."
        },
        {
          "type": "code",
          "value": "SELECT *\nFROM employees\nWHERE department IN ('HR', 'IT', 'Finance');"
        },
        {
          "type": "text",
          "value": "✅ This produces the exact same result as the OR query above.\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "🔥 Main Differences"
        },
        {
          "type": "table",
          "headers": [
            "Feature",
            "OR Operator",
            "IN Operator"
          ],
          "rows": [
            [
              "Used for",
              "Multiple conditions",
              "Multiple values of same column"
            ],
            [
              "Readability",
              "Less readable for many values",
              "Cleaner and shorter"
            ],
            [
              "Performance",
              "Slightly slower for many conditions",
              "Usually better/optimized"
            ],
            [
              "Supports Different Columns",
              "✅ Yes",
              "❌ No"
            ],
            [
              "Best for",
              "Different conditions",
              "Same column multiple values"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Example Comparison\n\nUsing OR:\nSELECT * FROM students WHERE course = 'Python' OR course = 'Java' OR course = 'MySQL';\n\nUsing IN:\nSELECT * FROM students WHERE course IN ('Python', 'Java', 'MySQL');\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "When to Use OR\nUse OR when your conditions involve different columns."
        },
        {
          "type": "code",
          "value": "SELECT *\nFROM employees\nWHERE department = 'HR'\n   OR salary > 50000;"
        },
        {
          "type": "text",
          "value": "⚠️ Note: IN cannot be used here because the conditions target different columns (department and salary).\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "When to Use IN\nUse IN when you are checking multiple specific values for a single column."
        },
        {
          "type": "code",
          "value": "SELECT *\nFROM employees\nWHERE city IN ('Delhi', 'Mumbai', 'Chennai');"
        }
      ],
      "questions": [
        {
          "question": "Is IN better than OR?",
          "answer": "For multiple values in the same column, IN is better because it is cleaner and easier to read. For conditions involving different columns, you must use OR."
        },
        {
          "question": "What is the simple rule for choosing between IN and OR?",
          "answer": "Same column multiple values → Use IN. Different conditions/columns → Use OR."
        }
      ]
    },
    {
      "id": "mysql-in-subquery",
      "title": "SQL IN with Subquery",
      "category": "Queries",
      "definition": "The IN operator with a subquery is used to compare a column value against a list of results dynamically generated by another SQL query. This is a powerful technique for joining logic across multiple tables without using explicit JOIN syntax.",
      "sections": [
        {
          "type": "text",
          "value": "Syntax\n\nSELECT column_name\nFROM table_name\nWHERE column_name IN (\n    SELECT column_name\n    FROM another_table\n);\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "Example 1: Basic IN with Subquery\nSuppose we want to find the names of customers who have placed at least one order."
        },
        {
          "type": "text",
          "value": "Step 1: Subquery Executes First\nThe inner query runs to get all customer IDs from the orders table.\n\nSELECT customer_id FROM orders;\n-- Returns: 1, 3\n\nStep 2: Main Query Executes\nThe main query then checks which customers have these IDs.\n\nSELECT customer_name FROM customers WHERE customer_id IN (1, 3);"
        },
        {
          "type": "output",
          "value": "customer_name\nRam\nJohn\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "Example 2: Employees Working in IT Department\nFind employee names where their department is 'IT'."
        },
        {
          "type": "code",
          "value": "SELECT emp_name\nFROM employees\nWHERE dept_id IN (\n    SELECT dept_id\n    FROM departments\n    WHERE dept_name = 'IT'\n);"
        },
        {
          "type": "output",
          "value": "emp_name\nRavi\nKiran\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "Important Rules for IN Subqueries\n\n1. Execution Order: The inner query (subquery) always runs first and provides the values for the outer query.\n2. Single Column Rule: The subquery MUST return only one column to be compared with the outer query.\n\n✅ Correct: SELECT id FROM table\n❌ Wrong: SELECT id, name FROM table"
        },
        {
          "type": "text",
          "value": "IN vs EXISTS"
        },
        {
          "type": "table",
          "headers": [
            "Feature",
            "IN Operator",
            "EXISTS Operator"
          ],
          "rows": [
            [
              "Core Logic",
              "Compares actual values",
              "Checks for existence of rows"
            ],
            [
              "Performance",
              "Better for small result sets",
              "Better for large datasets"
            ],
            [
              "Return Type",
              "Returns a list of values",
              "Returns TRUE or FALSE"
            ]
          ]
        },
        {
          "type": "text",
          "value": "NOT IN with Subquery\nUsed to find records that are missing from another table.\n\nExample: Find customers who have NEVER placed an order.\n\nSELECT customer_name\nFROM customers\nWHERE customer_id NOT IN (\n    SELECT customer_id\n    FROM orders\n);"
        },
        {
          "type": "output",
          "value": "customer_name\nSita\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "Practice Scenarios\n\n1. Find students who attended exams:\nSELECT student_name FROM students WHERE student_id IN (SELECT student_id FROM exams);\n\n2. Find employees not assigned to projects:\nSELECT emp_name FROM employees WHERE emp_id NOT IN (SELECT emp_id FROM projects);"
        }
      ],
      "questions": [
        {
          "question": "Q1. What is a subquery?",
          "answer": "A query nested inside another query, usually within the WHERE, FROM, or SELECT clause."
        },
        {
          "question": "Q2. Can a subquery return multiple columns when used with IN?",
          "answer": "No. A subquery used with IN must return exactly one column for comparison."
        },
        {
          "question": "Q3. Which executes first: the main query or the subquery?",
          "answer": "The subquery executes first to generate the set of values needed for the main query's filtering."
        },
        {
          "question": "Q4. How does NOT IN behave with subqueries?",
          "answer": "It filters for rows in the outer table where the value is not present in the list returned by the inner query. Note: If the inner query returns any NULLs, NOT IN will return zero results."
        }
      ]
    },
    {
      "id": "mysql-views",
      "title": "SQL Views: Virtual Tables",
      "category": "Queries",
      "definition": "A View is a virtual table based on the result-set of an SQL query. It contains rows and columns just like a real table, but it does not store data permanently; instead, it provides a safe and simplified window into the underlying base tables.",
      "sections": [
        {
          "type": "text",
          "value": "What is a View?\n\nA View is a dynamic, virtual table created from a SELECT query. It allows you to save a complex query and treat its result as if it were a physical table.\n\nCommon Use Cases:\n• Security: Restricting access to specific rows or columns.\n• Simplification: Reducing the complexity of nested joins or subqueries.\n• Query Reuse: Saving frequently used logic for easy access.\n• Data Abstraction: Hiding sensitive information like salaries or passwords.\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "Setup Example Table"
        },
        {
          "type": "code",
          "value": "CREATE TABLE Employees (\n    emp_id INT PRIMARY KEY,\n    emp_name VARCHAR(50),\n    department VARCHAR(50),\n    salary INT\n);\n\nINSERT INTO Employees VALUES\n(1, 'Ram', 'HR', 30000),\n(2, 'Ravi', 'IT', 50000),\n(3, 'Divya', 'IT', 60000),\n(4, 'Kiran', 'Sales', 45000),\n(5, 'Mahesh', 'HR', 35000);"
        },
        {
          "type": "text",
          "value": "1. Creating a View\n\nSyntax:\nCREATE VIEW view_name AS\nSELECT columns\nFROM table\nWHERE condition;\n\nExample: Create a view specifically for IT department employees."
        },
        {
          "type": "code",
          "value": "CREATE VIEW IT_Employees AS\nSELECT emp_id, emp_name, salary\nFROM Employees\nWHERE department = 'IT';"
        },
        {
          "type": "text",
          "value": "To view the results:\nSELECT * FROM IT_Employees;"
        },
        {
          "type": "output",
          "value": "emp_id  emp_name  salary\n2       Ravi      50000\n3       Divya     60000\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "2. Updating a View Structure\n\nYou can modify an existing view's definition using the CREATE OR REPLACE VIEW command."
        },
        {
          "type": "code",
          "value": "CREATE OR REPLACE VIEW IT_Employees AS\nSELECT emp_id, emp_name, department, salary\nFROM Employees\nWHERE department = 'IT';"
        },
        {
          "type": "text",
          "value": "------------------------------------------------"
        },
        {
          "type": "text",
          "value": "3. Updating Data Through a View\n\nOne of the powerful features of Views is that they can often be used to update the data in the original base table."
        },
        {
          "type": "code",
          "value": "UPDATE IT_Employees\nSET salary = 70000\nWHERE emp_id = 2;"
        },
        {
          "type": "text",
          "value": "Check the original Employees table:\nSELECT * FROM Employees WHERE emp_id = 2;"
        },
        {
          "type": "output",
          "value": "emp_id  emp_name  department  salary\n2       Ravi      IT          70000\n\n✅ Notice: The salary in the original table was also updated from 50000 to 70000.\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "4. Dropping a View\n\nIf you no longer need a view, you can delete it without affecting the data in the base tables."
        },
        {
          "type": "code",
          "value": "DROP VIEW IT_Employees;"
        },
        {
          "type": "text",
          "value": "------------------------------------------------"
        },
        {
          "type": "text",
          "value": "Summary & Types of Views"
        },
        {
          "type": "table",
          "headers": [
            "Feature",
            "Description"
          ],
          "rows": [
            ["Stores Data?", "❌ No (Virtual)"],
            ["Acts Like a Table?", "✅ Yes"],
            ["Improves Security?", "✅ Yes (Restricts access)"],
            ["Updates Original Table?", "✅ Yes (In simple cases)"]
          ]
        },
        {
          "type": "text",
          "value": "Types of Views:\n• Simple View: Created from a single table (most are updatable).\n• Complex View: Created from multiple tables using joins (not usually updatable)."
        },
        {
          "type": "text",
          "value": "Real-Time Security Example:\nA company's Employees table might contain sensitive data like PAN numbers and Passwords. For HR personnel, you can create a view that only exposes non-sensitive columns."
        },
        {
          "type": "code",
          "value": "CREATE VIEW HR_Staff_View AS\nSELECT emp_name, department\nFROM Employees;"
        }
      ],
      "questions": [
        {
          "question": "What is the main difference between a Table and a View?",
          "answer": "A table is a physical storage structure that holds data on disk, while a view is a virtual table that merely saves a SQL query and does not store data independently."
        },
        {
          "question": "Is a view faster than a table?",
          "answer": "Generally, views are slightly slower because the database must execute the underlying query every time the view is accessed, whereas a table is accessed directly."
        },
        {
          "question": "When can you NOT update data through a view?",
          "answer": "Updates are usually blocked if the view contains: Joins, DISTINCT, GROUP BY, HAVING, or Aggregate functions (SUM, AVG, etc.)."
        },
        {
          "question": "How do you see a list of all views in a database?",
          "answer": "You can use the command: SHOW FULL TABLES WHERE Table_type = 'VIEW';"
        }
      ]
    },
    {
      "id": "sql-joins",
      "title": "SQL JOINS",
      "category": "Queries",
      "definition": "SQL Joins are used to combine data from two or more tables based on a related column.",
      "sections": [
        {
          "type": "text",
          "value": "Types of Joins"
        },
        {
          "type": "table",
          "headers": [
            "Join Type",
            "Purpose"
          ],
          "rows": [
            [
              "INNER JOIN",
              "Returns matching records from both tables"
            ],
            [
              "LEFT JOIN",
              "Returns all records from left table + matched records from right table"
            ],
            [
              "RIGHT JOIN",
              "Returns all records from right table + matched records from left table"
            ],
            [
              "FULL JOIN",
              "Returns all records when match exists in either table"
            ],
            [
              "CROSS JOIN",
              "Returns all combinations of rows"
            ],
            [
              "SELF JOIN",
              "Joins a table with itself"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Example Tables\n\nTable 1: students\nsid | name | course_id\n1 | Ravi | 101\n2 | Sita | 102\n3 | Ram | 103\n4 | Geetha | NULL\n\nTable 2: courses\ncourse_id | course_name\n101 | Python\n102 | Java\n104 | MySQL\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "1. INNER JOIN\n\nDefinition\nReturns only matching rows from both tables.\n\nSyntax\nSELECT columns\nFROM table1\nINNER JOIN table2\nON table1.column = table2.column;\n\nExample\nSELECT students.name, courses.course_name\nFROM students\nINNER JOIN courses\nON students.course_id = courses.course_id;\n\nOutput"
        },
        {
          "type": "output",
          "value": "name | course_name\nRavi | Python\nSita | Java\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "2. LEFT JOIN\n\nDefinition\nReturns all rows from left table and matching rows from right table.\n\nSyntax\nSELECT columns\nFROM table1\nLEFT JOIN table2\nON table1.column = table2.column;\n\nExample\nSELECT students.name, courses.course_name\nFROM students\nLEFT JOIN courses\nON students.course_id = courses.course_id;\n\nOutput"
        },
        {
          "type": "output",
          "value": "name | course_name\nRavi | Python\nSita | Java\nRam | NULL\nGeetha | NULL\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "3. RIGHT JOIN\n\nDefinition\nReturns all rows from right table and matching rows from left table.\n\nSyntax\nSELECT columns\nFROM table1\nRIGHT JOIN table2\nON table1.column = table2.column;\n\nExample\nSELECT students.name, courses.course_name\nFROM students\nRIGHT JOIN courses\nON students.course_id = courses.course_id;\n\nOutput"
        },
        {
          "type": "output",
          "value": "name | course_name\nRavi | Python\nSita | Java\nNULL | MySQL\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "4. FULL JOIN\n\nDefinition\nReturns all rows from both tables.\n\nSyntax\nSELECT columns\nFROM table1\nFULL OUTER JOIN table2\nON table1.column = table2.column;\n\nExample\nSELECT students.name, courses.course_name\nFROM students\nFULL OUTER JOIN courses\nON students.course_id = courses.course_id;\n\nOutput"
        },
        {
          "type": "output",
          "value": "name | course_name\nRavi | Python\nSita | Java\nRam | NULL\nGeetha | NULL\nNULL | MySQL\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "5. CROSS JOIN\n\nDefinition\nReturns all possible combinations of rows.\n\nSyntax\nSELECT columns\nFROM table1\nCROSS JOIN table2;\n\nExample\nSELECT students.name, courses.course_name\nFROM students\nCROSS JOIN courses;\n\nOutput"
        },
        {
          "type": "output",
          "value": "name | course_name\nRavi | Python\nRavi | Java\nRavi | MySQL\nSita | Python\nSita | Java\nSita | MySQL\nRam | Python\nRam | Java\nRam | MySQL\nGeetha | Python\nGeetha | Java\nGeetha | MySQL\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "6. SELF JOIN\n\nDefinition\nA table joined with itself.\n\nExample Table: employees\nemp_id | emp_name | manager_id\n1 | Ravi | NULL\n2 | Sita | 1\n3 | Ram | 1\n\nExample\nSELECT e.emp_name AS Employee,\n       m.emp_name AS Manager\nFROM employees e\nLEFT JOIN employees m\nON e.manager_id = m.emp_id;\n\nOutput"
        },
        {
          "type": "output",
          "value": "Employee | Manager\nRavi | NULL\nSita | Ravi\nRam | Ravi\n\n------------------------------------------------"
        },
        {
          "type": "text",
          "value": "Important Notes"
        },
        {
          "type": "table",
          "headers": [
            "Join",
            "Matching Rows",
            "Non-Matching Rows"
          ],
          "rows": [
            [
              "INNER JOIN",
              "Yes",
              "No"
            ],
            [
              "LEFT JOIN",
              "Yes",
              "Left table only"
            ],
            [
              "RIGHT JOIN",
              "Yes",
              "Right table only"
            ],
            [
              "FULL JOIN",
              "Yes",
              "Both tables"
            ],
            [
              "CROSS JOIN",
              "No condition",
              "All combinations"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Quick Memory Trick\n\n• INNER → Common data\n• LEFT → All left + matched right\n• RIGHT → All right + matched left\n• FULL → Everything\n• CROSS → Multiplication\n• SELF → Same table join"
        }
      ],
      "questions": []
    },
    {
      "id": "mysql-joins-2",
      "title": "Joins-2: Joins in MySQL ⭐",
      "category": "Queries",
      "definition": "Joins are used to combine data from two or more tables based on a related column, allowing you to retrieve a unified view of information spread across different relations.",
      "sections": [
        {
          "type": "text",
          "value": "Why Joins are Used?\n\nSuppose you have:\n\nemployees table\nemp_id | name | dept_id\n1 | Ram | 101\n2 | Sita | 102\n3 | John | 103\n\ndepartments table\ndept_id | dept_name\n101 | HR\n102 | IT\n104 | Finance\n\nTo get employee names with department names, we use JOIN."
        },
        {
          "type": "text",
          "value": "Types of Joins:\n• INNER JOIN\n• LEFT JOIN\n• RIGHT JOIN\n• CROSS JOIN\n• SELF JOIN"
        },
        {
          "type": "text",
          "value": "Create Sample Tables"
        },
        {
          "type": "code",
          "value": "CREATE TABLE employees (\n    emp_id INT,\n    name VARCHAR(50),\n    dept_id INT\n);\n\nINSERT INTO employees VALUES\n(1, 'Ram', 101),\n(2, 'Sita', 102),\n(3, 'John', 103),\n(4, 'David', NULL);\n\nCREATE TABLE departments (\n    dept_id INT,\n    dept_name VARCHAR(50)\n);\n\nINSERT INTO departments VALUES\n(101, 'HR'),\n(102, 'IT'),\n(104, 'Finance');"
        },
        {
          "type": "text",
          "value": "1️⃣ INNER JOIN ⭐\nReturns only matching records from both tables.\n\nSyntax:\nSELECT columns\nFROM table1\nINNER JOIN table2\nON table1.column = table2.column;"
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "SELECT employees.name, departments.dept_name\nFROM employees\nINNER JOIN departments\nON employees.dept_id = departments.dept_id;"
        },
        {
          "type": "text",
          "value": "Output"
        },
        {
          "type": "table",
          "headers": [
            "name",
            "dept_name"
          ],
          "rows": [
            [
              "Ram",
              "HR"
            ],
            [
              "Sita",
              "IT"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Explanation:\n• 101 matches → shown\n• 102 matches → shown\n• 103 not found in departments → not shown\n• NULL → not shown\n\nVisual Idea: employees ∩ departments (Only common records)"
        },
        {
          "type": "text",
          "value": "2️⃣ LEFT JOIN ⭐\nReturns ALL records from LEFT table and matching records from RIGHT table. If no match → NULL values.\n\nSyntax:\nSELECT columns\nFROM table1\nLEFT JOIN table2\nON table1.column = table2.column;"
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "SELECT employees.name, departments.dept_name\nFROM employees\nLEFT JOIN departments\nON employees.dept_id = departments.dept_id;"
        },
        {
          "type": "text",
          "value": "Output"
        },
        {
          "type": "table",
          "headers": [
            "name",
            "dept_name"
          ],
          "rows": [
            [
              "Ram",
              "HR"
            ],
            [
              "Sita",
              "IT"
            ],
            [
              "John",
              "NULL"
            ],
            [
              "David",
              "NULL"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Explanation:\nAll employees are shown. John has no matching department, and David has NULL dept_id, so their department becomes NULL.\n\nVisual Idea: All employees + matching departments"
        },
        {
          "type": "text",
          "value": "3️⃣ RIGHT JOIN ⭐\nReturns ALL records from RIGHT table and matching records from LEFT table. If no match → NULL values.\n\nSyntax:\nSELECT columns\nFROM table1\nRIGHT JOIN table2\nON table1.column = table2.column;"
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "SELECT employees.name, departments.dept_name\nFROM employees\nRIGHT JOIN departments\nON employees.dept_id = departments.dept_id;"
        },
        {
          "type": "text",
          "value": "Output"
        },
        {
          "type": "table",
          "headers": [
            "name",
            "dept_name"
          ],
          "rows": [
            [
              "Ram",
              "HR"
            ],
            [
              "Sita",
              "IT"
            ],
            [
              "NULL",
              "Finance"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Explanation:\nAll departments are shown. Finance department has no employee, so the employee name becomes NULL.\n\nVisual Idea: All departments + matching employees"
        },
        {
          "type": "text",
          "value": "4️⃣ CROSS JOIN ⭐\nReturns Cartesian Product. Every row from table1 combines with every row from table2.\n\nFormula: Rows in table1 × Rows in table2\nResult: 4 (employees) × 3 (departments) = 12 rows\n\nSyntax:\nSELECT columns\nFROM table1\nCROSS JOIN table2;"
        },
        {
          "type": "text",
          "value": "Example"
        },
        {
          "type": "code",
          "value": "SELECT employees.name, departments.dept_name\nFROM employees\nCROSS JOIN departments;"
        },
        {
          "type": "text",
          "value": "Output (Few Rows)"
        },
        {
          "type": "table",
          "headers": [
            "name",
            "dept_name"
          ],
          "rows": [
            [
              "Ram",
              "HR"
            ],
            [
              "Ram",
              "IT"
            ],
            [
              "Ram",
              "Finance"
            ],
            [
              "Sita",
              "HR"
            ],
            [
              "Sita",
              "IT"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Use Cases:\n• Generating combinations\n• Product variations\n• Timetable combinations"
        },
        {
          "type": "text",
          "value": "5️⃣ SELF JOIN ⭐\nA table joins with itself. Used when rows in the same table are related."
        },
        {
          "type": "text",
          "value": "Example Table: staff"
        },
        {
          "type": "table",
          "headers": [
            "emp_id",
            "emp_name",
            "manager_id"
          ],
          "rows": [
            [
              "1",
              "Ram",
              "NULL"
            ],
            [
              "2",
              "Sita",
              "1"
            ],
            [
              "3",
              "John",
              "1"
            ],
            [
              "4",
              "David",
              "2"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Query"
        },
        {
          "type": "code",
          "value": "SELECT \n    e.emp_name AS Employee,\n    m.emp_name AS Manager\nFROM staff e\nLEFT JOIN staff m\nON e.manager_id = m.emp_id;"
        },
        {
          "type": "text",
          "value": "Output"
        },
        {
          "type": "table",
          "headers": [
            "Employee",
            "Manager"
          ],
          "rows": [
            [
              "Ram",
              "NULL"
            ],
            [
              "Sita",
              "Ram"
            ],
            [
              "John",
              "Ram"
            ],
            [
              "David",
              "Sita"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Explanation:\nSame table used twice: e = employee, m = manager. This is called aliasing."
        },
        {
          "type": "text",
          "value": "Difference Between JOIN Types ⭐"
        },
        {
          "type": "table",
          "headers": [
            "JOIN Type",
            "Returns"
          ],
          "rows": [
            [
              "INNER JOIN",
              "Only matching rows"
            ],
            [
              "LEFT JOIN",
              "All left + matching right"
            ],
            [
              "RIGHT JOIN",
              "All right + matching left"
            ],
            [
              "CROSS JOIN",
              "Every combination"
            ],
            [
              "SELF JOIN",
              "Table joins itself"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Easy Memory Trick ⭐\n• INNER → Common\n• LEFT → Everything from LEFT\n• RIGHT → Everything from RIGHT\n• CROSS → All combinations\n• SELF → Same table"
        },
        {
          "type": "text",
          "value": "Real-Time Examples ⭐"
        },
        {
          "type": "table",
          "headers": [
            "JOIN",
            "Real Example"
          ],
          "rows": [
            [
              "INNER JOIN",
              "Students with valid courses"
            ],
            [
              "LEFT JOIN",
              "All customers with orders"
            ],
            [
              "RIGHT JOIN",
              "All products with sales"
            ],
            [
              "CROSS JOIN",
              "Shirt-color combinations"
            ],
            [
              "SELF JOIN",
              "Employee-manager hierarchy"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Practice Questions ⭐\n1. Display employee names with department names.\n2. Show all employees even if no department exists.\n3. Show all departments even if no employee exists.\n4. Generate all possible employee-department combinations.\n5. Display employee and manager names using SELF JOIN."
        }
      ],
      "questions": [
        {
          "question": "Q1. Difference between INNER JOIN and LEFT JOIN?",
          "answer": "INNER JOIN: Only matching rows; non-matching are removed. \nLEFT JOIN: All left rows; non-matching right columns become NULL."
        },
        {
          "question": "Q2. What is Cartesian Product?",
          "answer": "It is the result of a CROSS JOIN where every row from the first table combines with every row from the second table."
        },
        {
          "question": "Q3. Why SELF JOIN is used?",
          "answer": "To relate rows within the same table, such as Employee ↔ Manager or Parent ↔ Child hierarchies."
        }
      ]
    },
    {
      "id": "mysql-joins-3",
      "title": "Joins-3: SQL Joins in MySQL",
      "category": "Queries",
      "definition": "A comprehensive walkthrough of SQL Joins using two tables (Employee and Department), including schema creation, data insertion, and query execution for all major join types.",
      "sections": [
        {
          "type": "text",
          "value": "1️⃣ Create Tables\n\nEmployee Table"
        },
        {
          "type": "code",
          "value": "CREATE TABLE Employee (\n    emp_id INT,\n    emp_name VARCHAR(30),\n    dept_id INT\n);"
        },
        {
          "type": "text",
          "value": "Department Table"
        },
        {
          "type": "code",
          "value": "CREATE TABLE Department (\n    dept_id INT,\n    dept_name VARCHAR(30),\n    location VARCHAR(30)\n);"
        },
        {
          "type": "text",
          "value": "2️⃣ Insert Data\n\nEmployee Table Data"
        },
        {
          "type": "code",
          "value": "INSERT INTO Employee VALUES\n(1, 'Ravi', 101),\n(2, 'Priya', 102),\n(3, 'Kiran', 103),\n(4, 'Anu', NULL);"
        },
        {
          "type": "text",
          "value": "Department Table Data"
        },
        {
          "type": "code",
          "value": "INSERT INTO Department VALUES\n(101, 'HR', 'Hyderabad'),\n(102, 'IT', 'Bangalore'),\n(104, 'Finance', 'Chennai');"
        },
        {
          "type": "text",
          "value": "Table Structures Overview\n\nEmployee Table"
        },
        {
          "type": "table",
          "headers": [
            "emp_id",
            "emp_name",
            "dept_id"
          ],
          "rows": [
            [
              "1",
              "Ravi",
              "101"
            ],
            [
              "2",
              "Priya",
              "102"
            ],
            [
              "3",
              "Kiran",
              "103"
            ],
            [
              "4",
              "Anu",
              "NULL"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Department Table"
        },
        {
          "type": "table",
          "headers": [
            "dept_id",
            "dept_name",
            "location"
          ],
          "rows": [
            [
              "101",
              "HR",
              "Hyderabad"
            ],
            [
              "102",
              "IT",
              "Bangalore"
            ],
            [
              "104",
              "Finance",
              "Chennai"
            ]
          ]
        },
        {
          "type": "text",
          "value": "1️⃣ INNER JOIN\nReturns only matching rows from both tables.\n\nQuery:"
        },
        {
          "type": "code",
          "value": "SELECT E.emp_name, D.dept_name\nFROM Employee E\nINNER JOIN Department D\nON E.dept_id = D.dept_id;"
        },
        {
          "type": "text",
          "value": "Output"
        },
        {
          "type": "table",
          "headers": [
            "emp_name",
            "dept_name"
          ],
          "rows": [
            [
              "Ravi",
              "HR"
            ],
            [
              "Priya",
              "IT"
            ]
          ]
        },
        {
          "type": "text",
          "value": "✅ Only matching dept_id values are shown."
        },
        {
          "type": "text",
          "value": "2️⃣ LEFT JOIN\nReturns all rows from LEFT table + matching rows from RIGHT table.\n\nQuery:"
        },
        {
          "type": "code",
          "value": "SELECT E.emp_name, D.dept_name\nFROM Employee E\nLEFT JOIN Department D\nON E.dept_id = D.dept_id;"
        },
        {
          "type": "text",
          "value": "Output"
        },
        {
          "type": "table",
          "headers": [
            "emp_name",
            "dept_name"
          ],
          "rows": [
            [
              "Ravi",
              "HR"
            ],
            [
              "Priya",
              "IT"
            ],
            [
              "Kiran",
              "NULL"
            ],
            [
              "Anu",
              "NULL"
            ]
          ]
        },
        {
          "type": "text",
          "value": "✅ All employees are displayed."
        },
        {
          "type": "text",
          "value": "3️⃣ RIGHT JOIN\nReturns all rows from RIGHT table + matching rows from LEFT table.\n\nQuery:"
        },
        {
          "type": "code",
          "value": "SELECT E.emp_name, D.dept_name\nFROM Employee E\nRIGHT JOIN Department D\nON E.dept_id = D.dept_id;"
        },
        {
          "type": "text",
          "value": "Output"
        },
        {
          "type": "table",
          "headers": [
            "emp_name",
            "dept_name"
          ],
          "rows": [
            [
              "Ravi",
              "HR"
            ],
            [
              "Priya",
              "IT"
            ],
            [
              "NULL",
              "Finance"
            ]
          ]
        },
        {
          "type": "text",
          "value": "✅ All departments are displayed."
        },
        {
          "type": "text",
          "value": "4️⃣ CROSS JOIN\nReturns all possible combinations.\nFormula: Rows in Table1 × Rows in Table2\nHere: 4 Employees × 3 Departments = 12 Rows\n\nQuery:"
        },
        {
          "type": "code",
          "value": "SELECT E.emp_name, D.dept_name\nFROM Employee E\nCROSS JOIN Department D;"
        },
        {
          "type": "text",
          "value": "Sample Output"
        },
        {
          "type": "table",
          "headers": [
            "emp_name",
            "dept_name"
          ],
          "rows": [
            [
              "Ravi",
              "HR"
            ],
            [
              "Ravi",
              "IT"
            ],
            [
              "Ravi",
              "Finance"
            ],
            [
              "Priya",
              "HR"
            ],
            [
              "Priya",
              "IT"
            ],
            [
              "Priya",
              "Finance"
            ],
            [
              "Kiran",
              "HR"
            ],
            [
              "Kiran",
              "IT"
            ],
            [
              "Kiran",
              "Finance"
            ],
            [
              "Anu",
              "HR"
            ],
            [
              "Anu",
              "IT"
            ],
            [
              "Anu",
              "Finance"
            ]
          ]
        },
        {
          "type": "text",
          "value": "✅ Every row combines with every row."
        },
        {
          "type": "text",
          "value": "5️⃣ SELF JOIN\nA table joins with itself.\n\nCreate Table"
        },
        {
          "type": "code",
          "value": "CREATE TABLE Employees (\n    emp_id INT,\n    emp_name VARCHAR(30),\n    manager_id INT\n);"
        },
        {
          "type": "text",
          "value": "Insert Data"
        },
        {
          "type": "code",
          "value": "INSERT INTO Employees VALUES\n(1, 'Ravi', NULL),\n(2, 'Priya', 1),\n(3, 'Kiran', 1),\n(4, 'Anu', 2);"
        },
        {
          "type": "text",
          "value": "Employees Table Structure"
        },
        {
          "type": "table",
          "headers": [
            "emp_id",
            "emp_name",
            "manager_id"
          ],
          "rows": [
            [
              "1",
              "Ravi",
              "NULL"
            ],
            [
              "2",
              "Priya",
              "1"
            ],
            [
              "3",
              "Kiran",
              "1"
            ],
            [
              "4",
              "Anu",
              "2"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Query"
        },
        {
          "type": "code",
          "value": "SELECT \nE.emp_name AS Employee,\nM.emp_name AS Manager\nFROM Employees E\nLEFT JOIN Employees M\nON E.manager_id = M.emp_id;"
        },
        {
          "type": "text",
          "value": "Output"
        },
        {
          "type": "table",
          "headers": [
            "Employee",
            "Manager"
          ],
          "rows": [
            [
              "Ravi",
              "NULL"
            ],
            [
              "Priya",
              "Ravi"
            ],
            [
              "Kiran",
              "Ravi"
            ],
            [
              "Anu",
              "Priya"
            ]
          ]
        },
        {
          "type": "text",
          "value": "✅ Employee and manager are from the same table."
        },
        {
          "type": "text",
          "value": "Quick Difference Table"
        },
        {
          "type": "table",
          "headers": [
            "JOIN Type",
            "Returns"
          ],
          "rows": [
            [
              "INNER JOIN",
              "Matching rows only"
            ],
            [
              "LEFT JOIN",
              "All left table rows"
            ],
            [
              "RIGHT JOIN",
              "All right table rows"
            ],
            [
              "CROSS JOIN",
              "All combinations"
            ],
            [
              "SELF JOIN",
              "Table joined with itself"
            ]
          ]
        }
      ],
      "questions": []
    },
    {
      "id": "mysql-subqueries",
      "title": "Subqueries in MySQL",
      "category": "Queries",
      "definition": "A subquery is a query nested inside another SQL query. The inner query executes first and its result is used by the outer query to filter or manipulate data.",
      "sections": [
        {
          "type": "text",
          "value": "Syntax:\n\nSELECT column_name\nFROM table_name\nWHERE column_name OPERATOR (\n    SELECT column_name\n    FROM table_name\n);"
        },
        {
          "type": "text",
          "value": "Create Sample Table\nEmployee Table"
        },
        {
          "type": "code",
          "value": "CREATE TABLE Employees (\n    emp_id INT PRIMARY KEY,\n    emp_name VARCHAR(50),\n    department VARCHAR(30),\n    salary INT,\n    manager_id INT\n);"
        },
        {
          "type": "text",
          "value": "Insert 10 Rows"
        },
        {
          "type": "code",
          "value": "INSERT INTO Employees VALUES\n(101, 'Asha',    'HR',       40000, 201),\n(102, 'Ravi',    'IT',       70000, 202),\n(103, 'Kiran',   'Finance',  50000, 201),\n(104, 'Sneha',   'IT',       80000, 202),\n(105, 'Arjun',   'Marketing',45000, 203),\n(106, 'Meena',   'Finance',  60000, 201),\n(107, 'Vikram',  'IT',       75000, 202),\n(108, 'Pooja',   'HR',       42000, 201),\n(109, 'Ramesh',  'Marketing',47000, 203),\n(110, 'Divya',   'IT',       90000, 202);"
        },
        {
          "type": "text",
          "value": "Table Data"
        },
        {
          "type": "table",
          "headers": [
            "emp_id",
            "emp_name",
            "department",
            "salary",
            "manager_id"
          ],
          "rows": [
            [
              "101",
              "Asha",
              "HR",
              "40000",
              "201"
            ],
            [
              "102",
              "Ravi",
              "IT",
              "70000",
              "202"
            ],
            [
              "103",
              "Kiran",
              "Finance",
              "50000",
              "201"
            ],
            [
              "104",
              "Sneha",
              "IT",
              "80000",
              "202"
            ],
            [
              "105",
              "Arjun",
              "Marketing",
              "45000",
              "203"
            ],
            [
              "106",
              "Meena",
              "Finance",
              "60000",
              "201"
            ],
            [
              "107",
              "Vikram",
              "IT",
              "75000",
              "202"
            ],
            [
              "108",
              "Pooja",
              "HR",
              "42000",
              "201"
            ],
            [
              "109",
              "Ramesh",
              "Marketing",
              "47000",
              "203"
            ],
            [
              "110",
              "Divya",
              "IT",
              "90000",
              "202"
            ]
          ]
        },
        {
          "type": "text",
          "value": "1️⃣ Single Row Subquery\n\nA subquery that returns only one row/value. Uses operators like =, >, <, >=, <=."
        },
        {
          "type": "text",
          "value": "Example 1: Find employees earning more than average salary"
        },
        {
          "type": "code",
          "value": "SELECT emp_name, salary\nFROM Employees\nWHERE salary > (\n    SELECT AVG(salary)\n    FROM Employees\n);"
        },
        {
          "type": "output",
          "value": "Inner Query Result: 59900\n\nFinal Output:\nemp_name | salary\nRavi | 70000\nSneha | 80000\nMeena | 60000\nVikram | 75000\nDivya | 90000"
        },
        {
          "type": "text",
          "value": "Example 2: Find employee with highest salary"
        },
        {
          "type": "code",
          "value": "SELECT emp_name, salary\nFROM Employees\nWHERE salary = (\n    SELECT MAX(salary)\n    FROM Employees\n);"
        },
        {
          "type": "output",
          "value": "emp_name | salary\nDivya | 90000"
        },
        {
          "type": "text",
          "value": "2️⃣ Multiple Row Subquery\n\nA subquery that returns multiple rows. Uses operators like IN, ANY, ALL, EXISTS."
        },
        {
          "type": "text",
          "value": "Example 1: IN Operator\nFind employees working in departments where salary > 75000 exists"
        },
        {
          "type": "code",
          "value": "SELECT emp_name, department\nFROM Employees\nWHERE department IN (\n    SELECT department\n    FROM Employees\n    WHERE salary > 75000\n);"
        },
        {
          "type": "output",
          "value": "Inner Query Result: IT\n\nFinal Output:\nemp_name | department\nRavi | IT\nSneha | IT\nVikram | IT\nDivya | IT"
        },
        {
          "type": "text",
          "value": "ANY Operator Example: Find employees earning more than ANY Finance employee"
        },
        {
          "type": "code",
          "value": "SELECT emp_name, salary\nFROM Employees\nWHERE salary > ANY (\n    SELECT salary\n    FROM Employees\n    WHERE department = 'Finance'\n);"
        },
        {
          "type": "output",
          "value": "Condition: salary > ANY(50000, 60000) → salary > 50000\n\nOutput:\nemp_name | salary\nRavi | 70000\nSneha | 80000\nMeena | 60000\nVikram | 75000\nDivya | 90000"
        },
        {
          "type": "text",
          "value": "ALL Operator Example: Find employees earning more than ALL Finance employees"
        },
        {
          "type": "code",
          "value": "SELECT emp_name, salary\nFROM Employees\nWHERE salary > ALL (\n    SELECT salary\n    FROM Employees\n    WHERE department = 'Finance'\n);"
        },
        {
          "type": "output",
          "value": "Condition: salary > ALL(50000, 60000) → salary > 60000\n\nOutput:\nemp_name | salary\nRavi | 70000\nSneha | 80000\nVikram | 75000\nDivya | 90000"
        },
        {
          "type": "text",
          "value": "EXISTS Operator Example: Find departments having employees with salary > 80000"
        },
        {
          "type": "code",
          "value": "SELECT DISTINCT department\nFROM Employees E1\nWHERE EXISTS (\n    SELECT *\n    FROM Employees E2\n    WHERE E1.department = E2.department\n    AND E2.salary > 80000\n);"
        },
        {
          "type": "output",
          "value": "department\nIT"
        },
        {
          "type": "text",
          "value": "3️⃣ Correlated Subquery\n\nA subquery that depends on the outer query. It executes once for every row and inner query uses outer query columns."
        },
        {
          "type": "text",
          "value": "Example: Find employees earning more than their department average salary"
        },
        {
          "type": "code",
          "value": "SELECT emp_name, department, salary\nFROM Employees E1\nWHERE salary > (\n    SELECT AVG(salary)\n    FROM Employees E2\n    WHERE E1.department = E2.department\n);"
        },
        {
          "type": "output",
          "value": "Department Averages:\nHR: 41000, IT: 78750, Finance: 55000, Marketing: 46000\n\nOutput:\nemp_name | department | salary\nSneha | IT | 80000\nMeena | Finance | 60000\nRamesh | Marketing | 47000\nDivya | IT | 90000"
        },
        {
          "type": "text",
          "value": "Difference Between Types"
        },
        {
          "type": "table",
          "headers": [
            "Type",
            "Returns",
            "Operators"
          ],
          "rows": [
            [
              "Single Row Subquery",
              "One row",
              "=, >, <"
            ],
            [
              "Multiple Row Subquery",
              "Multiple rows",
              "IN, ANY, ALL"
            ],
            [
              "Correlated Subquery",
              "Depends on outer query",
              "EXISTS, comparison"
            ]
          ]
        },
        {
          "type": "text",
          "value": "Execution Order:\n1. SELECT\n2. FROM\n3. WHERE (Subquery executes first)\n4. GROUP BY\n5. HAVING\n6. ORDER BY"
        },
        {
          "type": "text",
          "value": "Quick Revision:\n• Subquery: Query inside another query\n• Single Row: Returns one value\n• Multiple Row: Returns many rows\n• Correlated: Depends on outer query\n• IN: Match multiple values\n• ANY: Compare with at least one\n• ALL: Compare with all\n• EXISTS: Checks row existence"
        }
      ],
      "questions": [
        {
          "question": "What is the difference between a subquery and a correlated subquery?",
          "answer": "A regular subquery is independent of the outer query and executes once. A correlated subquery depends on data from the outer query and executes once for each row processed by the outer query."
        },
        {
          "question": "What is the difference between ANY and ALL operators?",
          "answer": "ANY returns TRUE if the comparison is true for at least one value in the subquery result. ALL returns TRUE only if the comparison is true for every value in the subquery result."
        },
        {
          "question": "Which executes first: inner query or outer query?",
          "answer": "In a non-correlated subquery, the inner query executes first and passes its result to the outer query. In a correlated subquery, the execution is interleaved as it runs for each row of the outer query."
        },
        {
          "question": "How does the EXISTS operator work?",
          "answer": "EXISTS checks for the existence of any record in the subquery result. It returns TRUE if the subquery returns one or more rows, and FALSE if no rows are returned."
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
      "id": "reverse-number",
      "title": "Reverse a Number",
      "category": "Basic Algorithms",
      "definition": "Reversing a number involves rearranging its digits in reverse order using mathematical operations like modulo and integer division.",
      "sections": [
        {
          "type": "text",
          "value": "Logic to Reverse a Number:\n1. Get the last digit using n % 10.\n2. Add the digit to the reversed number (rev = rev * 10 + digit).\n3. Remove the last digit using integer division (n // 10)."
        },
        {
          "type": "code",
          "value": "n = 1234\nrev = 0\n\nwhile n > 0:\n    digit = n % 10\n    rev = rev * 10 + digit\n    n = n // 10\n\nprint(rev)"
        },
        {
          "type": "output",
          "value": "4321"
        }
      ],
      "questions": [
        {
          "question": "What mathematical operations are used to reverse a number?",
          "answer": "Modulo (%) is used to extract the last digit, and Integer Division (//) is used to remove the last digit from the original number."
        },
        {
          "question": "How does the formula 'rev = rev * 10 + digit' work?",
          "answer": "It shifts the existing reversed number one position to the left (by multiplying by 10) and then adds the newly extracted last digit to the ones place."
        }
      ]
    },
    {
      "id": "palindrome-number",
      "title": "Palindrome Number",
      "category": "Basic Algorithms",
      "definition": "A palindrome number is a number that remains the same when its digits are reversed (e.g., 121, 1331).",
      "sections": [
        {
          "type": "text",
          "value": "Logic to Check Palindrome:\n1. Store the original number in a temporary variable (temp).\n2. Reverse the given number using modulo and integer division.\n3. Compare the temporary variable (temp) with the reversed number (rev).\n4. If temp == rev, it is a Palindrome; otherwise, it is not."
        },
        {
          "type": "code",
          "value": "n = 121\ntemp = n\nrev = 0\n\nwhile n > 0:\n    digit = n % 10\n    rev = rev * 10 + digit\n    n = n // 10\n\nif temp == rev:\n    print(\"Palindrome\")\nelse:\n    print(\"Not Palindrome\")"
        },
        {
          "type": "output",
          "value": "Palindrome"
        }
      ],
      "questions": [
        {
          "question": "Why do we need a 'temp' variable when checking for a palindrome?",
          "answer": "The original number 'n' becomes 0 during the while loop process. We need 'temp' to store the original value so we can compare it with the reversed number at the end."
        },
        {
          "question": "What is the time complexity of this algorithm?",
          "answer": "O(log10(n)), where n is the input number, because the number of iterations depends on the number of digits in n."
        }
      ]
    },
    {
      "id": "armstrong-number",
      "title": "Armstrong Number",
      "category": "Basic Algorithms",
      "definition": "An Armstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits (e.g., 153 = 1³ + 5³ + 3³).",
      "sections": [
        {
          "type": "text",
          "value": "Logic to Check Armstrong Number:\n1. Store the original number in a temporary variable (temp).\n2. Calculate the number of digits in the number (this will be the power).\n3. Extract each digit using modulo (%).\n4. Raise the digit to the calculated power and add it to a 'sum' variable.\n5. Compare the original number with the final sum."
        },
        {
          "type": "code",
          "value": "n = 153\ntemp = n\npower = len(str(n))\nsum = 0\n\nwhile n > 0:\n    digit = n % 10\n    sum = sum + digit ** power\n    n = n // 10\n\nif temp == sum:\n    print(\"Armstrong Number\")\nelse:\n    print(\"Not Armstrong Number\")"
        },
        {
          "type": "output",
          "value": "Armstrong Number"
        }
      ],
      "questions": [
        {
          "question": "What is an Armstrong Number?",
          "answer": "It is a number where the sum of its digits, each raised to the power of the total number of digits, equals the original number."
        },
        {
          "question": "How do you determine the power in the Armstrong number logic?",
          "answer": "In Python, you can find the power by converting the number to a string and using the len() function: power = len(str(n))."
        }
      ]
    },
    {
      "id": "factorial-number",
      "title": "Factorial of a Number",
      "category": "Basic Algorithms",
      "definition": "The factorial of a non-negative integer n is the product of all positive integers less than or equal to n (e.g., 5! = 5 × 4 × 3 × 2 × 1 = 120).",
      "sections": [
        {
          "type": "text",
          "value": "Logic to Calculate Factorial:\n1. Initialize a variable 'fact' to 1.\n2. Iterate through all numbers from 1 up to 'n'.\n3. In each iteration, multiply 'fact' by the current number.\n4. You can use a 'for' loop with range or a 'while' loop for this process."
        },
        {
          "type": "code",
          "value": "# Using For Loop\nn = 5\nfact = 1\nfor i in range(1, n + 1):\n    fact = fact * i\nprint(fact)\n\n# Using While Loop (Without Range)\nn = 5\nfact = 1\ni = 1\nwhile i <= n:\n    fact = fact * i\n    i = i + 1\nprint(fact)"
        },
        {
          "type": "output",
          "value": "120"
        }
      ],
      "questions": [
        {
          "question": "What is the factorial of 0 and 1?",
          "answer": "The factorial of both 0 and 1 is 1."
        },
        {
          "question": "Can factorial be calculated for negative numbers?",
          "answer": "No, factorial is defined only for non-negative integers. For negative numbers, it is undefined."
        }
      ]
    },
    {
      "id": "fibonacci-series",
      "title": "Fibonacci Series",
      "category": "Basic Algorithms",
      "definition": "The Fibonacci series is a sequence where each number is the sum of the two preceding ones, starting from 0 and 1 (e.g., 0, 1, 1, 2, 3, 5, 8, ...).",
      "sections": [
        {
          "type": "text",
          "value": "Logic to Generate Fibonacci Series:\n1. Initialize the first two numbers, a = 0 and b = 1.\n2. In each iteration, print the current value of 'a'.\n3. Calculate the next number by adding 'a' and 'b' (c = a + b).\n4. Update 'a' to 'b' and 'b' to the new value 'c'.\n5. Continue until you reach the desired number of terms (n)."
        },
        {
          "type": "code",
          "value": "# Using While Loop\nn = 10\na = 0\nb = 1\ncount = 1\nwhile count <= n:\n    print(a, end=\" \")\n    c = a + b\n    a = b\n    b = c\n    count = count + 1\n\n# Using For Loop\nn = 10\na = 0\nb = 1\nfor i in range(n):\n    print(a, end=\" \")\n    c = a + b\n    a = b\n    b = c"
        },
        {
          "type": "output",
          "value": "0 1 1 2 3 5 8 13 21 34"
        }
      ],
      "questions": [
        {
          "question": "What is the Fibonacci series?",
          "answer": "It is a sequence of numbers where each number (after the first two) is the sum of the two preceding numbers."
        },
        {
          "question": "What is the time complexity of generating n Fibonacci numbers using a loop?",
          "answer": "The time complexity is O(n) because we perform a single loop that runs n times."
        }
      ]
    },
    {
      "id": "prime-number",
      "title": "Prime Number",
      "category": "Basic Algorithms",
      "definition": "A prime number is a natural number greater than 1 that is only divisible by 1 and itself (e.g., 2, 3, 5, 7, 11, ...).",
      "sections": [
        {
          "type": "text",
          "value": "Logic to Check Prime Number:\n1. Initialize a 'count' variable to 0.\n2. Iterate through all numbers from 1 up to the given number 'n'.\n3. Check if 'n' is divisible by the current iterator 'i' (n % i == 0).\n4. If divisible, increment the 'count' variable.\n5. After the loop, if 'count' is exactly 2, the number is Prime; otherwise, it is not."
        },
        {
          "type": "code",
          "value": "# Using While Loop\nn = 7\ncount = 0\ni = 1\nwhile i <= n:\n    if n % i == 0:\n        count += 1\n    i = i + 1\nif count == 2:\n    print(\"Prime\")\nelse:\n    print(\"Not Prime\")\n\n# Using For Loop\nn = 7\ncount = 0\nfor i in range(1, n + 1):\n    if n % i == 0:\n        count += 1\nif count == 2:\n    print(\"Prime\")\nelse:\n    print(\"Not Prime\")"
        },
        {
          "type": "output",
          "value": "Prime"
        }
      ],
      "questions": [
        {
          "question": "Is 1 a prime number?",
          "answer": "No, 1 is not a prime number because a prime number must have exactly two distinct positive divisors: 1 and itself."
        },
        {
          "question": "What is the only even prime number?",
          "answer": "2 is the only even prime number. All other even numbers are divisible by 2, giving them more than two divisors."
        }
      ]
    },
    {
      "id": "swap-two-numbers",
      "title": "Swap Two Numbers",
      "category": "Basic Algorithms",
      "definition": "Swapping two numbers means interchanging their values so that each variable holds the other's original value.",
      "sections": [
        {
          "type": "text",
          "value": "Logic to Swap Two Numbers:\n\n1. Using Temporary Variable:\n• Store value of 'a' in 'temp'.\n• Assign value of 'b' to 'a'.\n• Assign value of 'temp' (original 'a') to 'b'.\n\n2. Using Arithmetic Operations (Without Temp):\n• a = a + b (a now holds sum)\n• b = a - b (b now holds original a)\n• a = a - b (a now holds original b)"
        },
        {
          "type": "code",
          "value": "# Method 1: Using Temporary Variable\na = 10\nb = 20\ntemp = a\na = b\nb = temp\nprint(\"After Swap (Temp):\", a, b)\n\n# Method 2: Without Temporary Variable\na = 10\nb = 20\na = a + b\nb = a - b\na = a - b\nprint(\"After Swap (Arithmetic):\", a, b)"
        },
        {
          "type": "output",
          "value": "20 10"
        }
      ],
      "questions": [
        {
          "question": "How can you swap two numbers in a single line in Python?",
          "answer": "In Python, you can use tuple unpacking: a, b = b, a. This is the most 'Pythonic' and efficient way."
        },
        {
          "question": "What is the advantage of swapping without a temporary variable?",
          "answer": "It saves space because no extra memory is allocated for a third variable, though the arithmetic method can sometimes lead to overflow in languages with fixed integer sizes (not usually an issue in Python)."
        }
      ]
    },
    {
      "id": "count-digits",
      "title": "Count Digits in a Number",
      "category": "Basic Algorithms",
      "definition": "Counting digits is the process of determining the total number of individual digits that form a numerical value.",
      "sections": [
        {
          "type": "text",
          "value": "Logic to Count Digits:\n\n1. Using While Loop:\n• Initialize a 'count' variable to 0.\n• While the number 'n' is greater than 0, increment 'count'.\n• Divide 'n' by 10 using integer division (//) to remove the last digit.\n\n2. Using String Conversion:\n• Convert the number to a string using str(n).\n• Use the len() function to find the length of the string."
        },
        {
          "type": "code",
          "value": "# Method 1: Using While Loop\nn = 12345\ncount = 0\nwhile n > 0:\n    count += 1\n    n = n // 10\nprint(\"Count (Loop):\", count)\n\n# Method 2: Using String Conversion\nn = 12345\ncount = len(str(n))\nprint(\"Count (String):\", count)"
        },
        {
          "type": "output",
          "value": "5"
        }
      ],
      "questions": [
        {
          "question": "Which method is faster for counting digits in Python?",
          "answer": "Method 2 (string conversion) is usually faster and more concise in Python, though Method 1 (loop) is more universal across different programming languages."
        },
        {
          "question": "How would you handle negative numbers when counting digits?",
          "answer": "For negative numbers, you should first take the absolute value using abs(n) before counting, otherwise the loop condition (n > 0) or the negative sign in the string will lead to incorrect results."
        }
      ]
    },
    {
      "id": "sum-of-digits",
      "title": "Sum of Digits",
      "category": "Basic Algorithms",
      "definition": "Sum of digits is the calculation of the total value obtained by adding every individual digit in a number (e.g., 123 -> 1+2+3 = 6).",
      "sections": [
        {
          "type": "text",
          "value": "Logic to Calculate Sum of Digits:\n\n1. Using While Loop:\n• Extract the last digit using modulo (n % 10).\n• Add this digit to a running 'sum' variable.\n• Remove the last digit using integer division (n // 10).\n\n2. Using String Conversion:\n• Convert the number to a string using str(n).\n• Loop through each character (digit) in the string.\n• Convert each character back to an integer using int() and add it to 'sum'."
        },
        {
          "type": "code",
          "value": "# Method 1: Using While Loop\nn = 123\nsum = 0\nwhile n > 0:\n    digit = n % 10\n    sum = sum + digit\n    n = n // 10\nprint(\"Sum (Loop):\", sum)\n\n# Method 2: Using String Conversion\nn = 123\nsum = 0\nfor digit in str(n):\n    sum = sum + int(digit)\nprint(\"Sum (String):\", sum)"
        },
        {
          "type": "output",
          "value": "6"
        }
      ],
      "questions": [
        {
          "question": "What is the result of n % 10 for any positive integer?",
          "answer": "It returns the remainder after dividing by 10, which is always the last digit of the number."
        },
        {
          "question": "Which method is safer for very large numbers in Python?",
          "answer": "Both methods work well in Python because it automatically handles arbitrarily large integers, but the string method can be slightly more intuitive for beginners."
        }
      ]
    },
    {
      "id": "product-of-digits",
      "title": "Product of Digits",
      "category": "Basic Algorithms",
      "definition": "Product of digits is the calculation of the total value obtained by multiplying every individual digit in a number (e.g., 123 -> 1*2*3 = 6).",
      "sections": [
        {
          "type": "text",
          "value": "Logic to Calculate Product of Digits:\n\n1. Using While Loop:\n• Extract the last digit using modulo (n % 10).\n• Multiply this digit with a running 'mul' variable (initialized to 1).\n• Remove the last digit using integer division (n // 10).\n\n2. Using String Conversion:\n• Convert the number to a string using str(n).\n• Loop through each character (digit) in the string.\n• Convert each character back to an integer and multiply it with 'mul'."
        },
        {
          "type": "code",
          "value": "# Method 1: Using While Loop\nn = 123\nmul = 1\nwhile n > 0:\n    digit = n % 10\n    mul = mul * digit\n    n = n // 10\nprint(\"Product (Loop):\", mul)\n\n# Method 2: Using String Conversion\nn = 123\nmul = 1\nfor digit in str(n):\n    mul = mul * int(digit)\nprint(\"Product (String):\", mul)"
        },
        {
          "type": "output",
          "value": "6"
        }
      ],
      "questions": [
        {
          "question": "What happens if the number contains the digit 0?",
          "answer": "The entire product will become 0 because any number multiplied by zero is zero."
        },
        {
          "question": "Why is the product variable initialized to 1?",
          "answer": "In multiplication, 1 is the identity element. If initialized to 0, the result of any multiplication would always remain 0."
        }
      ]
    },
    {
      "id": "leap-year-check",
      "title": "Leap Year Check",
      "category": "Basic Algorithms",
      "definition": "A leap year is a year containing an extra day (366 days instead of 365) to align the calendar with the Earth's orbit around the Sun.",
      "sections": [
        {
          "type": "text",
          "value": "Logic to Check Leap Year:\nA year is a leap year if it satisfies either of these conditions:\n1. It is divisible by 400.\n2. It is divisible by 4 AND NOT divisible by 100.\n\nThis ensures that century years are only leap years if they are divisible by 400."
        },
        {
          "type": "code",
          "value": "year = 2024\n\nif (year % 400 == 0) or (year % 4 == 0 and year % 100 != 0):\n    print(\"Leap Year\")\nelse:\n    print(\"Not Leap Year\")"
        },
        {
          "type": "output",
          "value": "Leap Year"
        }
      ],
      "questions": [
        {
          "question": "Why is the divisible by 400 rule necessary?",
          "answer": "The solar year is slightly shorter than 365.25 days. The 400-year rule compensates for this small difference by excluding three out of every four century years from being leap years."
        },
        {
          "question": "Is 2100 a leap year?",
          "answer": "No. While 2100 is divisible by 4, it is also divisible by 100 and NOT by 400, so it fails the leap year conditions."
        }
      ]
    },
    {
      "id": "even-odd-check",
      "title": "Even or Odd Number",
      "category": "Basic Algorithms",
      "definition": "An even number is any integer that can be divided exactly by 2, whereas an odd number always leaves a remainder of 1 when divided by 2.",
      "sections": [
        {
          "type": "text",
          "value": "Logic to Check Even or Odd:\n1. Take a number as input.\n2. Use the modulo operator (%) to find the remainder when the number is divided by 2.\n3. If the remainder is 0 (n % 2 == 0), the number is Even.\n4. If the remainder is not 0, the number is Odd."
        },
        {
          "type": "code",
          "value": "def check_even_odd(num):\n    if num % 2 == 0:\n        return \"Even\"\n    else:\n        return \"Odd\"\n\n# Example Usage\nn = 10\nprint(f\"{n} is {check_even_odd(n)}\")"
        },
        {
          "type": "output",
          "value": "10 is Even"
        }
      ],
      "questions": [
        {
          "question": "What does the % operator do in Python?",
          "answer": "The % (modulo) operator returns the remainder of a division operation between two numbers."
        },
        {
          "question": "Is 0 considered even or odd?",
          "answer": "Zero is considered an even number because 0 divided by 2 leaves a remainder of 0."
        }
      ]
    },
    {
      "id": "largest-of-three",
      "title": "Largest of Three Numbers",
      "category": "Basic Algorithms",
      "definition": "Determining the largest of three numbers involves comparing the values to identify the one with the highest numerical magnitude.",
      "sections": [
        {
          "type": "text",
          "value": "Logic to Find Largest of Three:\n\n1. Using Conditional Statements (If-Elif-Else):\n• Check if 'a' is greater than both 'b' and 'c'.\n• If not, check if 'b' is greater than 'c'.\n• If both fail, 'c' is the largest.\n\n2. Using Built-in max() Function:\n• Use the max(a, b, c) function, which internally compares all arguments and returns the highest value."
        },
        {
          "type": "code",
          "value": "# Method 1: Using If-Elif-Else\na = 10\nb = 50\nc = 30\nif a > b and a > c:\n    print(a)\nelif b > c:\n    print(b)\nelse:\n    print(c)\n\n# Method 2: Using Built-in max()\ndef find_largest(a, b, c):\n    return max(a, b, c)\nprint(\"Largest:\", find_largest(10, 50, 30))"
        },
        {
          "type": "output",
          "value": "50"
        }
      ],
      "questions": [
        {
          "question": "Why is 'elif' used instead of a second 'if' in the comparison logic?",
          "answer": "Using 'elif' makes the code more efficient because once a condition is met, the subsequent conditions are not checked, saving processing time."
        },
        {
          "question": "Can max() take more than three arguments?",
          "answer": "Yes, max() can take any number of arguments or even an iterable like a list, and it will return the largest element."
        }
      ]
    },
    {
      "id": "sum-natural-numbers",
      "title": "Sum of Natural Numbers",
      "category": "Basic Algorithms",
      "definition": "The sum of natural numbers is the cumulative total of all positive integers from 1 up to a specified value 'n'.",
      "sections": [
        {
          "type": "text",
          "value": "Logic to Calculate Sum of Natural Numbers:\n\n1. Using Loops (Iterative):\n• Initialize sum to 0.\n• Loop from 1 to n.\n• Add each number to the sum.\n\n2. Using Mathematical Formula (O(1)):\n• Use the formula: Sum = n * (n + 1) / 2.\n• This method is significantly faster as it calculates the result directly without looping."
        },
        {
          "type": "code",
          "value": "# Method 1: Using While Loop\ndef natural_sum_loop(n):\n    sum = 0\n    i = 1\n    while i <= n:\n        sum = sum + i\n        i += 1\n    return sum\n\n# Method 2: Using For Loop\nn = 5\nsum = 0\nfor i in range(1, n + 1):\n    sum += i\n\n# Method 3: Using Formula\ndef natural_sum_formula(n):\n    return n * (n + 1) // 2"
        },
        {
          "type": "output",
          "value": "15"
        }
      ],
      "questions": [
        {
          "question": "What is the time complexity of the formula-based method?",
          "answer": "O(1), because it performs a fixed number of operations regardless of how large 'n' is."
        },
        {
          "question": "Why is integer division (//) used in the formula in Python?",
          "answer": "Using // ensures that the result is returned as an integer. Since the product of n and (n+1) is always even, the division by 2 will always be exact."
        }
      ]
    },
    {
      "id": "positive-negative-check",
      "title": "Positive, Negative, or Zero Check",
      "category": "Basic Algorithms",
      "definition": "Determining the state of a number involves comparing it against zero to categorize it as positive, negative, or zero.",
      "sections": [
        {
          "type": "text",
          "value": "Logic to Check Number State:\n1. Use an 'if' statement to check if the number is greater than 0.\n2. Use an 'elif' statement to check if the number is less than 0.\n3. Use an 'else' statement to handle the case where the number is exactly 0."
        },
        {
          "type": "code",
          "value": "def check_number(n):\n    if n > 0:\n        return \"Positive\"\n    elif n < 0:\n        return \"Negative\"\n    else:\n        return \"Zero\"\n\n# Example Usage\nn = -5\nprint(f\"{n} is {check_number(n)}\")"
        },
        {
          "type": "output",
          "value": "-5 is Negative"
        }
      ],
      "questions": [
        {
          "question": "What is the importance of zero in this check?",
          "answer": "Zero acts as the origin point; every other real number is either greater than zero or less than zero."
        },
        {
          "question": "Can this be solved using a ternary operator?",
          "answer": "Yes, but it would be nested: 'Positive' if n > 0 else ('Negative' if n < 0 else 'Zero')."
        }
      ]
    },
    {
      "id": "count-even-odd-digits",
      "title": "Count Even and Odd Digits",
      "category": "Basic Algorithms",
      "definition": "This algorithm iterates through each digit of a number and determines whether it is even or odd, maintaining a count for both categories.",
      "sections": [
        {
          "type": "text",
          "value": "Logic to Count Even/Odd Digits:\n1. Extract the last digit of the number using modulo (n % 10).\n2. Check if the extracted digit is divisible by 2 (digit % 2 == 0).\n3. Increment the 'even' counter if divisible; otherwise, increment the 'odd' counter.\n4. Use integer division (n // 10) to remove the last digit.\n5. Repeat the process until all digits are processed (n > 0)."
        },
        {
          "type": "code",
          "value": "def count_even_odd(n):\n    even = 0\n    odd = 0\n    while n > 0:\n        digit = n % 10\n        if digit % 2 == 0:\n            even += 1\n        else:\n            odd += 1\n        n = n // 10\n    print(\"Even Count:\", even)\n    print(\"Odd Count:\", odd)\n\n# Example Usage\ncount_even_odd(12345)"
        },
        {
          "type": "output",
          "value": "Even Count: 2\nOdd Count: 3"
        }
      ],
      "questions": [
        {
          "question": "Does zero count as an even digit in this logic?",
          "answer": "Yes, zero is treated as an even digit because 0 % 2 equals 0."
        },
        {
          "question": "Could this be implemented by converting the number to a string?",
          "answer": "Yes, you could iterate through the string characters, convert each back to an integer, and perform the parity check."
        }
      ]
    },
    {
      "id": "simple-calculator",
      "title": "Simple Calculator",
      "category": "Basic Algorithms",
      "definition": "A simple calculator implementation using conditional statements to perform basic mathematical operations like addition, subtraction, multiplication, and division.",
      "sections": [
        {
          "type": "text",
          "value": "Logic for Simple Calculator:\n1. Accept two numerical inputs (a and b).\n2. Accept an operator string (+, -, *, /).\n3. Use if-elif-else blocks to determine which mathematical operation to execute based on the operator.\n4. Return the calculated result or a warning for invalid operators."
        },
        {
          "type": "code",
          "value": "def calculator(a, b, op):\n    if op == \"+\":\n        return a + b\n    elif op == \"-\":\n        return a - b\n    elif op == \"*\":\n        return a * b\n    elif op == \"/\":\n        return a / b\n    else:\n        return \"Invalid Operator\"\n\n# Example Usage\nprint(\"Result:\", calculator(10, 5, \"*\"))"
        },
        {
          "type": "output",
          "value": "Result: 50"
        }
      ],
      "questions": [
        {
          "question": "How should you handle division by zero in this program?",
          "answer": "You should add an additional check inside the 'elif op == \"/\"' block to see if 'b == 0'. If it is, return an error message like 'Cannot divide by zero' to prevent the program from crashing."
        },
        {
          "question": "Can this be implemented using a dictionary instead of if-elif?",
          "answer": "Yes, you can use a dictionary to map operator strings to functions or lambda expressions for a more modular and cleaner implementation."
        }
      ]
    },
    {
      "id": "perfect-number",
      "title": "Perfect Number",
      "category": "Basic Algorithms",
      "definition": "A perfect number is a positive integer that equals the sum of its proper divisors (excluding the number itself). For example, 6 has divisors 1, 2, and 3, and 1+2+3 = 6.",
      "sections": [
        {
          "type": "text",
          "value": "Logic to Check Perfect Number:\n1. Initialize a variable 'sum' to 0.\n2. Loop through all integers from 1 up to (but not including) the number 'n'.\n3. Check if the current integer 'i' is a divisor of 'n' (n % i == 0).\n4. If it is a divisor, add it to 'sum'.\n5. After the loop, compare the final 'sum' with the original number 'n'.\n6. If they are equal, it's a Perfect Number."
        },
        {
          "type": "code",
          "value": "# Using While Loop\nn = 28\nsum = 0\ni = 1\nwhile i < n:\n    if n % i == 0:\n        sum = sum + i\n    i += 1\nif sum == n:\n    print(\"Perfect Number\")\nelse:\n    print(\"Not Perfect\")\n\n# Using For Loop\nn = 6\nsum = 0\nfor i in range(1, n):\n    if n % i == 0:\n        sum += i\nif sum == n:\n    print(\"Perfect Number\")\nelse:\n    print(\"Not Perfect\")"
        },
        {
          "type": "output",
          "value": "Perfect Number"
        }
      ],
      "questions": [
        {
          "question": "What are some examples of perfect numbers?",
          "answer": "The first few perfect numbers are 6, 28, 496, and 8128."
        },
        {
          "question": "What is the time complexity of this perfect number check?",
          "answer": "O(n), as we iterate through every number from 1 to n-1. It can be optimized to O(sqrt(n)) by iterating only up to the square root of n."
        }
      ]
    },
    {
      "id": "strong-number",
      "title": "Strong Number",
      "category": "Basic Algorithms",
      "definition": "A strong number is a special number whose sum of factorials of its digits is equal to the original number (e.g., 145 -> 1! + 4! + 5! = 1 + 24 + 120 = 145).",
      "sections": [
        {
          "type": "text",
          "value": "Logic to Check Strong Number:\n1. Store the original number in a temporary variable (temp).\n2. Extract each digit from the number using modulo (n % 10).\n3. Calculate the factorial of each extracted digit.\n4. Add the factorial value to a running 'sum' variable.\n5. Remove the last digit using integer division (n // 10) and repeat.\n6. Finally, if 'sum' equals 'temp', it is a Strong Number."
        },
        {
          "type": "code",
          "value": "# Method 1: Using While Loops\ndef check_strong(n):\n    temp = n\n    sum = 0\n    while n > 0:\n        digit = n % 10\n        fact = 1\n        i = 1\n        while i <= digit:\n            fact *= i\n            i += 1\n        sum += fact\n        n //= 10\n    return \"Strong Number\" if sum == temp else \"Not Strong\"\n\n# Method 2: Using For Loop for Factorial\nn = 145\ntemp, sum = n, 0\nwhile n > 0:\n    digit = n % 10\n    fact = 1\n    for i in range(1, digit + 1):\n        fact *= i\n    sum += fact\n    n //= 10\nprint(\"Strong Number\" if sum == temp else \"Not Strong\")"
        },
        {
          "type": "output",
          "value": "Strong Number"
        }
      ],
      "questions": [
        {
          "question": "Give examples of Strong Numbers.",
          "answer": "Common examples include 1, 2, 145, and 40585."
        },
        {
          "question": "How can you optimize the factorial calculation in this algorithm?",
          "answer": "Since there are only 10 possible digits (0-9), you can pre-calculate their factorials and store them in a list or dictionary to avoid redundant calculations."
        }
      ]
    },
    {
      "id": "multiplication-table",
      "title": "Multiplication Table",
      "category": "Basic Algorithms",
      "definition": "Generating a multiplication table involves iterating through a range of numbers and multiplying them by a base value to display the products in a structured format.",
      "sections": [
        {
          "type": "text",
          "value": "Logic to Generate Multiplication Table:\n1. Accept a base number (n).\n2. Iterate through a range of integers from 1 up to 10 (or a custom limit).\n3. In each iteration, multiply the base number by the current iterator (n * i).\n4. Format the output to show the relationship: 'n x i = product'."
        },
        {
          "type": "code",
          "value": "# Method 1: Using For Loop\ndef print_table(num):\n    for i in range(1, 11):\n        print(f\"{num} x {i} = {num * i}\")\n\n# Method 2: Using While Loop\nn = 5\ni = 1\nwhile i <= 10:\n    print(f\"{n} x {i} = {n * i}\")\n    i += 1"
        },
        {
          "type": "output",
          "value": "5 x 1 = 5\n5 x 2 = 10\n...\n5 x 10 = 50"
        }
      ],
      "questions": [
        {
          "question": "How can you customize the range of the multiplication table?",
          "answer": "You can change the range(1, 11) function to range(1, limit + 1) where 'limit' is the desired ending number for your table."
        },
        {
          "question": "Why is range(1, 11) used to go from 1 to 10?",
          "answer": "In Python, the range(start, stop) function is inclusive of the start but exclusive of the stop value. Thus, to include 10, we must specify 11 as the stop value."
        }
      ]
    },
    {
      "id": "neon-number",
      "title": "Neon Number",
      "category": "Basic Algorithms",
      "definition": "A neon number is a number where the sum of digits of its square is equal to the original number (e.g., 9^2 = 81, and 8 + 1 = 9).",
      "sections": [
        {
          "type": "text",
          "value": "Logic to Check Neon Number:\n1. Calculate the square of the given number (n * n).\n2. Initialize a 'sum' variable to 0.\n3. Extract each digit from the square using modulo (% 10) and add it to 'sum'.\n4. Remove the last digit from the square using integer division (// 10).\n5. Repeat until the square is 0.\n6. If the 'sum' equals the original number 'n', it is a Neon Number; otherwise, it is not."
        },
        {
          "type": "code",
          "value": "n = 9\n\nsquare = n * n\nsum = 0\n\nwhile square > 0:\n    digit = square % 10\n    sum += digit\n    square = square // 10\n\nif sum == n:\n    print(\"Neon Number\")\nelse:\n    print(\"Not Neon Number\")"
        },
        {
          "type": "output",
          "value": "Neon Number"
        }
      ],
      "questions": [
        {
          "question": "What are the single-digit neon numbers other than 0 and 1?",
          "answer": "9 is the only other single-digit Neon Number in base 10 (since 9^2 = 81 and 8 + 1 = 9)."
        },
        {
          "question": "Why are neon numbers extremely rare?",
          "answer": "As numbers grow larger, their squares grow much faster than the sum of their digits. For example, for a 3-digit number n, its square is a 5 or 6 digit number, and the maximum possible sum of digits for a 6-digit number is 54, which is far less than n."
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
