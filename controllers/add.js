const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.render('add.ejs')
  })

module.exports = router;