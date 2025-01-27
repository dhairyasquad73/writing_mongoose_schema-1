const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true, 
  },
  age: {
    type: Number,
    min: 0,
  },
});

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true, 
      trim: true, 
    },
    email: {
      type: String,
      required: true,
      unique: true, 
      lowercase: true, 
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles: {
      type: [String],
      default: ['user'], 
    },
    profile: {
      type: ProfileSchema,
      required: true,
    },
    lastLogin: {
      type: Date,
      default: null, 
    },
  },
  {
    timestamps: true, 
  }
);


module.exports = mongoose.model('User', UserSchema);
