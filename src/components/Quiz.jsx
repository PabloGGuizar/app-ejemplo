import React, { useState, useRef, useEffect } from 'react';

const Quiz = ({ question, onNext }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const optionsRef = useRef(null);

  useEffect(() => {
    setSelectedOption(null);
    setIsAnswered(false);
    setIsCorrect(null);
  }, [question]);

  const handleOptionClick = (option) => {
    if (isAnswered) return;

    setSelectedOption(option);
    setIsAnswered(true);
    const correct = option.isCorrect;
    setIsCorrect(correct);
    onNext(correct);
  };

  const getButtonClass = (option) => {
    if (!isAnswered) return 'option-button';
    if (option.id === selectedOption.id) {
      return option.isCorrect ? 'correct' : 'incorrect';
    }
    if (option.isCorrect) {
      return 'correct-unselected';
    }
    return 'option-button';
  };

  return (
    <div className="quiz-container">
      <h2 className="question-text">{question.text}</h2>
      <div className="options-grid" ref={optionsRef}>
        {question.options.map((option) => (
          <button
            key={option.id}
            className={getButtonClass(option)}
            onClick={() => handleOptionClick(option)}
            disabled={isAnswered}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
