import React, { useContext} from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const HeaderContent: React.FC = () => {
  const { isLoggedIn, authenticateInfo, logout } = useContext(AuthContext);

  return (
    <div className="header">
      <Link to="/" className="logo">Boas vindas!!</Link>
      <div className="user-info-header">
        {isLoggedIn ? (
          <>
            <span className="username">Olá, {authenticateInfo?.username}</span>
            <button className="login-link" onClick={logout}>Logout</button>
          </>
        ) : (
          <Link to="/login" className="login-link">Login</Link>
        )}
      </div>
    </div>
  );
}

export default HeaderContent;
