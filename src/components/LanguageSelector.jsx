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
    <div key={language} style={{ position: 'relative' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem'
      }}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
            padding: '0.25rem 0.5rem',
            background: 'transparent',
            border: '1px solid var(--border)',
            borderRadius: '6px',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            fontSize: '0.8rem',
            fontWeight: '500',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--background)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
          }}
        >
          <span style={{ fontSize: '1rem' }}>{currentLanguage?.flag}</span>
          <span>{getLanguageName(currentLanguage?.code)}</span>
          <span style={{
            fontSize: '0.7rem',
            marginLeft: '0.25rem',
            transition: 'transform 0.2s ease'
          }}>
            {isOpen ? '▲' : '▼'}
          </span>
        </button>

        {isOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: '0',
            right: '0',
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(139, 123, 139, 0.15)',
            zIndex: 1000,
            marginTop: '0.25rem',
            overflow: 'hidden'
          }}>
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  width: '100%',
                  padding: '0.75rem 1rem',
                  background: lang.code === language ? 'var(--mindfulness-sage)' : 'transparent',
                  color: lang.code === language ? 'white' : 'var(--text-primary)',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  textAlign: 'left',
                  transition: 'all 0.2s ease'
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
                <span style={{ fontSize: '1.2rem' }}>{lang.flag}</span>
                <span>{getLanguageName(lang.code)}</span>
                {lang.code === language && (
                  <span style={{ marginLeft: 'auto', fontSize: '0.8rem' }}>✓</span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

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
