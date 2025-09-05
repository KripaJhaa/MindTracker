import React from 'react';

const SessionItem = ({ session, showActions = false }) => {
  return (
    <div className={`session-item ${session.status === 'completed' ? 'completed' : ''}`}>
      <div className="session-info">
        <h4>{session.mentor}</h4>
        <p>{session.date} at {session.time}</p>
        <p className="session-topic">{session.topic}</p>
      </div>
      {showActions ? (
        <div className="session-actions">
          <button className="btn-link">Join Call</button>
          <button className="btn-link">Reschedule</button>
        </div>
      ) : (
        <div className="session-status">
          <span className="status-badge completed">Completed</span>
        </div>
      )}
    </div>
  );
};

export default SessionItem;
