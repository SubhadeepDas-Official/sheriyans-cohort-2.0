const ImageKit = require('@imagekit/nodejs');
const { toFile } = require('@imagekit/nodejs');
const jwt = require('jsonwebtoken');
const postModel = require('../models/posts.model');
const likeModel = require('../models/like.model');

const imageKit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

const createPostController = async (req, res) => {
  const uploadedFile = await imageKit.files.upload({
    file: await toFile(req.file.buffer, req.file.originalname),
    fileName: `profile_${Date.now()}`,
    folder: 'Cohort-2-Insta-clone-posts',
  });

  const post = await postModel.create({
    caption: req.body.caption,
    img: uploadedFile.url,
    user: req.user.id,
  });

  res.status(201).json({
    message: 'Post created successfully!',
  });
};

const getPostController = async (req, res) => {
  const userId = req.user.id;

  const posts = await postModel.find({
    user: userId,
  });

  console.log(posts);

  res.status(200).json({
    message: 'Post fetched successfully!',
    post: posts,
  });
};

const getPostDetailsController = async (req, res) => {
  const userId = req.user.id;
  const postId = req.params.postId;

  const post = await postModel.findById(postId);

  if (!post) {
    return res.status(404).json({
      message: 'Post cannot be found!',
    });
  }

  const isUserValid = post.user.equals(userId);

  if (!isUserValid) {
    return res.status(403).json({
      message: 'Access Forbidden',
    });
  }

  return res.status(200).json({
    message: 'Post details fetched successfully',
    post,
  });
};

const likePostController = async (req, res) => {
  const username = req.user.username;
  const postId = req.params.postId;

  const post = await postModel.findById(postId);

  if (!post) {
    return res.status(404).json({
      message: 'Post not found!',
    });
  }

  const exitingLike = await likeModel.findOneAndDelete({
    post: postId,
    user: username,
  });

  if (exitingLike) {
    return res.status(200).json({
      message: 'You have unliked this post!',
    });
  }

  const like = await likeModel.create({
    post: postId,
    user: username,
  });

  res.status(200).json({
    message: 'Post liked successfully!',
    like,
  });
};

const feedController = async (req, res) => {
  const user = req.user;

  const posts = await Promise.all(
    (await postModel.find().populate('user', '-email').lean()).map(
      async (post) => {

        const isLiked = await likeModel.findOne({
          user: user.username,
          post: post._id
        })

        post.isLiked = !!isLiked //!! converts any JavaScript value into a real boolean: true or false

        return post;
      },
    ),
  );

  res.status(200).json({
    message: 'Posts fetched successfully',
    posts,
  });
};

module.exports = {
  createPostController,
  getPostController,
  getPostDetailsController,
  likePostController,
  feedController,
};
