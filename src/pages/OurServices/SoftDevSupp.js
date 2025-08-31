import React from "react";
import "../OurServices/style/SoftDevSupp.css"; // Import the CSS file

const SoftDevSupp = () => {
  return (
    <div className="software-container">
      <h1 className="title">💻 Software Development & Services</h1>

      {/* Overview */}
      <section className="section">
        <h2 className="subtitle">🌟 Overview</h2>
        <p className="text">
          We provide comprehensive software development and IT services tailored
          to meet the unique needs of businesses. From web applications to
          enterprise-level solutions, our team focuses on delivering scalable,
          secure, and high-performance products.
        </p>
        <img
          src="https://eleks.com/wp-content/uploads/image-within-the-text-Guide-to-Types-of-Software-Development-Services3.jpg"
          alt="Software development"
          className="section-img"
        />
      </section>

      {/* Services */}
      <section className="section">
        <h2 className="subtitle">🛠 Our Services</h2>
        <div className="card-grid">
          <div className="card">Custom Web & Mobile Application Development</div>
          <div className="card">Cloud Solutions & Migration</div>
          <div className="card">Software Testing & Quality Assurance</div>
          <div className="card">Application Maintenance & Support</div>
          <div className="card">UI/UX Design & Prototyping</div>
          <div className="card">DevOps & Continuous Integration</div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section">
        <h2 className="subtitle">⚙️ Technologies We Use</h2>
        <div className="tech-grid">
          <div className="tech-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React.js"
            />
            <p>React.js</p>
          </div>
          <div className="tech-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              alt="Node.js"
            />
            <p>Node.js</p>
          </div>
          <div className="tech-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
              alt="Python"
            />
            <p>Python</p>
          </div>
          <div className="tech-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
              alt="Java"
            />
            <p>Java</p>
          </div>
          <div className="tech-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
              alt="AWS"
            />
            <p>AWS & Azure</p>
          </div>
          <div className="tech-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
              alt="MongoDB"
            />
            <p>MySQL / MongoDB</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section contact">
        <h2 className="subtitle">📞 Get in Touch</h2>
        <p className="text">
          Looking for a reliable partner to build your next software project? 🚀
          Reach out to us for consultation and tailored solutions.
        </p>
        <button className="btn">Contact Us</button>
      </section>
    </div>
  );
};

export default SoftDevSupp;