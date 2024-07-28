import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
const ProductDetail = () => {

        const {id} = useParams();//useParams: lấy tham số truyền vào url

        const [product, setProduct] = useState('');//useState: khởi tạo giá trị ban đầu cho biến product

        useEffect(() => {
            const fetchApiProduct = async () => { //fetchApiProduct: hàm lấy dữ liệu từ api
                const response = await axios.get(`https://dummyjson.com/products/${id}`); //response: biến lưu trữ dữ liệu lấy từ api,
                // axios.get: phương thức lấy dữ liệu từ api, trả về một promise, hàm async await giúp chờ dữ liệu trả về
                setProduct(response.data);//setProduct: hàm cập nhật dữ liệu mới
                console.log('product',product);//hiển thị dữ liệu lấy từ api

            }
            fetchApiProduct();//gọi hàm fetchApiProduct
        }, [id]);//id: tham số truyền vào hàm useEffect, khi id thay đổi thì useEffect sẽ chạy lại
    return (
        <>
                <div className='row mt-5'>
                <div className='col col-md-5'>
                    <img src={product.images && product.images.length > 0 ? product.images[0]: ''} className="card-img-top" alt="..."
                        width={'15rem'} height={'150rem'}
                    />
                </div>
                <div className='col col-md-6'>
                    <div className="card" style={{ width: '' }}>

                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.description}</p>
                            <p className="card-text">${product.price}</p>
                            <button className="btn btn-primary">By now</button>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default ProductDetail