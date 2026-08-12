const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema(
  {
    post: {
      ref: 'posts',
      type: mongoose.Schema.Types.ObjectId,
      required: [true, 'post id is required for liking a post!'],
    },
    user: {
      type: String,
      required: [true, 'username is required for liking a post!'],
    },
  },
  {
    timestamps: true,
  },
);

//it ensures that a user can like a post only once
likeSchema.index({ post: 1, user: 1 }, { unique: true });

const likeModel = mongoose.model('likes', likeSchema);

module.exports = likeModel;
