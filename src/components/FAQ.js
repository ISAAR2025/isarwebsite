import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import "../styles/FAQ.css";

const faqs = [
  {
    q: "What types of courses does ISAR offer?",
    a: "We offer professional, advanced, and specialized certification programs in Drone Technology, UAV Engineering, and 3D Printing applications.",
  },
  {
    q: "Are the courses practical or only theory-based?",
    a: "All our programs are designed with a strong focus on hands-on training, live projects, and simulation labs, along with theoretical learning.",
  },
  {
    q: "Can beginners join ISAR courses?",
    a: "Yes, we have foundational and beginner-friendly courses for students, along with advanced modules for professionals.",
  },
  {
    q: "Do the courses include certifications?",
    a: "Yes, every course comes with an industry-recognized certificate that strengthens your career profile.",
  },
  {
    q: "What kind of 3D printing services does ISAR provide?",
    a: "We offer end-to-end 3D printing solutions including prototyping, product development, design validation, and small-batch production.",
  },
  {
    q: "How can industries collaborate with ISAR?",
    a: "Organizations can partner with us for customized training programs, corporate workshops, and R&D projects in drones and 3D printing.",
  },
  {
    q: "Does ISAR provide internship opportunities?",
    a: "Yes, our internship programs are open to students and graduates, offering real-world exposure to drone and 3D printing applications.",
  },
  {
    q: "Is placement support available after completing a course?",
    a: "Yes, ISAR provides career guidance and placement assistance with industry partners and startups.",
  },
  {
    q: "Can companies outsource projects to ISAR?",
    a: "Yes, many startups and enterprises use ISAR’s services for drone-based surveys, aerial mapping, and 3D printed prototyping.",
  },
  {
    q: "How can I apply for a course or service?",
    a: "Apply directly on the website through the application form, or request a brochure for more details.",
  },
];

export default function FAQSection() {
  return (
    <div className="faq-section section-pastel" id="faq">
      <Container>
        <Row className="justify-content-center">
          <Col xl={10}>
   

            <div className="text-center align-items-center flex-wrap flex-direction-column">

                          <div className="sub-title-round">FAQ</div>
                          <h3 className="main-title-dark">Answers to common queries</h3>
                            
                          
                          <p className="pararaph-small">
                            Explore details about programs, services, collaborations, internships, and placements.
                          </p>
            </div>
            <div>
              <Accordion alwaysOpen>
                {faqs.map((item, idx) => (
                  <Accordion.Item eventKey={String(idx)} key={idx} className="faq-item">
                    <Accordion.Header>
                      <span className="faq-q">{item.q}</span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-0">{item.a}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>

           
          </Col>
        </Row>
      </Container>
    </div>
  );
}
