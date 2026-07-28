const express = require('express');
const userModel = require('../models/users.model');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const authRouter = express();

authRouter.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  const isUserAlreadyExists = await userModel.findOne({ email });

  if (isUserAlreadyExists) {
    return res.status(409).json({
      message: 'User already exists!',
    });
  }

  const hash = crypto.createHash('md5').update(password).digest('hex');

  const user = await userModel.create({
    name,
    email,
    password: hash,
  });

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.JWT_KEY,
    { expiresIn: '5h' },
  );

  res.cookie('jwt_token', token);

  res.status(201).json({
    message: 'User successfully registered!',
    user,
  });
});

authRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });

  if (!user) {
    return res.status(409).json({
      message: 'User does not exists!',
    });
  }

  const isPasswordCorrect =
    user.password === crypto.createHash('md5').update(password).digest('hex');

  if (!isPasswordCorrect) {
    return res.status(409).json({
      message: 'Password is incorrect!',
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.JWT_KEY,
    { expiresIn: '24h' },
  );

  res.cookie('user_login_token', token);

  res.status(200).json({
    message: `${user.name} logged in successfully!`,
  });
});

authRouter.get('/user-details', async (req, res) => {
  const token = req.cookies.user_login_token;
  const decoded = jwt.verify(token, process.env.JWT_KEY);

  const user = await userModel.findById( decoded.id );

  res.status(200).json({
    name: user.name,
    email: user.email,
  });
});

module.exports = authRouter;
