const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    req.session.userId = undefined
    req.session.name = undefined
    res.redirect('/')
  })


module.exports = router;