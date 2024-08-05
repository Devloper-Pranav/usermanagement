
import axios from 'axios';

interface AuthResponse {
  token: string;
}

export const login = async (email: string, password: string): Promise<AuthResponse> => {
  const response = await axios.post('https://reqres.in/api/login', { email, password });
  return response.data;
};

export const register = async (email: string, password: string): Promise<AuthResponse> => {
  const response = await axios.post('https://reqres.in/api/register', { email, password });
  return response.data;
}; 
