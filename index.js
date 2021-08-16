require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const methodOverride = require('method-override')
const session = require('express-session')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(session({
  secret: 'bclayts',
  resave: false,
  saveUninitialized: true
}))

const homeRouter = require('./controllers/home.js')
const mainRouter = require('./controllers/main.js')
const addRouter = require('./controllers/add.js')
const signupRouter = require('./controllers/signup.js')
const loginRouter = require('./controllers/login.js')
const logoutRouter = require('./controllers/logout.js')
const trialRouter = require('./controllers/trial.js')

app.use('/', homeRouter)
app.use('/home', mainRouter)
app.use('/add', addRouter)
app.use('/signup', signupRouter)
app.use('/login', loginRouter)
app.use('/logout', logoutRouter)
app.use('/trial', trialRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
