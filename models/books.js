const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema(
    {
        title: {
            type: String
        },
        authors: {
            type: String
        },
        description: {
            type: String
            
        }
    }
);

const Books = mongoose.model('Books', bookSchema);

module.exports = Books;

