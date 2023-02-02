import { createSlice } from '@reduxjs/toolkit';

const initialStateUi = { cartIsVisible: false }

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialStateUi,
  reducers: {
    toggle(state) {// state.cartIsVisible.toggle
      state.cartIsVisible = !state.cartIsVisible
    },
  }
})
export const uiActions = uiSlice.actions;// export the actions of the slicer 

export default uiSlice.reducer


