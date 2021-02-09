import API from '../utils/Api';
import {useState} from 'react';

function Search() {
    const [books, setBooks] = useState({items: []});
    const [searchStrings, setsearchStrings] = useState({});

    function handleInputChange(event) {
        const { name, value } = event.target;
        setsearchStrings(value);
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (searchStrings) {
            API.getBooks(searchStrings)
                .then(res => {
                    setBooks(res.data)
                })
                .catch(err => console.log(err));
        }
    };


    return (
        <main>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <h1 class="navbar-brand">Search Here For Books</h1>
                    <form class="d-flex">
                        <input onChange={handleInputChange}
                            name='searchStrings'
                            placeholder="Search Books" class="form-control me-2" type="search" aria-label="Search"></input>
                        <button class="btn btn-outline-success" onClick={handleFormSubmit} type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <section className='row'>
               {books.items.map(
                   book=> {
                       return (<div className='card' key={book.id}>
                           <h3>{book.volumeInfo.title}</h3>
                           <image src={book.volumeInfo.imageLinks.thumbnail}></image>
                           <h5>{book.volumeInfo.authors}</h5>
                           <p>{book.volumeInfo.description}</p>
                       </div>)
                   }
               )}
            </section>
        </main>


    )
};

export default Search;