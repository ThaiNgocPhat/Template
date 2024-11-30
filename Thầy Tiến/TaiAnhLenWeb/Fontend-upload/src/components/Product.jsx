import React, {useState} from 'react'

export default function Product() {
  return (
    <>
    <div className="Product-container">
            <header className="Product-content">
                <div className="product">
                    <img width={300} height={300} src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697230830200" alt="" />
                </div>
                <div className="desc">
                    <h2> MacBook Pro</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia,molestiae quas vel sint commodi repudiandae
                        consequuntur.
                    </p>
                    <h3>Price: $1.00</h3>
                </div>
            </header>
        </div>
    </>
  )
}
