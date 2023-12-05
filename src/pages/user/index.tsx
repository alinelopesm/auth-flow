import React, { useContext } from 'react';
import UserAuthInfo from '../../components/User/UserAuthInfo';
import { AuthContext } from '../../context/AuthContext';
import Struct from '../../components/Structure/Struct';
import { Link } from 'react-router-dom';

const User: React.FC = () => {
  const { isLoggedIn, authenticateInfo } = useContext(AuthContext);

  return (
    <Struct>
      {isLoggedIn ?
        <>
          <UserAuthInfo authInfo={authenticateInfo}/> 

          Informações completas do usuário:
        </>
        :
        <div style={{ textAlign: 'center', marginTop: '50px'}}>
          <h1>Oops!</h1>
          <p>Para visualizar os dados do usuário, é necessário fazer login</p>
          <Link to="/login">Faça o Login</Link>
        </div>
      }
    </Struct>
  )
};

export default User;