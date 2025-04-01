import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "./reducers/shopReduce";
import cartReduce from "./reducers/cartReduce"

const store = configureStore({
    reducer: {
        shop: shopReducer,
        cart: cartReduce
    },
})

export default store