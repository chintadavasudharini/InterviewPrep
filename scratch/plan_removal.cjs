const fs = require('fs');
const path = 'src/data/interviewData.js';
let content = fs.readFileSync(path, 'utf8');

const idsToRemove = [
    'python-modules',
    'python-range',
    'python-functions',
    'python-arguments',
    'python-args-kwargs',
    'python-scope',
    'python-decorators',
    'python-lambda',
    'python-recursion',
    'python-generators'
];

let data = eval(content.replace('export const interviewData =', ''));

// We need to handle the fact that interviewData is an object
// and python is an array inside it.
// Actually, it's easier to just use the string manipulation if I have the line numbers.
// But let's try a safer way.

const pythonTopics = data.python;
data.python = pythonTopics.filter(topic => !idsToRemove.includes(topic.id));

const newContent = 'export const interviewData = ' + JSON.stringify(data, null, 2) + ';\n\n' + 
                 content.slice(content.indexOf('export const technologies ='));

// Wait, JSON.stringify might lose formatting or quotes style.
// I'll stick to line-based removal.
