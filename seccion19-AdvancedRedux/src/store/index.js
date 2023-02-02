
import { configureStore } from '@reduxjs/toolkit';
import uiReducer from '../store/slices/ui-slice'
import cartReducer from '../store/slices/cart-slice'


const store = configureStore({
  reducer: {
    ui: uiReducer,
    // cart: cartReducer
  }
});

export default store;