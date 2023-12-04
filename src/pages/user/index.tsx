import React from 'react';
import { User } from '../../types/UserType';
import './index.css'

interface UserInfoProps {
  userInfo: User;
}

const UserInfo: React.FC<UserInfoProps> = ({ userInfo }) => {
  return (
    <div className="user-info-container">
      <div className="user-info">
        <h2>Informações do Usuário</h2>
        <div className="user-details">
          <div className="user-avatar">
            {userInfo.image ? (
              <img src={userInfo.image} alt="User Avatar" />
            ) : (
              <div className="default-avatar">{userInfo.firstName.charAt(0)}</div>
            )}
          </div>
          <div className="user-data">
            <p>
              <strong>Nome:</strong> {userInfo.firstName} {userInfo.lastName}
            </p>
            <p>
              <strong>Username:</strong> {userInfo.username}
            </p>
            <p>
              <strong>Email:</strong> {userInfo.email}
            </p>
            {userInfo.gender && (
              <p>
                <strong>Gênero:</strong> {userInfo.gender}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
