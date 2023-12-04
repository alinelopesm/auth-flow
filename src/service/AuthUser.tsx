interface LoginCredentials {
  username: string;
  password: string;
  expiresInMins?: number;
}

class AuthService {
  private readonly baseURL: string;

  constructor() {
    this.baseURL = process.env.BASE_URL || 'https://dummyjson.com';
  }

  async login(credentials: LoginCredentials): Promise<any> {
    const { username, password, expiresInMins } = credentials;

    const body = JSON.stringify({
      username,
      password,
      expiresInMins,
    });

    try {
      const response = await fetch(`${this.baseURL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body,
      });

      if (!response.ok) {
        throw new Error('Erro ao fazer login');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Erro ao fazer login: ${error}`);
    }
  }
}

export default AuthService;
