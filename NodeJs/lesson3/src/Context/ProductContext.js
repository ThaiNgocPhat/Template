// import { createContext, useContext, useState, useEffect } from 'react';
// import {getAllProducts} from '../util/ProductRequest';

// // Create a context for the products.là thằng cha của tất cả các thằng con
// export const ProductContext = createContext();
// export const useProductContext = () => useContext(ProductContext);
// export const ProductsContextProvider = ({children}) => {
//     const [products, setProducts] = useState([]);
//     useEffect(() => {
//       (async function _await() {
//             const res = await getAllProducts();
//             setProducts(res.data);
//         })()
// }, [])
// return (
//     <ProductContext.Provider value={{products}}>
//         {children}
//     </ProductContext.Provider>
// )
// }
