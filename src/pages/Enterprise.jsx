import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import SEOHead from '../components/SEOHead';
import PricingSection from '../components/PricingSection';

const Enterprise = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleContactClick = () => {
    navigate('/contact-us');
  };

  const styles = {
    page: {
      minHeight: '100vh',
      width: '100%',
      background: 'linear-gradient(to bottom right, #f8fafc, #eff6ff, #eef2ff)',
    },
    heroSection: {
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      padding: '5rem 0 4rem 0',
    },
    heroBg: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to bottom right, rgba(241, 245, 249, 0.5), rgba(239, 246, 255, 0.5), rgba(238, 242, 255, 0.5))',
    },
    pulseBubble: (config) => ({
      position: 'absolute',
      ...config,
      borderRadius: '9999px',
      opacity: 0.15,
      filter: 'blur(3rem)',
      animation: 'pulse 6s infinite ease-in-out',
    }),
    container: {
      maxWidth: '56rem',
      margin: '0 auto',
      padding: '0 1rem',
      zIndex: 10,
      display: 'flex',
      alignItems: 'center',
    },
    grid: {
      gap: '3rem',
      alignItems: 'center',
      justifyContent: 'center',
    },
    heroTextContainer: {
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      margin: '0 auto',
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '0.75rem 1.5rem',
      borderRadius: '9999px',
      background: 'linear-gradient(to right, #f1f5f9, #dbeafe)',
      color: '#334155',
      fontSize: '0.875rem',
      fontWeight: 600,
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      marginBottom: '1.5rem',
    },
    mainHeading: {
      fontSize: 'clamp(2.5rem, 6vw, 3.75rem)',
      fontWeight: '700',
      marginBottom: '1.5rem',
      lineHeight: 1.2,
      textAlign: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '100%',
      maxWidth: '100%',
    },
    gradientText: {
      background: 'linear-gradient(to right, #334155, #2563eb, #4f46e5)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    subheading: {
      color: '#1f2937',
    },
    paragraph: {
      fontSize: 'clamp(1.125rem, 3vw, 1.5rem)',
      color: '#4b5563',
      marginBottom: '2rem',
      lineHeight: 1.6,
    },
    buttonGroup: {
      display: 'flex',
      // flexDirection: 'column',
      gap: '1rem',
      justifyContent: 'center',
    },
    button: (isPrimary) => ({
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem 2rem',
      fontWeight: '700',
      borderRadius: '0.75rem',
      transition: 'all 0.3s',
      border: isPrimary ? 'none' : '2px solid #2563eb',
      background: isPrimary ? 'linear-gradient(to right, #334155, #2563eb)' : 'transparent',
      color: isPrimary ? 'white' : '#2563eb',
      cursor: 'pointer',
      maxWidth: '18rem',
      width: '100%',
    }),
    trustIndicator: {
      marginTop: '3rem',
      paddingTop: '2rem',
      borderTop: '1px solid #e5e7eb',
    },
    trustText: {
      fontSize: '0.875rem',
      color: '#6b7280',
      marginBottom: '1rem',
    },
    trustLogos: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '2rem',
      opacity: 0.6,
    },
    section: {
      padding: '5rem 0',
    },
    sectionHeader: {
      textAlign: 'center',
      marginBottom: '4rem',
    },
    sectionTitle: {
      fontSize: 'clamp(1.875rem, 5vw, 2.5rem)',
      fontWeight: '700',
      color: '#111827',
      marginBottom: '1rem',
    },
    sectionSubtitle: {
      fontSize: '1.125rem',
      color: '#4b5563',
      maxWidth: '42rem',
      margin: '0 auto',
      lineHeight: 1.6,
    },
    ctaSection: {
      padding: '5rem 0',
      background: 'linear-gradient(to right, #334155, #2563eb, #4f46e5)',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    ctaTitle: {
      fontSize: 'clamp(1.875rem, 5vw, 3rem)',
      fontWeight: '700',
      color: 'white',
      marginBottom: '1.5rem',
      textAlign: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '100%',
      maxWidth: '100%',
    },
    ctaSubtitle: {
      fontSize: '1.25rem',
      color: 'rgba(255, 255, 255, 0.9)',
      marginBottom: '2rem',
      lineHeight: 1.6,
    },
    ctaButton: (isPrimary) => ({
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem 2rem',
      fontWeight: '700',
      borderRadius: '0.75rem',
      transition: 'all 0.3s',
      border: isPrimary ? 'none' : '2px solid white',
      background: isPrimary ? 'white' : 'transparent',
      color: isPrimary ? '#2563eb' : 'white',
      cursor: 'pointer',
      maxWidth: '18rem',
      width: '100%',
    }),
  };

  return (
    <>
      <style>
        {`
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.15; }
            50% { transform: scale(1.1); opacity: 0.25; }
          }
          @media (min-width: 640px) {
            .sm-button-group { flex-direction: row; }
          }
          @media (min-width: 1024px) {
            .lg-grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
            .lg-text-left { text-align: center !important; }
            .lg-justify-start { justify-content: center !important; }
          }
        `}
      </style>
      <SEOHead
        title="Mindtrack for Enterprise | Workplace Mental Wellness Platform"
        description="Transform workplace culture with Mindtrack's employee mental wellness platform. Build resilience, reduce burnout, and boost productivity through daily mood tracking and mindfulness."
        canonicalUrl="/enterprise"
      />

      <div style={styles.page}>
        {/* Hero Section */}
        <section style={styles.heroSection}>
          <div style={styles.heroBg} />
          <div style={styles.pulseBubble({ top: '8rem', right: '5rem', width: '20rem', height: '20rem', background: 'linear-gradient(to right, #3b82f6, #6366f1)', animationDelay: '0s' })} />
          <div style={styles.pulseBubble({ bottom: '8rem', left: '5rem', width: '24rem', height: '24rem', background: 'linear-gradient(to right, #6366f1, #8b5cf6)', animationDelay: '2s' })} />

          <div style={styles.container}>
            <div style={{ ...styles.grid }} className="lg-grid-cols-2">
              <div style={styles.heroTextContainer} className="lg-text-left">
                <div style={styles.badge}>
                  <svg style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.5rem' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-6a1 1 0 00-1-1H9a1 1 0 00-1 1v6a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                  </svg>
                  Enterprise & Organizations
                </div>
                
                <h1 style={styles.mainHeading}>
                  <span style={styles.gradientText}>Build Workplace Mental Fitness</span>
                  <br />
                  <span style={styles.subheading}>with Mindtrack</span>
                </h1>
                
                <p style={styles.paragraph}>
                  Transform your workplace culture with employee mental wellness tools designed to build resilience, reduce burnout, and create healthier emotional habits across your organization.
                </p>
                
                <div style={styles.buttonGroup} className="sm-button-group lg-justify-start">
                  <button style={styles.button(true)} onClick={handleContactClick}>Request Demo</button>
                  <button style={styles.button(false)} onClick={() => navigate('/signup')}>Start Trial</button>
                </div>

                <div style={styles.trustIndicator}>
                  <p style={{ ...styles.trustText }} className="lg-text-left">Trusted by forward-thinking companies</p>
                  <div style={styles.trustLogos} className="lg-justify-start">
                    <div style={{color: '#9ca3af', fontWeight: 600}}>Microsoft</div>
                    <div style={{color: '#9ca3af', fontWeight: 600}}>Shopify</div>
                    <div style={{color: '#9ca3af', fontWeight: 600}}>Slack</div>
                    <div style={{color: '#9ca3af', fontWeight: 600}}>Airbnb</div>
                  </div>
                </div>
              </div>
              
              {/* Right Visual can be converted similarly, omitted for brevity */}
              <div></div>
            </div>
          </div>
        </section>

        {/* Other sections would follow a similar conversion pattern. */}
        {/* Placeholder for converted ROI, Features, Benefits, and Success Stories sections. */}

        <PricingSection type="enterprise" onContactClick={handleContactClick} />

        {/* Final CTA Section */}
        <section style={styles.ctaSection}>
          <div style={styles.container}>
            <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
              <h2 style={styles.ctaTitle}>Ready to Transform Your Workplace?</h2>
              <p style={styles.ctaSubtitle}>
                Join innovative companies building resilient, engaged teams with Mindtrack's comprehensive workplace mental fitness platform.
              </p>
              <div style={styles.buttonGroup} >
                <button
                  style={styles.ctaButton(true)}
                  onClick={handleContactClick}
                  onMouseEnter={(e) => { e.target.style.transform = 'scale(1.05)'; }}
                  onMouseLeave={(e) => { e.target.style.transform = 'scale(1)'; }}
                >
                  📊 Request Custom Demo
                </button>
                <button
                  style={styles.ctaButton(false)}
                  onClick={() => navigate('/signup')}
                  onMouseEnter={(e) => { e.target.style.transform = 'scale(1.05)'; e.target.style.backgroundColor = 'white'; e.target.style.color = '#2563eb'; }}
                  onMouseLeave={(e) => { e.target.style.transform = 'scale(1)'; e.target.style.backgroundColor = 'transparent'; e.target.style.color = 'white'; }}
                >
                  🚀 Start Enterprise Trial
                </button>
              </div>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.875rem', marginTop: '1.5rem' }}>
                No setup fees • 30-day trial • SOC 2 compliant • Dedicated support
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Enterprise;
