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

  const vividImages = [
    "/assets/vivid/vivid-dashboard.png",
    "/assets/vivid/vivid-crm.png",
    "/assets/vivid/vivid-social.png",
    "/assets/vivid/vivid-email.png",
  ];

  return (
    <section className="web-projects">
      <h1 className="section-title">Websites & Apps</h1>
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
              className="webapp-feature-buttons">
              View Code
            </a>
            <a
              href="https://pizza.kylemims.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="webapp-feature-buttons">
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
              href="https://github.com/kylemims/parkplan-capstone"
              target="_blank"
              rel="noopener noreferrer"
              className="webapp-feature-buttons">
              View Code
            </a>
            <a
              href="https://pickapark.kylemims.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="webapp-feature-buttons">
              View Live
            </a>
          </div>
        </div>
        {/* Vivid Platform (Wish List) */}
        <div className="project-card">
          <h3 className="project-title">VIVID</h3>
          <p className="project-description">
            Vision for an all-in-one business platform: CRM, marketing suite, booking, billing & analytics in
            a single elegant dashboard.
          </p>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            loop
            spaceBetween={20}
            className="swiper-wrapper">
            {vividImages.map((src, index) => (
              <SwiperSlide key={index}>
                <img src={src} alt={`Vivid Slide ${index + 1}`} className="slide-image" />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="project-links">
            <a href="/contact" target="_blank" rel="noopener noreferrer" className="webapp-feature-buttons">
              Wanna Colab?
            </a>
            <a href="/contact" target="_blank" rel="noopener noreferrer" className="webapp-feature-buttons">
              Coming soon
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
