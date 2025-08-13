import { useState } from 'react';
import ProgressBar from './ProgressBar';
import Quiz from './Quiz';
import Results from './Results';
import Lives from './Lives';
import FeedbackModal from './FeedbackModal';

const TOTAL_LIVES = 3;

const QuizView = ({ quiz, onComplete, onNextLevel, hasNextLevel }) => {
  const [questions] = useState(quiz.questions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(TOTAL_LIVES);
  const [showResults, setShowResults] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

  const handleAnswer = (isCorrect) => {
    setIsCorrectAnswer(isCorrect);
    if (isCorrect) {
      setScore(score + 1);
    } else {
      setLives(lives - 1);
    }
    setShowFeedback(true);
  };

  const handleModalTransitionEnd = () => {
    setShowFeedback(false);
    const outOfLives = lives - (isCorrectAnswer ? 0 : 1) <= 0;
    const isLastQuestion = currentQuestionIndex >= questions.length - 1;

    if (outOfLives || isLastQuestion) {
      setShowResults(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleBackToDashboard = () => {
    const wasCompletedSuccessfully = lives > 0 && showResults; // Only successful if they saw the results screen with lives > 0
    onComplete(wasCompletedSuccessfully, quiz.level);
  };

  return (
    <div className="quiz-wrapper">
      {showFeedback && 
        <FeedbackModal 
          isCorrect={isCorrectAnswer} 
          onTransitionEnd={handleModalTransitionEnd} 
        />
      }
      
      {!showResults ? (
        <>
          <div className="quiz-header">
            <button onClick={handleBackToDashboard} className="back-button">←</button>
            <h2>{quiz.title}</h2>
            <Lives count={lives} />
          </div>
          <ProgressBar current={currentQuestionIndex + 1} total={questions.length} />
          <Quiz 
            question={questions[currentQuestionIndex]} 
            onNext={handleAnswer} 
          />
        </>
      ) : (
        <Results 
          score={score} 
          total={questions.length} 
          onRestart={handleBackToDashboard} // Handles both "Try Again" and "Back to Dashboard"
          ranOutOfLives={lives <= 0}
          onNextLevel={onNextLevel}
          hasNextLevel={hasNextLevel}
        />
      )}
    </div>
  );
};

export default QuizView;