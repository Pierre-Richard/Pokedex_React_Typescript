import { Button } from "@mui/material";
import React, { useReducer } from "react";

export const CounterTwo = () => {
  const initialState: {} = {
    firstCounter: 0,
  };
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "increment":
        return { firstCounter: state.firstCounter + 1 };
      case "decrement":
        return state - 1;
      case "reset":
        return initialState;
      default:
        return state;
    }
  };
  const [count, dispach] = useReducer(reducer, initialState);
  console.log("count", count);
  console.log("dispach");
  return (
    <>
      <div>Count - {count.firstCounter}</div>
      <Button onClick={() => dispach({ type: "increment" })}>Increment</Button>
      <Button onClick={() => dispach({ type: "decrement" })}>Decrement</Button>
      <Button onClick={() => dispach({ type: "reset" })}>Reset</Button>
    </>
  );
};
