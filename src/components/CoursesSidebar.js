import React from "react";
import "./CoursesSidebar.css";

const CoursesSidebar = ({ courses, activeId, onSelect }) => (
  <aside className="sidebar-container" role="navigation" aria-label="Courses Navigation">
    <h2 className="sidebar-header">Courses List</h2>
    <ul className="sidebar-list">
      {courses.map((course) => (
        <li
          key={course.id}
          className={`sidebar-item ${activeId === course.id ? "active" : ""}`}
          onClick={() => onSelect(course.id)}
          tabIndex={0}
          role="button"
          onKeyDown={(e) => { if (e.key === "Enter") onSelect(course.id); }}
        >
          {course.title}
        </li>
      ))}
    </ul>
  </aside>
);

export default CoursesSidebar;
