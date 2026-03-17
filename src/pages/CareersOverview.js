import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import joinBanner from '../assets/images/join.webp';
import Footer from "../components/Footer";
import "../styles/CareersOverview.css";
const jobsSummary = [
  {
    id: "uav-engineer",
    title: "UAV Engineer",
    shortDescription: "Design and develop UAV systems, including airframes, propulsion, avionics, and payloads."
  },
  {
    id: "avionics-engineer",
    title: "Avionics Engineer",
    shortDescription: "Develop and integrate avionics systems for UAVs, ensuring reliable communication, navigation, and control."
  },
  {
    id: "mechanical-design-engineer",
    title: "Mechanical Design Engineer",
    shortDescription: "Design and optimize UAV mechanical structures and components for strength, efficiency, and reliability."
  },
  {
    id: "embedded-systems-developer",
    title: "Embedded Systems Developer",
    shortDescription: "Develop embedded firmware, sensor integration, and communication protocols for UAV control systems."
  },
  {
    id: "software-developer",
    title: "Software Developer",
    shortDescription: "Create software solutions for UAV telemetry, mission control, and data processing platforms."
  },
  {
    id: "cad-engineer",
    title: "CAD Engineer",
    shortDescription: "Design UAV components and assemblies with CAD software for manufacturing and prototyping."
  },
  {
    id: "aerodynamics-engineer",
    title: "Aerodynamics Engineer",
    shortDescription: "Analyze and optimize UAV aerodynamic performance with CFD simulations and wind tunnel testing."
  },
  {
    id: "manufacturing-engineer",
    title: "Manufacturing Engineer",
    shortDescription: "Plan and optimize UAV manufacturing and assembly processes to ensure quality and efficiency."
  },
  {
    id: "compliance-certification-engineer",
    title: "Compliance & Certification Engineer",
    shortDescription: "Manage UAV regulatory compliance, certification documentation, and liaison with authorities."
  },
  {
    id: "quality-control-engineer",
    title: "Quality Control (QC) Engineer",
    shortDescription: "Inspect, test, and validate UAV components and support quality assurance protocols."
  },
  {
    id: "internship-aerospace-robotics",
    title: "Internship – Aerospace & Robotics",
    shortDescription: "Assist in R&D, UAV production, and management tasks in aerospace and robotics projects."
  }
];

const particleOptions = {
  fullScreen: { enable: false, zIndex: -1 },
  particles: {
    number: { value: 50, density: { enable: true, area: 900 } },
    color: { value: "#0d6efd" },
    shape: { type: "circle" },
    opacity: { value: 0.1 },
    size: { value: 3, random: { enable: true, minimumValue: 1 } },
    move: { enable: true, speed: 0.6, direction: "none", outModes: "out" },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#0d6efd",
      opacity: 0.17,
      width: 1
    }
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "grab" },
      onClick: { enable: false }
    },
    modes: {
      grab: { distance: 140, lineLinked: { opacity: 0.20 } }
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, type: "spring", stiffness: 80 }
  })
};

const CareersOverview = () => (
  <>
    <Particles
      options={particleOptions}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />

    {/* Banner */}
    <div
      style={{
        width: "100%",
        height: "270px",
        position: "relative",
        overflow: "hidden",
        marginBottom: "2rem",
        boxShadow: "0 6px 30px rgba(13,110,253,0.11)",
        background: "linear-gradient(120deg, #0d6efd 60%, #1590e9 100%)",
      }}
    >
      <img
        src={joinBanner}
        alt="Join Our Team"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.93,
          filter: "brightness(0.65)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
          textAlign: "center",
          padding: "0 1rem",
        }}
      >
        <h1 style={{
          color:"rgba(233, 241, 242, 1)",
          fontWeight: 700,
          fontSize: "3rem",
          letterSpacing: "1px",
          marginBottom: "1rem",
          textShadow: "0 3px 16px rgba(72, 63, 63, 1)",
        }}>Join Our Team</h1>
        <p >
          At ISAR, we’re building the future of drones, robotics, and aerospace. Explore exciting opportunities below!
        </p>
      </div>
    </div>

    <div style={{
      background: "linear-gradient(120deg, #f8fbff 60%, #eaf4fd 100%)",
      minHeight: "100vh",
      paddingTop: "2rem",
      paddingBottom: "3rem",
    }}>
      <Container
        style={{
          backgroundColor: "white",
          padding: "2.5rem 2rem",
          borderRadius: "16px",
          boxShadow: "0 8px 36px rgba(13,110,253,0.07)",
          maxWidth: "1100px"
        }}
      >
        <h2 className="text-center mb-4 fw-bold text-primary" style={{fontSize:'2rem',letterSpacing:'1px'}}>Current Openings</h2>
        <Row className="g-4">
          {jobsSummary.map((job, index) => (
            <Col md={6} lg={4} key={job.id}>
              <motion.div
                custom={index}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                style={{ height: "100%" }}
              >
                <Card className="h-100 career-card">
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="text-primary fw-bold" style={{fontSize:'1.18rem'}}>{job.title}</Card.Title>
                    <Card.Text className="flex-grow-1" style={{color: '#114181'}}>{job.shortDescription}</Card.Text>
                    <div className="mt-auto">
                      <Link to={`/careers/${job.id}`} className="btn btn-outline-primary w-100" style={{
                        borderRadius: "24px",
                        fontWeight: '500',
                        letterSpacing: '0.5px'
                      }}>
                        View Details
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer/>
    </div>
  </>
);

export default CareersOverview;
