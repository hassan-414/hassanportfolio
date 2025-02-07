import React, { useEffect, useRef } from 'react';
import './SkillsSection.css';

function SkillsSection() {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document.querySelectorAll('.circle-progress').forEach((circle) => {
              const value = circle.getAttribute('data-value');
              circle.style.strokeDashoffset = 251 - (251 * value) / 100;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
    <div className="skills-section" ref={skillsRef}>
      <h2 className="section-title">My Skills</h2>

      <div className="skills-container">
        {[
          { name: 'HTML', value: 100, color: '#E44D26', icon: 'fa-html5' },
          { name: 'CSS', value: 90, color: '#1572B6', icon: 'fa-css3-alt' },
          { name: 'JavaScript', value: 90, color: '#F7DF1E', icon: 'fa-js-square' },
          { name: 'React', value: 80, color: '#61DAFB', icon: 'fa-react' },
          { name: 'WordPress', value: 70, color: '#21759B', icon: 'fa-wordpress' },
          { name: 'Shopify', value: 90, color: '#7AB55C', icon: 'fa-shopify' }
        ].map((skill, index) => (
          <div className="skill" key={index}>
            {/* Skill Icon */}
            <i className={`fab ${skill.icon} skill-icon`} style={{ color: skill.color }} title={skill.name}></i>
            
            {/* Circular Progress Bar */}
            <div className="circle-container">
              <svg width="90" height="90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" className="circle-bg"></circle>
                <circle cx="50" cy="50" r="40" className="circle-progress"
                  stroke={skill.color} strokeWidth="8" data-value={skill.value} />
                <text x="50" y="55" className="percentage-text">{skill.value}%</text>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="line">
      
    </div>
    </>
  );
}

export default SkillsSection;
