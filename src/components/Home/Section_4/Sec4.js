// components/CourseGrid.js
import React from "react";
import CourseCard from "./CourseCard";
import coursesData from "./coursesData";

const CourseGrid = () => {
  return (
    <div className="course-grid12">
      <h1>Short-Term Certificate Courses (30-45 Days)</h1>
      <div className="grid">
        {coursesData.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseGrid;
