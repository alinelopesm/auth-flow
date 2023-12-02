// __mocks__/api.ts
export async function login(username: string, password: string): Promise<any> {
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
}
  