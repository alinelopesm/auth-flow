import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import LoginForm from './index';
import { authenticate } from '../../__mocks__/auth';

// Mock da função authenticate
jest.mock('../../__mocks__/auth', () => ({
  authenticate: jest.fn().mockResolvedValue('token'),
}));

describe('LoginForm', () => {
  it('submete o formulário com as credenciais corretas', async () => {
    const { getByPlaceholderText, queryByText } = render(<LoginForm />);

    const usernameInput = getByPlaceholderText('Username') as HTMLInputElement;
    const passwordInput = getByPlaceholderText('Password') as HTMLInputElement;

    // Preencher os campos do formulário
    fireEvent.change(usernameInput, { target: { value: 'kminchelle' } });
    fireEvent.change(passwordInput, { target: { value: '0lelplR' } });

    // Verificar se a função authenticate foi chamada corretamente ao submeter o formulário
    await waitFor(() => {
      fireEvent.submit(usernameInput);
    });
    expect(authenticate).toHaveBeenCalledWith('kminchelle', '0lelplR');
  });

  it('exibe erro ao submeter formulário com credenciais inválidas', async () => {
    // Mock para simular um erro na autenticação
    jest.spyOn(console, 'error').mockImplementation(() => {});

    const { getByPlaceholderText, getByText } = render(<LoginForm />);

    const usernameInput = getByPlaceholderText('Username') as HTMLInputElement;
    const passwordInput = getByPlaceholderText('Password') as HTMLInputElement;

    // Preencher os campos do formulário
    fireEvent.change(usernameInput, { target: { value: 'kminchelle' } });
    fireEvent.change(passwordInput, { target: { value: 'senhaIncorreta' } });

    // Verificar se a função authenticate foi chamada corretamente ao submeter o formulário
    await waitFor(() => {
      fireEvent.submit(usernameInput);
    });
    expect(authenticate).toHaveBeenCalledWith('kminchelle', 'senhaIncorreta');
  });
});
