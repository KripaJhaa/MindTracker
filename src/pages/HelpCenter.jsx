import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import SEOHead from '../components/SEOHead';
import './DefaultPage.css';

const HelpCenter = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  // Ensure page starts at top on load/refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const helpCategories = [
    {
      title: 'Getting Started',
      icon: '🚀',
      articles: [
        'How to create your account',
        'Setting up your profile',
        'Navigating the platform',
        'Your first meditation session'
      ]
    },
    {
      title: 'Meditation & Exercises',
      icon: '🧘',
      articles: [
        'Types of meditation available',
        'Creating a daily routine',
        'Tracking your progress',
        'Advanced mindfulness techniques'
      ]
    },
    {
      title: 'Journaling',
      icon: '📝',
      articles: [
        'How to use the digital journal',
        'Privacy and security of entries',
        'Reflection prompts and guides',
        'Exporting your journal data'
      ]
    },
    {
      title: 'Mentor Sessions',
      icon: '💬',
      articles: [
        'Booking a session with a mentor',
        'What to expect in sessions',
        'Rescheduling and cancellations',
        'Finding the right mentor'
      ]
    },
    {
      title: 'Reports & Analytics',
      icon: '📊',
      articles: [
        'Understanding your wellness reports',
        'Tracking progress over time',
        'Sharing reports with counselors',
        'Data privacy and permissions'
      ]
    },
    {
      title: 'Account & Settings',
      icon: '⚙️',
      articles: [
        'Managing your account settings',
        'Notification preferences',
        'Language and accessibility',
        'Deleting your account'
      ]
    }
  ];

  const popularArticles = [
    'How to start your daily meditation practice',
    'Understanding your wellness dashboard',
    'Connecting with a mental health mentor',
    'Privacy settings and data security',
    'Troubleshooting common issues'
  ];

  return (
    <>
      <SEOHead 
        title="Help Center - MindTracker"
        description="Find answers to common questions and learn how to make the most of your MindTracker experience."
        keywords="help center, mindtracker support, how to use mindtracker, meditation help, wellness platform guide"
        url="/help-center"
      />
      <div className="page-container default-page">
        <div className="default-page-header">
          <span className="page-icon">❓</span>
          <h1>{t('helpCenter')}</h1>
          <p className="page-subtitle">Find answers and learn how to make the most of MindTracker</p>
        </div>

        <div className="page-content">
          <div className="search-section">
            <div className="search-box">
              <span className="search-icon">🔍</span>
              <input 
                type="text" 
                placeholder="Search for help articles..." 
                className="search-input"
              />
            </div>
            <p className="search-hint">Try searching for "meditation", "journal", "mentor", or "account"</p>
          </div>

          <section className="content-section">
            <h2>📚 Popular Articles</h2>
            <div className="popular-articles">
              {popularArticles.map((article, index) => (
                <button 
                  key={index}
                  className="article-link"
                  onClick={() => alert(`This would open: "${article}"`)}
                >
                  <span className="article-icon">📖</span>
                  {article}
                  <span className="arrow">→</span>
                </button>
              ))}
            </div>
          </section>

          <section className="content-section">
            <h2>🗂️ Browse by Category</h2>
            <div className="help-categories">
              {helpCategories.map((category, index) => (
                <div key={index} className="help-category">
                  <div className="category-header">
                    <span className="category-icon">{category.icon}</span>
                    <h3>{category.title}</h3>
                  </div>
                  <ul className="category-articles">
                    {category.articles.map((article, articleIndex) => (
                      <li key={articleIndex}>
                        <button 
                          className="article-button"
                          onClick={() => alert(`This would open: "${article}"`)}
                        >
                          {article}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section">
            <h2>🆘 Still Need Help?</h2>
            <div className="additional-support">
              <div className="support-option">
                <span className="support-icon">💬</span>
                <div className="support-content">
                  <h3>Live Chat</h3>
                  <p>Chat with our support team in real-time</p>
                  <button 
                    className="support-btn"
                    onClick={() => alert('Live chat would open here')}
                  >
                    Start Chat
                  </button>
                </div>
              </div>
              
              <div className="support-option">
                <span className="support-icon">📧</span>
                <div className="support-content">
                  <h3>Email Support</h3>
                  <p>Send us a detailed message about your issue</p>
                  <button 
                    className="support-btn"
                    onClick={() => navigate('/contact-us')}
                  >
                    Contact Us
                  </button>
                </div>
              </div>
              
              <div className="support-option">
                <span className="support-icon">❓</span>
                <div className="support-content">
                  <h3>FAQ</h3>
                  <p>Check our frequently asked questions</p>
                  <button 
                    className="support-btn"
                    onClick={() => navigate('/faq')}
                  >
                    View FAQ
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="content-section">
            <h2>🎓 Learning Resources</h2>
            <div className="learning-resources">
              <div className="resource-item">
                <span className="resource-icon">📹</span>
                <div>
                  <h3>Video Tutorials</h3>
                  <p>Watch step-by-step guides for using MindTracker features</p>
                </div>
              </div>
              <div className="resource-item">
                <span className="resource-icon">📋</span>
                <div>
                  <h3>Quick Start Guide</h3>
                  <p>Get up and running with MindTracker in just a few minutes</p>
                </div>
              </div>
              <div className="resource-item">
                <span className="resource-icon">🎯</span>
                <div>
                  <h3>Best Practices</h3>
                  <p>Tips and strategies for maximizing your mindfulness journey</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default HelpCenter;
