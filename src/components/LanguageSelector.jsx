import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'english', flag: '🇺🇸' },
    { code: 'hindi', flag: '🇮🇳' },
    { code: 'tamil', flag: '🇮🇳' }
  ];

  const getLanguageName = (code) => {
    return t(`language${code.charAt(0).toUpperCase() + code.slice(1)}`);
  };

  const currentLanguage = languages.find(lang => lang.code === language);

  const handleLanguageChange = (langCode) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div key={language} style={{ 
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.375rem',
          padding: '0.4rem 0.75rem',
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '8px',
          color: 'var(--text-primary)',
          cursor: 'pointer',
          fontSize: '0.85rem',
          fontWeight: '500',
          transition: 'all 0.2s ease',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
          minWidth: '90px'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'var(--background)';
          e.currentTarget.style.borderColor = 'var(--primary-color)';
          e.currentTarget.style.transform = 'translateY(-1px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'var(--surface)';
          e.currentTarget.style.borderColor = 'var(--border)';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <span style={{ fontSize: '1.1rem' }}>{currentLanguage?.flag}</span>
        <span style={{ 
          fontSize: '0.8rem',
          fontWeight: '600',
          letterSpacing: '0.5px'
        }}>
          {currentLanguage?.code.toUpperCase().substring(0, 2)}
        </span>
        <span style={{
          fontSize: '0.6rem',
          marginLeft: 'auto',
          transition: 'transform 0.2s ease',
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
        }}>
          ▼
        </span>
      </button>

      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '110%',
          right: '0',
          minWidth: '140px',
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '12px',
          boxShadow: '0 8px 25px rgba(139, 123, 139, 0.15)',
          zIndex: 1000,
          overflow: 'hidden'
        }}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                width: '100%',
                padding: '0.75rem 1rem',
                background: lang.code === language ? 'var(--mindfulness-sage)' : 'transparent',
                color: lang.code === language ? 'white' : 'var(--text-primary)',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.85rem',
                fontWeight: '500',
                textAlign: 'left',
                transition: 'all 0.2s ease',
                borderRadius: '0'
              }}
              onMouseEnter={(e) => {
                if (lang.code !== language) {
                  e.currentTarget.style.background = 'var(--mindfulness-sage)';
                  e.currentTarget.style.color = 'white';
                }
              }}
              onMouseLeave={(e) => {
                if (lang.code !== language) {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'var(--text-primary)';
                }
              }}
            >
              <span style={{ fontSize: '1.1rem' }}>{lang.flag}</span>
              <span style={{ flex: 1 }}>{getLanguageName(lang.code)}</span>
              {lang.code === language && (
                <span style={{ fontSize: '0.8rem', color: 'inherit' }}>✓</span>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Click outside to close */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 999
          }}
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default LanguageSelector;
