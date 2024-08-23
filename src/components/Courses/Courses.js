// src/components/Courses/Courses.js
import React, { useRef, useState } from "react";

import { Link } from "react-router-dom";
import "./Courses.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const programsData = {
  "all-programs": [
    {
      id: "12345",
      img: "https://static.wixstatic.com/media/594faf_de539b1266cd45f2861f4e4b9587b7b6~mv2.png/v1/fit/w_800,h_600,al_c,q_90/file.webp",
      title: "Generative AI Essentials & Applications",
      date: "Jul 20, 2024 - Jul 31, 2024",
      price: "₹7,000.00",
    },
  ],
  "data-science": [],
  fullStack: [],
  cloud: [],
  block: [],
  "ml-di-c": [],
  ai: [
    {
      id: "12345",
      img: "https://static.wixstatic.com/media/594faf_de539b1266cd45f2861f4e4b9587b7b6~mv2.png/v1/fit/w_800,h_600,al_c,q_90/file.webp",
      title: "Generative AI Essentials & Applications",
      date: "Jul 20, 2024 - Jul 31, 2024",
      price: "₹7,000.00",
    },
  ],
};

const Courses = () => {
  const scrollContainerRef = useRef(null);
  const [activeTab, setActiveTab] = useState("all-programs");
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  if (selectedProgram) {
    return (
      <>
        <Header />
        <div className="generative-ai-container">
          <div className="header">
            <p>{selectedProgram.date}</p>
            <br />
            <h1>{selectedProgram.title}</h1>
            <br />
            <div className="counts">
              <div className="count-item11">
                <span>12</span>
                <br />
                <p>Days</p>
              </div>
              <div className="line3"></div>
              <div className="count-item12">
                <span>2</span>
                <br />
                <p>Steps</p>
              </div>
            </div>
          </div>
          <div className="image-container">
            <img src={selectedProgram.img} alt="Generative AI" />
          </div>

          {/* Dropdown button */}
          <div className="dropdown-container">
            <button className="dropdown-button" onClick={toggleDropdown}>
              {isDropdownOpen ? "Close Details" : "View More Details"}
            </button>
          </div>

          {/* Full-page dropdown view */}
          {isDropdownOpen && (
            <div className="dropdown-full-page">
              <div className="dropdown-content">
                <h2>Additional Information</h2>
                <div className="About_Sect">
                  <div className="leftC">
                    <div className="about-section">
                      <h2>About</h2>
                      <br />
                      <p>Duration: 35 hours (12 days)</p>
                      <br />
                      <p>
                        From July 20 to July 31, 2024 (08:30 PM to 09:30 PM)
                      </p>
                      <br />
                      <p>
                        Prerequisites:
                        <br />
                        Basic understanding of Python programming
                      </p>
                      <br />
                      <p>
                        Who Can Attend: Engineering college faculty, Research
                        scholars, Students, Working IT Professionals
                      </p>
                      <br />
                      <p>
                        You can also join this program via the mobile app.{" "}
                        <a
                          href="https://apps.wix.com/place-invites/invite-lp/a9631803-ef45-410e-84e9-46e136a9fc4d"
                          className="app_link"
                        >
                          Go to the app
                        </a>
                      </p>
                    </div>
                    <br />
                    <br />
                    <div className="line4"></div>
                    <br />
                    <br />
                    <br />
                    <div className="instructors">
                      <h2>Instructors</h2>
                      <div className="instructor-info">
                        <a
                          href="https://www.thelearningscience.com/profile/admin/profile?programId=539ff963-bd96-4868-980c-46769a786e96"
                          className="logo-link"
                        >
                          <img
                            src="https://static.wixstatic.com/media/1bf8c6_1fe6dfc5ec3d45ab8dfa492ae370e86e%7Emv2.jpg/v1/fill/w_113,h_113,al_c,lg_1,q_80,enc_auto/1bf8c6_1fe6dfc5ec3d45ab8dfa492ae370e86e%257Emv2.jpg"
                            alt="Logo"
                            className="instructor-logo"
                          />
                        </a>
                        <span className="instructor-name">Admin</span>
                      </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="line4"></div>
                    <br />
                    <br />
                    <br />
                    <div className="price">
                      <h2>Price</h2>
                      <p>{selectedProgram.price}</p>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="line4"></div>
                    <br />
                    <br />
                    <br />
                    <div className="share">
                      <h2>Share</h2>
                      <br />
                      <div className="share-icons">
                        <a
                          href="https://www.facebook.com/TheLearningScienceOfficials/"
                          className="Facebook"
                        >
                          <i className="facebook">
                            <img
                              src="https://img.icons8.com/?size=100&id=118490&format=png&color=000000"
                              alt="fb"
                            />
                          </i>
                          <span className="tooltip">Facebook</span>
                        </a>

                        <a
                          href="https://x.com/TLSciofficials"
                          className="twitter"
                        >
                          <i className="twitter">
                            <img
                              src="https://img.icons8.com/?size=100&id=102907&format=png&color=000000"
                              alt="twitter"
                            />
                          </i>
                          <span className="tooltip">Twitter</span>
                        </a>

                        <a
                          href="https://www.linkedin.com/company/alfabetoglobal/?originalSubdomain=in"
                          className="linkedin-in"
                        >
                          <i className="linkedin-in">
                            <img
                              src="https://img.icons8.com/?size=100&id=84888&format=png&color=000000"
                              alt="linkedin"
                            />
                          </i>
                          <span className="tooltip">LinkedIn</span>
                        </a>

                        <a href="/" className="copy">
                          <i className="copy">
                            <img
                              src="https://img.icons8.com/?size=100&id=92&format=png&color=000000"
                              alt="copy"
                            />
                          </i>
                          <span className="tooltip">Copy Link</span>
                        </a>
                      </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <button className="join-button">Join</button>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                  <div className="rightC"></div>
                </div>
              </div>
            </div>
          )}
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="programs-container">
        <h1 className="h1-head">Programs</h1>
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
            className={`tab ${activeTab === "placement" ? "active" : ""}`}
            onClick={() => setActiveTab("placement")}
          >
            Placement Pre-preparation Course
          </button>
          {/* <button
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
          </button> */}
        </div>
        <div className="arrowR" onClick={handleScrollRight}>
          &#x3e;
        </div>

        <div className="program-details">
          {programsData[activeTab]?.length > 0 ? (
            programsData[activeTab].map((program) => (
              <div>
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
                    <Link
                      className="link-btn"
                      key={program.id}
                      onClick={() => handleProgramClick(program)}
                    >
                      Learn more about Generative AI{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-arrow-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                        />
                      </svg>
                    </Link>
                    <br />
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
      <Footer className="Course-footer" />
    </>
  );
};

export default Courses;
