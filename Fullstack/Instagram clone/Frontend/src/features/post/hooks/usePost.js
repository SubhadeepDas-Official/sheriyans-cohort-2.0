import { useContext } from 'react';
import { PostContext } from '../post.context';

export const usePost = () => {
  const context = useContext(PostContext);

  return context;
};
