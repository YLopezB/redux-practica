import { createAction } from "@reduxjs/toolkit";

const addCart = createAction("cart/addCart");
const openModal = createAction("cart/openModal")
const deleteModal = createAction("cart/deleteModal")

export {addCart, openModal, deleteModal}