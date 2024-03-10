import { bookService } from "../services/book.service.js"

export function BookIndex(){
    function test() {
        bookService.getEmptyBook()
    }
    return <h1>Book Index</h1>

}