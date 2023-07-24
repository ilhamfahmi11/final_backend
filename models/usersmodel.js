const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  gender: { type: Number, required: true },
});

const UsersModel = mongoose.model('Users', usersSchema);

module.exports = UsersModel;
