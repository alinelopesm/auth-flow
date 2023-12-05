import React, { createContext, useState, ReactNode, useEffect } from 'react';
import { AuthInfo } from '../types/AuthInfoType';
import AuthService from '../service/AuthUser';

interface AuthContextProps {
  isLoggedIn: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  authenticateInfo: AuthInfo | null;
  error: string | null;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextProps>({
  isLoggedIn: false,
  login: async () => {},
  logout: () => {},
  authenticateInfo: null,
  error: null,
});

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [authenticateInfo, setAuthenticateInfo] = useState<AuthInfo | null>(null);
  const [error, setError] = useState<string | null>(null);
  const authService = new AuthService();

  useEffect(() => {
    const storedAuthInfo = localStorage.getItem('authInfo');
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');

    if (storedAuthInfo && storedIsLoggedIn) {
      setAuthenticateInfo(JSON.parse(storedAuthInfo));
      setLoggedIn(true);
    }
  }, []);

  const login = async (username: string, password: string): Promise<void> => {
    authService
      .login({
        username,
        password,
      })
      .then((response) => {
        console.log('Resposta do login:', response);
        if (response) {
          localStorage.setItem('authInfo', JSON.stringify(response));
          setAuthenticateInfo(response);
          setLoggedIn(true);
        } 
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          setError('Login inválido');
        } else {
          console.error('Erro ao fazer login:', error);
        }
      });
  };

  const logout = () => {
    localStorage.removeItem('authInfo');
    localStorage.removeItem('isLoggedIn');
    setAuthenticateInfo(null);
    setLoggedIn(false);
    setError(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, authenticateInfo, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
