const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI_LOGIN)
const Schema = mongoose.Schema
const userSchema = new Schema({
  firstName: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  }
})

module.exports = mongoose.model('user', userSchema)