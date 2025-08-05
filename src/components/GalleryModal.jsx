// src/components/GalleryModal.jsx

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./ConfirmModal.css";

export const GalleryModal = ({ isOpen, onClose, images, startIndex = 0 }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          navigation
          pagination={{ clickable: true, dynamicBullets: true }}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          loop
          initialSlide={startIndex}
          spaceBetween={30}>
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img src={src} alt={`Slide ${index + 1}`} loading="lazy" />
            </SwiperSlide>
          ))}
        </Swiper>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
