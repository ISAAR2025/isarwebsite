import React, { useState } from "react";
import { useParams } from "react-router-dom";
import coursesData from "../data/coursesData";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/EnrollForm.css";

const slugify = (title) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const EnrollForm = () => {
  const { slug } = useParams();
  const course = coursesData.find((c) => slugify(c.title) === slug);

  const [formData, setFormData] = useState({
    courseName: course?.title || "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    interestReason: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  if (!course)
    return (
      <div className="text-center py-5 text-secondary fs-5">
        Course not found!
      </div>
    );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/enrollments`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) throw new Error("Failed to submit the form");
      setSubmitted(true);
    } catch (err) {
      setError(err.message || "Submission error");
    }
  };

  if (submitted)
    return (
      <div className="text-center py-5 text-success fs-5">
        Application submitted successfully!
      </div>
    );

  return (
  <div className="enrollform-container container" style={{ maxWidth: 600 }}>
    <h2 className="enrollform-title my-4">Apply for {course.title}</h2>
    <form onSubmit={handleSubmit}>
      {/* Course input */}
      <div className="mb-3">
        <label className="form-label">Course Selection*</label>
        <input
          type="text"
          name="courseName"
          className="form-control"
          value={formData.courseName}
          disabled
        />
      </div>

      {/* First & Last Name */}
      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label">First Name*</label>
          <input
            type="text"
            name="firstName"
            className="form-control"
            required
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Last Name*</label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            required
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Email */}
      <div className="mb-3 mt-3">
        <label className="form-label">Email*</label>
        <input
          type="email"
          name="email"
          className="form-control"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      {/* Phone */}
      <div className="mb-3">
        <label className="form-label">Phone Number*</label>
        <input
          type="tel"
          name="phone"
          className="form-control"
          required
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      {/* Date of Birth */}
      <div className="mb-3">
        <label className="form-label">Date of Birth*</label>
        <input
          type="date"
          name="dob"
          className="form-control"
          required
          value={formData.dob}
          onChange={handleChange}
        />
      </div>

      {/* Interest Reason */}
      <div className="mb-3">
        <label className="form-label">Why are you interested in this course?*</label>
        <textarea
          name="interestReason"
          className="form-control enrollform-textarea"
          required
          value={formData.interestReason}
          rows="4"
          onChange={handleChange}
        />
      </div>

      {error && <div className="text-danger mb-3">{error}</div>}

      <button type="submit" className="btn btn-primary px-4">
        Submit
      </button>
    </form>
  </div>
);

};

export default EnrollForm;
