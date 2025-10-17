import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation: React.FC = () => {
  return (
    <nav className="top-nav">
      <div className="nav-brand">
        <h1 className="university-title">Help University</h1>
      </div>
      <div className="nav-menu">
        <Link to="/home" className="nav-link">Home</Link>
        <a href="#" className="nav-link">Calendar</a>
        <a href="#" className="nav-link">Chat</a>
        <a href="#" className="nav-link">Search</a>
        <a href="#" className="nav-link">Analytics</a>
      </div>
      <div className="nav-user">
        <div className="settings-icon">⚙️</div>
      </div>
    </nav>
  );
};

export default Navigation;
