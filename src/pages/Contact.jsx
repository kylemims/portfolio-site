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
      <div>
        <h1>Contact</h1>
        <p>Reach out for collaborations or inquiries!</p>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="contact-form">
          {/* Required hidden input for Netlify */}
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />

          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />

          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="5" required></textarea>

          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
        <ConfirmModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </Wrapper>
  );
};
