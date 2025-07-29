import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <p>
          <a href="mailto:your.email@example.com">Email</a> |
          <a href="https://github.com/yourusername">GitHub</a> |
          <a href="https://linkedin.com/in/yourusername">LinkedIn</a>
        </p>
      </div>
    </footer>
  );
};
