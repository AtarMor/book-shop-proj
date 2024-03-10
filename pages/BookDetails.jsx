export function BookDetails({ book, onGoBack }) {

    return <section className="book-details">
        <button onClick={onGoBack}>Go back</button>
        <h1>{book.title}</h1>
        <h2>{book.listPrice.amount + book.listPrice.currencyCode +
            (book.listPrice.isOnSale ? book.listPrice.isOnSale : '')}</h2>
        <img src={book.thumbnail} />
        <p>{book.description}</p>
    </section>
}