import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

const Footer = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-brand">
            <h4>🧘 MindTracker</h4>
            <p>{t('footerDescription')}</p>
          </div>
        </div>

        <div className="footer-section">
          <h5>{t('quickLinks')}</h5>
          <ul className="footer-links">
            <li><button onClick={() => navigate('/')}>{t('home')}</button></li>
            <li><button onClick={() => navigate('/welcome')}>{t('welcome')}</button></li>
            <li><button onClick={() => navigate('/login')}>{t('login')}</button></li>
          </ul>
        </div>

        <div className="footer-section">
          <h5>{t('aboutSection')}</h5>
          <ul className="footer-links">
            <li><button onClick={() => navigate('/about-us')}>{t('aboutUs')}</button></li>
            <li><button onClick={() => navigate('/privacy-policy')}>{t('privacyPolicy')}</button></li>
            <li><button onClick={() => navigate('/terms-of-service')}>{t('termsOfService')}</button></li>
          </ul>
        </div>

        <div className="footer-section">
          <h5>{t('support')}</h5>
          <ul className="footer-links">
            <li><button onClick={() => navigate('/contact-us')}>{t('contactUs')}</button></li>
            <li><button onClick={() => navigate('/help-center')}>{t('helpCenter')}</button></li>
            <li><button onClick={() => navigate('/faq')}>{t('faq')}</button></li>
          </ul>
        </div>

        <div className="footer-section">
          <h5>{t('connect')}</h5>
          <div className="footer-social">
            <div className="social-info">
              <span className="social-icon">📧</span>
              <span className="social-text">hello@mindtracker.edu</span>
            </div>
            <div className="social-info">
              <span className="social-icon">📞</span>
              <span className="social-text">+1 (555) 123-4567</span>
            </div>
            <div className="social-info">
              <span className="social-icon">🌐</span>
              <span className="social-text">mindtracker.edu</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {currentYear} MindTracker. {t('allRightsReserved')}</p>
          <div className="footer-bottom-links">
            <button onClick={() => navigate('/privacy-policy')}>{t('privacy')}</button>
            <span>•</span>
            <button onClick={() => navigate('/terms-of-service')}>{t('terms')}</button>
            <span>•</span>
            <button onClick={() => navigate('/accessibility')}>{t('accessibility')}</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
