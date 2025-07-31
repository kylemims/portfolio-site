// src/pages/About.jsx
import "./About.css";
import { Wrapper } from "../components/Wrapper.jsx";

export const About = () => {
  return (
    <Wrapper>
      <h1 className="about-title">About Me</h1>
      <div className="about-page">
        <section className="about-container">
          <img src="/assets/headshot-km.png" alt="Kyle Mims profile" className="about-photo" />
          <div className="text-photo-wrapper">
            <p className="subheading">A creative journey from stage to screen</p>
            <p className="intro-text">
              Hey, I'm Kyle — a designer-turned-developer with a background in music, branding, and building
              unforgettable experiences.
            </p>
            <div className="about-paragraph">
              I spent years touring as a musician and running a high-energy fitness brand before making the
              leap into tech. Turns out, whether I'm launching a band, a business, or a web app — I live for
              bold ideas, clean design, and user-first thinking.
            </div>
          </div>
        </section>

        <section className="full-width-section">
          <h2>What I Value</h2>
          <div className="values-list">
            <div className="values-item">
              <p>
                <strong>Creative problem solving</strong>
                <br />I love turning a rough idea into something functional and beautiful.
              </p>
            </div>
            <div className="values-item">
              <p>
                <strong>Collaboration</strong>
                <br />I thrive when working with passionate teams and helping others shine.
              </p>
            </div>
            <div className="values-item">
              <p>
                <strong>User experience</strong>
                <br />
                If it doesn’t feel good to use, we’re not done yet.
              </p>
            </div>
            <div className="values-item">
              <p>
                <strong>Simplicity</strong>
                <br />
                Great design isn’t complicated. It’s just clear.
              </p>
            </div>
          </div>
        </section>

        <section className="skills-section">
          <div className="skill-grid"></div>
          <div className="skill-card">
            <h2>What I Build</h2>
            <p>
              I design and develop custom web apps using React and Django, create responsive websites with
              modern front-end frameworks, and build tools that make everyday work intuitive, useful, and
              empowering.
            </p>
          </div>

          <div className="skill-card">
            <h2>Outside the Code</h2>
            <p>
              I still play music, love a good design rabbit hole, and take a lot of pride in helping others
              feel seen and heard — whether that’s through a website or a well-timed playlist.
            </p>
          </div>

          <div className="skill-card">
            <h2>Let’s Connect</h2>
            <p>I’m always open to new projects, partnerships, or just a good conversation.</p>
            <a href="/contact" className="about-contact-link">
              Contact Me
            </a>
          </div>
        </section>
      </div>
    </Wrapper>
  );
};
