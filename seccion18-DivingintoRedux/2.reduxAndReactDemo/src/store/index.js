const redux = require('redux');
const actions = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  INCREASE: 'increase',
  TOGGLE: 'toggle'
}
const initialState = { counter: 0, showCounter: true }
const counterReducer = (state = initialState, action) => {
  if (action === actions.INCREASE) {
    return {
      counter: state.counter + action.amount,
      showCounter: action.showCounter
    }
  }
  if (action === actions.INCREMENT) {
    return {
      counter: state.counter + 1,
      showCounter: action.showCounter
    }
  }
  if (action === actions.DECREMENT) {
    return {
      counter: state.counter - 1,
      showCounter: action.showCounter
    }
  }

  if (action === actions.TOGGLE) {
    return {
      counter: state.counter,
      showCounter: !action.showCounter
    }
  }

  return state;
}

const store = redux.createStore(counterReducer);


export default store;