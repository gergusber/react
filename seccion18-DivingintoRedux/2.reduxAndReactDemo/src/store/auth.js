import { createSlice } from '@reduxjs/toolkit';

const initialStateAuth = { isAuthenticated: false }
const authSlicer = createSlice({
  name: 'auth',
  initialState: initialStateAuth,
  reducers: {
    logIn(state, action) {// counterSlicer.actions.logIn
      state.isAuthenticated = true
    },
    logOut(state) {// counterSlicer.actions.logOut
      state.isAuthenticated = false
    }
  }
})
export const authActions = authSlicer.actions;// export the actions of the slicer 

export default authSlicer.reducer


