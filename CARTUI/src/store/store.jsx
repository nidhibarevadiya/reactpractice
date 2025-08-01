import { configureStore} from "@reduxjs/toolkit";
import cartReducer from '../cart/cartSlice'
import wishlistReducer  from  '../cart/wishlistslice';

export const store = configureStore({
  reducer:{
    cart:cartReducer,
   wishlist: wishlistReducer,
  }
})