const fs = require('fs');
const path = 'src/data/interviewData.js';
let content = fs.readFileSync(path, 'utf8');

const startId = content.indexOf('"id": "python-polymorphism"');
const sectionsStart = content.indexOf('"sections": [', startId);
const sectionsEnd = content.indexOf('],', sectionsStart);

let sectionsStr = content.slice(sectionsStart, sectionsEnd);

// I'll look for "Advantages of Polymorphism" which is line 608 approx
const anchor = sectionsStr.indexOf('"value": "Advantages of Polymorphism');
if (anchor !== -1) {
    // Find the NEXT closing brace } of that section
    const sectionEnd = sectionsStr.indexOf('}', anchor) + 1;
    
    const newContent = `
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
        "value": "🔹 1. What is Polymorphism?\\n\\nPolymorphism means one method, function, or operator can perform different behaviors."
      },
      {
        "type": "text",
        "value": "🔹 2. What are the Types of Polymorphism?\\nMethod Overriding\\nMethod Overloading\\nOperator Overloading\\nDuck Typing"
      },
      {
        "type": "text",
        "value": "🔹 3. What is Method Overriding?\\n\\nMethod overriding occurs when a child class redefines the method of the parent class."
      },
      {
        "type": "text",
        "value": "🔹 4. Does Python Support Method Overloading?\\n\\nPython does not support true method overloading directly like Java.\\nbut it can be achieved using default arguments."
      },
      {
        "type": "text",
        "value": "🔹 5. What is Operator Overloading?\\n\\nOperator overloading means changing the behavior of operators using magic methods."
      },
      {
        "type": "text",
        "value": "🔹 6. What is Duck Typing?\\n\\nA concept where an object's suitability is determined by its methods and behavior, not its type."
      },
      {
        "type": "text",
        "value": "Quick Revision:\\n• Overriding: Child changes Parent\\n• Overloading: Multiple args\\n• Duck Typing: Behavior over Type"
      }`;
    
    const updatedSectionsStr = sectionsStr.slice(0, sectionEnd).trimEnd() + ',' + newContent;
    content = content.slice(0, sectionsStart) + updatedSectionsStr + content.slice(sectionsEnd);
    fs.writeFileSync(path, content);
    console.log('Successfully updated polymorphism questions and table (v2).');
} else {
    console.log('Could not find anchor in polymorphism topic.');
}
