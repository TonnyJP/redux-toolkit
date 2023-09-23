import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../cartItems";
import axios from "axios";

const url = 'https://course-api.com/react-useReducer-cart-project'

const initialState = {
    cartItems: cartItems ,
    amount: 1,
    total: 0,
    isLoading: false
}

export const getCartItems  = createAsyncThunk(
    'cart/getCartItems', () =>{
        return  axios.get(url)
        .then((resp) => resp.json())
        .catch((error) => console.log(error))
    
})
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = []
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter(item => item.id!==itemId)
        },
        increaseItem:(state, action) => {
            const cartItem = state.cartItems.find((item) => item.id === action.payload);
            cartItem.amount +=1;
        },
        decreaseItem : (state, action) => {
            const cartItem = state.cartItems.find((item)=> item.id === action.payload)
            cartItem.amount -=1;
        },
        calculateTotal: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.map((item) => {
                amount+= item.amount;
                total+= item.price * item.amount;
            })
            state.amount = amount;
            state.total = total
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getCartItems.pending, (state) => {
            state.isLoading= true;
        }),
         builder.addCase(getCartItems.fulfilled, (state, action) => {
            state.isLoading= false;
            state.cartItems = action.payload;
        }), 
        builder.addCase(getCartItems.rejected, (state) => {
            state.isLoading= false;
        })
        /* [getCartItems.pending]: (state) => {
            state.isLoading= true;
        },
        [getCartItems.fulfilled]: (state, action) => {
            state.isLoading= false;
            state.cartItems = action.payload;
        },
        [getCartItems.rejected]: (state) => {
            state.isLoading= false;
        }, */
    }
})

export const {clearCart, removeItem, increaseItem, decreaseItem, calculateTotal} = cartSlice.actions;

export default cartSlice.reducer