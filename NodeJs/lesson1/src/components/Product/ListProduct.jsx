import React from 'react'
import ItemProduct from './ItemProduct'
const ListProduct = ({products}) => {
    return (
        <>
        <div className='container m-5'>
            <div className='row '>
            {
                products.map((product, index) => (
            <ItemProduct product={product} /> //đối tượng
        ))
            }
        </div>
        </div>
        </>
    )
}

export default ListProduct