import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

import { counterActions } from '../store/counter';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.counter) //zawsze gdy wartosc counter sie zmeni w react store komponent bedzie renderowal ponownie
  const show = useSelector(state => state.counter.showCounter)

  const increaseHandler = () => {
    dispatch(counterActions.increase(5))
  }

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
