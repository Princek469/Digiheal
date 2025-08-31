import React, { useState } from "react";
import { FaJava, FaPython, FaMicrosoft } from "react-icons/fa";
import { SiDotnet, SiCplusplus } from "react-icons/si";
import "../OurServices/style/Programming.css";

function Programming() {
  const services = [
    { title: "C", description: "Learn structured programming and algorithm basics.", icon: <SiCplusplus />, link: "/c" },
    { title: "C++", description: "Master object-oriented programming and STL concepts.", icon: <SiCplusplus />, link: "/cpp" },
    { title: "Core Java", description: "Develop Java applications with OOP, collections, and multithreading.", icon: <FaJava />, link: "/java" },
    { title: "Python", description: "Explore scripting, automation, and data analysis with Python.", icon: <FaPython />, link: "/python" },
    { title: ".Net", description: "Build scalable applications using the .Net framework.", icon: <SiDotnet />, link: "/dotnet" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(prev => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex(prev => (prev === services.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="programming-container">
      <h1 className="programming-title">Programming & Coding</h1>
      <p className="programming-subtitle">Learn core programming languages used in the industry.</p>

      {/* Desktop Grid */}
      <div className="programming-grid">
        {services.map((service, index) => (
          <div className="programming-card" key={index}>
            <div className="programming-icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <a href="#" className="programming-more-btn">More Information</a>
          </div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="programming-carousel">
        <button onClick={prevSlide} className="programming-btn">&#10094;</button>
        <div className="programming-card">
          <div className="programming-icon">{services[currentIndex].icon}</div>
          <h2>{services[currentIndex].title}</h2>
          <p>{services[currentIndex].description}</p>
          <a href="#" className="programming-more-btn">More Information</a>
        </div>
        <button onClick={nextSlide} className="programming-btn">&#10095;</button>
      </div>
    </div>
  );
}

export default Programming;
