const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const { User } = require('../models')


router.post('/', async (req, res) => {
    const user = await User.findOne({
      where: {
        username: req.body.username
      }
    })
    if (user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
      req.session.userId = user.id
      req.session.name = user.name
      res.redirect('/home')
    } else {
      res.render('login.ejs', { error: ['Sorry, login details are incorrect'] })
    }
  })

module.exports = router;