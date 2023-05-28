import React from 'react'
import { useState } from 'react';
import MyButton from './MyButton';


const Counter = () => {

    const [count,setCount] = useState(0);

    const handlePlus = () =>{
        setCount(count=>count+1);
    }

    const handleMinus = () =>{
        setCount(count=>count-1);
    }

  return (
    <>
      <h1>Counter</h1>
      <h1>{count}</h1>
        <MyButton handler={handlePlus} >+</MyButton>
        <MyButton handler={handleMinus}>-</MyButton>
    </>
  )
}

export default Counter
