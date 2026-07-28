const express = require('express');
// const { registerController, loginController } = require('../controller/auth.controller');
const authController = require('../controller/auth.controller')

const authRouter = express();

authRouter.post('/register', authController.registerController);

authRouter.post('/login', authController.loginController);

module.exports = authRouter;
