import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';

const BookMentor = () => {
  const navigate = useNavigate();
  const { user, isAdmin, isMentor } = useAuth();
  const { t } = useLanguage();
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [showMentorModal, setShowMentorModal] = useState(false);
  const [selectedSession, setSelectedSession] = useState(null);

  // Sample session data
  const sessions = [
    {
      id: 1,
      student: 'Alice Johnson',
      mentor: 'Dr. Sarah Wilson',
      date: '2025-08-28',
      time: '10:00 AM',
      status: 'scheduled',
      topic: 'Stress Management'
    },
    {
      id: 2,
      student: 'Bob Smith',
      mentor: 'Dr. Michael Brown',
      date: '2025-08-28',
      time: '2:00 PM',
      status: 'completed',
      topic: 'Anxiety Reduction'
    },
    {
      id: 3,
      student: 'Carol Davis',
      mentor: 'Dr. Sarah Wilson',
      date: '2025-08-29',
      time: '11:00 AM',
      status: 'scheduled',
      topic: 'Mindfulness Practice'
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

  // Student view - original booking interface
  return (
    <div className="page-container fade-in">
      <div className="page-header">
        <h1>Book a Mentor Session</h1>
        <p>Find and schedule sessions with experienced mentors</p>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <h3>Mentor Directory</h3>
          <p>Search and filter mentors by specialty, availability, and ratings.</p>
          <button className="btn" style={{ marginTop: '1rem' }}>Browse Mentors</button>
        </div>

        <div className="card">
          <h3>Session Scheduling</h3>
          <p>Choose your preferred date and time for the session.</p>
          <button className="btn" style={{ marginTop: '1rem' }}>Schedule Session</button>
        </div>
      </div>

      <div className="card">
        <h3>Pre-Session Questionnaire</h3>
        <div className="form-group">
          <label className="form-label">What's on your mind?</label>
          <textarea
            className="form-textarea"
            placeholder="Share what's been on your mind lately..."
            rows="3"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Current mood</label>
          <select className="form-select">
            <option>Select mood</option>
            <option>😊 Happy</option>
            <option>😢 Sad</option>
            <option>😰 Anxious</option>
            <option>😌 Calm</option>
          </select>
        </div>
      </div>

      {/* Schedule Session Modal */}
      {showScheduleModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>{t('scheduleSession')}</h3>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>{t('selectDateTime')}</label>
              <input type="datetime-local" className="form-input" />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>{t('sessionType')}</label>
              <select className="form-select">
                <option>{t('oneOnOne')}</option>
                <option>{t('groupSession')}</option>
              </select>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>{t('availableMentors')}</label>
              <select className="form-select">
                <option>Dr. Sarah Wilson</option>
                <option>Dr. Michael Brown</option>
                <option>Dr. Emily Davis</option>
              </select>
            </div>
            <div className="modal-buttons">
              <button 
                className="btn btn-secondary"
                onClick={() => setShowScheduleModal(false)}
              >
                {t('cancel')}
              </button>
              <button 
                className="btn"
                onClick={() => {
                  alert(t('sessionBooked'));
                  setShowScheduleModal(false);
                }}
              >
                {t('bookSession')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Manage Mentors Modal */}
      {showMentorModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>{t('manageMentors')}</h3>
            <div style={{ marginBottom: '1rem' }}>
              <div className="mentor-grid">
                <div className="mentor-card">
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>👩‍⚕️</div>
                  <div style={{ fontWeight: 'bold' }}>Dr. Sarah Wilson</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Clinical Psychologist</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--success)' }}>Available</div>
                </div>
                <div className="mentor-card">
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>👨‍⚕️</div>
                  <div style={{ fontWeight: 'bold' }}>Dr. Michael Brown</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Mindfulness Coach</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--success)' }}>Available</div>
                </div>
                <div className="mentor-card">
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>👩‍⚕️</div>
                  <div style={{ fontWeight: 'bold' }}>Dr. Emily Davis</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Therapist</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--warning)' }}>Busy</div>
                </div>
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
