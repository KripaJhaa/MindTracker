import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import SEOHead from '../components/SEOHead';
import './Welcome.css';

const Welcome = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

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
      <div className="page-container fade-in-up" style={{
      background: 'var(--background)',
      minHeight: '100vh',
      padding: '2rem 1rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
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
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem'
        }}>
          <div className="practice-item fade-in-up" style={{
            animationDelay: '0.7s',
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

      {/* Institutional Footer */}
      <div style={{
        textAlign: 'center',
        color: 'var(--text-secondary)',
        fontSize: '0.9rem',
        marginTop: '4rem'
      }}>
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
