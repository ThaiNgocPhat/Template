 import React from 'react'
import ProductItem from './ProductItem'
 
 const ProductList = ({products}) => {
   return (
     <>
      <h2>Danh sách sản phẩm</h2>
      {
        products.map((product,index) =>(
          <ProductItem 
          key={index}
            // name={product.name}
            // price={product.price}
            // desc={product.desc}
            product={product}
          />
        ))
      }
     </>
   )
 }
 
 export default ProductList