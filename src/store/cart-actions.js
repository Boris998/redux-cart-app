import {uiActions} from "./ui-slice";
import {cartActions} from "./cart-slice";


export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://http-req-redux-cart-app-default-rtdb.europe-west1.firebasedatabase.app/cart.json');

            if (!response.ok) {
                throw new Error('Could not fetch cart data');
            }

            return await response.json();
        };

        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart({
                //never end up with items being undefined
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity
            }));
        } catch (e) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending cart data failed!',
            }));
        }
    };
};

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data!!!',
        }));

        const sendReq = async () => {
            const response = await fetch('https://http-req-redux-cart-app-default-rtdb.europe-west1.firebasedatabase.app/cart.json', {
                method: 'PUT',
                body: JSON.stringify({
                    items: cart.items || [],
                    totalQuantity: cart.totalQuantity
                })
            });

            if (!response.ok) {
                throw new Error('sending cart data failed');
            }
        };

        try {
            await sendReq();

            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Sending cart data successfully!',
            }));
        } catch (e) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending cart data failed!',
            }));
        }
    };
};
