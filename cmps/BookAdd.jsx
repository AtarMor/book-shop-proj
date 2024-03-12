const { useState, useEffect } = React

import { GoogleBookList } from "./GoogleBookList.jsx"

import { bookService } from "../services/book.service.js"
import { googleBookService } from "../services/google-book.service.js"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js"


export function BookAdd({onAddGoogleBook}) {
    const [searchedBooks, setSearchedBooks] = useState([])

    function onSearchGoogleBook(ev) {
        ev.preventDefault()
        const txt = ev.target.txt.value
        setSearchedBooks(googleBookService.query(txt))
    }

    return <section className="book-add">
        <form onSubmit={onSearchGoogleBook} >
            <label htmlFor="txt">Add a book: </label>
            <input
                type="text"
                id="txt"
                placeholder="Enter a book title"

                name="txt"
            />
            <button>Search</button>
        </form>

        <GoogleBookList
            books={searchedBooks}
            onAddGoogleBook={onAddGoogleBook}
        />

    </section>
}