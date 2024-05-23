import React from 'react'
import { Link } from 'react-router-dom'
export default function HeroXiaomi() {
  return (
    <>
    <div id='hero'>
        <div className='hero-product'>
            <h1>Xiaomi</h1>
            <div className='item'>
                <img src='/public/xiaomi/thumb-xiaomi-13-lite.webp' alt='hero-miui'/>
                <p>Xiaomi</p>
                <p>$1000</p>
                <button>Details</button>
            </div>
            <div className='item'>
                <img src='/public/xiaomi/thumb-xiaomi-13-lite.webp' alt='hero-miui'/>
                <p>Xiaomi</p>
                <p>$1000</p>
                <button>Details</button>
            </div>
            <div className='item'>
                <img src='/public/xiaomi/thumb-xiaomi-13-lite.webp' alt='hero-miui'/>
                <p>Xiaomi</p>
                <p>$1000</p>
                <button>Details</button>
            </div>
            <div className='item'>
                <img src='/public/xiaomi/thumb-xiaomi-13-lite.webp' alt='hero-miui'/>
                <p>Xiaomi</p>
                <p>$1000</p>
                <button>Details</button>
            </div>
        </div>
    </div>
     <div className='change-page'>
            <button><Link to="/phone">More Than</Link></button>
        </div>
    </>
  )
}
