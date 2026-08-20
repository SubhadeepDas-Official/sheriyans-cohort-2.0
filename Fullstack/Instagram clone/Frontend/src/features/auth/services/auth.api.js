import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api/auth',
  withCredentials: true,
});

export const register = async (username, email, password, bio) => {
  const response = await api.post('/register', {
    username,
    email,
    password,
    bio,
  });
  return response.data;
};

export const login = async (username, password) => {
  const response = await api.post('/login', {
    username,
    password,
  });
  return response.data;
};

export const getMe = async () => {
  try {
    const response = await axios.get('/get-me');
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};
