const express = require('express')
const router = express.Router()

const db = require('../db')

module.exports =  router

router.get('/', async (req, res) => {
    const result = await db.select().table('stocks')
    res.send(result)
})

router.get('/:id', async (req, res) => {
    const {id} = req.params
    const result = await db('stocks').where({id})
    res.send(result)
})

router.post('/', async (req, res) => {
    
    const {name, price, numberOfShares} = req.body

    if(!name) {
        res.status(400).send("Please add a name.")
    }
    if(!price) {
        res.status(400).send("Please add a price.")
    }
    if(!numberOfShares) {
        res.status(400).send("Please add a number of shares.")
    }
    const result = await db('stocks').insert({name, price, numberOfShares}).returning('*')
    res.send(result)
})

router.put('/:id', async (req, res) => {

    const {id} = req.params
    const {name, price, numberOfShares} = req.body

    let toUpdate = {}
    if(!name && !price && !numberOfShares){
        return res.status(400).send("Please enter a name, price and number of shares")
    }

    if(name){
        toUpdate.name = name
    }

    if(price){
        toUpdate.price = price
    }

    if(numberOfShares){
        toUpdate.numberOfShares = numberOfShares
    }

    
    const updated = await db('stocks')
        .where('id', '=', id)
        .update(toUpdate)
        .returning('*')

    res.send(updated)
})

router.delete('/:id', async (req, res) => {
    const {id} = req.params

    const result = await db('stocks')
        .where('id', '=', id)
        .del()
        .returning('*')

    res.send(result)
})