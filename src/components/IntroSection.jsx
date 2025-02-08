import React, { useEffect, useRef } from "react";
import Typed from "typed.js"; // Import Typed.js
import "./IntroSection.css";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

function IntroSection() {
  const typingRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typingRef.current, {
      strings: ["Web Sites.", "Web Applications."], // Words to be typed
      typeSpeed: 80, // Speed of typing
      backSpeed: 50, // Speed of deleting
      backDelay: 1000, // Pause before deleting
      loop: true, // Repeat animation
      showCursor: false,
    });

    return () => {
      typed.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <>
      <div className="intro-section">
        <div className="intro-left">
          <p>
          Hi, I’m  <span className="highlight"> Hassan Ahmed Khan </span>– a passionate <span className="highlight">Frontend Developer</span> crafting beautiful and user-friendly web experiences. <br/>Turning ideas into interactive, responsive, and engaging websites with modern web technologies.
            <br />
            I’m also work about creating amazing{" "}
            <span ref={typingRef} className="purple"></span>
          </p>
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
          <button className="resume-button" onClick={() => window.open("/resume1.pdf", "_blank")}>
            Resume
          </button>
        </div>
        <div className="intro-right">
          <img src="/my-profile2.jpg" alt="Profile" className="profile-pic" />
        </div>
      </div>
      <div className="line">
        
      </div>
    </>
  );
}

export default IntroSection;
