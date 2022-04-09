import { useState, useEffect } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCounter((prevCounter) => {
        return prevCounter + 1;
      });
    }, 1000);
  }, [counter]);

  return <div>{counter}</div>;
};

export default Counter;
