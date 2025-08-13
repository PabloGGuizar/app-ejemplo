import React from 'react';

const QuizCard = ({ quiz, isLocked, isCompleted, isFinalLevel, onSelectQuiz }) => {
  const cardClasses = isLocked ? 'quiz-card locked' : 'quiz-card';

  const getAchievementIcon = () => {
    if (!isCompleted) return null;
    if (isFinalLevel) return '🏆';
    return '🏅';
  };

  return (
    <div className={cardClasses} onClick={() => !isLocked && onSelectQuiz(quiz)}>
      {isCompleted && <div className="achievement-icon">{getAchievementIcon()}</div>}
      <div className="quiz-card-level">Nivel {quiz.level}</div>
      <h3 className="quiz-card-title">{quiz.title}</h3>
      {isLocked && <div className="lock-icon">🔒</div>}
    </div>
  );
};

const Dashboard = ({ quizzes, unlockedLevel, onSelectQuiz }) => {
  const totalQuizzes = quizzes.length;

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Maestría en Conectores</h1>
      <div className="dashboard-grid">
        {quizzes.map(quiz => {
          const isCompleted = quiz.level < unlockedLevel;
          const isFinalLevel = quiz.level === totalQuizzes;
          return (
            <QuizCard 
              key={quiz.id}
              quiz={quiz}
              isLocked={quiz.level > unlockedLevel}
              isCompleted={isCompleted}
              isFinalLevel={isFinalLevel}
              onSelectQuiz={onSelectQuiz}
            />
          )
        })}
      </div>
    </div>
  );
};

export default Dashboard;