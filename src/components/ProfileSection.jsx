import "./ProfileSection.css";

export const ProfileSection = () => {
  return (
    <section className="profile-section">
      <div className="profile-container">
        <img src="/assets/headshot-km.png" alt="Kyle Mims" className="profile-image" />
        <div className="profile-text">
          <h2>Let’s Build Something Meaningful</h2>
          <p>
            I'm Kyle — a designer-turned-developer based in Nashville. I build bold, user-driven apps with a
            sharp eye for detail and a deep love for clean, effective design. I'm always open to feedback,
            collaboration, and new opportunities to push creative boundaries.
          </p>
          <div className="profile-icon-row">
            <button
              className="cta-button"
              onClick={() => (window.location.href = "mailto:kylemims.dev@gmail.com")}>
              Send Feedback
            </button>
            <div className="icon-group">
              <a href="https://github.com/kylemims" target="_blank" rel="noopener noreferrer">
                <img src="/assets/github.svg" alt="GitHub" className="profile-icon" />
              </a>
              <a href="https://www.linkedin.com/in/kylemims/" target="_blank" rel="noopener noreferrer">
                <img src="/assets/linkedin.svg" alt="LinkedIn" className="profile-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
