const fs = require('fs');
const path = 'src/data/interviewData.js';
let content = fs.readFileSync(path, 'utf8');

// Find the nested topic start
const nestedTopicStart = content.indexOf('"id": "class-vs-object-properties"');
if (nestedTopicStart !== -1) {
    // Find the opening { of the nested topic
    const topicStartBrace = content.lastIndexOf('{', nestedTopicStart);
    
    // Find the end of the topic (where it has ], "questions": [] }, )
    const questionsIndex = content.indexOf('"questions": []', topicStartBrace);
    const topicEndBrace = content.indexOf('}', questionsIndex) + 1;
    
    // Extract the topic
    const topicContent = content.slice(topicStartBrace, topicEndBrace);
    
    // Remove the topic from its current (nested) location
    // We also need to remove the comma if it exists
    let startRemove = topicStartBrace;
    let endRemove = topicEndBrace;
    
    // Check if there's a comma before
    if (content[startRemove - 1] === ',') startRemove--;
    else if (content[startRemove - 2] === ',') startRemove -= 2;
    
    const contentWithoutTopic = content.slice(0, startRemove) + content.slice(endRemove);
    
    // Now find the end of the python-variable-types topic
    const parentId = contentWithoutTopic.indexOf('"id": "python-variable-types"');
    const sectionsEnd = contentWithoutTopic.indexOf('],', parentId) + 1;
    const topicEnd = contentWithoutTopic.indexOf('},', sectionsEnd) + 2;
    
    // Insert the topic after the parent topic
    const finalContent = contentWithoutTopic.slice(0, topicEnd) + '\n  ' + topicContent + ',' + contentWithoutTopic.slice(topicEnd);
    
    fs.writeFileSync(path, finalContent);
    console.log('Successfully unnested the topic.');
} else {
    console.log('Could not find nested topic.');
}
