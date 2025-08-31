import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Notifications = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [notificationSettings, setNotificationSettings] = useState({
    sessionReminders: true,
    exerciseSuggestions: true,
    dailyCheckins: true,
    achievementNotifications: true
  });

  // Ensure page starts at top on load/refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const notifications = [
    {
      id: 1,
      type: 'reminder',
      title: t('sessionReminder'),
      message: t('sessionReminderMessage'),
      time: t('demoTime1'),
      icon: '📅'
    },
    {
      id: 2,
      type: 'suggestion',
      title: t('exerciseSuggestion'),
      message: t('exerciseSuggestionMessage'),
      time: t('demoTime2'),
      icon: '🧘'
    },
    {
      id: 3,
      type: 'achievement',
      title: t('streakMilestone'),
      message: t('streakMilestoneMessage'),
      time: t('demoTime3'),
      icon: '🏆'
    },
    {
      id: 4,
      type: 'checkin',
      title: t('dailyCheckin'),
      message: t('dailyCheckinMessage'),
      time: t('demoTime4'),
      icon: '😊'
    },
    {
      id: 5,
      type: 'followup',
      title: t('sessionFollowup'),
      message: t('sessionFollowupMessage'),
      time: '3 days ago',
      icon: '📝'
    }
  ];

  const handleMarkAsRead = (id) => {
    alert(t('markAsRead') + ' - ' + id);
  };

  const handleSettingChange = (setting) => {
    setNotificationSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
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
        <h1>{t('notificationsTitle')}</h1>
        <p>{t('stayUpdated')}</p>
      </div>

      <div className="card">
        <h3 className="card-header">{t('recentNotifications')}</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {notifications.map((notification) => (
            <div
              key={notification.id}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                padding: '1rem',
                background: 'var(--surface)',
                borderRadius: 'var(--border-radius)',
                border: '1px solid var(--border)'
              }}
            >
              <span style={{ fontSize: '1.5rem' }}>{notification.icon}</span>
              <div style={{ flex: 1 }}>
                <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem' }}>
                  {notification.title}
                </h4>
                <p style={{ margin: '0 0 0.5rem 0', color: 'var(--text-secondary)' }}>
                  {notification.message}
                </p>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  {notification.time}
                </span>
              </div>
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--text-secondary)',
                  fontSize: '1.25rem'
                }}
                onClick={() => handleMarkAsRead(notification.id)}
                title={t('markAsRead')}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <h3 className="card-header">{t('notificationSettings')}</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>{t('sessionReminders')}</span>
            <input 
              type="checkbox" 
              checked={notificationSettings.sessionReminders}
              onChange={() => handleSettingChange('sessionReminders')}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>{t('exerciseSuggestions')}</span>
            <input 
              type="checkbox" 
              checked={notificationSettings.exerciseSuggestions}
              onChange={() => handleSettingChange('exerciseSuggestions')}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>{t('dailyWellnessCheckins')}</span>
            <input 
              type="checkbox" 
              checked={notificationSettings.dailyCheckins}
              onChange={() => handleSettingChange('dailyCheckins')}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>{t('achievementNotifications')}</span>
            <input 
              type="checkbox" 
              checked={notificationSettings.achievementNotifications}
              onChange={() => handleSettingChange('achievementNotifications')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
