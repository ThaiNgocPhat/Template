import React from 'react'
import ProductList from './ProductList'
export const ProductArray =[
  {
            id: 1,
            title: "Task 9",
            status: "Ẩn"
        },
        {
            id: 2,
            title: "Task X",
            status: "Kích hoạt"
        },
        {
            id: 3,
            title: "Samsung Universe 9",
            status: "Ẩn"
        }
]
const ProductForm = () => {
  return (
    <>
    <h2>Danh sách sản phẩm</h2>
    <ProductList ProductArray = {ProductArray}/>
    
    </>
  )
}

export default ProductForm