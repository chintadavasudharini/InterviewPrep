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

      <div className="row g-4">
        {filteredTopics.length > 0 ? (
          filteredTopics.map((topic, index) => (
            <TopicCard key={topic.id} topic={topic} index={index} techId={techId} />
          ))
        ) : (
          <div className="text-center py-5">
            <h3 className="text-muted">No topics found matching "{searchTerm}"</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default TopicsPage;

