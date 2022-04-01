import React from 'react';
// import '../styles/About.css';

const About = () => {
  return (
    <section className="hero is-fullheight-with-navbar has-background-dark">
      <div className="about">
        <div className="welcome has-text-white has-text-centered is-size-3">
          <h1 className="mt-6 rateify">About Us</h1>
        </div>
        <div className="about container has-text-white pt-6 has-text-centered">
          <div className="profiles has-text-white pt-3 columns is-centered">
            <div className="Calum column is-narrow has-text-centered mx-6">
              <h2 className="is-size-4">Calum MacEachen</h2>
              <p>
                <a
                  href="https://github.com/calum-m708"
                  target="_blank"
                  rel="noreferrer"
                  className="has-text-success is-size-5"
                >
                  GitHub
                </a>
              </p>
              <p>
                <a
                  href="https://www.linkedin.com/in/calum-maceachen-b21847176/"
                  target="_blank"
                  rel="noreferrer"
                  className="has-text-success is-size-5"
                >
                  LinkedIn
                </a>
              </p>
              <figure className="image artist-img">
                <img
                  src="https://ca.slack-edge.com/T0351JZQ0-U02K9KRPQH2-e7c2fe998fcd-192"
                  alt="Calum"
                  className="is-rounded mt-3 about-pic"
                />
              </figure>
            </div>
            <div className="Jack column is-narrow has-text-centered mx-6">
              <h2 className="is-size-4">JT Black</h2>
              <p>
                <a
                  href="https://github.com/jacktblack"
                  target="_blank"
                  rel="noreferrer"
                  className="has-text-success is-size-5"
                >
                  GitHub
                </a>
              </p>
              <p>
                <a
                  href="https://www.linkedin.com/in/j-t-black-a46800225/"
                  target="_blank"
                  rel="noreferrer"
                  className="has-text-success is-size-5"
                >
                  LinkedIn
                </a>
              </p>
              <figure className="image artist-img">
                <img
                  src="https://ca.slack-edge.com/T0351JZQ0-U02SQP54RLM-a550afb7c9a1-512"
                  alt="JT Black"
                  className="is-rounded mt-3 about-pic"
                />
              </figure>
            </div>
            <div className="Omar column is-narrow has-text-centered mx-6">
              <h2 className="is-size-4">Omar Al-Sanea</h2>
              <p>
                <a
                  href="https://github.com/omaralsanea"
                  target="_blank"
                  rel="noreferrer"
                  className="has-text-success is-size-5"
                >
                  GitHub
                </a>
              </p>
              <p>
                <a
                  href="https://www.linkedin.com/in/omar-al-sanea-b975ba107/"
                  target="_blank"
                  rel="noreferrer"
                  className="has-text-success is-size-5"
                >
                  LinkedIn
                </a>
              </p>
              <figure className="image artist-img">
                <img
                  src="https://i.imgur.com/JPKo5b3.jpg"
                  alt="Omar"
                  className="is-rounded mt-3 about-pic"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
