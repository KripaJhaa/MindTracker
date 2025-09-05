import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import {
  MentorDirectory,
  SessionList,
  BookingModal
} from '../components/BookMentor';

const BookMentor = () => {
  const navigate = useNavigate();
  const { user, isAdmin, isMentor } = useAuth();
  const { t } = useLanguage();
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [showMentorModal, setShowMentorModal] = useState(false);
  const [selectedSession, setSelectedSession] = useState(null);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [bookingStep, setBookingStep] = useState(1); // 1: Select Mentor, 2: Book Session
  const [bookingData, setBookingData] = useState({
    date: '',
    time: '',
    discussionTopic: '',
    additionalDetails: ''
  });

  // Ensure page starts at top on load/refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sample mentors data
  const mentors = [
    {
      id: 1,
      name: 'Dr. Sarah Wilson',
      specialty: 'Clinical Psychologist',
      experience: '8 years',
      rating: 4.9,
      reviews: 127,
      avatar: '👩‍⚕️',
      availability: 'Available',
      bio: 'Specialized in anxiety, depression, and mindfulness practices. Helps students manage academic stress and personal challenges.',
      specialties: ['Anxiety', 'Depression', 'Academic Stress', 'Mindfulness'],
      languages: ['English', 'Hindi'],
      sessionPrice: '₹1500/session'
    },
    {
      id: 2,
      name: 'Dr. Michael Brown',
      specialty: 'Mindfulness Coach',
      experience: '6 years',
      rating: 4.8,
      reviews: 89,
      avatar: '👨‍⚕️',
      availability: 'Available',
      bio: 'Expert in meditation techniques and breathing exercises. Focuses on building long-term mindfulness habits.',
      specialties: ['Meditation', 'Breathing Exercises', 'Habit Building', 'Stress Management'],
      languages: ['English', 'Tamil'],
      sessionPrice: '₹1200/session'
    },
    {
      id: 3,
      name: 'Dr. Emily Davis',
      specialty: 'Therapist',
      experience: '10 years',
      rating: 4.7,
      reviews: 156,
      avatar: '👩‍⚕️',
      availability: 'Busy',
      bio: 'Experienced therapist specializing in student mental health, career counseling, and emotional wellbeing.',
      specialties: ['Therapy', 'Career Counseling', 'Emotional Health', 'Student Support'],
      languages: ['English'],
      sessionPrice: '₹1800/session'
    },
    {
      id: 4,
      name: 'Dr. Raj Kumar',
      specialty: 'Counselor',
      experience: '5 years',
      rating: 4.6,
      reviews: 73,
      avatar: '👨‍⚕️',
      availability: 'Available',
      bio: 'Passionate about helping students navigate life transitions and build resilience through counseling.',
      specialties: ['Life Transitions', 'Resilience Building', 'Counseling', 'Personal Growth'],
      languages: ['English', 'Hindi', 'Tamil'],
      sessionPrice: '₹1000/session'
    }
  ];

  // Sample session data
  const sessions = [
    {
      id: 1,
      student: t('demoStudent1'),
      mentor: t('demoMentor1'),
      date: '2025-08-28',
      time: '10:00 AM',
      status: 'scheduled',
      topic: t('demoTopic1')
    },
    {
      id: 2,
      student: t('demoStudent2'),
      mentor: t('demoMentor2'),
      date: '2025-08-28',
      time: '2:00 PM',
      status: 'completed',
      topic: t('demoTopic2')
    },
    {
      id: 3,
      student: t('demoStudent3'),
      mentor: t('demoMentor1'),
      date: '2025-08-29',
      time: '11:00 AM',
      status: 'scheduled',
      topic: t('demoTopic3')
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'scheduled': return 'var(--primary-color)';
      case 'completed': return 'var(--success)';
      case 'cancelled': return 'var(--error)';
      default: return 'var(--text-secondary)';
    }
  };

  const handleMentorSelect = (mentor) => {
    setSelectedMentor(mentor);
    setBookingStep(2);
    setShowScheduleModal(true);
  };

  const handleBookingSubmit = () => {
    // Close modal first
    setShowScheduleModal(false);
    setSelectedMentor(null);
    setBookingStep(1);

    // Reset booking data
    setBookingData({
      date: '',
      time: '',
      discussionTopic: '',
      additionalDetails: ''
    });

    // Show success message after modal closes
    setTimeout(() => {
      const successMessage = `
🎉 Session Booked Successfully!

📅 Date: ${bookingData.date}
⏰ Time: ${bookingData.time}
👨‍⚕️ Mentor: ${selectedMentor.name}
💬 Topic: ${bookingData.discussionTopic}

You will receive a confirmation email shortly with session details and meeting link.
      `;

      alert(successMessage);
    }, 300); // Small delay to ensure modal closes smoothly
  };

  const handleBookingDataChange = (field, value) => {
    setBookingData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (isAdmin) {
    return (
      <div className="page-container fade-in">
        <div className="page-header">
          <h1>{t('bookMentorTitle')}</h1>
          <p>{t('sessionManagementDesc')}</p>
        </div>

        <div className="dashboard-grid">
          <div className="card">
            <h3 className="card-header">📊 {t('analyticsTitle')}</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '1rem' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
                  {sessions.length}
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{t('totalUsers')}</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--success)' }}>
                  {sessions.filter(s => s.status === 'completed').length}
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{t('completed')}</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent-color)' }}>
                  {sessions.filter(s => s.status === 'scheduled').length}
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{t('scheduled')}</div>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="card-header">🎯 {t('quickActions')}</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
              <button 
                className="btn btn-secondary"
                onClick={() => setShowScheduleModal(true)}
              >
                📅 {t('scheduleSession')}
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => setShowMentorModal(true)}
              >
                👥 {t('manageMentors')}
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => navigate('/growth-reports')}
              >
                📊 {t('viewReports')}
              </button>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="card-header">📋 {t('allSessions')}</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'var(--background)' }}>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '1px solid var(--border)' }}>{t('student')}</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '1px solid var(--border)' }}>{t('mentor')}</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '1px solid var(--border)' }}>{t('dateTime')}</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '1px solid var(--border)' }}>{t('topic')}</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '1px solid var(--border)' }}>{t('status')}</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '1px solid var(--border)' }}>{t('actions')}</th>
                </tr>
              </thead>
              <tbody>
                {sessions.map((session) => (
                  <tr key={session.id} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '0.75rem' }}>{session.student}</td>
                    <td style={{ padding: '0.75rem' }}>{session.mentor}</td>
                    <td style={{ padding: '0.75rem' }}>{session.date} at {session.time}</td>
                    <td style={{ padding: '0.75rem' }}>{session.topic}</td>
                    <td style={{ padding: '0.75rem' }}>
                      <span style={{
                        padding: '0.25rem 0.5rem',
                        borderRadius: 'var(--border-radius)',
                        fontSize: '0.75rem',
                        fontWeight: 'bold',
                        background: getStatusColor(session.status),
                        color: 'white'
                      }}>
                        {session.status}
                      </span>
                    </td>
                    <td style={{ padding: '0.75rem' }}>
                      <button className="btn-link" style={{ fontSize: '0.875rem' }}>
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  if (isMentor) {
    return (
      <div className="page-container fade-in">
        <div className="page-header">
          <h1>My Sessions</h1>
          <p>Manage your mentoring sessions and student appointments</p>
        </div>

        <div className="dashboard-grid">
          <div className="card">
            <h3 className="card-header">📊 My Statistics</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '1rem' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
                  {sessions.filter(s => s.mentor === 'Dr. Sarah Wilson').length}
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Total Sessions</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--success)' }}>
                  {sessions.filter(s => s.mentor === 'Dr. Sarah Wilson' && s.status === 'completed').length}
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Completed</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent-color)' }}>
                  4.9
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Avg Rating</div>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="card-header">🎯 Quick Actions</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
              <button className="btn btn-secondary">
                📅 Update Availability
              </button>
              <button className="btn btn-secondary">
                📝 Session Notes
              </button>
              <button className="btn btn-secondary">
                💬 Messages
              </button>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="card-header">📋 Upcoming Sessions</h3>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {sessions.filter(s => s.mentor === 'Dr. Sarah Wilson' && s.status === 'scheduled').map((session) => (
              <div key={session.id} style={{
                padding: '1rem',
                background: 'var(--background)',
                borderRadius: 'var(--border-radius)',
                border: '1px solid var(--border)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h4 style={{ margin: '0 0 0.5rem 0' }}>{session.student}</h4>
                    <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                      {session.date} at {session.time} • {session.topic}
                    </p>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button className="btn btn-secondary" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>
                      Join Call
                    </button>
                    <button className="btn-link" style={{ fontSize: '0.875rem' }}>
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Student view - Enhanced booking interface
  return (
    <div className="page-container fade-in">
      <div className="page-header">
        <h1>Book a Mentor Session</h1>
        <p>Find and schedule sessions with experienced mentors</p>
      </div>

      {/* Mentor Directory */}
      <MentorDirectory
        mentors={mentors}
        onBookSession={handleMentorSelect}
      />

      {/* Quick Booking Actions */}
      <div className="grid grid-2">
        <SessionList
          sessions={sessions}
          title="My Upcoming Sessions"
          showActions={true}
          emptyMessage="No upcoming sessions"
        />

        <SessionList
          sessions={sessions}
          title="Session History"
          showActions={false}
          emptyMessage="No completed sessions"
        />
      </div>

      {/* Enhanced Booking Modal */}
      <BookingModal
        isOpen={showScheduleModal}
        selectedMentor={selectedMentor}
        bookingData={bookingData}
        onClose={() => {
          setShowScheduleModal(false);
          setSelectedMentor(null);
          setBookingStep(1);
        }}
        onBookingDataChange={handleBookingDataChange}
        onSubmit={handleBookingSubmit}
      />

      {/* Legacy Modals (keeping for admin/mentor views) */}
      {showMentorModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>{t('manageMentors')}</h3>
            <div style={{ marginBottom: '1rem' }}>
              <div className="mentor-grid">
                {mentors.map((mentor) => (
                  <div key={mentor.id} className="mentor-card">
                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{mentor.avatar}</div>
                    <div style={{ fontWeight: 'bold' }}>{mentor.name}</div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{mentor.specialty}</div>
                    <div style={{ fontSize: '0.875rem', color: mentor.availability === 'Available' ? 'var(--success)' : 'var(--warning)' }}>
                      {mentor.availability}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="modal-buttons">
              <button
                className="btn btn-secondary"
                onClick={() => setShowMentorModal(false)}
              >
                {t('cancel')}
              </button>
              <button
                className="btn"
                onClick={() => {
                  alert('Mentor management functionality would be implemented here');
                  setShowMentorModal(false);
                }}
              >
                {t('save')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookMentor;
