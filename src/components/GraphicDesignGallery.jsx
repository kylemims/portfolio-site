import { useState, useEffect } from "react";
import { GalleryModal } from "../components/GalleryModal";
import "./GraphicDesignGallery.css";

const designs = [
  {
    name: "Mad Brains",
    thumb: "/assets/graphic-design/brains-thumbnail.webp",
    full: "/assets/graphic-design/brains-feature.webp",
  },
  {
    name: "Panthered",
    thumb: "/assets/graphic-design/panther-thumbnail.webp",
    full: "/assets/graphic-design/panther-feature.webp",
  },
  {
    name: "Over The Influence",
    thumb: "/assets/graphic-design/boldsnake-thumbnail.webp",
    full: "/assets/graphic-design/boldsnake-feature.webp",
  },
  {
    name: "Mark Stuart",
    thumb: "/assets/graphic-design/Mark-Stuart-thumbnail.webp",
    full: "/assets/graphic-design/Mark-Stuart-feature.webp",
  },
  {
    name: "Wild Thoughts",
    thumb: "/assets/graphic-design/snakebrain-thumbnail.webp",
    full: "/assets/graphic-design/snakebrain-feature.webp",
  },
  {
    name: "Underdogs",
    thumb: "/assets/graphic-design/curve-feature.webp",
    full: "/assets/graphic-design/curve-feature.webp",
  },
  {
    name: "Stay Classy",
    thumb: "/assets/graphic-design/crewsnake-thumbnail.webp",
    full: "/assets/graphic-design/crewsnake-feature.webp",
  },
  {
    name: "No Roses est.2025",
    thumb: "/assets/graphic-design/no-roses-main-thumbnail.webp",
    full: "/assets/graphic-design/no-roses-main-feature.webp",
  },
  {
    name: "TTD",
    thumb: "/assets/graphic-design/Baseball-NR-thumbnail.webp",
    full: "/assets/graphic-design/Baseball-NR-feature.webp",
  },
];

export const GraphicDesignGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeImages, setActiveImages] = useState([]);

  const openModal = (clickedIndex) => {
    const allFullImages = designs.map((design) => design.full);
    setActiveImages(allFullImages);
    setStartIndex(clickedIndex);
    setIsOpen(true);
  };

  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen]);

  return (
    <>
      <div className="projects-grid">
        {designs.map((design, index) => (
          <div key={index} className="gallery-thumbnail" onClick={() => openModal(index)}>
            <img src={design.thumb} alt={design.name} />
            <div className="image-overlay">
              <span className="image-title">{design.name}</span>
            </div>
          </div>
        ))}
      </div>
      <GalleryModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        images={activeImages}
        startIndex={startIndex}
      />
    </>
  );
};
