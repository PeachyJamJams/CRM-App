// Communications.js
import React, { useState } from 'react';
import '../styles/Communications.css';

const Communications = () => {
  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const [message, setMessage] = useState('');
  const [communicationType, setCommunicationType] = useState('Email');
  const [status, setStatus] = useState('');

  const customers = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    // Add more customers
  ];

  const handleCustomerChange = (e) => {
    const selected = Array.from(e.target.selectedOptions, (option) => option.value);
    setSelectedCustomers(selected);
  };

  const handleSendMessage = () => {
    // Test
    if (selectedCustomers.length && message) {
      setStatus(`Sent ${communicationType} successfully to ${selectedCustomers.join(', ')}`);
    } else {
      setStatus('Please select customers and write a message.');
    }
  };

  return (
    <div className="communications-container">
      <h1>Communications</h1>

      {/* Customer Selection */}
      <label>Select Customers:</label>
      <select multiple onChange={handleCustomerChange}>
        {customers.map((customer) => (
          <option key={customer.id} value={customer.name}>
            {customer.name} ({customer.email})
          </option>
        ))}
      </select>

      {/* Communication Type Selection */}
      <div className="communication-type">
        <label>Choose Communication Type:</label>
        <div className="buttons">
          <button onClick={() => setCommunicationType('Email')}>Email</button>
          <button onClick={() => setCommunicationType('Text')}>Text</button>
          <button onClick={() => setCommunicationType('Voicemail')}>Voicemail</button>
        </div>
      </div>

      {/* Message Input */}
      <label>Message:</label>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={`Write your ${communicationType.toLowerCase()} here...`}
      />

      {/* Send Button */}
      <button onClick={handleSendMessage} className="send-button">
        Send {communicationType}
      </button>

      {/* Status Display */}
      {status && <p className="status">{status}</p>}
    </div>
  );
};

export default Communications;
