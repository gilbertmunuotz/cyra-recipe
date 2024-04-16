var Joi = require('joi');
var bcrypt = require('bcrypt');
var token = require('../jwtToken.js');
var UserModel = require('../models/UserModel.js');

//(DESC) A sample to test the routes & connections
async function getSignal(req, res) {
    res.send('Welcome back!');
}


//(DESC) Registering Users
async function registrationData(req, res) {
    try {
        // Destructure request body
        const { username, email, password } = req.body

        // Validate request body using Joi
        const schema = Joi.object({ //Validate schema Here
            username: Joi.string().min(4).max(30).required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(8).max(20).required(),
        }).options({ abortEarly: false }) //This property allows all errors to be thrown to the console and track


        const { error } = schema.validate(req.body, { abortEarly: false });

        if (error) {
            const formattedErrors = error.details.map(detail => ({
                field: detail.context.key,
                message: detail.message,
            }));
            return res.status(400).json({ errors: formattedErrors });
        }

        // Check for existing user using usermodel (Mongoose model)
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).send({ error: 'Email already Exists' });
        }

        // Hash the password before saving it
        const hashedPassword = await bcrypt.hashSync(password, 10); // Salt rounds: 10

        const user2save = new UserModel({ username, email, password: hashedPassword })
        const newUser = await user2save.save();

        // Access _id from the saved user document
        const userId = newUser._id;

        // Generate JWT token after successful Registration & Bind it To The User
        const payload = { userId };  // Assuming you have user id

        const Token = token.generateToken(res, payload);

        // Respond with the saved user data
        res.json({ newCreatedUser: newUser, message: "Registration successful", Token: Token });

        //Catch Existing Errors
    } catch (error) {
        if (error.code === 11000) { // Duplicate key error code
            // Handle duplicate key error (email already exists)
            return res.status(400).send({ error: 'Email already Exists' });
        }
        console.error('Error saving data', error);
        res.status(500).send({ status: 'error', message: 'Internal Server Error' });
    }
}


//(DESC) Logining Users
async function loginData(req, res) {
    // console.log(req.body); View requests sent in the Body
    try {
        const { UserName, password } = req.body;// Destructure request body
        const schema = Joi.object({ //Validate schema Here
            UserName: Joi.string().min(4).max(20).required(),
            password: Joi.string().min(8).max(20).required(),
        }).options({ abortEarly: false }); //This property allows all errors to be thrown to the console and track

        const { error } = schema.validate(req.body, { abortEarly: false });

        if (error) {
            return res.status(400).json({ errors: error.details.map(detail => detail.message) });
        }

        // Check for existing user using usermodel (Mongoose model)
        const user = await UserModel.findOne({ UserName });

        if (!user) {
            return res.status(401).send({ error: 'Incorrect Username' });
        }

        // Compare hashed passwords using bcrypt
        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) {
            return res.status(401).send({ error: 'Wrong Password' });
        }

        // Generate JWT token after successful login & Bind it To The User
        const payload = { userId: user._id };  // Assuming you have user id
        const Token = token.generateToken(res, payload);

        // Respond with the saved user data
        res.json({ user, message: "Login successful", Token: Token });  // Respond with the saved(loged-in) user data

    } catch (error) {
        if (error.code === 11000) { // Duplicate key error code
            // Handle duplicate key error (username already exists)
            return res.status(400).send({ error: 'Username already Exists' });
        }
        console.error('Error during login', error);
        res.status(500).send({ status: 'error', message: 'Internal Server Error' });
    }
}


module.exports = { getSignal, loginData, registrationData, };