// components/CourseGrid.js
import React from "react";
import courses from "../data/courses";
import CourseCard from "./CourseCard";
import "../styles/CourseGrid.css";

const CourseGrid = () => {
  return (
    <div className="course-grid">
      <h1>Short-Term Certificate Courses (30-45 Days)</h1>
      <div className="grid">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseGrid;
