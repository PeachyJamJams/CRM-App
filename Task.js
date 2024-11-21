// Task.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Timer from './Timer'; 
import '../styles/Task.css';

const Task = () => {
  const [task, setTask] = useState({
    jobType: 'Plumbing',
    comments: '',
    lineItems: [],
    isComplete: false,
    customer: {
      name: 'John Doe',
      phone: '123-456-7890',
      email: 'john@example.com',
      address: '123 Main St',
    },
  });

  const navigate = useNavigate();

  const handleCustomerEdit = () => {
    navigate('/create-account'); // Navigate to CreateAccount page
  };

  const toggleJobCompletion = () => {
    setTask((prevTask) => ({ ...prevTask, isComplete: !prevTask.isComplete }));
  };

  return (
    <div className="task-container">
      <h1>Task Details</h1>

      {/* Customer Information */}
      <div className="customer-info">
        <h2>Customer Information</h2>
        <p>Name: {task.customer.name}</p>
        <p>Phone: {task.customer.phone}</p>
        <p>Email: {task.customer.email}</p>
        <p>Address: {task.customer.address}</p>
        <button onClick={handleCustomerEdit}>Add/Edit Customer</button>
      </div>

      {/* Task Details */}
      <div className="job-info">
        <h2>Job Information</h2>
        <label>
          Job Type:
          <select
            value={task.jobType}
            onChange={(e) => setTask({ ...task, jobType: e.target.value })}
          >
            <option value="Plumbing">Plumbing</option>
            <option value="Electrical">Electrical</option>
            <option value="Carpentry">Carpentry</option>
          </select>
        </label>

        <label>
          Comments:
          <textarea
            value={task.comments}
            onChange={(e) => setTask({ ...task, comments: e.target.value })}
          />
        </label>

        <Timer />

        <label>
          <input
            type="checkbox"
            checked={task.isComplete}
            onChange={toggleJobCompletion}
          />
          Job Complete
        </label>

        <button onClick={() => alert('Save Task Changes')}>Save Changes</button>
      </div>
    </div>
  );
};

export default Task;


