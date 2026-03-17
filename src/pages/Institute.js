import React from "react";
import { useNavigate } from "react-router-dom";
import coursesData from "../data/coursesData";
import { FaBookOpen, FaUserGraduate } from "react-icons/fa";
import "../styles/Institute.css";

import Footer from "../components/Footer";
import { Container } from "react-bootstrap";

// Helper to make clean URLs (slugify)
const slugify = (title) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const Institute = () => {
  const navigate = useNavigate();

  return (
    <main>
    <section className="insitute-hero-section  breadcrumb-bg ">
              <Container>
                <div className="service-hero-content text-center">
                  <h1 className="contact-title">Courses</h1>
                  <p>Unlock your potential with expert-led courses designed to inspire, educate, and empower your career journey</p>
                
               
                </div>
              </Container>
            </section>
    

      <div className="institute-container">
        {coursesData.map((course) => {
          const slug = slugify(course.title);

          return (
            <div
              key={course.id}
              className="institute-card"
              onClick={() => navigate(`/courses/${slug}`)}
            >
              <div className="course-image-wrapper">
                <img src={course.image} alt={course.title} className="institute-img" />
              </div>

              <div className="institute-details">
                <div className="course-meta">
                  <span><FaBookOpen /> {course.lessons} Lessons</span>
                  <span><FaUserGraduate /> {course.students} Students</span>
                </div>

                <h3 className="course-title">{course.title}</h3>

                <button
                  className="btn-enrol"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/courses/${slug}`);
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <Footer/>
    
    </main>
  );
};

export default Institute;