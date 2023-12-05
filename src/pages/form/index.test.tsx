import React from 'react';
import { render } from '@testing-library/react';
import LoginForm from './index';
import { AuthContext } from '../../context/AuthContext';
import { AUTH_CONTEXT_OK } from '../../__mocks__/authContextMock';

/* Mock de useNavigate do React Router*/
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

test('renders login form fields', () => {
  const { getByPlaceholderText } = render(
      <AuthContext.Provider value={AUTH_CONTEXT_OK}>
      <LoginForm />
      </AuthContext.Provider>
  );

  const usernameInput = getByPlaceholderText('Digite seu username');
  const passwordInput = getByPlaceholderText('Digite sua senha');

  expect(usernameInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
});