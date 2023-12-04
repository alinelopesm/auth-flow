// pages/Home.tsx
import React from 'react';
import UserInfo from '../user';
import { useLocation } from 'react-router-dom';

const Home: React.FC = () => {
  const location = useLocation();
  const user = location.state?.user;

  return <UserInfo userInfo={user} />;
};

export default Home;
