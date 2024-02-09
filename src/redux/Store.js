import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/CartSlice";
import CartReducer from '../redux/Slices/CartSlice'


export const store = configureStore({
    reducer:{
        cart: CartSlice.reducer,
    },

});