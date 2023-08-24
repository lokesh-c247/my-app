import { createSlice } from "@reduxjs/toolkit";

interface Rating {
    rate : number,
    count : number,
}

interface AllProducts {
    id: number;
    title : string,
    price : number,
    description : string,
    category : string,
    image : string,
    rating : Rating
}

interface CartState {
    items : AllProducts[],
}

const initialState : CartState = {
    items : []
};

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        addItem : (state , action) => {
            state.items.push(action.payload);
        },
        removeItem : (state , action) => {            
            const itemIdToRemove = action.payload;
            // eslint-disable-next-line max-len
            const itemToRemove = state.items.find((item) => item.id === itemIdToRemove);
            state.items = state.items.filter((item)=> item !==  itemToRemove);
        },
        clearCart : (state) => {
            state.items = [];
        }
    }
});

export const  {addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;