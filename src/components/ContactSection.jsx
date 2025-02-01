import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactSection.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mf694ua",  
        "template_ol0evb8",  
        e.target,
        "OPu6d0U47_oUXC0pA"
      )
      .then(
        (result) => {
          alert("Message Sent Successfully! ✅");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Error sending message. ❌  Try again!");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact</h1>
      <div className="contact-content">
        <div className="contact-left">
          <h2>Do You Have a Project to Discuss?</h2>
          <p>Get in Touch 💬</p>
          <p className="email-text">Email: technicalhassankhan.1@gmail.com</p>
        </div>

        <div className="contact-right">
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">SEND</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
