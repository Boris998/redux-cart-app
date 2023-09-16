import {uiActions} from "./ui-slice";
import {cartActions} from "./cart-slice";


export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://react-http-6fb98-default-rtdb.firebaseio.com/cart.json');

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
                totalQuantity: cartData.totalQuantity,
                totalAmount: cartData.totalAmount
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
            const response = await fetch('https://react-http-6fb98-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify({
                    items: cart.items || [],
                    totalQuantity: cart.totalQuantity,
                    totalAmount: cart.totalAmount
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

export const submitOrderHandler = (order) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'pending order',
            title: 'Sending order...',
            message: 'Sending order data!!!',
        }));

        const sendReq = async () => {
            const response = await fetch('https://react-http-6fb98-default-rtdb.firebaseio.com/orders.json', {
                method: 'POST',
                body: JSON.stringify({
                    user: order,
                    orderedItems: order.items || [],
                    totalQuantity: order.totalQuantity,
                    totalAmount: order.totalAmount
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
                message: 'Sending order data successfully!',
            }));
        } catch (e) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending order data failed!',
            }));
        }
    };
};
