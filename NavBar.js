import React, { useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/navbar.css';

const NavBar = ({ onLogout }) => {
  const [isOpen, setIsOpen] = useState(false); // Toggle state
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle the sidebar
  };

  const handleLogout = () => {
    console.log('Logging out...');
    onLogout();

    //navigate('/');
  };

  const closeSidebar = () => {
    setIsOpen(false); // Automatically close sidebar when a link is clicked
  };

  return (
    <>
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

    <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
      <ul>
        <li><Link to="/dashboard" onClick={closeSidebar}>Dashboard</Link></li>
        <li><Link to="/customers" onClick={closeSidebar}>Customers</Link></li>
        <li><Link to="/schedule" onClick={closeSidebar}>Schedule</Link></li>
        <li><Link to="/timesheet" onClick={closeSidebar}>Timesheet</Link></li>
        <li><Link to="/task" onClick={closeSidebar}>Task</Link></li>
        <li><Link to="/notifications" onClick={closeSidebar}>Notifications</Link></li>
        <li><Link to="/billing" onClick={closeSidebar}>Billing</Link></li>
        <li><Link to="/communications" onClick={closeSidebar}>Communications</Link></li>
        <li><Link to="/settings" onClick={closeSidebar}>Settings</Link></li>
        <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
      </ul>
    </nav>
    </>
  );
};

export default NavBar;
