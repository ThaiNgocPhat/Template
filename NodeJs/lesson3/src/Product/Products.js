import React, { useMemo } from 'react';
import ListProduct from './ListProduct';
import { useThemeContext } from '../../context/ThemContext';
import { useProductContext } from '../../context/ProductContext';

const Products = () => {
    const { theme } = useThemeContext();
    const { products } = useProductContext();

    const memoizedValue = useMemo(() => {
        const sortedCost = products.sort((a, b) => a.price - b.price);
        const totalCost = products.reduce((sum, product) => sum + product.price, 0);
        return { sortedCost, totalCost };
    }, [products]);

    const { sortedCost, totalCost } = memoizedValue;;
    return (
        <>
            <div className='text-center'>
                <h1>${totalCost}</h1>
            </div>
            <div style={{}}></div>
        </>
    )
}

export default Products