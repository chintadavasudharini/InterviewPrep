import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsCheckCircle, BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // Custom validation: Either message or suggestions must be present
    if (!data.message.trim() && !data.suggestions.trim()) {
      setStatus('validation-error');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch("https://formsubmit.co/ajax/connect.interviewprep@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="container py-5 mt-5 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="premium-card py-5 shadow-lg mx-auto"
          style={{ maxWidth: '500px' }}
        >
          <div className="mb-4 text-success">
            <BsCheckCircle size={80} />
          </div>
          <h2 className="brand-font mb-3">Message Sent!</h2>
          <p className="text-muted mb-4">
            Thank you, InterviewPrep has received your message and will get back to you soon.
          </p>
          <Link to="/" className="btn btn-premium px-5 py-3">
            Back to Home
          </Link>
        </motion.div>
      </div>
    );
  }

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
            <h1 className="display-4 brand-font">Connect with <span style={{ color: 'var(--accent-color)' }}>InterviewPrep</span></h1>
            <p className="text-muted">Questions or suggestions for interview prep? Reach out at <span className="fw-bold">connect.interviewprep@gmail.com</span></p>
          </div>
          <div className="premium-card shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="form-label small text-muted text-uppercase fw-bold">Full Name</label>
                <input 
                  name="name"
                  type="text" 
                  required
                  className="form-control bg-light border-0 py-3 rounded-3" 
                  placeholder="Enter your name" 
                />
              </div>
              <div className="mb-4">
                <label className="form-label small text-muted text-uppercase fw-bold">Email Address</label>
                <input 
                  name="email"
                  type="email" 
                  required
                  className="form-control bg-light border-0 py-3 rounded-3" 
                  placeholder="email@example.com" 
                />
              </div>
              <div className="mb-4">
                <label className="form-label small text-muted text-uppercase fw-bold">Message</label>
                <textarea 
                  name="message"
                  className="form-control bg-light border-0 py-3 rounded-3" 
                  rows="3" 
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="form-label small text-muted text-uppercase fw-bold">Questions or suggestions for interview prep</label>
                <textarea 
                  name="suggestions"
                  className="form-control bg-light border-0 py-3 rounded-3" 
                  rows="3" 
                  placeholder="Any specific topics or improvements?"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="btn btn-premium w-100 py-3 shadow d-flex align-items-center justify-content-center gap-2"
              >
                {status === 'loading' ? (
                  <>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>

              {status === 'validation-error' && (
                <div className="mt-3 text-danger small text-center fw-bold">
                  Please provide either a Message or a Suggestion.
                </div>
              )}

              {status === 'error' && (
                <div className="mt-3 text-danger small text-center">
                  Something went wrong. Please try again or email directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
