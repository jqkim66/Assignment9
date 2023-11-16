const User = require('../models/User'); 

const findUserByUsername = async (username) => {
  return User.findOne({ username });
};

module.exports = {
  findUserByUsername,
};