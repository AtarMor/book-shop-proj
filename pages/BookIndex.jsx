const { useState, useEffect } = React
const { Link } = ReactRouterDOM


import { BookList } from "../cmps/BookList.jsx"
import { BookFilter } from "../cmps/BookFilter.jsx"

import { bookService } from "../services/book.service.js"

export function BookIndex() {
    const [books, setBooks] = useState(null)
    const [filterBy, setFilterBy] = useState(bookService.getFilterBy())

    useEffect(() => {
        loadBooks()
    }, [filterBy])

    function onSetFilter(fieldsToUpdate) {
        bookService.setFilterBy({ ...fieldsToUpdate })
        setFilterBy(prevFilter => ({ ...prevFilter, ...fieldsToUpdate }))
    }

    function loadBooks() {
        bookService.query()
            .then((books) => {
                setBooks(books)
            })
            .catch(err => {
                console.log('Had issues loading books', err)
            })
    }

    if (!books) return <div>loading...</div>
    return <section className="book-index">
        <BookFilter
            onSetFilter={onSetFilter}
            filterBy={filterBy} />
        <Link to="/book/edit"><button>Add a book</button></Link>
        <BookList
            books={books}
        />
    </section>

}