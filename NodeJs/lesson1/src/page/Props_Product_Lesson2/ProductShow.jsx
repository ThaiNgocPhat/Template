import React from 'react'
import ProductList from './ProductList'


const products = [
  {
        name: 'Áo polo',
        price: 20 ,
        description: 'Áo thun cao cấp'
    },
    {
        name: 'Áo thun',
        price: 20 ,
        description: 'Áo thun mát'
    },
    {
        name: 'Áo mưa',
        price: 10 ,
        description: 'Chống thấm cực tốt'
    }


]

const ProductShow = () => {
  return (
    <>

    <ProductList products={products}/>
    </>
  )
}

export default ProductShow