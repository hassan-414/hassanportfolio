import React, { useState } from 'react';
import './PortfolioSection.css';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // List of projects with image, name, description, and project link
  const projects = [
    { id: 1, title: 'Watchistaan ', description: 'My First Client Project on Wordpress.', imgSrc: '/images/watchistaan.jpg', projectLink: 'https://watchistaan.com/' },
    { id: 2, title: 'Blog Web page', description: 'Blog templete by Html, Css.', imgSrc: '/images/mac.jpg', projectLink: '/projects/Blog/index1.html' },
    { id: 3, title: 'Paid Courses ', description: 'Promotion of Paid Courses by Html and Css.', imgSrc: '/images/course.jpg', projectLink: '/projects/Course/moiz.html' },
    { id: 4, title: 'Quiz App', description: 'Quiz app by Html and Java script.', imgSrc: '/images/quiz.jpg', projectLink: '/projects/Quiz/index.html' },
    { id: 5, title: 'Rock,Papar Game', description: 'Rock, Paper and Scissor game by Html, Css and Java script', imgSrc: '/images/rock,paper,scissor.jpg', projectLink: '/projects/Rock paper secissor/index.html' },
    { id: 6, title: 'Expences Calculator', description: 'Expences Calculator by Html, Css and Java script.', imgSrc: '/images/todo.jpg', projectLink: '/projects/Income Calculator/index.html' },
    { id: 7, title: 'Watchistaan', description: 'Watchistaan web page by Html, Css and React.', imgSrc: '/images/watchistaan js.jpg', projectLink: '/projects/Watchistaan js/index.html' },
    { id: 8, title: 'Sports Car Website', description: 'Sports Car Web Project in React + Vite.', imgSrc: '/images/sports-car.jpg',   projectLink: 'https://react-test-cyan-three.vercel.app/'},

  ];

  const handleClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <>
    <section className="portfolio">
      <h2 className="portfolio-title">My Portfolio</h2>
      <div className="portfolio-items">
        {projects.map(project => (
          <div
            key={project.id}
            className="portfolio-item"
            onClick={() => handleClick(project)}
          >
            <div className="project-header">
              <img src={project.imgSrc} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                <button>View</button>
              </a>
            </div>
          </div>
        ))}
      </div>
      
    </section>
    <div className="line">
  
    </div>
    </>
  );
};

export default Portfolio;

