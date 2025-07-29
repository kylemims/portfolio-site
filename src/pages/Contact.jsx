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
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" required />
          </label>
          <label>
            Email:
            <input type="email" required />
          </label>
          <label>
            Message:
            <textarea required></textarea>
          </label>
          <button type="submit">Send Message</button>
        </form>

        <ConfirmModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </Wrapper>
  );
};
