import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BsEnvelope } from 'react-icons/bs';

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container py-5 mt-4"
    >
      <div className="row justify-content-center">
        <div className="col-lg-8">
          
          {/* Section 1: About Interview Prep */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 text-center"
          >
            <h2 className="display-4 brand-font mb-4">About <span style={{ color: 'var(--accent-color)' }}>Interview Prep</span></h2>
            <div className="premium-card text-start shadow-sm">
              <p className="lead" style={{ lineHeight: '1.8' }}>
                Interview Prep is a specialized platform designed to bridge the gap between technical theory 
                and professional interview performance. Our mission is to provide structured, high-quality 
                learning paths that focus on the core concepts essential for success in modern software engineering roles.
              </p>
              <p className="text-muted">
                From mastering Python's Object-Oriented Programming to deep-diving into Cloud Architecture 
                and DSA, every module is curated to ensure learners are not just prepared, but confident 
                in their technical abilities.
              </p>
            </div>
            <div className="mt-4">
              <Link to="/contact" className="btn btn-premium px-5 py-3 shadow">
                Get in Touch
              </Link>
            </div>
          </motion.div>

          {/* Section 2: About Vasudharini */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-5 text-center"
          >
            <h2 className="display-4 brand-font mb-4">About <span style={{ color: 'var(--accent-color)' }}>Vasudharini</span></h2>
            <div className="premium-card text-start shadow-sm">
              <p className="lead" style={{ lineHeight: '1.8' }}>
                HellOoo, I am Chintada Vasudharini, a Python Full Stack Developer specializing in AWS and AIML. 
                I completed my B.Tech in Computer Science and Engineering from KL University, 
                and I am dedicated to building efficient, scalable solutions and mastering the art of technical problem-solving.
              </p>
              <p className="text-muted">
                Through this platform, I aim to share my journey and consolidated knowledge base, 
                helping fellow developers navigate the complexities of technical interviews with ease.
              </p>
            </div>
          </motion.div>

          {/* Section 3: Connect with Vasudharini */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h2 className="display-4 brand-font mb-4">Connect with <span style={{ color: 'var(--accent-color)' }}>Vasudharini</span></h2>
            <div className="premium-card shadow-sm py-4">
              <div className="d-flex align-items-center justify-content-center gap-3">
                 <div className="rounded-circle p-3 d-flex align-items-center justify-content-center" style={{ background: 'var(--accent-color)15', color: 'var(--accent-color)' }}>
                   <BsEnvelope size={24} />
                 </div>
                 <a 
                   href="mailto:chintadavasudharini@gmail.com" 
                   className="text-decoration-none h4 mb-0 brand-font hover-accent" 
                   style={{ color: 'var(--text-color)' }}
                 >
                   chintadavasudharini@gmail.com
                 </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
