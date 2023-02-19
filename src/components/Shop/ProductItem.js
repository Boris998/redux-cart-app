import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import {useDispatch} from "react-redux";
import {cartActions} from "../../store/cart-slice";

const ProductItem = (props) => {
    /*    let cartTotalQuantity = useSelector(state => state.cart.totalQuantity);
        const cartItems = useSelector(state => state.cart.items);*/
    const dispatch = useDispatch();

    const {title, price, id} = props;

    const addToCartHandler = () => {

        //the obj is passed as a payload
        dispatch(cartActions.addItemToCart({id, title, price}));
    }

    return (
        <li className={classes.item}>
            <Card>
                <header>
                    <h3>{title}</h3>
                    <div className={classes.price}>${price.toFixed(2)}</div>
                </header>
                <p><span>Dimensions: </span>{props.dimensions}</p>
                <p><span>Made By: </span>{props.madeBy}</p>
                <p><span>Box Date: </span>{props.boxDate}</p>
                <img src={props.image} alt='asd'/>
                <div className={classes.actions}>
                    <button onClick={addToCartHandler}>Add to Cart</button>
                </div>
            </Card>
        </li>
    );
};

export default ProductItem;
