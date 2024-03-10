export function BookPreview({ book }) {
	return <article className="book-preview">
		<h2>{book.title}</h2>
        <h3>{book.listPrice.amount + book.listPrice.currencyCode +
        (book.listPrice.isOnSale ? book.listPrice.isOnSale : '')}</h3>
		<img src={book.thumbnail} />
	</article>
}