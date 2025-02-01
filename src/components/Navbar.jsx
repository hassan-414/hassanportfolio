import React from 'react';
import { Link } from 'react-router-dom'; // Link component for navigation

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span>Hassan Portfolio</span>
      </div>
      <div className="navbar-right">
        <Link to="/">Home</Link>
        <Link to="/service">Service</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact Me</Link>
      </div>
    </nav>
  );
}

export default Navbar;
