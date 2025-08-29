// SEO Configuration for MindTracker
export const seoConfig = {
  baseUrl: 'https://mindtracker.vercel.app',
  siteName: 'MindTracker',
  defaultTitle: 'MindTracker - Institutional Mindfulness & Wellness Platform',
  defaultDescription: 'Comprehensive mindfulness and wellness tracking platform designed for educational institutions. Features meditation exercises, journaling, mentor sessions, and analytics to support student mental health and wellbeing.',
  defaultKeywords: 'mindfulness, meditation, wellness, mental health, student wellbeing, educational institutions, guided meditation, journaling, progress tracking, institutional wellness',
  defaultImage: '/og-image.jpg',
  twitterHandle: '@MindTracker',
  
  // Page-specific SEO data
  pages: {
    home: {
      title: 'Home Dashboard - Personal Mindfulness Journey',
      description: 'Access your personalized mindfulness dashboard with daily meditation practices, progress tracking, guided exercises, and wellness insights tailored to your educational institution.',
      keywords: 'mindfulness dashboard, daily meditation, progress tracking, wellness journey, student mental health'
    },
    welcome: {
      title: 'Welcome to MindTracker - Institutional Mindfulness Platform',
      description: 'Discover MindTracker, a comprehensive mindfulness and wellness platform designed specifically for educational institutions. Featuring guided meditation, journaling, mentor sessions, and detailed analytics to support student mental health.',
      keywords: 'mindfulness platform, educational institutions, student wellness, guided meditation, mental health support, institutional mindfulness, wellness tracking'
    },
    login: {
      title: 'Login - Access Your MindTracker Account',
      description: 'Sign in to your MindTracker account to access personalized mindfulness exercises, track your wellness journey, and connect with mental health mentors at your educational institution.',
      keywords: 'login, sign in, student account, mindfulness login, wellness platform access'
    },
    journal: {
      title: 'Mindful Journal - Reflection & Personal Growth',
      description: 'Write and track your mindfulness journey with our secure digital journal. Reflect on your daily experiences, meditation sessions, and personal growth in a safe, private space.',
      keywords: 'mindful journaling, reflection, personal growth, meditation diary, wellness journal'
    },
    exercises: {
      title: 'Mindfulness Exercises - Guided Meditation & Breathing Techniques',
      description: 'Access a comprehensive library of guided mindfulness exercises including meditation, breathing techniques, body scans, and stress reduction practices designed for students and educational settings.',
      keywords: 'guided meditation, mindfulness exercises, breathing techniques, stress reduction, meditation library, student wellness'
    },
    analytics: {
      title: 'Wellness Analytics - Track Your Mindfulness Progress',
      description: 'Monitor your mindfulness journey with detailed analytics and insights. Track meditation sessions, journal entries, mood patterns, and overall wellness progress with visual charts and reports.',
      keywords: 'wellness analytics, mindfulness tracking, progress reports, meditation statistics, mental health insights'
    },
    bookMentor: {
      title: 'Book a Mentor - Connect with Wellness Experts',
      description: 'Schedule sessions with certified mindfulness mentors and wellness experts. Get personalized guidance, support, and advice for your mental health and mindfulness journey.',
      keywords: 'book mentor, wellness experts, mindfulness coaching, mental health support, mentor sessions'
    },
    growthReports: {
      title: 'Growth Reports - Institutional Wellness Insights',
      description: 'Access comprehensive growth reports and wellness insights for your institution. Monitor student engagement, track program effectiveness, and measure mental health improvements.',
      keywords: 'growth reports, institutional analytics, wellness insights, student engagement, program effectiveness'
    },
    settings: {
      title: 'Settings - Personalize Your Mindfulness Experience',
      description: 'Customize your MindTracker experience with personalized settings, language preferences, notification controls, and privacy options.',
      keywords: 'settings, personalization, language preferences, privacy settings, notifications'
    }
  },
  
  // Structured data templates
  organizationData: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MindTracker",
    "url": "https://mindtracker.vercel.app",
    "description": "Institutional mindfulness and wellness platform for educational institutions",
    "foundingDate": "2025",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "support@mindtracker.app"
    }
  },
  
  webApplicationData: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "MindTracker",
    "description": "Comprehensive mindfulness and wellness tracking platform designed for educational institutions",
    "url": "https://mindtracker.vercel.app",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Guided meditation exercises",
      "Personal journaling",
      "Mentor session booking",
      "Progress analytics",
      "Multi-language support",
      "Institutional dashboard"
    ]
  }
};

// Helper function to generate canonical URLs
export const getCanonicalUrl = (path = '') => {
  return `${seoConfig.baseUrl}${path}`;
};

// Helper function to get page-specific SEO data
export const getPageSEO = (pageName) => {
  return seoConfig.pages[pageName] || {
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
    keywords: seoConfig.defaultKeywords
  };
};
