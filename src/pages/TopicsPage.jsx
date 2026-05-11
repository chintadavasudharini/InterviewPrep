import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { interviewData, technologies } from '../data/interviewData';
import TopicCard from '../components/TopicCard';

const TopicsPage = ({ searchTerm }) => {
  const { techId } = useParams();
  const tech = technologies.find(t => t.id === techId);
  const topics = interviewData[techId] || [];

  const filteredTopics = topics.filter(topic => 
    topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    topic.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedTopics = filteredTopics.reduce((acc, topic) => {
    const category = topic.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(topic);
    return acc;
  }, {});

  const categoryOrder = ['Basic', 'Loops', 'OOP', 'OOP Core', 'OOP Basics', 'OOP Practice'];
  
  const sortedCategories = Object.keys(groupedTopics).sort((a, b) => {
    const indexA = categoryOrder.indexOf(a);
    const indexB = categoryOrder.indexOf(b);
    if (indexA !== -1 && indexB !== -1) return indexA - indexB;
    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;
    return a.localeCompare(b);
  });

  if (!tech) {
    return <div className="container py-5 text-center"><h2>Technology Not Found</h2></div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container py-5"
    >
      <div className="text-center mb-5">
        <h1 className="display-4 brand-font mb-3">{tech.name} <span style={{ color: 'var(--accent-color)' }}>Curriculum</span></h1>
        <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
          {tech.description}
        </p>
      </div>

      {sortedCategories.length > 0 ? (
        sortedCategories.map((category, catIndex) => {
          const categoryTopics = groupedTopics[category];
          return (
            <div key={category} className="mb-5">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: catIndex * 0.1 }}
                className="d-flex align-items-center mb-4"
              >
                <div className="category-divider me-3"></div>
                <h2 className="brand-font h3 mb-0" style={{ color: 'var(--text-color)' }}>{category}</h2>
              </motion.div>
              <div className="row g-4">
                {categoryTopics.map((topic, index) => (
                  <TopicCard key={topic.id} topic={topic} index={index} techId={techId} />
                ))}
              </div>
            </div>
          );
        })
      ) : (
        <div className="text-center py-5">
          <h3 className="text-muted">No topics found matching "{searchTerm}"</h3>
        </div>
      )}
    </motion.div>
  );
};

export default TopicsPage;

