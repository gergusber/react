import { createSlice } from '@reduxjs/toolkit';

const initialStateCart = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialStateCart,
  reducers: {
    addItemToCart(state, action) {// state.cartIsVisible.toggle
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id)
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price
        })
      }
      else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemToCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
      }
      else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }

    },
  }
})
export const cartActions = cartSlice.actions;// export the actions of the slicer 

export default cartSlice.reducer


