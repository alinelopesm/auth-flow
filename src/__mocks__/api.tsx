// __mocks__/api.ts
interface User {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    token: string;
}
  
  export async function login(username: string, password: string): Promise<User | null> {
    if (username && password) {
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
    