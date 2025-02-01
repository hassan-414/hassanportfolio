import React from 'react';
import './IntroSection.css'; // Custom CSS for styling
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa"; // Social Media Icons

function IntroSection() {
  const handleResumeClick = () => {
    // Resume PDF link from public folder
    window.open("/resume.pdf", "_blank");
  };

  return (
    <>
    <div className="intro-section">
      <div className="intro-left">
        <p>
          Hi, My name is <span className="highlight">Hassan Ahmed Khan</span>. <br />
          I am a <span className="highlight">Frontend Developer</span>. <br />
          I’m passionate about creating amazing <span className="purple">websites</span> and <span className="purple">web applications</span>.
        </p>
        {/* Social Media Links */}
        <div className="social-icons">
          <a href="https://facebook.com/61564477209720" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaFacebook className="social-icon" /> 
          </a>
          <a href="https://www.linkedin.com/in/hassan-khan-0a5385297" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin className="social-icon" /> 
          </a>
          <a href="https://www.instagram.com/khan_.414/" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaInstagram className="social-icon" /> 
          </a>
          
        </div>
        <button className="resume-button" onClick={handleResumeClick}>Resume</button>
      </div>
      <div className="intro-right">
        {/* Profile picture from public folder */}
        <img src="/my-profile.jpg" alt="Profile" className="profile-pic" />
      </div>
      
    </div>
   <div className="line">
    
   </div>
    
    </>
  );
}

export default IntroSection;
