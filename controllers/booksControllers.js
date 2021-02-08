const db = require('../models/books');
const router = require('express').Router();

const { model } = require("mongoose");


// FindAll:
router.get('/api/books', function(req, res) {
db.Books.findAll(req.query);
})
// FindById:
router.get('/api/books/:id', function(req, res) {
    db.Books.findById(req.params.id);
})
// Create:
router.post('/api/books', function(req, res) {
    db.Books.create({

    })
})
// Update:
router.put('/api/books/:id', function(req, res) {
    db.Books.findByIdUpdate(req.params.id)
})
// Delete:
router.delete('/api/books/:id', function(req, res) {
    db.Books.findByIdDelete(req.params.id)
})
module.exports = router;