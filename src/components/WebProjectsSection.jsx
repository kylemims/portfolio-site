// WebProjectsSection.jsx

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./WebProjectsSection.css";

export const WebProjectsSection = () => {
  const pizzaImages = [
    "/assets/pizza/pizza-hero.png",
    "/assets/pizza/pizza-builder-1.png",
    "/assets/pizza/pizza-builder-2.png",
    "/assets/pizza/inventory.png",
    "/assets/pizza/order-list.png",
    "/assets/pizza/reports.png",
  ];

  const parkImages = [
    "/assets/pickapark/park-welcome.png",
    "/assets/pickapark/park-tripdash.png",
    "/assets/pickapark/park-preview.png",
    "/assets/pickapark/park-activities.png",
    "/assets/pickapark/park-campground.png",
    "/assets/pickapark/park-finder.png",
    "/assets/pickapark/park-details.png",
  ];

  return (
    <section className="web-projects">
      <h2 className="section-title">Websites & Apps</h2>
      <div className="project-row">
        {/* Punk Rock Pizza */}
        <div className="project-card">
          <h3 className="project-title">PUNK ROCK PIZZA</h3>
          <p className="project-description">
            Custom pizza-ordering app with React, dynamic pricing, inventory tracking, and order reports.
          </p>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            loop
            spaceBetween={20}
            className="swiper-wrapper">
            {pizzaImages.map((src, index) => (
              <SwiperSlide key={index}>
                <img src={src} alt={`Pizza Slide ${index + 1}`} className="slide-image" />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="project-links">
            <a
              href="https://github.com/kylemims/punk-pizza"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button">
              View Code
            </a>
            <a
              href="https://pizza.kylemims.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button">
              View Live
            </a>
          </div>
        </div>

        {/* Pick A Park */}
        <div className="project-card">
          <h3 className="project-title">PICK A PARK</h3>
          <p className="project-description">
            National park itinerary planner with React, NPS API integration, weather filters, and PDF/email
            sharing.
          </p>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            loop
            spaceBetween={20}
            className="swiper-wrapper">
            {parkImages.map((src, index) => (
              <SwiperSlide key={index}>
                <img src={src} alt={`Park Slide ${index + 1}`} className="slide-image" />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="project-links">
            <a
              href="https://github.com/kylemims/pick-a-park"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button">
              View Code
            </a>
            <a
              href="https://pickapark.kylemims.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button">
              View Live
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
