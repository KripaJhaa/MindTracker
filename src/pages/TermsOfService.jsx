import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import SEOHead from '../components/SEOHead';
import './DefaultPage.css';

const TermsOfService = () => {
  const { t } = useLanguage();

  // Ensure page starts at top on load/refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead 
        title="Terms of Service - MindTracker"
        description="Read MindTracker's terms of service to understand the rules and guidelines for using our platform."
        keywords="terms of service, user agreement, mindtracker terms, platform rules"
        url="/terms-of-service"
      />
      <div className="page-container default-page">
        <div className="default-page-header">
          <span className="page-icon">📋</span>
          <h1>{t('termsOfService')}</h1>
          <p className="page-subtitle">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="page-content">
          <section className="content-section">
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using MindTracker, you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to abide by the above, 
              please do not use this service.
            </p>
          </section>

          <section className="content-section">
            <h2>Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of MindTracker per device 
              for personal, non-commercial transitory viewing only.
            </p>
            <ul>
              <li>This is the grant of a license, not a transfer of title</li>
              <li>Under this license you may not modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>User Responsibilities</h2>
            <p>As a user of MindTracker, you agree to:</p>
            <ul>
              <li>Provide accurate and truthful information</li>
              <li>Maintain the confidentiality of your account</li>
              <li>Use the platform in accordance with applicable laws</li>
              <li>Not share inappropriate or harmful content</li>
              <li>Respect other users' privacy and well-being</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>Mental Health Disclaimer</h2>
            <div className="disclaimer-box">
              <p>
                <strong>Important:</strong> MindTracker is a wellness platform designed to support 
                mental health through mindfulness practices. It is not a substitute for professional 
                medical or psychological treatment.
              </p>
              <p>
                If you are experiencing a mental health crisis, please contact your local emergency 
                services or a qualified mental health professional immediately.
              </p>
            </div>
          </section>

          <section className="content-section">
            <h2>Limitation of Liability</h2>
            <p>
              In no event shall MindTracker or its suppliers be liable for any damages 
              (including, without limitation, damages for loss of data or profit) arising 
              out of the use or inability to use MindTracker.
            </p>
          </section>

          <section className="content-section">
            <h2>Modifications</h2>
            <p>
              MindTracker may revise these terms of service at any time without notice. 
              By using this platform, you are agreeing to be bound by the then current 
              version of these terms of service.
            </p>
          </section>

          <section className="content-section">
            <h2>Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>legal@mindtracker.edu</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;
