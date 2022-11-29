import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
    {id: 'p1', price: 6, title: 'My first book', description: 'alooo bree'},
    {id: 'p2', price: 5, title: 'My second book', description: 'alooo breealooo breealooo bree'},
]

const Products = () => {
    const books = DUMMY_PRODUCTS.map(book =>
        <ProductItem
            key={book.id}
            id={book.id}
            title={book.title}
            price={book.price}
            description={book.description}
        />
    );

    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {books}
            </ul>
        </section>
    );
};

export default Products;
