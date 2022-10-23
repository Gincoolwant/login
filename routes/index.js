const express = require('express')
const router = express.Router()
const User = require('../models/users')

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/login', (req, res) => {
  const { email, password } = req.body
  User.findOne({ $and: [{ email }, { password }] })
    .lean()
    .then(user => {
      if (!user) return res.render('index', { user: !user, email, password })
      return res.render('welcome', { user })
    })
    .catch(error => console.error(error))
})

module.exports = router