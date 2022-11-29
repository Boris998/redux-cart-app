import {configureStore} from "@reduxjs/toolkit";
import uiReducer from "./ui-slice";
import cartReducer from "./cart-slice";
import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
        reducer: {
            ui: uiSlice.reducer,
            cart: cartSlice.reducer
        }
    }
);

export default store;