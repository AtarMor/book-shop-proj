const { useState, useEffect } = React

import { bookService } from "../services/book.service.js"
import { BookList } from "../cmps/BookList.jsx"
import { BookDetails } from "./BookDetails.jsx"
import { BookFilter } from "../cmps/BookFilter.jsx"

export function BookIndex() {
    const [books, setBooks] = useState(null)
    const [selectedBook, setSelectedBook] = useState(null)
    const [filterBy, setFilterBy] = useState(bookService.getFilterBy())

    useEffect(() => {
        loadBooks()
    }, [filterBy])

    function onSetFilter(fieldsToUpdate) {
        bookService.setFilterBy({...fieldsToUpdate})
        setFilterBy(prevFilter => ({ ...prevFilter, ...fieldsToUpdate }))
    }

    function loadBooks() {
        bookService.query()
            .then((books) => {
                console.log('books:', books)
                setBooks(books)
            })
            .catch(err => {
                console.log('Had issues loading books', err)
            })
    }

    function onSelectBook(book) {
        setSelectedBook(book)
    }

    return <section className="book-index">
        {
            !selectedBook && <React.Fragment>
                <BookFilter
                    onSetFilter={onSetFilter}
                    filterBy={filterBy} />
                <h1>Our Books</h1>
                <BookList
                    books={books}
                    onSelectBook={onSelectBook}
                />
            </React.Fragment>
        }
        {
            selectedBook && <BookDetails
                book={selectedBook}
                onGoBack={() => onSelectBook(null)}
            />
        }

    </section>

}