import React, { useState } from "react";
import { FaRobot, FaBrain, FaChartLine, FaCloud, FaCogs } from "react-icons/fa";
import "../OurServices/style/AI.css";

function AI() {
  const services = [
    {
      title: "Machine Learning",
      description: "Learn algorithms and models to enable computers to learn from data.",
      icon: <FaRobot />,
      link: "/machine-learning"
    },
    {
      title: "Deep Learning",
      description: "Explore neural networks, CNNs, and RNNs for advanced AI applications.",
      icon: <FaBrain />,
      link: "/deep-learning"
    },
    {
      title: "Natural Language Processing",
      description: "Work with text and language understanding using NLP techniques.",
      icon: <FaCogs />,
      link: "/nlp"
    },
    {
      title: "Computer Vision",
      description: "Build systems that can understand images and video data.",
      icon: <FaChartLine />,
      link: "/computer-vision"
    },
    {
      title: "AI Cloud Services",
      description: "Use cloud-based AI tools and platforms for deployment and scalability.",
      icon: <FaCloud />,
      link: "/ai-cloud"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(prev => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex(prev => (prev === services.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="ai-container">
      <h1 className="ai-title">Artificial Intelligence Courses</h1>
      <p className="ai-subtitle">Get hands-on experience with modern AI techniques and tools.</p>

      {/* Desktop Grid */}
      <div className="ai-grid">
        {services.map((service, index) => (
          <div className="ai-card" key={index}>
            <div className="ai-icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <a href="#" className="ai-more-btn">More Information</a>
          </div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="ai-carousel">
        <button onClick={prevSlide} className="ai-btn">&#10094;</button>
        <div className="ai-card">
          <div className="ai-icon">{services[currentIndex].icon}</div>
          <h2>{services[currentIndex].title}</h2>
          <p>{services[currentIndex].description}</p>
          <a href="#" className="ai-more-btn">More Information</a>
        </div>
        <button onClick={nextSlide} className="ai-btn">&#10095;</button>
      </div>
    </div>
  );
}

export default AI;
