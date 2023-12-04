import React, { useContext, useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const HeaderContent: React.FC = () => {
  const { isLoggedIn, authenticateInfo, logout } = useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="header">
      <Link to="/" className="logo">Boas vindas!!</Link>
      <div className="user-info">
        {isLoggedIn ? (
          <>
            <span className="username">{authenticateInfo?.username}</span>
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
