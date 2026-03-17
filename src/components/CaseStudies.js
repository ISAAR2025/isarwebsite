import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/CaseStudies.css";

// Optional: replace with real images
import csStudent from "../assets/images/student carrer.webp";
import windmill from "../assets/images/windmill.png";
// import csIndustry from "../assets/images/case-industry.webp";
// import csThird from "../assets/images/case-third.webp";

function CaseCard({ img, title, challenge, solution, result, ctaHref = "#" }) {
  return (
    <div className="card border-0 shadow-sm h-100 cs-card">
      <div className="ratio ratio-16x9">
        {img ? (
          <img src={img} alt={title} className="img-cover rounded-top" />
        ) : (
          <div className="img-placeholder rounded-top">IMG</div>
        )}
      </div>
      <div className="card-body">
        <h5 className="card-title mb-2">{title}</h5>
        <ul className="list-unstyled small text-muted mb-3">
          <li className="mb-1"><span className="cs-label">Challenge:</span> {challenge}</li>
          <li className="mb-1"><span className="cs-label">Solution:</span> {solution}</li>
          <li className="mb-0"><span className="cs-label">Result:</span> {result}</li>
        </ul>
        <a href={ctaHref} className="btn btn-link p-0">Read more →</a>
      </div>
    </div>
  );
}

export default function CaseStudiesSection() {
  return (
    <section className="case-studies-section section-pastel" id="case-studies">
      <Container>
       
        <div className="text-center align-items-center flex-wrap flex-direction-column">
             <div className="sub-title-round">Case Studies & Projects</div>
            </div>
        <Row className="g-4">
          {/* Student success story */}
          <Col md={6} lg={6}>
            <CaseCard
               img={csStudent}
              title="Student Success: Drone Pilot Career Launch"
              challenge="Build flight skills and job‑ready confidence."
              solution="Hands‑on flight training, simulators, and DGCA‑aligned modules."
              result="Placed as junior pilot; now leading field missions."
              ctaHref="/case-studies/student-drone-pilot"
            />
          </Col>

          {/* Industry project */}
          <Col md={6} lg={6}>
            <CaseCard
               img={windmill}
              title="Industry: Wind Turbine Inspection Optimization"
              challenge="Reduce inspection time while improving defect detection."
              solution="Automated flight plans, high‑res imaging, and analytics workflow."
              result="Time cut by 40% with higher defect capture rate."
              ctaHref="/case-studies/wind-turbine-inspection"
            />
          </Col>

          
          {/* <Col md={6} lg={6}>
            <CaseCard
              // img={csThird}
              title="Rapid Prototyping: Automotive Bracket"
              challenge="Validate fit and function under a tight deadline."
              solution="DfAM optimization and resin prototype within 48 hours."
              result="Approved design and accelerated pilot build."
              ctaHref="/case-studies/automotive-bracket"
            />
          </Col> */}
        </Row>

        <div className="mt-4 text-center">
          <a href="/case-studies" className="btn btn-primary btn-lg">
            View All Case Studies
          </a>
        </div>
      </Container>
    </section>
  );
}
