const userModel = require('../models/users.model');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const registerController = async (req, res) => {
  const { username, email, password, bio, profileImage } = req.body;

  const isUserAlreadyExists = await userModel.findOne({
    $or: [
      // it checks for either username or email or both and returns if user exists or else as it needs only one condition to be true
      { username },
      { email },
    ],
  });

  if (isUserAlreadyExists) {
    return res.status(409).json({
      message:
        'User already exists!' +
        ' ' +
        (isUserAlreadyExists.email == email
          ? 'Email already in use!'
          : 'Username already taken!'),
    });
  }

  const hash = crypto.createHash('md5').update(password).digest('hex');

  const user = await userModel.create({
    username,
    email,
    bio,
    profileImage,
    password: hash,
  });

  const token = await jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: '1d' },
  );

  await res.cookie('user_register_token', token);

  res.status(201).json({
    message: 'User registered successfully!',
    username: user.username,
    email: user.email,
    bio: user.bio,
    profileImage: user.profileImage,
  });
};

const loginController = async (req, res) => {
  const { username, email, password } = req.body;

  const user = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (!user) {
    return res.status(404).json({
      message: 'No user found!',
    });
  }

  const isPasswordCorrect =
    user.password == crypto.createHash('md5').update(password).digest('hex');

  if (!isPasswordCorrect) {
    res.status(409).json({
      message: 'Password is incorrect!',
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: '1d' },
  );

  res.cookie('user_login_token', token);

  res.status(200).json({
    message: 'Logged in successfully!',
    user: {
      username: user.username,
      email: user.email,
      bio: user.bio,
      profileImage: user.profileImage,
    },
  });
};

module.exports = {
  registerController,
  loginController,
};
