import React, { useEffect, useState } from 'react';
import './Notifications.css';

function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch('/api/notifications');
        const data = await response.json();
        setNotifications(data.notifications);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div className="card my-4">
      <div className="card-header bg-success text-white">
        <h3>Уведомления</h3>
      </div>
      <div className="card-body">
        <ul className="list-group">
          {notifications.map((notification, index) => (
            <li key={index} className="list-group-item">
              {notification.message}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Notifications;
