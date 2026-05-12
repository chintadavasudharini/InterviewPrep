const fs = require('fs');
const path = 'src/data/interviewData.js';
let content = fs.readFileSync(path, 'utf8');

const lines = content.split('\n');
// Remove from line 3509 to 3818 (1-indexed)
const startLine = 3509;
const endLine = 3818;

const newLines = [
    ...lines.slice(0, startLine - 1),
    ...lines.slice(endLine)
];

fs.writeFileSync(path, newLines.join('\n'));
console.log('Removed topics 27-32.');
