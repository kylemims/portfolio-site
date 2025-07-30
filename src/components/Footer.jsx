import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <p>&copy; {new Date().getFullYear()} Kyle Mims. All rights reserved.</p>
        <p>
          <a href="mailto:kylemims.dev@gmail.com">Email</a> |
          <a href="https://github.com/kylemims" target="_blank" rel="noreferrer">
            GitHub
          </a>{" "}
          |
          <a href="https://linkedin.com/in/kylemims-dev" target="_blank" rel="noreferrer">
            LinkedIn
          </a>{" "}
          |
          <a href="/assets/KyleMims-Dev-Resume.pdf" target="_blank" rel="noreferrer">
            Resume
          </a>
        </p>
      </div>
    </footer>
  );
};
