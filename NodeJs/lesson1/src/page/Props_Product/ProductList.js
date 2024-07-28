import React from 'react'
import Product from './Product'

const products =[
    {
        name: 'Áo polo',
        price: 20 ,
        description: 'Áo thun cao cấp'
    },
    {
        name: 'Áo thun',
        price: 20 ,
        description: 'Áo thun mát'
    }

]

const ProductList = () => {
  return (
    <>
    <h2>Danh sách sản phẩm</h2>
    <div className='row'>
        <div className='col'>
            {
                products.map((product, index) => (
                    <Product
                    key = {index}
                    name = {product.name}
                    price = {product.price}
                    description={product.description}
                    />
                ))
            }
        </div>
    </div>
    </>
    )
}

export default ProductList