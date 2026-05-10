import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BsSearch } from 'react-icons/bs';

import SearchBar from './SearchBar';

const Navbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <nav className="navbar navbar-expand-lg glass-nav sticky-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="brand-font fs-3"
          >
            Interview<span className="text-accent" style={{ color: 'var(--accent-color)' }}>Prep</span>
          </motion.span>
        </Link>
        
        <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink className="nav-link mx-2" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link mx-2" to="/prep-paths">Start Prep</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link mx-2" to="/about">About Me</NavLink>
            </li>
          </ul>
          
          <div className="d-flex align-items-center">
            <div className="d-none d-lg-flex">
              <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
            <Link to="/contact" className="btn btn-premium ms-lg-3 d-none d-md-block">Get in Touch</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
