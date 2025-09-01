import React from "react";
import "../OurServices/style/ItConsul.css"; // Import CSS file for styling

function ItConsul() {
  return (
    <div className="consulting-container">
      <h1 className="title">IT Consulting Services</h1>

      {/* Overview */}
      <section className="section">
        <h2 className="subtitle">🌟 Overview</h2>
        <p className="text">
          Our IT consulting services help businesses align their technology
          strategy with business goals. From digital transformation to IT
          infrastructure optimization, we deliver expert guidance that drives
          efficiency and growth.
        </p>
        <img
          src="https://img.freepik.com/free-vector/business-consulting-concept-illustration_114360-9254.jpg"
          alt="IT Consulting"
          className="section-img"
        />
      </section>

      {/* Services */}
      <section className="section">
        <h2 className="subtitle">Our Consulting Services</h2>
        <ul className="list">
          <li>IT Strategy & Digital Transformation</li>
          <li>Cloud Adoption & Migration Consulting</li>
          <li>Cybersecurity & Risk Management</li>
          <li>Infrastructure Assessment & Optimization</li>
          <li>Business Process Automation</li>
          <li>Technology Roadmap Planning</li>
        </ul>
        <img
          src="https://img.freepik.com/free-vector/technology-consulting-abstract-concept-illustration_335657-1817.jpg"
          alt="Consulting Services"
          className="section-img"
        />
      </section>

      {/* Industries */}
      <section className="section">
        <h2 className="subtitle">Industries We Serve</h2>
        <div className="industry-grid">
          <div className="industry-item">Finance</div>
          <div className="industry-item">Healthcare</div>
          <div className="industry-item">E-commerce</div>
          <div className="industry-item">Manufacturing</div>
          <div className="industry-item">Retail</div>
          <div className="industry-item">Startups</div>
        </div>
      </section>

      {/* Contact */}
      <section className="section">
        <h2 className="subtitle">Let’s Work Together</h2>
        <p className="text">
          Need expert advice to transform your IT infrastructure and strategy?
          Our consulting experts are here to guide you every step of the way.
        </p>
        <a href="/contact" className="btn">Contact Us</a>
      </section>
    </div>
  );
}

export default ItConsul;