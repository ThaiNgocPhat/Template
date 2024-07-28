import React from 'react'
import ProductItem from './ProductItem'
import ProductArray from './ProductArray'

const ProductList = () => {
    return (
    <>
    <table class="table caption-top">
                <thead>
                    <tr>
                        <th scope="col">Số thứ tự</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ProductArray.map((Product, index) =>(
                            <ProductItem ProductItem = {Product}/>
                        ))
                    }
                </tbody>
            </table>

    </>
)
}

export default ProductList