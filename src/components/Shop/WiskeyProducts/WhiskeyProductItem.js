import {useDispatch} from "react-redux";
import {cartActions} from "../../../store/cart-slice";
import {Grid, Typography} from "@mui/material";

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
        <Grid item xs={12} sx={{
            margin: '1rem auto',
            width: {xl: '40vw' ,lg: '60vw', md: '75vw', sm: '95vw'},
            borderRadius: '10px',
            padding: '1vh',
            background: 'rgba(225, 181, 71, 0.9)'
        }}>
            <Grid container item xs={12} sx={{
                background: '#ff6e6e',
                padding: '0',
                color: 'whitesmoke',
                marginBottom: '10px',
                borderRadius: '5px 25px 15px 5px'
            }}>
                <Grid item xs={9} align={'left'} sx={{padding: '5px'}}>
                    <Typography variant={'h5'}>{title}</Typography>
                </Grid>
                <Grid item xs={3} align={'center'} sx={{
                    background: '#943b3b',
                    borderRadius: '5px 20px'
                }}>
                    <Typography variant={'h5'}>${price.toFixed(2)}</Typography>
                </Grid>
            </Grid>
            <Grid container item xs={12}>
                <Grid item xs={6} align={'left'} sx={{
                    color: '#383c57',
                    fontSize: '20px',
                    padding: '30px 0 0 10px',
                }}>
                    <Typography variant={'h5'}>{props.description}</Typography>
                    <Grid item xs={12} sx={{color: '#943b3b', paddingTop: '30px'}}>Alcohol: %{props.alcohol}</Grid>
                </Grid>
                <Grid item xs={6} align={'center'} flex={1}>
                    <img style={{height: '100%',
                        width: '100%'}} src={props.image} alt='asd'/>
                </Grid>
            </Grid>
            <Grid item align={'center'} sx={{padding: '20px 0'}}>
                <button onClick={addToCartHandler}>Add to Cart</button>
            </Grid>
        </Grid>
    );
};

export default ProductItem;
