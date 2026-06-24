import React from 'react';
import { NavLink } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <NavLink to="/" className="header-logo">
          <BookOpen size={24} />
          <span>Class Portal</span>
        </NavLink>
        <nav className="nav-links">
          <NavLink 
            to="/" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            end
          >
            Instructor Materials
          </NavLink>
          <NavLink 
            to="/ta" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            TA Materials
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
