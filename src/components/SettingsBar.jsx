import React from 'react';
import ThemeToggle from './ThemeToggle';

const SettingsBar = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem',
      marginBottom: '2rem',
      flexWrap: 'wrap'
    }}>
      <ThemeToggle />
    </div>
  );
};

export default SettingsBar;
