import React from 'react';
import { NavLink } from 'react-router-dom';
import { interviewData } from '../data/interviewData';

const Sidebar = ({ currentTechId }) => {
  const topics = interviewData[currentTechId] || [];

  return (
    <div className="premium-sidebar">
      <h6 className="text-uppercase small fw-bold mb-4 tracking-wider" style={{ letterSpacing: '2px', color: 'var(--text-muted)' }}>
        {currentTechId?.toUpperCase()} Curriculum
      </h6>
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

