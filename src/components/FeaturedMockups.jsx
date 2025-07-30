// FeaturedMockups.jsx

import "./FeaturedMockups.css";
import { useEffect, useRef } from "react";

export const FeaturedMockups = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("mockup-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const mockups = [
    {
      img: "/assets/punk-pizza-iphone.png",
      title: "Punk Rock Pizza",
      desc: "Custom pizza ordering app with React & dynamic pricing logic.",
    },
    {
      img: "/assets/pickapark-iphone.png",
      title: "Pick A Park",
      desc: "National Park trip planner with activity recommendations.",
    },
  ];

  return (
    <section className="featured-mockups">
      <div>
        <h2>Featured Projects</h2>
        <div className="mockup-grid">
          {mockups.map((mockup, index) => (
            <div className="mockup-card" key={index} ref={(el) => (cardsRef.current[index] = el)}>
              <div className="project-info">
                <h3>{mockup.title}</h3>
                <p>{mockup.desc}</p>
                <a href="/websites-apps" className="info-cta">
                  View Details
                </a>
              </div>
              <img src={mockup.img} alt={mockup.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// <div className="mockup-card" key={index} ref={(el) => (cardsRef.current[index] = el)}>
//   <img src={mockup.img} alt={mockup.title} />
//   <h3>{mockup.title}</h3>
//   <p>{mockup.desc}</p>
// </div>
