import React from 'react';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import App from './App';
import { AuthContext } from '../context/AuthContext';

import '@testing-library/jest-dom/extend-expect'; // Importe o jest-dom

/* Teste para verificar se o botão de login é renderizado e se a função de login é chamada ao clicar */
test('renders login button', () => {
  /* Cria mocks (funções simuladas) para login e logout */
  const login = jest.fn();
  const logout = jest.fn();

  /* Renderiza o componente App, passando um contexto fictício de autenticação */
  const { getByTestId }: RenderResult = render( // Declare o tipo do retorno de render
    <AuthContext.Provider value={{ isLoggedIn: false, login, logout }}>
      <App />
    </AuthContext.Provider>
  );

  /* Verifica se o botão de login está presente no componente */
  const loginButton = getByTestId('login');
  expect(loginButton).toBeInTheDocument(); // Agora o TypeScript deve reconhecer o toBeInTheDocument

  /* Simula um clique no botão de login */
  fireEvent.click(loginButton);

  /* Verifica se a função de login foi chamada quando o botão de login é clicado */
  expect(login).toHaveBeenCalled();
});
