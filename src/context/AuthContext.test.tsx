import React from 'react';
import { render, act } from '@testing-library/react';
import { AuthProvider, AuthContext } from './AuthContext';
import { test, expect } from '@jest/globals';

describe('AuthContext', () => {
  test('login and logout functions', () => {
    let isLoggedIn: boolean | undefined;
    let login: (() => void) | undefined;
    let logout: (() => void) | undefined;

    /* Renderiza o componente AuthProvider e consome o AuthContext */
    render(
      <AuthProvider>
        <AuthContext.Consumer>
          {(value) => {
            /* Captura as funções e estado do contexto */
            isLoggedIn = value.isLoggedIn;
            login = value.login;
            logout = value.logout;
            return null;
          }}
        </AuthContext.Consumer>
      </AuthProvider>
    );

    /* Verifica se o usuário não está logado inicialmente */
    expect(isLoggedIn).toBe(false);

    /* Realiza o login e verifica se o usuário está logado */
    act(() => {
      login && login();
    });

    expect(isLoggedIn).toBe(true);

    /* Realiza o logout e verifica se o usuário não está logado novamente */
    act(() => {
      logout && logout();
    });

    expect(isLoggedIn).toBe(false);
  });
});
