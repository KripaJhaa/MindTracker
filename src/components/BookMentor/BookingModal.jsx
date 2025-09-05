import React, { useEffect, useState } from 'react';
import BookingForm from './BookingForm';
import BookingSummary from './BookingSummary';

const BookingModal = ({
  isOpen,
  selectedMentor,
  bookingData,
  onClose,
  onBookingDataChange,
  onSubmit
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [consentGiven, setConsentGiven] = useState(false);

  // Reset step when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentStep(1);
      setConsentGiven(false);
    }
  }, [isOpen]);

  // Handle mobile keyboard and viewport adjustments
  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';

      // Handle mobile viewport height changes (keyboard)
      const handleResize = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      };

      handleResize();
      window.addEventListener('resize', handleResize);
      window.addEventListener('orientationchange', handleResize);

      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('orientationchange', handleResize);
      };
    }
  }, [isOpen]);

  // Early return after all hooks
  if (!isOpen || !selectedMentor) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2 && consentGiven) {
      onSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  const isFormValid = bookingData.date && bookingData.time && bookingData.discussionTopic.trim();
  const canProceedToSummary = isFormValid;
  const canConfirmBooking = consentGiven;

  const renderStepIndicator = () => (
    <div className="step-indicator">
      <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>
        <span className="step-number">1</span>
        <span className="step-label">Details</span>
      </div>
      <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>
        <span className="step-number">2</span>
        <span className="step-label">Review</span>
      </div>
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <BookingForm
            bookingData={bookingData}
            onBookingDataChange={onBookingDataChange}
          />
        );
      case 2:
        return (
          <div className="booking-review">
            <BookingSummary
              selectedMentor={selectedMentor}
              bookingData={bookingData}
            />

            <div className="consent-section">
              <h4>📋 Terms & Consent</h4>
              <div className="consent-item">
                <input
                  type="checkbox"
                  id="consent-privacy"
                  checked={consentGiven}
                  onChange={(e) => setConsentGiven(e.target.checked)}
                  aria-describedby="consent-description"
                />
                <label htmlFor="consent-privacy" className="consent-label">
                  I agree to the <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and <a href="/terms-of-service" target="_blank" rel="noopener noreferrer">Terms of Service</a>
                </label>
              </div>
              <div id="consent-description" className="consent-description">
                By booking this session, you agree to our terms and conditions, including our cancellation policy and session guidelines.
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const renderStepActions = () => (
    <div className="modal-buttons">
      {currentStep > 1 && (
        <button
          type="button"
          className="btn btn-secondary back-btn"
          onClick={handleBack}
        >
          ← Back
        </button>
      )}

      <button
        type="button"
        className="btn btn-secondary cancel-btn"
        onClick={onClose}
      >
        Cancel
      </button>

      {currentStep === 1 && (
        <button
          type="button"
          className="btn btn-primary primary-btn"
          onClick={() => setCurrentStep(2)}
          disabled={!canProceedToSummary}
        >
          Review Booking →
        </button>
      )}

      {currentStep === 2 && (
        <button
          type="submit"
          className="btn btn-primary primary-btn"
          disabled={!canConfirmBooking}
        >
          Confirm Booking
        </button>
      )}
    </div>
  );

  return (
    <div
      className="modal-overlay"
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      aria-describedby="booking-modal-description"
    >
      <div className="modal-content booking-modal">
        <div className="modal-header">
          <h3 id="booking-modal-title">
            Book Session with {selectedMentor.name}
            {currentStep === 2 && " - Review"}
          </h3>
          <button
            className="modal-close"
            onClick={onClose}
            aria-label="Close booking modal"
            type="button"
          >
            ×
          </button>
        </div>

        {renderStepIndicator()}

        <div className="mentor-summary" id="booking-modal-description">
          <div className="mentor-avatar" role="img" aria-label={`${selectedMentor.name} avatar`}>
            {selectedMentor.avatar}
          </div>
          <div className="mentor-summary-info">
            <h4>{selectedMentor.name}</h4>
            <p>{selectedMentor.specialty}</p>
            <p className="price" aria-label={`Session price: ${selectedMentor.sessionPrice}`}>
              {selectedMentor.sessionPrice}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="modal-body">
            {renderStepContent()}
          </div>
          <div className="modal-footer">
            {renderStepActions()}
          </div>
        </form>

        {!isFormValid && currentStep === 1 && (
          <div id="booking-form-validation" className="sr-only">
            Please fill in all required fields: date, time, and discussion topic
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;