import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { useNavigate } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';

const Schedule = () => {
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([{ id: 1, name: "Task 1" }, { id: 2, name: "Task 2" }]);



  const onDateChange = (newDate) => {
    setDate(newDate);
    // Optional: Fetch tasks/events for the selected date here
  };

  const handleTaskClick = (taskId) => {
    navigate(`/task/${taskId}`); // Navigate to Task.js page with task ID
  };

  return (
    <div className="schedule-container">
      <h1>Schedule</h1>
      <Calendar
        onChange={onDateChange}
        value={date}
      />
      <div className="task-details">
        <h2>Tasks for {date.toDateString()}</h2>
        <ul>
          {tasks.map((task) => (
            <li key={task.id} onClick={() => handleTaskClick(task.id)}>
              {task.name}
            </li>
          ))}
        </ul>
        <button className="add-task-button">Add Task</button>
      </div>
    </div>
  );
};

export default Schedule;