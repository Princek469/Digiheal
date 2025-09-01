import React, { useState } from "react";
import { FaDatabase, FaCloud, FaProjectDiagram, FaCogs, FaLink, FaServer } from "react-icons/fa";
import "../OurServices/style/IntegrationTech.css";

function IntegrationTech() {
  const services = [
    { 
      title: "SAP PI/PO", 
      description: "Enterprise integration for SAP systems.", 
      icon: <FaDatabase />,
      link: "/sap-pipo"
    },
    { 
      title: "SAP CPI", 
      description: "Cloud-based SAP integration solutions.", 
      icon: <FaCloud />,
      link: "/sap-cpi"
    },
    { 
      title: "IBM Transformation Extender", 
      description: "Data transformation and mapping tools.", 
      icon: <FaProjectDiagram />,
      link: "/ibm-itx"
    },
    { 
      title: "IBM Sterling Integrator", 
      description: "Integration with IBM middleware.", 
      icon: <FaCogs />,
      link: "/ibm-sterlink"
    },
    { 
      title: "Mulesoft", 
      description: "Connect applications, data, and devices via APIs.", 
      icon: <FaLink />,
      link: "/mulesoft"
    },
    { 
      title: "Dell Boomi", 
      description: "Cloud integration platform for workflow automation.", 
      icon: <FaCloud />,
      link: "/dell-boomi"
    },
    { 
      title: "Salesforce CRM", 
      description: "Customer relationship and process automation.", 
      icon: <FaServer />,
      link: "/salesforce-crm"
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
    <div className="integration-container">
      <h1 className="integration-title">Integration Technologies</h1>
      <p className="integration-subtitle">Get hands-on training on enterprise and cloud integration tools.</p>

      {/* Desktop Grid */}
      <div className="integration-grid">
        {services.map((service, index) => (
          <div key={index} className="integration-card">
            <div className="integration-icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <a href="#" className="integration-more-btn">More Information</a>
          </div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="integration-carousel">
        <button onClick={prevSlide} className="integration-btn">&#10094;</button>
        <div className="integration-card">
          <div className="integration-icon">{services[currentIndex].icon}</div>
          <h2>{services[currentIndex].title}</h2>
          <p>{services[currentIndex].description}</p>
          <a href="#" className="integration-more-btn">More Information</a>
        </div>
        <button onClick={nextSlide} className="integration-btn">&#10095;</button>
      </div>
    </div>
  );
}

export default IntegrationTech;
