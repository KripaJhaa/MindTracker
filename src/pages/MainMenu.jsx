import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainMenu = () => {
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
      <h1>Mindfulness App</h1>
      <button onClick={() => navigate('/login')}>Log In</button>
      <button onClick={() => navigate('/profile-setup')}>Sign Up</button>
      <button onClick={() => navigate('/home')}>Dashboard</button>
      <button onClick={() => navigate('/book-mentor')}>Book Mentor Session</button>
      <button onClick={() => navigate('/exercises')}>Mindfulness Exercises</button>
      <button onClick={() => navigate('/journal')}>Personal Journal</button>
      <button onClick={() => navigate('/growth-reports')}>Growth Reports</button>
      <button onClick={() => navigate('/notifications')}>Notifications</button>
      <button onClick={() => navigate('/settings')}>Settings</button>
    </div>
  );
};

export default MainMenu;
