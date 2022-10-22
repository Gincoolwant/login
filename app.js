const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

const User = require('./models/users')
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI_LOGIN)
const db = mongoose.connection

db.on('error', () => {
  console.error(error)
})

db.once('open', () => {
  console.log('MongoDB is connecting')
})

app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname:'hbs' }))
app.set('view engine', 'hbs')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`App is connecting on http://localhost:${port}/`)
})