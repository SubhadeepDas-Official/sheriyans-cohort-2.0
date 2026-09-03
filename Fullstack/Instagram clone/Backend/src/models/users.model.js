const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, 'Username already taken!'],
    required: [true, 'Username is required!'],
  },
  email: {
    type: String,
    unique: [true, 'Email already exists!'],
    required: [true, 'Email is required'],
  },
  password: {
    type: String,
    required: [true, 'Password is required!'],
    select: false, //excludes this field when fetching data from the database by default.
  },
  bio: String,
  profileImage: {
    type: String,
    default:
      'https://ik.imagekit.io/subhadeep/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette.avif',
  },
});

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;
