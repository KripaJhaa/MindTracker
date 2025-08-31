import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import SEOHead from '../components/SEOHead';
import './DefaultPage.css';

const PrivacyPolicy = () => {
  const { t } = useLanguage();

  // Ensure page starts at top on load/refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead 
        title="Privacy Policy - MindTracker"
        description="Read MindTracker's privacy policy to understand how we protect and handle your personal information."
        keywords="privacy policy, data protection, user privacy, mindtracker privacy"
        url="/privacy-policy"
      />
      <div className="page-container default-page">
        <div className="default-page-header">
          <span className="page-icon">🔒</span>
          <h1>{t('privacyPolicy')}</h1>
          <p className="page-subtitle">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="page-content">
          <section className="content-section">
            <h2>Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you create an account, 
              participate in meditation sessions, or contact us for support.
            </p>
            <ul>
              <li>Account information (name, email address, institution)</li>
              <li>Wellness and meditation session data</li>
              <li>Journal entries and reflections (encrypted and private)</li>
              <li>Usage analytics and app performance data</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and maintain our mindfulness services</li>
              <li>Personalize your wellness experience</li>
              <li>Generate progress reports and analytics</li>
              <li>Communicate with you about your account and services</li>
              <li>Improve our platform and develop new features</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>Data Protection</h2>
            <p>
              We implement appropriate security measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <div className="security-features">
              <div className="security-item">
                <span className="security-icon">🔐</span>
                <strong>Encryption:</strong> All data is encrypted in transit and at rest
              </div>
              <div className="security-item">
                <span className="security-icon">🏥</span>
                <strong>HIPAA Compliance:</strong> We follow healthcare privacy standards
              </div>
              <div className="security-item">
                <span className="security-icon">🛡️</span>
                <strong>Access Controls:</strong> Limited access to personal data
              </div>
            </div>
          </section>

          <section className="content-section">
            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Delete your account and associated data</li>
              <li>Export your data</li>
              <li>Opt-out of certain communications</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>privacy@mindtracker.edu</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
