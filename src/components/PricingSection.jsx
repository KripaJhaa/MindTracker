import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const PricingSection = ({ type = 'school', onContactClick }) => {
  const { t } = useLanguage();

  const schoolPlans = [
    {
      name: 'Starter', price: '$6', period: 'per student/month', originalPrice: '$10',
      description: 'Perfect for small schools starting their mental wellness journey',
      features: ['Up to 100 students', 'Daily mood tracking', 'Basic mindfulness exercises', 'Personal journaling tools', 'Weekly wellness reports', 'Email support', 'FERPA compliant'],
      highlighted: false, color: '#4F46E5', bgColor: 'linear-gradient(to bottom right, #eef2ff, #eff6ff)'
    },
    {
      name: 'Professional', price: '$12', period: 'per student/month', originalPrice: '$18',
      description: 'Comprehensive solution for growing educational institutions',
      features: ['Up to 500 students', 'Advanced mood analytics', 'Guided breathing exercises', 'Custom wellness programs', 'Real-time wellness insights', 'Teacher dashboard access', 'Priority support', 'Staff training included', 'Custom school branding'],
      highlighted: true, color: '#7C3AED', bgColor: 'linear-gradient(to bottom right, #f5f3ff, #eef2ff)'
    },
    {
      name: 'Enterprise', price: 'Custom', period: 'pricing', originalPrice: null,
      description: 'Tailored solution for large universities and school districts',
      features: ['Unlimited students', 'Multi-campus support', 'Custom integrations', 'Advanced reporting suite', 'Dedicated account manager', '24/7 phone support', 'On-site training program', 'API access', 'White-label options', 'Custom feature development'],
      highlighted: false, color: '#059669', bgColor: 'linear-gradient(to bottom right, #ecfdf5, #f0fdfa)'
    }
  ];

  const enterprisePlans = [
    {
      name: 'Starter', price: '$8', period: 'per employee/month', originalPrice: '$12',
      description: 'Essential mental wellness tools for small to medium businesses',
      features: ['Up to 50 employees', 'Daily mood tracking', 'Stress management tools', 'Basic wellness analytics', 'Monthly reports', 'Email support', 'Mobile app access'],
      highlighted: false, color: '#0891B2', bgColor: 'linear-gradient(to bottom right, #ecfeff, #eff6ff)'
    },
    {
      name: 'Professional', price: '$20', period: 'per employee/month', originalPrice: '$30',
      description: 'Advanced workplace wellness solution for growing companies',
      features: ['Up to 500 employees', 'Advanced mood analytics', 'Team wellness insights', 'Custom wellness programs', 'Manager dashboard', 'Integration with HR systems', 'Priority support', 'Burnout prevention alerts', 'Leadership training included'],
      highlighted: true, color: '#DC2626', bgColor: 'linear-gradient(to bottom right, #fee2e2, #fdf2f8)'
    },
    {
      name: 'Enterprise', price: 'Custom', period: 'pricing', originalPrice: null,
      description: 'Complete enterprise solution for large organizations',
      features: ['Unlimited employees', 'Multi-location support', 'Advanced integrations', 'Executive reporting suite', 'Dedicated success manager', '24/7 priority support', 'On-site implementation', 'Custom API development', 'White-label platform', 'Compliance certifications'],
      highlighted: false, color: '#7C2D12', bgColor: 'linear-gradient(to bottom right, #fff7ed, #fee2e2)'
    }
  ];

  const plans = type === 'school' ? schoolPlans : enterprisePlans;
  const sectionTitle = type === 'school' ? 'School Pricing Plans' : 'Enterprise Pricing Plans';
  const sectionSubtitle = type === 'school' 
    ? 'Flexible plans to support mental wellness in every educational setting'
    : 'Scalable solutions for organizations of all sizes';

  const styles = {
    section: {
      padding: '4rem 0',
      backgroundColor: '#f9fafb',
    },
    container: {
      maxWidth: '80rem',
      margin: '0 auto',
      padding: '0 1rem',
    },
    header: {
      textAlign: 'center',
      marginBottom: '4rem',
    },
    launchBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '0.5rem 1rem',
      borderRadius: '9999px',
      background: 'linear-gradient(to right, #dbeafe, #f3e8ff)',
      marginBottom: '1.5rem',
      fontSize: '0.875rem',
      fontWeight: 500,
      color: '#374151',
    },
    sectionTitle: {
      fontSize: 'clamp(2rem, 5vw, 3rem)',
      fontWeight: '700',
      marginBottom: '1.5rem',
      background: 'linear-gradient(to right, #111827, #1e40af, #6b21a8)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    sectionSubtitle: {
      fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
      color: '#4b5563',
      maxWidth: '42rem',
      margin: '0 auto',
      lineHeight: 1.6,
    },
    pricingGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '2rem',
      maxWidth: '80rem',
      margin: '0 auto 4rem auto',
    },
    cardWrapper: (plan) => ({
      position: 'relative',
      borderRadius: '1rem',
      transition: 'all 0.3s',
      boxShadow: plan.highlighted 
        ? '0 25px 50px -12px rgba(124, 58, 237, 0.25)' 
        : '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      transform: plan.highlighted ? 'scale(1.05)' : 'scale(1)',
      zIndex: plan.highlighted ? 10 : 1,
      border: plan.highlighted ? '2px solid #a855f7' : 'none'
    }),
    cardBg: (plan) => ({
      position: 'absolute',
      inset: 0,
      borderRadius: '1rem',
      background: plan.bgColor,
      opacity: 0.6,
    }),
    cardContent: {
      position: 'relative',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(4px)',
      borderRadius: '1rem',
      padding: '2rem',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    popularBadge: {
      position: 'absolute',
      top: '-1rem',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'linear-gradient(to right, #9333ea, #ec4899)',
      color: 'white',
      padding: '0.5rem 1.5rem',
      borderRadius: '9999px',
      fontSize: '0.875rem',
      fontWeight: 600,
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    planHeader: {
      textAlign: 'center',
      marginBottom: '2rem',
    },
    planName: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: '#111827',
      marginBottom: '0.5rem',
    },
    priceWrapper: {
      marginBottom: '1rem',
    },
    originalPrice: {
      fontSize: '0.875rem',
      color: '#6b7280',
      textDecoration: 'line-through',
      marginRight: '0.5rem',
    },
    priceDisplay: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'center',
    },
    priceText: (color) => ({
      fontSize: 'clamp(2.25rem, 5vw, 3rem)',
      fontWeight: '700',
      color: color,
    }),
    periodText: {
      color: '#4b5563',
      marginLeft: '0.25rem',
    },
    description: {
      color: '#4b5563',
      fontSize: '0.875rem',
      lineHeight: 1.6,
      minHeight: '40px',
    },
    featureList: {
      listStyle: 'none',
      padding: 0,
      margin: '0 0 2rem 0',
      flexGrow: 1,
    },
    featureItem: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '1rem',
    },
    featureIconWrapper: (color) => ({
      width: '1.5rem',
      height: '1.5rem',
      borderRadius: '9999px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '0.125rem',
      marginRight: '1rem',
      flexShrink: 0,
      backgroundColor: `${color}20`,
      color: color,
    }),
    featureText: {
      fontSize: '0.875rem',
      color: '#374151',
    },
    ctaButton: (plan) => ({
      width: '100%',
      padding: '1rem 1.5rem',
      borderRadius: '0.75rem',
      fontWeight: 600,
      textAlign: 'center',
      transition: 'all 0.3s',
      transform: 'scale(1)',
      border: plan.highlighted ? 'none' : `2px solid ${plan.color}`,
      color: plan.highlighted ? 'white' : plan.color,
      background: plan.highlighted ? 'linear-gradient(to right, #9333ea, #ec4899)' : 'transparent',
      marginTop: 'auto',
      cursor: 'pointer',
    }),
  };

  return (
    <>
      <style>
        {`
          @media (min-width: 1024px) {
            .pricing-grid-lg {
              grid-template-columns: repeat(3, 1fr);
            }
          }
        `}
      </style>
      <section style={styles.section}>
        <div style={styles.container}>
          {/* Header */}
          <div style={styles.header}>
            <div style={styles.launchBadge}>
              <span>💡 Launch Special: Save up to 40%</span>
            </div>
            <h2 style={styles.sectionTitle}>{sectionTitle}</h2>
            <p style={styles.sectionSubtitle}>{sectionSubtitle}</p>
          </div>

          {/* Pricing Cards */}
          <div style={styles.pricingGrid} className="pricing-grid-lg">
            {plans.map((plan, index) => (
              <div key={index} style={styles.cardWrapper(plan)}>
                <div style={styles.cardBg(plan)} />
                <div style={styles.cardContent}>
                  {plan.highlighted && <div style={styles.popularBadge}>Most Popular</div>}

                  <div style={styles.planHeader}>
                    <h3 style={styles.planName}>{plan.name}</h3>
                    <div style={styles.priceWrapper}>
                      {plan.originalPrice && <span style={styles.originalPrice}>{plan.originalPrice}</span>}
                      <div style={styles.priceDisplay}>
                        <span style={styles.priceText(plan.color)}>{plan.price}</span>
                        <span style={styles.periodText}>{plan.period}</span>
                      </div>
                    </div>
                    <p style={styles.description}>{plan.description}</p>
                  </div>

                  <ul style={styles.featureList}>
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} style={styles.featureItem}>
                        <div style={styles.featureIconWrapper(plan.color)}>
                          <svg style={{ width: '1rem', height: '1rem' }} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span style={styles.featureText}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={onContactClick}
                    style={styles.ctaButton(plan)}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.05)';
                      if (!plan.highlighted) {
                        e.target.style.backgroundColor = plan.color;
                        e.target.style.color = 'white';
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                      if (!plan.highlighted) {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.color = plan.color;
                      }
                    }}
                  >
                    {plan.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Additional sections can be converted similarly */}
        </div>
      </section>
    </>
  );
};

export default PricingSection;
