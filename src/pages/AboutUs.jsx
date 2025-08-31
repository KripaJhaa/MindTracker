import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import SEOHead from '../components/SEOHead';
import './DefaultPage.css';

const AboutUs = () => {
  const { t } = useLanguage();

  // Ensure page starts at top on load/refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead 
        title="About Us - MindTracker"
        description="Learn more about MindTracker's mission to bring mindfulness and wellness to educational institutions worldwide."
        keywords="about mindtracker, mindfulness platform, wellness technology, educational wellness"
        url="/about-us"
      />
      <div className="page-container default-page">
        <div className="default-page-header">
          <span className="page-icon">🏢</span>
          <h1>{t('aboutUs')}</h1>
          <p className="page-subtitle">{t('aboutUsSubtitle')}</p>
        </div>

        <div className="page-content">
          <section className="content-section">
            <h2>Our Mission</h2>
            <p>
              MindTracker is dedicated to bringing comprehensive mindfulness and wellness solutions 
              to educational institutions worldwide. We believe that mental health and well-being 
              are fundamental to academic success and personal growth.
            </p>
          </section>

          <section className="content-section">
            <h2>What We Do</h2>
            <div className="feature-grid">
              <div className="feature-item">
                <span className="feature-icon">🧘</span>
                <h3>Mindfulness Training</h3>
                <p>Guided meditation and mindfulness exercises designed for students and educators.</p>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📊</span>
                <h3>Progress Tracking</h3>
                <p>Comprehensive analytics to monitor wellness progress and engagement.</p>
              </div>
              <div className="feature-item">
                <span className="feature-icon">💬</span>
                <h3>Mentor Support</h3>
                <p>Connect with qualified mental health professionals and wellness mentors.</p>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📝</span>
                <h3>Reflective Journaling</h3>
                <p>Digital journaling tools for self-reflection and emotional processing.</p>
              </div>
            </div>
          </section>

          <section className="content-section">
            <h2>Our Values</h2>
            <ul className="values-list">
              <li><strong>Accessibility:</strong> Making wellness tools available to all students and institutions</li>
              <li><strong>Privacy:</strong> Protecting user data with the highest security standards</li>
              <li><strong>Evidence-Based:</strong> Using scientifically-proven mindfulness practices</li>
              <li><strong>Inclusivity:</strong> Creating a welcoming environment for all backgrounds</li>
              <li><strong>Innovation:</strong> Continuously improving our platform with latest technology</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>Contact Our Team</h2>
            <p>
              Have questions about MindTracker or interested in bringing our platform to your institution? 
              We'd love to hear from you.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>hello@mindtracker.edu</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
