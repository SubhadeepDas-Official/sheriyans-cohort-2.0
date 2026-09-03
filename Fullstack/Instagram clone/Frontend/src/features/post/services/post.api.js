import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api/posts',
  withCredentials: true,
});

export const createPostApi = async (caption, img, user) => {
  const response = await api.post('/create-post', {
    caption,
    img,
    user,
  });
  return response.data;
};

export const getFeedApi = async () => {
  const response = await api.get('/feed');
  return response.data;
};
