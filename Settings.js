import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Settings.css';

const Settings = ({onLogout}) => {

  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('Logging out...');
    // Call the logout function passed as a prop
    onLogout(); 
    navigate('/'); // Navigate to the login or home screen after logging out
  };

  return (
    <div className="settings-container">
      <h1>Settings</h1>
      <p>Manage your preferences here.</p>

      <div className="settings-section">
        <h2>Profile Settings</h2>
        <button className="settings-button">Update Personal Info</button>
        <button className="settings-button">Change Password</button>
      </div>

      <div className="settings-section">
        <h2>App Preferences</h2>
        <label>
          <input type="checkbox" /> Enable Notification Counter
        </label>
        <label>
          <input type="checkbox" /> Text Notifications
        </label>
        <label>
          <input type="checkbox" /> Email Notifications
        </label>
      </div>

      <div className="settings-section">
        <h2>Support</h2>
        <button className="settings-button">Open Ticket</button>
      </div>

      <div className="settings-section">
        <h2>Account Management</h2>
        <button className="settings-button" onClick={handleLogout}>Logout</button>
      </div>

    </div>
  );
};

export default Settings;
