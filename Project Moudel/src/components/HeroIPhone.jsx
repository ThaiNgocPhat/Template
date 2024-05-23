import React from 'react'
import { Link } from 'react-router-dom'

export default function HeroIPhone() {
  return (
    <>
    <div id='hero'>
        <div className='hero-product'>
            <h1>Iphone</h1>
            <div className='item'>
                <img src="/public/HinhIphone/iphone-15-blue-pure-back-iphone-15-blue-pure-front-2up-screen-usen.webp" alt="" />
                <p>Iphone</p>
                <p>$1000</p>
                <button>Details</button>
            </div>
            <div className='item'>
                <img src="/public/HinhIphone/iphone-15-plus-pink-pure-back-iphone-15-plus-pink-pure-front-2up-screen-usen_638301951318113946.webp" alt="" />
                <p>Iphone</p>
                <p>$1000</p>
                <button>Details</button>
            </div>
            <div className='item'>
                <img src="/public/HinhIphone/iphone-15-blue-pure-back-iphone-15-blue-pure-front-2up-screen-usen.webp" alt="" />
                <p>Iphone</p>
                <p>$1000</p>
                <button>Details</button>
            </div>
            <div className='item'>
                <img src="/public/HinhIphone/iphone-15-blue-pure-back-iphone-15-blue-pure-front-2up-screen-usen.webp" alt="" />
                <p>Iphone</p>
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
