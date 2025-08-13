import React from 'react';

const Lives = ({ count }) => {
  return (
    <div className="lives-container">
      <span>Vidas: </span>
      {[...Array(count)].map((_, i) => (
        <span key={i} className="heart">❤️</span>
      ))}
    </div>
  );
};

export default Lives;
