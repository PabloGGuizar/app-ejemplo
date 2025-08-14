import { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import QuizView from './components/QuizView';
import ThemeSwitcher from './components/ThemeSwitcher';
import './App.css';

function App() {
  const [quizzes, setQuizzes] = useState([]);
  const [currentView, setCurrentView] = useState('dashboard'); // 'dashboard' or 'quiz'
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [unlockedLevel, setUnlockedLevel] = useState(
    parseInt(localStorage.getItem('unlockedLevel') || '1', 10)
  );

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}quizzes.json`)
      .then(res => res.json())
      .then(data => {
        setQuizzes(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error fetching quizzes:", error);
        setIsLoading(false);
      });
  }, []);

  const handleSelectQuiz = (quiz) => {
    setSelectedQuiz(quiz);
    setCurrentView('quiz');
  };

  const handleQuizComplete = (wasSuccessful, completedLevel) => {
    if (wasSuccessful && completedLevel === unlockedLevel) {
      const nextLevel = unlockedLevel + 1;
      setUnlockedLevel(nextLevel);
      localStorage.setItem('unlockedLevel', nextLevel);
    }
    setCurrentView('dashboard');
    setSelectedQuiz(null);
  };

  const handleNextLevel = () => {
    const nextQuiz = quizzes.find(q => q.level === selectedQuiz.level + 1);
    if (nextQuiz) {
      // First, update progress as if we went back to the dashboard
      handleQuizComplete(true, selectedQuiz.level);
      // Then, immediately select the next quiz
      handleSelectQuiz(nextQuiz);
    }
  };

  const renderContent = () => {
    if (isLoading) {
      return <div className="quiz-wrapper">Cargando quizzes...</div>;
    }

    if (currentView === 'quiz') {
      const hasNextLevel = quizzes.some(q => q.level === selectedQuiz.level + 1);
      return (
        <QuizView 
          quiz={selectedQuiz} 
          onComplete={handleQuizComplete} 
          onNextLevel={handleNextLevel}
          hasNextLevel={hasNextLevel}
        />
      );
    }

    return (
      <Dashboard 
        quizzes={quizzes} 
        unlockedLevel={unlockedLevel} 
        onSelectQuiz={handleSelectQuiz} 
      />
    );
  }

  return (
    <div id="app">
      <ThemeSwitcher />
      {renderContent()}
    </div>
  );
}

export default App;