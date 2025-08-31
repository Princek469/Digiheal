import React from "react";
import "../OurServices/style/NetSolu.css";

function NetSolu() {
  return (
    <div className="network-container">
      <h1 className="title">Network Solutions</h1>

      {/* Section 1 */}
      <div className="section">
        <h2 className="subtitle">🌟 Overview</h2>
        <p className="text">
          Our team specializes in building secure, scalable, and high-performance
          network solutions. From small businesses to large enterprises, we ensure
          that your IT backbone is always connected and optimized.
        </p>
        <img
          src="https://img.freepik.com/free-vector/wireless-network-abstract-concept-illustration_335657-2257.jpg"
          alt="Network Infrastructure"
          className="section-img"
        />
      </div>

      {/* Section 2 */}
      <div className="section">
        <h2 className="subtitle">Our Key Services</h2>
        <ul className="list">
          <li>Network Design & Implementation</li>
          <li>Cloud Connectivity & VPN Solutions</li>
          <li>Firewall & Cybersecurity Protection</li>
          <li>LAN, WAN, and Wireless Network Setup</li>
          <li>24/7 Network Monitoring & Support</li>
        </ul>
      </div>

      {/* Section 3 */}
      <div className="section">
        <h2 className="subtitle">Industries We Serve</h2>
        <div className="industry-grid">
          <div className="industry-item">Banking & Finance</div>
          <div className="industry-item">Telecommunications</div>
          <div className="industry-item">Retail & E-commerce</div>
          <div className="industry-item">Healthcare</div>
          <div className="industry-item">Education</div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="section">
        <h2 className="subtitle">Why Choose Us?</h2>
        <p className="text">
          We provide innovative networking solutions that ensure smooth data
          transfer, minimize downtime, and protect against cyber threats.
          Partner with us to make your business truly connected.
        </p>
        <button className="btn">Contact Us</button>
      </div>
    </div>
  );
}

export default NetSolu;