var Joi = require('joi');
var LoginModel = require('../models/LoginModel');
var RegistrationModel = require('../models/RegistrationModel');

async function getSignal(req, res) {
    res.send('Welcome back!'); //This was a sample to test the routes & connections
}

module.exports = { getSignal };