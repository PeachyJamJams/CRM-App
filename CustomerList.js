import React from 'react';
import '../styles/customerlist.css';


const CustomerList = () => {
  return (
    <div>
      <h1>Customer List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>johndoe@example.com</td>
            <td>(123) 456-7890</td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>janesmith@example.com</td>
            <td>(987) 654-3210</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;
