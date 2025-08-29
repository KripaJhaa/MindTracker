import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';

const ProfileSetup = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { t } = useLanguage();
  const [role, setRole] = useState('');
  const [name, setName] = useState('');
  const [ageGrade, setAgeGrade] = useState('');
  const [email, setEmail] = useState('');
  const [institution, setInstitution] = useState('');
  const [preferences, setPreferences] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError(t('passwordsDoNotMatch'));
      return;
    }

    if (!password || password.length < 6) {
      setError(t('passwordMinLength'));
      return;
    }

    // Create user data
    const userData = {
      id: Date.now(),
      email,
      name,
      role,
      institution: role === 'institution' ? institution : null,
      ageGrade: role === 'student' ? ageGrade : null,
      preferences,
      createdAt: new Date().toISOString()
    };

    // In a real app, this would be an API call to create the account
    login(userData);
    navigate('/home');
  };

  const getRoleSpecificFields = () => {
    switch (role) {
      case 'student':
        return (
          <div className="form-group">
            <label className="form-label" htmlFor="ageGrade">{t('ageGrade')}</label>
            <input
              id="ageGrade"
              type="text"
              className="form-input"
              placeholder={t('ageGradePlaceholder')}
              value={ageGrade}
              onChange={e => setAgeGrade(e.target.value)}
              required
            />
          </div>
        );
      case 'mentor':
        return (
          <div className="form-group">
            <label className="form-label" htmlFor="preferences">{t('specialization')}</label>
            <textarea
              id="preferences"
              className="form-textarea"
              placeholder={t('specializationPlaceholder')}
              value={preferences}
              onChange={e => setPreferences(e.target.value)}
              required
            />
          </div>
        );
      case 'institution':
        return (
          <>
            <div className="form-group">
              <label className="form-label" htmlFor="institution">{t('institutionName')}</label>
              <input
                id="institution"
                type="text"
                className="form-input"
                placeholder={t('institutionNamePlaceholder')}
                value={institution}
                onChange={e => setInstitution(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="preferences">{t('institutionType')}</label>
              <select
                id="preferences"
                className="form-select"
                value={preferences}
                onChange={e => setPreferences(e.target.value)}
                required
              >
                <option value="">{t('selectInstitutionType')}</option>
                <option value="university">{t('university')}</option>
                <option value="college">{t('college')}</option>
                <option value="high-school">{t('highSchool')}</option>
                <option value="middle-school">{t('middleSchool')}</option>
                <option value="elementary">{t('elementarySchool')}</option>
                <option value="corporate">{t('corporate')}</option>
                <option value="other">{t('other')}</option>
              </select>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="page-container fade-in">
      <div className="form-container" style={{ margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>{t('completeProfile')}</h2>

        <div style={{ marginBottom: '2rem', padding: '1rem', background: 'var(--background)', borderRadius: 'var(--border-radius)', border: '1px solid var(--border)' }}>
          <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--primary-color)' }}>{t('personalInfo')}:</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '0.5rem', fontSize: '0.875rem' }}>
            <div>🎓 <strong>{t('studentDescription')}</strong></div>
            <div>👨‍🏫 <strong>{t('mentorDescription')}</strong></div>
            <div>🏫 <strong>{t('adminDescription')}</strong></div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="role">{t('selectRole')}</label>
            <select
              id="role"
              className="form-select"
              value={role}
              onChange={e => setRole(e.target.value)}
              required
            >
              <option value="">{t('selectRole')}</option>
              <option value="student">{t('student')}</option>
              <option value="mentor">{t('mentor')}</option>
              <option value="institution">{t('admin')}</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="name">{t('fullName')}</label>
            <input
              id="name"
              type="text"
              className="form-input"
              placeholder={t('fullName')}
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="email">{t('email')}</label>
            <input
              id="email"
              type="email"
              className="form-input"
              placeholder={t('email')}
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password">{t('password')}</label>
            <input
              id="password"
              type="password"
              className="form-input"
              placeholder={t('password')}
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              minLength="6"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="confirmPassword">{t('confirmPassword')}</label>
            <input
              id="confirmPassword"
              type="password"
              className="form-input"
              placeholder={t('confirmPassword')}
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              required
              minLength="6"
            />
          </div>

          {getRoleSpecificFields()}

          <button type="submit" className="btn" style={{ width: '100%' }}>
            {t('continue')}
          </button>

          {error && <div className="message message-error">{error}</div>}
        </form>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
            {t('alreadyHaveAccount')} <button
              className="btn-link"
              onClick={() => navigate('/login')}
            >
              {t('signIn')}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetup;
