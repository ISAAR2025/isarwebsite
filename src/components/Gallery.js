import React from "react";
import { Container } from "react-bootstrap";
import "../styles/GalleryShort.css"; // Rename your CSS file accordingly

import g1 from "../assets/images/IMG_0033.webp";
import g2 from "../assets/images/g12.webp";
import g3 from "../assets/images/g11.webp";
import g4 from "../assets/images/institute5.jpeg";
import g5 from "../assets/images/institute4.jpeg";
import g6 from "../assets/images/institute7.jpeg";
//import g7 from "../assets/images/institute9.jpeg";
import g8 from "../assets/images/institute10.jpeg";
import g9 from "../assets/images/3d printring8.jpeg";


const mediaItems = [
  { type: "image", src: g1, alt: "Training session 1" },
  { type: "image", src: g9, alt: "3d parts printing" },
  { type: "image", src: g2, alt: "Flight practice" },
  { type: "image", src: g3, alt: "Lab workspace" },
  { type: "image", src: g4, alt: "Training session 1" },
  { type: "image", src: g5, alt: "Flight practice" },
  { type: "image", src: g6, alt: "Lab workspace" },
  { type: "image", src: g8, alt: "Flight practice" },
  
  
];

function MasonryItem({ item }) {
  return (
    <div className="gallerymedia-fixed-item">
      <div className="gallerymedia-media-card">
        <img className="gallerymedia-media-content" src={item.src} alt={item.alt || "Gallery item"} />
      </div>
    </div>
  );
}

export default function GalleryMedia() {
  return (
    <div className="gallerymedia-media section-pastel" id="gallery">
      <Container>
     <div className="text-center align-items-center flex-wrap flex-direction-column">

                          <div className="sub-title-round">Gallery / Media</div>
                          <h3 className="main-title-dark">Training, labs, and printed partss</h3>
                            
                          
                          <p className="pararaph-small">
                            A visual look at hands‑on sessions, lab activities, and real‑world outcomes.
                          </p>
            </div>
        {/* Responsive, aligned grid gallery */}
        <div className="gallerymedia-fixed-row">
          {mediaItems.map((item, i) => (
            <MasonryItem key={i} item={item} />
          ))}
        </div>

        <div className="gallerymedia-mt-4 d-flex flex-wrap gap-2 justify-content-center">
          <a href="/gallery" className="btn btn-primary btn-lg">
            View Full Gallery
          </a>
          
        </div>
      </Container>
    </div>
  );
}