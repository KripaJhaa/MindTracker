import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import SEOHead from '../components/SEOHead';
import './DefaultPage.css';

const FAQ = () => {
  const { t } = useLanguage();
  const [openFAQ, setOpenFAQ] = useState(null);

  // Ensure page starts at top on load/refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqData = [
    {
      category: 'General',
      questions: [
        {
          question: 'What is MindTracker?',
          answer: 'MindTracker is a comprehensive mindfulness and wellness platform designed specifically for educational institutions. It provides guided meditation, journaling tools, mentor support, and progress tracking to support student mental health and well-being.'
        },
        {
          question: 'Who can use MindTracker?',
          answer: 'MindTracker is designed for students, educators, counselors, and administrators in educational institutions. We support users of all experience levels, from complete beginners to experienced meditation practitioners.'
        },
        {
          question: 'Is MindTracker free to use?',
          answer: 'MindTracker offers both free and premium features. Basic meditation exercises and journaling are available for free, while advanced features like mentor sessions and detailed analytics require a subscription or institutional license.'
        }
      ]
    },
    {
      category: 'Account & Setup',
      questions: [
        {
          question: 'How do I create an account?',
          answer: 'You can create an account by clicking "Sign Up" on our homepage. You\'ll need to provide your email address, create a password, and verify your institutional affiliation if applicable.'
        },
        {
          question: 'Can I use MindTracker on multiple devices?',
          answer: 'Yes! Your MindTracker account syncs across all devices. You can use it on your phone, tablet, and computer with the same account.'
        },
        {
          question: 'How do I reset my password?',
          answer: 'Click "Forgot Password" on the login page and enter your email address. We\'ll send you a secure link to reset your password.'
        }
      ]
    },
    {
      category: 'Meditation & Exercises',
      questions: [
        {
          question: 'I\'m new to meditation. Where should I start?',
          answer: 'We recommend starting with our "Beginner\'s Guide" series, which includes short 5-minute guided meditations that introduce basic mindfulness concepts and breathing techniques.'
        },
        {
          question: 'How long should I meditate each day?',
          answer: 'Even 5-10 minutes daily can be beneficial. We recommend starting with shorter sessions and gradually increasing duration as you become more comfortable with the practice.'
        },
        {
          question: 'Can I download meditations for offline use?',
          answer: 'Yes, premium subscribers can download meditation sessions for offline listening. This is perfect for practicing when you don\'t have internet access.'
        }
      ]
    },
    {
      category: 'Privacy & Security',
      questions: [
        {
          question: 'Is my data secure on MindTracker?',
          answer: 'Yes, we take privacy very seriously. All data is encrypted in transit and at rest, and we comply with HIPAA and other privacy regulations. Your personal information and journal entries are never shared without your explicit consent.'
        },
        {
          question: 'Who can see my journal entries?',
          answer: 'Your journal entries are completely private and only visible to you. They are encrypted and stored securely. You can choose to share specific entries with mentors or counselors if you wish.'
        },
        {
          question: 'Can I delete my account and data?',
          answer: 'Yes, you have full control over your data. You can delete your account at any time from your settings page, and all associated data will be permanently removed from our servers.'
        }
      ]
    },
    {
      category: 'Technical Support',
      questions: [
        {
          question: 'The app isn\'t working properly. What should I do?',
          answer: 'Try refreshing the page or restarting the app first. If the issue persists, check our Help Center for troubleshooting guides or contact our support team with details about the problem.'
        },
        {
          question: 'Why can\'t I hear the meditation audio?',
          answer: 'Check that your device volume is turned up and not muted. Also ensure that your browser or app has permission to play audio. Try using headphones if you\'re in a noisy environment.'
        },
        {
          question: 'How do I update the app?',
          answer: 'Web version updates automatically. For mobile apps, check your app store for available updates. We recommend keeping the app updated for the best experience and latest features.'
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenFAQ(openFAQ === key ? null : key);
  };

  return (
    <>
      <SEOHead 
        title="FAQ - MindTracker"
        description="Find answers to frequently asked questions about MindTracker's mindfulness and wellness platform."
        keywords="mindtracker faq, meditation questions, wellness platform help, student mental health"
        url="/faq"
      />
      <div className="page-container default-page">
        <div className="default-page-header">
          <span className="page-icon">❓</span>
          <h1>{t('faq')}</h1>
          <p className="page-subtitle">Frequently Asked Questions</p>
        </div>

        <div className="page-content">
          <div className="search-section">
            <div className="search-box">
              <span className="search-icon">🔍</span>
              <input 
                type="text" 
                placeholder="Search FAQ..." 
                className="search-input"
              />
            </div>
          </div>

          {faqData.map((category, categoryIndex) => (
            <section key={categoryIndex} className="faq-category">
              <h2 className="category-title">
                <span className="category-number">{categoryIndex + 1}</span>
                {category.category}
              </h2>
              
              <div className="faq-list">
                {category.questions.map((faq, questionIndex) => {
                  const key = `${categoryIndex}-${questionIndex}`;
                  const isOpen = openFAQ === key;
                  
                  return (
                    <div key={questionIndex} className={`faq-item ${isOpen ? 'open' : ''}`}>
                      <button 
                        className="faq-question"
                        onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                        aria-expanded={isOpen}
                      >
                        <span className="question-text">{faq.question}</span>
                        <span className={`faq-icon ${isOpen ? 'rotate' : ''}`}>
                          {isOpen ? '−' : '+'}
                        </span>
                      </button>
                      
                      <div className={`faq-answer ${isOpen ? 'expanded' : ''}`}>
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}

          <section className="content-section">
            <div className="still-need-help">
              <h2>Still have questions?</h2>
              <p>Can't find what you're looking for? We're here to help!</p>
              <div className="help-actions">
                <button 
                  className="help-btn primary"
                  onClick={() => window.location.href = '/contact-us'}
                >
                  📧 Contact Support
                </button>
                <button 
                  className="help-btn secondary"
                  onClick={() => window.location.href = '/help-center'}
                >
                  📚 Visit Help Center
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default FAQ;
