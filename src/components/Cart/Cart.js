import CartItem from './CartItem';
import {useSelector} from "react-redux";
import {Grid} from "@mui/material";

const Cart = () => {
    const cartItems = useSelector(state => state.cart.items);

    const items = cartItems.map(item =>
        <Grid item xs={12} key={item.id} sx={{listStyleType: 'none'}}>
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

    return (
        <Grid container item xs={12} sx={{
            width: {
                xs: '90vw',
                md: '80vw',
                lg: '50vw',
            }, borderRadius: '10px', backgroundColor: 'rgba(255,110,110,0.7)', padding: '1vh', margin: '1vh auto'
        }}>
            <h2>Your Shopping Cart</h2>
            {items}
        </Grid>
    );
};

export default Cart;

/*
.card {
    margin: 1rem auto;
    border-radius: 6px;
    background-color: rgba(225, 181, 71, 0.9);
    padding: 1rem;
    width: 90%;
    max-width: 40rem;
}*/
