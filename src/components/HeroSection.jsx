import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="container py-5 mt-lg-5">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h6 className="text-uppercase tracking-wider mb-3" style={{ letterSpacing: '3px', color: 'var(--text-muted)' }}>
              Python Full Stack Developer · AWS · AI-ML
            </h6>
            <h1 className="display-2 mb-4">
              Vasudharini's <span style={{ color: 'var(--accent-color)' }}>Learning</span> Portfolio
            </h1>
            <p className="lead text-muted mb-5 pe-lg-5" style={{ lineHeight: '1.8' }}>
              Hi, I'm Chintada Vasudharini. This is my structured repository for mastering Python, MySQL, DSA, and Cloud Architecture. 
              Designed for professional excellence and interview success.
            </p>
            <div className="d-flex gap-3">
              <Link to="/prep-paths" className="btn btn-premium shadow-lg">Start Prep</Link>
              <Link to="/about" className="btn btn-outline-dark rounded-pill px-4" style={{ border: '2px solid' }}>Explore Me</Link>
            </div>
          </motion.div>
        </div>
        <div className="col-lg-6 mt-5 mt-lg-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="position-relative"
          >
            <div 
              className="rounded-pill position-absolute" 
              style={{ 
                width: '400px', 
                height: '400px', 
                background: 'var(--gradient-soft)', 
                filter: 'blur(80px)', 
                opacity: 0.4,
                zIndex: -1,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            ></div>
            <div className="premium-card text-center py-5">
              <div className="display-1 mb-3" style={{ color: 'var(--accent-color)' }}>20+</div>
              <h4 className="fw-light text-muted">Advanced Topics</h4>
              <hr className="w-25 mx-auto my-4" />
              <div className="d-flex justify-content-around small text-muted">
                <div>Classes</div>
                <div>Inheritance</div>
                <div>Abstraction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
