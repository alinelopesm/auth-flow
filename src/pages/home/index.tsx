import React, { useContext } from 'react';
import UserInfo from '../user';
import { AuthContext } from '../../context/AuthContext';
import Struct from '../../components/Structure/Struct';

const Home: React.FC = () => {
  const { isLoggedIn, authenticateInfo, logout} = useContext(AuthContext);

  return (
    <Struct>
      {isLoggedIn ?
        <UserInfo authInfo={authenticateInfo}/> 
        :
        <>Faça</>
      }
    </Struct>
  )
};

export default Home;
