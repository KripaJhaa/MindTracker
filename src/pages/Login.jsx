import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import SEOHead from '../components/SEOHead';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Ensure page starts at top on load/refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const from = location.state?.from?.pathname || '/home';

  const handleSubmit = (e) => {
    e.preventDefault();

    // Demo login logic - in real app, this would be an API call
    if (email && password) {
      // Determine role based on email domain or content for demo purposes
      let userRole = 'student';
      let userName = email.split('@')[0];

      if (email.includes('mentor') || email.includes('counselor')) {
        userRole = 'mentor';
      } else if (email.includes('admin') || email.includes('institution')) {
        userRole = 'admin';
      }

      const userData = {
        id: Date.now(),
        email,
        name: userName.charAt(0).toUpperCase() + userName.slice(1),
        role: userRole,
        institution: userRole === 'admin' ? 'Demo University' : null
      };

      login(userData);
      setError('');
      navigate(from, { replace: true });
    } else {
      setError(t('invalidCredentials'));
    }
  };

  return (
    <>
      <SEOHead 
        title="Login - Access Your MindTracker Account"
        description="Sign in to your MindTracker account to access personalized mindfulness exercises, track your wellness journey, and connect with mental health mentors at your educational institution."
        keywords="login, sign in, student account, mindfulness login, wellness platform access"
        url="/login"
      />
      <div className="page-container fade-in">
      <div className="form-container" style={{ margin: '2rem auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>{t('welcomeBack')}</h2>

        <div style={{ marginBottom: '2rem', padding: '1rem', background: 'var(--background)', borderRadius: 'var(--border-radius)', border: '1px solid var(--border)' }}>
          <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--primary-color)' }}>{t('demoCredentialsTitle')}</h4>
          <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            <p><strong>{t('studentCredential')}</strong> student@demo.com / password</p>
            <p><strong>{t('mentorCredential')}</strong> mentor@demo.com / password</p>
            <p><strong>{t('adminCredential')}</strong> admin@demo.com / password</p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
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
            />
          </div>

          <button type="submit" className="btn" style={{ width: '100%' }}>
            {t('signIn')}
          </button>

          {error && <div className="message message-error">{error}</div>}
        </form>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
            {t('noAccount')} <button
              className="btn-link"
              onClick={() => navigate('/signup')}
            >
              {t('signUp')}
            </button>
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default Login;
