import React from 'react'
import './App.css'

export default function App() {
  const [state, setState] = React.useState(0)
  return (
    <div>
        <button onClick={()=>{
          setState(state + 1)
        }}>Tăng</button>
        <button onClick={() => {
          if(state > 1){
            setState (state -1)
          }else{
            alert('Không thể giảm')
          }
        }}>Giảm</button>
        <p>{state}</p>
    </div>
  )
  const [current,setCurrent] = useState(1)
const limit = 5;
const indexOfPages = current * limit;
const indexOfFirst = indexOfPages - limit;
const currentItems = items.slice(indexOfFirst, indexOfPages);

const pagination = [];
for (let i =1; i <= Math.ceil(items.length / limit); i++){
  pagination.push(i)
}
return (
  <>
  <div className='product'>
      {currentItems.map((index, item) =>{
        <div className='abc' key={index}>
          <div>{item.name}</div>
          <div>{item.address}</div>
          <div>{item.phone}</div>
          <div>{item.email}</div>
          <div>{item.id}</div>
          <div>{item.status}</div>
          <div>{item.createdAt}</div>
        </div>
    })}
    <div className='pagination'>
      {pagination.map((index)=>{
        <button key={index} onClick={()=>{
          setCurrent(index)
        }}>{index}</button>
      })}
    </div>
  </div>
  </>
)

}

