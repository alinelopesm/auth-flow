// userInterface.tsx

/* Interface que define a estrutura do usuário */
export interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName?: string;
  age?: number;
  gender?: string;
  email: string;
  phone?: string;
  username: string;
  password: string;
  birthDate?: string;
  image?: string;
  bloodGroup?: string;
  height?: number;
  weight?: number;
  eyeColor?: string;
  hair?: {
    color: string;
    type: string;
  };
  domain?: string;
  ip?: string;
  address?: {
    address: string;
    city: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    postalCode: string;
    state: string;
  };
  macAddress?: string;
  university?: string;
  bank?: {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
  };
  company?: {
    address: {
      address: string;
      city: string;
      coordinates: {
        lat: number;
        lng: number;
      };
      postalCode: string;
      state: string;
    };
    department: string;
    name: string;
    title: string;
  };
  ein?: string;
  ssn?: string;
  userAgent?: string;
}

/* Construtor para criar instâncias da User com as informações obrigatórias */
class UserConstructor implements User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;

  constructor(user?: User) {
    this.id = user?.id || 0;
    this.firstName = user?.firstName || '';
    this.lastName = user?.lastName || '';
    this.email = user?.email || '';
    this.username = user?.username || '';
    this.password = user?.password || '';
  }
}

export default UserConstructor;
