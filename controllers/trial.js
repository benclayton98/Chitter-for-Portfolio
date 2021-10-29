const express = require('express');
const router = express.Router();
const { Chitter } = require('../models')



router.get('/', async (req, res) => {
    const chitter = await Chitter.findAll({
      order: [['id', 'DESC']],
    include: {
      all: true
    }
    })
    res.render('trialuser.ejs', {
      chitter: chitter,
      name: req.session.name
    })
  })


module.exports = router;