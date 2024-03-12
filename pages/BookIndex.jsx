const { useState, useEffect } = React
const { Link } = ReactRouterDOM


import { BookList } from "../cmps/BookList.jsx"
import { BookFilter } from "../cmps/BookFilter.jsx"
import { BookAdd } from "../cmps/BookAdd.jsx"

import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js"
import { bookService } from "../services/book.service.js"

export function BookIndex() {
    const [books, setBooks] = useState(null)
    const [filterBy, setFilterBy] = useState(bookService.getFilterBy())
    const [userMsg, setUserMsg] = useState('')

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

    function onRemoveBook(bookId) {
        bookService.remove(bookId)
            .then(() => {
                setBooks((prevBooks) => prevBooks.filter(book => book.id !== bookId))
                showSuccessMsg(`Book removed successfully (${bookId})`)
            })
            .catch((err) => {
                console.log('Had issues removing car', err)
                showErrorMsg(`Car removed successfully (${bookId})`)
            })
    }

    if (!books) return <div>loading...</div>
    return <section className="book-index">
        <BookFilter
            onSetFilter={onSetFilter}
            filterBy={filterBy} />
        <Link to="/book/edit"><button>Add a book</button></Link>
        <BookAdd />
        <BookList
            books={books}
            onRemoveBook={onRemoveBook}
        />
    </section>

}