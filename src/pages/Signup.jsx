import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';

const Signup = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    role: 'student'
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError(t('passwordsDoNotMatch'));
      return;
    }

    if (!formData.email || !formData.password || !formData.name) {
      setError(t('allFieldsRequired'));
      return;
    }

    // Demo signup - In a real app, this would be an API call
    const userData = {
      id: Date.now(),
      email: formData.email,
      name: formData.name,
      role: formData.role
    };

    login(userData);
    navigate('/home');
  };

  return (
    <div className="page-container fade-in">
      <div className="form-container" style={{ margin: '2rem auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>{t('createAccount')}</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="name">{t('fullName')}</label>
            <input
              id="name"
              name="name"
              type="text"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="email">{t('email')}</label>
            <input
              id="email"
              name="email"
              type="email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password">{t('password')}</label>
            <input
              id="password"
              name="password"
              type="password"
              className="form-input"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="confirmPassword">{t('confirmPassword')}</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              className="form-input"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="role">{t('role')}</label>
            <select
              id="role"
              name="role"
              className="form-input"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="student">{t('student')}</option>
              <option value="mentor">{t('mentor')}</option>
            </select>
          </div>

          <button type="submit" className="btn" style={{ width: '100%' }}>
            {t('signUp')}
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

export default Signup;
