import React from 'react';
import AppRoutes from './AppRoutes';
import './style.scss';
import { AuthContextProvider } from './features/auth/auth.context';
import { PostContextProvider } from './features/post/post.context';

const App = () => {
  return (
    <AuthContextProvider>
      <PostContextProvider>
        <AppRoutes />
      </PostContextProvider>
    </AuthContextProvider>
  );
};

export default App;
