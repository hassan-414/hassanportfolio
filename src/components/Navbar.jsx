import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Link component for navigation

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State for handling mobile menu toggle

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span>Hassan Portfolio</span>
      </div>
      <div className={`navbar-right ${isOpen ? 'open' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/service">Service</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact Me</Link>
      </div>
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'X' : '☰'}
      </button>
    </nav>
  );
}

export default Navbar;
