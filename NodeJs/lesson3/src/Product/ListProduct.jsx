import React from 'react'
import { ItemProduct } from './ItemProduct'
import { useProductContext } from '../../context/ProductContext'

// props : products === arra
// remove props : products
const ListProduct = () => {
    const { products } = useProductContext();
    return (
        <>
            <div className='container m-5'>
                <div className='row'>
                    {
                        products.map((product, index) => (
                            <ItemProduct key={index} product={product} /> // object
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default ListProduct