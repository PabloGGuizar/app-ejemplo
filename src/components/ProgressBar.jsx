import React from 'react';

const ProgressBar = ({ current, total }) => {
  const progressPercentage = (current / total) * 100;

  return (
    <div className="progress-bar-container">
      <div 
        className="progress-bar"
        style={{ width: `${progressPercentage}%` }}
      >
      </div>
    </div>
  );
};

export default ProgressBar;
