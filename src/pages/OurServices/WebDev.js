import React from "react";
import "../OurServices/style/WebDev.css";

function WebDev() {
  const services = [
    {
      title: "HTML",
      description: "Learn the structure of the web using semantic HTML for accessible and SEO-friendly websites.",
    },
    {
      title: "CSS",
      description: "Master styling with CSS, Flexbox, Grid, animations, and responsive design techniques.",
    },
    {
      title: "JavaScript",
      description: "Understand core JavaScript concepts, DOM manipulation, ES6+, and asynchronous programming.",
    },
    {
      title: "React",
      description: "Build powerful, component-based UIs using React hooks, state management, and routing.",
    },
    {
      title: "Node.js",
      description: "Learn backend development with Node.js, Express.js, REST APIs, and database integration.",
    },
  ];

  return (
    <div className="webdev-container">
      <h1 className="webdev-title">Our Web Development Courses</h1>
      <p className="webdev-subtitle">
        We provide industry-ready training on the latest web technologies.
      </p>

      <div className="webdev-grid">
        {services.map((service, index) => (
          <div className="webdev-card" key={index}>
            <h2 className="webdev-card-title">{service.title}</h2>
            <p className="webdev-card-desc">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WebDev;
