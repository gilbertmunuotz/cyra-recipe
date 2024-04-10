const express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

/* GET home page. */
router.get('/', userController.getSignal);

/* Post User Login. */
router.post('/api/send/login', userController.loginData);

/* Post Registration Data */
router.post('/api/send/register', userController.registrationData);

module.exports = router;
