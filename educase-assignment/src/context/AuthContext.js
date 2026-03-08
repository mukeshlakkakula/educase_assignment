import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check localStorage for existing user
    const storedUser = localStorage.getItem('popx_user');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const register = (userData) => {
    // Store user in localStorage
    localStorage.setItem('popx_user', JSON.stringify(userData));
    setCurrentUser(userData);
    return { success: true };
  };

  const login = (email, password) => {
    const storedUser = localStorage.getItem('popx_user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      // In a real app, you'd verify password here
      if (user.email === email) {
        setCurrentUser(user);
        return { success: true };
      }
    }
    return { 
      success: false, 
      message: 'Invalid email or password' 
    };
  };

  const logout = () => {
    localStorage.removeItem('popx_user');
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    register,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};