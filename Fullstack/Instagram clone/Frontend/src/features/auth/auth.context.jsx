import { createContext, useState } from 'react';

import { login, register } from './services/auth.api';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRegister = async (username, email, password, bio) => {
    setLoading(true);
    try {
      const response = await register(username, email, password, bio);
      setUser(response.user);
      return response;
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (username, password) => {
    setLoading(true);
    try {
      const response = await login(username, password);
      setUser(response.user);      
      return response;
    } catch (error) {
      throw error.response?.data?.message || error.message;
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, handleRegister, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
