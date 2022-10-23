const express = require('express')
const router = express.Router()
const User = require('../models/users')


router.get('/', (req, res) => {
  res.render('index', { name: req.signedCookies.user })
})

router.post('/login', (req, res) => {
  const { email, password } = req.body
  User.findOne({ $and: [{ email }, { password }] })
    .lean()
    .then(user => {
      if (!user) return res.render('index', { name: req.signedCookies.user, user: !user, email, password })

      res.cookie('user', user.firstName, { signed: true });
      return res.render('welcome', { user })
    })
    .catch(error => console.error(error))
})

router.get('/logout', (req, res) => {
  res.clearCookie('user')
  return res.redirect('/')
})

module.exports = router