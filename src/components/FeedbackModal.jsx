import React, { useEffect } from 'react';

const FeedbackModal = ({ isCorrect, onTransitionEnd }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onTransitionEnd();
    }, 1500);

    return () => clearTimeout(timer);
  }, [onTransitionEnd]);

  const message = isCorrect ? '¡Correcto!' : '¡Incorrecto!';
  const modalClass = isCorrect ? 'feedback-modal correct' : 'feedback-modal incorrect';

  return (
    <div className="modal-overlay">
      <div className={modalClass}>
        <h2>{message}</h2>
      </div>
    </div>
  );
};

export default FeedbackModal;
