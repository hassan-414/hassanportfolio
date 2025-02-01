import React from "react";
import "./Resume.css";
import Footer from "../components/Footer";

const Resume = () => {
  return (
    <>
    <div className="resume-container">
      <h2>My Resume</h2>
      <iframe 
        src="/resume.pdf" 
        className="resume-frame"
        title="Resume"
      ></iframe>
      <a href="/resume.pdf" download className="download-btn">
        Download Resume
      </a>
    </div>
    <Footer/>
    </>
  );
};

export default Resume;
