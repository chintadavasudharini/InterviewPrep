const fs = require('fs');
const path = 'src/data/interviewData.js';
let content = fs.readFileSync(path, 'utf8');

const lines = content.split('\n');

// Part 1: Remove Modules and Range (old 25, 26)
// Line 3405 to 3508
const start1 = 3405;
const end1 = 3508;

// Part 2: Remove Functions, Arguments, *args, Scope, Decorators, Lambda, Recursion, Generators (old 35-42)
// Line 3669 to 4020
const start2 = 3669;
const end2 = 4020;

const newLines = [
    ...lines.slice(0, start1 - 1),
    ...lines.slice(end1, start2 - 1),
    ...lines.slice(end2)
];

fs.writeFileSync(path, newLines.join('\n'));
console.log('Removed requested blocks.');
