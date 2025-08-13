import React from 'react';

const Results = ({ score, total, onRestart, ranOutOfLives, onNextLevel, hasNextLevel }) => {
  const success = !ranOutOfLives;

  return (
    <div className="results-container">
      <h2>{success ? '¡Quiz Completado!' : '¡Te quedaste sin vidas!'}</h2>
      <p>Tu puntuación final es:</p>
      <p className="score">{score} / {total}</p>
      
      {success ? (
        hasNextLevel ? (
          <button onClick={onNextLevel}>Siguiente Nivel</button>
        ) : (
          <button onClick={onRestart}>Volver al Tablero</button>
        )
      ) : (
        <button onClick={onRestart}>Intentar de Nuevo</button>
      )}
    </div>
  );
};

export default Results;