//Import NPM packages
var cors = require('cors');
var express = require('express');
var mongoose = require('mongoose');
var port = process.env.PORT || 4000;
var bodyParser = require('body-parser');
var userRoutes = require('./routes/userRoutes');
require('dotenv').config();

async function connectToMongo() {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {});
    console.log('Mongodb connected Succesfully');
  } catch (error) {
    console.error('Error connecting to MongoDb', error)
  }
}
connectToMongo();

// Initiate Express
var app = express();

// Add your Express middleware,and other logic here

app.use(bodyParser.json());

app.use(cors({ origin: 'http://localhost:3000' }));

app.use(userRoutes)

app.listen(port, () => {
  console.log(`Server Listening on Port ${port}`);
})

module.exports = app;