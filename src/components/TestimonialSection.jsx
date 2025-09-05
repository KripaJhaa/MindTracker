import React from 'react';
import './TestimonialSection.css';
import useCountAnimation from '../hooks/useCountAnimation';

const TestimonialSection = () => {
  const [costSavings, costSavingsRef] = useCountAnimation("2.8M");
  const [retentionIncrease, retentionIncreaseRef] = useCountAnimation(15);
  const [riskReduction, riskReductionRef] = useCountAnimation(45);
  const [resourceOptimization, resourceOptimizationRef] = useCountAnimation(60);

  const statsRefs = [costSavingsRef, retentionIncreaseRef, riskReductionRef, resourceOptimizationRef];
  const animatedStats = [costSavings, retentionIncrease, riskReduction, resourceOptimization];
  
  const testimonials = [
    {
      institution: "Harvard University",
      logo: "🎓",
      quote: "MindTracker delivered exceptional ROI within 6 months. We saw a 25% reduction in counseling center wait times, 40% increase in early intervention cases, and 15% improvement in student retention rates.",
      author: "Dr. Sarah Chen",
      role: "Vice President of Student Affairs",
      stats: "Annual savings: $450K",
      gradient: "linear-gradient(135deg, var(--mindfulness-sage), var(--mindfulness-teal))",
      rating: 5
    },
    {
      institution: "Stanford University",
      logo: "🏛️",
      quote: "The institutional dashboard revolutionized our approach to student mental health. 60% reduction in crisis interventions and 35% decrease in academic leaves due to mental health issues.",
      author: "Prof. Michael Rodriguez",
      role: "Dean of Student Life",
      stats: "ROI: 3.5x in Year 1",
      gradient: "linear-gradient(135deg, var(--mindfulness-blue), var(--mindfulness-lavender))",
      rating: 5
    }
  ];

  return (
    <section className="testimonials-section">
      {/* Background Decorations */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      <div>
        {/* Section Header */}
        <div className="testimonials-header">
          <h2 className="testimonials-title">Proven Results for Leading Institutions</h2>
          <p className="testimonials-subtitle">See how top universities are reducing costs, optimizing resources, and improving student retention with data-driven mental health support</p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="testimonial-card"
            >
              <div className="testimonial-header">
                <div className={`testimonial-logo ${item.gradient}`}>
                  {item.logo}
                </div>
                <div>
                  <h3 className="testimonial-institution">{item.institution}</h3>
                  <div className="testimonial-rating">
                    {[...Array(item.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="testimonial-quote">
                "{item.quote}"
              </blockquote>

              <div>
                <p className="testimonial-author">{item.author}</p>
                <p className="testimonial-role">{item.role}</p>
                <div className="text-sm font-medium text-indigo-600 mt-2">
                  {item.stats}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="testimonial-stats">
          <div className="stat-item" ref={statsRefs[0]}>
            <p className="stat-number">${animatedStats[0]}</p>
            <p className="stat-label">Annual Cost Savings</p>
          </div>
          <div className="stat-item" ref={statsRefs[1]}>
            <p className="stat-number">{animatedStats[1]}%</p>
            <p className="stat-label">Retention Increase</p>
          </div>
          <div className="stat-item" ref={statsRefs[2]}>
            <p className="stat-number">{animatedStats[2]}%</p>
            <p className="stat-label">Risk Reduction</p>
          </div>
          <div className="stat-item" ref={statsRefs[3]}>
            <p className="stat-number">{animatedStats[3]}%</p>
            <p className="stat-label">Resource Optimization</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;
