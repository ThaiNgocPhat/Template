import React, { useState } from 'react'
import AddProduct from './AddProduct'
import Product from './components/Product'
import PayPayCheckout from './components/PayPayCheckout';

export default function App() {
  const [checkout, setCheckOut] = useState(false);
  return (
    <>
    <AddProduct />
    <div className='App'>
      <header className='App-Header'>
        {checkout ? (<PayPayCheckout/>) : (
          <div className="Product">
            <button
              className="checkout"
              onClick={() => {
                setCheckOut(true);
              }}
            >
              Add to Cart & Checkout
            </button>
            <Product />
          </div>
        )}
      </header>
    </div>
    </>
  )
}
