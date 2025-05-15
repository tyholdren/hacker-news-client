import { createPortal } from 'react-dom';

export default function Portal({ toggleShowPortal }) {
  return createPortal(
    <div className="modal">
      <div className="modal-content">
        <span>Portal</span>
        <button onClick={() => toggleShowPortal(false)}>X</button>
      </div>
    </div>,
    document.body
  );
}
