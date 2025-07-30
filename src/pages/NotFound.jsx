import "./NotFound.css";

export const NotFound = () => {
  return (
    <section className="notfound">
      <h1>404</h1>
      <p>Oops! The page you’re looking for doesn’t exist.</p>
      <a className="cta-button" href="/">
        Back to Home
      </a>
    </section>
  );
};
