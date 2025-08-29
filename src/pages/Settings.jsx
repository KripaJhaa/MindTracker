import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Settings = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    institution: 'Example University'
  });
  const [notifications, setNotifications] = useState({
    sessionReminders: true,
    dailyCheckins: true,
    exerciseSuggestions: false,
    weeklyReports: true
  });

  const handleProfileUpdate = () => {
    alert(t('settingsSaved'));
  };

  const handleNotificationChange = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
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
        <h1>{t('settingsTitle')}</h1>
        <p>{t('accountSettings')}</p>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <h3>{t('accountSettings')}</h3>
          <div className="form-group">
            <label className="form-label">{t('fullName')}</label>
            <input 
              type="text" 
              className="form-input" 
              value={profileData.name}
              onChange={(e) => setProfileData({...profileData, name: e.target.value})}
            />
          </div>
          <div className="form-group">
            <label className="form-label">{t('email')}</label>
            <input 
              type="email" 
              className="form-input" 
              value={profileData.email}
              onChange={(e) => setProfileData({...profileData, email: e.target.value})}
            />
          </div>
          <div className="form-group">
            <label className="form-label">{t('institution')}</label>
            <input 
              type="text" 
              className="form-input" 
              value={profileData.institution}
              onChange={(e) => setProfileData({...profileData, institution: e.target.value})}
            />
          </div>
          <button className="btn" onClick={handleProfileUpdate}>{t('saveSettings')}</button>
        </div>

        <div className="card">
          <h3>{t('notificationSettings')}</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input 
                type="checkbox" 
                checked={notifications.sessionReminders}
                onChange={() => handleNotificationChange('sessionReminders')}
              />
              {t('sessionReminders')}
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input 
                type="checkbox" 
                checked={notifications.dailyCheckins}
                onChange={() => handleNotificationChange('dailyCheckins')}
              />
              {t('dailyWellnessCheckins')}
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input 
                type="checkbox" 
                checked={notifications.exerciseSuggestions}
                onChange={() => handleNotificationChange('exerciseSuggestions')}
              />
              {t('exerciseSuggestions')}
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input 
                type="checkbox" 
                checked={notifications.weeklyReports}
                onChange={() => handleNotificationChange('weeklyReports')}
              />
              {t('weeklyProgressReports')}
            </label>
          </div>
        </div>
      </div>

      <div className="card">
        <h3>{t('privacySettings')}</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="progress-item">
            <span>{t('dataSharing')}</span>
            <select className="form-select" style={{ width: 'auto', marginLeft: 'auto' }}>
              <option>{t('private')}</option>
              <option>{t('shareWithInstitution')}</option>
              <option>{t('public')}</option>
            </select>
          </div>
          <div className="progress-item">
            <span>{t('twoFactorAuth')}</span>
            <button className="btn btn-secondary" style={{ marginLeft: 'auto' }}>{t('enable')}</button>
          </div>
          <div className="progress-item">
            <span>{t('changePassword')}</span>
            <button className="btn btn-secondary" style={{ marginLeft: 'auto' }}>{t('updatePassword')}</button>
          </div>
        </div>
      </div>

      <div className="card">
        <h3>{t('helpSupport')}</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
          <button className="btn btn-secondary" onClick={() => alert('User Guide functionality would be implemented here')}>{t('userGuide')}</button>
          <button className="btn btn-secondary" onClick={() => alert('Contact Support functionality would be implemented here')}>{t('contactSupport')}</button>
          <button className="btn btn-secondary" onClick={() => alert('FAQ functionality would be implemented here')}>{t('faq')}</button>
          <button className="btn" style={{ backgroundColor: 'var(--error)' }} onClick={() => navigate('/')}>{t('logout')}</button>
        </div>
      </div>

      <style jsx>{`
        /* Mobile responsive styles for Settings */
        @media (max-width: 768px) {
          .grid-2 {
            grid-template-columns: 1fr;
          }

          .form-group {
            margin-bottom: 1.25rem;
          }

          .form-input {
            font-size: 16px; /* Prevents zoom on iOS */
          }
        }

        @media (max-width: 480px) {
          .page-container {
            padding: 0.75rem 0.5rem;
          }

          .card {
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Settings;
