var Joi = require('joi');
var jwt = require('../jwt.js')
var bcrypt = require('bcrypt');
var LoginModel = require('../models/LoginModel');
var RegistrationModel = require('../models/RegistrationModel');


async function getSignal(req, res) {
    res.send('Welcome back!'); //This was a sample to test the routes & connections
}

async function loginData(req, res) {
    try {
        const { UserName, password } = req.body; // Destructure request body
        const schema = Joi.object({
            UserName: Joi.string().min(4).max(20).required(),
            password: Joi.string().min(8).max(20).required(),
        }).options({ abortEarly: false }); //This property allows all errors to be thrown to the console and track

        const { error } = schema.validate(req.body, { abortEarly: false });

        if (error) {
            return res.status(400).json({ errors: error.details.map(detail => detail.message) });
        }

        // Check for existing user using LoginModel (Mongoose model)
        const user = await LoginModel.findOne({ UserName });

        if (!user) {
            return res.status(401).send({ error: 'User Does not Exist' });
        }

        // Compare hashed passwords using bcrypt
        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) {
            return res.status(401).send({ error: 'Passwords Does not Match' });
        }

        // Generate JWT token after successful login
        const payload = { user: { id: UserName } }; // Assuming you have user id
        const token = jwt.generateToken(res, payload);

        // Set cookie
        res.cookie('jwt', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development', // Use secure cookies in production
            sameSite: 'strict', // Prevent CSRF attacks
        });

        // Hash the password before saving it
        const hashedPassword = await bcrypt.hash(password, 10); // Salt rounds: 10

        // Create a new user with the hashed password
        const newUser = new LoginModel({ UserName, password: hashedPassword });
        const savedUser = await newUser.save();
        res.json({ savedUser, message: "Login successful" });  // Respond with the saved user data & Send token in response

    } catch (error) {
        if (error.code === 11000) { // Duplicate key error code
            // Handle duplicate key error (email already exists)
            return res.status(400).send({ error: 'Username already Exists' });
        }
        console.error('Error during login', error);
        res.status(500).send({ status: 'error', message: 'Internal Server Error' });
    }
}

async function registrationData(req, res) {
    // console.log(req.body); View requests sent in the Body
    try {
        const { UserName, email, password, confirmpassword } = req.body; // Destructure request body
        const schema = Joi.object({
            UserName: Joi.string().min(4).max(20).required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(8).max(20).required(),
            confirmpassword: Joi.string().valid(Joi.ref('password')).required(),
        }).options({ abortEarly: false }) //This property allows all errors to be thrown to the console and track

        const { error } = schema.validate(req.body, { abortEarly: false });

        if (error) {
            return res.status(400).json({ errors: error.details.map(detail => detail.message) });
        }

        // Check for existing user using RegistrationModel (Mongoose model)
        const existingUser = await RegistrationModel.findOne({ UserName });
        if (existingUser) {
            return res.status(400).send({ error: 'Username already Exists' });
        }

        // Hash the password before saving it
        const hashedPassword = await bcrypt.hash(password, 10); // Salt rounds: 10

        // Generate JWT token after successful login
        const payload = { user: { id: UserName } }; // Assuming you have user id
        const token = jwt.generateToken(res, payload);

        // Set cookie
        res.cookie('jwt', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development', // Use secure cookies in production
            sameSite: 'strict', // Prevent CSRF attacks
        });


        // Create a new user with the hashed password
        const newUser = new RegistrationModel({ UserName, email, password: hashedPassword });
        const savedUser = await newUser.save();
        res.json({ savedUser, message: "Registration successful" });  // Respond with the saved user data


    } catch (error) {
        if (error.code === 11000) { // Duplicate key error code
            // Handle duplicate key error (email already exists)
            return res.status(400).send({ error: 'Username already Exists' });
        }
        console.error('Error saving data', error);
        res.status(500).send({ status: 'error', message: 'Internal Server Error' });
    }
}


module.exports = { getSignal, loginData, registrationData };