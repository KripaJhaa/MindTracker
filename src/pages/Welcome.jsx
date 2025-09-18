import React, { useEffect } from 'react';
// Standalone Offerings component
const OfferingsSection = ({ navigate }) => (
  <div style={{
    margin: '3rem auto',
    padding: '2.5rem 1.5rem',
    background: 'linear-gradient(135deg, #f3e8ff 0%, #eff6ff 100%)',
    borderRadius: '2rem',
    boxShadow: '0 8px 32px rgba(80, 80, 160, 0.08)',
    maxWidth: '900px',
    textAlign: 'center',
    border: '1px solid #e5e7eb',
    position: 'relative',
    zIndex: 2
  }}>
    <h2 style={{
      fontSize: '2rem',
      fontWeight: 700,
      marginBottom: '2rem',
      background: 'linear-gradient(to right, #2563eb, #9333ea)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      letterSpacing: '1px'
    }}>
      Discover Mindtrack Offerings
    </h2>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap' }}>
      <div style={{ textAlign: 'center', maxWidth: '22rem', background: 'white', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(80,80,160,0.06)', padding: '2rem 1rem', border: '1px solid #e5e7eb' }}>
        <p style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2563eb' }}>For Schools</p>
        <p style={{ fontSize: '0.95rem', color: '#374151', marginBottom: '1rem' }}>
          Empower students with daily mood tracking, mindfulness exercises, and journaling. Mindtrack for Schools helps build emotional resilience and wellbeing in K-12 and university settings.
        </p>
        <button
          style={{ padding: '0.75rem 2rem', borderRadius: '0.75rem', background: 'linear-gradient(to right, #2563eb, #9333ea)', color: 'white', fontWeight: 600, border: 'none', cursor: 'pointer', fontSize: '1rem', boxShadow: '0 2px 8px rgba(80,80,160,0.10)' }}
          onClick={() => navigate('/schools')}
        >
          Explore Schools Offering
        </button>
      </div>
      <div style={{ textAlign: 'center', maxWidth: '22rem', background: 'white', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(80,80,160,0.06)', padding: '2rem 1rem', border: '1px solid #e5e7eb' }}>
        <p style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.5rem', color: '#334155' }}>For Enterprise</p>
        <p style={{ fontSize: '0.95rem', color: '#374151', marginBottom: '1rem' }}>
          Transform workplace culture with Mindtrack for Enterprise. Boost employee wellbeing, reduce burnout, and foster a resilient, productive organization with science-backed mental wellness tools.
        </p>
        <button
          style={{ padding: '0.75rem 2rem', borderRadius: '0.75rem', background: 'linear-gradient(to right, #334155, #2563eb)', color: 'white', fontWeight: 600, border: 'none', cursor: 'pointer', fontSize: '1rem', boxShadow: '0 2px 8px rgba(80,80,160,0.10)' }}
          onClick={() => navigate('/enterprise')}
        >
          Explore Enterprise Offering
        </button>
      </div>
    </div>
  </div>
);
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import SEOHead from '../components/SEOHead';
import TestimonialSection from '../components/TestimonialSection';
import './Welcome.css';

const Welcome = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  // Ensure page starts at top on load/refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const platformFeatures = [
    {
      title: t('dailyMeditationTitle'),
      description: t('dailyMeditationDescription'),
      benefits: t('dailyMeditationBenefits'),
      emoji: '🧘',
      color: 'var(--mindfulness-sage)'
    },
    {
      title: t('mindfulReflectionTitle'),
      description: t('mindfulReflectionDescription'),
      benefits: t('mindfulReflectionBenefits'),
      emoji: '📝',
      color: 'var(--mindfulness-blue)'
    },
    {
      title: t('mentorSupportTitle'),
      description: t('mentorSupportDescription'),
      benefits: t('mentorSupportBenefits'),
      emoji: '💬',
      color: 'var(--mindfulness-lavender)'
    },
    {
      title: t('simpleProgressTitle'),
      description: t('simpleProgressDescription'),
      benefits: t('simpleProgressBenefits'),
      emoji: '📊',
      color: 'var(--mindfulness-teal)'
    }
  ];

  const institutionBenefits = [
    t('reduceStressText'),
    t('improveFocusText'),
    t('supportWellnessText'),
    t('buildResilienceText'),
    t('fosterEnvironmentsText'),
    t('hipaaCompliantText')
  ];

  return (
    <>
      <SEOHead 
        title="Welcome to MindTracker - Institutional Mindfulness Platform"
        description="Discover MindTracker, a comprehensive mindfulness and wellness platform designed specifically for educational institutions. Featuring guided meditation, journaling, mentor sessions, and detailed analytics to support student mental health."
        keywords="mindfulness platform, educational institutions, student wellness, guided meditation, mental health support, institutional mindfulness, wellness tracking"
        url="/welcome"
      />
      <div className="page-container fade-in-up">
      {/* Subtle Animated Background Elements */}
      <div style={{
        position: 'absolute',
        top: '5%',
        left: '5%',
        width: '120px',
        height: '120px',
        background: 'var(--mindfulness-lavender)',
        borderRadius: '50%',
        opacity: 0.1,
        animation: 'float 10s ease-in-out infinite'
      }}></div>
      <div style={{
        position: 'absolute',
        top: '70%',
        right: '10%',
        width: '100px',
        height: '100px',
        background: 'var(--mindfulness-peach)',
        borderRadius: '50%',
        opacity: 0.1,
        animation: 'float 8s ease-in-out infinite reverse'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '50%',
        width: '80px',
        height: '80px',
        background: 'var(--mindfulness-sage)',
        borderRadius: '50%',
        opacity: 0.1,
        animation: 'float 12s ease-in-out infinite'
      }}></div>

      {/* Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '4rem',
        color: 'var(--text-primary)',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '42px',
          gap: '1rem',
          marginBottom: '1rem'
        }}>
          <span style={{ fontSize: '2rem' }}>🧘</span>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '300',
            margin: 0,
            letterSpacing: '3px'
          }}>
            {t('institutionalMindfulnessTitle')}
          </h1>
          <span style={{ fontSize: '2rem' }}>☯️</span>
        </div>
        <p style={{
          fontSize: '1.2rem',
          opacity: 0.9,
          margin: 0,
          fontWeight: '300'
        }}>
          {t('bringingMeditationText')}
        </p>
      </div>

      {/* Institution Overview */}
      <div className="meditation-card fade-in-up" style={{ animationDelay: '0.2s', marginBottom: '3rem' }}>
        <h3 style={{
          color: 'var(--text-primary)',
          textAlign: 'center',
          marginBottom: '2rem',
          fontSize: '1.8rem',
          fontWeight: '300',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem'
        }}>
          <span style={{ fontSize: '1.5rem' }}>🏫</span>
          {t('supportingStudentHealthTitle')}
        </h3>
        <p style={{
          marginBottom: '2rem',
          color: 'var(--text-secondary)',
          textAlign: 'center',
          fontSize: '1.1rem',
          lineHeight: 1.6
        }}>
          {t('platformHelpsInstitutionsText')}
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1rem'
        }}>
          {institutionBenefits.map((benefit, index) => (
            <div
              key={index}
              className="practice-item fade-in-up"
              style={{
                animationDelay: `${0.3 + index * 0.1}s`,
                display: 'flex',
                alignItems: 'center',
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '15px',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <span style={{
                marginRight: '1rem',
                color: '#10b981',
                fontSize: '1.2rem',
                fontWeight: 'bold'
              }}>✓</span>
              <span style={{
                color: 'var(--text-primary)',
                fontSize: '0.9rem',
                fontWeight: '400'
              }}>{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Platform Features Overview */}
      <div className="meditation-card fade-in-up" style={{ animationDelay: '0.4s', marginBottom: '3rem' }}>
        <h3 style={{
          color: 'var(--text-primary)',
          textAlign: 'center',
          marginBottom: '2rem',
          fontSize: '1.8rem',
          fontWeight: '300',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem' 
        }}>
          <span style={{ fontSize: '1.5rem' }}>🛠️</span>
          {t('meditationToolsTitle')}
        </h3>
        <div className="features-grid">
          {platformFeatures.map((feature, index) => (
            <div
              key={index}
              className="feature-card fade-in-up"
              style={{
                animationDelay: `${0.5 + index * 0.1}s`
              }}
            >
              <div className="feature-icon" style={{ background: feature.color }}>
                {feature.emoji}
              </div>
              <h4 className="feature-title">{feature.title}</h4>
              <p className="feature-description">{feature.description}</p>
              <p className="feature-benefits">{t('benefitsText')}: {feature.benefits}</p>
            </div>
          ))}
        </div>
      </div>

      {/* User Types */}
      <div className="meditation-card fade-in-up" style={{ animationDelay: '0.6s', marginBottom: '3rem' }}>
        <h3 style={{
          color: 'var(--text-primary)',
          textAlign: 'center',
          marginBottom: '2rem',
          fontSize: '1.8rem',
          fontWeight: '300',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem'
        }}>
          <span style={{ fontSize: '1.5rem' }}>👥</span>
          {t('userRolesTitle')}
        </h3>
        <div className="user-roles-container" style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'stretch',
          gap: '1.5rem',
          width: '100%',
          margin: '0 auto'
        }}>
          <div className="practice-item fade-in-up" style={{
            animationDelay: '0.7s',
            flex: '1 1 220px',
            minWidth: '220px',
            maxWidth: '280px',
            padding: '1.5rem',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '2rem',
              marginBottom: '1rem'
            }}>🎓</div>
            <h4 style={{
              color: 'var(--text-primary)',
              margin: '0 0 0.5rem 0',
              fontSize: '1.2rem',
              fontWeight: '400'
            }}>
              {t('studentTitle')}
            </h4>
            <p style={{
              fontSize: '0.9rem',
              margin: 0,
              color: 'var(--text-secondary)',
              lineHeight: 1.5
            }}>
              {t('exerciseAccessText')}
            </p>
          </div>
          <div className="practice-item fade-in-up" style={{
            animationDelay: '0.8s',
            flex: '1 1 220px',
            minWidth: '220px',
            maxWidth: '280px',
            padding: '1.5rem',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '2rem',
              marginBottom: '1rem'
            }}>👨‍🏫</div>
            <h4 style={{
              color: 'var(--text-primary)',
              margin: '0 0 0.5rem 0',
              fontSize: '1.2rem',
              fontWeight: '400'
            }}>
              {t('mentorTitle')}
            </h4>
            <p style={{
              fontSize: '0.9rem',
              margin: 0,
              color: 'var(--text-secondary)',
              lineHeight: 1.5
            }}>
              {t('sessionManagementText')}
            </p>
          </div>
          <div className="practice-item fade-in-up" style={{
            animationDelay: '0.9s',
            flex: '1 1 220px',
            minWidth: '220px',
            maxWidth: '280px',
            padding: '1.5rem',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '2rem',
              marginBottom: '1rem'
            }}>🏫</div>
            <h4 style={{
              color: 'var(--text-primary)',
              margin: '0 0 0.5rem 0',
              fontSize: '1.2rem',
              fontWeight: '400'
            }}>
              {t('institutionAdminTitle')}
            </h4>
            <p style={{
              fontSize: '0.9rem',
              margin: 0,
              color: 'var(--text-secondary)',
              lineHeight: 1.5
            }}>
              {t('platformAccessText')}
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="meditation-card fade-in-up" style={{
        animationDelay: '1s',
        marginBottom: '3rem',
        textAlign: 'center'
      }}>
        <h3 style={{
          color: 'var(--text-primary)',
          marginBottom: '2rem',
          fontSize: '1.8rem',
          fontWeight: '300'
        }}>
          {t('beginJourneyTitle')}
        </h3>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'center',
          marginBottom: '2rem'
        }}>
          <button
            className="quick-action-btn"
            onClick={() => navigate('/profile-setup')}
            style={{ animationDelay: '1.1s' }}
          >
            <span style={{ fontSize: '1.5rem' }}>🎓</span>
            <span>{t('getStartedStudentText')}</span>
          </button>
          <button
            className="quick-action-btn"
            onClick={() => navigate('/profile-setup')}
            style={{ animationDelay: '1.2s' }}
          >
            <span style={{ fontSize: '1.5rem' }}>💬</span>
            <span>{t('joinAsMentorText')}</span>
          </button>
          <button
            className="quick-action-btn"
            onClick={() => navigate('/profile-setup')}
            style={{ animationDelay: '1.3s' }}
          >
            <span style={{ fontSize: '1.5rem' }}>⚙️</span>
            <span>{t('adminAccessText')}</span>
          </button>
        </div>
      </div>

      {/* Demo Section */}
      <div className="meditation-card fade-in-up" style={{
        animationDelay: '1.2s',
        textAlign: 'center'
      }}>
        <h3 style={{
          color: 'var(--text-primary)',
          marginBottom: '2rem',
          fontSize: '1.8rem',
          fontWeight: '300',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem'
        }}>
          <span style={{ fontSize: '1.5rem' }}>🚀</span>
          {t('tryDemoFeaturesTitle')}
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1rem',
          maxWidth: '700px',
          margin: '0 auto 2rem auto'
        }}>
          <button
            className="quick-action-btn"
            onClick={() => {
              alert(t('exercisesSectionDemoText'));
            }}
            style={{ animationDelay: '1.3s' }}
          >
            <span style={{ fontSize: '1.5rem' }}>🧘</span>
            <span>{t('tryExercisesText')}</span>
          </button>
          <button
            className="quick-action-btn"
            onClick={() => {
              alert(t('journalSectionDemoText'));
            }}
            style={{ animationDelay: '1.4s' }}
          >
            <span style={{ fontSize: '1.5rem' }}>📝</span>
            <span>{t('tryJournalText')}</span>
          </button>
          <button
            className="quick-action-btn"
            onClick={() => {
              alert(t('reportsSectionDemoText'));
            }}
            style={{ animationDelay: '1.5s' }}
          >
            <span style={{ fontSize: '1.5rem' }}>📊</span>
            <span>{t('viewSampleReportsText')}</span>
          </button>
        </div>
        <p style={{
          marginTop: '1rem',
          fontSize: '0.9rem',
          color: 'var(--text-secondary)',
          fontStyle: 'italic'
        }}>
          {t('signUpToUnlockText')}
        </p>
      </div>
      {/* Testimonials Section */}
      <TestimonialSection />
      {/* Institutional Footer */}
      <div style={{
        textAlign: 'center',
        color: 'var(--text-secondary)',
        fontSize: '0.9rem',
        marginTop: '4rem'
      }}>
                {/* Offerings Section */}
        <OfferingsSection navigate={navigate} />
        
        <p style={{ margin: 0 }}>
          🏫 {t('supportingWellnessWorldwideText')}
        </p>
        <p style={{
          margin: '0.5rem 0 0 0',
          fontSize: '0.8rem'
        }}>
          {t('buildingCommunitiesText')}
        </p>
      </div>
      </div>
    </>
  );
};

export default Welcome;
