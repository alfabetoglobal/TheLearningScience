import React from "react";
import "./Courses.css";

const courses = [
  {
    heading: "Basic Foundation for CS",
    description: [
      "Programming Language - C, Python",
      "Data Structures & Algorithm",
      "Operating System",
      "The Basic foundation for the candidates.",
    ],
    image:
      "https://static.wixstatic.com/media/nsplsh_1317476a829e4e9ab1e951f86c7e3473~mv2.jpg/v1/fill/w_339,h_260,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image%20by%20Christopher%20Gower.jpg",
  },
  {
    heading: "Database Management System",
    description: ["DBMS Concept", "SQL"],
    image:
      "https://static.wixstatic.com/media/594faf_dd7a99de65e64f2eb76aa2568bf60367~mv2.png/v1/fill/w_339,h_260,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/software-removebg-preview.png",
  },
  {
    heading: "Web Development Course",
    description: ["HTML, CSS, JAVASCRIPT", "Node.js, React, SQL"],
    image:
      "https://static.wixstatic.com/media/594faf_d55461615ce54870827c0674caa8b3f2~mv2.png/v1/crop/x_0,y_23,w_500,h_455/fill/w_339,h_260,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/elearning-removebg-preview.png",
  },
  {
    heading: "Data Analytics",
    description: [
      "Candidates Looking for the Job Role - Data Analyst, Business Analyst can join this course",
      "MS Excel, PowerBI/Tableu, DBMS/SQL will be covered.",
    ],
    image:
      "https://static.wixstatic.com/media/594faf_055b1b5d49cf41098d6278f29e9fcb94~mv2.jpg/v1/fill/w_339,h_260,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/unsplash-fyeOxvYvIyY_edited.jpg",
  },
  {
    heading: "Data Analytics",
    description: ["Japanese", "Chinese", "Spanish"],
    image:
      "https://static.wixstatic.com/media/ef0f423704564eff9cc5bb056f560e25.jpg/v1/fill/w_339,h_260,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Hindu%20Literature.jpg",
  },
];

const Courses = () => {
  return (
    <div className="container-1">
      <h1>Short-Term Certificate Courses (30-45 Days)</h1>
      <div>
        <div className="container-grid">
          {courses.map((course, index) => (
            <div key={index} className="course-item">
              <div className="container-card">
                <img src={course.image} alt={course.heading} />
              </div>

              <div className="content">
                <h3>{course.heading}</h3>
                <ul>
                  {course.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
