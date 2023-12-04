import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import { AuthContext } from '../../context/AuthContext';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const { isLoggedIn, login, authenticateInfo } = useContext(AuthContext);

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
    <div className="login-container">
    {!isLoggedIn &&
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    }
  </div>
  );
};

export default LoginForm;
