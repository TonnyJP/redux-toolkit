import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../cartItems";

const initialState = {
    cartItems: cartItems ,
    amount: 1,
    total: 0,
    isLoading: true
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = []
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item => {
                item!==itemId
            }))
        }
    }
})

export const {clearCart, removeItem} = cartSlice.actions;
console.log(cartSlice)

export default cartSlice.reducer