import React, { useState } from "react";
import { FaLaptop, FaNetworkWired, FaFileAlt } from "react-icons/fa";
import "../OurServices/style/BComp.css";

function BComp() {
  const services = [
    {
      title: "Computer Fundamentals",
      description: "Understand the basics of computer systems, hardware, and software.",
      icon: <FaLaptop />,
      link: "/computer-fundamentals"
    },
    {
      title: "Internet & Networking",
      description: "Learn how to navigate, communicate, and collaborate using the internet.",
      icon: <FaNetworkWired />,
      link: "/internet-networking"
    },
    {
      title: "Office Software",
      description: "Gain practical skills in Word, Excel, PowerPoint, and productivity tools.",
      icon: <FaFileAlt />,
      link: "/office-software"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bcomp-container">
      <h1 className="bcomp-title">Basic Computer Skills</h1>
      <p className="bcomp-subtitle">
        Learn essential computer and office skills to boost your productivity.
      </p>

      {/* Desktop Grid */}
      <div className="bcomp-grid">
        {services.map((service, index) => (
          <div className="bcomp-card" key={index}>
            <div className="bcomp-icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <a href={service.link} className="bcomp-more-btn">More Information</a>
          </div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="bcomp-carousel">
        <button onClick={prevSlide} className="bcomp-btn">&#10094;</button>
        <div className="bcomp-card">
          <div className="bcomp-icon">{services[currentIndex].icon}</div>
          <h2>{services[currentIndex].title}</h2>
          <p>{services[currentIndex].description}</p>
          <a href={services[currentIndex].link} className="bcomp-more-btn">More Information</a>
        </div>
        <button onClick={nextSlide} className="bcomp-btn">&#10095;</button>
      </div>
    </div>
  );
}

export default BComp;
