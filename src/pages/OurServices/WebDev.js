import React, { useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import "../OurServices/style/WebDev.css";

function WebDev() {
  const services = [
    { title: "HTML", description: "Learn the structure of the web using semantic HTML for accessible and SEO-friendly websites.", icon: <FaHtml5 />, link: "/html" },
    { title: "CSS", description: "Master styling with CSS, Flexbox, Grid, animations, and responsive design techniques.", icon: <FaCss3Alt />, link: "/css" },
    { title: "JavaScript", description: "Understand core JavaScript concepts, DOM manipulation, ES6+, and asynchronous programming.", icon: <FaJs />, link: "/javascript" },
    { title: "React", description: "Build powerful, component-based UIs using React hooks, state management, and routing.", icon: <FaReact />, link: "/react" },
    { title: "Node.js", description: "Learn backend development with Node.js, Express.js, REST APIs, and database integration.", icon: <FaNodeJs />, link: "/nodejs" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(prev => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex(prev => (prev === services.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="webdev-container">
      <h1 className="webdev-title">Our Web Development Courses</h1>
      <p className="webdev-subtitle">We provide industry-ready training on the latest web technologies.</p>

      {/* Desktop Grid */}
      <div className="webdev-grid">
        {services.map((service, index) => (
          <div className="webdev-card" key={index}>
            <div className="webdev-icon">{service.icon}</div>
            <h2 className="webdev-card-title">{service.title}</h2>
            <p className="webdev-card-desc">{service.description}</p>
            <a href={service.link} className="webdev-more-btn">More Information</a>
          </div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="webdev-carousel">
        <button onClick={prevSlide} className="webdev-btn">&#10094;</button>
        <div className="webdev-card">
          <div className="webdev-icon">{services[currentIndex].icon}</div>
          <h2 className="webdev-card-title">{services[currentIndex].title}</h2>
          <p className="webdev-card-desc">{services[currentIndex].description}</p>
          <a href={services[currentIndex].link} className="webdev-more-btn">More Information</a>
        </div>
        <button onClick={nextSlide} className="webdev-btn">&#10095;</button>
      </div>
    </div>
  );
}

export default WebDev;
