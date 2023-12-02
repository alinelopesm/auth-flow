import React, { createContext, useState, ReactNode } from 'react';

interface AuthContextProps {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
  // ... outras propriedades necessárias
}

const AuthContext = createContext<AuthContextProps>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const login = () => {
    // Adicione lógica de login aqui, por exemplo:
    // autenticação, configuração de estado, etc.
    setLoggedIn(true);
  };

  const logout = () => {
    // Adicione lógica de logout aqui, por exemplo:
    // limpar autenticação, limpar estado, etc.
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
