import { createSlice } from '@reduxjs/toolkit';

const initialStateUi = { cartIsVisible: false, notification: null }

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialStateUi,
  reducers: {
    toggle(state) {// state.cartIsVisible.toggle
      state.cartIsVisible = !state.cartIsVisible
    },
    showNOtification(state, action) {// state.cartIsVisible.toggle
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message
      }
    },
  }
})
export const uiActions = uiSlice.actions;// export the actions of the slicer 

export default uiSlice.reducer


