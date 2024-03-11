const { Link } = ReactRouterDOM

import { BookPreview } from "./BookPreview.jsx"


export function BookList({ books }) {

    if (!books || !books.length) return <div>No books to show</div>
    return <ul className="book-list flex wrap">
        {
            books.map(book => <li key={book.id}>
                <Link to={`/book/${book.id}`}>
                    <BookPreview book={book} />
                </Link>
                <div className="book-actions flex justify-between">
                    <button className="remove-btn">X</button>
                    <Link to={`/book/${book.id}`}><button>See details</button></Link>
                </div>
            </li>)
        }
    </ul>
}