import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import SEOHead from '../components/SEOHead';

const Journal = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [entry, setEntry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder: Save journal entry
    alert(t('journalSaved'));
    setEntry('');
  };

  return (
    <>
      <SEOHead 
        title="Mindful Journal - Reflection & Personal Growth"
        description="Write and track your mindfulness journey with our secure digital journal. Reflect on your daily experiences, meditation sessions, and personal growth in a safe, private space."
        keywords="mindful journaling, reflection, personal growth, meditation diary, wellness journal"
        url="/journal"
      />
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
        <h1>{t('dailyJournal')}</h1>
        <p>{t('journalDesc')}</p>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <h3>{t('todaysThoughts')}</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">{t('howFeeling')}</label>
              <textarea
                className="form-textarea"
                value={entry}
                onChange={e => setEntry(e.target.value)}
                placeholder={t('todaysThoughts')}
                rows="6"
                required
              />
            </div>
            <button type="submit" className="btn">{t('saveEntry')}</button>
          </form>
        </div>

        <div className="card">
          <h3>{t('reflectionPromptsTitle')}</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border)' }}>
              {t('gratefulFor')}
            </li>
            <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border)' }}>
              {t('challenges')}
            </li>
            <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border)' }}>
              {t('howFeeling')}
            </li>
            <li style={{ padding: '0.5rem 0' }}>
              {t('tomorrowGoals')}
            </li>
          </ul>
        </div>
      </div>

      <div className="card">
        <h3>{t('journalHistory')}</h3>
        <div className="progress-item">
          <span>{t('entriesThisWeek')}</span>
          <strong>{t('demoEntries')}</strong>
        </div>
        <div className="progress-item">
          <span>{t('longestStreak')}</span>
          <strong>{t('demoStreak')}</strong>
        </div>
        <div className="progress-item">
          <span>{t('totalEntries')}</span>
          <strong>{t('demoTotal')}</strong>
        </div>
      </div>
      </div>
    </>
  );
};

export default Journal;
