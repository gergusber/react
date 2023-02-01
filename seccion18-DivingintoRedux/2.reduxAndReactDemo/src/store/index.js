// const redux = require('redux');
// import classes from './Counter.module.css';
// import {createStore} from 'reud';
// import { createStore } from 'redux'
import { createSlice, configureStore } from '@reduxjs/toolkit';

const actions = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  INCREASE: 'increase',
  TOGGLE: 'toggle'
}

const initialState = { counter: 0, showCounter: true }

const counterSlicer = createSlice({
  name: 'counter',
  initialState,
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




const store = configureStore({
  reducer: counterSlicer.reducer,
  //for multiple reducers
  // reducer:{
  //   counter: counterSlicer.reducer
  // }
  
});

export const counterActions = counterSlicer.actions;
export default store;