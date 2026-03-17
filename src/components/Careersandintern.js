
import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/careersandintern.css";
import aboutImg from "../assets/images/home_careers.png";


function RevealOnScroll({ children, className = "fade-up", rootMargin = "0px 0px -10% 0px", once = true, style }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) io.unobserve(el);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { root: null, rootMargin, threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once, rootMargin]);
  return (
    <div ref={ref} className={`${className} ${visible ? "is-visible" : ""}`} style={style}>
      {children}
    </div>
  );
}

export default function CareersInternships() {
  return (
  
<div className="carrers-short section-pastel" id="about">
      <Container>
        <Row className="align-items-center flex-row-reverse">
          {/* RIGHT IMAGE */}
          <Col lg={6} className="d-flex justify-content-center align-items-center mb-4 mb-lg-0 ">
            <img src={aboutImg} alt="ISAR Labs and Training" className="img" />
          </Col>
          {/* LEFT TEXT */}
          <Col lg={6} className="about-text-col">
            <div className="sub-title-round">Careers</div>
            <h3 className="about-title mb-3 text-black">
              Why join ISAR?
            </h3>
            <ul className="features-list mb-3">
              <li>Work on cutting‑edge drone and 3D printing applications.</li>
            <li>Gain practical knowledge with live projects.</li>
            <li>Access to world‑class labs and learning resources.</li>
            <li>Opportunity to build a career in emerging tech industries.</li>
            </ul>
            <RevealOnScroll style={{ transitionDelay: "300ms" }}>
              <div className="mt-2">
                <a href="/about" className="btn btn-primary btn-lg">
                  Explore Careers
                </a>
              </div>
            </RevealOnScroll>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
