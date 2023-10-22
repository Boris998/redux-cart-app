import {useDispatch} from "react-redux";
import {cartActions} from "../../../store/cart-slice";
import {Grid} from "@mui/material";

const CigarProductItem = (props) => {
    /*    let cartTotalQuantity = useSelector(state => state.cart.totalQuantity);
        const cartItems = useSelector(state => state.cart.items);*/
    const dispatch = useDispatch();

    const {title, price, id} = props;

    const addToCartHandler = () => {

        //the obj is passed as a payload
        dispatch(cartActions.addItemToCart({id, title, price}));
    }

    return (
            <Grid container item xs={12} sx={{
                margin: '1rem auto',
                width: {xl: '40vw' ,lg: '60vw', md: '75vw', sm: '90vw'},
                padding: '1vh',
                background: 'rgba(225, 181, 71, 0.9)',
                borderRadius: '10px'
            }}>
                <Grid container item xs={12} component={'h2'} sx={{
                    margin: '5vh auto 0 auto',
                    background: '#ff6e6e',
                    padding: '0',
                    marginBottom: '10px',
                    borderRadius: '5px 25px 15px 5px',
                    color: 'whitesmoke'
                }}>
                    <Grid item xs={9} align={'left'} sx={{padding: '5px'}}>{title}</Grid>
                    <Grid item xs={3} align={'center'} sx={{background: '#943b3b', borderRadius: '5px 20px',}}>${price.toFixed(2)}</Grid>
                </Grid>
                <Grid container item xs={12}>
                    <Grid container item xs={12} spacing={2} sx={{padding: '20px', color: '#383c57'}} align={'left'}>
                        <Grid item xs={12}>Dimensions: {props.dimensions}</Grid>
                        <Grid item xs={12}>Strength: {props.strength}</Grid>
                        <Grid item xs={12}>Made By: {props.madeBy}</Grid>
                        <Grid item xs={12}>Box Date: {props.boxDate}</Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <img style={{width: '100%', borderRadius: '25px'}} src={props.image} alt='asd'/>
                    </Grid>
                    <Grid item xs={12} align={'center'} sx={{padding: '20px 0'}}>
                        <button onClick={addToCartHandler}>Add to Cart</button>
                    </Grid>
                </Grid>
            </Grid>
    );
};

export default CigarProductItem;
