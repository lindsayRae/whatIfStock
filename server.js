const express = require('express')
const app = express()
const port = process.env.PORT || 1234
const passport = require('./auth')

const session = require('express-session')
const routes = require('./routes')

app.use(express.json());

//app.use('/', routes)

app.use(session({
  secret: process.env.SESSION_SECRET || 'the secret',
  resave: true,
  saveUninitialized: false,
  cookie: { secure: process.env.NODE_ENV === 'production' },

}));

app.use(passport.initialize())
app.use(passport.session())

const isUserLoggedIn = (req, res, next) => {
  if(req.user){
    return next()
  }

  return res.status(403).send("You are not authorized")
}

app.get('/', isUserLoggedIn, (req, res) => {
  res.json([
      {id:1, title: 'Here is data from server.js'}
    ])
})

app.use('/api', routes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})