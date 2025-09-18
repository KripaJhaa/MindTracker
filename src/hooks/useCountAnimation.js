import { useState, useEffect, useRef } from 'react';

const useCountAnimation = (endValue, duration = 2000, startOnView = true) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const animationRef = useRef(null);
  const startTimeRef = useRef(null);

  const formatValue = (value) => {
    if (typeof endValue === 'string') {
      // Handle values with + suffix (e.g., "50+")
      if (endValue.endsWith('+')) {
        const numericValue = parseInt(endValue);
        return `${Math.floor(value)}+`;
      }
      // Handle K suffix (e.g., "100K+")
      if (endValue.includes('K')) {
        const numericValue = parseInt(endValue);
        return `${Math.floor(value)}K+`;
      }
    }
    // Handle percentage values
    if (typeof endValue === 'number' && endValue <= 100) {
      return `${Math.floor(value)}`;
    }
    // Handle decimal values
    if (typeof endValue === 'number' && endValue < 10) {
      return value.toFixed(1);
    }
    return Math.floor(value);
  };

  const animate = (timestamp) => {
    if (!startTimeRef.current) {
      startTimeRef.current = timestamp;
    }

    const progress = timestamp - startTimeRef.current;
    const rawEndValue = typeof endValue === 'string' 
      ? parseInt(endValue.replace(/[^0-9.]/g, ''))
      : endValue;

    if (progress < duration) {
      const nextValue = (progress / duration) * rawEndValue;
      setCount(nextValue);
      animationRef.current = requestAnimationFrame(animate);
    } else {
      setCount(rawEndValue);
    }
  };

  useEffect(() => {
    if (!startOnView) {
      animationRef.current = requestAnimationFrame(animate);
      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animationRef.current = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      observer.disconnect();
    };
  }, [endValue, duration, startOnView]);

  return [formatValue(count), elementRef];
};

export default useCountAnimation;
