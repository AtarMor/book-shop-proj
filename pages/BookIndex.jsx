const { useState, useEffect } = React

import { bookService } from "../services/book.service.js"
import { BookList } from "../cmps/BookList.jsx"
import { BookDetails } from "./BookDetails.jsx"

export function BookIndex() {
    const [books, setBooks] = useState(null)
    const [selectedBook, setSelectedBook] = useState(null)


    useEffect(() => {
        loadBooks()
    }, [])

    function loadBooks() {
        bookService.query()
            .then((books) => {
                setBooks(books)
                console.log('books:', books)
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
            !selectedBook && <BookList
                books={books}
                onSelectBook={onSelectBook}
            />
        }
        {
            selectedBook && <BookDetails
                book={selectedBook}
                onGoBack={() => onSelectBook(null)}
            />
        }

    </section>

}