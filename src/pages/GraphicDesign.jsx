import { Wrapper } from "../components/Wrapper";
import { GraphicDesignGallery } from "../components/GraphicDesignGallery.jsx";

export const GraphicDesignPage = () => (
  <Wrapper>
    <h1>Graphic Design</h1>

    <GraphicDesignGallery />

    <div className="projects-grid">
      <div className="project">
        <h2>Poster Design</h2>
        <img src="/assets/graphic1.jpg" alt="Poster" />
        <p>A bold street-inspired poster design.</p>
        <a href="#">View Full Image</a>
      </div>
      <div className="project">
        <h2>Logo Design</h2>
        <img src="/assets/graphic2.jpg" alt="Logo" />
        <p>A gritty logo for an urban brand.</p>
        <a href="#">View Full Image</a>
      </div>
    </div>
  </Wrapper>
);
