import { useState } from "react";
import { ConfirmModal } from "../components/ConfirmModal";
import { Wrapper } from "../components/Wrapper";
import "./Contact.css";

export const ContactPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    e.target.reset();
  };

  return (
    <Wrapper>
      <div className="contact-title">
        <h1>Contact</h1>
        <p>Reach out for collaborations or inquiries!</p>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="contact-form"
          onSubmit={handleSubmit}>
          {/* Netlify form detection */}
          <input type="hidden" name="form-name" value="contact" />

          {/* Honeypot field - hidden from users, visible to bots */}
          <div className="sr-only">
            <label htmlFor="bot-field">
              Don't fill this out if you're human:
              <input type="text" name="bot-field" id="bot-field" tabIndex="-1" autoComplete="off" />
            </label>
          </div>

          <label htmlFor="name">
            Name
            <input type="text" name="name" id="name" required />
          </label>

          <label htmlFor="email">
            Email
            <input type="email" name="email" id="email" required />
          </label>

          <label htmlFor="message">
            Message
            <textarea name="message" id="message" rows="5" required></textarea>
          </label>

          <button type="submit" className="submit-contact-form-button">
            Send Message
          </button>
        </form>
        <ConfirmModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </Wrapper>
  );
};
