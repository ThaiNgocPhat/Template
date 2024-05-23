import React from 'react'
import { Link } from 'react-router-dom'

export default function HeroSamsung() {
  return (
    <>
    <div id='hero'>
        <div className='hero-product'>
            <h1>SamSung</h1>
            <div className='item'>
                 <img src="/public/HinhSamsung/s24-ultra-den.png.webp" alt="" />
                <p>Samsung</p>
                <p>$1000</p>
                <button>Details</button>
            </div>
            <div className='item'>
                 <img src="/public/HinhSamsung/s24-ultra-tim.png.webp" alt="" />
                 <p>Samsung</p>
                 <p>$1000</p>
                 <button>Details</button>
            </div>
            <div className='item'>
                 <img src="/public/HinhSamsung/s24-ultra-vang.png.webp" alt="" />
                 <p>Samsung</p>
                 <p>$1000</p>
                 <button>Details</button>
            </div>
            <div className='item'>
                 <img src="/public/HinhSamsung/s24-xam-den.png.webp" alt="" />
                 <p>Samsung</p>
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
