import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import SEOHead from '../components/SEOHead';
import './DefaultPage.css';

const Accessibility = () => {
  const { t } = useLanguage();

  // Ensure page starts at top on load/refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead 
        title="Accessibility - MindTracker"
        description="MindTracker is committed to digital accessibility and inclusive design for all users."
        keywords="accessibility, inclusive design, digital accessibility, mindtracker accessibility"
        url="/accessibility"
      />
      <div className="page-container default-page">
        <div className="default-page-header">
          <span className="page-icon">♿</span>
          <h1>{t('accessibility')}</h1>
          <p className="page-subtitle">Our commitment to digital accessibility and inclusive design</p>
        </div>

        <div className="page-content">
          <section className="content-section">
            <h2>Our Commitment</h2>
            <p>
              MindTracker is committed to ensuring digital accessibility for all users, including 
              people with disabilities. We continually improve the user experience for everyone 
              and apply relevant accessibility standards.
            </p>
          </section>

          <section className="content-section">
            <h2>Accessibility Features</h2>
            <div className="feature-grid">
              <div className="feature-item">
                <span className="feature-icon">🎯</span>
                <h3>Keyboard Navigation</h3>
                <p>Full keyboard navigation support for all interactive elements and pages.</p>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🔍</span>
                <h3>Screen Reader Support</h3>
                <p>Compatible with popular screen readers and assistive technologies.</p>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🎨</span>
                <h3>High Contrast</h3>
                <p>Sufficient color contrast ratios for better readability.</p>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📱</span>
                <h3>Responsive Design</h3>
                <p>Accessible across all devices and screen sizes.</p>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🌐</span>
                <h3>Multi-Language</h3>
                <p>Available in multiple languages to serve diverse communities.</p>
              </div>
              <div className="feature-item">
                <span className="feature-icon">⚙️</span>
                <h3>Customizable</h3>
                <p>Adjustable font sizes and interface preferences.</p>
              </div>
            </div>
          </section>

          <section className="content-section">
            <h2>Standards Compliance</h2>
            <p>
              We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 
              Level AA standards. These guidelines help make web content more accessible 
              to people with disabilities.
            </p>
            
            <div className="security-features">
              <div className="security-item">
                <span className="security-icon">✅</span>
                <div>
                  <strong>WCAG 2.1 Level AA:</strong> Following international accessibility standards
                </div>
              </div>
              <div className="security-item">
                <span className="security-icon">🏛️</span>
                <div>
                  <strong>Section 508:</strong> Compliant with US federal accessibility requirements
                </div>
              </div>
              <div className="security-item">
                <span className="security-icon">🌍</span>
                <div>
                  <strong>ADA Compliance:</strong> Meeting Americans with Disabilities Act standards
                </div>
              </div>
            </div>
          </section>

          <section className="content-section">
            <h2>Accessibility Tools</h2>
            <div className="learning-resources">
              <div className="resource-item">
                <span className="resource-icon">⌨️</span>
                <div>
                  <h3>Keyboard Shortcuts</h3>
                  <p>Use Tab to navigate, Enter to select, and Escape to close dialogs</p>
                </div>
              </div>
              <div className="resource-item">
                <span className="resource-icon">🔊</span>
                <div>
                  <h3>Audio Controls</h3>
                  <p>All meditation audio includes playback controls and volume adjustment</p>
                </div>
              </div>
              <div className="resource-item">
                <span className="resource-icon">📝</span>
                <div>
                  <h3>Text Alternatives</h3>
                  <p>All images and media include descriptive alt text and transcripts</p>
                </div>
              </div>
            </div>
          </section>

          <section className="content-section">
            <h2>Feedback and Support</h2>
            <p>
              We welcome feedback on the accessibility of MindTracker. If you encounter 
              any accessibility barriers or have suggestions for improvement, please let us know.
            </p>
            
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>accessibility@mindtracker.edu</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>+1 (555) 123-4567 (TTY Available)</span>
              </div>
            </div>

            <p>
              We aim to respond to accessibility feedback within 2 business days and 
              will work with you to provide the information in an accessible format.
            </p>
          </section>

          <section className="content-section">
            <h2>Ongoing Improvements</h2>
            <p>
              Accessibility is an ongoing effort. We regularly:
            </p>
            <ul className="values-list">
              <li><strong>Test with assistive technologies</strong> to ensure compatibility</li>
              <li><strong>Conduct user research</strong> with people who have disabilities</li>
              <li><strong>Train our team</strong> on accessibility best practices</li>
              <li><strong>Review and update</strong> our content and features regularly</li>
              <li><strong>Monitor feedback</strong> and implement improvements continuously</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default Accessibility;
