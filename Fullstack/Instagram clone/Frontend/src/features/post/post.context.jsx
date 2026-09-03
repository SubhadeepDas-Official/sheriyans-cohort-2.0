import { createContext, useState } from 'react';
import { getFeedApi } from './services/post.api';

export const PostContext = createContext();

export const PostContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState(null);
  const [feed, setFeed] = useState(null);

  const handleFeed = async () => {
    setLoading(true)
    try {
      const response = await getFeedApi()
      setFeed(response.posts)
    } finally {
      setLoading(false)
    }
  };

  return (
    <PostContext.Provider
      value={{ loading, setLoading, post, setPost, feed, setFeed, handleFeed }}>
      {children}
    </PostContext.Provider>
  );
};
