import React from 'react'
import { Link } from 'react-router-dom'
export default function Navar() {
  return (
    <>
    <div id='nav'>
        <Link to='/'>Home</Link>
        <Link to='/iphone'>Iphone</Link>
        <Link to='/samsung'>Samsung</Link>
        <Link to='/xiaomi'>Xiaomi</Link>
        <Link to='/accessory'>Accessory</Link>
    </div>
    </>
  )
}
