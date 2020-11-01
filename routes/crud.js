const express = require('express')
const router = express.Router()

module.exports =  router

router.get('/', (req, res) => {
    res.send('from get')
})

router.post('/', (req, res) => {
    res.send('from post')
})

router.get('/:id', (req, res) => {
    res.send('from get by id')
})

router.delete('/:id', (req, res) => {
    res.send('from delete')
})

router.put('/:id', (req, res) => {
    res.send('from put')
})