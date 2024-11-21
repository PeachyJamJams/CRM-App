// Notifications.js
import React, { useState, useEffect } from 'react';
import '../styles/Notifications.css';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Replace this with API call to fetch notifications
    const fetchNotifications = async () => {
      const data = [
        { id: 1, title: 'Task Reminder', message: 'Window cleaning for John Doe tomorrow', date: '2024-10-31', read: false },
        { id: 2, title: 'New Request', message: 'New service request from Jane Smith', date: '2024-10-30', read: true },
        { id: 3, title: 'Upcoming Deadline', message: 'Invoice deadline for customer #123', date: '2024-10-29', read: false },
      ];
      setNotifications(data);
    };

    fetchNotifications();
  }, []);

  const markAsRead = (id) => {
    setNotifications(notifications.map((notification) =>
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="notifications-container">
      <h1>Notifications</h1>

      {notifications.length === 0 ? (
        <p>No new notifications</p>
      ) : (
        <ul className="notifications-list">
          {notifications.map((notification) => (
            <li
              key={notification.id}
              className={notification.read ? 'notification read' : 'notification unread'}
            >
              <h3>{notification.title}</h3>
              <p>{notification.message}</p>
              <p className="notification-date">{notification.date}</p>
              {!notification.read && (
                <button onClick={() => markAsRead(notification.id)}>Mark as Read</button>
              )}
            </li>
          ))}
        </ul>
      )}

      {notifications.length > 0 && (
        <button className="clear-button" onClick={clearNotifications}>
          Clear All
        </button>
      )}
    </div>
  );
};

export default Notifications;

