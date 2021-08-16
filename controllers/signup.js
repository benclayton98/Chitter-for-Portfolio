const express = require('express');
const router = express.Router();
const { User } = require('../models')
const bcrypt = require('bcryptjs')

router.get('/new', async (req, res) => {
    res.render('registration/registration.ejs', {
      error: ''
    })
  })
  
router.post('/', async (req, res) => {
    if (req.body.email === req.body.username) {
      res.render('registration/registration.ejs', { error: ['Your email address and username need to be unique'] })
    } else {
      const newUser = await User.create({
        email: req.body.email,
        username: req.body.username,
        name: req.body.fullName,
        passwordHash: bcrypt.hashSync(req.body.password)
      })
      req.session.userId = newUser.id
      req.session.name = newUser.name
      res.redirect('/home')
    }
  })

module.exports = router;