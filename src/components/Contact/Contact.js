// import React from 'react';
import "./Contact.css";
// import './vid.mp4';
import ReactPlayer from "react-player";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";

const ContactUs = () => {
  return (
    <>
      <Header />

      <div className="contact-us">
        <div className="contact-us-header">
          {/* <img src="https://static.wixstatic.com/media/11062b_b1015cefa07e4c0b82f6601db2d1028ff000.jpg/v1/fill/w_980,h_352,al_c,q_80,usm_0.33_1.00_0.00,enc_auto/11062b_b1015cefa07e4c0b82f6601db2d1028ff000.jpg" alt="Contact Us" className="contact-image" /> */}
          <ReactPlayer
            className="video"
            
            playing={true}
            controls={false}
            loop={true}
            url="https://video.wixstatic.com/video/11062b_b1015cefa07e4c0b82f6601db2d1028f/720p/mp4/file.mp4"
            height="30rem"
            width="100%"
          />
          {/* <source src="https://video.wixstatic.com/video/11062b_b1015ce…/720p/mp4/file" type="video/mp4" /> */}
          {/* <video id="comp-kwwd6xxl_video" className="K8MSra" src="https://video.wixstatic.com/video/11062b_b1015cefa07e4c0b82f6601db2d1028f/720p/mp4/file.mp4" style="height: 100%; width: 100%; object-fit: cover; object-position: center center; opacity: 1;" /> */}
          {/* <video src={} /> */}
          {/* <video src="https://video.wixstatic.com/video/11062b_b1015cefa07e4c0b82f6601db2d1028f/720p/mp4/file.mp4"  />  */}
          <h1>Contact Us</h1>
        </div>
        <div className="contact-details">
          <div className="contact-item">
            <h2>Address</h2>
            <p>
              <strong>Communication Office:</strong> 117/511 O block Kanpur, UP
            </p>
            <p>
              <strong>Registered Office:</strong> C-185, Sector 37, Gr. Noida,
              UP
            </p>
            <p>
              <strong>Head Office:</strong> Dabua Colony, Faridabad Haryana.
            </p>
          </div>
          <div className="contact-item">
            <h2>Follow us</h2>
            {/* <p>
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin-in"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-twitter"></i>
            </p> */}
            <br />
          
            <div className="social">
              <a href="https://www.facebook.com/TheLearningScienceOfficials/">
                <i className="facebook">
                  <img
                    src="https://img.icons8.com/?size=100&id=118490&format=png&color=000000"
                    alt="fb"
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
              <a href="https://api.whatsapp.com/send?phone=917217667056&text=Hello%20Sir%2C%0AI%20want%20more%20information%20about%20the%20courses.">
                <i className="whatsapp">
                  <img
                    src="https://img.icons8.com/?size=100&id=85088&format=png&color=000000"
                    alt="youtube"
                  />
                </i>
              </a>
              <a href="/https://www.linkedin.com/company/alfabetoglobal/?originalSubdomain=in">
                <i className="linkedin-in">
                  <img
                    src="https://img.icons8.com/?size=100&id=84888&format=png&color=000000"
                    alt="linkedin"
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

              <a href="https://t.me/computer_sciencegroup">
                <i className="telegram">
                  <img
                    src="https://img.icons8.com/?size=100&id=85428&format=png&color=000000"
                    alt="telegram"
                  />
                </i>
              </a>
            </div>
          </div>
          <div className="contact-item">
            <h2>Email</h2>
            <p>admin@thelearningscience.com</p>
            <p>learningscienceindia@gmail.com</p>
          </div>
        </div>
        <div className="responsive-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.0226280696666!2d80.2887936761881!3d26.48721627690339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c3816489252c5%3A0xd31fedfa3808ee6!2s9%20Number%20Crossing!5e0!3m2!1sen!2sin!4v1721837778489!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen=""
            title="my-frame"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
