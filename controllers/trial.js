const express = require('express');
const router = express.Router();
const { Chitter } = require('../models')



router.get('/', async (req, res) => {
    const chitter = await Chitter.findAll({
      order: [['id', 'DESC']]
    })
    res.render('trialuser.ejs', {
      chitter: chitter
    })
  })


module.exports = router;