const ImageKit = require('@imagekit/nodejs');
const { toFile } = require('@imagekit/nodejs');
const jwt = require('jsonwebtoken');
const postModel = require('../models/posts.model');

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

module.exports = {
  createPostController,
  getPostController,
  getPostDetailsController,
};
