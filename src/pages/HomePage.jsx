import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import { technologies } from '../data/interviewData';
import { Link } from 'react-router-dom';
import * as Icons from 'react-icons/si';

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HeroSection />
      
      <section className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 brand-font">Preparation Paths</h2>
          <p className="text-muted lead">Choose a technology to start your daily interview preparation.</p>
        </div>
        
        <div className="row g-4 justify-content-center">
          {technologies.map((tech, index) => {
            const IconComponent = Icons[tech.icon] || Icons.SiCodeforces;
            return (
              <motion.div 
                key={tech.id}
                className="col-md-6 col-lg-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/${tech.id}`} className="text-decoration-none">
                  <div className="premium-card h-100 text-center tech-card" style={{ borderTop: `4px solid ${tech.color}` }}>
                    <div className="icon-wrapper mb-4 mx-auto" style={{ backgroundColor: `${tech.color}15`, color: tech.color }}>
                      <IconComponent size={40} />
                    </div>
                    <h3 className="h4 text-dark mb-3">{tech.name}</h3>
                    <p className="text-muted small mb-4">{tech.description}</p>
                    <span className="btn btn-sm btn-outline-premium rounded-pill px-4">Explore Path</span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="bg-light py-5 mt-5">
        <div className="container py-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="display-5 brand-font mb-4">Continuous Learning</h2>
              <p className="lead text-muted mb-5">
                Updated daily with new interview questions, real-world scenarios, and optimized code solutions 
                to help you crack top-tier tech interviews.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <Link to="/about" className="btn btn-premium btn-lg shadow">About Portfolio</Link>
                <Link to="/contact" className="btn btn-outline-dark btn-lg rounded-pill">Get in Touch</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;

