import { ReviewPreview } from "./ReviewPreview.jsx"

export function ReviewList({ reviews, onRemoveReview }) {
    function onRemoveReview() {

    }

    if (!reviews || !reviews.length) return <div>No reviews yet</div>
    return <ul className="review-list flex">
        {
            reviews.map(review => <li key={review.fullName}>
                <ReviewPreview review={review} />
                <button className="remove-btn" onClick={() => onRemoveReview()}>X</button>
            </li>)
        }
    </ul>
}