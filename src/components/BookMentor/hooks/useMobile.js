import { useState, useEffect } from 'react';

// Custom hook for mobile-specific functionality
export const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      const touch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

      setIsMobile(mobile);
      setIsTouchDevice(touch);

      // Set CSS custom property for dynamic viewport height
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    window.addEventListener('orientationchange', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('orientationchange', checkMobile);
    };
  }, []);

  return { isMobile, isTouchDevice };
};

// Utility function for haptic feedback
export const triggerHapticFeedback = (duration = 50) => {
  if (navigator.vibrate) {
    navigator.vibrate(duration);
  }
};

// Utility function to prevent iOS zoom on input focus
export const preventIOSZoom = () => {
  const viewport = document.querySelector('meta[name=viewport]');
  if (viewport) {
    const content = viewport.getAttribute('content');
    viewport.setAttribute('content', content + ', maximum-scale=1.0');
  }
};

// Utility function to restore iOS zoom prevention
export const restoreIOSZoom = () => {
  const viewport = document.querySelector('meta[name=viewport]');
  if (viewport) {
    const content = viewport.getAttribute('content');
    viewport.setAttribute('content', content.replace(', maximum-scale=1.0', ''));
  }
};
