import React from 'react';
import SessionItem from './SessionItem';

const SessionList = ({ sessions, title, showActions = false, emptyMessage = "No sessions" }) => {
  const filteredSessions = showActions
    ? sessions.filter(s => s.status === 'scheduled')
    : sessions.filter(s => s.status === 'completed');

  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="session-list">
        {filteredSessions.length > 0 ? (
          filteredSessions.map((session) => (
            <SessionItem
              key={session.id}
              session={session}
              showActions={showActions}
            />
          ))
        ) : (
          <p className="no-sessions">{emptyMessage}</p>
        )}
      </div>
    </div>
  );
};

export default SessionList;
