import { BookPreview } from "./BookPreview.jsx"

export function BookList({books, onSelectBook}) {

    if (!books || !books.length) return <div>No books to show</div>
    return <ul className="book-list flex wrap">
        {
            books.map(book => <li key={book.id}>
                <BookPreview book={book} />
                <div className="book-actions flex justify-between">
					<button className="show-details-btn" onClick={() => { onSelectBook(book) }}>Select book</button>
					<button className="remove-btn">X</button>
				</div>
            </li>)
        }
    </ul>
}