import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import coursesData from "../data/coursesData";
import {
  FaBookOpen,
  FaUserGraduate,
  FaRegClock,
  FaGlobe,
  FaTag,
  FaChevronRight,
} from "react-icons/fa";
import "../styles/CourseDetailsPage.css";

const slugify = (title) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const CourseDetailsPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const course = coursesData.find((c) => slugify(c.title) === slug);
  if (!course) return <p style={{ padding: "2rem" }}>Course not found!</p>;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Enrollment submitted successfully!");
  };

  return (
    <div className="course-details-wrapper">
      {/* ===== HERO SECTION ===== */}
      <div className="course-hero">
        <div className="hero-overlay">
          <div className="breadcrumb">
            <span onClick={() => navigate("/")}>Home</span>
            <FaChevronRight className="breadcrumb-icon" />
            <span onClick={() => navigate("/institute")}>Courses</span>
            <FaChevronRight className="breadcrumb-icon" />
            <span className="active-page">{course.title}</span>
          </div>
          <h1 className="hero-title">{course.title}</h1>
        </div>
      </div>

      {/* ===== PAGE LAYOUT ===== */}
      <div className="course-layout">
        {/* Sidebar */}
        <aside className="course-sidebar">
          <h3>All Courses</h3>
          <ul>
            {coursesData.map((item) => (
              <li
                key={item.id}
                className={slugify(item.title) === slug ? "active" : ""}
                onClick={() => navigate(`/courses/${slugify(item.title)}`)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="course-main">
          {/* Meta Info */}
          <div className="meta-card">
            <div className="meta-row">
              <FaBookOpen className="meta-icon" />
              <span>Lessons</span>
              <span className="meta-value">{course.lessons}</span>
            </div>
            <div className="meta-row">
              <FaUserGraduate className="meta-icon" />
              <span>Students</span>
              <span className="meta-value">{course.students}</span>
            </div>
            <div className="meta-row">
              <FaTag className="meta-icon" />
              <span>Certification</span>
              <span className="meta-value">{course.certification}</span>
            </div>
            <div className="meta-row">
              <FaGlobe className="meta-icon" />
              <span>Eligibility</span>
              <span className="meta-value">{course.eligibility}</span>
            </div>
            <div className="meta-row">
              <FaTag className="meta-icon" />
              <span>Fee</span>
              <span className="meta-value">{course.fee}</span>
            </div>
            <div className="meta-row">
              <FaRegClock className="meta-icon" />
              <span>Duration</span>
              <span className="meta-value">{course.duration}</span>
            </div>
          </div>

          {/* Description */}
          <div
            className="course-description-container"
            dangerouslySetInnerHTML={{ __html: course.description }}
          ></div>

          {/* Enroll Form Always Visible */}
          <div className="enroll-form-container">
            <h2>Enroll in {course.title}</h2>
            <form className="enroll-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" required />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="tel" required />
              </div>
              <div className="form-group">
                <label>Message (optional)</label>
                <textarea rows="3"></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Submit Enrollment
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CourseDetailsPage;