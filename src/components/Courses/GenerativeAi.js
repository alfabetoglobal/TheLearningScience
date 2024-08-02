//    src/components/Courses/GenerativeAi.js
import React from "react";
import "./GenerativeAi.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const GenerativeAi = () => {
  return (
    <>
      <Header />
      <div className="generative-ai-container">
        <div className="header">
          <p>Jul 20, 2024 - Jul 31, 2024</p>
          <br />
          <h1>Generative AI Essentials & Applications</h1>
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
          <img
            src="https://static.wixstatic.com/media/594faf_de539b1266cd45f2861f4e4b9587b7b6~mv2.png/v1/fit/w_800,h_600,al_c,q_90/file.webp"
            alt="Generative AI"
          />
        </div>
        <div className="About_Sect">
          <div className="leftC">
            <div className="about-section">
              <h2>About</h2>
              <br />
              <p>Duration: 35 hours (12 days)</p>
              <br />
              <p>From July 20 to July 31, 2024 (08:30 PM to 09:30 PM)</p>
              <br />
              <p>
                Prequistics:
                <br />
                Basic understanding of Python programming
              </p>
              <br />
              <p>
                Who Can Attend: Engineering college faculty, Research scholars,
                Students, Working IT Professionals
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
              <p>₹7,000.00</p>
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
              <div className="share-icons">
                <a
                  href="https://www.facebook.com/TheLearningScienceOfficials/"
                  className="tooltip"
                >
                  <i className="facebook">
                    <img
                      src="https://img.icons8.com/?size=100&id=118490&format=png&color=000000"
                      alt="fb"
                    />{" "}
                  </i>
                  <span className="tooltiptext">Facebook</span>
                </a>
                <a href="https://x.com/TLSciofficials" className="tooltip">
                  <i className="twitter">
                    <img
                      src="https://img.icons8.com/?size=100&id=102907&format=png&color=000000"
                      alt="twitter"
                    />{" "}
                  </i>
                  <span className="tooltiptext">Twitter</span>
                </a>
                <a href="/" className="tooltip">
                  <i className="linkedin-in">
                    <img
                      src="https://img.icons8.com/?size=100&id=84888&format=png&color=000000"
                      alt="linkedin"
                    />{" "}
                  </i>
                  <span className="tooltiptext">LinkedIn</span>
                </a>
                <a href="/" className="tooltip">
                  <i className="copy">
                    <img
                      src="https://img.icons8.com/?size=100&id=92&format=png&color=000000"
                      alt="copy"
                    />{" "}
                  </i>
                  <span className="tooltiptext">Copy Link</span>
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
      <Footer />
    </>
  );
 
};

export default GenerativeAi;
