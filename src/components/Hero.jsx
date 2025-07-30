import "./Hero.css";
// import headshot from "/assets/headshot.png";

export const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container hero-content">
          <h1>
            Hi, I'm Kyle.
            <br />I Design & Build Digital Experiences.
          </h1>
          <p>A creative developer blending bold design with clean, user-focused code.</p>
          <a href="/websites-apps" className="cta-button">
            View My Work
          </a>
        </div>
      </section>

      {/* <section className="intro">
        <div className="intro-container">
          <div className="intro-image">
            <img src={headshot} alt="Kyle Mims smiling" />
          </div>
          <div className="intro-text">
            <h3>Let’s Make Something Cool Together</h3>
            <p>
              I’m a former creative entrepreneur turned software developer with a deep love for bold design,
              clean UI, and building things that make people say “whoa.” Whether I’m building pizza apps or
              park planners, I’m obsessed with the details and always thinking about the user experience.
            </p>
            <p>
              This site is built with intention—from the projects to the pixels. I’d love your feedback,
              ideas, or just a hello.
            </p>
            <a className="feedback-button" href="mailto:kylemims.dev@gmail.com">
              Send Me Feedback
            </a>
          </div>
        </div>
      </section> */}
    </>
  );
};
