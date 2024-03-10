import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const BOOK_KEY = 'bookDB'
// var gFilterBy = { title: '', price: 0 }
_createBooks()

export const bookService = {
    query,
    get,
    remove,
    save,
    getNextBookId,
    // getFilterBy,
    // setFilterBy
}

/// for debug only///
window.bs = bookService

function query() {
    return storageService.query(BOOK_KEY)
        .then(books => {
            // if (gFilterBy.txt) {
            //     const regex = new RegExp(gFilterBy.txt, 'i')
            //     books = books.filter(book => regex.test(book.vendor))
            // }
            // if (gFilterBy.price) {
            //     books = books.filter(book => book.price >= gFilterBy.price)
            // }
            return books
        })
}

function get(bookId) {
    return storageService.get(BOOK_KEY, bookId)
}

function remove(bookId) {
    return storageService.remove(BOOK_KEY, bookId)
}

function save(book) {
    if (book.id) {
        return storageService.put(BOOK_KEY, book)
    } else {
        return storageService.post(BOOK_KEY, book)
    }
}

function getEmptyBook(title = '', price = 0) {
    return { id: '', title, price }
}

// function getFilterBy() {
//     return { ...gFilterBy }
// }

// function setFilterBy(filterBy = {}) {
//     if (filterBy.txt !== undefined) gFilterBy.txt = filterBy.txt
//     if (filterBy.price !== undefined) gFilterBy.price = filterBy.price
//     return gFilterBy
// }

function getNextBookId(bookId) {
    return storageService.query(BOOK_KEY)
        .then(books => {
            var idx = books.findIndex(book => book.id === bookId)
            if (idx === books.length - 1) idx = -1
            return books[idx + 1].id
        })
}

function _createBooks() {
    let books = utilService.loadFromStorage(BOOK_KEY)
    if (!books || !books.length) {
        books = []
        books.push(_createBook('Harry Potter', 100))
        books.push(_createBook('Harry Potter2', 120))
        books.push(_createBook('Harry Potter3', 110))
        utilService.saveToStorage(BOOK_KEY, books)
    }
}

function _createBook(title, amount, currencyCode = 'EUR', isOnSale = false) {
    return {
        id: utilService.makeId(),
        title,
        description: utilService.makeLorem(20),
        thumbnail: 'http://coding-academy.org/books-photos/20.jpg',
        listPrice: {
            amount,
            currencyCode,
            isOnSale
        }
    }
}