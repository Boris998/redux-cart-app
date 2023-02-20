import ProductItem from './ProductItem';
import classes from './Products.module.css';
import {useEffect, useState} from "react";

const url = 'https://react-http-6fb98-default-rtdb.firebaseio.com/cigars.json';

const Products = () => {

    const [cigars, setCigars] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(false);

    useEffect(() => {
        const fetchCigars = async () => {
            const res = await fetch(url);

            if (!res.ok) {
                throw new Error('sth went wrong');
            }

            const resData = await res.json();

            const loadedCigars=[];

            for (const key in resData) {
                loadedCigars.push({
                    id: key,
                    title: resData[key].name,
                    dimensions: resData[key].dimensions,
                    strength: resData[key].strength,
                    price: resData[key].price,
                    madeBy: resData[key].madeBy,
                    image: resData[key].image,
                    boxDate: resData[key].boxDate,
                });
            }

            setCigars(loadedCigars);
            setIsLoading(false);
        }

        try {
            fetchCigars();
        }
        catch (e){
            setIsLoading(false);
            setHttpError(e.message);
        }
    }, []);

    const books = cigars.map(cigars =>
        <ProductItem
            key={cigars.id}
            id={cigars.id}
            title={cigars.title}
            price={cigars.price}
            strength={cigars.strength}
            dimensions={cigars.dimensions}
            madeBy={cigars.madeBy}
            boxDate={cigars.boxDate}
            image={cigars.image}
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
