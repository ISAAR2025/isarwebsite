import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import "../styles/Gallery.css";


import quadwithlauncher from "../assets/images/quadwithlauncher.webp";
import Footer from "../components/Footer";
import institute from "../assets/images/institute1.jpg";
import institute2 from "../assets/images/institute2.jpg";
import institute3 from "../assets/images/instute.webp";
import institute4 from "../assets/images/institute4.jpeg";
import institute5 from "../assets/images/institute5.jpeg";
import institute6 from "../assets/images/instute6.jpeg";
import institute7 from "../assets/images/institute7.jpeg";
import institute8 from "../assets/images/institute8.jpeg";
import institute9 from "../assets/images/institute9.jpeg";
import institute10  from "../assets/images/institute10.jpeg";




import printring1 from "../assets/images/3dpritring1.jpg";
import printring2 from "../assets/images/3dprintring2.jpg";
import printring3 from "../assets/images/3dprintring3.jpg";
import printing4 from "../assets/images/3dprinting4.jpg";
import printing5 from "../assets/images/printring5.jpg";
import printing6 from "../assets/images/printring6.jpg";
import printing7 from "../assets/images/printring7.jpg";
import printing8 from "../assets/images/3d printring8.jpeg";
import printing9 from "../assets/images/3dprintring9.jpeg";
import p1s from "../assets/images/imagehealth.webp";
import elegoocentauri from "../assets/images/imageauto.webp";


import logisticQuadcopter from "../assets/images/logisticQuadcopter.jpg";
import tripropeller from "../assets/images/Tri-propeller VTOL.jpg";
import lightingdrone from "../assets/images/lightingdrone.jpg";
import cansiter from "../assets/images/cansiter.jpg";
import interceptor from "../assets/images/interceptor.jpg";
const gallerySections = [
  {
    title: "Institute",
    description: "Training sessions, labs, and workshops in action.",
    mediaItems: [
      
      { type: "image", src: institute, alt: "Lecture on UAV technologies" },
      { type: "image", src: institute2, alt: "Hands-on lab practice with drones" },
      { type: "image", src: institute3, alt: "Workshop: Assembling drone components" },
      { type: "image", src: institute4, alt: "Lecture on UAV technologies" },
      { type: "image", src: institute5, alt: "Hands-on lab practice with drones" },
      { type: "image", src: institute6, alt: "Workshop: Assembling drone components" },
      { type: "image", src: institute7, alt: "Lecture on UAV technologies" },
      { type: "image", src: institute8, alt: "Hands-on lab practice with drones" },
      { type: "image", src: institute9, alt: "Workshop: Assembling drone components" },
      { type: "image", src: institute10, alt: "Workshop: Assembling drone components" },
   
   
    ],
  },
  {
    title: "Designs",
    description: "CAD designs, prototypes, and product development.",
    mediaItems: [
      { type: "image", src: logisticQuadcopter, alt: "3D CAD model of drone frame" },
      { type: "image", src: cansiter, alt: "Simulation render of UAV in flight" },
      { type: "image", src: lightingdrone, alt: "Workflow: 3D design to prototype" },
      { type: "image", src: interceptor, alt: "Prototype parts ready for assembly" },
      { type: "image", src: tripropeller, alt: "Mechanical assembly of UAV components" },
      { type: "image", src: quadwithlauncher, alt: "Mechanical assembly of UAV components" },
    ],
  },
  {
    title: "3D Printers / Services",
    description: "Our in-house 3D printing services and finished parts.",
    mediaItems: [
      { type: "image", src: printring1, alt: "3D printer operating in the lab" },
      { type: "image", src: printring2, alt: "Printed drone frame ready for assembly" },
      { type: "image", src: printring3, alt: "Resin printer producing small components" },
      { type: "image", src: printing4, alt: "Various printed parts on inspection table" },
      { type: "image", src: printing5, alt: "Various printed parts on inspection table" },
      { type: "image", src: printing6, alt: "Various printed parts on inspection table" },
      { type: "image", src: printing7, alt: "Various printed parts on inspection table" },
      { type: "image", src: elegoocentauri, alt: "Various printed parts on inspection table" },
      { type: "image", src: p1s, alt: "Various printed parts on inspection table" },
      { type: "image", src: printing8, alt: "Various printed parts on inspection table" },
      { type: "image", src: printing9, alt: "Various printed parts on inspection table" },
      
    ],
  },
];

