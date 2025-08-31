import React, { useState, useEffect } from "react";

export default function Home() {
  const images = [
    "/images/banner-7.jpg",
    "/images/customer-support.webp",
    "/images/banner-4.jpg",
    "/images/It-support.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change image every 5 sec
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      {/* Banner Carousel */}
      <section className="banner">
        <img
          src={images[currentIndex]}
          alt="Carousel"
          className="banner-image"
        />

        {/* Prev Button */}
        <button onClick={handlePrev} className="carousel-btn prev-btn">
          ❮
        </button>

        {/* Next Button */}
        <button onClick={handleNext} className="carousel-btn next-btn">
          ❯
        </button>

        {/* Dots Indicator */}
        <div className="carousel-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <p className="service-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nam
          temporibus sequi...
        </p>
        <div className="cards-container">
          <div className="card" data-aos="fade-up">
            <img
              src="/images/It-support.jpg"
              alt="IT Support"
              className="service-img"
            />
            <h3>IT Support</h3>
            <p>We provide modern, reliable, and scalable IT solutions...</p>
          </div>
          <div className="card" data-aos="fade-up" data-aos-delay="100">
            <img
              src="/images/learning-development.jpg"
              alt="Learning"
              className="service-img"
            />
            <h3>Learning & Development</h3>
            <p>Empowering individuals through customized training programs...</p>
          </div>
        </div>
      </section>
    </>
  );
}
