const express = require('express');
const multer = require('multer'); //used to read files on express server
const postController = require('../controller/post.controller');

const upload = multer({ storage: multer.memoryStorage() }); //temporarily stores file in RAM/temporary storage before sending the file to cloud storage
const postRouter = express.Router();

postRouter.post('/create-post',
  upload.single('profile_img'), 
  //"profile_img" -> it should be the same fieldname that is used to send data from frontend to backend ("profile_img" is used in Postman for sending data in form data)
  postController.createPostController,
);

module.exports = postRouter;
