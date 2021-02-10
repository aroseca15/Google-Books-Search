import API from '../utils/Api';
import { useState, useEffect } from 'react';


function SearchSaved() {
    // Setting our component's initial state
    const [books, setBooks] = useState([])
    const [searchStrings, setsearchStrings] = useState({});


    // Load all books and store them with setBooks
    useEffect(() => {
        loadBooks()
    }, [])

    // Loads all books and sets them to books
    function loadBooks() {
        API.getSavedBooks()
            .then(res => {
                console.log(res)
                setBooks(res.data)
            })
            .catch(err => console.log(err));
    };

    // Deletes a book from the database with a given id, then reloads books from the db
    function deleteBook(book) {
        return (event) =>
            API.deleteBook(book._id)
                .then(res => loadBooks())
                .catch(err => console.log(err));
    }
    return (
        <main>
            <section className='row'>
                {books.map(
                    book => {
                        return (<div className='card' key={book._id}>
                            <h3 className='col align-self-center'>{book.title}</h3>
                            {/* <image>{book.image}</image> */}
                            <h5 className='col align-self-center'>{book.author}</h5>
                            <p className='col align-self-end'>{book.description}</p>
                            <div>
                                {/* <button type="button" class="btn btn-dark">View</button> */}
                                <button type="button" onClick={deleteBook(book)} class="btn btn-secondary">Read Book</button>
                            </div>
                        </div>)
                    }
                )}
            </section>
        </main>


    )
};

export default SearchSaved;