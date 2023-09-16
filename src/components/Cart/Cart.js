import CartItem from './CartItem';
import {useSelector} from "react-redux";
import {Box, Grid} from "@mui/material";
import {Fragment, useState} from "react";
import classes from './CartButton.module.css';
import Checkout from "./Checkout";
import {submitOrderHandler} from "../../store/cart-actions";

const Cart = () => {
    const [isCheckout, setIsCheckout] = useState(false);

    const cartItems = useSelector(state => state.cart.items);
    const totalCartAmount = useSelector(state => state.cart.totalAmount);
    const hasItems = cartItems.length > 0;

    const orderHandler = () => {
        setIsCheckout(true);
    }

    const items = cartItems.map(item =>
        <Grid item xs={12} key={item.id} sx={{listStyleType: 'none',}}>
            <CartItem
                key={item.id}
                item={{
                    id: item.id,
                    title: item.title,
                    quantity: item.quantity,
                    total: item.totalPrice,
                    price: item.price
                }}/>
        </Grid>
    );

    const modalActions = <Fragment>
        {hasItems &&
            <button
                onClick={orderHandler}
                className={classes.button}
                style={{background: 'rgba(255,110,110,0.5)', borderColor: 'white'}}
            >
                Proceed to Checkout
            </button>}
    </Fragment>;

    const cartModalContent = <Fragment>
        {items}
        <Grid item xs={12}>
            <h3>Total amount:
                <span style={{background: 'rgba(255,110,110,0.2)', padding: '15px', borderRadius: '10px'}}>
                    ${totalCartAmount.toFixed(2)}
                </span>
            </h3>
        </Grid>

        <Box display="flex"
             alignItems="center"
             justifyContent="center"
             sx={{margin: '10px auto'}}
        >
            {isCheckout && <Checkout onConfirm={submitOrderHandler}/>}
            {isCheckout || modalActions}
        </Box>
    </Fragment>;


    return (
        <Grid container item xs={12} sx={{
            width: {
                xs: '90vw',
                md: '80vw',
                lg: '50vw',
            }, borderRadius: '10px', backgroundColor: 'rgba(255,110,110,0.7)', padding: '1vh', margin: '1vh auto'
        }}>
            <h2>Your Shopping Cart</h2>
            {cartModalContent}
        </Grid>
    );
};

export default Cart;
