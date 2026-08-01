const ImageKit = require('@imagekit/nodejs');
const { toFile } = require('@imagekit/nodejs');
const jwt = require('jsonwebtoken');
const postModel = require('../models/posts.model');

const imageKit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

const createPostController = async (req, res) => {
  console.log(req.body, req.file);

  const token = req.cookies.user_login_token;

  if (!token) {
    return res.status(401).json({
      message: 'Unauthorized access!',
    });
  }

  let decoded = null;

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  } catch (error) {
    return res.status(401).json({
      message: 'Unauthorized access!',
    });
  }

  // console.log(decoded);

  const uploadedFile = await imageKit.files.upload({
    file: await toFile(req.file.buffer, req.file.originalname),
    fileName: `profile_${Date.now()}`,
    folder: 'Cohort-2-Insta-clone-posts',
  });

  const post = await postModel.create({
    caption: req.body.caption,
    img: uploadedFile.url,
    user: decoded.id,
  });

  res.status(201).json({
    message: 'Post created successfully!',
  });
};

const getPostController = async (req, res) => {
  const token = req.cookies.user_login_token;

  if (!token) {
    return res.status(401).json({
      message: 'Unauthorized access!',
    });
  }

  let decoded = null;

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  } catch (error) {
    return res.status(401).json({
      message: 'Token Invalid!',
    });
  }

  const userId = decoded.id;

  const posts = await postModel.find({
    user: userId,
  });

  console.log(posts);

  res.status(200).json({
    message: 'Post fetched successfully!',
    post: posts
  });
};

const getPostDetailsController = async(req, res) => {
  const token = req.cookies.user_login_token;

  if (!token) {
    return res.status(401).json({
      message: 'Unauthorized access!',
    });
  }

  let decoded = null;

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  } catch (error) {
    return res.status(401).json({
      message: 'Token Invalid!',
    });
  }
  
  const userId = decoded.id
  const postId = req.params.postId

  const post = await postModel.findById(postId)

  if(!post){
    return res.status(404).json({
      message: "Post cannot be found!"
    })
  }

  const isUserValid = post.user.equals(userId)

  if(!isUserValid){
    return res.status(403).json({
      message: 'Access Forbidden'
    })
  }

  return res.status(200).json({
    message: "Post details fetched successfully",
    post
  })

}

module.exports = {
  createPostController,
  getPostController,
  getPostDetailsController
};
