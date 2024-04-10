const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
mongoose.models = {}; //This ensures the cache is cleared every time the model file is loaded

const registrationSchema = new mongoose.Schema({
    UserName: String,
    email: String,
    password: String,
    confirmPassword: String,
}, { timestamps: true });

//Collection Name starts, Schema follows
const RegistrationModel = mongoose.model("dusers", registrationSchema);

module.exports = RegistrationModel;