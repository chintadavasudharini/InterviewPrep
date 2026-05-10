import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container py-5"
    >
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <h1 className="display-3 brand-font mb-4">About <span style={{ color: 'var(--accent-color)' }}>Vasudharini</span></h1>
          <div className="premium-card text-start mb-5">
            <p className="lead" style={{ lineHeight: '2' }}>
              I am Chintada Vasudharini, a Python Full Stack Developer specializing in AWS and AI-ML. 
              Currently pursuing my studies in CSE at KL University, I am dedicated to mastering technical interview concepts.
            </p>
            <p className="text-muted">
              This portfolio is a curated learning path designed to bridge the gap between academic theory 
              and practical interview performance. It showcases my journey in mastering Python's 
              Object-Oriented Programming and other core technologies.
            </p>
          </div>
          <div className="row g-4 mt-2">
            <div className="col-md-4">
              <div className="p-4 bg-white rounded-4 shadow-sm border">
                <h4 className="brand-font">20+</h4>
                <p className="small text-muted mb-0">OOP Topics</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 bg-white rounded-4 shadow-sm border">
                <h4 className="brand-font">50+</h4>
                <p className="small text-muted mb-0">Q&A Pairs</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 bg-white rounded-4 shadow-sm border">
                <h4 className="brand-font">Pure</h4>
                <p className="small text-muted mb-0">ReactJS Code</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
