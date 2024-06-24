import React from 'react'
import './Header.css'
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTruckFast} from '@fortawesome/free-solid-svg-icons'

const ExampleCarouselImage = ({ text }) => (
  <div style={{ height: '400px', background: '#777', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    {text}
  </div>
);
export default function Header() {
  return (
    <>
        <div id='header'>
            <div class='header-logo'>
                <img src="../../../public/image/header-logo.jpeg" alt="" />
            </div>
            <div class='header-search'>
                <input type="text" placeholder="Search..." />
                <button>Search</button>
            </div>
            <div className='header-cart'>
                <div className='header-cart-icon'>
                    <FontAwesomeIcon icon={faTruckFast} />
                </div>
                <div className='info-delivery'>
                    <p>kiểm tra đơn hàng</p>
                </div>
            </div>
            <div class='header-login-register'>
                <button>Login</button>
                <button>Register</button>
            </div>
        </div>
         <div id='carousel'>
        <Carousel>
            <Carousel.Item interval={1000}>
                <ExampleCarouselImage text="First slide" />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <ExampleCarouselImage text="Second slide" />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <ExampleCarouselImage text="Third slide" />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    </>
  )
}
