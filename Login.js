import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Login.css';
import jetLogo from '../assets/jet-logo.jpeg';


const Login = ({ onLogin }) => {
  const navigate = useNavigate(); // Initialize the navigate function
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  console.log("Login component is rendering");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (password.length < 8 || password.length > 20) {
      setErrorMessage('Password must be between 8 and 20 characters.');
      return;
    }

    onLogin(); // Pass from App.js

    // add  authentication logic (e.g., API call)
    console.log("Form submitted");

    // Navigate to the dashboard after successful login
    navigate('/dashboard'); // Navigate to the Dashboard
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };


  return (
    <div className="login-container">
      <h1>
        <i>JET CRM</i>
        <img src={jetLogo} alt="Jet Logo" className="logo" />
      </h1>
      <form className="login-Form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="floating-input"
            placeholder=" "
          />
          <label>Email</label>
        </div>
        <div className="input-group">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="floating-input"
            placeholder=" "
          />
          <label>Password</label>
        </div>
        <button type="submit">Login</button>
        <a href="/create-account" className="create-account">Create Account</a>

      </form>
    </div>
  );
};

export default Login;
