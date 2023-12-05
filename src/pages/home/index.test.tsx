import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Home from './index';
import { AUTH_CONTEXT_OK, AUTH_CONTEXT_NOT } from '../../__mocks__/authContextMock';

test('renders UserInfo when user is logged in', () => {
  const { getByText } = render(
    <MemoryRouter>
      <AuthContext.Provider value={AUTH_CONTEXT_OK}>
        <Home />
      </AuthContext.Provider>
    </MemoryRouter>
  );

  const userInfoElement = getByText('Informações de autenticação do Usuário');
  expect(userInfoElement).toBeInTheDocument();
});

test('renders login prompt when user is not logged in', () => {
  const { getByText } = render(
    <MemoryRouter>
      <AuthContext.Provider value={AUTH_CONTEXT_NOT}>
        <Home />
      </AuthContext.Provider>
    </MemoryRouter>
  );

  const loginPromptElement = getByText('Faça o Login');
  expect(loginPromptElement).toBeInTheDocument();
});