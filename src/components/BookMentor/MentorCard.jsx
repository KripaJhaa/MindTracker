import React from 'react';
import { triggerHapticFeedback } from './hooks/useMobile';

const MentorCard = ({ mentor, onBookSession }) => {
  const handleBookSession = () => {
    // Add haptic feedback for mobile devices
    triggerHapticFeedback(50);
    onBookSession(mentor);
  };

  return (
    <div className="mentor-card">
      <div className="mentor-header">
        <div className="mentor-avatar" role="img" aria-label={`${mentor.name} avatar`}>
          {mentor.avatar}
        </div>
        <div className="mentor-info">
          <h4>{mentor.name}</h4>
          <p className="mentor-specialty">{mentor.specialty}</p>
          <div className="mentor-meta">
            <span className="rating" aria-label={`Rating: ${mentor.rating} out of 5 stars from ${mentor.reviews} reviews`}>
              ⭐ {mentor.rating} ({mentor.reviews} reviews)
            </span>
            <span className="experience" aria-label={`${mentor.experience} of experience`}>
              {mentor.experience} experience
            </span>
          </div>
        </div>
        <div
          className={`availability ${mentor.availability.toLowerCase()}`}
          aria-label={`Mentor availability: ${mentor.availability}`}
        >
          {mentor.availability}
        </div>
      </div>

      <div className="mentor-details">
        <p className="mentor-bio">{mentor.bio}</p>

        <div className="mentor-tags">
          <div className="tag-section">
            <strong>Specialties:</strong>
            <div className="tags" role="list" aria-label="Mentor specialties">
              {mentor.specialties.map((specialty, index) => (
                <span key={index} className="tag" role="listitem">
                  {specialty}
                </span>
              ))}
            </div>
          </div>

          <div className="tag-section">
            <strong>Languages:</strong>
            <div className="tags" role="list" aria-label="Languages spoken">
              {mentor.languages.map((language, index) => (
                <span key={index} className="tag" role="listitem">
                  {language}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mentor-footer">
          <div className="price" aria-label={`Session price: ${mentor.sessionPrice}`}>
            {mentor.sessionPrice}
          </div>
          <button
            className="btn btn-primary"
            onClick={handleBookSession}
            disabled={mentor.availability === 'Busy'}
            aria-label={mentor.availability === 'Busy' ? 'Mentor is currently busy' : `Book session with ${mentor.name}`}
            type="button"
          >
            Book Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
