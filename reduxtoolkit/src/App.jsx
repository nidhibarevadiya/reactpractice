import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./redux/Counterslice.jsx";

const App = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <h1 className="head">This is Redux Toolkit Functionality</h1>

      <div className="btn">Count: {count}</div>

      <button className="btn" onClick={() => dispatch(increment())}>Increment</button>
      <button className="btn" onClick={() => dispatch(decrement())}>Decrement</button>
      <button className="btn" onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </>
  );
};

export default App;
