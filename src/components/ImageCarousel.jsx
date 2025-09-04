// src/components/ImageCarousel.jsx
import { useState } from "react";
import "./ImageCarousel.css";

export const ImageCarousel = ({ images, altPrefix }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="image-carousel">
      <div className="carousel-container">
        <img
          src={images[currentIndex]}
          alt={`${altPrefix} ${currentIndex + 1}`}
          className="carousel-image"
          loading="lazy"
        />

        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="carousel-btn carousel-btn-prev"
              aria-label="Previous image">
              ←
            </button>
            <button onClick={nextImage} className="carousel-btn carousel-btn-next" aria-label="Next image">
              →
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="carousel-dots">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
