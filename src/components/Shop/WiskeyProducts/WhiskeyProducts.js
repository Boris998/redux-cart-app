import classes from './WhiskeyProducts.module.css';
import {useEffect, useState} from "react";
import WhiskeyProductItem from "./WhiskeyProductItem";

const url = 'https://react-http-6fb98-default-rtdb.firebaseio.com/whiskey.json';

const WhiskeyProducts = () => {

    const [whiskey, setWhiskey] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(false);

    useEffect(() => {
        const fetchWhiskey = async () => {
            const res = await fetch(url);

            if (!res.ok) {
                throw new Error('sth went wrong');
            }

            const resData = await res.json();

            const loadedWhiskey=[];

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
        }
        catch (e){
            setIsLoading(false);
            setHttpError(e.message);
        }
    }, []);

    const whiskeys = whiskey.map(whiskey =>
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
            <ul>
                {whiskeys}
            </ul>
        </section>
    );
};

export default WhiskeyProducts;
