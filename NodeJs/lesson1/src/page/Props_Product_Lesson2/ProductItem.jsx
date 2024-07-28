import React from 'react'

const ProductItem = ({product}) => {
    const {name, price, description} = product; //cach 1
  return (
    <>
        {/* <h2>Tên sản phẩm: {name}</h2>
        <p>Giá: {price}</p>
        <p>Miêu tả: {desc}</p> */}
        <h2>{product.name}</h2> 
        <p>{product.price}</p>
        <p>{product.description}</p>

    </>
  )
}

export default ProductItem;