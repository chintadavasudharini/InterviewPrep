import React from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container py-5"
    >
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="text-center mb-5">
            <h1 className="display-4 brand-font">Connect with <span style={{ color: 'var(--accent-color)' }}>Vasudharini</span></h1>
            <p className="text-muted">Questions or suggestions for interview prep? Reach out at <span className="fw-bold">chintadavasudharini@gmail.com</span></p>
          </div>
          <div className="premium-card">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-4">
                <label className="form-label small text-muted text-uppercase fw-bold">Full Name</label>
                <input type="text" className="form-control bg-light border-0 py-3 rounded-3" placeholder="Enter your name" />
              </div>
              <div className="mb-4">
                <label className="form-label small text-muted text-uppercase fw-bold">Email Address</label>
                <input type="email" className="form-control bg-light border-0 py-3 rounded-3" placeholder="email@example.com" />
              </div>
              <div className="mb-4">
                <label className="form-label small text-muted text-uppercase fw-bold">Message</label>
                <textarea className="form-control bg-light border-0 py-3 rounded-3" rows="5" placeholder="How can I help you?"></textarea>
              </div>
              <button className="btn btn-premium w-100 py-3 shadow">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
