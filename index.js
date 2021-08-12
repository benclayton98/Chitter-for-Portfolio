require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000   
const { models, User, Chitter } = require('./models');
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

app.get('/', (req, res) => {
    res.render('login.ejs')
})

app.get('/login', (req, res) => {
    
    res.render('home.ejs')
})

app.get('/home', async (req, res) => {
    const chitter = await Chitter.findAll({
        order: [['id', 'DESC']]
    })
    res.render('home.ejs', {
        chitter: chitter,
        name: req.session.name
    })
})

app.post('/home', async (req, res) => {
    await Chitter.create({chitter: req.body.chitter, username: req.body.username})
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
    res.render('registration/registration.ejs')
})

app.post('/signup', async (req, res) => {
    let newUser = await User.create({
        email: req.body.email,
        username: req.body.username,
        name: req.body.fullName,
        passwordHash: bcrypt.hashSync(req.body.password)
      })
      req.session.userId = newUser.id
      req.session.name = newUser.name
 
      res.redirect('/home')
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })