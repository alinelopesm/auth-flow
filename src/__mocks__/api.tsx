import { AuthInfo } from "../types/AuthInfo";
  
  export async function login(username: string, password: string): Promise<AuthInfo | null> {
    if (username === 'kminchelle' && password === '0lelplR') {
      return {
        id: 15,
        username: 'kminchelle',
        email: 'kminchelle@qq.com',
        firstName: 'Jeanne',
        lastName: 'Halvorson',
        gender: 'female',
        image: 'https://robohash.org/autquiaut.png?size=50x50&set=set1',
        token: 'mocked_token'
      };
    }
    return null;
  }
    