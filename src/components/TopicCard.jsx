import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BsArrowUpRight } from 'react-icons/bs';

const TopicCard = ({ topic, index, techId }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="col-md-6 col-lg-4 mb-4"
    >
      <Link to={`/${techId}/${topic.id}`} className="text-decoration-none">

        <div className="premium-card h-100">
          <div className="d-flex justify-content-between align-items-start mb-3">
            <span className="badge bg-light text-dark rounded-pill px-3 py-2 border">Topic {index + 1}</span>
            <BsArrowUpRight className="text-muted" />
          </div>
          <h4 className="mb-3 text-dark">{topic.title}</h4>
          <p className="text-muted small mb-0 line-clamp-2">
            {topic.definition}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default TopicCard;
