import React from 'react';
import { User } from '../../types/UserType';
import './UserAuthInfo.css';
import { AuthInfo } from '../../types/AuthInfoType';

interface UserAuthProps {
  userInfo?: User | null;
  authInfo: AuthInfo | null;
}

const UserAuthInfo: React.FC<UserAuthProps> = ({ userInfo, authInfo }) => {
  const user = userInfo || authInfo;
  return (
    user && (
      <div className="user-info-container">
        <div className="user-info">
          <h2 className="card-title">Informações de autenticação do Usuário</h2>
          <div className="user-details">
            <div className="user-avatar">
              {user.image ? (
                <img src={user.image} alt="User Avatar" />
              ) : (
                <div className="default-avatar">{user.firstName.charAt(0)}</div>
              )}
            </div>
            <div className="user-data">
              <p>
                <strong>Nome:</strong> {user.firstName} {user.lastName}
              </p>
              <p>
                <strong>Username:</strong> {user.username}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              {user.gender && (
                <p>
                  <strong>Gênero:</strong> {user.gender}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default UserAuthInfo;
