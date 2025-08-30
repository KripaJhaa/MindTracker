import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import LanguageSelector from './LanguageSelector';
import ThemeToggle from './ThemeToggle';
import mindTrackLogo from '../assets/mindtrack-icon.svg';
import './Navigation.css';

const Navigation = ({ navigationItems = [] }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout, user } = useAuth();
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const defaultNavItems = [
    { path: '/home', label: t('home'), icon: '🏠' },
    { path: '/book-mentor', label: t('bookMentor'), icon: '📅' },
    { path: '/exercises', label: t('exercises'), icon: '🧘' },
    { path: '/journal', label: t('journal'), icon: '📝' },
    { path: '/growth-reports', label: t('growthReports'), icon: '📊' },
    { path: '/notifications', label: t('notificationsTitle'), icon: '🔔' },
    { path: '/settings', label: t('settings'), icon: '⚙️' },
  ];

  const navItems = navigationItems.length > 0 ? navigationItems : defaultNavItems;

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="mobile-menu-btn"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? t('closeMenu') : t('openMenu')}
      >
        {isMenuOpen ? '✕' : '☰'}
      </button>

      {/* Navigation Sidebar */}
      <nav className={`navigation ${isMenuOpen ? 'mobile-open' : ''}`}>
        <div className="nav-header">
          <button 
            onClick={() => {
              navigate('/home');
              setIsMenuOpen(false);
            }}
            className="logo-button"
          >
            <img src={mindTrackLogo} alt="MindTrack" className="logo-image" />
            <span className="logo-text">MindTrack</span>
          </button>
        </div>

        <div className="nav-links">
          {navItems
            .filter(item => item.path !== '/home') // Remove home from navigation items
            .map((item) => (
            <button
              key={item.path}
              className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
              onClick={() => {
                navigate(item.path);
                setIsMenuOpen(false);
              }}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="nav-footer">
          <div className="nav-footer-user-info">
            Logged in as: <strong>{user?.name || user?.email}</strong>
            <br />
            Role: <strong>{user?.role}</strong>
          </div>
          <div className="nav-footer-controls">
            <ThemeToggle />
            <LanguageSelector />
          </div>
          <button
            className="nav-link error"
            onClick={handleLogout}
          >
            <span className="nav-icon">🚪</span>
            <span className="nav-label">{t('logout')}</span>
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setIsMenuOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.3)',
            zIndex: 999
          }}
        />
      )}

    </>
  );
};

export default Navigation;
