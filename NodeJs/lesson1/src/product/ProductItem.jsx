import React from 'react'

const ProductItem = ({ProductItem}) => {
  // useState và useEffect
  const [task, setTask] = React.useState(ProductItem)

  return (
    <>
    <tr>
                <th scope="row">{ProductItem.id}</th>
                <td>{ProductItem.title}</td>
                <td>{ProductItem.status}</td>
                <td>
                    <button className='btn btn-warning'>Sửa</button>
                    <button className='btn btn-danger ms-2'>Xoá</button>
                </td>
            </tr>


    </>
  )
}

export default ProductItem