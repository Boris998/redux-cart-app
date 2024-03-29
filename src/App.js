import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Notification from "./components/UI/Notification";
import {fetchCartData, sendCartData} from "./store/cart-actions";

let isInitial = true;

const App = () => {
    const dispatch = useDispatch();
    const renderUICart = useSelector(state => state.ui.cartIsVisible);
    const cart = useSelector(state => state.cart);
    const notification = useSelector(state => state.ui.notification);

    useEffect(() => {
        dispatch(fetchCartData());
    }, [dispatch]);

    useEffect(() => {
        if (isInitial) {
            isInitial = false;
            return;
        }

        if (cart.changed) {
            dispatch(sendCartData(cart));
        }

    }, [cart, dispatch]);

    return (
        <div>
            {notification && <Notification
                status={notification.status}
                title={notification.title}
                message={notification.message}
            />}
            <Layout>
                {renderUICart && <Cart/>}
            </Layout>
        </div>
    );
}


export default App;
