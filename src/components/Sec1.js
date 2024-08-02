import React, { useState } from "react";
import "./Sec1.css";

const Sec1 = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [selectedCourse, setSelectedCourse] = useState([]);

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleContactNumberChange = (event) => {
    setContactNumber(event.target.value);
  };

  const handleCourseChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setSelectedCourse([...selectedCourse, value]);
    } else {
      setSelectedCourse(selectedCourse.filter((item) => item !== value));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Contact Number:", contactNumber);
    console.log("Selected Course:", selectedCourse);
  };

  return (
    <div className="sec1-container">
      <div className="contact">
        <i className="fa-solid fa-phone">+91-721-7667-056</i>
        <i className="fa-solid fa-envelope">admin@thelearningscience.com</i>
        <div className="social">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-linkedin-in"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-twitter"></i>
        </div>
      </div>
      <div className="header">
        <div className="logo">
          <img
            src="https://play-lh.googleusercontent.com/Mb0hTPOXe4Wawdr-sRHrc-kqxlwkw1MMw6HD9COZVWyW5WQB-26gG5n5sYyyU83ZE1rh=w240-h480-rw"
            alt="logo"
          />
          <p>
            The Learning Science
            <br />
            (An Alfabeto Group Venture)
          </p>
        </div>
        <div className="nav">
          <ul>
            <li>
              <h2>Home</h2>
            </li>
            <li>
              <h2>Courses</h2>
            </li>
            <li>
              <h2>Blog</h2>
            </li>
            <li>
              <h2>Contact Us</h2>
            </li>
          </ul>
        </div>
      </div>
      <div className="main-content">
        <div className="left">
          <div className="content">
            <h3>LEARN WHAT THE INDUSTRY DEMANDS</h3>
            <div className="heading">
              <h1>
                Unlock Your <br />
                Potential &<br />
                Your Dream Job
              </h1>
            </div>
            <p>
              Dream Tech Jobs Await: Master Software Development <br />
              and Data Science with AI-Powered Courses!
            </p>
            <button>Get Started</button>
            <p>
              Unlock Your Future: Join Us to Land Jobs in 500+ Global Tech
              Titans
            </p>
          </div>
        </div>

        <div className="right">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label>Full Name (Required)</label>
                <input
                  type="text"
                  id="full-name"
                  placeholder="Enter Your Name"
                  value={fullName}
                  onChange={handleFullNameChange}
                  required
                />
              </div>
              <div className="input-group">
                <label>Email (Required)</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div className="input-group">
                <label>Contact Number (Required)</label>
                <input
                  type="tel"
                  id="contact-number"
                  placeholder="Enter your Contact Number"
                  value={contactNumber}
                  onChange={handleContactNumberChange}
                  required
                />
              </div>
              <div className="input-group">
                <label>Select Course (Required)</label>
                <div className="checkbox-container">
                  <div className="left-checkboxes">
                    <div className="checkbox-group">
                      <input
                        type="checkbox"
                        id="full-stack-development"
                        value="Full Stack Development"
                        checked={selectedCourse.includes(
                          "Full Stack Development"
                        )}
                        onChange={handleCourseChange}
                      />
                      <label htmlFor="full-stack-development">
                        Full Stack Development
                      </label>
                    </div>
                    <div className="checkbox-group">
                      <input
                        type="checkbox"
                        id="cloud-computing"
                        value="Cloud Computing"
                        checked={selectedCourse.includes("Cloud Computing")}
                        onChange={handleCourseChange}
                      />
                      <label htmlFor="cloud-computing">Cloud Computing</label>
                    </div>
                    <div className="checkbox-group">
                      <input
                        type="checkbox"
                        id="artificial-intelligence"
                        value="Artificial Intelligence"
                        checked={selectedCourse.includes(
                          "Artificial Intelligence"
                        )}
                        onChange={handleCourseChange}
                      />
                      <label htmlFor="artificial-intelligence">
                        Artificial Intelligence
                      </label>
                    </div>
                  </div>
                  <div className="right-checkboxes">
                    <div className="checkbox-group">
                      <input
                        type="checkbox"
                        id="data-science"
                        value="Data Science"
                        checked={selectedCourse.includes("Data Science")}
                        onChange={handleCourseChange}
                      />
                      <label htmlFor="data-science">Data Science</label>
                    </div>
                    <div className="checkbox-group">
                      <input
                        type="checkbox"
                        id="blockchain-technology"
                        value="Blockchain Technology"
                        checked={selectedCourse.includes(
                          "Blockchain Technology"
                        )}
                        onChange={handleCourseChange}
                      />
                      <label htmlFor="blockchain-technology">
                        Blockchain Technology
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sec1;
