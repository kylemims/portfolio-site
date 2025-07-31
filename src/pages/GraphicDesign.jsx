import { Wrapper } from "../components/Wrapper";
import { GraphicDesignGallery } from "../components/GraphicDesignGallery.jsx";
import { GalleryModal } from "../components/GalleryModal.jsx";
import "./GraphicDesignProjects.css";

export const GraphicDesignPage = () => (
  <Wrapper>
    <h1 className="graphic-page-title">Graphic Design</h1>

    <GraphicDesignGallery />
    <section className="branding-section">
      <h2 className="branding-title">Branding Projects</h2>
      <div className="branding-grid">
        <div className="project">
          <h2>Brand Strategy</h2>
          <img
            src="/assets/graphic-design/NR-branding.png"
            alt="Poster"
            className="branding-image poster-design"
          />
          <p>A bold street-inspired poster design.</p>
        </div>
        <div className="project">
          <h2>Logo Design</h2>
          <img
            src="/assets/graphic-design/NR-release.png"
            alt="Logo"
            className="branding-image logo-design"
          />
          <p>A gritty logo for an urban brand.</p>
        </div>
        <GalleryModal />
      </div>
    </section>
  </Wrapper>
);
