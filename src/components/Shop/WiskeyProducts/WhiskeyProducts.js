import classes from './WhiskeyProducts.module.css';
import {useEffect, useState} from "react";
import WhiskeyProductItem from "./WhiskeyProductItem";

const url = 'https://react-http-6fb98-default-rtdb.firebaseio.com/whiskey.json';

const WhiskeyProducts = () => {

    const [whiskey, setWhiskey] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(false);
    const [sortOrder, setSortOrder] = useState('');


    useEffect(() => {
        const fetchWhiskey = async () => {
            const res = await fetch(url);

            if (!res.ok) {
                throw new Error('sth went wrong');
            }

            const resData = await res.json();

            const loadedWhiskey = [];

            for (const key in resData) {
                loadedWhiskey.push({
                    id: key,
                    title: resData[key].name,
                    description: resData[key].description,
                    price: resData[key].price,
                    alcohol: resData[key].alcohol,
                    image: resData[key].image,
                });
            }

            setWhiskey(loadedWhiskey);
            setIsLoading(false);
        }

        try {
            fetchWhiskey();
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
        if (sortOrder === 'popularity') setWhiskey(whiskey);
        else if (sortOrder === 'low-high') setWhiskey(whiskey.sort((a, b) => b.price - a.price));
        else if (sortOrder === 'high-low') setWhiskey(whiskey.sort((a, b) => a.price - b.price));
    }, [sortOrder, whiskey]);


    const whiskeyList = whiskey.map(whiskey =>
                <WhiskeyProductItem
                    key={whiskey.id}
                    id={whiskey.id}
                    title={whiskey.title}
                    price={whiskey.price}
                    alcohol={whiskey.alcohol}
                    description={whiskey.description}
                    image={whiskey.image}
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
                {isLoading || whiskeyList}
        </section>
    );
};

export default WhiskeyProducts;
