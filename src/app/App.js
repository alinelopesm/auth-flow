import React, { useContext } from 'react';
import './App.css';
import { AuthContext } from '../context/AuthContext';

function App() {
  const { isLoggedIn, login, logout } = useContext(AuthContext);

  return (
    <div className="App">
      <header className="App-header" />
      {isLoggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
}

export default App;
