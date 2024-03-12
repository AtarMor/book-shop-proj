const { useNavigate, useParams } = ReactRouter
const { useState } = React

import { DynamicRate } from "./DynamicRate.jsx"

import { bookService } from "../services/book.service.js"
import { showSuccessMsg } from "../services/event-bus.service.js"

export function AddReview() {
    const { bookId } = useParams()
    const [rateBy, setRateBy] = useState('select')


    function onAddReview(ev) {
        ev.preventDefault()
        const fullName = ev.target.fullName.value
        const rating = ev.target.rating.value
        const readAt = ev.target.readAt.value
        let review = { fullName, rating, readAt }
        bookService.addReview(bookId, review)
        showSuccessMsg('Your review was received, thank you')
    }

    function onSelectRateBy({ target }) {
        setRateBy(target.value)
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

            <label htmlFor="rateBy">Rate by:</label>
            <select onChange={onSelectRateBy}
                id="rateBy"
                name="rateBy"
            >
                <option>select</option>
                <option>textbox</option>
            </select>

            <DynamicRate rateBy={rateBy} />

            <label htmlFor="readAt">Reading date:</label>
            <input
                type="date"
                id="readAt"
                name="readAt"
            />
            <button>Save</button>
        </form>
    </section>
}

