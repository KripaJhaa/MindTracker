import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const MindfulnessExercises = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

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
        <h1>{t('meditationSessions')}</h1>
        <p>{t('guidedMeditations')}</p>
      </div>

      <div className="grid grid-3">
        <div className="card">
          <h3>🗣️ {t('guidedStories')}</h3>
          <p>{t('guidedStoriesDesc')}</p>
          <button className="btn" style={{ marginTop: '1rem' }}>{t('startStory')}</button>
        </div>

        <div className="card">
          <h3>🫁 {t('breathingExercises')}</h3>
          <p>{t('breathingExercisesDesc')}</p>
          <button className="btn" style={{ marginTop: '1rem' }}>{t('beginExercise')}</button>
        </div>

        <div className="card">
          <h3>💭 {t('reflectionPrompts')}</h3>
          <p>{t('reflectionPromptsDesc')}</p>
          <button className="btn" style={{ marginTop: '1rem' }}>{t('reflectNow')}</button>
        </div>

        <div className="card">
          <h3>📊 {t('psychometricTests')}</h3>
          <p>{t('psychometricTestsDesc')}</p>
          <button className="btn" style={{ marginTop: '1rem' }}>{t('takeTest')}</button>
        </div>
      </div>

      <div className="card">
        <h3>{t('recentActivity')}</h3>
        <div className="progress-item">
          <span>{t('lastCompleted')}: {t('breathingExercise')}</span>
          <span style={{ color: 'var(--text-secondary)' }}>2 days ago</span>
        </div>
        <div className="progress-item">
          <span>{t('timeSpentWeek')}</span>
          <strong>45 minutes</strong>
        </div>
      </div>
    </div>
  );
};

export default MindfulnessExercises;
