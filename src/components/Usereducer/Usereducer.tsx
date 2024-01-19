"use client"
import React from "react";
import { useReducer } from "react";

const UseReducerComponent = () => {
  const countReducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "DECREMENT":
        return { count: state.count - 1 };
      default:
        return state;
    } };
  const [state, dispatch] = useReducer(countReducer, { count: 0 });
  return (
    <div className="pt-10 bg-red-700 text-white space-x-6">
      UseReducerComponent
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })} className="bg-yellow-300 rounded-xl px-4 py-2">Increse</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })} className="bg-yellow-300 rounded-xl px-4 py-2">Decrese</button>
    </div>
  );
};

export default UseReducerComponent;