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
    const { getByLabelText, getByText } = render(<LoginForm />);

    const usernameInput = getByLabelText('Username:') as HTMLInputElement;
    const passwordInput = getByLabelText('Password:') as HTMLInputElement;
    const submitButton = getByText('Login');

    // Preencher os campos do formulário
    fireEvent.change(usernameInput, { target: { value: 'kminchelle' } });
    fireEvent.change(passwordInput, { target: { value: '0lelplR' } });

    // Submeter o formulário
    fireEvent.click(submitButton);

    // Verificar se a função authenticate foi chamada corretamente
    await waitFor(() => {
      expect(authenticate).toHaveBeenCalledWith('kminchelle', '0lelplR');
    });
  });

  it('exibe erro ao submeter formulário com credenciais inválidas', async () => {
    // Mock para simular um erro na autenticação
    jest.spyOn(console, 'error').mockImplementation(() => {});

    const { getByLabelText, getByText } = render(<LoginForm />);

    const usernameInput = getByLabelText('Username:') as HTMLInputElement;
    const passwordInput = getByLabelText('Password:') as HTMLInputElement;
    const submitButton = getByText('Login');

    // Preencher os campos do formulário
    fireEvent.change(usernameInput, { target: { value: 'kminchelle' } });
    fireEvent.change(passwordInput, { target: { value: 'senhaIncorreta' } });

    // Submeter o formulário
    fireEvent.click(submitButton);

    // Verificar se a função authenticate foi chamada corretamente
    await waitFor(() => {
        expect(authenticate).toHaveBeenCalledWith('kminchelle', 'senhaIncorreta');
    });
  });
});
