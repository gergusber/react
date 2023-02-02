import { createSlice } from '@reduxjs/toolkit';

const initialStateCart = { cartIsVisible: false }

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialStateCart,
  reducers: {
    toggle(state) {// state.cartIsVisible.toggle
      state.cartIsVisible = !state.cartIsVisible
    },
  }
})
export const cartActions = cartSlice.actions;// export the actions of the slicer 

export default cartSlice.reducer


