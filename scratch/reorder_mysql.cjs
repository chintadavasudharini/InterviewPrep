const fs = require('fs');
const path = require('path');
const { interviewData, technologies } = require('../src/data/interviewData.js');

const desiredOrder = [
  "MySQL Introduction & Basics",
  "MySQL Database Operations",
  "Database Table Concepts",
  "Data Types in MySQL",
  "Constraints in MySQL",
  "MySQL Constraints Practical Example",
  "Classification of Relations in DBMS",
  "Degree of a Relation in DBMS",
  "Cardinality of a Relation in DBMS",
  "Types of Relationships in DBMS",
  "Strong vs Weak Relations in DBMS",
  "Total vs Partial Participation in DBMS",
  "Normalized vs Denormalized Relations",
  "Normal Forms in DBMS (1NF, 2NF, 3NF)",
  "SQL Command Types",
  "CRUD Operations in MySQL",
  "SQL DDL Commands with Employee Table",
  "ALTER TABLE Commands Syntax",
  "RENAME vs MODIFY vs CHANGE",
  "DELETE vs TRUNCATE vs DROP",
  "DQL (Data Query Language) - SELECT",
  "DCL (Data Control Language)",
  "DCL Practical Example (Two Tables)",
  "TCL (Transaction Control Language)",
  "TCL Practical Example (Bank System)",
  "SQL Filtering Concepts",
  "Filtering Data in SQL",
  "SQL JOINS"
];

const reorderedMysql = desiredOrder.map(title => {
  const item = interviewData.mysql.find(m => m.title === title);
  if (!item) {
    console.error('Topic not found:', title);
    process.exit(1);
  }
  if (title === "Filtering Data in SQL") {
    item.title = "Filtering Data Example";
  }
  return item;
});

interviewData.mysql = reorderedMysql;

const fileContent = `export const interviewData = ${JSON.stringify(interviewData, null, 2)};\n\nexport const technologies = ${JSON.stringify(technologies, null, 2)};\n`;

fs.writeFileSync(path.join(__dirname, '../src/data/interviewData.js'), fileContent);
console.log('Successfully reordered MySQL topics.');
