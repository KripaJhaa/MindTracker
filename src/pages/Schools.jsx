import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import SEOHead from '../components/SEOHead';
import PricingSection from '../components/PricingSection';

const Schools = () => {
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
      background: 'linear-gradient(to bottom right, #eff6ff, #f3e8ff, #fce7f3)',
    },
    heroSection: {
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      paddingTop: '5rem',
      paddingBottom: '4rem',
    },
    heroBg: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to bottom right, rgba(219, 234, 254, 0.5), rgba(243, 232, 255, 0.5), rgba(252, 231, 243, 0.5))',
    },
    pulseBubble1: {
      position: 'absolute',
      top: '5rem',
      left: '2.5rem',
      width: '18rem',
      height: '18rem',
      background: 'linear-gradient(to right, #60a5fa, #a78bfa)',
      borderRadius: '9999px',
      opacity: 0.2,
      filter: 'blur(3rem)',
      animation: 'pulse 4s infinite',
    },
    pulseBubble2: {
      position: 'absolute',
      bottom: '5rem',
      right: '2.5rem',
      width: '24rem',
      height: '24rem',
      background: 'linear-gradient(to right, #a78bfa, #f472b6)',
      borderRadius: '9999px',
      opacity: 0.2,
      filter: 'blur(3rem)',
      animation: 'pulse 4s infinite 1s',
    },
    container: {
      maxWidth: '56rem',
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: '0 1rem',
      zIndex: 10,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    grid: {
      display: 'grid',
      gap: '3rem',
    },
    heroGrid: {
      gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
      '@media (min-width: 1024px)': {
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
      },
      alignItems: 'center',
        grid: {
          display: 'grid',
          gap: '3rem',
          alignItems: 'center',
          justifyContent: 'center',
        },
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
        },
        heroText: {
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
        },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '0.75rem 1.5rem',
      borderRadius: '9999px',
      background: 'linear-gradient(to right, #dbeafe, #f3e8ff)',
      color: '#2563eb',
      fontSize: '0.875rem',
      fontWeight: '600',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      marginBottom: '1.5rem',
    },
    mainHeading: {
      fontSize: '2.25rem', // text-4xl
      fontWeight: '700',
      marginBottom: '1.5rem',
      lineHeight: 1.2,
    },
    gradientText: {
      background: 'linear-gradient(to right, #2563eb, #9333ea, #db2777)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    subHeading: {
      color: '#1f2937',
    },
    paragraph: {
      fontSize: '1.25rem',
      color: '#4b5563',
      marginBottom: '2rem',
      lineHeight: 1.6,
    },
    buttonGroup: {
      display: 'flex',
      flexDirection: 'row',
      gap: '1rem',
      justifyContent: 'center',
    },
    primaryButton: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '1rem 2rem',
      background: 'linear-gradient(to right, #2563eb, #9333ea)',
      color: 'white',
      fontWeight: '700',
      borderRadius: '0.75rem',
      transition: 'all 0.3s',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      border: 'none',
      cursor: 'pointer',
      maxWidth: '18rem',
      width: '100%',
    },
    secondaryButton: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '1rem 2rem',
      border: '2px solid #9333ea',
      color: '#9333ea',
      fontWeight: '700',
      borderRadius: '0.75rem',
      transition: 'all 0.3s',
      background: 'transparent',
      cursor: 'pointer',
      maxWidth: '18rem',
      width: '100%',
    },
    trustIndicator: {
      marginTop: '3rem',
      paddingTop: '2rem',
      borderTop: '1px solid #e5e7eb',
    },
    trustText: {
      fontSize: '0.875rem',
      color: '#6b7280',
      marginBottom: '1rem',
      textAlign: 'center',
    },
    trustLogos: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '2rem',
      opacity: 0.6,
    },
    visualCard: {
      position: 'relative',
      background: 'white',
      borderRadius: '1.5rem',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      padding: '2rem',
      transform: 'rotate(3deg)',
      transition: 'transform 0.5s',
    },
    macButtons: {
      position: 'absolute',
      top: '1rem',
      left: '1rem',
      display: 'flex',
      gap: '0.5rem',
    },
    macButton: (color) => ({
      width: '0.75rem',
      height: '0.75rem',
      backgroundColor: color,
      borderRadius: '9999px',
    }),
    cardContent: {
      marginTop: '2rem',
    },
    cardTitle: {
      fontSize: '1.125rem',
      fontWeight: '700',
      color: '#111827',
      marginBottom: '1rem',
    },
    checkinItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0.75rem',
      borderRadius: '0.5rem',
      marginBottom: '1rem',
    },
    energyBarContainer: {
      display: 'flex',
      gap: '0.25rem',
    },
    energyBar: (filled) => ({
      width: '0.5rem',
      height: '1.5rem',
      backgroundColor: filled ? '#a78bfa' : '#e5e7eb',
      borderRadius: '0.25rem',
    }),
    section: {
      padding: '5rem 0',
      backgroundColor: 'white',
    },
    sectionTextCenter: {
      textAlign: 'center',
      marginBottom: '4rem',
    },
    sectionTitle: {
      fontSize: '1.875rem',
      fontWeight: '700',
      color: '#111827',
      marginBottom: '1rem',
    },
    sectionSubtitle: {
      fontSize: '1.125rem',
      color: '#4b5563',
      maxWidth: '42rem',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    statCard: {
      textAlign: 'center',
      padding: '1.5rem',
      background: 'linear-gradient(to bottom right, #eff6ff, #f3e8ff)',
      borderRadius: '1rem',
    },
    featureCard: {
      background: 'white',
      borderRadius: '1rem',
      padding: '2rem',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      transition: 'all 0.3s',
    },
    benefitItem: {
      display: 'flex',
      alignItems: 'flex-start',
    },
    testimonialCard: {
      background: 'white',
      borderRadius: '1rem',
      padding: '2rem',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      transition: 'transform 0.3s',
    },
    starRating: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1rem',
    },
    ctaSection: {
      padding: '5rem 0',
      background: 'linear-gradient(to right, #2563eb, #9333ea, #db2777)',
      textAlign: 'center',
      color: 'white',
    },
    // Add other styles as needed
  };

  return (
    <>
      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 0.3; }
          }
          @media (min-width: 640px) {
            .sm-flex-row { flex-direction: row; }
            .sm-text-5xl { font-size: 3rem; }
          }
          @media (min-width: 768px) {
            .md-text-6xl { font-size: 3.75rem; }
            .md-grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
          }
          @media (min-width: 1024px) {
            .lg-grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
            .lg-grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
            .lg-text-left { text-align: left; }
            .lg-justify-start { justify-content: flex-start; }
          }
        `}
      </style>
      <SEOHead
        title="Mindtrack for Schools | Student Mental Wellness Platform"
        description="Build emotional resilience in your students with Mindtrack's daily mood tracking and mental fitness platform designed for K-12 schools and universities."
        canonicalUrl="/schools"
      />

      <div style={styles.page}>
        
        {/* Hero Section */}
        <section style={styles.heroSection}>
          <div style={styles.heroBg} />
          <div style={styles.pulseBubble1} />
          <div style={styles.pulseBubble2} />

          <div style={styles.container}>
            <div style={{ ...styles.grid, ...styles.heroGrid }} className="lg-grid-cols-2">
              
              {/* Left Content */}
              <div style={styles.heroText} className="lg-text-left">
                <div style={{ marginBottom: '1.5rem', display: 'inline-block' }}>
                  <span style={styles.badge}>
                    🎓 K-12 Schools & Universities
                  </span>
                </div>
                
                <h1 style={styles.mainHeading} className="sm-text-5xl md-text-6xl">
                  <span style={styles.gradientText}>
                    Build Student Emotional Resilience
                  </span>
                  <br />
                  <span style={styles.subHeading}>
                    with Mindtrack
                  </span>
                </h1>
                
                <p style={styles.paragraph}>
                  Empower your students to develop healthy emotional habits through daily mood tracking, mindful breathing, and personalized journaling designed specifically for young people.
                </p>
                
                <div style={styles.buttonGroup} className="sm-flex-row lg-justify-start">
                  <button onClick={handleContactClick} style={styles.primaryButton}>
                    🚀 Schedule Demo
                  </button>
                  <button onClick={() => navigate('/signup')} style={styles.secondaryButton}>
                    ✨ Start Free Trial
                  </button>
                </div>

                <div style={styles.trustIndicator}>
                  <p style={styles.trustText} className="lg-text-left">Trusted by leading educational institutions</p>
                  <div style={styles.trustLogos} className="lg-justify-start">
                    <div style={{color: '#9ca3af', fontWeight: 600}}>Harvard University</div>
                    <div style={{color: '#9ca3af', fontWeight: 600}}>MIT</div>
                    <div style={{color: '#9ca3af', fontWeight: 600}}>Stanford</div>
                    <div style={{color: '#9ca3af', fontWeight: 600}}>Berkeley</div>
                  </div>
                </div>
              </div>

              {/* Right Visual */}
              <div style={{ position: 'relative' }}>
                <div style={styles.visualCard}>
                  <div style={styles.macButtons}>
                    <div style={styles.macButton('#f87171')}></div>
                    <div style={styles.macButton('#fbbf24')}></div>
                    <div style={styles.macButton('#4ade80')}></div>
                  </div>
                  
                  <div style={styles.cardContent}>
                    <h3 style={styles.cardTitle}>Today's Mood Check-in</h3>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <div style={{ ...styles.checkinItem, backgroundColor: '#eff6ff' }}>
                        <span style={{ color: '#374151' }}>How are you feeling?</span>
                        <span style={{ fontSize: '1.5rem' }}>😊</span>
                      </div>
                      
                      <div style={{ ...styles.checkinItem, backgroundColor: '#f3e8ff' }}>
                        <span style={{ color: '#374151' }}>Energy Level</span>
                        <div style={styles.energyBarContainer}>
                          <div style={styles.energyBar(true)}></div>
                          <div style={styles.energyBar(true)}></div>
                          <div style={styles.energyBar(true)}></div>
                          <div style={styles.energyBar(false)}></div>
                          <div style={styles.energyBar(false)}></div>
                        </div>
                      </div>
                      
                      <button style={{ width: '100%', padding: '0.75rem', background: 'linear-gradient(to right, #3b82f6, #a855f7)', color: 'white', fontWeight: 600, borderRadius: '0.5rem', border: 'none' }}>
                        Complete Check-in
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other sections would follow a similar conversion pattern */}
        <PricingSection type="school" onContactClick={handleContactClick} />
        
        {/* CTA Section */}
        <section style={styles.ctaSection}>
          <div style={styles.container}>
            <div style={{maxWidth: '56rem', margin: '0 auto'}}>
              <h2 style={{fontSize: '2.25rem', fontWeight: 700, color: 'white', marginBottom: '1.5rem'}} className="md-text-5xl">
                Ready to Transform Student Wellbeing?
              </h2>
              <p style={{fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)', marginBottom: '2rem', lineHeight: 1.6}}>
                Join thousands of educators who are building emotional resilience in their students with Mindtrack's comprehensive mental fitness platform.
              </p>
              
              <div style={styles.buttonGroup} className="sm-flex-row">
                <button onClick={handleContactClick} style={{...styles.primaryButton, background: 'white', color: '#9333ea'}}>
                  📅 Schedule Demo
                </button>
                <button onClick={() => navigate('/signup')} style={{...styles.secondaryButton, borderColor: 'white', color: 'white'}}>
                  🚀 Start Free Trial
                </button>
              </div>
              
              <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem', marginTop: '1.5rem'}}>
                No credit card required • 30-day free trial • FERPA compliant
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Schools;
