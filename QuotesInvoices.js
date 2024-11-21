// QuotesInvoices.js
import React, { useState, useEffect } from 'react';
import '../styles/QuotesInvoices.css';

const QuotesInvoices = () => {
  const [quotesInvoices, setQuotesInvoices] = useState([]);

  useEffect(() => {
    // Replace this with an API call to fetch quotes and invoices
    const fetchQuotesInvoices = async () => {
      // Sample data for demonstration
      const data = [
        { id: 1, type: 'Invoice', customer: 'John Doe', amount: 200.00, status: 'Paid', date: '2024-10-30' },
        { id: 2, type: 'Quote', customer: 'Jane Smith', amount: 150.00, status: 'Pending', date: '2024-10-28' },
        { id: 3, type: 'Invoice', customer: 'David Johnson', amount: 300.00, status: 'Overdue', date: '2024-10-25' },
      ];
      setQuotesInvoices(data);
    };

    fetchQuotesInvoices();
  }, []);

  return (
    <div className="quotes-invoices-container">
      <h1>Quotes & Invoices</h1>
      <button className="new-button">Create New Quote/Invoice</button>
      
      <ul className="quotes-invoices-list">
        {quotesInvoices.map((item) => (
          <li key={item.id} className={`quote-invoice ${item.status.toLowerCase()}`}>
            <h3>{item.type} for {item.customer}</h3>
            <p><strong>Amount:</strong> ${item.amount.toFixed(2)}</p>
            <p><strong>Status:</strong> {item.status}</p>
            <p><strong>Date:</strong> {item.date}</p>
            <button className="view-edit-button">View/Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuotesInvoices;

