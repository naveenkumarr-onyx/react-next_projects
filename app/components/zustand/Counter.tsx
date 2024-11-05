import React from "react";
import useCounter from "./store";

const Counter = () => {
  const count = useCounter();

  return <div></div>;
};

export default Counter;
