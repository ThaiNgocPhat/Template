import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// useParams

const ProductDetail = () => {
    // get id -> url
    const { id } = useParams();
    const [product, setProduct] = useState({});

    // get 
    const fetchApiOneProduct = async () => {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data);
    }

    useEffect(() => {
        fetchApiOneProduct();
    }, [id])

    return (
        <>
            <div className='row mt-5'>
                <div className='col col-md-5'>
                    <img src={product.images && product.images.length > 0 ? product.images[0] : ''} className="card-img-top" alt="..."
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
