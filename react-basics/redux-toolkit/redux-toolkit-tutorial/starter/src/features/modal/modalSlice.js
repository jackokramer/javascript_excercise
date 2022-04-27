import { createSlice } from "@reduxjs/toolkit";
const initalState ={
    isOpen: false,
}

const modalSlice = createSlice({
    name: 'modal',
    initalState,
    reducers: {
        openModal: (state, action) =>{
            state.isOpen = true;
        },
        closeModal: (state, action) =>{
            state.isOpen = false;
        }
    }
})

export const {openModal, closeModal} = modalSlice.actions
export default modalSlice.reducer
