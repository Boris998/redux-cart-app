import CigarProductItem from './CigarProductItem';
import classes from './CigarProducts.module.css';
import {useEffect, useState} from "react";

const url = 'https://react-http-6fb98-default-rtdb.firebaseio.com/cigars.json';

const CigarProducts = () => {

    const [cigars, setCigars] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(false);
    const [sortOrder, setSortOrder] = useState('');


    useEffect(() => {
        const fetchCigars = async () => {
            const res = await fetch(url);

            if (!res.ok) {
                throw new Error('sth went wrong');
            }

            const resData = await res.json();

            const loadedCigars = [];

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
        } catch (e) {
            setIsLoading(false);
            setHttpError(e.message);
        }
    }, []);


    const handleSelect = (e) => {
        e.preventDefault();
        setSortOrder(e.target.value);
    }

    useEffect(() => {
        if (sortOrder === 'popularity') setCigars(cigars);
        else if (sortOrder === 'low-high') setCigars(cigars.sort((a, b) => b.price - a.price));
        else if (sortOrder === 'high-low')  setCigars(cigars.sort((a, b) => a.price - b.price));
    }, [sortOrder, cigars]);


    const cigarList = cigars.map(cigar =>
        <CigarProductItem
            key={cigar.id}
            id={cigar.id}
            title={cigar.title}
            price={cigar.price}
            strength={cigar.strength}
            dimensions={cigar.dimensions}
            madeBy={cigar.madeBy}
            boxDate={cigar.boxDate}
            image={cigar.image}
        />
    );



    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <select value={sortOrder} onChange={handleSelect}>
                <option value="popularity">Popularity</option>
                <option value="low-high">Sort price (low-high)</option>
                <option value="high-low">Sort price (high-low)</option>
            </select>
            <ul>
                {isLoading || cigarList}
            </ul>
        </section>
    );
};

export default CigarProducts;
