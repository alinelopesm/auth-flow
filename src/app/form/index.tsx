import React, { useState } from 'react';
import { authenticate, getUser } from '../../__mocks__/auth';
import UserInfo from '../user';
import UserConstructor, { User } from '../../types/UserType';
import './index.css';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState<User>(new UserConstructor())

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
        if (responseUser && responseUser !== undefined) setUserInfo(responseUser)
        return responseUser;
      }
    } catch (error) {
      console.error('Erro durante o login:', error);
    }
  }

  return (
    <div className="login-container">
    {!isLoggedIn ? (
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
    ) : (
      <UserInfo userInfo={userInfo} />
    )}
  </div>
  );
};

export default LoginForm;
