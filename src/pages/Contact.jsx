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
          action="/thank-you"
          className="contact-form">
          {/* Hidden field for spam protection */}
          <input type="hidden" name="form-name" value="contact" />
          {/* <p className="hidden">
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p> */}

          <label>
            Name
            <input type="text" name="name" required />
          </label>

          <label>
            Email
            <input type="email" name="email" required />
          </label>

          <label>
            Message
            <textarea name="message" rows="5" required></textarea>
          </label>

          <button type="submit" className="cta-button">
            Send Message
          </button>
        </form>
        <ConfirmModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </Wrapper>
  );
};
