const express = require('express');
const multer = require('multer'); //used to read files on express server
const postController = require('../controller/post.controller');
const identifyUser = require('../middlewares/auth.middleware')

const postRouter = express.Router();

const upload = multer({ storage: multer.memoryStorage() }); 
//temporarily stores file in RAM/temporary storage before sending the file to cloud storage

postRouter.post('/create-post',
  upload.single('profile_img'), 
  //"profile_img" -> it should be the same fieldname that is used to send data from frontend to backend ("profile_img" is used in Postman for sending data in form data)
  identifyUser,
  postController.createPostController,
);

//get the total number of posts created by a specific user
postRouter.get('/get-post', identifyUser, postController.getPostController)

//returns details about a specific post through postId. Also checks whether the post actually exists, whether the post belongs to the user the request came from 
postRouter.get('/details/:postId', identifyUser, postController.getPostDetailsController)

module.exports = postRouter;
