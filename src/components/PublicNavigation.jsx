import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import LanguageSelector from './LanguageSelector';

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
        <LanguageSelector />
        <button
          className="btn btn-secondary"
          onClick={() => navigate('/login')}
        >
          {t('signIn')}
        </button>
        <button
          className="btn"
          onClick={() => navigate('/signup')}
        >
          {t('signUp')}
        </button>
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
          gap: 0.5rem;
          flex-direction: row;
          align-items: center;
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

          .nav-actions button {
            font-size: 0.875rem;
            padding: 0.5rem 1rem;
          }

          .nav-brand h3 {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default PublicNavigation;
