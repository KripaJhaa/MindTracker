import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations as translationsData } from './translations';

const LanguageContext = createContext();

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};

export const LanguageProvider = ({ children }) => {
  const supported = ['english', 'hindi', 'tamil'];

  const getInitial = () => {
    try {
      const saved = localStorage.getItem('selectedLanguage');
      if (saved && supported.includes(saved)) return saved;
    } catch (e) {
      // ignore
    }
    return 'english';
  };

  const [language, setLanguageState] = useState(getInitial);

  useEffect(() => {
    try {
      localStorage.setItem('selectedLanguage', language);
    } catch (e) {
      // ignore
    }
    try {
      window.dispatchEvent(new CustomEvent('mindtrack:languagechange', { detail: { language } }));
    } catch (e) {
      // ignore
    }
  }, [language]);

  const t = (key) => {
    if (!translationsData) return key;
    const set = translationsData[language] || {};
    return set[key] || key;
  };

  const setLanguage = (lang) => {
    if (supported.includes(lang)) setLanguageState(lang);
  };

  const value = { language, setLanguage, t, translations: translationsData[language] || {} };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export default LanguageContext;
