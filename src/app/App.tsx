import React, { useContext } from 'react';
import './App.css';
import { AuthContext } from '../context/AuthContext';
import LoginForm from './form/index';

const App: React.FC = () => {
  const { isLoggedIn, login, logout } = useContext(AuthContext);

  return (
    <div className="App">
      Teste Aline 
      <LoginForm />
      <header className="App-header" />
      {isLoggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
};

export default App;
