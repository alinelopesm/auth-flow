// authInfoInterface.tsx

/* Interface que define a estrutura das informações de autenticação */
export interface AuthInfo {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender?: string;
  image?: string;
  token: string;
}
  
/* Construtor para criar instâncias da AuthInfo com as informações obrigatórias */
class AuthInfoConstructor implements AuthInfo {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  token: string;

  /* O construtor recebe um objeto contendo as informações de autenticação */
  constructor(authInfo: AuthInfo) {
    /* Atribui os valores fornecidos às propriedades da instância */
    this.id = authInfo.id;
    this.username = authInfo.username;
    this.email = authInfo.email;
    this.firstName = authInfo.firstName;
    this.lastName = authInfo.lastName;
    this.token = authInfo.token;
  }
}
  
  export default AuthInfoConstructor;
  