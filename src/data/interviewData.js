export const interviewData = {
  python: [
  {
    "id": "intro-to-oop",
    "title": "Python is an Object-Oriented Programming (OOP) Language",
    "category": "OOP",
    "definition": "Python is an object-oriented language, allowing you to structure your code using Classes and Objects for better organization and management.",
    "sections": [
      {
        "type": "text",
        "value": "Why OOP is Used in Python:\n• Code Reusability: Reuse existing code using inheritance.\n• Security: Protect data using encapsulation and data hiding.\n• Scalability: Easily expand large applications.\n• Real-World Modeling: Represent real-life objects like Students, Cars, or Bank Accounts.\n• Better Organization: Code becomes clean, modular, and easier to maintain."
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
        "value": "Real-World Example: Bank Account\n• Class → BankAccount\n• Objects → Customer accounts (each can have a different balance, account number, and transactions).\nAdvantages of OOP:\n• Classes & Objects: Better code structure\n• Inheritance: Reuse code\n• Encapsulation: Data security\n• Polymorphism: Flexibility\n• Abstraction: Hide complexity\nConclusion:\nObject-Oriented Programming helps Python developers build organized, reusable, secure, and scalable real-world software applications efficiently."
      },
      {
        "type": "text",
        "value": "🔹 1. What is OOP?\nObject-Oriented Programming is a way to organize code using classes and objects."
      },
      {
        "type": "text",
        "value": "🔹 2. Why is OOP used in Python?\nIt helps in code reusability, security, and scalability."
      },
      {
        "type": "text",
        "value": "🔹 3. Name the four pillars of OOP.\nInheritance, Encapsulation, Abstraction, and Polymorphism."
      },
      {
        "type": "text",
        "value": "Quick Revision:\n• Class: Blueprint\n• Object: Real Instance\n• Reusability: Inheritance\n• Security: Encapsulation"
      }
    ],
    "questions": []
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
        "value": "🔹 1. What are the four pillars of OOP?\nInheritance, Encapsulation, Abstraction, and Polymorphism."
      },
      {
        "type": "text",
        "value": "🔹 2. Which pillar is used for data security?\nEncapsulation."
      },
      {
        "type": "text",
        "value": "🔹 3. What does polymorphism mean?\nOne method behaving differently for different objects."
      },
      {
        "type": "text",
        "value": "Quick Revision:\n• Inheritance: Reusability\n• Encapsulation: Security\n• Abstraction: Hiding Complexity\n• Polymorphism: Flexibility"
      }
    ],
    "questions": []
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
        "value": "🔹 1. What is inheritance?\nInheritance allows a class to inherit properties and methods from another class."
      },
      {
        "type": "text",
        "value": "🔹 2. What is a parent class?\nThe class being inherited from."
      },
      {
        "type": "text",
        "value": "🔹 3. What is the main benefit of inheritance?\nCode reusability."
      },
      {
        "type": "text",
        "value": "Quick Revision:\n• Parent Class: Base Class\n• Child Class: Derived Class\n• Benefit: Reusability"
      }
    ],
    "questions": []
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
        "value": "🔹 1. What is the purpose of super()?\nTo call parent class constructors or methods from a child class."
      },
      {
        "type": "text",
        "value": "🔹 2. Does super() help in reducing code duplication?\nYes, it reuses the parent class constructor code."
      },
      {
        "type": "text",
        "value": "🔹 3. Where should super() be used?\nInside the child class constructor or methods."
      },
      {
        "type": "text",
        "value": "Quick Revision:\n• super(): Call Parent\n• __init__(): Constructor\n• Benefit: No duplication"
      }
    ],
    "questions": []
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
        "value": "🔹 1. How does OOP provide security?\nThrough encapsulation and data hiding."
      },
      {
        "type": "text",
        "value": "🔹 2. What is the difference between encapsulation and data hiding?\nEncapsulation is wrapping data+methods; Data hiding is restricting access."
      },
      {
        "type": "text",
        "value": "🔹 3. How do you create a private variable in Python?\nBy using double underscores (e.g., __balance)."
      },
      {
        "type": "text",
        "value": "Quick Revision:\n• Encapsulation: Wrapping\n• Data Hiding: Restricting Access\n• Private: __variable"
      }
    ],
    "questions": []
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
        "value": "🔹 1. What is a protected variable?\nA variable meant for internal use, indicated by a single underscore (_)."
      },
      {
        "type": "text",
        "value": "🔹 2. Can you access a private variable directly outside the class?\nNo, it will result in an error."
      },
      {
        "type": "text",
        "value": "🔹 3. How do you indicate a private variable in Python?\nUsing double underscores (e.g., __salary)."
      },
      {
        "type": "text",
        "value": "Quick Revision:\n• _var: Protected\n• __var: Private\n• name: Public"
      }
    ],
    "questions": []
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
        "value": "🔹 1. What is abstraction?\nHiding internal implementation and showing only essential features."
      },
      {
        "type": "text",
        "value": "🔹 2. How do you achieve abstraction in Python?\nUsing the \"abc\" module and @abstractmethod decorator."
      },
      {
        "type": "text",
        "value": "🔹 3. Can you create an object of an abstract class?\nNo, abstract classes cannot be instantiated."
      },
      {
        "type": "text",
        "value": "Quick Revision:\n• ABC: Abstract Base Class\n• @abstractmethod: Must be implemented by child\n• Implementation: Hidden"
      }
    ],
    "questions": []
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
        "type": "text",
        "value": "Real-Time Bank Example:\nSame method transaction() behaves differently for different account types."
      },
      {
        "type": "code",
        "value": "class BankAccount:\n    def transaction(self):\n        print(\"Bank Transaction\")\n\nclass SavingsAccount(BankAccount):\n    def transaction(self):\n        print(\"Savings Account Transaction\")\n\nclass CurrentAccount(BankAccount):\n    def transaction(self):\n        print(\"Current Account Transaction\")\n\nobj1 = SavingsAccount()\nobj2 = CurrentAccount()\nobj1.transaction()\nobj2.transaction()"
      },
      {
        "type": "output",
        "value": "Savings Account Transaction\nCurrent Account Transaction"
      },
      {
        "type": "text",
        "value": "Advantages of Polymorphism:\n• Code Reusability: Same method reused\n• Flexibility: Works with different objects\n• Easy Maintenance: Cleaner code structure\n• Cleaner Code: Less duplicate code\n• Dynamic Behavior: Methods behave differently"
      },
      {
        "type": "table",
        "headers": ["Method Overloading", "Method Overriding"],
        "rows": [
          ["Same method name with different arguments", "Same method in parent and child"],
          ["Achieved using default arguments", "Achieved using inheritance"],
          ["Happens inside same class", "Happens between parent and child class"]
        ]
      },
      {
        "type": "text",
        "value": "🔹 1. What is Polymorphism?\n\nPolymorphism means one method, function, or operator can perform different behaviors."
      },
      {
        "type": "text",
        "value": "🔹 2. What are the Types of Polymorphism?\nMethod Overriding\nMethod Overloading\nOperator Overloading\nDuck Typing"
      },
      {
        "type": "text",
        "value": "🔹 3. What is Method Overriding?\n\nMethod overriding occurs when a child class redefines the method of the parent class."
      },
      {
        "type": "text",
        "value": "🔹 4. Does Python Support Method Overloading?\n\nPython does not support true method overloading directly like Java.\nbut it can be achieved using default arguments."
      },
      {
        "type": "text",
        "value": "🔹 5. What is Operator Overloading?\n\nOperator overloading means changing the behavior of operators using magic methods."
      },
      {
        "type": "text",
        "value": "🔹 6. What is Duck Typing?\n\nA concept where an object's suitability is determined by its methods and behavior, not its type."
      },
      {
        "type": "text",
        "value": "Quick Revision:\n• Overriding: Child changes Parent\n• Overloading: Multiple args\n• Duck Typing: Behavior over Type"
      }],
    "questions": []
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
        "value": "🔹 1. What is Function Polymorphism?\nFunction polymorphism means the same function works with different types of objects or data."
      },
      {
        "type": "text",
        "value": "🔹 2. Give examples of function polymorphism.\nExamples: len(), print(), User-defined functions"
      },
      {
        "type": "text",
        "value": "🔹 3. Which concept is related to function polymorphism?\nDuck Typing."
      },
      {
        "type": "text",
        "value": "Quick Revision:\n• len(): String, List, Tuple, Dictionary\n• print(): All data types\n• User-defined Function: Different objects"
      }
    ],
    "questions": []
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
        "value": "🔹 1. What is a class?\nA blueprint or template for creating objects."
      },
      {
        "type": "text",
        "value": "🔹 2. How do you define a class in Python?\nUsing the \"class\" keyword followed by the class name."
      },
      {
        "type": "text",
        "value": "🔹 3. Can a class have both variables and functions?\nYes, they are called attributes and methods."
      },
      {
        "type": "text",
        "value": "Quick Revision:\n• Keyword: class\n• Purpose: Blueprint\n• Components: Attributes & Methods"
      }
    ],
    "questions": []
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
        "value": "🔹 1. What does the pass statement do?\nIt is a null operation; nothing happens when it executes."
      },
      {
        "type": "text",
        "value": "🔹 2. Why do we use pass in a class?\nTo avoid errors when a class is empty but required by syntax."
      },
      {
        "type": "text",
        "value": "🔹 3. Is pass a reserved keyword?\nYes, it is a built-in keyword in Python."
      },
      {
        "type": "text",
        "value": "Quick Revision:\n• pass: Placeholder\n• Purpose: Avoid Syntax Error\n• Use Case: Future Code"
      }
    ],
    "questions": []
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
        "value": "🔹 1. What is an object?\nA real instance created from a class."
      },
      {
        "type": "text",
        "value": "🔹 2. How do you create an object in Python?\nBy calling the class name followed by parentheses (e.g., s1 = Student())."
      },
      {
        "type": "text",
        "value": "🔹 3. Can multiple objects be created from one class?\nYes, you can create as many objects as needed."
      },
      {
        "type": "text",
        "value": "Quick Revision:\n• Object: Instance\n• Access: dot (.) notation\n• Creation: ClassName()"
      }
    ],
    "questions": []
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
        "value": "🔹 1. What is the __init__ method?\nA constructor method that runs automatically when an object is created."
      },
      {
        "type": "text",
        "value": "🔹 2. Why is __init__ called a constructor?\nBecause it helps \"construct\" or initialize the object properties."
      },
      {
        "type": "text",
        "value": "🔹 3. Is the \"self\" parameter mandatory in __init__?\nYes, it must be the first parameter to refer to the current instance."
      },
      {
        "type": "text",
        "value": "Quick Revision:\n• __init__: Constructor\n• Trigger: Object Creation\n• Purpose: Initialization"
      }
    ],
    "questions": []
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
        "value": "🔹 1. What are default values in __init__?\nValues assigned to parameters in the constructor that are used if no argument is provided."
      },
      {
        "type": "text",
        "value": "🔹 2. How do you override a default value?\nBy passing a specific value when creating the object."
      },
      {
        "type": "text",
        "value": "🔹 3. Can multiple parameters have default values?\nYes, you can have as many as needed."
      },
      {
        "type": "text",
        "value": "Quick Revision:\n• Optional Args: Default Values\n• Override: Passing Arg\n• Usage: Flexible Initialization"
      }
    ],
    "questions": []
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
        "value": "🔹 1. How many parameters can __init__ have?\nAs many as needed to initialize the object attributes."
      },
      {
        "type": "text",
        "value": "🔹 2. Do all parameters need to be passed during instantiation?\nYes, unless they have default values."
      },
      {
        "type": "text",
        "value": "🔹 3. What is the role of self here?\nTo assign the incoming parameter values to the specific object instance."
      },
      {
        "type": "text",
        "value": "Quick Revision:\n• Many Params: Complex Initialization\n• self: Mapping values\n• Usage: Rich Objects"
      }
    ],
    "questions": []
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
        "value": "🔹 1. What does the self parameter represent?\nIt refers to the current instance of the class."
      },
      {
        "type": "text",
        "value": "🔹 2. Why is self needed as the first parameter?\nTo allow methods to access attributes and other methods of the object."
      },
      {
        "type": "text",
        "value": "🔹 3. Can you use a name other than self?\nYes, but \"self\" is the standard convention."
      },
      {
        "type": "text",
        "value": "Quick Revision:\n• self: Current Instance\n• Role: Connecting method to data\n• Position: First parameter"
      }
    ],
    "questions": []
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
        "value": "🔹 1. Is self a keyword in Python?\nNo, it is just a naming convention."
      },
      {
        "type": "text",
        "value": "🔹 2. Can I use \"this\" instead of \"self\"?\nYes, you can use any valid identifier name."
      },
      {
        "type": "text",
        "value": "🔹 3. What is the best practice for naming the first parameter?\nAlways use \"self\" for readability and consistency."
      },
      {
        "type": "text",
        "value": "Quick Revision:\n• Name: Flexible\n• Position: Mandatory 1st\n• Standard: Use \"self\""
      }
    ],
    "questions": []
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
        "value": "🔹 1. How do you call one method from another?\nUsing the \"self\" parameter: self.method_name()."
      },
      {
        "type": "text",
        "value": "🔹 2. Does self refer to the current object?\nYes, it ensures the method is called on the correct instance."
      },
      {
        "type": "text",
        "value": "🔹 3. Why call methods within a class?\nTo promote code reuse and organize logic."
      },
      {
        "type": "text",
        "value": "Quick Revision:\n• Syntax: self.method_name()\n• Context: Current instance\n• Usage: Reusable methods"
      }
    ],
    "questions": []
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
},      {
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
        "value": "🔹 1. What is an instance variable?\nAn instance variable belongs to an object and is defined using self."
      },
      {
        "type": "text",
        "value": "🔹 2. What is a class variable?\nA class variable is shared by all objects of the class."
      },
      {
        "type": "text",
        "value": "🔹 3. What is a local variable?\nA local variable is created inside a method and can be used only within that method."
      },
      {
        "type": "text",
        "value": "🔹 4. Which variable is shared by all objects?\nClass variable."
      },
      {
        "type": "text",
        "value": "🔹 5. Which variable uses self keyword?\nInstance variable."
      },
      {
        "type": "text",
        "value": "Quick Revision:\n• self.variable → Instance Variable\n• class variable → Shared Variable\n• inside method only → Local Variable"
      }
    ],
    "questions": []
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
        "value": "🔹 1. What is an instance method?\nAn instance method works with object variables and uses self."
      },
      {
        "type": "text",
        "value": "🔹 2. What is a class method?\nA class method works with class variables and uses cls."
      },
      {
        "type": "text",
        "value": "🔹 3. What is a static method?\nA static method is a utility method that does not use self or cls."
      },
      {
        "type": "text",
        "value": "🔹 4. Which decorator is used for class methods?\nThe @classmethod decorator."
      },
      {
        "type": "text",
        "value": "🔹 5. Which decorator is used for static methods?\nThe @staticmethod decorator."
      },
      {
        "type": "text",
        "value": "Quick Revision:\n• self → Object data (Instance)\n• cls → Class data (Class)\n• staticmethod → Utility/helper function"
      }
    ],
    "questions": []
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
        "value": "🔹 1. What does the display method do?\nIt prints the student details stored in the instance variables."
      },
      {
        "type": "text",
        "value": "🔹 2. Why use self.name instead of just name?\nTo store the value as an attribute of the specific object instance."
      },
      {
        "type": "text",
        "value": "Quick Revision:\n• class: Blueprint\n• self: Instance reference\n• __init__: Auto-run constructor"
      }
    ],
    "questions": []
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
        "value": "🔹 1. How is the bark method called?\nUsing the object name followed by a dot and the method name: d1.bark()."
      },
      {
        "type": "text",
        "value": "🔹 2. What is \"Buddy\" in this code?\nIt is the string value passed as the name parameter to the constructor."
      },
      {
        "type": "text",
        "value": "Quick Revision:\n• Instance: d1\n• Method: bark()\n• Property: name"
      }
    ],
    "questions": []
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
        "value": "🔹 1. Can we create another object p2?\nYes, for example: p2 = Person(\"Dharini\", 20)."
      },
      {
        "type": "text",
        "value": "🔹 2. What is the first parameter of greet()?\nIt is self, which refers to the current Person object."
      },
      {
        "type": "text",
        "value": "Quick Revision:\n• Class Name: Person\n• Constructor: __init__\n• Greeting: greet()"
      }
    ],
    "questions": []
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
        "value": "🔹 1. What happens if you don't pass \"Ford\"?\nPython gives a TypeError because brand is a required parameter."
      },
      {
        "type": "text",
        "value": "🔹 2. Is \"show\" a built-in function?\nNo, it is a user-defined method inside the Car class."
      },
      {
        "type": "text",
        "value": "Quick Revision:\n• Object: c1\n• Property: brand\n• Action: show()"
      }
    ],
    "questions": []
  }
],
  mysql: [
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
        "value": "🔹 1. What is a SQL Join?\nA clause used to combine rows from two or more tables based on a related column."
      },
      {
        "type": "text",
        "value": "🔹 2. What is an Inner Join?\nA join that returns records that have matching values in both tables."
      },
      {
        "type": "text",
        "value": "🔹 3. What is a Left Join?\nA join that returns all records from the left table and matched records from the right."
      },
      {
        "type": "text",
        "value": "Quick Revision:\n• Inner: Matching Only\n• Left: All Left + Matches\n• Right: All Right + Matches"
      }
    ],
    "questions": [
      {
        "question": "What is a Left Join?",
        "answer": "A Left Join returns all records from the left table and the matched records from the right table."
      }
    ]
  }
],
  dsa: [
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
        "value": "🔹 1. What is a linked list?\nA linear data structure where elements are not stored at contiguous memory locations."
      },
      {
        "type": "text",
        "value": "🔹 2. What does a node contain?\nData and a reference (pointer) to the next node."
      },
      {
        "type": "text",
        "value": "🔹 3. Difference between Array and Linked List?\nArrays have fixed size/contiguous memory; Linked Lists are dynamic/non-contiguous."
      },
      {
        "type": "text",
        "value": "Quick Revision:\n• Structure: Node-based\n• Memory: Non-contiguous\n• Size: Dynamic"
      }
    ],
    "questions": [
      {
        "question": "Difference between Array and Linked List?",
        "answer": "Arrays have fixed size and contiguous memory; Linked Lists have dynamic size and non-contiguous memory."
      }
    ]
  }
],
  aws: [
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
        "value": "🔹 1. What is Amazon EC2?\nA web service that provides secure, resizable compute capacity in the cloud."
      },
      {
        "type": "text",
        "value": "🔹 2. What is an instance type?\nA specific configuration of CPU, memory, storage, and networking capacity."
      },
      {
        "type": "text",
        "value": "🔹 3. What is an AMI?\nAn Amazon Machine Image that provides the software configuration (OS, apps) to launch an instance."
      },
      {
        "type": "text",
        "value": "Quick Revision:\n• Service: Compute (IaaS)\n• Scaling: Horizontal & Vertical\n• Pricing: Pay-as-you-go"
      }
    ],
    "questions": [
      {
        "question": "What is an AMI?",
        "answer": "An Amazon Machine Image (AMI) provides the information required to launch an instance."
      }
    ]
  }
],
  api: [
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
        "value": "🔹 1. What is REST?\nAn architectural style for networked applications on the web."
      },
      {
        "type": "text",
        "value": "🔹 2. Name common HTTP methods.\nGET, POST, PUT, PATCH, and DELETE."
      },
      {
        "type": "text",
        "value": "🔹 3. Is REST stateless?\nYes, each request from client to server must contain all necessary information."
      },
      {
        "type": "text",
        "value": "Quick Revision:\n• Protocol: HTTP\n• Format: JSON/XML\n• Nature: Stateless"
      }
    ],
    "questions": []
  }
],
  coding: [
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
        "value": "🔹 1. What is the time complexity of the hash map approach?\nO(n) because we traverse the list once."
      },
      {
        "type": "text",
        "value": "🔹 2. What is the space complexity?\nO(n) to store the hash map."
      },
      {
        "type": "text",
        "value": "🔹 3. Can it be solved with two pointers?\nYes, but only if the array is sorted."
      },
      {
        "type": "text",
        "value": "Quick Revision:\n• Best Approach: Hash Map\n• Time: O(n)\n• Space: O(n)"
      }
    ],
    "questions": [
      {
        "question": "Can we solve it in O(1) space?",
        "answer": "Yes, by sorting the array and using two pointers, but time complexity becomes O(n log n)."
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
    "description": "Master Python OOP, decorators, and generators for backend interviews."
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
  }
];
