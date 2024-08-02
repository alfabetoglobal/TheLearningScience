// src/components/Courses/Courses.js
import React, { useRef, useState } from "react";
import { programsData } from "./Data";
import "./Courses.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import GenerativeAi from "./GenerativeAi";

const Courses = () => {
  const scrollContainerRef = useRef(null);
  const [activeTab, setActiveTab] = useState("all-programs");
  const [selectedProgram, setSelectedProgram] = useState(null);

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 100,
        behavior: "smooth",
      });
    }
  };

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -100,
        behavior: "smooth",
      });
    }
  };

  const handleProgramClick = (program) => {
    setSelectedProgram(program);
  };

  if (selectedProgram) {
    return <GenerativeAi />;
  }

  return (
    <>
      <Header />
      <div className="programs-container">
        <h1 className="h1-head" >Programs</h1>
        <div className="arrowL" onClick={handleScrollLeft}>
          &#x3c;
        </div>
        <div className="tabs" ref={scrollContainerRef}>
          <button
            className={`tab ${activeTab === "all-programs" ? "active" : ""}`}
            onClick={() => setActiveTab("all-programs")}
          >
            All programs
          </button>
          <button
            className={`tab ${activeTab === "data-science" ? "active" : ""}`}
            onClick={() => setActiveTab("data-science")}
          >
            Data Science
          </button>
          <button
            className={`tab ${activeTab === "fullStack" ? "active" : ""}`}
            onClick={() => setActiveTab("fullStack")}
          >
            Full Stack Development
          </button>
          <button
            className={`tab ${activeTab === "cloud" ? "active" : ""}`}
            onClick={() => setActiveTab("cloud")}
          >
            Cloud-based Technology
          </button>
          <button
            className={`tab ${activeTab === "block" ? "active" : ""}`}
            onClick={() => setActiveTab("block")}
          >
            Blockchain Technology
          </button>
          <button
            className={`tab ${activeTab === "ml-di-c" ? "active" : ""}`}
            onClick={() => setActiveTab("ml-di-c")}
          >
            ML/DI C
          </button>
          <button
            className={`tab ${activeTab === "ai" ? "active" : ""}`}
            onClick={() => setActiveTab("ai")}
          >
            Artificial Intelligence
          </button>
        </div>
        <div className="arrowR" onClick={handleScrollRight}>
          &#x3e;
        </div>

        <div className="program-details">
          {programsData[activeTab]?.length > 0 ? (
            programsData[activeTab].map((program) => (
              <div key={program.id} onClick={() => handleProgramClick(program)}>
                <img
                  src={program.img}
                  alt={program.title}
                  className="program-image"
                />
                <div className="program-info">
                  <h2>{program.title}</h2>
                  <div className="date">
                    <p>{program.date}</p>
                    <br />
                    <div className="line21"></div>
                    <br />
                    <p>{program.price}</p>
                    <button className="join-button">Join</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-programs">
              <p>No available programs</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Courses;
