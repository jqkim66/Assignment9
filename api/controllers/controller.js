const userService = require('../services/service');
const bcrypt = require('bcryptjs');

const loginUser = async (req, res) => {
    const { username, password } = req.body;
    const user = await userService.findUserByUsername(username);
  
    if (!user) {
      return res.status(404).send('User not find');
    }
  
    if (password !== user.password) {
        return res.status(400).send('Invalid Password');
      }
  
    res.send('Login successfully');
  };
  
  module.exports = {
    loginUser,
  };