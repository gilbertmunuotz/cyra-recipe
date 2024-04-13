const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/* GET home page. */
router.get('/', userController.getSignal);

/* Logout User */
router.post('/api/logout', userController.logout);

/* Login User. */
router.post('/api/send/login', userController.loginData);


/* Post Registration Data */
router.post('/api/send/register', userController.registrationData);


module.exports = router;