import React, { useContext } from 'react';
import UserInfo from '../user';
import { AuthContext } from '../../context/AuthContext';

const Home: React.FC = () => {
  const { isLoggedIn, authenticateInfo } = useContext(AuthContext);

  return isLoggedIn ? <UserInfo authInfo={authenticateInfo}/> : <>Faça Login</>
};

export default Home;
