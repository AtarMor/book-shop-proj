import { bookService } from "../services/book.service.js"
import { showSuccessMsg } from "../services/event-bus.service.js"

const { useNavigate, useParams } = ReactRouter

export function AddReview() {
    const { bookId } = useParams()

    function onAddReview(ev) {
        ev.preventDefault()
        const fullName = ev.target.fullName.value
        const rating = ev.target.rating.value
        const readAt = ev.target.readAt.value
        let review = {fullName, rating, readAt}
        bookService.addReview(bookId, review)
        showSuccessMsg('Your review was received, thank you')
    }

    return <section className="book-review">
        <form onSubmit={onAddReview} >
            <label htmlFor="fullName">Full name:</label>
            <input
                type="text"
                id="fullName"
                placeholder="Enter full name"

                name="fullName"
            />

            <label htmlFor="rating">Rating:</label>
            <select
                id="rating"
                name="rating"
            >
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>


            <label htmlFor="readAt">Start date:</label>
            <input
                type="date"
                id="readAt"
                name="readAt"
            />
            <button>Save</button>
        </form>
    </section>
}