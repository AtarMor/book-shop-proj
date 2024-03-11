export function ReviewPreview({review}) {
    return <article className="review-preview">
        <h4>Name: {review.fullName}</h4>
        <h4>Rating: {review.rating}</h4>
        <h4>Reading date: {review.readAt}</h4>
	</article>
}