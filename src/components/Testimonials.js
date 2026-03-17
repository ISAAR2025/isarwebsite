// TestimonialsPage.jsx
import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import "../styles/Testimonials.css";

const testimonialsPrimary = [
  {
    quote:
      "The hands-on training at ISAR gave me the confidence to pursue a career in drone piloting. The instructors were supportive and knowledgeable.",
    author: "Ravi Kumar",
    title: "Drone Pilot Trainee",
  },
  {
    quote:
      "Collaborating with ISAR on 3D printing projects helped our startup bring products to market faster and smarter.",
    author: "Ananya Mehta",
    title: "Entrepreneur",
  },
  {
    quote:
      "The internship program at ISAR was a turning point in my career. I gained both technical expertise and industry exposure.",
    author: "Shivam Patel",
    title: "Intern",
  },
];

function TestimonialCard({ quote, author, title }) {
  return (
    <div className="testimonial-card">
      <div>
        <p className="testimonial-text mb-3">{quote}</p>

        <div className="testimonial-author">
          <div className="author-name">{author}</div>
          <div className="author-title text-muted small">{title}</div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsPage() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const AUTO_MS = 10000; // 10 seconds
  const N = testimonialsPrimary.length;

  useEffect(() => {
    startTimer();
    return () => clearTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const startTimer = () => {
    clearTimer();
    timerRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % N);
    }, AUTO_MS);
  };

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const goTo = (i) => {
    setIndex(i);
  };

  // optional keyboard nav
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") {
        clearTimer();
        setIndex((prev) => (prev === 0 ? N - 1 : prev - 1));
      } else if (e.key === "ArrowRight") {
        clearTimer();
        setIndex((prev) => (prev + 1) % N);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [N]);

  return (
    <div className="testimonial-section-for-home">
      {/* Hero header */}
      <section className="testimonials-hero">
        <Container>
          <div className="text-center mx-auto" style={{ maxWidth: 1100 }}>
            <div className="sub-title-round">TESTIMONIALS</div>
            <h3 className="main-title-dark">What learners and partners say</h3>

            <p className="pararaph-small">
              Stories from trainees, interns, and collaborators who built skills
              and shipped innovation with ISAR.
            </p>
          </div>
        </Container>
      </section>

      {/* Slider (single card visible) */}
      <div className="testimonials-slider-wrap">
        <Container>
          <div className="testimonials-slider">
            <div
              className="slides"
              style={{
                width: `${N * 100}%`,
                transform: `translateX(-${index * (100 / N)}%)`,
              }}
            >
              {testimonialsPrimary.map((t, i) => (
                <div
                  key={i}
                  className="slide"
                  style={{ width: `${100 / N}%` }} // each slide occupies 1/N of the track
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${N}`}
                >
                  <TestimonialCard {...t} />
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="testimonial-dots" role="tablist" aria-label="Testimonials navigation">
            {testimonialsPrimary.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === index ? "active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Show testimonial ${i + 1}`}
                aria-pressed={i === index}
              />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}