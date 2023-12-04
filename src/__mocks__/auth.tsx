// src/__mocks__/auth.tsx
import { login } from './api';
import { User } from '../types/User';

const authenticate = async (username: string, password: string): Promise<boolean> => {
  const user = await login(username, password);
  if (user) {
    localStorage.setItem('user', JSON.stringify(user));
    return true;
  }
  return false;
};

const logout = (): void => {
  localStorage.removeItem('user');
};

const getUser = (): User | null => {
  const user = localStorage.getItem('user');
  console.log('Sou user', user);
  
  if (user) {
    return JSON.parse(user) as User;
  }
  return null;
};

export { authenticate, logout, getUser };
