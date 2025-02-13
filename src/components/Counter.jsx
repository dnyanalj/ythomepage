import React from 'react'
import { useState } from 'react';
function Counter() {

    let [count,setCount]=useState(0);

    function increament()
    {
        // setCount(count+1);
        // setCount(count+1);
        // setCount(count+1);
        setCount(count=>count+1);
        setCount(count=>count+1);
        setCount(count=>count+1);
        console.log(count);
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increament}>+</button>
    </div>
  )
}

export default Counter
