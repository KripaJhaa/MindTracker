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
            <li><button onClick={() => alert(t('aboutUsMessage'))}>{t('aboutUs')}</button></li>
            <li><button onClick={() => alert(t('privacyPolicyMessage'))}>{t('privacyPolicy')}</button></li>
            <li><button onClick={() => alert(t('termsOfServiceMessage'))}>{t('termsOfService')}</button></li>
          </ul>
        </div>

        <div className="footer-section">
          <h5>{t('support')}</h5>
          <ul className="footer-links">
            <li><button onClick={() => alert(t('contactUsMessage'))}>{t('contactUs')}</button></li>
            <li><button onClick={() => alert(t('helpCenterMessage'))}>{t('helpCenter')}</button></li>
            <li><button onClick={() => alert(t('faqMessage'))}>{t('faq')}</button></li>
          </ul>
        </div>

        <div className="footer-section">
          <h5>{t('connect')}</h5>
          <div className="footer-social">
            <button onClick={() => alert(t('socialMediaMessage'))} className="social-btn">
              📧 {t('email')}
            </button>
            <button onClick={() => alert(t('socialMediaMessage'))} className="social-btn">
              📞 {t('phone')}
            </button>
            <button onClick={() => alert(t('socialMediaMessage'))} className="social-btn">
              🐦 {t('twitter')}
            </button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {currentYear} MindTracker. {t('allRightsReserved')}</p>
          <div className="footer-bottom-links">
            <button onClick={() => alert(t('privacyPolicyMessage'))}>{t('privacy')}</button>
            <span>•</span>
            <button onClick={() => alert(t('termsOfServiceMessage'))}>{t('terms')}</button>
            <span>•</span>
            <button onClick={() => alert(t('accessibilityMessage'))}>{t('accessibility')}</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
