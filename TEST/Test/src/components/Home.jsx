import React, { useState } from 'react'

export default function Home(props) {
    let {id, name} = props;
    console.log(id,name);
    
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
      setCount(count + 1);
    }
    const handleDecrement = () => {
      setCount(count - 1);
    }
  return (
    <>
    <div>Home</div>
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>
    <p>Count: {count}</p>
    </>
  )
}
