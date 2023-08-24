import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import quantitySlice from "./quantitySlice";

const Store = configureStore({
    reducer : {
        cart : cartSlice, 
        quantity : quantitySlice
    },
});

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
export default Store;