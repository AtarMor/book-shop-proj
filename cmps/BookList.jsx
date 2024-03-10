import { BookPreview } from "./BookPreview.jsx"

export function BookList({books, onSelectBook}) {

    if (!books || !books.length) return <div>No books to show</div>
    return <ul className="book-list">
        {
            books.map(book => <li key={book.id}>
                <BookPreview book={book} />
                <div className="book-actions">
					<button onClick={() => { onSelectBook(book) }}>Select book</button>
				</div>
            </li>)
        }
    </ul>
}