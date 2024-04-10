const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    UserName: String,
    password: String,
}, { timestamps: true });

//Collection Name starts, Schema follows
const LoginModel = mongoose.model("dusers", loginSchema);

module.exports = LoginModel;