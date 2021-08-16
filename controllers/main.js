const express = require('express');
const router = express.Router();
const { Chitter } = require('../models')

const authenticator = (req, res, next) => {
  if (req.session.userId === undefined) {
    res.redirect('/')
  } else {
    next()
  }
}

router.get('/', authenticator, async (req, res) => {
  const chitter = await Chitter.findAll({
    order: [['id', 'DESC']],
    include: {
      all: true
    }
  })

  res.render('home.ejs', {
    chitter: chitter,
    name: req.session.name
  })
})

router.post('/', async (req, res) => {
  await Chitter.create({
    UserId: req.session.userId,
    chitter: req.body.chitter
  })
  res.redirect('/home')
})

router.delete('/:id', async (req, res) => {
  await Chitter.destroy({
    where: {
      id: req.params.id
    }
  })
  res.redirect('/home')
})

module.exports = router;