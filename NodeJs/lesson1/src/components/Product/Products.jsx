import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListProduct from './ListProduct';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchApiProduct = async () => {
        const response = await axios.get('https://dummyjson.com/products');
        setProducts(response.data.products);
        console.log('products',products);
    }
    fetchApiProduct();
  }, [])
  return (
    <>
    <ListProduct products={products}/>
    </>
  )
}

  

export default Products;
