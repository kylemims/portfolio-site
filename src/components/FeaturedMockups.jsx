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

    const cards = cardsRef.current.slice(); // Copy current ref value

    cards.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cards.forEach((card) => {
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
        <h2 className="featured-title">Featured Projects</h2>
        <div className="tech-showcase">
          <span className="highlight-tech">Full-Stack Developer</span>
          <span className="highlight-tech">JavaScript</span>
          <span className="highlight-tech">React</span>
          <span className="highlight-tech">Python</span>
          <span className="highlight-tech">Django</span>
        </div>
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
              <img src={mockup.img} alt={mockup.title} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
