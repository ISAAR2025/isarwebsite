import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import officeImg from "../assets/images/contact_img.webp"; 
import "../styles/ContactUs.css";
import Footer from "../components/Footer";


const offices = [
  {
    title: "ISAR  Office",
    address: "339/2 at Kurunji Nagar Valayapatti, Mohanur,Namakkal District, Tamil Nadu 637020",
    phone: "+91 6374720788",
    email: "admin@isaar.in"
  }
];


export default function ContactUs() {
  return (
    <main>
      
      <section className="contact-hero-section  breadcrumb-bg ">
        <Container>
          <div className="contact-hero-content text-center">
            <h1 className="contact-title">Contact Us</h1>
            <p className="para">Get in touch with us today — we're here to listen, assist, and collaborate to make your vision a reality.</p>
          </div>
        </Container>
      </section>

      
      <section className="contact-address-section">
        <Container>
          <Row className="g-5 align-items-center">
            {/* Left: image */}
            <Col lg={5} sm={12}>
              <div className="contact-img-wrap">
                <img src={officeImg} alt="Office" className="img-fluid rounded-4 shadow" />
              </div>
            </Col>
            {/* Right: address/cards */}
            <Col lg={7} sm={12}>
              <div className="office-info-block ps-lg-4">
                <h2 className="office-addr-title mb-4">Our Office Address</h2>
                {offices.map((ofc, i) => (
                  <div key={i} className="mb-4">
                    <h4 className="office-name mb-2">{ofc.title}</h4>
                    <p className="mb-1">339/2 at Kurunji Nagar Valayapatti, <br/>Mohanur,Namakkal District, Tamil Nadu 637020</p>
                    <div className="mb-1">
                      <span className="office-icon">☎</span>{" "}
                      <a className="office-link" href={`tel:${ofc.phone}`}>{ofc.phone}</a>
                    </div>
                    <div>
                      <span className="office-icon">✉</span>{" "}
                      <a className="office-link" href={`mailto:${ofc.email}`}>{ofc.email}</a>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section 3: Full Width Map */}
      <section className="contact-map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.7647785791364!2d78.2306213!3d11.1308884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babcb9ccc5f2cd5%3A0x2f9085eec7b057b5!2sINDIAN%20SCIENTIFIC%20AEROSPACE%20AND%20ROBOTICS!5e0!3m2!1sen!2sin!4v1748328076032!5m2!1sen!2sin"
          title="Office Location"
          width="100%"
          height="360"
          frameBorder="0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: 0 }}
        />
      </section>
      <div>
      <Footer/>
      </div>
    </main>
  );
}
