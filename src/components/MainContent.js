import React from "react";
import "./MainContent.css";

function MainContent() {
  return (
    <div className="content">
      <div className="background-images">
        <img
          src="https://static.wixstatic.com/media/e2871454f2c049049d857dbcb8df2b21.jpg/v1/fill/w_1424,h_453,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e2871454f2c049049d857dbcb8df2b21.jpg"
          alt="Background 1"
          className="bg-image bg-image1"
        />
        <img
          src="https://static.wixstatic.com/media/11062b_14ba1d8da9c0437eadbf3680c3309937~mv2.jpg/v1/fill/w_2254,h_453,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_14ba1d8da9c0437eadbf3680c3309937~mv2.jpg"
          alt="Background 2"
          className="bg-image bg-image2"
        />
      </div>
      <div className="text-section">
        <h2>
          Step into the realm of unparalleled success.
          <br />
          Unlock the formula for a thriving career.
        </h2>
        <ul>
          <li>
            Receive personalized mentorship from seasoned software developers
            employed at leading companies.
          </li>
          <li>
            Benefit from a dedicated placement team committed to promoting your
            profile among our extensive network of over 200+ partner companies.
          </li>
          <li>
            Boost your confidence through unlimited mock interviews, ensuring
            you're fully prepared for the real thing.
          </li>
          <li>
            Join our lifelong alumni community and continue your journey with us
            beyond the completion of your course.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainContent;
