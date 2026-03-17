import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "../styles/hero.css";

import bgImage1 from "../assets/images/institute1.jpg";
import bgImage2 from "../assets/images/3d3.webp";
import bgImage3 from "../assets/images/bgimage3.jpeg";
import bgImage4 from "../assets/images/bgimage4.jpeg";
import bgImage5 from "../assets/images/imagebg5.png";

function Hero() {
  const slides = [
    {
      title: "Empowering Innovation Through Education & Technology",
      text: "Learn. Create. Build the future with ISAAR — your destination for skill-based learning, 3D printing expertise, and industry-ready training.",
      image: bgImage1,
    },
    {
      title: "Where Learning Meets 3D Innovation",
      text: "From cutting-edge courses to high-precision 3D printing solutions — ISAAR bridges creativity and technology for the next generation of innovators.",
      image: bgImage2,
    },
    {
      title: "Shaping Future Engineers & Innovators",
      text: "Join ISAAR to gain hands-on experience with advanced tools, real-world projects, and professional mentorship in 3D printing and emerging technologies.",
      image: bgImage3,
    },
    {
      title: "Your Trusted Partner in 3D Printing & Design",
      text: "Bring your ideas to life with our state-of-the-art 3D printing, design, and prototyping services — built for students, startups, and industry professionals.",
      image: bgImage4,
    },
    {
      title: "Learn. Design. Print. Innovate.",
      text: "ISAAR helps you master new-age skills and turn your concepts into reality through expert-led training and advanced 3D printing technology.",
      image: bgImage5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const currentSlide = slides[currentIndex];

  return (
    <section
      className="modern-hero"
      style={{ backgroundImage: `url(${currentSlide.image})` }}
    >
      <div className="hero-bg-overlay" />

      <div className="hero-content-wrapper">
        {/* ✅ PREMIUM STORE EYEBROW */}
        <div className="hero-eyebrow">
          <a
            href="https://store.isaar.in"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-store-link"
          >
            Visit our Store →
          </a>
        </div>

        <h1 className="hero-headline">{currentSlide.title}</h1>
        <p className="hero-tagline">{currentSlide.text}</p>

        <div className="hero-actions">
          <Button href="/Institute" variant="primary" className="rounded-pill cta">
            Explore Our Institute
          </Button>

          <Button
            href="/Services"
            variant="outline-light"
            className="rounded-pill cta"
          >
            View Our Services
          </Button>
        </div>

        <div className="visual-indicator">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === currentIndex ? "active" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
