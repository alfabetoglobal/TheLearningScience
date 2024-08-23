// src/components/Header.js
import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible((prevState) => !prevState); // Toggle visibility
  };

  const handleBackClick = () => {
    setIsNavVisible(false); // Hide the nav when back button is clicked
  };

  return (
    <div className="static-nav">
      {/* <div className="Sec1-contact">
        <a href="/">
          <img
            src="https://img.icons8.com/?size=100&id=84908&format=png&color=000000"
            alt="phone"
          />
        </a>
        <i className="phone">
          <p>+91-721-7667-056</p>
        </i>

        <a href="mailto:admin@thelearningscience.com">
          <img
            src="https://img.icons8.com/?size=100&id=86862&format=png&color=000000"
            alt="mail"
          />
        </a>
        <i className="envelope" ><a href="mailto:admin@thelearningscience.com"> admin@thelearningscience.com</a></i>

        <div className="social-h">
          <a href="https://www.facebook.com/TheLearningScienceOfficials/">
            <i className="facebook">
              <img
                src="https://img.icons8.com/?size=100&id=118490&format=png&color=000000"
                alt="fb"
              />
            </i>
          </a>
          <a href="https://www.instagram.com/thelearningscience/">
            <i className="instagram">
              <img
                src="https://img.icons8.com/?size=100&id=84884&format=png&color=000000"
                alt="insta"
              />
            </i>
          </a>
          <a href="https://www.linkedin.com/company/alfabetoglobal/?originalSubdomain=in">
            <i className="linkedin-in">
              <img
                src="https://img.icons8.com/?size=100&id=84888&format=png&color=000000"
                alt="linkedin"
              />
            </i>
          </a>
          <a href="https://www.youtube.com/channel/UCuNHiXdOheyry7hG2IzxWPQ">
            <i className="youtube">
              <img
                src="https://img.icons8.com/?size=100&id=84909&format=png&color=000000"
                alt="youtube"
              />
            </i>
          </a>
          <a href="https://x.com/TLSciofficials">
            <i className="twitter">
              <img
                src="https://img.icons8.com/?size=100&id=102907&format=png&color=000000"
                alt="twitter"
              />
            </i>
          </a>
          <a href="https://t.me/computer_sciencegroup">
            <i className="telegram">
              <img
                src="https://img.icons8.com/?size=100&id=85428&format=png&color=000000"
                alt="telegram"
              />
            </i>
          </a>
        </div>
      </div>*/}
      <div className="Sec1-header">
        <div className="logo">
          <img
            src="https://play-lh.googleusercontent.com/Mb0hTPOXe4Wawdr-sRHrc-kqxlwkw1MMw6HD9COZVWyW5WQB-26gG5n5sYyyU83ZE1rh=w240-h480-rw"
            alt="logo"
          />
          <p>
            The <br />
            Learning <br />
            Science
          </p>
        </div>
        <button className="nav-toggle" onClick={toggleNav}>
          ☰
        </button>
        <nav className={`navbar1 ${isNavVisible ? "show" : ""}`}>
          <button className="back-button" onClick={handleBackClick}>
            ←
          </button>
          <div className="nav">
            <ul className={isNavVisible ? "show" : ""}>
              <li>
                <a href="/">
                  <b>Home</b>
                </a>
              </li>
              <li>
                <a href="/Courses">
                  <b>Courses</b>
                </a>
              </li>
              <li>
                <a href="/Blog">
                  <b>Blog</b>
                </a>
              </li>
              <li>
                <a href="/Contact">
                  <b>Contact Us</b>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
