import React from 'react';

const BookingSummary = ({ selectedMentor, bookingData }) => {
  return (
    <div className="booking-summary">
      <h4>📋 Booking Summary</h4>
      <div className="summary-details">
        <div className="summary-row">
          <span>Mentor:</span>
          <span>{selectedMentor.name}</span>
        </div>
        <div className="summary-row">
          <span>Date:</span>
          <span>{bookingData.date || 'Not selected'}</span>
        </div>
        <div className="summary-row">
          <span>Time:</span>
          <span>{bookingData.time ? `${bookingData.time} AM/PM` : 'Not selected'}</span>
        </div>
        <div className="summary-row">
          <span>Duration:</span>
          <span>60 minutes</span>
        </div>
        <div className="summary-row total">
          <span>Total:</span>
          <span>{selectedMentor.sessionPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;
