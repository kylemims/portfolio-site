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
    </>
  );
};
