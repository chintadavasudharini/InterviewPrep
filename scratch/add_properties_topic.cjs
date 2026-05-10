const fs = require('fs');
const path = 'src/data/interviewData.js';
let content = fs.readFileSync(path, 'utf8');

const newTopic = {
  id: "class-vs-object-properties",
  title: "Class Properties vs Object Properties",
  category: "OOP Basics",
  definition: "Class properties are variables shared by all instances of a class, while object (instance) properties are unique to each specific instance.",
  sections: [
    {
      type: "text",
      value: "1. Class Property\n. Core Concept:\nDefined directly inside the class but outside methods.\nShared by all objects of the class.\nChanges affect all objects.\n\nclass Person:\n    lastname = \"\"   # class property\nHere, lastname belongs to the class itself."
    },
    {
      type: "text",
      value: "2. Object (Instance) Property\n. Core Concept:\nDefined inside __init__() using self.\nSeparate copy for each object.\nDifferent objects can have different values.\n\ndef __init__(self, name):\n    self.name = name\nHere, name belongs to each object separately."
    },
    {
      type: "text",
      value: "Your Program Explained"
    },
    {
      type: "code",
      value: "class Person:\n    lastname = \"\" \n\n    def __init__(self, name):\n        self.name = name\n\n    def show_name(self):\n        print(f\"Hello, I'm {self.name} {self.lastname}\")\n\np1 = Person(\"Vasu\")\np2 = Person(\"Vasudha\")\n\nPerson.lastname = \"Ch\"\n\nprint(p1.lastname)\nprint(p2.lastname)\np1.show_name()"
    },
    {
      type: "output",
      value: "Ch\nCh\nHello, I'm Vasu Ch"
    },
    {
      type: "text",
      value: "Step-by-Step Execution\n. Step 1: Class Created\nclass Person: Python creates the class Person.\n. Step 2: Class Property Created\nlastname = \"\": A single shared variable is created for the whole class.\n. Step 3: Objects Created\np1 = Person(\"Vasu\")\np2 = Person(\"Vasudha\")\nConstructor runs for each object. self.name is unique to p1 and p2.\n. Step 4: Change Class Property\nPerson.lastname = \"Ch\": Shared class property updated; all objects see the change.\n. Step 5: Printing\np1.lastname and p2.lastname both output \"Ch\".\n. Step 6: Method Call\np1.show_name() uses both the unique self.name and shared self.lastname."
    },
    {
      type: "text",
      value: "Memory Diagram\n\nClass Person\n----------------\nlastname = \"Ch\"\n\nObject p1\n----------------\nname = \"Vasu\"\n\nObject p2\n----------------\nname = \"Vasudha\""
    },
    {
      type: "table",
      headers: ["Feature", "Class Variable", "Instance Variable"],
      rows: [
        ["Definition", "Shared by all objects", "Separate for each object"],
        ["Memory", "Memory efficient (allocated once)", "Unique data for objects"],
        ["Access", "Accessed using ClassName.variable", "Accessed using self.variable"]
      ]
    },
    {
      type: "text",
      value: "Another Example"
    },
    {
      type: "code",
      value: "class Student:\n    school = \"KL University\"   # class property\n\n    def __init__(self, name):\n        self.name = name       # object property\n\ns1 = Student(\"Ram\")\ns2 = Student(\"Sita\")\n\nprint(s1.school)\nprint(s2.school)\nprint(s1.name)\nprint(s2.name)"
    },
    {
      type: "output",
      value: "KL University\nKL University\nRam\nSita"
    },
    {
      type: "text",
      value: "Quick Revision:\n• Class Variable: school (Shared)\n• Instance Variable: name (Unique)\n• Access: ClassName.variable vs self.variable"
    }
  ],
  questions: []
};

// I'll insert it after 'python-variable-types'
const anchor = content.indexOf('"id": "python-variable-types"');
if (anchor !== -1) {
    const endOfTopic = content.indexOf('},', content.indexOf('],', anchor)) + 3;
    const newTopicStr = JSON.stringify(newTopic, null, 2) + ',';
    content = content.slice(0, endOfTopic) + newTopicStr + content.slice(endOfTopic);
    fs.writeFileSync(path, content);
    console.log('Successfully added Class vs Object Properties topic.');
} else {
    console.log('Could not find anchor to insert new topic.');
}
