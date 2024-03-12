const { useState, useEffect } = React
const { useParams, useNavigate } = ReactRouter
const { Link } = ReactRouterDOM

import { AddReview } from "../cmps/AddReview.jsx"
import { LongTxt } from "../cmps/LongTxt.jsx"
import { ReviewList } from "../cmps/ReviewList.jsx"
import { bookService } from "../services/book.service.js"

export function BookDetails() {
    const [book, setBook] = useState(null)
    const params = useParams()
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        loadBook()
    }, [params.bookId])

    function loadBook() {
        setIsLoading(true)
        bookService.get(params.bookId)
            .then(book => setBook(book))
            .catch(err => {
                console.log('Had issues loading book', err)
                navigate('/book')
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    function readingLevel() {
        if (book.pageCount > 500) return 'Serious Reading'
        if (book.pageCount > 200) return 'Descent Reading'
        if (book.pageCount < 100) return 'Light Reading'
        return ''
    }

    function publishDate() {
        const date = new Date
        if (date.getFullYear() - book.publishedDate > 10) return 'Vintage'
        if (date.getFullYear() - book.publishedDate < 1) return 'New'
        return ''
    }

    function priceInColor() {
        if (book.listPrice.amount > 150) return 'red'
        if (book.listPrice.amount < 20) return 'green'
        return ''
    }

    if (isLoading) return <div>Loading details...</div>
    return <section className="book-details">
        <h1 className="book-title">{book.title}</h1>
        <h2 className="book-subtitle">{book.subtitle}</h2>
        <div className="book-author">Author: {book.authors.map(author =>
            <h4 className="author-name" key={author}>{author}</h4>
        )}
        </div>

        <img src={book.thumbnail} />

        <h3 className={'price ' + priceInColor()}>Price: {book.listPrice.amount + ' ' + book.listPrice.currencyCode}</h3>
        <h3 className="on-sale">{(book.listPrice.isOnSale ? ' On Sale!' : '')}</h3>

        <LongTxt txt={book.description} length={30} />

        <div className="more-details">
            <h3>More Details</h3>
            <p className="publish-date">Publish date: {book.publishedDate}
                <span className="new-vintage"> {publishDate()}</span>
            </p>
            {/* <h4 className="new-vintage">{publishDate()}</h4> */}
            <p className="page-count">Page count: {book.pageCount} {readingLevel()}</p>
            <p className="lang">Language: {book.language}</p>
        </div>

        <div className="reviews">
            <h3>Reviews</h3>
            <ReviewList
                reviews={book.reviews}
            />
        </div>

        <div className="add-review">
            <h4>Add a Review</h4>
            <AddReview
            // onAddReview={onAddReview}
            // onRemoveReview={onRemoveReview}
            />
        </div>

        <div className="actions flex justify-between">
            <Link to={`/book/${book.prevBookId}`}><button>Prev</button></Link>
            <Link to={`/book/Edit/${book.id}`}><button>Edit book</button></Link>
            <Link to={`/book/${book.nextBookId}`}><button>Next</button></Link>
        </div>
        {/* <Link to="/book"><button>Go back</button></Link> */}
    </section>
}