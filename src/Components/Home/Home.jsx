// import React from 'react'
import { useState } from "react";
import "./Home.css";

const Section1 = () => {
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
    <>
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

    {/* ------------Section-2------------------ */}

    <div className="App">
          <header className="App-header">
            <h3>WHY TheLearningScience</h3>
            <h1>Your Passport for <br/>Global IT Career</h1>
          </header>
          <div className="card-grid">
            <div className="card">
              <img
                src="https://etimg.etb2bimg.com/thumb/msid-106990495,imgsize-134922,width-1200,height=765,overlay-etgovernment/blog/bridging-academia-industry-gap-the-urgency-for-curriculum-reform-in-govt-engineering-colleges.jpg"
                alt="Industry-Oriented Curriculum"
              />
              <h3>Industry-Oriented Curriculum</h3>
              <p>
                Click here to edit the text and add your own content to this
                paragraph.
              </p>
            </div>
    
            <div className="card">
              <img
                src="https://theyellowspot.com/wp-content/uploads/2019/08/trainer-purpose.jpg"
                alt="Customized Teaching Module"
              />
              <h3>Customized Teaching Module</h3>
              <p>
                Click here to edit the text and add your own content to this
                paragraph.
              </p>
            </div>
    
            <div className="card">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/008/214/517/small_2x/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg"
                alt="Company Specific Preparation"
              />
              <h3>Company Specific Preparation</h3>
              <p>
                Click here to edit the text and add your own content to this
                paragraph.
              </p>
            </div>
    
            <div className="card">
              <img
                src="https://p1.hiclipart.com/preview/810/634/480/call-logo-customer-service-call-centre-technical-support-customer-support-customer-service-representative-help-desk-service-quality-png-clipart.jpg"
                alt="Complete Online Support"
              />
              <h3>Complete Online Support</h3>
              <p>
                Click here to edit the text and add your own content to this
                paragraph.
              </p>
            </div>
    
            <div className="card">
              <img
                src="https://www.shutterstock.com/image-vector/businessman-logo-design-recruitment-agency-260nw-1028047060.jpg"
                alt="Experienced Trainers"
              />
              <h3>Experienced Trainers</h3>
              <p>
                Click here to edit the text and add your own content to this
                paragraph.
              </p>
            </div>
    
            <div className="card">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/014/916/027/small/a-woman-having-counseling-session-free-vector.jpg"
                alt="Mock Sessions"
              />
              <h3>Mock Sessions</h3>
              <p>
                Click here to edit the text and add your own content to this
                paragraph.
              </p>
            </div>
          </div>
          <footer className="sec2-footer">
            <p>
              Embark on your path to accessing <br/> countless job opportunities with <br/>
              TheLearningScience. Start your journey <br/> today!
            </p>
            <button className="sign-up-button">Sign up</button>
          </footer>
        </div>

        {/* -------------Section-3-------------- */}
    <div className="offerings-container">
      <h1><b>Our Offerings</b></h1>
      <div className="offerings-grid">
        <div className="offering">
          <div className="circle">1</div>
          <h2>Professional Certification in Data Science & Machine Learning</h2>
          <p>
            Explore our Data Science Certification Program, tailor-made for
            aspiring data scientists. Dive into specialized areas like machine
            and deep learning.
          </p>
          <ul>
            <li>✅ Live online sessions</li>
            <li>✅ Earn a professional certificate</li>
            <li>✅ 5 & 8 Months customized designed curriculum.</li>
            <li>✅ Comprehensive interview preparation</li>
            <li>✅ Access to 50+ hiring partners</li>
          </ul>
          <button className="info-button">More Info</button>
        </div>
        <div className="offering">
          <div className="circle">2</div>
          <h2>Professional Certification in Full Stack Development</h2>
          <p>
            Unlock top software development opportunities with our Full Stack
            Development course, emphasizing DSA skills.
          </p>
          <ul>
            <li>✅ Live online sessions</li>
            <li>✅ Earn a professional certificate</li>
            <li>✅ 5 & 8 Months customized designed curriculum.</li>
            <li>✅ Comprehensive interview preparation</li>
            <li>✅ Access to 50+ hiring partners</li>
          </ul>
          <button className="info-button">More Info</button>
        </div>
      </div>
 </div>


 {/* --------------Section-4---------------- */}


    </>
  )
}

export default Section1