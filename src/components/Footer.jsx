import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-5 mt-5" style={{ background: 'var(--secondary-bg)', borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        <div className="row g-4 text-center text-md-start">
          <div className="col-lg-4">
            <h3 className="brand-font mb-3">Interview<span style={{ color: 'var(--accent-color)' }}>Prep</span></h3>
            <p className="text-muted small pe-lg-5">
              Your daily companion for mastering technical interviews. Curated content for Python, MySQL, DSA, and Cloud Architecture.
            </p>
          </div>
          <div className="col-lg-2 offset-lg-2">
            <h6 className="text-uppercase small fw-bold mb-3 tracking-widest">Platform</h6>
            <ul className="list-unstyled small">
              <li className="mb-2"><Link to="/" className="text-decoration-none text-muted">Home</Link></li>
              <li className="mb-2"><Link to="/prep-paths" className="text-decoration-none text-muted">Start Prep</Link></li>
              <li className="mb-2"><Link to="/about" className="text-decoration-none text-muted">About</Link></li>
            </ul>
          </div>

          <div className="col-lg-2">
            <h6 className="text-uppercase small fw-bold mb-3 tracking-widest">Social</h6>
            <ul className="list-unstyled small">
              <li className="mb-2"><a href="https://www.linkedin.com/in/chintada-vasudharini-nov21/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-muted">LinkedIn</a></li>
              <li className="mb-2"><a href="https://github.com/chintadavasudharini" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-muted">GitHub</a></li>
              <li className="mb-2"><a href="https://portfolio-lime-tau-36.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-muted">Personal Portfolio</a></li>
            </ul>
          </div>
        </div>
        <hr className="my-5" style={{ opacity: 0.1 }} />
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center small text-muted">
          <p className="mb-0">&copy; {new Date().getFullYear()} Chintada Vasudharini. All rights reserved.</p>
          <div className="d-flex gap-4 mt-3 mt-md-0">
            <a href="#" className="text-decoration-none text-muted">Privacy Policy</a>
            <a href="#" className="text-decoration-none text-muted">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
