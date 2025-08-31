import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const GrowthReports = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  // Ensure page starts at top on load/refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sample data for charts
  const dailyMoodData = [
    { day: 'Mon', mood: 7, label: '😊' },
    { day: 'Tue', mood: 6, label: '😐' },
    { day: 'Wed', mood: 8, label: '😊' },
    { day: 'Thu', mood: 5, label: '😢' },
    { day: 'Fri', mood: 9, label: '🤗' },
    { day: 'Sat', mood: 8, label: '😊' },
    { day: 'Sun', mood: 7, label: '😊' }
  ];

  const dailyActivityData = [
    { day: 'Mon', exercises: 2, journal: 1, sessions: 0 },
    { day: 'Tue', exercises: 3, journal: 1, sessions: 1 },
    { day: 'Wed', exercises: 1, journal: 1, sessions: 0 },
    { day: 'Thu', exercises: 4, journal: 0, sessions: 1 },
    { day: 'Fri', exercises: 2, journal: 1, sessions: 0 },
    { day: 'Sat', exercises: 3, journal: 1, sessions: 0 },
    { day: 'Sun', exercises: 2, journal: 1, sessions: 1 }
  ];

  const weeklyGoals = [
    { goal: 'Daily Exercises', completed: 15, target: 21, percentage: 71 },
    { goal: 'Journal Entries', completed: 6, target: 7, percentage: 86 },
    { goal: 'Mentor Sessions', completed: 3, target: 4, percentage: 75 },
    { goal: 'Mood Check-ins', completed: 7, target: 7, percentage: 100 }
  ];

  return (
    <div className="page-container fade-in">
      <div style={{ marginBottom: '2rem' }}>
        <button
          className="btn btn-secondary"
          onClick={() => navigate('/home')}
          style={{ marginBottom: '1rem' }}
        >
          ← {t('backToDashboard')}
        </button>
      </div>

      <div className="page-header">
        <h1>{t('growthReportsTitle')}</h1>
        <p>{t('trackProgress')}</p>
      </div>

      {/* Daily Mood Chart */}
      <div className="card">
        <h3>📊 Daily Mood Trends (Last 7 Days)</h3>
        <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', height: '200px', marginTop: '2rem' }}>
          {dailyMoodData.map((data, index) => (
            <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
              <div
                style={{
                  height: `${(data.mood / 10) * 150}px`,
                  width: '40px',
                  backgroundColor: 'var(--primary-color)',
                  borderRadius: '4px 4px 0 0',
                  marginBottom: '0.5rem',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '-25px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontSize: '1.2rem'
                  }}
                >
                  {data.label}
                </div>
              </div>
              <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{data.day}</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>{data.mood}/10</span>
            </div>
          ))}
        </div>
      </div>

      {/* Daily Activity Chart */}
      <div className="card">
        <h3>📈 Daily Activity Breakdown</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
          {dailyActivityData.map((data, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ minWidth: '40px', fontWeight: 'bold' }}>{data.day}</span>
              <div style={{ flex: 1, display: 'flex', gap: '0.25rem' }}>
                {/* Exercises */}
                <div
                  style={{
                    height: '20px',
                    width: `${(data.exercises / 4) * 100}%`,
                    backgroundColor: 'var(--success)',
                    borderRadius: '2px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '0.75rem',
                    fontWeight: 'bold'
                  }}
                  title={`${data.exercises} exercises`}
                >
                  {data.exercises > 0 && data.exercises}
                </div>
                {/* Journal */}
                <div
                  style={{
                    height: '20px',
                    width: `${(data.journal / 1) * 30}%`,
                    backgroundColor: 'var(--primary-color)',
                    borderRadius: '2px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '0.75rem',
                    fontWeight: 'bold'
                  }}
                  title={`${data.journal} journal entries`}
                >
                  {data.journal > 0 && '📝'}
                </div>
                {/* Sessions */}
                <div
                  style={{
                    height: '20px',
                    width: `${(data.sessions / 1) * 25}%`,
                    backgroundColor: 'var(--accent-color)',
                    borderRadius: '2px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '0.75rem',
                    fontWeight: 'bold'
                  }}
                  title={`${data.sessions} sessions`}
                >
                  {data.sessions > 0 && '📅'}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', fontSize: '0.875rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <div style={{ width: '12px', height: '12px', backgroundColor: 'var(--success)', borderRadius: '2px' }}></div>
            Exercises
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <div style={{ width: '12px', height: '12px', backgroundColor: 'var(--primary-color)', borderRadius: '2px' }}></div>
            Journal
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <div style={{ width: '12px', height: '12px', backgroundColor: 'var(--accent-color)', borderRadius: '2px' }}></div>
            Sessions
          </span>
        </div>
      </div>

      {/* Weekly Goals Progress */}
      <div className="card">
        <h3>🎯 Weekly Goals Progress</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
          {weeklyGoals.map((goal, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <h4 style={{ marginBottom: '1rem' }}>{goal.goal}</h4>
              <div style={{ position: 'relative', width: '120px', height: '120px', margin: '0 auto 1rem' }}>
                <svg width="120" height="120" style={{ transform: 'rotate(-90deg)' }}>
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="var(--border)"
                    strokeWidth="8"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke={goal.percentage >= 80 ? 'var(--success)' : goal.percentage >= 60 ? 'var(--primary-color)' : 'var(--accent-color)'}
                    strokeWidth="8"
                    strokeDasharray={`${(goal.percentage / 100) * 314} 314`}
                    strokeLinecap="round"
                  />
                </svg>
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  fontSize: '1.25rem',
                  fontWeight: 'bold'
                }}>
                  {goal.percentage}%
                </div>
              </div>
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                {goal.completed} / {goal.target} completed
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <h3>📈 Progress Overview</h3>
          <div className="progress-item">
            <span>Sessions completed</span>
            <strong>12</strong>
          </div>
          <div className="progress-item">
            <span>Exercises finished</span>
            <strong>28</strong>
          </div>
          <div className="progress-item">
            <span>Journal entries</span>
            <strong>15</strong>
          </div>
          <div className="progress-item">
            <span>Current streak</span>
            <strong style={{ color: 'var(--success)' }}>7 days</strong>
          </div>
        </div>

        <div className="card">
          <h3>🏆 Achievements</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', backgroundColor: 'var(--surface)', borderRadius: 'var(--border-radius)', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '1.5rem' }}>🎯</span>
            <div>
              <strong>First Week Complete</strong>
              <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Completed 7 days of MindTrack practice</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', backgroundColor: 'var(--surface)', borderRadius: 'var(--border-radius)', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '1.5rem' }}>📝</span>
            <div>
              <strong>Journal Streak</strong>
              <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>5 consecutive days of journaling</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h3>📊 Mood Trends</h3>
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '2rem' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>😊</div>
            <p style={{ margin: 0, fontWeight: 'bold' }}>Average Mood</p>
            <p style={{ margin: 0, color: 'var(--success)', fontSize: '1.25rem' }}>+15%</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📈</div>
            <p style={{ margin: 0, fontWeight: 'bold' }}>Improvement</p>
            <p style={{ margin: 0, color: 'var(--success)', fontSize: '1.25rem' }}>Steady</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎯</div>
            <p style={{ margin: 0, fontWeight: 'bold' }}>Goals Met</p>
            <p style={{ margin: 0, color: 'var(--success)', fontSize: '1.25rem' }}>80%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowthReports;
