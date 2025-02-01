import React from 'react';
import './SkillsSection.css'; // Custom CSS for styling

function SkillsSection() {
  return (
    <>
    <div className="skills-section">
      <h2 className="section-title">My Skills</h2>

      <div className="skills-container">
        {/* Skill Icons */}
        <i className="fab fa-html5 skill-icon" style={{ color: '#E44D26' }} title="HTML"></i>
        <i className="fab fa-css3-alt skill-icon" style={{ color: '#1572B6' }} title="CSS"></i>
        <i className="fab fa-js-square skill-icon" style={{ color: '#F7DF1E' }} title="JavaScript"></i>
        <i className="fab fa-react skill-icon" style={{ color: '#61DAFB' }} title="React"></i>
        <i className="fab fa-wordpress skill-icon" style={{ color: '#21759B' }} title="WordPress"></i>
        <i className="fab fa-shopify skill-icon" style={{ color: '#7AB55C' }} title="Shopify"></i>
      </div>
    </div>
    <div className="line">
      
    </div>
    </>
  );
}

export default SkillsSection;
