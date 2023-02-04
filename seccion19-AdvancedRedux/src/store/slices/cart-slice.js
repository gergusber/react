import { createSlice } from '@reduxjs/toolkit';
import { uiActions } from "../slices/ui-slice";
const initialStateCart = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialStateCart,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
      }
    },

  }
})

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(uiActions.showNOtification({
      status: 'pending',
      title: 'sending...',
      message: 'sending message'
    }))

    const sendRequest = async () => {
      const response = await fetch('url from firebase', 
        {
          method: 'PUT',
          body: JSON.stringify(cart)
        })

      if (!response.ok) {
        throw new Error('Send cart data failed')
      }
    }

    try {
      await sendRequest();
      dispatch(uiActions.showNOtification({
        status: 'success',
        title: 'Success',
        message: 'sent cart data successfully'
      }))

    } catch (error) {
      dispatch(uiActions.showNOtification({
        status: 'error',
        title: 'Error',
        message: 'sent cart data Error'
      }))
    }
  }
}
export const cartActions = cartSlice.actions;// export the actions of the slicer 

export default cartSlice.reducer


