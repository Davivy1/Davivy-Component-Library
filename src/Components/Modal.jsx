import { useState } from 'react'

function Modal({ buttonLabel }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button className="btn btn-primary" onClick={() => setIsOpen(true)}>
        {buttonLabel}
      </button>

      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsOpen(false)}>✕</button>
            <h2 className="modal-title">Experience Davivy</h2>
            <p className="modal-text">Limited edition bottles available now. Order yours today.</p>
            <button className="btn btn-primary" onClick={() => setIsOpen(false)}>
              Shop Now
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal