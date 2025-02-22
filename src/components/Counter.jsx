import React, { useMemo, useRef } from "react";
import { useState, useCallback } from "react";

function Counter() {
  // console.log('rerender ');
  let [count, setCount] = useState(3);

  // let num=0;
  let num = useRef(0);

  function increament() {
    // setCount(count+1);
    // setCount(count+1);
    // setCount(count+1);

    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);

    // num++;
    // console.log(num);

    num.current++;
    console.log(num.current);
  }

  const fibfx = useCallback(function fib(n) {
    if (n == 1 || n == 2) {
      return 1;
    }
    return fib(n - 1) + fib(n - 2);
  }, []);

  const fibMemoized = useMemo(() => fibfx(count), [count, fibfx]);

  return (
    <div>
      <h1>
        {count}|{num.current}|{fibMemoized}
      </h1>
      <button onClick={increament}>+</button>
    </div>
  );
}

export default Counter;
