import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { technologies } from '../data/interviewData';
import TopicCard from '../components/TopicCard';
import { BsArrowLeft } from 'react-icons/bs';

const CategoriesPage = () => {
  const { techId } = useParams();
  const tech = technologies.find(t => t.id === techId);

  if (!tech) {
    return (
      <div className="container py-5 text-center">
        <h2>Technology not found</h2>
        <Link to="/" className="btn btn-primary mt-3">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="mb-4">
        <Link to="/" className="text-decoration-none d-flex align-items-center text-muted">
          <BsArrowLeft className="me-2" /> Back to Home
        </Link>
      </div>

      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-5"
      >
        <h1 className="fw-bold">{tech.name} <span className="text-primary">Categories</span></h1>
        <p className="lead text-muted">Select a category to explore topics for your interview preparation.</p>
      </motion.div>

      <div className="row g-4">
        {tech.categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="col-md-6 col-lg-4"
          >
            <TopicCard
              title={category.name}
              description={`Master ${category.name} concepts in ${tech.name}.`}
              link={`/${tech.id}/${category.id}`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
