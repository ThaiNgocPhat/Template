import React, { useState } from 'react'
import Button from './Button'
const Counter = () => {

    const [count, setCount] = useState(0);
     const handleIncrease = () => {
            setCount(count + 1);
        }
    const handleDescreaseCount = () => {
        setCount(count - 1);
    }

  return (
     <>
            <div className='container mt-5 align-items-center'>
                <div>Chương trình sử dụng state để tăng giảm biến đếm</div>
                <h2>Count:{count}</h2>
                <Button onClickFunction={handleIncrease} buttonText={'Tăng'}/>
                <Button onClickFunction={handleDescreaseCount} buttonText={'Giảm'}/>
            </div>
        </>
  )
}

export default Counter