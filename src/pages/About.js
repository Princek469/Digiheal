// About.js
import React from "react";
import "../css/About.css";

export default function About() {
  return (
    <div className="about-page">
      {/* Banner Section */}
      <div className="about-banner">
        <img src="/images/about-page.webp" alt="About Us Banner" />
        <div className="banner-text">
          <h1>About Us</h1>
          <p>Empowering businesses with technology & innovation</p>
        </div>
      </div>

      {/* About Content */}
      <section className="about-content">
        <h2>Who We Are</h2>
        <p>
          Digiheal is dedicated to providing top-notch services that empower
          businesses to grow and succeed. With years of experience and a passion
          for innovation, we bring tailored solutions to meet our clients’
          unique needs.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="mission card-block">
          <h3>Our Mission</h3>
          <p>
            To deliver high-quality, reliable, and scalable services that
            empower our clients to achieve their goals with confidence.
          </p>
        </div>
        <div className="vision card-block">
          <h3>Our Vision</h3>
          <p>
            To be a global leader in service excellence, innovation, and
            customer satisfaction.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>What We Do</h2>
        <div className="service-cards">
          <div className="card">
            <img src="/images/about-us-consulting.webp" alt="Service 1" />
            <h4>Consulting</h4>
            <p>
              Expert advice to help your business thrive in a competitive
              market.
            </p>
          </div>
          <div className="card">
            <img src="/images/about-us-software.jpg" alt="Service 2" />
            <h4>Technology Solutions</h4>
            <p>Cutting-edge software and systems tailored to your needs.</p>
          </div>
          <div className="card">
            <img src="/images/customer-support.webp" alt="Service 3" />
            <h4>Customer Support</h4>
            <p>
              24/7 dedicated support to ensure your success every step of the
              way.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
