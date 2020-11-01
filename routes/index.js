const express = require('express')
const router = express.Router()

const crud = require('./crud')
const stocks = require('./stocks')

module.exports = router

router.use('/crud', crud)
router.use('/stocks', stocks)
