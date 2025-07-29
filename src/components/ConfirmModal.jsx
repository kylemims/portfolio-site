import "./ConfirmModal.css";

export const ConfirmModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Message Sent!</h2>
        <p>Thanks for reaching out — I’ll be in touch soon!</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
