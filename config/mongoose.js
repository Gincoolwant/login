const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI_LOGIN)
const db = mongoose.connection

db.on('error', () => {
  console.error(error)
})

db.once('open', () => {
  console.log('MongoDB is connecting')
})

module.exports = db