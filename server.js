const express = require('express')
const app = express()
const port = process.env.PORT || 1234
const passport = require('./auth')
const routes = require('./routes')

app.use(express.json());

//app.use('/', routes)
app.use(passport.initialize())
app.use(passport.session())

app.get('/', (req, res) => {
  res.json([
      {id:1, title: 'Here is data from server.js'}
    ])
})

app.use('/api', routes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})