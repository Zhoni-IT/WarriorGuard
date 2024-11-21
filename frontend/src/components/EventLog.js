import React, { useEffect, useState } from 'react';
import './EventLog.css';

function EventLog() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/events');
        const data = await response.json();
        setEvents(data.events);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="card my-4">
      <div className="card-header bg-warning text-dark">
        <h3>Логи событий</h3>
      </div>
      <div className="card-body">
        <table className="table table-hover">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Время</th>
              <th>Тип события</th>
              <th>Описание</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id}>
                <td>{event.id}</td>
                <td>{event.timestamp}</td>
                <td>{event.event_type}</td>
                <td>{event.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EventLog;
