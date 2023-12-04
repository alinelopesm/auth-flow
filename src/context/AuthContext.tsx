import React, { createContext, useState, ReactNode, useEffect } from 'react';
import { authenticate } from '../__mocks__/auth';
import { AuthInfo } from '../types/AuthInfoType';

interface AuthContextProps {
  isLoggedIn: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  authenticateInfo: AuthInfo| null;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextProps>({
  isLoggedIn: false,
  login: async () => {},
  logout: () => {},
  authenticateInfo: null,
});

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [authenticateInfo, setAuthenticateInfo] = useState<AuthInfo | null>(null);

  useEffect(() => {
    const storedAuthInfo = localStorage.getItem('authInfo');
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');

    if (storedAuthInfo && storedIsLoggedIn) {
      setAuthenticateInfo(JSON.parse(storedAuthInfo));
      setLoggedIn(true);
    }
  }, []);

  const login = async (username: string, password: string): Promise<void> => {
    try {
      const userResponse = await authenticate(username, password);

      if (userResponse) {
        localStorage.setItem('authInfo', JSON.stringify(userResponse));
        setAuthenticateInfo(userResponse);
        setLoggedIn(true);
      } else {
        throw new Error('Login inválido');
      }
    } catch (error) {
      console.error('Erro durante o login:', error);
    }
  };

  const logout = () => {
    localStorage.removeItem('authInfo');
    localStorage.removeItem('isLoggedIn');
    setAuthenticateInfo(null);
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, authenticateInfo }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
