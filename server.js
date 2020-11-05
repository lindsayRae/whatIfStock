const express = require('express')
const app = express()
const port = process.env.PORT || 1234
const passport = require('./auth')
const cors = require('cors');
const path = require('path')

const session = require('express-session')
const routes = require('./routes')

app.use(express.json());
app.use(cors());

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

app.get('/api', isUserLoggedIn, (req, res) => {
  res.json([
      {id:1, title: 'Here is data from server.js'}
    ])
})

app.use('/api', routes)

if(process.env.NODE_ENV === 'production'){
  // Serve the static files from the React app
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handles any requests that don't match the ones above
  app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });

}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})