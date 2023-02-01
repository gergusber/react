
import { createSlice, configureStore } from '@reduxjs/toolkit';


const initialStateCounter = { counter: 0, showCounter: true }
const initialStateAuth = { isAuthenticated: false }

const counterSlicer = createSlice({
  name: 'counter',
  initialState: initialStateCounter,
  reducers: {
    increment(state) {// counterSlicer.actions.increase
      state.counter++
    },
    decrement(state) {// counterSlicer.actions.decrement
      state.counter--
    },
    increase(state, action) {// counterSlicer.actions.increment
      state.counter = state.counter + action.payload
    },
    toggleCounter(state) {// counterSlicer.actions.toggleCounter
      state.showCounter = !state.showCounter
    }
  }
})
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

const store = configureStore({
  reducer: {
    counter: counterSlicer.reducer,
    auth: authSlicer.reducer
  }
});

export const counterActions = counterSlicer.actions;// export the actions of the slicer 
export const authActions = authSlicer.actions;// export the actions of the slicer 

export default store;