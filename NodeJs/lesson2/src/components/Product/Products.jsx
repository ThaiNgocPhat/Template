import React, { useEffect, useState } from 'react'
import ListProduct from './ListProduct'
import axios from 'axios'

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const response = await axios.get('https://dummyjson.com/products');
            setProducts(response.data.products);
            console.log('products',products)
        }
        fetchApi();
    }, []);
    return (
        <ListProduct products={products}/>
    )
}

export default Products;