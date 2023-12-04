import React, { useContext } from 'react';
import UserInfo from '../user';
import { AuthContext } from '../../context/AuthContext';

const Home: React.FC = () => {
  const { isLoggedIn, authenticateInfo, logout} = useContext(AuthContext);

  return isLoggedIn
  ? <>
     <UserInfo authInfo={authenticateInfo}/> 
     <button onClick={logout}>Logout</button>
  </>
  : <>Faça Login</>
};

export default Home;
