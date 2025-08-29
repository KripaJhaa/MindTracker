import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Welcome = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const platformFeatures = [
    {
      title: t('dailyMeditation'),
      description: t('dailyMeditationDesc'),
      benefits: t('dailyMeditationBenefits'),
      emoji: '🧘',
      color: 'var(--mindfulness-sage)'
    },
    {
      title: t('mindfulReflection'),
      description: t('mindfulReflectionDesc'),
      benefits: t('mindfulReflectionBenefits'),
      emoji: '📝',
      color: 'var(--mindfulness-blue)'
    },
    {
      title: t('mentorSupport'),
      description: t('mentorSupportDesc'),
      benefits: t('mentorSupportBenefits'),
      emoji: '💬',
      color: 'var(--mindfulness-lavender)'
    },
    {
      title: t('simpleProgress'),
      description: t('simpleProgressDesc'),
      benefits: t('simpleProgressBenefits'),
      emoji: '📊',
      color: 'var(--mindfulness-teal)'
    }
  ];

  const institutionBenefits = [
    t('reduceStress'),
    t('improveFocus'),
    t('supportWellness'),
    t('buildResilience'),
    t('fosterEnvironments'),
    t('hipaaCompliant')
  ];

  return (
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
            {t('institutionalMindfulness')}
          </h1>
          <span style={{ fontSize: '2rem' }}>☯️</span>
        </div>
        <p style={{
          fontSize: '1.2rem',
          opacity: 0.9,
          margin: 0,
          fontWeight: '300'
        }}>
          {t('bringingMeditation')}
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
          {t('supportingStudentHealth')}
        </h3>
        <p style={{
          marginBottom: '2rem',
          color: 'var(--text-secondary)',
          textAlign: 'center',
          fontSize: '1.1rem',
          lineHeight: 1.6
        }}>
          {t('platformHelpsInstitutions')}
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
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
          {t('meditationTools')}
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem'
        }}>
          {platformFeatures.map((feature, index) => (
            <div
              key={index}
              className="practice-item fade-in-up"
              style={{
                animationDelay: `${0.5 + index * 0.1}s`,
                padding: '2rem',
                background: 'var(--surface)',
                borderRadius: '20px',
                border: '1px solid var(--border)',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(139, 123, 139, 0.08)'
              }}
            >
              <div style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <div style={{
                  fontSize: '3rem',
                  background: feature.color,
                  borderRadius: '50%',
                  width: '80px',
                  height: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 20px rgba(139, 123, 139, 0.15)'
                }}>
                  {feature.emoji}
                </div>
              </div>
              <h4 style={{
                margin: '0 0 0.5rem 0',
                color: 'var(--text-primary)',
                fontSize: '1.3rem',
                fontWeight: '400'
              }}>
                {feature.title}
              </h4>
              <p style={{
                margin: '0 0 1rem 0',
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.5
              }}>
                {feature.description}
              </p>
              <p style={{
                margin: 0,
                fontSize: '0.85rem',
                fontWeight: '500',
                color: '#10b981'
              }}>
                Benefits: {feature.benefits}
              </p>
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
          User Roles & Access Levels
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
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
              Students
            </h4>
            <p style={{
              fontSize: '0.9rem',
              margin: 0,
              color: 'var(--text-secondary)',
              lineHeight: 1.5
            }}>
              Access to exercises, journaling, mentor booking, and personal progress tracking
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
              Mentors
            </h4>
            <p style={{
              fontSize: '0.9rem',
              margin: 0,
              color: 'var(--text-secondary)',
              lineHeight: 1.5
            }}>
              Session management, student progress monitoring, and specialized guidance tools
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
              Institution Admins
            </h4>
            <p style={{
              fontSize: '0.9rem',
              margin: 0,
              color: 'var(--text-secondary)',
              lineHeight: 1.5
            }}>
              Full platform access, analytics dashboard, user management, and compliance reporting
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
          {t('beginJourney')}
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
            <span>{t('getStartedStudent')}</span>
          </button>
          <button
            className="quick-action-btn"
            onClick={() => navigate('/profile-setup')}
            style={{ animationDelay: '1.2s' }}
          >
            <span style={{ fontSize: '1.5rem' }}>💬</span>
            <span>{t('joinAsMentor')}</span>
          </button>
          <button
            className="quick-action-btn"
            onClick={() => navigate('/profile-setup')}
            style={{ animationDelay: '1.3s' }}
          >
            <span style={{ fontSize: '1.5rem' }}>⚙️</span>
            <span>{t('adminAccess')}</span>
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
          Try Demo Features
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
              alert('Demo: This would open the mindfulness exercises section. Sign up to access all features!');
            }}
            style={{ animationDelay: '1.3s' }}
          >
            <span style={{ fontSize: '1.5rem' }}>🧘</span>
            <span>Try Exercises</span>
          </button>
          <button
            className="quick-action-btn"
            onClick={() => {
              alert('Demo: This would open the personal journal. Sign up to start your mindfulness journey!');
            }}
            style={{ animationDelay: '1.4s' }}
          >
            <span style={{ fontSize: '1.5rem' }}>📝</span>
            <span>Try Journal</span>
          </button>
          <button
            className="quick-action-btn"
            onClick={() => {
              alert('Demo: This would show your progress reports. Sign up to track your wellness journey!');
            }}
            style={{ animationDelay: '1.5s' }}
          >
            <span style={{ fontSize: '1.5rem' }}>📊</span>
            <span>View Sample Reports</span>
          </button>
        </div>
        <p style={{
          marginTop: '1rem',
          fontSize: '0.9rem',
          color: 'var(--text-secondary)',
          fontStyle: 'italic'
        }}>
          Sign up to unlock all features and track your wellness journey
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
          🏫 {t('supportingWellnessWorldwide')}
        </p>
        <p style={{
          margin: '0.5rem 0 0 0',
          fontSize: '0.8rem'
        }}>
          {t('buildingCommunities')}
        </p>
      </div>
    </div>
  );
};

export default Welcome;
