const Post = ({ user, post }) => {
  return (
    <div className="post">
      <div className="post-top">
        <img src={user.profileImage} alt="" />

        <p>{user.username}</p>
      </div>

      <img className="post-img" src={post.img} alt="" />

      <div className="post-bottom">
        <div className="icons">
          <div className="left">
            <i className={post.isLiked ? 'ri-poker-hearts-fill like' : 'ri-poker-hearts-line'}></i>
            <i className="ri-chat-3-line"></i>
            <i className="ri-share-2-line"></i>
          </div>

          <div className="right">
            <i className="ri-bookmark-line"></i>
          </div>
        </div>

        <p className="caption">{post.caption}</p>
      </div>
    </div>
  );
};

export default Post;
