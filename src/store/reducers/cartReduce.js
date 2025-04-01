import { createReducer } from "@reduxjs/toolkit";
import { addCart, openModal, deleteModal } from "../accions/cartAction";

const initialState = ({
    productsCart: [],
    modal: false
})

const cartReduce = createReducer(initialState, (builder) => {
    builder.addCase(addCart, (state, action) => {
        state.productsCart = [...state.productsCart, action.payload]
    })
    .addCase(openModal, (state, action) => {
        state.modal = action.payload
    })
    .addCase(deleteModal, (state, action) => {
        state.productsCart = state.productsCart.filter((_, index) => index !== action.payload)
    })
})

export default cartReduce