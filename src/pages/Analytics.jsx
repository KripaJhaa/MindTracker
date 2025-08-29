import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';

const Analytics = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { t } = useLanguage();
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  // Sample analytics data
  const analyticsData = {
    totalUsers: t('demoTotalUsers'),
    activeUsers: t('demoActiveUsers'),
    totalSessions: t('demoTotalSessions'),
    completedExercises: t('demoCompletedExercises'),
    avgMoodScore: t('demoAvgMoodScore'),
    topExercises: [
      { name: t('breathingExercises'), count: 1250, percentage: 35 },
      { name: t('bodyScan'), count: 980, percentage: 28 },
      { name: t('mindfulWalking'), count: 750, percentage: 22 },
      { name: t('lovingKindness'), count: 470, percentage: 15 }
    ],
    moodTrends: [
      { period: t('week1'), score: 7.2 },
      { period: t('week2'), score: 7.5 },
      { period: t('week3'), score: 7.8 },
      { period: t('week4'), score: 8.1 }
    ],
    institutionStats: {
      totalInstitutions: t('demoTotalInstitutions'),
      activePrograms: t('demoActivePrograms'),
      avgParticipation: t('demoAvgParticipation'),
      topPerforming: t('demoTopInstitution')
    }
  };

  const handleExportData = () => {
    alert(t('exportingData'));
  };

  const handleRefreshData = () => {
    alert(t('refreshingData'));
  };

  return (
    <div className="page-container fade-in">
      <div style={{ marginBottom: '2rem' }}>
        <button
          className="btn btn-secondary"
          onClick={() => navigate('/home')}
          style={{ marginBottom: '1rem' }}
        >
          ← {t('back')}
        </button>
      </div>

      <div className="page-header">
        <h1>{t('analyticsTitle')}</h1>
        <p>{t('comprehensiveInsights')} {user?.institution || t('yourInstitution')}</p>
      </div>

      {/* Controls */}
      <div style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <select 
          className="form-select" 
          value={selectedPeriod}
          onChange={(e) => setSelectedPeriod(e.target.value)}
          style={{ width: 'auto' }}
        >
          <option value="week">{t('thisWeek')}</option>
          <option value="month">{t('thisMonth')}</option>
          <option value="quarter">{t('thisQuarter')}</option>
        </select>
        <button className="btn btn-secondary" onClick={handleRefreshData}>
          🔄 {t('refresh')}
        </button>
        <button className="btn" onClick={handleExportData}>
          📊 {t('exportData')}
        </button>
      </div>

      {/* Key Metrics */}
      <div className="dashboard-grid">
        <div className="card">
          <h3 className="card-header">📊 {t('userEngagement')}</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
                {analyticsData.totalUsers}
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{t('totalUsers')}</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--success)' }}>
                {analyticsData.activeUsers}
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{t('activeUsers')}</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent-color)' }}>
                {analyticsData.totalSessions}
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{t('sessionsCompleted')}</div>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="card-header">🎯 {t('programPerformance')}</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
                {analyticsData.completedExercises}
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{t('exercisesCompleted')}</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--success)' }}>
                {analyticsData.avgMoodScore}/10
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{t('averageMoodScore')}</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent-color)' }}>
                {analyticsData.institutionStats.avgParticipation}%
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{t('participationRate')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Analytics */}
      <div className="dashboard-grid">
        {/* Top Exercises */}
        <div className="card">
          <h3 className="card-header">🏆 {t('mostPopularExercises')}</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {analyticsData.topExercises.map((exercise, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'var(--primary-color)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold'
                }}>
                  {index + 1}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 'bold' }}>{exercise.name}</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    {exercise.count} sessions ({exercise.percentage}%)
                  </div>
                </div>
                <div style={{
                  width: '60px',
                  height: '8px',
                  background: 'var(--border)',
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: `${exercise.percentage}%`,
                    height: '100%',
                    background: 'var(--primary-color)',
                    borderRadius: '4px'
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mood Trends */}
        <div className="card">
          <h3 className="card-header">📈 {t('moodTrends')}</h3>
          <div style={{ display: 'flex', alignItems: 'end', gap: '1rem', height: '200px', padding: '1rem 0' }}>
            {analyticsData.moodTrends.map((trend, index) => (
              <div key={index} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{
                  width: '100%',
                  height: `${(trend.score / 10) * 150}px`,
                  background: 'var(--success)',
                  borderRadius: '4px 4px 0 0',
                  marginBottom: '0.5rem',
                  transition: 'all 0.3s ease'
                }} />
                <div style={{ fontSize: '0.875rem', fontWeight: 'bold' }}>{trend.score}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{trend.period}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Institution Stats */}
      <div className="card">
        <h3 className="card-header">🏫 {t('institutionOverview')}</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
          <div style={{ textAlign: 'center', padding: '1rem', background: 'var(--background)', borderRadius: 'var(--border-radius)' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
              {analyticsData.institutionStats.totalInstitutions}
            </div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{t('totalInstitutions')}</div>
          </div>
          <div style={{ textAlign: 'center', padding: '1rem', background: 'var(--background)', borderRadius: 'var(--border-radius)' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--success)' }}>
              {analyticsData.institutionStats.activePrograms}
            </div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{t('activePrograms')}</div>
          </div>
          <div style={{ textAlign: 'center', padding: '1rem', background: 'var(--background)', borderRadius: 'var(--border-radius)' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent-color)' }}>
              {analyticsData.institutionStats.topPerforming}
            </div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{t('topPerformer')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
