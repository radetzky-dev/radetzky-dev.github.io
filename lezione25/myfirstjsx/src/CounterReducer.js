import React, { useReducer } from "react";

const initialState = { count: 5, parola: "mario" };

function myReducer(state, action) {
  console.log("Ciao " + state.parola + " " + state.count);
  switch (action.type) {
    case "increment":
      return { parola: "john", count: state.count + 1 };
    case "decrement":
      return { parola: "jake", count: state.count - 1 };
    case "azzera":
      return { parola: "mario ", count: 0 };
    default:
      throw new Error();
  }
}

function CounterReducer() {
  const [state, dispatch] = useReducer(myReducer, initialState);
  return (
    <div className="alert">
      Riduttore: {state.count}
      Nome : {state.parola}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "azzera" })}>Reset</button>
    </div>
  );
}

export default CounterReducer;
