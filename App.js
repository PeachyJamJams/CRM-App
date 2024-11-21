import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CustomerList from './pages/CustomerList';
import NavBar from './components/NavBar';
import Loading from './components/Loading';
import CreateAccount from './pages/CreateAccount';
import Settings from './pages/Settings';
import Schedule from './pages/Schedule';
import Timesheet from './pages/Timesheet';
import Task from './pages/Task';
import Notifications from './pages/Notifications';
import CustomerDetails from './pages/CustomerDetails';
import Billing from './pages/QuotesInvoices';
import Communications from './pages/Communications';

console.log("App is rendering"); /* For debugging purposes if needed */

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedLoginStatus = sessionStorage.getItem('isLoggedIn');
    if (storedLoginStatus) {
      setIsLoggedIn(true); // Automatically set the login status if it's saved in sessionStorage
    }
  }, []);

  const handleLogin = () => {
    sessionStorage.setItem('isLoggedIn', 'true'); 
    setIsLoggedIn(true);
  }

  const handleLogout = () => {
    setLoading(true);
    console.log('Setting loading to true');

    setTimeout(() => {
      sessionStorage.removeItem('isLoggedIn');
      setIsLoggedIn(false);
      setLoading(false);
      console.log('Logging out complete');
      /* window.location.reload();  if needed */
    }, 2000);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Router>
      {isLoggedIn && <NavBar onLogout={handleLogout} />} 
      <Routes>
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        {isLoggedIn && (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/customers" element={<CustomerList />} />
            <Route path="/settings" element={<Settings onLogout={handleLogout} />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/timesheet" element={<Timesheet />} />
            <Route path="/task" element={<Task />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/customer-details" element={<CustomerDetails />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/communications" element={<Communications />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
