import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';

const Home = () => {
  const navigate = useNavigate();
  const { user, isStudent, isMentor, isAdmin } = useAuth();
  const { t } = useLanguage();

  const getWelcomeMessage = () => {
    const timeOfDay = new Date().getHours();
    let greeting = t('goodMorning');
    if (timeOfDay >= 12 && timeOfDay < 17) greeting = t('goodAfternoon');
    else if (timeOfDay >= 17) greeting = t('goodEvening');

    return `${greeting}, ${user?.name || 'Student'}!`;
  };

  const getDailyPractice = () => {
    const practices = [
      {
        title: t('morningMeditation'),
        duration: "10 min",
        description: t('morningMeditationDesc'),
        emoji: "🌅",
        color: "var(--mindfulness-sage)",
        completed: false
      },
      {
        title: t('breathingExercise'),
        duration: "5 min",
        description: t('breathingExerciseDesc'),
        emoji: "💨",
        color: "var(--mindfulness-blue)",
        completed: false
      },
      {
        title: t('eveningReflection'),
        duration: "15 min",
        description: t('eveningReflectionDesc'),
        emoji: "🌙",
        color: "var(--mindfulness-lavender)",
        completed: false
      }
    ];
    return practices;
  };

  const getMindfulQuote = () => {
    const quotes = [
      {
        text: "Peace comes from within. Do not seek it without.",
        author: "Buddha",
        emoji: "☯️"
      },
      {
        text: "The present moment is the only moment available to us.",
        author: "Thich Nhat Hanh",
        emoji: "🌸"
      },
      {
        text: "Mindfulness is the miracle by which we master and restore ourselves.",
        author: "Thich Nhat Hanh",
        emoji: "🧘"
      },
      {
        text: "The mind is everything. What you think you become.",
        author: "Buddha",
        emoji: "🌟"
      }
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
  };

  const practices = getDailyPractice();
  const quote = getMindfulQuote();

  return (
    <div className="page-container fade-in-up" style={{
      background: 'var(--gradient-meditation)',
      minHeight: '100vh',
      padding: '2rem 1rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background Elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '10%',
        width: '100px',
        height: '100px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '50%',
        animation: 'float 8s ease-in-out infinite'
      }}></div>
      <div style={{
        position: 'absolute',
        top: '60%',
        right: '15%',
        width: '80px',
        height: '80px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '50%',
        animation: 'float 6s ease-in-out infinite reverse'
      }}></div>

      {/* Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '3rem',
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
            fontSize: '2.5rem',
            fontWeight: '300',
            margin: 0,
            letterSpacing: '2px'
          }}>
            {getWelcomeMessage()}
          </h1>
          <span style={{ fontSize: '2rem' }}>☯️</span>
        </div>
        <p style={{
          fontSize: '1.1rem',
          opacity: 0.9,
          margin: 0,
          fontWeight: '300'
        }}>
          {t('dailyJourney')}
        </p>
      </div>

      {/* Daily Practice Section */}
      <div className="meditation-card fade-in-up" style={{ animationDelay: '0.2s' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          <div style={{
            width: '4px',
            height: '40px',
            background: 'linear-gradient(to bottom, var(--mindfulness-sage), var(--mindfulness-teal))',
            borderRadius: '2px'
          }}></div>
          <h2 style={{
            color: 'var(--text-primary)',
            fontSize: '1.8rem',
            fontWeight: '400',
            margin: 0,
            letterSpacing: '0.5px'
          }}>
            {t('todaysPractice')}
          </h2>
          <div style={{
            width: '4px',
            height: '40px',
            background: 'linear-gradient(to bottom, var(--mindfulness-teal), var(--mindfulness-sage))',
            borderRadius: '2px'
          }}></div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}
        className="practice-grid"
        >
          {practices.map((practice, index) => (
            <div
              key={index}
              className="practice-item fade-in-up"
              onClick={() => navigate('/exercises')}
              style={{
                animationDelay: `${0.3 + index * 0.1}s`,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                border: '1px solid var(--border)',
                background: 'var(--surface)',
                borderRadius: '16px',
                padding: '1.5rem',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(139, 123, 139, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(139, 123, 139, 0.08)';
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem'
              }}>
                <div style={{
                  fontSize: '2.5rem',
                  background: practice.color,
                  borderRadius: '50%',
                  width: '60px',
                  height: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 20px rgba(139, 123, 139, 0.15)',
                  flexShrink: 0
                }}>
                  {practice.emoji}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    color: 'var(--text-primary)',
                    margin: '0 0 0.5rem 0',
                    fontSize: '1.2rem',
                    fontWeight: '500'
                  }}>
                    {practice.title}
                  </h3>
                  <p style={{
                    color: 'var(--text-secondary)',
                    margin: '0 0 0.75rem 0',
                    fontSize: '0.9rem',
                    lineHeight: 1.4
                  }}>
                    {practice.description}
                  </p>
                  <span style={{
                    background: 'var(--mindfulness-sage)',
                    color: 'white',
                    padding: '0.4rem 0.8rem',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: '500',
                    display: 'inline-block'
                  }}>
                    {practice.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mindful Moment */}
      <div className="meditation-card fade-in-up" style={{ animationDelay: '0.4s' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          <div style={{
            width: '4px',
            height: '40px',
            background: 'linear-gradient(to bottom, var(--mindfulness-lavender), var(--mindfulness-peach))',
            borderRadius: '2px'
          }}></div>
          <h2 style={{
            color: 'var(--text-primary)',
            fontSize: '1.8rem',
            fontWeight: '400',
            margin: 0,
            letterSpacing: '0.5px'
          }}>
            {t('mindfulMoment')}
          </h2>
          <div style={{
            width: '4px',
            height: '40px',
            background: 'linear-gradient(to bottom, var(--mindfulness-peach), var(--mindfulness-lavender))',
            borderRadius: '2px'
          }}></div>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: '3rem',
            background: 'var(--mindfulness-lavender)',
            borderRadius: '50%',
            width: '80px',
            height: '80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 20px rgba(139, 123, 139, 0.15)',
            position: 'relative'
          }}>
            {quote.emoji}
          </div>

          <div style={{
            background: 'var(--surface)',
            borderRadius: '16px',
            padding: '2rem',
            border: '1px solid var(--border)',
            boxShadow: '0 4px 20px rgba(139, 123, 139, 0.08)',
            position: 'relative'
          }}>
            <blockquote style={{
              fontSize: '1.3rem',
              fontStyle: 'italic',
              color: 'var(--text-primary)',
              marginBottom: '1rem',
              lineHeight: 1.6,
              fontWeight: '300',
              position: 'relative'
            }}>
              "{quote.text}"
            </blockquote>
            <cite style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              fontStyle: 'normal',
              fontWeight: '500'
            }}>
              — {quote.author}
            </cite>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="meditation-card fade-in-up" style={{ animationDelay: '0.6s' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          <div style={{
            width: '4px',
            height: '40px',
            background: 'linear-gradient(to bottom, var(--mindfulness-teal), var(--mindfulness-blue))',
            borderRadius: '2px'
          }}></div>
          <h2 style={{
            color: 'var(--text-primary)',
            fontSize: '1.8rem',
            fontWeight: '400',
            margin: 0,
            letterSpacing: '0.5px'
          }}>
            {t('quickActions')}
          </h2>
          <div style={{
            width: '4px',
            height: '40px',
            background: 'linear-gradient(to bottom, var(--mindfulness-blue), var(--mindfulness-teal))',
            borderRadius: '2px'
          }}></div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '1rem',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <button
            onClick={() => navigate('/exercises')}
            className="quick-action-btn"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '1.5rem 1rem',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontSize: '0.9rem',
              fontWeight: '500',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 2px 10px rgba(139, 123, 139, 0.08)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(139, 123, 139, 0.12)';
              e.currentTarget.style.background = 'var(--mindfulness-sage)';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 10px rgba(139, 123, 139, 0.08)';
              e.currentTarget.style.background = 'var(--surface)';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
          >
            <span style={{ fontSize: '1.5rem' }}>🧘</span>
            <span>{t('meditate')}</span>
          </button>

          <button
            onClick={() => navigate('/journal')}
            className="quick-action-btn"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '1.5rem 1rem',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontSize: '0.9rem',
              fontWeight: '500',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 2px 10px rgba(139, 123, 139, 0.08)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(139, 123, 139, 0.12)';
              e.currentTarget.style.background = 'var(--mindfulness-blue)';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 10px rgba(139, 123, 139, 0.08)';
              e.currentTarget.style.background = 'var(--surface)';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
          >
            <span style={{ fontSize: '1.5rem' }}>📝</span>
            <span>{t('reflect')}</span>
          </button>

          <button
            onClick={() => navigate('/book-mentor')}
            className="quick-action-btn"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '1.5rem 1rem',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontSize: '0.9rem',
              fontWeight: '500',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 2px 10px rgba(139, 123, 139, 0.08)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(139, 123, 139, 0.12)';
              e.currentTarget.style.background = 'var(--mindfulness-lavender)';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 10px rgba(139, 123, 139, 0.08)';
              e.currentTarget.style.background = 'var(--surface)';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
          >
            <span style={{ fontSize: '1.5rem' }}>💬</span>
            <span>{t('connect')}</span>
          </button>

          <button
            onClick={() => navigate('/growth-reports')}
            className="quick-action-btn"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '1.5rem 1rem',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontSize: '0.9rem',
              fontWeight: '500',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 2px 10px rgba(139, 123, 139, 0.08)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(139, 123, 139, 0.12)';
              e.currentTarget.style.background = 'var(--mindfulness-teal)';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 10px rgba(139, 123, 139, 0.08)';
              e.currentTarget.style.background = 'var(--surface)';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
          >
            <span style={{ fontSize: '1.5rem' }}>📊</span>
            <span>{t('progress')}</span>
          </button>
        </div>
      </div>

      {/* Institutional Footer */}
      <div style={{
        textAlign: 'center',
        color: 'var(--text-secondary)',
        fontSize: '0.9rem',
        marginTop: '3rem'
      }}>
        <p style={{ margin: 0 }}>
          🏫 {t('supportingWellness')} {user?.institution || t('yourInstitution')}
        </p>
        <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.8rem' }}>
          {t('buildingCommunities')}
        </p>
      </div>

      <style jsx>{`
        .practice-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        /* Mobile responsive styles */
        @media (max-width: 768px) {
          .practice-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .practice-item {
            padding: 1.25rem !important;
          }

          .practice-item h3 {
            font-size: 1.1rem !important;
          }

          .practice-item p {
            font-size: 0.85rem !important;
          }
        }

        @media (max-width: 480px) {
          .practice-grid {
            gap: 0.75rem;
          }

          .practice-item {
            padding: 1rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
