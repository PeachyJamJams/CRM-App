// Timesheet.js
import React, { useState } from 'react';
import '../styles/Timesheet.css';

const Timesheet = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);
  const [startTime, setStartTime] = useState(null);

  const startTimer = () => {
    const now = new Date();
    setStartTime(now);
    setCurrentTask({ name: '', start: now, end: null, duration: '' });
  };

  const endTimer = () => {
    if (!currentTask) return;
    const now = new Date();
    const duration = ((now - startTime) / 1000 / 60).toFixed(2); // in minutes

    const updatedTask = { ...currentTask, end: now, duration };
    setTasks([...tasks, updatedTask]);
    setCurrentTask(null);
    setStartTime(null);
  };

  return (
    <div className="timesheet-container">
      <h1>Timesheet</h1>
      <div className="timer-controls">
        <button className="start-button" onClick={startTimer} disabled={currentTask !== null}>
          Start Timer
        </button>
        <button className="end-button" onClick={endTimer} disabled={currentTask === null}>
          End Timer
        </button>
      </div>
      <div className="tasks-list">
        {tasks.map((task, index) => (
          <div key={index} className="task-entry">
            <h3>Task {index + 1}</h3>
            <p><strong>Start:</strong> {task.start.toLocaleTimeString()}</p>
            <p><strong>End:</strong> {task.end ? task.end.toLocaleTimeString() : 'Ongoing'}</p>
            <p><strong>Duration:</strong> {task.duration} mins</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timesheet;

