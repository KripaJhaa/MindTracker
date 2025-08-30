import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import LanguageSelector from './LanguageSelector';
import ThemeToggle from './ThemeToggle';

const PublicNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  const { t } = useLanguage();

  // Don't show public nav if user is authenticated (they see the main nav)
  if (isAuthenticated) {
    return null;
  }

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="public-navigation">
      <div className="nav-brand">
        <button 
          onClick={() => navigate('/')}
          className="logo-button"
          style={{
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer'
          }}
        >
          <h3 style={{ margin: 0, color: 'var(--primary-color)' }}>MindTrack</h3>
        </button>
      </div>

      <div className="nav-links">
        {/* Home link removed as logo is now clickable */}
      </div>

      <div className="nav-actions">
        <ThemeToggle />
        <LanguageSelector />
        <div className="auth-buttons">
          <button
            className="btn btn-secondary"
            onClick={() => navigate('/login')}
          >
            {t('signIn')}
          </button>
          <button
            className="btn btn-primary"
            onClick={() => navigate('/signup')}
          >
            {t('signUp')}
          </button>
        </div>
      </div>

      <style jsx>{`
        .public-navigation {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 60px;
          background: var(--surface);
          border-bottom: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 2rem;
          z-index: 1000;
        }

        .nav-brand h3 {
          font-size: 1.25rem;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-link {
          background: none;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          padding: 0.5rem 1rem;
          border-radius: var(--border-radius);
          transition: all 0.2s ease;
          font-size: 0.875rem;
        }

        .nav-link:hover {
          background: var(--background);
          color: var(--text-primary);
        }

        .nav-link.active {
          background: var(--primary-color);
          color: white;
        }

        .nav-actions {
          display: flex;
          gap: 1rem;
          align-items: center;
          height: 100%;
        }

        .auth-buttons {
          display: flex;
          gap: 0.75rem;
          align-items: center;
        }

        .btn {
          padding: 0.5rem 1.25rem;
          border: none;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 36px;
          white-space: nowrap;
        }

        .btn-primary {
          background: var(--primary-color);
          color: white;
          box-shadow: var(--shadow);
        }

        .btn-primary:hover {
          background: var(--primary-hover);
          transform: translateY(-1px);
          box-shadow: var(--shadow-lg);
        }

        .btn-secondary {
          background: transparent;
          color: var(--text-primary);
          border: 1px solid var(--border);
        }

        .btn-secondary:hover {
          background: var(--surface);
          border-color: var(--primary-color);
          transform: translateY(-1px);
        }

        @media (max-width: 768px) {
          .public-navigation {
            padding: 0 1rem;
          }

          .nav-links {
            display: none;
          }

          .nav-actions {
            gap: 0.5rem;
          }

          .auth-buttons {
            gap: 0.5rem;
          }

          .btn {
            font-size: 0.8rem;
            padding: 0.4rem 0.8rem;
            min-height: 32px;
          }

          .nav-brand h3 {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 480px) {
          .public-navigation {
            padding: 0 0.75rem;
          }

          .nav-actions {
            gap: 0.375rem;
          }

          .auth-buttons {
            gap: 0.375rem;
          }

          .btn {
            font-size: 0.75rem;
            padding: 0.35rem 0.6rem;
            min-height: 30px;
          }

          /* Hide theme toggle text on very small screens */
          .nav-actions :global(.theme-toggle-text) {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default PublicNavigation;
