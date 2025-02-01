import React from 'react';
import './ServiceSection.css'; // Importing custom CSS for styling
import { FaCode, FaWordpress } from 'react-icons/fa'; // Importing icons for the services

function ServiceSection() {
  // Defining the services
  const services = [
    {
      icon: <FaCode className="service-icon" />,
      title: "Web Development",
      description: "Creating responsive and interactive websites using modern technologies like React, HTML, and CSS.",
    },
    {
      icon: <FaWordpress className="service-icon" />,
      title: "WordPress Development",
      description: "Building highly customizable and user-friendly WordPress websites with custom themes and plugins.",
    },
  ];

  return (
    <>
        <div className="service-section">
      <h2 className="section-title">Services I Offer</h2>
      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            {service.icon}
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
    
    <div className="line">
      
    </div>
    </>

  );
}

export default ServiceSection;
