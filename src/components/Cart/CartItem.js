import classes from './CartItem.module.css';
import {useDispatch} from "react-redux";
import {cartActions} from "../../store/cart-slice";
import {Grid} from "@mui/material";

const CartItem = (props) => {
    const dispatch = useDispatch();
    const {title, quantity, total, price, id} = props.item;

    //this action wants the id for a payload
    const addItemHandler = () => {
        dispatch(cartActions.addItemToCart({id, title, price}));
    };

    //this action wants the id for a payload
    const removeItemHandler = () => {
        dispatch(cartActions.removeItemFromCart(id));
    };

    return (
        <Grid container sx={{background: '#575757',
            padding: '1.5vh',
            borderBottom: '10px solid rgba(255,110,110,0.6)',
            borderRadius: '25px',
            marginBottom: '10px'
        }}>
            <Grid container>
                <Grid item xs={8} component={'h2'}>{title}</Grid>
                <Grid item xs={4} component={'h2'} align={'right'}>
                    ${total.toFixed(2)}{' '}
                    <span style={{fontWeight: 'normal', fontSize: '15px'}}>(${price.toFixed(2)}/item)</span>
                </Grid>
            </Grid>
            <Grid container spacing={5}>
                <Grid item xs={6} component={'h1'} align={'left'}>
                    <span style={{padding: '4px 6px' ,background: 'rgba(255,110,110,0.7)', borderRadius: '35px'}}>x {quantity}</span>
                </Grid>
                <Grid item xs={6} align={'left'} className={classes.actions}>
                    <button onClick={removeItemHandler}>-</button>
                    <button onClick={addItemHandler}>+</button>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default CartItem;
