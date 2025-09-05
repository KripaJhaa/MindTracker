import React from 'react';
import MentorCard from './MentorCard';

const MentorDirectory = ({ mentors, onBookSession }) => {
  return (
    <div className="card">
      <h3 className="card-header">👥 Choose Your Mentor</h3>
      <p>Select a mentor based on their expertise and availability</p>

      <div className="mentor-directory">
        {mentors.map((mentor) => (
          <MentorCard
            key={mentor.id}
            mentor={mentor}
            onBookSession={onBookSession}
          />
        ))}
      </div>
    </div>
  );
};

export default MentorDirectory;
