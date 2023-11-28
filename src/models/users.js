// Users model

const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const userSchema = new mongoose.Schema({
  us_id: { type: String, default: uuidv4 }, // id alanını varsayılan olarak UUID'ye ayarla
  us_name: String,
  us_age: String,
  us_gender: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
