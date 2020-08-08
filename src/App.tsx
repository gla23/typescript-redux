import React from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { increment, square, useCount } from "./ducks/counter";

function App() {
  const count = useCount();
  const dispatch = useDispatch();
  return (
    <div className="App">
      React Redux Typescript
      <h2>{count}</h2>
      <div />
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(square())}>Square</button>
    </div>
  );
}

export default App;
