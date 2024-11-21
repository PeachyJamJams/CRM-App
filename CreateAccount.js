import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/createaccount.css'; // Create a corresponding CSS file

const CreateAccount = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    setErrorMessage('');

    navigate('/');

    // ADD BACKEND INTEGRATION HERE
    console.log("Account created with:", email, password);
  };

  return (
    <div className="create-account-container">
      <h1>Create Account</h1>
      <form className="create-account-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
            className="floating-input"
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
            className="floating-input"
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder="Confirm Password"
            className="floating-input"
          />
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default CreateAccount;
