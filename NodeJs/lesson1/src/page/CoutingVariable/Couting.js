/* eslint-disable no-undef */
import React, { useState } from 'react'


const Couting = () => {
  const [count, setCount] = useState();
      const handleIncrease = () => {
          setCount(count + 1);
      }
  const handleDescreaseCount = () => {
      setCount(count - 1);
  }
  return (
    <>
            <div className='container mt-5 align-items-center'>
                <h2>Count:{count}</h2>
                <button onClick={handleIncrease}>Tăng</button>
                <button onClick={handleDescreaseCount}>Giảm</button>
            </div>
        </>
  )
}

export default Couting
