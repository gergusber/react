const redux = require('redux');
const actions = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
}

const counterReducer = (state = { counter: 0 }, action) => {
  if (action === actions.INCREMENT) {
    return { counter: state.counter + 1 }
  }
  if (action === actions.DECREMENT) {
    return { counter: state.counter - 1 }
  }

  return state;
}

const store = redux.createStore(counterReducer);


export default store;