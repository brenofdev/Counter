import { useState } from "react";

import '../styles/counter.css';

export function Counter() {
  // let counter = 0;
  const [counter, setCounter] = useState(0)

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  return (
    <div className="container">
      <div className="counter">
        <h2>{counter}</h2> 
      </div>

      <div className="buttons">
        <button 
          className="score" 
          type="button" 
          onClick={decrement}>
          -
        </button>

        <button 
          className="score" 
          type="button" 
          onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
}