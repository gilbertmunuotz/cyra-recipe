const express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

/* GET home page. */
router.get('/', userController.getSignal);

module.exports = router;
