export const interviewData = {
  python: [
    {
      id: 'intro-to-oop',
      title: 'Python is an Object-Oriented Programming (OOP) Language',
      category: 'OOP',
      definition: 'Python is an object-oriented language, allowing you to structure your code using Classes and Objects for better organization and management.',
      explanation: 'Why OOP is Used in Python:\n• Code Reusability: Reuse existing code using inheritance.\n• Security: Protect data using encapsulation and data hiding.\n• Scalability: Easily expand large applications.\n• Real-World Modeling: Represent real-life objects like Students, Cars, or Bank Accounts.\n• Better Organization: Code becomes clean, modular, and easier to maintain.',
      syntax: 'Core Concepts: Class, Object, Inheritance, Polymorphism, Encapsulation, Abstraction',
      example: 'class Student:\n    def __init__(self, name):\n        self.name = name\n\n    def display(self):\n        print("Student Name:", self.name)\n\ns1 = Student("Vasu")\ns1.display()',
      output: 'Student Name: Vasu',
      postContent: 'Real-World Example: Bank Account\n• Class → BankAccount\n• Objects → Customer accounts (each can have a different balance, account number, and transactions).\n\nAdvantages of OOP:\n• Classes & Objects: Better code structure\n• Inheritance: Reuse code\n• Encapsulation: Data security\n• Polymorphism: Flexibility\n• Abstraction: Hide complexity\n\nConclusion:\nObject-Oriented Programming helps Python developers build organized, reusable, secure, and scalable real-world software applications efficiently.',
      questions: []
    },
    {
      id: 'four-pillars-of-oop',
      title: 'The Four Pillars of OOP',
      category: 'OOP Core',
      definition: 'The four fundamental principles of Object-Oriented Programming (OOP) define its structure and power.',
      sections: [
        { type: 'text', value: 'These pillars help in building reusable, secure, scalable, and flexible applications.' },
        { type: 'text', value: '1. Inheritance\n\nInheritance allows one class to inherit properties and methods from another class. It helps in code reusability and reducing duplicate code.' },
        { type: 'code', value: 'class Parent:\n    def show(self):\n        print("Parent Class")\n\nclass Child(Parent):\n    pass\n\nc1 = Child()\nc1.show()' },
        { type: 'output', value: 'Parent Class' },
        { type: 'text', value: 'Key Point: Child class can access parent class properties and methods.' },
        { type: 'text', value: '2. Encapsulation\n\nEncapsulation means wrapping data (variables) and methods (functions) into a single unit (class). It also protects data from direct access.' },
        { type: 'code', value: 'class Bank:\n    def __init__(self):\n        self.__balance = 5000\n\n    def show_balance(self):\n        print(self.__balance)\n\nb1 = Bank()\nb1.show_balance()' },
        { type: 'output', value: '5000' },
        { type: 'text', value: 'Key Point: Sensitive data is protected using private variables.' },
        { type: 'text', value: '3. Abstraction\n\nAbstraction means hiding internal implementation details and showing only essential features.' },
        { type: 'code', value: 'from abc import ABC, abstractmethod\n\nclass Vehicle(ABC):\n    @abstractmethod\n    def start(self):\n        pass\n\nclass Car(Vehicle):\n    def start(self):\n        print("Car Starts")\n\nc1 = Car()\nc1.start()' },
        { type: 'output', value: 'Car Starts' },
        { type: 'text', value: 'Key Point: User only knows what the object does, not how it works internally.' },
        { type: 'text', value: '4. Polymorphism\n\nPolymorphism allows one method to behave differently for different objects.' },
        { type: 'code', value: 'class Dog:\n    def sound(self):\n        print("Dog barks")\n\nclass Cat:\n    def sound(self):\n        print("Cat meows")\n\nd1 = Dog()\nc1 = Cat()\n\nd1.sound()\nc1.sound()' },
        { type: 'output', value: 'Dog barks\nCat meows' },
        { type: 'text', value: 'Key Point: Same method name behaves differently for different classes.' },
        { type: 'text', value: 'Summary Table:\n• Inheritance → Code Reusability\n• Encapsulation → Data Security\n• Abstraction → Hide Complexity\n• Polymorphism → One Method, Many Behaviors\n\nConclusion:\nThe Four Pillars of OOP help developers create clean, secure, and scalable real-world software models efficiently.' }
      ],
      questions: []
    },
    {
      id: 'python-inheritance',
      title: 'Python Inheritance',
      category: 'OOP Core',
      definition: 'Inheritance allows us to define a class that inherits all the methods and properties from another class, promoting reusability and cleaner code.',
      sections: [
        { type: 'text', value: '✅ Core Concept\n\nInheritance allows us to define a class that inherits all the methods and properties from another class. It helps in code reusability, reducing duplicate code, and easier maintenance.' },
        { type: 'text', value: '✅ Types of Classes\n\n🔹 Parent Class (Base Class)\nThe class being inherited from is called Parent Class or Base Class.\n\n🔹 Child Class (Derived Class)\nThe class that inherits from another class is called Child Class or Derived Class.' },
        { type: 'text', value: '✅ Reusability Concept\n\nWe can use existing code again instead of writing the same code repeatedly.\nThis saves time, effort, and memory.\n\nOOP provides reusability mainly through:\n• Inheritance\n• Classes\n• Methods' },
        { type: 'code', value: '# Parent Class\nclass BankAccount:\n    def __init__(self, name, balance):\n        self.name = name\n        self.balance = balance\n\n    def show_balance(self):\n        print("Balance:", self.balance)\n\n# Child Class\nclass SavingsAccount(BankAccount):\n    def deposit(self, amount):\n        self.balance += amount\n        print(amount, "deposited")\n\n    def withdraw(self, amount):\n        if amount <= self.balance:\n            self.balance -= amount\n            print(amount, "withdrawn")\n        else:\n            print("Insufficient Balance")\n\n# Object Creation\nuser1 = SavingsAccount("Vasudha", 5000)\nuser1.show_balance()\nuser1.deposit(2000)\nuser1.show_balance()\nuser1.withdraw(3000)\nuser1.show_balance()' },
        { type: 'output', value: 'Balance: 5000\n2000 deposited\nBalance: 7000\n3000 withdrawn\nBalance: 4000' },
        { type: 'text', value: '✅ Step-by-Step Explanation\n\n🔹 Parent Class: class BankAccount: This is the parent class containing common properties and methods.\n🔹 Constructor: Initializes account holder name and balance.\n🔹 Parent Method: show_balance() displays account balance.\n🔹 Child Class: class SavingsAccount(BankAccount): Inherits from BankAccount and can access its variables and methods.\n🔹 Method Reusability: user1.show_balance() belongs to parent class, but child class reused it. This is code reusability through inheritance.' },
        { type: 'text', value: '✅ Real-World Understanding\n\n• Bank Account → Parent Class\n• Savings Account → Child Class\n• Common banking features → Reused methods' },
        { type: 'text', value: 'Summary:\n• Inheritance allows one class to acquire properties and methods from another class.\n• The existing code can be reused without rewriting it, which saves time and reduces duplication.\n• The parent class contains common features, while the child class extends or reuses those features.' }
      ],
      questions: []
    },
    {
      id: 'python-super-function',
      title: 'Python super() Function',
      category: 'OOP Core',
      definition: 'The super() function is used to call the parent class constructor or methods from the child class.',
      sections: [
        { type: 'text', value: '✅ What is super()?\n\nsuper() is used to call the parent class constructor and methods from the child class.' },
        { type: 'text', value: '✅ Syntax\n\nsuper().__init__(name, balance)\nThis line calls the constructor of the parent class.' },
        { type: 'text', value: '✅ Why Use super()?\n\nUsing super():\n• Reuses parent class code\n• Avoids duplicate code\n• Improves readability\n• Makes maintenance easier' },
        { type: 'text', value: '✅ Advantages of super()\n\n• Code Reusability: Reuses parent constructor/methods\n• Avoids Duplicate Code: No need to rewrite parent code\n• Easy Maintenance: Changes in parent reflect automatically\n• Better Readability: Cleaner and professional code' },
        { type: 'code', value: '# Parent Class\nclass BankAccount:\n    def __init__(self, name, balance):\n        self.name = name\n        self.balance = balance\n\n    def show_balance(self):\n        print("Balance:", self.balance)\n\n# Child Class\nclass SavingsAccount(BankAccount):\n    def __init__(self, name, balance):\n        # Calling Parent Constructor\n        super().__init__(name, balance)\n\n    def deposit(self, amount):\n        self.balance += amount\n        print(amount, "deposited")\n\n    def withdraw(self, amount):\n        if amount <= self.balance:\n            self.balance -= amount\n            print(amount, "withdrawn")\n        else:\n            print("Insufficient Balance")\n\n# Object Creation\nuser1 = SavingsAccount("Vasudha", 5000)\nuser1.show_balance()\nuser1.deposit(2000)\nuser1.withdraw(1000)\nuser1.show_balance()' },
        { type: 'output', value: 'Balance: 5000\n2000 deposited\n1000 withdrawn\nBalance: 6000' },
        { type: 'text', value: '✅ Step-by-Step Explanation\n\n🔹 Parent Class: class BankAccount: Contains common variables and methods.\n🔹 Parent Constructor: Initializes name and balance.\n🔹 Child Class: class SavingsAccount(BankAccount): Inherits from BankAccount.\n🔹 Using super(): super().__init__(name, balance) calls the parent constructor automatically.\n\nWhy is This Useful?\nWithout super(), self.name = name and self.balance = balance must be rewritten in the child class, causing duplicate code.' },
        { type: 'text', value: '✅ Real-World Understanding\n\nThink of BankAccount as general banking features and SavingsAccount as a specialized account. Instead of rewriting common code, the child class reuses parent functionality using super().' },
        { type: 'text', value: 'Summary:\n• super() is used to call the parent class constructor or methods from the child class.\n• It helps in code reusability, avoids duplicate code, improves readability, and makes maintenance easier.' }
      ],
      questions: []
    },
    {
      id: 'encapsulation-data-hiding',
      title: 'Encapsulation and Data Hiding',
      category: 'OOP Core',
      definition: 'Encapsulation and data hiding provide security in OOP by wrapping data and methods into a single unit and restricting direct access to sensitive information.',
      sections: [
        { type: 'text', value: '✅ How does OOP provide Security?\n\nObject-Oriented Programming (OOP) provides security through:\n• Encapsulation\n• Data Hiding\n\nSensitive data is kept private inside a class and can be accessed only through controlled methods. This prevents:\n• unauthorized access\n• accidental modification of data' },
        { type: 'text', value: '✅ What is Encapsulation?\n\n🔹 Definition:\nEncapsulation is the process of wrapping data (variables) and methods (functions) together into a single unit called a class, and restricting direct access to sensitive data.\n\n✅ Simple Meaning:\nEncapsulation means combining variables and methods together inside a class.' },
        { type: 'text', value: '✅ Benefits of Encapsulation:\n• Security\n• Data protection\n• Better code organization\n• Controlled access to data\n• Easy maintenance' },
        { type: 'code', value: 'class BankAccount:\n    def __init__(self, name, balance):\n        self.name = name\n        self.__balance = balance   # private variable\n\n    def deposit(self, amount):\n        self.__balance += amount\n        print(amount, "deposited")\n\n    def withdraw(self, amount):\n        if amount <= self.__balance:\n            self.__balance -= amount\n            print(amount, "withdrawn")\n        else:\n            print("Insufficient Balance")\n\n    def show_balance(self):\n        print("Balance:", self.__balance)\n\nacc = BankAccount("Ravi", 5000)\nacc.deposit(2000)\nacc.withdraw(1000)\nacc.show_balance()' },
        { type: 'output', value: '2000 deposited\n1000 withdrawn\nBalance: 6000' },
        { type: 'text', value: '✅ Explanation:\n\nHere:\n• __balance is private\n• It cannot be accessed directly\n• Access happens only through methods: deposit(), withdraw(), show_balance()\n\nThis provides security.' },
        { type: 'text', value: '✅ What is Data Hiding?\n\n🔹 Definition:\nData Hiding means hiding sensitive data from direct external access using private variables.\n\nPrivate variables are created using: __variable\n\n✅ Simple Meaning:\nSensitive data is hidden from outside the class.' },
        { type: 'code', value: 'class Student:\n    def __init__(self):\n        self.__marks = 95   # private variable\n\n    def show_marks(self):\n        print(self.__marks)\n\ns1 = Student()\ns1.show_marks()\n# print(s1.__marks) ❌ Error' },
        { type: 'output', value: '95' },
        { type: 'text', value: '✅ Explanation:\n\n__marks is private.\nSo: s1.__marks cannot be accessed directly outside the class.' },
        { type: 'text', value: '✅ Why Use Encapsulation and Data Hiding?\n\n• Security: Protects important data\n• Prevents Accidental Changes: Data cannot be modified directly\n• Maintainability: Easier to manage code\n• Controlled Access: Access only through methods\n• Better Organization: Clean and modular code' },
        { type: 'text', value: '✅ Difference Between Encapsulation and Data Hiding:\n\nEncapsulation:\n• Wrapping data and methods together into one unit (Class)\n• Focuses on code structure and organization\n• Achieved using classes\n• Example: Class with attributes and methods\n\nData Hiding:\n• Hiding sensitive data from direct external access\n• Focuses on security and protection\n• Achieved using private variables (__variable)\n• Example: __salary, __balance' },
        { type: 'text', value: '✅ One-Line Difference:\n\n• Encapsulation → Wrapping data + methods together\n• Data Hiding → Restricting direct access to data' },
        { type: 'text', value: 'Summary:\n• OOP provides security using encapsulation and data hiding.\n• Encapsulation wraps data and methods together inside a class, while data hiding restricts direct access to sensitive data using private variables.\n• This protects data from unauthorized or accidental modification.' }
      ],
      questions: []
    },
    {
      id: 'protected-private-variables',
      title: 'Protected and Private Variables in Python',
      category: 'OOP Core',
      definition: 'In Python, protected and private variables are used to restrict access to class members, with single underscores indicating internal use and double underscores for strict data hiding.',
      sections: [
        { type: 'text', value: '✅ Protected and Private Variables in Python\n\n🔹 Key Point\n• _single: Protected Variable (Meant for internal use)\n• __double: Private Variable (Used for data hiding)' },
        { type: 'text', value: '✅ _single → Protected Variable\n\n🔹 Meaning:\n• Indicates a protected variable\n• Meant for internal use\n• Can still be accessed outside the class\n• Used as a naming convention' },
        { type: 'text', value: '✅ __double → Private Variable\n\n🔹 Meaning:\n• Indicates a private variable\n• Used for data hiding\n• Cannot be directly accessed outside the class' },
        { type: 'code', value: 'class Employee:\n    def __init__(self):\n        self._name = "Ravi"          # protected\n        self.__salary = 50000       # private\n\nemp = Employee()\n\nprint(emp._name)       # Accessible\n# print(emp.__salary)  ❌ Error' },
        { type: 'output', value: 'Ravi' },
        { type: 'text', value: '✅ Explanation:\n\n🔹 Protected Variable: self._name\nStarts with single underscore _ . Indicates internal/protected use but is still accessible outside the class.\nExample: print(emp._name) works successfully.\n\n🔹 Private Variable: self.__salary\nStarts with double underscore __ . Used for data hiding. Cannot be directly accessed outside the class.\nExample: print(emp.__salary) ❌ Gives error.' },
        { type: 'text', value: '✅ Accessing Private Variable Using Method' },
        { type: 'code', value: 'class Employee:\n    def __init__(self):\n        self.__salary = 50000\n\n    def show_salary(self):\n        print(self.__salary)\n\nemp = Employee()\nemp.show_salary()' },
        { type: 'output', value: '50000' },
        { type: 'text', value: '✅ Explanation:\n\nPrivate variables should be accessed using methods. This provides security, controlled access, and data protection.' },
        { type: 'text', value: '✅ Quick Revision Table:\n\n• Public (name) → ✅ Yes (Accessible outside class)\n• Protected (_name) → ✅ Yes (Convention)\n• Private (__name) → ❌ No' }
      ],
      questions: []
    },
    {
      id: 'python-abstraction',
      title: 'Python Abstraction in OOP',
      category: 'OOP Core',
      definition: 'Abstraction involves hiding the complex internal implementation details of an object and exposing only the essential functionalities to the user.',
      sections: [
        { type: 'text', value: '✅ What is Abstraction?\n\n🔹 Definition:\nAbstraction means hiding internal implementation details and showing only the important features to the user.\n\nIt focuses on:\n• What an object does\n• Not how it does it' },
        { type: 'text', value: '✅ Real-Life Examples:\n\n🔹 ATM Machine:\nYou can withdraw money or check balance using buttons, but you do not know the internal banking process or server communication.\n\n🔹 Car:\nYou drive using the steering and pedals, but you do not know the exact engine mechanism or fuel system details.' },
        { type: 'text', value: '✅ Why Use Abstraction?\n\n• Hides Complex Code: User sees only essential features\n• Improves Security: Internal details remain hidden\n• Reduces Complexity: Easier to use programs\n• Easy Maintenance: Internal changes do not affect users\n• Provides Essential Features: Clean interface' },
        { type: 'text', value: '✅ How to Achieve Abstraction in Python?\n\nPython provides abstraction using:\n• Abstract Classes\n• Abstract Methods\n\nRequired Import:\nfrom abc import ABC, abstractmethod' },
        { type: 'text', value: '✅ Meaning:\n• ABC: Abstract Base Class\n• @abstractmethod: Abstract Method' },
        { type: 'code', value: 'from abc import ABC, abstractmethod\n\n# Abstract Class\nclass Animal(ABC):\n    @abstractmethod\n    def sound(self):\n        pass\n\n# Child Classes\nclass Dog(Animal):\n    def sound(self):\n        print("Dog barks")\n\nclass Cat(Animal):\n    def sound(self):\n        print("Cat meows")\n\nclass Cow(Animal):\n    def sound(self):\n        print("Cow moos")\n\n# Objects\nd = Dog()\nc = Cat()\nw = Cow()\n\nd.sound()\nc.sound()\nw.sound()' },
        { type: 'output', value: 'Dog barks\nCat meows\nCow moos' },
        { type: 'text', value: '✅ Step-by-Step Explanation:\n\n🔹 Abstract Class: class Animal(ABC): This is a blueprint and cannot be instantiated.\n🔹 Abstract Method: @abstractmethod: Declared but not implemented.\n🔹 Child Classes: Must implement the abstract method "sound()".\n\n✅ Important Point:\nAbstract class only defines the structure. Child classes must provide the implementation.' },
        { type: 'text', value: '✅ Real Understanding:\n\n🔹 What is Abstraction?\nHiding internal details and showing only essentials.\n\n🔹 How is it achieved?\nUsing the "abc" module with abstract classes and methods.\n\n🔹 What is an Abstract Class?\nA class containing one or more abstract methods.\n\n🔹 What is an Abstract Method?\nA method declared in the parent but implemented in the child class.' },
        { type: 'text', value: '✅ Quick Revision:\n• Abstraction → Hiding implementation details\n• Abstract Class → Blueprint class\n• Abstract Method → Method without implementation\n• Child Class → Implements abstract method' }
      ],
      questions: []
    },
    {
      id: 'what-is-a-class',
      title: 'What is a Class in Python?',
      category: 'OOP Basics',
      definition: 'A class is a blueprint or template used to create objects. It groups related data (attributes) and behavior (methods) together.',
      explanation: 'Simple Definition:\n• Class → Blueprint (e.g., Student plan)\n• Object → Real thing created from blueprint (e.g., a particular student like Vasudha)',
      syntax: 'class ClassName:\n    # attributes\n    # methods',
      example: 'class Student:\n    name = "Vasudha"\n    age = 23\n\nprint(Student.name)\nprint(Student.age)',
      output: 'Vasudha\n23',
      postContent: 'Explanation:\n\n• Class Name: "class Student:" creates a class called Student.\n• Attributes: "name" and "age" are class attributes (variables).\n• Accessing Attributes: Access attributes using the format "ClassName.attribute".\n\nImportant Points:\n• A class is used to create objects.\n• Variables inside a class are called attributes.\n• Functions inside a class are called methods.\n• A class helps organize code properly.\n• Multiple objects can be created from one class.',
      questions: []
    },
    {
      id: 'the-pass-statement',
      title: 'The pass Statement in Python',
      category: 'OOP Basics',
      definition: 'A class cannot be empty in Python. If you create a class without any code inside it, Python gives an error. To avoid this, use the pass statement.',
      explanation: 'In Python, "pass" literally means "do nothing." It serves as a placeholder for future code when a class or function body is required but not yet implemented.',
      syntax: 'class ClassName:\n    pass',
      example: 'class Person:\n    pass',
      output: '# No error occurs',
      postContent: 'Explanation:\n\n• Here, "pass" tells Python that the class is intentionally empty, preventing an IndentationError.\n\nWhy We Use pass:\n• When a class is not completed yet.\n• When we plan to add code later.\n• When we need an empty class temporarily.\n\nComparison:\n• ❌ Wrong (Error): class Person: (Output: IndentationError)\n• ✅ Correct (No Error): class Person: pass\n\nImportant Points:\n• "pass" is a placeholder statement used when no code is written yet.\n• It avoids syntax and indentation errors by providing the required indented block.\n• It can be used in: classes, functions, loops, and conditional statements.',
      questions: []
    },
    {
      id: 'what-is-an-object',
      title: 'What is an Object in Python?',
      category: 'OOP Basics',
      definition: 'An object is a real instance created from a class. It gets access to all variables (attributes) and functions (methods) defined inside that class.',
      explanation: 'Simple Definition:\n• Class → Blueprint (e.g., Student plan)\n• Object → Real instance created from the blueprint (e.g., s1)',
      syntax: 'object_name = ClassName()',
      example: 'class Student:\n    name = "Vasudha"\n    age = 23\n\ns1 = Student()\n\nprint(s1.name)\nprint(s1.age)',
      output: 'Vasudha\n23',
      postContent: 'Explanation:\n\n• Step 1 — Create Class: "class Student:" defines the class template.\n• Step 2 — Class Attributes: "name" and "age" are variables defined in the class.\n• Step 3 — Create Object: "s1 = Student()" creates a specific instance named s1.\n• Step 4 — Access Data: Access attributes using the format "object_name.attribute".\n\nImportant Points:\n• An object is created from a class.\n• Objects access class attributes and methods.\n• Multiple objects can be created from one class.\n• Each object is an instance of the class.',
      questions: []
    },
    {
      id: 'what-is-init-method',
      title: 'What is __init__() in Python?',
      category: 'OOP Basics',
      definition: 'A built-in method automatically executed when an object is created, acting as a constructor.',
      explanation: 'Purpose of __init__():\n• It initializes object data.\n• It assigns values to object properties.\n• It performs operations needed when the object is created.',
      syntax: 'class ClassName:\n    def __init__(self, parameters):\n        # initialization code',
      example: 'class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\np1 = Person("Vasu", 23)\np2 = Person("Sudha", 25)\n\nprint("Name of p1:", p1.name)\nprint("Age of p2:", p2.age)',
      output: 'Name of p1: Vasu\nAge of p2: 25',
      postContent: 'How it Works:\n• When the object is created: p1 = Person("Vasu", 23)\n• Python automatically calls: __init__("Vasu", 23)\n• Values self.name = "Vasu" and self.age = 23 are stored inside the object.\n\nImportant Points:\n• Automatically called when an object is created.\n• Used to initialize object variables.\n• "self" refers to the current object.\n• Every object can have different values.',
      questions: []
    },
    {
      id: 'default-values-init',
      title: 'Default Values in __init__()',
      category: 'OOP Basics',
      definition: 'Allows parameters in the __init__() method to have pre-assigned values if no argument is provided.',
      explanation: 'You can set default values for parameters in the constructor. If a value is not passed when creating the object, Python automatically uses the default value.',
      syntax: 'def __init__(self, name, age=18):',
      example: 'class Person:\n    def __init__(self, name, age=18):\n        self.name = name\n        self.age = age\n\np1 = Person("Vasu")\np2 = Person("Vasudharini", 23)\n\nprint(p1.name, p1.age)\nprint(p2.name, p2.age)',
      output: 'Vasu 18\nVasudharini 23',
      postContent: 'How it Works:\n\nObject 1: p1 = Person("Vasu")\n• Only name is passed; age is not given.\n• Python uses the default value: age = 18\n\nObject 2: p2 = Person("Vasudharini", 23)\n• Both name and age are passed.\n• The given value 23 overrides the default value.\n\nImportant Points:\n• Default values make parameters optional.\n• If no value is passed, the default value is used.\n• If a value is passed, it overrides the default value.\n• Default parameters reduce code repetition.',
      questions: []
    },
    {
      id: 'multiple-parameters-init',
      title: 'Multiple Parameters in __init__()',
      category: 'OOP Basics',
      definition: 'The __init__() method can take as many parameters as needed to initialize multiple object properties.',
      explanation: 'These parameters are used to initialize different object properties during instantiation.',
      syntax: 'def __init__(self, param1, param2, param3, ...):',
      example: 'class Person:\n    def __init__(self, name, age, city, country):\n        self.name = name\n        self.age = age\n        self.city = city\n        self.country = country\n\np1 = Person("Vasu", 23, "Vijayawada", "Andhra Pradesh")\n\nprint(p1.name)\nprint(p1.age)\nprint(p1.city)\nprint(p1.country)',
      output: 'Vasu\n23\nVijayawada\nAndhra Pradesh',
      postContent: 'How it Works:\n\nWhen the object is created: p1 = Person("Vasu", 23, "Vijayawada", "Andhra Pradesh")\n• Python automatically calls: __init__("Vasu", 23, "Vijayawada", "Andhra Pradesh")\n• The values are stored in the object: self.name = "Vasu", self.age = 23, self.city = "Vijayawada", self.country = "Andhra Pradesh".\n\nImportant Points:\n• __init__() can take multiple parameters.\n• Each parameter initializes a different object property.\n• self refers to the current object.\n• Different objects can store different values.',
      questions: []
    },
    {
      id: 'why-self-parameter',
      title: 'Why do we use self in Python?',
      category: 'OOP Basics',
      definition: 'The self parameter is a reference to the current object (instance) of the class, used to access object variables and methods.',
      explanation: 'Without self, Python cannot identify which object\'s data should be used. It serves as the link that connects a method to a specific instance of a class.',
      syntax: 'def method_name(self, parameters):',
      example: 'class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\n    def printname(self):\n        print(self.name)\n\n    def greet(self):\n        print(f"Hello, my name is {self.name}. I\'m {self.age} years old")\n\np1 = Person("Vasu", 20)\np2 = Person("Dharini", 18)\np3 = Person("Vasudharini", 23)\n\np1.printname()\np2.greet()\nprint(p3.name)',
      output: 'Vasu\nHello, my name is Dharini. I\'m 18 years old\nVasudharini',
      postContent: 'How self Works:\n\n1. Object Creation: p1 = Person("Vasu", 20)\n• Python stores self.name = "Vasu" and self.age = 20 inside object p1.\n\n2. Method Call: p1.printname()\n• Python automatically sends p1 as self: printname(p1).\n• So print(self.name) becomes print(p1.name).\n\nWhy self is Important:\n• Without self, Python would not know which object’s variables or methods to use.\n• Example: p1.name, p2.name, and p3.name all store different data. self helps Python access the correct object\'s data.\n\nImportant Points About self:\n• self refers to the current object.\n• It is used to access instance variables and methods.\n• self must be the first parameter of every instance method.\n• Without self, Python cannot identify which object\'s data should be used.\n• self links the method to a specific object.',
      questions: []
    },
    {
      id: 'self-naming-convention',
      title: 'self Does Not Have to Be Named self',
      category: 'OOP Basics',
      definition: 'In Python, the first parameter of an instance method does not have to be named "self"; it can be any valid variable name.',
      explanation: 'While names like "myobject" or "abc" work, it must always be the first parameter. By convention, "self" is used by almost all Python programmers for consistency.',
      syntax: 'def method_name(any_name, parameters):',
      example: 'class Person:\n    def __init__(myobject, name, age):\n        myobject.name = name\n        myobject.age = age\n\n    def greet(abc):\n        print("Hello, my name is " + abc.name)\n\np1 = Person("Vasu", 23)\np1.greet()',
      output: 'Hello, my name is Vasu',
      postContent: 'How it Works:\n\n1. Object Creation: p1 = Person("Vasu", 23)\n• Python automatically passes the object p1 as the first argument: __init__(p1, "Vasu", 23).\n• myobject.name = "Vasu" and myobject.age = 23 are stored.\n\n2. Method Call: p1.greet()\n• Python automatically sends p1 to the "abc" parameter: greet(p1).\n• So abc.name becomes p1.name.\n\nImportant Points:\n• "self" is not a reserved keyword in Python.\n• You can use any variable name instead of "self".\n• The first parameter always refers to the current object.\n• By convention, Python programmers use "self" for readability and standard practice.',
      questions: []
    },
    {
      id: 'calling-methods-self',
      title: 'Calling Methods with self',
      category: 'OOP Basics',
      definition: 'You can call one method from another method inside the same class using the "self" parameter.',
      explanation: 'Since "self" refers to the current object, using "self.method_name()" tells Python to call that specific method for the current instance.',
      syntax: 'self.method_name()',
      example: 'class Person:\n    def __init__(self, name):\n        self.name = name\n\n    def greet(self):\n        return "Hello, " + self.name\n\n    def welcome(self):\n        message = self.greet()\n        print(message + "! Welcome to our website.")\n\np1 = Person("Vasu")\np1.welcome()',
      output: 'Hello, Vasu! Welcome to our website.',
      postContent: 'How it Works:\n\nStep 1 — Object Creation: p1 = Person("Vasu")\n• Stores self.name = "Vasu" inside object p1.\n\nStep 2 — Method Call: p1.welcome()\n• Python automatically sends p1 as self.\n• Inside welcome(), message = self.greet() calls p1.greet().\n• The greet() method returns "Hello, Vasu", and the final message is printed.\n\nImportant Points:\n• self can call other methods inside the same class.\n• It helps reuse code effectively.\n• One method can use the result of another method to simplify logic.\n• self.method_name() specifically calls the method for the current instance.',
      questions: []
    }
  ],
  mysql: [
    {
      id: 'sql-joins',
      title: 'SQL Joins',
      category: 'Queries',
      definition: 'A JOIN clause is used to combine rows from two or more tables, based on a related column between them.',
      explanation: 'Joins allow you to retrieve data from multiple tables in a single query by establishing relationships.',
      syntax: 'SELECT columns FROM t1 INNER JOIN t2 ON t1.id = t2.id;',
      example: 'SELECT Orders.OrderID, Customers.CustomerName\nFROM Orders\nINNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;',
      output: 'OrderID | CustomerName\n10308   | Ana Trujillo',
      questions: [
        {
          question: 'What is a Left Join?',
          answer: 'A Left Join returns all records from the left table and the matched records from the right table.'
        }
      ]
    }
  ],
  dsa: [
    {
      id: 'linked-list-basics',
      title: 'Linked List Basics',
      category: 'Data Structures',
      definition: 'A linked list is a linear data structure where elements are not stored at contiguous memory locations.',
      explanation: 'Each element (node) contains data and a pointer to the next node.',
      syntax: 'class Node:\n    def __init__(self, data):\n        self.data = data\n        self.next = None',
      example: 'node1 = Node(10)\nnode2 = Node(20)\nnode1.next = node2',
      output: 'node1.next.data -> 20',
      questions: [
        {
          question: 'Difference between Array and Linked List?',
          answer: 'Arrays have fixed size and contiguous memory; Linked Lists have dynamic size and non-contiguous memory.'
        }
      ]
    }
  ],
  aws: [
    {
      id: 'ec2-instances',
      title: 'Amazon EC2',
      category: 'Compute',
      definition: 'Amazon Elastic Compute Cloud (EC2) provides scalable computing capacity in the AWS Cloud.',
      explanation: 'It allows users to rent virtual computers to run their own applications.',
      syntax: '# Managed via Console/CLI',
      example: 'aws ec2 run-instances --image-id ami-12345 --count 1',
      output: 'Instance i-0123456789abcdef0 started.',
      questions: [
        {
          question: 'What is an AMI?',
          answer: 'An Amazon Machine Image (AMI) provides the information required to launch an instance.'
        }
      ]
    }
  ],
  api: [
    {
      id: 'rest-api-basics',
      title: 'REST API Concepts',
      category: 'Web Services',
      definition: 'REST (Representational State Transfer) is an architectural style for providing standards between computer systems on the web.',
      explanation: 'It uses HTTP methods like GET, POST, PUT, DELETE to interact with resources.',
      syntax: 'GET /api/users/1',
      example: 'import requests\nresponse = requests.get("https://api.example.com/data")\nprint(response.json())',
      output: '{"status": "success", "data": [...]}',
      questions: []
    }
  ],
  coding: [
    {
      id: 'two-sum-problem',
      title: 'Two Sum Problem',
      category: 'Algorithms',
      definition: 'Given an array of integers and a target, return indices of the two numbers such that they add up to target.',
      explanation: 'This is a classic hash map problem with O(n) time complexity.',
      syntax: 'def twoSum(nums, target):',
      example: 'def twoSum(nums, target):\n    prevMap = {} # val : index\n    for i, n in enumerate(nums):\n        diff = target - n\n        if diff in prevMap:\n            return [prevMap[diff], i]\n        prevMap[n] = i',
      output: 'nums = [2,7,11,15], target = 9 -> [0,1]',
      questions: [
        {
          question: 'Can we solve it in O(1) space?',
          answer: 'Yes, by sorting the array and using two pointers, but time complexity becomes O(n log n).'
        }
      ]
    }
  ]
};

export const technologies = [
  { id: 'python', name: 'Python', icon: 'SiPython', color: '#3776AB', description: 'Master Python OOP, decorators, and generators for backend interviews.' },
  { id: 'mysql', name: 'MySQL', icon: 'SiMysql', color: '#4479A1', description: 'Advanced SQL queries, joins, indexing, and optimization techniques.' },
  { id: 'dsa', name: 'DSA', icon: 'SiGraphql', color: '#FF6F61', description: 'Algorithms and Data Structures from arrays to dynamic programming.' },
  { id: 'aws', name: 'AWS', icon: 'SiAmazonaws', color: '#FF9900', description: 'Cloud infrastructure, serverless, and core AWS services.' },
  { id: 'api', name: 'API', icon: 'SiPostman', color: '#FF6C37', description: 'RESTful services, authentication, and API design patterns.' },
  { id: 'coding', name: 'Coding', icon: 'SiVisualstudiocode', color: '#007ACC', description: 'Real-world coding problems and implementation best practices.' }
];

