var jwt = require("jsonwebtoken");

// Use a default value for JWT_SECRET
const JWT_SECRET = process.env.JWT_SECRET || 'ybxeYJbtjQdsId5BNCdJhddgk9vGtPVsiwnp0FE10Hfsj328dfjldff893rsdxDzANBgN69dheBD7V';

function generateToken(res, payload) {
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '3d' }); // Set expiry time to 3 days

    return token; // Make sure to return the token
}

module.exports = { generateToken };