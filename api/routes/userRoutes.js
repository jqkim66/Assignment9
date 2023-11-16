const express = require('express');
const userController = require('../controllers/controller');
const router = express.Router();

router.post('/login', userController.loginUser);

module.exports = router;