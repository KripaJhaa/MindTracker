import React from 'react';

const BookingForm = ({ bookingData, onBookingDataChange }) => {
  const handleInputChange = (field, value) => {
    onBookingDataChange(field, value);
  };

  const handleDateFocus = (e) => {
    // On mobile, ensure date picker opens correctly
    if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      e.target.setAttribute('inputmode', 'none');
    }
  };

  return (
    <div className="booking-form">
      <div className="form-section">
        <h4>📅 Schedule Your Session</h4>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="booking-date">
              Preferred Date
            </label>
            <input
              id="booking-date"
              type="date"
              className="form-input"
              value={bookingData.date}
              onChange={(e) => handleInputChange('date', e.target.value)}
              onFocus={handleDateFocus}
              min={new Date().toISOString().split('T')[0]}
              required
              aria-describedby="date-help"
            />
            <div id="date-help" className="sr-only">
              Select your preferred date for the mentoring session
            </div>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="booking-time">
              Preferred Time
            </label>
            <select
              id="booking-time"
              className="form-select"
              value={bookingData.time}
              onChange={(e) => handleInputChange('time', e.target.value)}
              required
              aria-describedby="time-help"
            >
              <option value="">Select Time</option>
              <option value="09:00">9:00 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="14:00">2:00 PM</option>
              <option value="15:00">3:00 PM</option>
              <option value="16:00">4:00 PM</option>
              <option value="17:00">5:00 PM</option>
            </select>
            <div id="time-help" className="sr-only">
              Select your preferred time slot for the session
            </div>
          </div>
        </div>
      </div>

      <div className="form-section">
        <h4>💬 Session Details</h4>
        <div className="form-group">
          <label className="form-label" htmlFor="discussion-topic">
            Discussion Topic (One-liner)
          </label>
          <input
            id="discussion-topic"
            type="text"
            className="form-input"
            placeholder="e.g., Managing exam anxiety"
            value={bookingData.discussionTopic}
            onChange={(e) => handleInputChange('discussionTopic', e.target.value)}
            maxLength="100"
            required
            aria-describedby="topic-help topic-count"
          />
          <div id="topic-help" className="sr-only">
            Briefly describe what you'd like to discuss in the session
          </div>
          <small id="topic-count" className="form-help" aria-live="polite">
            {bookingData.discussionTopic.length}/100 characters
          </small>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="additional-details">
            Additional Details (Optional)
          </label>
          <textarea
            id="additional-details"
            className="form-textarea"
            placeholder="Share any additional context or specific concerns you'd like to discuss..."
            value={bookingData.additionalDetails}
            onChange={(e) => handleInputChange('additionalDetails', e.target.value)}
            rows="3"
            aria-describedby="details-help"
          />
          <div id="details-help" className="sr-only">
            Optional: Provide additional context about your situation
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
