// import React, { useState } from "react";
import "./Header.css";
import { Link} from "react-router-dom";

const Sec1 = () => {
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
      <div className="header-one">
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
              <Link to="/"><h2>Home</h2></Link>
            </li>
            <li>
            <Link to="/courses"><h2>Courses</h2></Link>
            </li>
            <li>
            <Link to="/blog"><h2>Blog</h2></Link>
            </li>
            <li>
              <Link to="/contact"><h2>Contact Us</h2></Link>
            </li>
          </ul>
        </div>
      </div>
     
    </div>
  );
};

export default Sec1;