import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="container">
      <div className="left">
        <div className="header">
          <h1>About TheLearningScience</h1>
          <p>An investment in knowledge pays the best interest."</p>
        </div>
        <div className="content">
          <p>
            At TheLearningScience, we offer a structured, yet flexible program
            that is tailored to your individual preferences and needs. Our team
            is committed to providing you with the best learning experience
            possible, helping you to succeed in a rapidly-evolving technological
            world. We strive to ensure that you feel supported throughout your
            journey, offering personalized recommendations and feedback to help
            you achieve your learning goals. Discover everything you need to
            know about our courses by contacting us today!
          </p>
          <h2>Mission & Vision: </h2>
          <p>
            Improve the standard of learning and teaching <br />
            Meet students' learning styles <br />
            Increase efficiency and effectiveness <br />
            Enhance user accessibility and temporal flexibility to better engage
            learners in the learning process.
          </p>
        </div>
      </div>
      <div className="right">
        <h2>We Believe:</h2>
        <div className="beliefs">
          <div className="belief">
            <p>
              Each LEARNER is CURIOUS,
              <br /> COMPETENT <br /> able to take an <br />
              ACTIVE ROLE <br /> in their own learning.
            </p>
          </div>
          <div className="belief">
            <p>
              Effective <br />
              EDUCATORS <br />
              EMPOWER <br /> ALL LEARNERS TO ACHIEVE <br /> personnel excellence
              by being <br /> OPEN, FLEXIBLE <br />
              and responsive <br /> to their needs.
            </p>
          </div>
          <div className="belief">
            <p>
              A POSITIVE, INNOVATIVE <br /> <b>LEARNING</b> ENVIRONMENT<br/> <b>empowers</b>
              all of us to <br/> <i>GROW</i> through <b> RICH, AUTHENTIC <br/>RELATIONSHIPS</b> <br/> both
              locally & globally.
            </p>
          </div>
          <div className="belief">
            <p>
              together as a <b>COMMUNITY</b> of <br/> educators and leaders We share
              responsibility to INSPIRE our modern learners to be <b>ACTIVE,
              CRITICALLY</b> ENGAGED, GLOBAL CITIZENS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
