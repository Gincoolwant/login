const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const mongoose = require('./config/mongoose.js')
const routes = require('./routes/index.js')

const app = express()
const port = 3000

app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser('ckfirstcookie'))

app.use(routes)

app.listen(port, () => {
  console.log(`App is connecting on http://localhost:${port}/`)
})