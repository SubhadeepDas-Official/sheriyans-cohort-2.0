const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const authRouter = require('./routes/auth.routes');
const postRouter = require('../src/routes/post.routes');
const userRouter = require('../src/routes/user.routes');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }),
);

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/posts', postRouter);

module.exports = app;
