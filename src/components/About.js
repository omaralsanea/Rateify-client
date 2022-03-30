import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about">
      <div className="welcome">
        <h1>Welcome to ?????? </h1>
        <p>
          Our MERN Stack Project which was completed as part of General
          Assembly's software engineering immersive course.
        </p>
      </div>
      <div className="about">
        <h1>About Us</h1>
        <div className="profiles">
          <div className="Calum">
            <h2>Calum</h2>
            <p>
              <a
                href="https://github.com/calum-m708"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/calum-maceachen-b21847176/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </p>
            <img
              src="https://ca.slack-edge.com/T0351JZQ0-U02K9KRPQH2-e7c2fe998fcd-192"
              alt="Calum"
            />
          </div>
          <div className="Jack">
            <h2>Jack Black</h2>
            <p>
              <a
                href="https://github.com/jacktblack"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/j-t-black-a46800225/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </p>
            <img
              src="https://ca.slack-edge.com/T0351JZQ0-U02SQP54RLM-a550afb7c9a1-512"
              alt="Jack"
            />
          </div>
          <div className="Omar">
            <h2>Omar</h2>
            <p>
              <a
                href="https://github.com/omaralsanea"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/omar-al-sanea-b975ba107/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </p>
            <img
              src="https://ca.slack-edge.com/T0351JZQ0-U02TZ171VLY-adadeeb67eef-512"
              alt="Omar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
