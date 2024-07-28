import React from 'react';
import { Link } from 'react-router-dom';

// props : product === object
export const ItemProduct = ({ product }) => {
    return (
        <>
            <div className='col col-md-3'>

                <div className="card" style={{ width: '15rem' }}>
                    <img src={product.images && product.images.length > 0 ? product.images[0] : ''} className="card-img-top" alt="..."
                        width={'15rem'} height={'100rem'}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <p className="card-text">${product.price}</p>
                        <Link to={`/detail/${product.id}`} className="btn btn-primary">By now</Link>
                    </div>
                </div>

            </div>
        </>
    )
}
