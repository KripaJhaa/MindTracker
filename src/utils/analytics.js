// Analytics and SEO utilities for MindTracker

// Google Analytics setup (add your GA4 tracking ID)
export const initializeAnalytics = (trackingId) => {
  if (typeof window !== 'undefined' && trackingId) {
    // Create script tag for Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', trackingId, {
      page_title: document.title,
      page_location: window.location.href
    });

    // Make gtag globally available
    window.gtag = gtag;
  }
};

// Track page views
export const trackPageView = (path, title) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_TRACKING_ID', {
      page_path: path,
      page_title: title
    });
  }
};

// Track custom events
export const trackEvent = (action, category, label, value) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
};

// SEO utility functions
export const generateBreadcrumbs = (pathname) => {
  const paths = pathname.split('/').filter(Boolean);
  const breadcrumbs = [{ name: 'Home', url: '/' }];
  
  let currentPath = '';
  paths.forEach((path, index) => {
    currentPath += `/${path}`;
    const name = path.charAt(0).toUpperCase() + path.slice(1);
    breadcrumbs.push({ name, url: currentPath });
  });
  
  return breadcrumbs;
};

// Create structured data for current page
export const generateStructuredData = (pageType, data) => {
  const baseStructure = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": data.title,
    "description": data.description,
    "url": data.url,
    "isPartOf": {
      "@type": "WebSite",
      "name": "MindTracker",
      "url": "https://mindtracker.vercel.app"
    }
  };

  switch (pageType) {
    case 'article':
      return {
        ...baseStructure,
        "@type": "Article",
        "headline": data.title,
        "author": {
          "@type": "Organization",
          "name": "MindTracker Team"
        },
        "datePublished": data.datePublished || new Date().toISOString(),
        "dateModified": data.dateModified || new Date().toISOString()
      };
    
    case 'course':
      return {
        ...baseStructure,
        "@type": "Course",
        "name": data.title,
        "description": data.description,
        "provider": {
          "@type": "Organization",
          "name": "MindTracker"
        }
      };
    
    default:
      return baseStructure;
  }
};

// Performance monitoring
export const measurePerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const perfData = performance.getEntriesByType('navigation')[0];
    const metrics = {
      loadTime: perfData.loadEventEnd - perfData.fetchStart,
      domContentLoaded: perfData.domContentLoadedEventEnd - perfData.fetchStart,
      firstPaint: performance.getEntriesByType('paint')[0]?.startTime || 0,
      firstContentfulPaint: performance.getEntriesByType('paint')[1]?.startTime || 0
    };
    
    // Track performance metrics
    if (window.gtag) {
      Object.entries(metrics).forEach(([metric, value]) => {
        window.gtag('event', 'timing_complete', {
          name: metric,
          value: Math.round(value)
        });
      });
    }
    
    return metrics;
  }
  return null;
};
