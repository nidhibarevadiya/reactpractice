import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products:[],
  wishlist:[],
  status:'idle', // loading , success and failed
  error:null
}

export const wishlistslic = createSlice({
  name:'wishlist',
  initialState,
  reducers:{
    addProducts:(state , action) => {
      state.products = action.payload
    },
    addToWish:(state , action) => {
      const item = state.products.find(p => p.id === action.payload)

      if(item && !state.wishlist.find(w => w.id === item.id)){
        state.wishlist.push({...item , quantity:1})
      }
    },

    removeToWish:(state , action) => {
      state.wishlist = state.wishlist.filter(item => item.id !== action.payload)
    },

    resetWish:(state) => {
      state.wishlist = []
    }
  }
})

export const {addToWish , removeToWish , resetWish , addProducts } = wishlistslic.actions

export default wishlistslic.reducer