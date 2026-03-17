import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaBriefcase, FaUsers, FaAward, FaThumbsUp } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "../styles/Stats.css";

export default function HeroStats() {
  const stats = [
    {
      icon: <FaBriefcase />,
      number: 100,
      label: "TRAINING PROGRAMS",
      subLabel: "COMPLETED",
    },
    {
      icon: <FaUsers />,
      number: 30,
      label: "INDUSTRY PARTNERS",
      subLabel: "EMPLOYED",
    },
    {
      icon: <FaAward />,
      number: 12,
      label: "CERTIFICATION COURSES",
      subLabel: "",
    },
    {
      icon: <FaThumbsUp />,
      number: 250,
      label: "SUCCESS STORIES",
      subLabel: "",
    },
  ];

  // Setup intersection observer
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.3, // Trigger when 30% visible
  });

  return (
    <section className="hero-stats-section" ref={ref}>
      <div className="stats-overlay"></div>
      <Container className="hero-stats-content">
        <Row className="justify-content-start">
          <Col lg={8} md={10}>
            <div className="hero-text-wrapper">
              <div className="accent-line"></div>
              <h1 className="hero-title">
                Advancing Technology Through
                Aerospace, Robotics
                <br />
                & 3D Printing
              </h1>
            </div>
          </Col>
        </Row>

        <Row className="stats-row mt-5">
          {stats.map((stat, index) => (
            <Col lg={3} md={6} sm={6} xs={12} key={index} className="mb-4">
              <div className="stat-item">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-content">
                  <div className="stat-number">
                    {inView ? (
                      <CountUp end={stat.number} duration={10} suffix="+" />
                    ) : (
                      "0+"
                    )}
                  </div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-sublabel">{stat.subLabel}</div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
