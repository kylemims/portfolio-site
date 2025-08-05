import { Wrapper } from "../components/Wrapper";
import { GraphicDesignGallery } from "../components/GraphicDesignGallery.jsx";
import { GalleryModal } from "../components/GalleryModal.jsx";
import { NavLink } from "react-router-dom";
import "./GraphicDesignProjects.css";

const GraphicDesignPage = () => (
  <Wrapper>
    <h1 className="graphic-page-title">Graphic Design</h1>

    <GraphicDesignGallery />
    <section className="branding-section">
      <h2 className="branding-title">Branding Projects</h2>
      <div className="branding-grid">
        <div className="project">
          <img
            src="/assets/graphic-design/NR-branding.png"
            alt="Poster"
            className="branding-image poster-design"
          />
        </div>
        <div className="project">
          <img
            src="/assets/graphic-design/NR-release.png"
            alt="Logo"
            className="branding-image logo-design"
          />
        </div>
        <GalleryModal />
      </div>
      <p className="branding-description">BRAND STRATEGY & LOGO DESIGN</p>
    </section>
    <section className="passion-section">
      <div className="passion-content">
        <h2 className="passion-title">PUSHING CREATIVE BOUNDARIES</h2>
        <p className="passion-text">
          My passion lies in crafting apparel designs that tell stories and building brand identities that
          break conventions. Every piece is an opportunity to challenge the status quo and create something
          that resonates on a deeper level.
        </p>
        <div className="passion-cta">
          <NavLink to="/contact" className="passion-button primary">
            Let's Create Something Bold
          </NavLink>
          <NavLink to="/about" className="passion-button secondary">
            Learn More About My Process
          </NavLink>
        </div>
      </div>
    </section>
  </Wrapper>
);
export default GraphicDesignPage;
