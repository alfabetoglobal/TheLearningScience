import React from "react";
import "./Sec3.css";

const Offerings = () => {
  return (
    <div className="offerings-container">
      <h1 className="Sec3-h1">
        <b>Our Offerings</b>
      </h1>
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
  );
};

export default Offerings;
