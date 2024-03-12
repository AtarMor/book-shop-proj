export function GoogleBookList({ books, onAddGoogleBook }) {
    console.log('books:', books)
    if(!books) return <div>No books found</div>
    return <ul className="google-books-list clean-list">
        {
            books.map(book => 
                <li className="flex" key={book.id}>
                    <h5>{book.title}</h5>
                    <button onClick={() => onAddGoogleBook(book)}>+</button>
                </li>
            )
        }
    </ul>
}