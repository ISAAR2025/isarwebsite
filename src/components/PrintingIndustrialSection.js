import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/PrintingIndustrialSection.css";

// Optional: replace with real images/icons
import imgProto from "../assets/images/rapid.webp";
 import imgCad from "../assets/images/cad.webp";
import imgMfg from "../assets/images/custom.webp";

function ServiceCard({ img, title, bullets }) {
  return (
    <div className="card border-0 shadow-sm h-100 pi-card">
      <div className="ratio ratio-16x9">
        {img ? (
          <img src={img} alt={title} className="img-cover rounded-top" />
        ) : (
          <div className="img-placeholder rounded-top">IMG</div>
        )}
      </div>
      <div className="card-body">
        <h5 className="card-title mb-2">{title}</h5>
        <ul className="list-unstyled small text-muted mb-0">
          {bullets.map((b, i) => (
            <li key={i}>• {b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function PrintingIndustrialSection() {
  return (
    <div className="printing-industrial section-pastel" id="printing-industrial">
      <Container>
        
         <div className="text-center align-items-center flex-wrap flex-direction-column">

                          <div className="sub-title-round">3D Printing & Industrial Solutions</div>
                          <h3 className="main-title-dark">Capabilities for aerospace, robotics, and industry</h3>
                            
                          
                          <p className="pararaph-small">
                            From rapid prototypes to production‑ready parts, services include design optimization, validation,<br/> and small‑batch manufacturing for teams in aerospace, robotics, and industrial domains.
                          </p>
            </div>

        <Row className="g-4">
          <Col md={6} lg={4}>
            <ServiceCard
               img={imgProto}
              title="Rapid Prototyping"
              bullets={[
                "Turnaround: typically 24–72 hours",
                "Materials: PLA, PETG, ABS, ASA, Nylon, Resin",
                "Finishes: sanding, priming, painting on request",
              ]}
            />
          </Col>
          <Col md={6} lg={4}>
            <ServiceCard
               img={imgCad}
              title="CAD & Design Optimization"
              bullets={[
                "DfAM tuning and lightweighting",
                "Supports, orientation, tolerance planning",
                "File prep and manufacturability reviews",
              ]}
            />
          </Col>
          <Col md={6} lg={4}>
            <ServiceCard
               img={imgMfg}
              title="Custom Component Manufacturing"
              bullets={[
                "Short runs, jigs/fixtures, spares",
                "Fit/functional checks and QA",
                "Dimensional reports on request",
              ]}
            />
          </Col>
        </Row>

        <div className="mt-4 d-flex gap-2 flex-wrap justify-content-center">
          <a href="#contact" className="btn btn-primary btn-lg">Request a Quote</a>
          
        </div>
      </Container>
    </div>
  );
}

