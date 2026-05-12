const fs = require('fs');
const path = 'src/data/interviewData.js';
let content = fs.readFileSync(path, 'utf8');

const lines = content.split('\n');
// We want to remove lines from 6253 (0-indexed 6252) to 6698 (0-indexed 6697)
// Wait, line 6253 is the closing brace of the PREVIOUS topic.
// Line 6254 is the start of the duplicate.
// So we keep 6253, and remove from 6254 to the line before 6699.

const startLine = 6254; // 1-indexed
const endLine = 6698;   // 1-indexed (the last '}' of the iterators topic)

const newLines = [
    ...lines.slice(0, startLine - 1),
    ...lines.slice(endLine)
];

fs.writeFileSync(path, newLines.join('\n'));
console.log('Removed duplicate lines.');
