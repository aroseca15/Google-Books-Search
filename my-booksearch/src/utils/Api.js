import axios from "axios";

export default {
    // Gets all books
    getBooks: function (searchStrings) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchStrings);
    },
    // Gets the book with the given id
    getBook: function (id) {
        return axios.get("/api/books/" + id);
    },

    // Gets books saved in Mongo
    getSavedBooks: function () {
        return axios.get("/api/books");
    },
    // Deletes the book with the given id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },
    // Saves a book to the database
    saveBook: function (bookData) {
        return axios.post("api/books", bookData);
    }
};
