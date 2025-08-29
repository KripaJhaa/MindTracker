import React, { createContext, useContext, useState, useEffect } from 'react';

// Authentication Context
const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in (from localStorage or API)
    // Legacy key migration: if older 'mindfulness_user' exists, migrate to 'mindtrack_user'
    const legacy = localStorage.getItem('mindfulness_user');
    const migratedKey = 'mindtrack_user';
    if (legacy && !localStorage.getItem(migratedKey)) {
      localStorage.setItem(migratedKey, legacy);
      localStorage.removeItem('mindfulness_user');
    }
    const savedUser = localStorage.getItem(migratedKey);
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
  setUser(userData);
  localStorage.setItem('mindtrack_user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
  localStorage.removeItem('mindtrack_user');
  };

  const value = {
    user,
    login,
    logout,
    loading,
    isAuthenticated: !!user,
    isStudent: user?.role === 'student',
    isMentor: user?.role === 'mentor',
    isAdmin: user?.role === 'admin'
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
