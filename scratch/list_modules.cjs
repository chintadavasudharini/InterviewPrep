const fs = require('fs');
const content = fs.readFileSync('src/data/interviewData.js', 'utf8');

// Find the start of the mysql array
const mysqlMatch = content.match(/mysql:\s*\[/);
if (!mysqlMatch) {
    console.log("Could not find mysql array");
    process.exit(1);
}

const mysqlStart = mysqlMatch.index + mysqlMatch[0].length;
let balance = 1;
let mysqlEnd = -1;

for (let i = mysqlStart; i < content.length; i++) {
    if (content[i] === '[') balance++;
    else if (content[i] === ']') balance--;

    if (balance === 0) {
        mysqlEnd = i;
        break;
    }
}

const mysqlContent = content.substring(mysqlStart, mysqlEnd);
const lines = content.split('\n');

// Find module starts within the mysql content
const moduleRegex = /\{\s*"id":\s*"([^"]+)",\s*"title":\s*"([^"]+)"/g;
let match;
while ((match = moduleRegex.exec(content)) !== null) {
    if (match.index >= mysqlStart && match.index <= mysqlEnd) {
        const lineNum = content.substring(0, match.index).split('\n').length;
        console.log(`ID: ${match[1]}, Title: ${match[2]}, Line: ${lineNum}`);
    }
}
