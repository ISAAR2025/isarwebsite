import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/ContactForm.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiryFor: "Institute",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch(
       `${process.env.REACT_APP_API_BASE_URL}/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || "Failed to send request");
      }

      setSuccess("Message sent successfully! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        enquiryFor: "Institute",
        message: "",
      });
    } catch (err) {
      setError(err.message || "Failed to send message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-grid">
          {/* Left side - Contact Form */}
          <div className="form-content">
            <p className="section-label">CONTACT ME</p>
            <h2 className="form-title">Get in touch</h2>
            <div className="title-underline"></div>

            <Form className="contact-form" onSubmit={handleSubmit}>
              <div className="row g-3">
                <Col md={6}>
                  <Form.Label>Name *</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Your name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col md={6}>
                  <Form.Label>Phone *</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col xs={12}>
                  <Form.Label>E-mail *</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col xs={12}>
                  <Form.Label>Enquiry For *</Form.Label>
                  <Form.Select
                    name="enquiryFor"
                    value={formData.enquiryFor}
                    onChange={handleChange}
                    required
                  >
                    <option value="Institute">Institute</option>
                    <option value="Services">Services</option>
                    <option value="Partnership">Partnership</option>
                  </Form.Select>
                </Col>
                <Col xs={12}>
                  <Form.Label>Your Message *</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Col>

                {error && (
                  <Col xs={12}>
                    <div className="alert alert-danger">{error}</div>
                  </Col>
                )}
                {success && (
                  <Col xs={12}>
                    <div className="alert alert-success">{success}</div>
                  </Col>
                )}

                <Col xs={12}>
                  <Button
                    className="btn-submit"
                    type="submit"
                    disabled={submitting}
                  >
                    {submitting ? "Sending..." : "Send"}
                  </Button>
                </Col>
              </div>
            </Form>
          </div>

          {/* Right side - Contact Info */}
          <div className="contact-info-content">
            <p className="section-label">CONTACTS</p>
            <h2 className="info-title">Contact info</h2>
            <div className="title-underline"></div>

            <div className="contact-info-items">
              {/* Phone */}
              <div className="contact-info-item">
                <div className="contact-icons">
                  <FaPhoneAlt />
                </div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <p>+91 6374720788</p>
                </div>
              </div>

              {/* Email */}
              <div className="contact-info-item">
                <div className="contact-icons">
                  <FaEnvelope />
                </div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>admin@isaar.in</p>
                </div>
              </div>

              {/* Address */}
              <div className="contact-info-item">
                <div className="contact-icons">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-details">
                  <h4>Address</h4>
                  <p>
                    339/2 at Kurunji Nagar Valayapatti, Mohanur,
                    <br />
                    Namakkal District, Tamil Nadu 637020
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
