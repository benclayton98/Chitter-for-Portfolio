require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000   
const { User, Chitter } = require('./models');
const methodOverride = require('method-override')
const bcrypt = require('bcryptjs')
const session = require('express-session')

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(express.static("public"));
app.use(session({
    secret: 'bclayts',
    resave: false,
    saveUninitialized: true,
  }))

const authenticator = (req, res, next) => {
  if (req.session.userId === undefined) {
    res.redirect('/')
  } else {
    next()
  }
}

app.get('/', (req, res) => {
    res.render('login.ejs',{
        error: ''
    })
})

app.get('/home', authenticator, async (req, res) => {
    const chitter = await Chitter.findAll({
        order: [['id', 'DESC']],
        include:{
          all: true
        }
    })

    res.render('home.ejs', {
        chitter: chitter,
        name: req.session.name
    })
})

app.post('/home', async (req, res) => {
    await Chitter.create({
        UserId: req.session.userId,
        chitter: req.body.chitter, 
        })
    res.redirect('/home')
})

app.delete('/home/:id', async (req, res) => {
    await Chitter.destroy({
        where: {
            id: req.params.id
        }
    })
    res.redirect('/home')
})

app.get('/add', async (req, res) => {
    res.render('add.ejs')
})

app.get('/signup/new', async (req, res) => {
    res.render('registration/registration.ejs',{
      error: ''
    })
})

app.post('/signup', async (req, res) => {
  if (req.body.email === req.body.username) {
    res.render('registration/registration.ejs', { error: ["Your email address and username need to be unique"] })
  }
  else {
    let newUser = await User.create({
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


app.post('/login', async (req, res) => {

    const user = await User.findOne({
        where: {
        username: req.body.username
      }})
    
      if (user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
        req.session.userId = user.id
        req.session.name = user.name
        res.redirect('/home')
      }
      else {
        res.render('login.ejs', { error: ["Sorry, login details are incorrect"] })
      }
})

app.post('/logout', async (req, res) => {
        req.session.userId = undefined
        req.session.name = undefined
        res.redirect('/')
        
})

app.get('/trial', async (req, res) => {
    const chitter = await Chitter.findAll({
      order: [['id', 'DESC']]
  })
  res.render('trialuser.ejs', {
      chitter: chitter,
  })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })