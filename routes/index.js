const express = require('express')
const router = express.Router()

const stocks = require('./stocks')
const auth = require('./auth')

module.exports = router

router.use('/stocks', stocks)
router.use('/auth', auth)
