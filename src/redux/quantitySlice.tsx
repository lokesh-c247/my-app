/* eslint-disable max-len */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';
import { API_ENDPOINT } from "../components/CONSTANTS/constants";

interface Rating {
    rate : number,
    count : number,
}

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating : Rating
    quantity: number;
}

// eslint-disable-next-line max-len
export const allData = createAsyncThunk("quantitySlice/fetchProducts" , async() => {
    const response = await fetch(API_ENDPOINT);
    const data = await response.json();
    return data;
});

interface QuantityState {
    allProducts : Product[]
}

const initialState : QuantityState = {
    allProducts : []
};

const quantitySlice = createSlice({
    name : "quantity",
    initialState ,
    reducers : {
        increaseQuantity : (state , action:PayloadAction<number>) => {
            const productId = action.payload;
            const product = state.allProducts.find((item) => item.id === productId);
            if(product){
                product.quantity += 1;
            }
        },
        decreaseQuantity : (state , action:PayloadAction<number> ) => {
            const productId = action.payload;
            const product = state.allProducts.find((item) => item.id === productId);
           if (product && product.quantity > 0) {
                 product.quantity -= 1;
            }
        }
    },
    extraReducers : (builder) => {
        builder.addCase(allData.fulfilled , (state , action) => {
            state.allProducts = action.payload.map((product : Product) => ({...product , quantity:1}));
        });
    }
});

export const {increaseQuantity , decreaseQuantity} = quantitySlice.actions;
export default quantitySlice.reducer;