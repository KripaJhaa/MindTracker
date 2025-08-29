import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import LanguageSelector from './LanguageSelector';

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
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        style={{
          display: 'none',
          position: 'fixed',
          top: '8px',
          right: '12px',
          zIndex: 1001,
          background: 'var(--surface)',
          color: 'var(--text-primary)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--border-radius)',
          padding: '0.75rem',
          width: '44px',
          height: '44px',
          fontSize: '1.25rem',
          cursor: 'pointer',
          boxShadow: 'var(--shadow)',
          transition: 'all 0.2s ease'
        }}
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
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <h3 style={{ margin: 0, color: 'var(--primary-color)' }}>Mindfulness</h3>
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
          <div style={{ padding: '0.5rem 1.5rem', fontSize: '0.75rem', color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>
            Logged in as: <strong>{user?.name || user?.email}</strong>
            <br />
            Role: <strong>{user?.role}</strong>
          </div>
          <div style={{ padding: '0.5rem 1.5rem', borderBottom: '1px solid var(--border)' }}>
            <LanguageSelector />
          </div>
          <button
            className="nav-link"
            onClick={handleLogout}
            style={{ color: 'var(--error)' }}
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

      <style jsx>{`
        .navigation {
          position: fixed;
          top: 60px;
          left: 0;
          height: calc(100vh - 60px);
          width: 250px;
          background: var(--surface);
          border-right: 1px solid var(--border);
          display: flex;
          flex-direction: column;
          z-index: 1000;
          transition: transform 0.3s ease;
        }

        .nav-header {
          padding: 1.25rem;
          border-bottom: 1px solid var(--border);
          background: var(--background);
        }

        .logo-button:hover h3 {
          color: var(--primary-hover);
        }

        .nav-links {
          flex: 1;
          padding: 1rem 0;
        }

        .nav-link {
          display: flex;
          align-items: center;
          width: 100%;
          padding: 0.875rem 1.25rem;
          border: none;
          background: none;
          color: var(--text-primary);
          text-align: left;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 0.9375rem;
          min-height: 44px;
          gap: 0.75rem;
        }

        .nav-icon {
          font-size: 1.25rem;
          width: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav-link:hover {
          background: var(--primary-color);
          color: white;
        }

        .nav-link.active {
          background: var(--primary-color);
          color: white;
          font-weight: 500;
        }

        .nav-icon {
          margin-right: 0.75rem;
          font-size: 1.1rem;
          width: 20px;
          text-align: center;
        }

        .nav-footer {
          padding: 1rem;
          border-top: 1px solid var(--border);
        }

        .nav-footer button {
          width: 100%;
          text-align: left;
        }

        .mobile-overlay {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.5);
          z-index: 999;
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block !important;
          }

          .navigation {
            transform: translateX(-100%);
            width: 280px;
            top: 60px;
            height: calc(100vh - 60px);
            box-shadow: var(--shadow-lg);
          }

          .navigation.mobile-open {
            transform: translateX(0);
          }

          .nav-header {
            padding: 1.25rem;
          }

          .nav-links {
            padding: 0.5rem 0;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
          }

          .nav-link {
            padding: 0.875rem 1.25rem;
            font-size: 1rem;
            min-height: 48px;
          }

          .nav-icon {
            margin-right: 1rem;
            font-size: 1.25rem;
            width: 24px;
          }

          /* Prevent body scroll when menu is open */
          body:has(.mobile-open) {
            overflow: hidden;
          }
        }

        /* Desktop Styles */
        @media (min-width: 769px) {
          .navigation {
            width: 250px;
            transform: none;
          }
          
          .mobile-menu-btn {
            display: none !important;
          }

          .mobile-overlay {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navigation;