// Framer Motion Variants
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const fadeZoom = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const rotateScale = {
  hidden: { opacity: 0, rotate: -10, scale: 0.8 },
  visible: { opacity: 1, rotate: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};
function getRandomVariant() {
  const variants = [fadeZoom, slideLeft, slideRight, rotateScale];
  return variants[Math.floor(Math.random() * variants.length)];
}

function MasonryItem({ item, onImageClick }) {
  const variant = getRandomVariant();
  return (
    <Col xs={12} sm={6} md={4} lg={4} className="mb-4 masonry-item">
      <motion.div
        className="media-card position-relative overflow-hidden"
        variants={variant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{ scale: 1.08, rotate: 1 }}
      >
        {item.type === "video" ? (
          <video
            className="media-content"
            src={item.src}
            poster={item.poster}
            muted
            loop
            controls
            playsInline
          />
        ) : (
          <img
            className="media-content"
            src={item.src}
            alt={item.alt}
            loading="lazy"
            onClick={() => onImageClick(item.src, item.alt)}
            style={{ cursor: "zoom-in" }}
          />
        )}
        {item.alt && (
          <div className="media-caption">
            <p>{item.alt}</p>
          </div>
        )}
      </motion.div>
    </Col>
  );
}

export default function GalleryMedia() {
  // State to track active tab remains unchanged
  const [activeTab, setActiveTab] = useState("3D Printers / Services");

  // Modal image state changes to include index for navigating
  const [showModal, setShowModal] = useState(false);
  const [modalImgIndex, setModalImgIndex] = useState(0);

  // Current active section media Items derivation for easier access
  const currentSection = gallerySections.find((s) => s.title === activeTab);
  const mediaItems = currentSection ? currentSection.mediaItems : [];

  // Open modal sets index rather than src directly
  function handleImageClick(src, alt) {
    const index = mediaItems.findIndex((item) => item.src === src);
    if (index >= 0) {
      setModalImgIndex(index);
      setShowModal(true);
    }
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  // Navigation handlers
  function showPrevImage() {
    setModalImgIndex((prev) => (prev === 0 ? mediaItems.length - 1 : prev - 1));
  }

  function showNextImage() {
    setModalImgIndex((prev) => (prev === mediaItems.length - 1 ? 0 : prev + 1));
  }

  return (

 <main>
 <section className="gallery-hero-section  breadcrumb-bg ">
              <Container>
                <div className="service-hero-content text-center">
                  <h1 className="contact-title">Gallery</h1>
                  <p>Explore our curated collection showcasing innovation, creativity, and cutting-edge technology</p>
                
               
                </div>
              </Container>
            </section>
    
    <section className="gallery-media section-pastel" id="gallery">
      <Container>
        {/* Header & Tabs remain unchanged */}

        <Row className="mb-5 justify-content-center">
          {gallerySections.map((section) => (
            <Col key={section.title} xs="auto" className="mb-2">
<button
  className={`tab-btn ${activeTab === section.title ? 'active' : ''}`}
  onClick={() => setActiveTab(section.title)}
>
                {section.title}
              </button>
            </Col>
          ))}
        </Row>

        {/* Media Grid */}
        {gallerySections
          .filter((section) => section.title === activeTab)
          .map((section) => (
            <motion.div
              key={section.title}
              className="gallery-section mb-5"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="h4 fw-semibold mb-3 text-center text-dark">{section.title}</h3>
              <p className="text-muted text-center mb-4">{section.description}</p>
              <Row>
                {section.mediaItems.map((item, i) => (
                  <MasonryItem key={i} item={item} onImageClick={handleImageClick} />
                ))}
              </Row>
            </motion.div>
          ))}

        {/* Fullscreen Modal with Navigation */}
        <Modal
          fullscreen
          show={showModal}
          onHide={handleCloseModal}
          centered
          contentClassName="bg-dark position-relative"
        >
          <Button
            variant="light"
            onClick={handleCloseModal}
            style={{
              position: "absolute",
              top: 16,
              right: 22,
              zIndex: 1001,
              fontSize: "2.2rem",
              border: "none",
              background: "transparent",
              color: "#fff",
            }}
            aria-label="Close"
          >
            &times;
          </Button>

          {/* Left Slide Button */}
          <Button
  variant="light"
  onClick={showPrevImage}
  style={{
    position: "fixed",      // keeps button fixed
    top: "50%",
    left: 16,
    transform: "translateY(-50%)",
    zIndex: 1055,
    borderRadius: "50%",
    width: "3rem",
    height: "3rem",
    fontSize: "1.5rem",
    background: "rgba(0,0,0,0.3)",
    color: "#fff",
    border: "none",
    display: "flex",        // center symbol
    alignItems: "center",   // vertical centering
    justifyContent: "center", // horizontal centering
    padding: 0,
  }}
  aria-label="Previous image"
>
  &#10094;
</Button>

<Button
  variant="light"
  onClick={showNextImage}
  style={{
    position: "fixed",
    top: "50%",
    right: 16,
    transform: "translateY(-50%)",
    zIndex: 1055,
    borderRadius: "50%",
    width: "3rem",
    height: "3rem",
    fontSize: "1.5rem",
    background: "rgba(0,0,0,0.3)",
    color: "#fff",
    border: "none",
    display: "flex",        
    alignItems: "center",   
    justifyContent: "center",
    padding: 0,
  }}
  aria-label="Next image"
>
  &#10095;
</Button>


          <Modal.Body
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ minHeight: "90vh", padding: 0, position: "relative" }}
          >
            <div className="modal-image-wrapper" style={{ position: "relative" }}>
              <img
                src={mediaItems[modalImgIndex]?.src}
                alt={mediaItems[modalImgIndex]?.alt || ""}
                style={{
                  maxHeight: "85vh",
                  maxWidth: "90vw",
                  objectFit: "contain",
                  borderRadius: "15px",
                  background: "#1a1a1a",
                }}
                className="modal-image"
              />
              {/* Caption for desktop on hover */}
              {mediaItems[modalImgIndex]?.alt && (
                <p className="modal-image-caption">{mediaItems[modalImgIndex].alt}</p>
              )}
            </div>
          </Modal.Body>
        </Modal>
      </Container>
      <div>
        <Footer/>
      </div>
    </section>
    </main>
  );
}