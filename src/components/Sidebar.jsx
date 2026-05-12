import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { interviewData } from '../data/interviewData';

const Sidebar = ({ currentTechId }) => {
  const topics = interviewData[currentTechId] || [];

  return (
    <div className="premium-sidebar">
      <Link 
        to={`/${currentTechId}`}
        className="text-decoration-none"
      >
        <h6 className="text-uppercase small fw-bold mb-4 tracking-wider curriculum-heading" style={{ letterSpacing: '2px' }}>
          {currentTechId?.toUpperCase()} Curriculum
        </h6>
      </Link>
      <div className="nav flex-column">
        {topics.map((topic, index) => (
          <NavLink
            key={topic.id}
            to={`/${currentTechId}/${topic.id}`}
            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
          >
            <span className="me-2 text-muted">{String(index + 1).padStart(2, '0')}.</span>
            {topic.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

