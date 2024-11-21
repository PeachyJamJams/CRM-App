// src/components/Loading.js
import React from 'react';
import '../styles/Loading.css';

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-circle"></div>
      <h2>Logging out...</h2>
    </div>
  );
};

export default Loading;
