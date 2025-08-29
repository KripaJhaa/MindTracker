import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'clamp(0.25rem, 1vw, 0.5rem)',
        padding: 'clamp(0.5rem, 2vw, 0.75rem) clamp(0.75rem, 2vw, 1rem)',
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--border-radius)',
        color: 'var(--text-primary)',
        cursor: 'pointer',
        fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
        fontWeight: '500',
        transition: 'all 0.2s ease',
        boxShadow: 'var(--shadow)',
        minHeight: '44px',
        minWidth: '44px',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-1px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
        e.currentTarget.style.borderColor = 'var(--primary-color)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--shadow)';
        e.currentTarget.style.borderColor = 'var(--border)';
      }}
      onFocus={(e) => {
        e.currentTarget.style.outline = '2px solid var(--primary-color)';
        e.currentTarget.style.outlineOffset = '2px';
      }}
      onBlur={(e) => {
        e.currentTarget.style.outline = 'none';
      }}
    >
      <span style={{
        fontSize: 'clamp(1rem, 3vw, 1.2rem)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {isDarkMode ? '☀️' : '🌙'}
      </span>
      <span className="theme-toggle-text">
        {isDarkMode ? t('lightMode') : t('darkMode')}
      </span>
    </button>
  );
};

export default ThemeToggle;
