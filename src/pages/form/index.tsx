import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import { AuthContext } from '../../context/AuthContext';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const { login} = useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleLogin(username, password);
  };

  async function handleLogin(username: string, password: string) {
    try {
      login(username, password)
      navigate('/');
    } catch (error) {
      console.error('Erro durante o login:', error);
    }
  }

  return (
    <div className="page">
      <form method="POST" className="formLogin" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <p>Digite os seus dados de acesso no campo abaixo.</p>
        <label htmlFor="username">Username</label>
        <input 
          type="text" 
          placeholder="Digite seu username" 
          autoFocus={true} 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Senha</label>
        <input
          type="password" 
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Acessar" className="btn" />
      </form>
  </div>
  );
};

export default LoginForm;
