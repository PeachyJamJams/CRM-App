// Dashboard.js
import React, { useState, useEffect } from 'react';
import '../styles/dashboard.css';
import { useNavigate } from 'react-router-dom'; // Add this import
import { FaUsers, FaFileInvoice, FaTasks } from 'react-icons/fa';

const Dashboard = () => {

  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Navigate to the relevant page when a widget is clicked
  const handleCustomersClick = () => {
    navigate('/customers'); // Navigate to the customers page
  };

  const handleInvoicesClick = () => {
    navigate('/billing'); // Navigate to the invoices page
  };

  const handleTasksClick = () => {
    navigate('/task'); // Navigate to the tasks page
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="dashboard-widgets">
        <div className="widget-card">
          <FaUsers className="widget-icon users-icon" />
          <div className="widget-info">
            <h2>Total Customers</h2>
            <p>50</p>
          </div>
        </div>
        <div className="widget-card">
          <FaFileInvoice className="widget-icon invoices-icon" />
          <div className="widget-info">
            <h2>Pending Invoices</h2>
            <p>5</p>
          </div>
        </div>
        <div className="widget-card">
          <FaTasks className="widget-icon tasks-icon" />
          <div className="widget-info">
            <h2>Tasks Due Today</h2>
            <p>3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

