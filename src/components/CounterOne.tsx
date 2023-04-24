import { Button } from "@mui/material";
import React, { useReducer } from "react";

export const CounterOne = () => {
  const initialState: number = 0;
  const reducer = (state: any, action: any) => {
    switch (action) {
      case "increment":
        return state + 1;
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

  const numbers: number[] = [3, 6, 2, 9, 1];
  const sum = numbers.reduce((p, c) => {
    return p + c;
  }, 0);

  const people = [
    {
      name: "Dom Perry",
      age: 35,
    },
    {
      name: "DoP William",
      age: 47,
    },
    {
      name: "Bird Bold",
      age: 15,
    },
  ];

  const oldestAge = people.reduce((p, c) => {
    if (c.age > p) {
      return c.age;
    }
    return p;
  }, 0);

  console.log("oldestAge: ", oldestAge);

  // 0 correspond à la valeur initiale

  console.log("sum: ", sum);

  return (
    <>
      <div>Count - {count}</div>
      <Button onClick={() => dispach("increment")}>Increment</Button>
      <Button onClick={() => dispach("decrement")}>Decrement</Button>
      <Button onClick={() => dispach("reset")}>Reset</Button>
    </>
  );
};
