import React from 'react'
import ItemProduct from './ItemProduct'

const ListProduct = ({products}) => {
    return (
        <>
        <div className='container'>
            {
                products.map((product, index) => (
                    <ItemProduct product = {product}/>
                ))
            }
        </div>
        </>
    )
}

export default ListProduct