import React from "react";
import { Container } from "react-bootstrap";
import "../styles/testimonialsPage.css";

const testimonials = [
  {
    quote: "The Drone Pilot Training at ISAR was more than just a course – it was a career-launching experience. The practical flying sessions and simulation labs prepared me to take on real-world projects with confidence.",
    author: "Rahul Verma",
    title: "Certified Drone Pilot",
  },
  {
    quote: "I enrolled in the Advanced 3D Printing Program, and it completely changed how I approach design. ISAR’s mentorship and lab access helped me transform my ideas into working prototypes.",
    author: "Sneha Nair",
    title: "Mechanical Engineering Student",
  },
  {
    quote: "ISAR’s Professional Certificate in UAV Engineering gave me both theoretical depth and hands-on expertise. Today, I am working with a drone manufacturing firm, thanks to their placement support.",
    author: "Bharat",
    title: "UAV Engineer",
  },
  {
    quote: "Our company collaborated with ISAR for rapid prototyping services. Their 3D printing team delivered precision and speed that helped us accelerate our product development cycle.",
    author: "Vikram Malhotra",
    title: "Startup Founder",
  },
  {
    quote: "The internship program at ISAR gave me practical exposure in drone research projects. I learned to use advanced tools and gained industry-relevant skills that boosted my career prospects.",
    author: "Priya Sharma",
    title: "ISAR Intern",
  },
];

function TestimonialCard({ quote, author, title }) {
  return (
    <div className="testimonial-card colorful-card">
      <p className="testimonial-text">“{quote}”</p>
      <div className="testimonial-author">
        <div className="author-name">{author}</div>
        <div className="author-title">{title}</div>
      </div>
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <div className="testimonials-page">
      <section className="testimonials-hero">
        <Container>
          <div className="overline">TESTIMONIALS</div>
          <h1>What learners and partners say</h1>
          <div className="lead">
            Read stories from ISAR trainees, students, engineers, and partners about their hands-on training and success.
          </div>
        </Container>
      </section>

      <section className="testimonials-bg-section">
        <Container>
          <div className="card-flex-grid">
            {testimonials.map((t, idx) => (
              <TestimonialCard {...t} key={idx} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}