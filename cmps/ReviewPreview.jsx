export function ReviewPreview({review}) {
    return <article className="review-preview">
        <h4 className="full-name">Name: {review.fullName}</h4>
        <h4 className="rating">Rating: {review.rating}</h4>
        <h4 className="read-at">Read At: {review.readAt}</h4>
	</article>
}