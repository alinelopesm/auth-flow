import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Home from './index';

test('renders UserInfo when user is logged in', () => {
  const mockContextValue = {
    isLoggedIn: true,
    login: async () => {},
    logout: () => {},
    authenticateInfo: {
        "id": 15,
        "username": "test",
        "email": "test@qq.com",
        "firstName": "Jeanne",
        "lastName": "Halvorson",
        "gender": "female",
        "image": "https://robohash.org/autquiaut.png?size=50x50&set=set1",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZz9zaXplPTUweDUwJnNldD1zZXQxIiwiaWF0IjoxNjM1NzczOTYyLCJleHAiOjE2MzU3Nzc1NjJ9.n9PQX8w8ocKo0dMCw3g8bKhjB8Wo7f7IONFBDqfxKhs"
    },
    error: 'Erro'
  };

  const { getByText } = render(
    <MemoryRouter>
      <AuthContext.Provider value={mockContextValue}>
        <Home />
      </AuthContext.Provider>
    </MemoryRouter>
  );

  const userInfoElement = getByText('Informações do Usuário');
  expect(userInfoElement).toBeInTheDocument();
});

test('renders login prompt when user is not logged in', () => {
  const mockContextValue = {
    isLoggedIn: false,
    login: async () => {},
    logout: () => {},
    authenticateInfo: null,
    error: 'Erro'
  };
  
    const { getByText } = render(
      <MemoryRouter>
        <AuthContext.Provider value={mockContextValue}>
          <Home />
        </AuthContext.Provider>
      </MemoryRouter>
    );
  
    const loginPromptElement = getByText('Faça o Login');
    expect(loginPromptElement).toBeInTheDocument();
  });