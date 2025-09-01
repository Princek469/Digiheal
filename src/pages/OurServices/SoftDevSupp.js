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
          src="https://www.orientsoftware.com/Themes/Content/Images/blog/2023-04-27/software-development-partner.jpg"
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
          <div className="card">Data Transformation & Integration</div>
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

    {/* New Technologies */}
    <div className="tech-item">
      <img
        src="https://www.sap.com/dam/application/shared/logos/sap-logo-svg.svg"
        alt="SAP PI/PO"
      />
      <p>SAP PI/PO</p>
    </div>

    <div className="tech-item">
      <img
        src="https://www.sap.com/dam/application/shared/logos/sap-logo-svg.svg"
        alt="SAP CPI"
      />
      <p>SAP CPI</p>
    </div>

    <div className="tech-item">
      <img
        src="https://companieslogo.com/img/orig/IBM-3c0c9f9e.png?t=1721743609"
        alt="IBM ITX"
      />
      <p>IBM ITX</p>
    </div>

    <div className="tech-item">
      <img
        src="https://cdn.worldvectorlogo.com/logos/salesforce-2.svg"
        alt="Salesforce CRM"
      />
      <p>Salesforce CRM</p>
    </div>

    <div className="tech-item">
      <img
        src="https://cdn-icons-png.flaticon.com/512/906/906349.png"
        alt="EDI"
      />
      <p>EDI (Electronic Data Interchange)</p>
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
        <a href="/contact" className="btn">Contact Us</a>
      </section>
    </div>
  );
};

export default SoftDevSupp;