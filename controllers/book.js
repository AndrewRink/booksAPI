const router = require('express').Router()
const db = require('../models/index')

//GET: get all the books
router.get('/',(req,res) => {
    db.Book.find()
    .then ((books) => {
        res.status(200).json(books);
    })
    .catch(err => {
        console.log('err', err)
        res.status(400).json(err)
    })
})

//GET: get a book by ID
router.get('/:id', (req,res) => {
    const { id } = req.params
    db.Book.findById(id)
    .then ((book) => {
        res.status(200).json(book)
    })
    .catch(err => {
        console.log('err', err)
        res.status(400).json(err)
    })
})

//Post: create a book
router.post('/', (req,res) => {
    db.Book.create(req.body)
    .then ((book) => {
        res.status(200).json(book)
    })
    .catch(err => {
        console.log('err', err)
        res.status(400).json(err)
    })
})

//Put: update a book
router.put('/:id', (req,res) => {
    const { id } = req.params
    db.Book.findByIdAndUpdate(id, req.body)
    .then ((book) => {
        res.status(200).json(book)
    })
    .catch(err => {
        console.log('err', err)
        res.status(400).json(err)
    })
})

//Delete: Delete a Book
router.delete('/:id', (req, res) => {
    const { id } = req.params
    db.Book.findByIdAndDelete(id)
    .then (() => {
        res.status(200).json()
    })
    .catch(err => {
        console.log('err', err)
        res.status(400).json(err)
    })
})


module.exports = router