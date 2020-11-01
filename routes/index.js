const express = require('express')
const router = express.Router()

const stocks = require('./stocks')

module.exports = router

router.use('/stocks', stocks)
