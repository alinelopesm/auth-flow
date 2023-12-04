import React, { useState } from 'react';
import { authenticate, getUser } from '../../__mocks__/auth';
import { useNavigate } from 'react-router-dom';
import './index.css';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleLogin(username, password);
  };

  async function handleLogin(username: string, password: string) {
    try {
      const response = await authenticate(username, password);
      if(response) {
        const responseUser = await getUser()

        setIsLoggedIn(true);
        if (responseUser) navigate('/', { state: { user: responseUser } });
        return responseUser;
      }
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
