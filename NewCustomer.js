import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NewCustomer.css';

const CreateAccount = () => {
  const [customer, setCustomer] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  const handleSave = () => {
    // Simulate saving the customer to the database or state
    console.log('Customer saved:', customer);
    navigate('/task'); // Go back to Task page
  };

  return (
    <div className="create-account-container">
      <h1>Create/Edit Customer</h1>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={customer.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={customer.phone}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={customer.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={customer.address}
            onChange={handleInputChange}
          />
        </label>
        <button type="button" onClick={handleSave}>
          Save Customer
        </button>
      </form>
    </div>
  );
};

export default CreateAccount;
