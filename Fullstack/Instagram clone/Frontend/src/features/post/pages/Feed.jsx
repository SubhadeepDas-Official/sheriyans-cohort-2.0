import Post from '../components/Post';
import '../style/style.scss';
import { usePost } from '../hooks/usePost';
import { useEffect } from 'react';

const Feed = () => {
  const { loading, handleFeed, feed } = usePost();

  useEffect(() => {
    handleFeed();
  }, []);

  if (loading || !feed) {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    );
  }

  return (
    <main className="feed-page">
      <div className="feed">
        <div className="posts">
          {feed.map((post) => {
            return <Post key={post._id} user={post.user} post={post} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default Feed;
