import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import SEOHead from '../components/SEOHead';
import './DefaultPage.css';

const ContactUs = () => {
  const { t } = useLanguage();

  // Ensure page starts at top on load/refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    role: '',
    subject: '',
    message: '',
    contactPreference: 'email'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you for your message! We\'ll get back to you within 24 hours.');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        institution: '',
        role: '',
        subject: '',
        message: '',
        contactPreference: 'email'
      });
    }, 1500);
  };

  return (
    <>
      <SEOHead 
        title="Contact Us - MindTracker"
        description="Get in touch with the MindTracker team. We're here to help with questions about our mindfulness platform."
        keywords="contact mindtracker, support, customer service, mindfulness platform help"
        url="/contact-us"
      />
      <div className="page-container default-page">
        <div className="default-page-header">
          <span className="page-icon">📞</span>
          <h1>{t('contactUs')}</h1>
          <p className="page-subtitle">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>

        <div className="page-content">
          <div className="contact-layout">
            <div className="contact-info-section">
              <h2>Get In Touch</h2>
              <p>Have questions about MindTracker? Need technical support? Want to bring our platform to your institution? We're here to help.</p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <span className="contact-icon">📧</span>
                  <div>
                    <h3>Email</h3>
                    <p>hello@mindtracker.edu</p>
                    <small>We typically respond within 4-6 hours</small>
                  </div>
                </div>
                
                <div className="contact-method">
                  <span className="contact-icon">📞</span>
                  <div>
                    <h3>Phone</h3>
                    <p>+1 (555) 123-4567</p>
                    <small>Mon-Fri, 9AM-6PM EST</small>
                  </div>
                </div>
                
                <div className="contact-method">
                  <span className="contact-icon">💬</span>
                  <div>
                    <h3>Live Chat</h3>
                    <p>Available on platform</p>
                    <small>Mon-Fri, 9AM-8PM EST</small>
                  </div>
                </div>
              </div>

              <div className="office-info">
                <h3>🏢 Office Location</h3>
                <p>
                  MindTracker Headquarters<br/>
                  123 Wellness Street<br/>
                  Mindfulness City, MC 12345<br/>
                  United States
                </p>
              </div>
            </div>

            <div className="contact-form-section">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="institution">Institution/Organization</label>
                    <input
                      type="text"
                      id="institution"
                      name="institution"
                      value={formData.institution}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="role">Your Role</label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="">Select your role</option>
                      <option value="student">Student</option>
                      <option value="educator">Educator</option>
                      <option value="administrator">Administrator</option>
                      <option value="counselor">Counselor</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-input"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="technical">Technical Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="institutional">Institutional Partnership</option>
                    <option value="feature">Feature Request</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="form-input"
                    placeholder="Please provide details about your inquiry..."
                  ></textarea>
                </div>

                <div className="form-group">
                  <label>Preferred Contact Method</label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="contactPreference"
                        value="email"
                        checked={formData.contactPreference === 'email'}
                        onChange={handleChange}
                      />
                      📧 Email
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="contactPreference"
                        value="phone"
                        checked={formData.contactPreference === 'phone'}
                        onChange={handleChange}
                      />
                      📞 Phone
                    </label>
                  </div>
                </div>

                {submitMessage && (
                  <div className="success-message">
                    ✅ {submitMessage}
                  </div>
                )}

                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? '✉️ Sending...' : '📤 Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
