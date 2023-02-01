import { createSlice } from '@reduxjs/toolkit';

const initialStateCounter = { counter: 0, showCounter: true }
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
export const counterActions = counterSlicer.actions;// export the actions of the slicer 

export default counterSlicer.reducer