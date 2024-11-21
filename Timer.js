import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0); // Time in seconds

  useEffect(() => {
    let interval;
    if (isRunning) {
      // Start the timer if it's running
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000); // Update every second
    } else {
      // Stop the timer if it's not running
      clearInterval(interval);
    }

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setTime(0); // Reset the timer to 0
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    return `${hours}:${minutes % 60}:${seconds % 60}`; // HH:MM:SS
  };

  return (
    <div className="timer">
      <h2>Task Timer</h2>
      <p>{formatTime(time)}</p>
      <button onClick={handleStartStop}>
        {isRunning ? 'Stop Timer' : 'Start Timer'}
      </button>
      <button onClick={handleReset}>Reset Timer</button>
    </div>
  );
};

export default Timer;
