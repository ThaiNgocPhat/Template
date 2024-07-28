// Context
// define : 1 hook trong React được sử dụng truy cập giá trị của context api (ví dụ : api all product)
// context api trong react là 1 cách mình truyền đạt dữ liệu từ 1 thành phần cha đến các thành phần con
// mà không cần props qua nhiều lớp con trung gian
import { createContext, useContext, useState, useEffect } from "react";
import { getAllProducts } from "../util/ProductRequest";

// B1: Khởi tạo cái context api muốn sử dụng 
export const ProductsContext = createContext();

// B2: tạo useProductContext : hook được sử dụng (useContext)
export const useProductContext = () => useContext(ProductsContext);

// B3: tạo components cha bao trum : {children components}
export const ProductsContextProvider = ({ children }) => {
    // array
    const [products, setProducts] = useState([]);
    // objects
    // const [product, setProduct] = useState({});
    useEffect(() => {
        // IIFE
        (async function _await() {
            const res = await getAllProducts();
            setProducts(res.data);
        })()
        // const fetchApiAllProduct = async () => {
        //     const res = await getAllProducts();
        //     setProducts(res.data);
        // }
        // fetchApiAllProduct();
    }, [])

    // trả về 
    return (
        // provide : cung cấp
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    )
}
// B4 : Import vào index.js và Provide cho children

{/* <ProductsContext.Provider value={{ products }}>
            {children}
</ProductsContext.Provider> */}

// Components cha bao bọc các components con, truyền đạt dữ liệu bằng value : array - products
{/* <ProductsContext.Provider value={{ products }}>
            products
            listproducts
</ProductsContext.Provider> */}

{/* <ProductsContextProvider>
    <Products />
    <ListProduct />
</ProductsContextProvider> */}