const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  caption: {
    type: String,
    default: '',
  },
  img: {
    type: String,
    required: [true, 'Image is required!'],
  },
  user:{
    ref: "users", //Tells Mongoose which model/collection this "user"/"ObjectId" belongs to 
    type: mongoose.Schema.Types.ObjectId, //ensures "user" stores an ID that refers to a document
    required: [true, "user id is required for creating a post!"]
  }
});

const postModel = mongoose.model('posts', postSchema);

module.exports = postModel;
