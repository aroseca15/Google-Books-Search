const Books = require('../models/books');
const router = require('express').Router();

const { model } = require("mongoose");


// FindAll:
router.get('/api/books', async function (req, res) {
    let result = await Books.find(req.query);
    res.json(result);
})
// FindById:
router.get('/api/books/:id', function (req, res) {
    Books.findById(req.params.id);
})
// Create:
router.post('/api/books', async function (req, res) {
    let result = await Books.create(
        req.body
    )
    res.json(result);
})
// Update:
router.put('/api/books/:id', function (req, res) {
    Books.findByIdUpdate(req.params.id)
})
// Delete:
router.delete('/api/books/:id', async function (req, res) {
    let result = await Books.findByIdAndDelete(req.params.id)
    res.json({message: 'success'});
})
module.exports = router;