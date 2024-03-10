export function BookPreview({ book }) {
	return <article className="book-preview">
		<h2>{book.title}</h2>
		<h4>{book.listPrice.amount + ' ' + book.listPrice.currencyCode + 
		(book.listPrice.isOnSale ? ' On Sale' : '')}</h4>
		<img src={book.thumbnail} />
		<div>{book.authors.map(author => {
			return <h4 key={author}>{author}</h4>
		})}</div>
	</article>
}