// CustomerDetails.js
import React, { useState, useEffect } from 'react';
import '../styles/CustomerDetails.css';

const CustomerDetails = ({ customerId }) => {
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    // Replace this with API call to fetch customer data by ID
    const fetchCustomer = async () => {
      // Simulated data for now
      const data = {
        id: 1,
        name: 'John Doe',
        phone: '123-456-7890',
        email: 'john@example.com',
        address: '123 Main St, Springfield',
        jobHistory: [
          { id: 1, jobType: 'Window Cleaning', date: '2024-10-01', status: 'Completed' },
          { id: 2, jobType: 'Gutter Cleaning', date: '2024-09-15', status: 'Completed' },
        ],
        notes: 'Loyal customer, prefers morning appointments.',
      };
      setCustomer(data);
    };

    fetchCustomer();
  }, [customerId]);

  if (!customer) {
    return <div>Loading...</div>;
  }

  return (
    <div className="customer-details-container">
      <h1>Customer Profile</h1>

      <div className="customer-info">
        <h2>{customer.name}</h2>
        <p><strong>Phone:</strong> {customer.phone}</p>
        <p><strong>Email:</strong> {customer.email}</p>
        <p><strong>Address:</strong> {customer.address}</p>
      </div>

      <div className="job-history">
        <h3>Job History</h3>
        <ul>
          {customer.jobHistory.map((job) => (
            <li key={job.id}>
              <p><strong>Job Type:</strong> {job.jobType}</p>
              <p><strong>Date:</strong> {job.date}</p>
              <p><strong>Status:</strong> {job.status}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="notes">
        <h3>Notes</h3>
        <p>{customer.notes}</p>
      </div>

      <button className="edit-button">Edit Customer Details</button>
    </div>
  );
};

export default CustomerDetails;
