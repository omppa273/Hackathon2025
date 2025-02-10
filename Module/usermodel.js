const {Timestamp}=require('mongodb');

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,  // Ensure email is unique
  },
  password: {
    type: String,
    required: true
  }
});

// Create the user model
const user = mongoose.model('user', userSchema);
module.exports = user;
