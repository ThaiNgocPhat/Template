import React, { useState } from 'react'

const State_ArrowFuncComponent = () => {
    // eslint-disable-next-line no-undef
    // const [name, setName] = useState('state');
    // const [age, setAge] = useState(18);
    
    
    // const [count, setCount] = useState(0);
    //     const handleIncrease = () => {
    //         setCount(count + 1);
    //     }
    // const handleDescreaseCount = () => {
    //     setCount(count - 1);
    // }

    const [person, setPerson] = useState({
        name: 'person',
        age: 12,
        salary: 100
    });
    
    const handleClick = () => {
        setPerson({
            ...person, 
            name: 'Phat',
            age: 28,
            salary: 400
        });
    }
    
    return(
        // <>
        // <div>
        //     Hello my state arrow function, my name is '{name}'
        // </div>
        // <div>
        //         Hello my state arrow function, my name is {age}
        // </div>
        // <button onClick={()=>setName("phat")} className='btn btn-success'>Thay đổi name</button>
        // <button onClick={()=>setAge('27')} className='btn btn-danger'>Thay đổi tuổi</button>
        // </>
        

        // <>
        //     <div className='container mt-5 align-items-center'>
        //         <div>Chương trình sử dụng state để tăng giảm biến đếm</div>
        //         <h2>Count:{count}</h2>
        //         <button onClick={handleIncrease}>Tăng</button>
        //         <button onClick={handleDescreaseCount}>Giảm</button>
        //     </div>
        // </>
        <>
        <div>
            {/* <h2>Name: {person.name}</h2>
            <p>Age: {person.age}</p>
            <button onClick={handleClick}>Click to Change</button> */}
            <h2>Name: {person.name}</h2>
            <p>Age: {person.age}</p>
            <p>Salary: {person.salary}</p>
            <button onClick={handleClick}>Click to Change</button>
        </div>
        </>
    )
}
export default State_ArrowFuncComponent
