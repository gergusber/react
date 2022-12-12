import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux'
import { useCallback } from 'react'
const actions = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
}
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter)
  // // const increaseCounter = useCallback(() => dispatch({ type: 'increment' }), [])
  // // const decreaseCounter = useCallback(() => dispatch({ type: 'decrement' }), [])

  const incrementHandler = () => {
    dispatch({ type: 'increment' })
  }

  const decrementHandler = () => {
    dispatch({ type: 'decrement' })
  }
  const toggleCounterHandler = () => { };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
      {/* <button onClick={increaseCounter}>increment</button>
        <button onClick={decreaseCounter}>decrement</button> */}
        <button onClick={incrementHandler}>increment</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
