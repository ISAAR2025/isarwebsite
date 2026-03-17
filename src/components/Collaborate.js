import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import headingImage from '../assets/images/partner with us.png';
import "../styles/Collaborations.css";

export default function Collaborations() {
  return (
    <div className="blue-background-with-particals" id="collaborations">
      <Container>
        
<Row className="align-items-start g-4">
  <Col lg={12}>
    <Row className="g-3">

       <Col lg={5} md={5} xs={12}>
         <div className="h-100 mb-0" style={{ marginTop: '50px' }}>
          <div className="ratio ratio-4x3 rounded-3 overflow-hidden shadow-sm">
                <img src={headingImage} alt="Heading" className="collab-img " />
           </div>


    </div>
      </Col>

      <Col lg={7} md={7} xs={12}>
        <div className="p-3 p-lg-4 h-100 mb-0">
          <div className="sub-title-round">Partner with us</div>
          <h3 className="main-title">Join hands with us to drive innovation through joint R&D, customized training, and corporate upskilling.</h3>
          <ul className="feature-list">
            <li className="mb-1">Joint research and development projects.</li>
            <li className="mb-1">Customized training and certification programs.</li>
            <li className="mb-1">Industry‑academia knowledge sharing.</li>
            <li className="mb-0">Corporate upskilling workshops.</li>
          </ul>
        </div>
      </Col>
     
    </Row>
    {/* Place your lower part buttons and text here below the nested Row */}
   
 
  </Col>
</Row>

      </Container>
    </div>
  );
}
