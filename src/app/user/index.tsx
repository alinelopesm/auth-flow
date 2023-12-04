// UserInfo.tsx
import React from 'react';

interface UserInfoProps {
  username: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ username }) => {
  return (
    <div className="user-info">
      <h2>Informações do Usuário</h2>
      <p>Usuário: {username}</p>
    </div>
  );
};

export default UserInfo;
