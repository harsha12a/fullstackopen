const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const mongoUrl = process.env.MONGODB_URI
mongoose.connect(mongoUrl)

module.exports = mongoose