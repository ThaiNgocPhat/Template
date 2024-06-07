import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Cart.css';
// import { increaseQuantity, decreaseQuantity, removeFromCart, removeAllFromCart } from '../../redux toolkit/store';

export default function Cart() {
  const [localOrder, setLocalOrder] = useState([]);
  const order = useSelector(state => state.cart.cart) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    const storedOrder = JSON.parse(localStorage.getItem('cart')) || [];
    setLocalOrder(storedOrder);
  }, []);

  const currentOrder = (order.length > 0 ? order : localOrder) || [];

  if (currentOrder.length === 0) {
    return <p>Không có món ăn nào được đặt</p>;
  }

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
  };

  const calculateTotal = (price, quantity) => {
    if (!price) return '0 VND';
    const priceNumber = parseFloat(price.replace(/,/g, '').replace(' VND', ''));
    const total = priceNumber * quantity;
    return total.toLocaleString('vi-VN') + ' VND';
  };

  const calculateGrandTotal = (items) => {
    return items.reduce((acc, item) => {
      const priceNumber = parseFloat(item.price.replace(/,/g, '').replace(' VND', ''));
      return acc + priceNumber * item.quantity;
    }, 0).toLocaleString('vi-VN') + ' VND';
  };

  const handlePayment = () => {
    const existingPayments = JSON.parse(localStorage.getItem('payment')) || [];
    const currentOrder = JSON.parse(localStorage.getItem('cart'));
    if (!currentOrder) {
      alert('No order found');
      return;
    }
    existingPayments.push(currentOrder);
    localStorage.setItem('payment', JSON.stringify(existingPayments));
    dispatch(removeAllFromCart());
    localStorage.removeItem('cart');
    alert('Thanh toán thành công');
    window.location.href = '/cảt';
  };

  return (
    <>
      <h1>Đơn hàng</h1>
      <div className='details'>
        <table>
          <thead>
            <tr>
              <th>Hình Ảnh</th>
              <th>Tên Sản Phẩm</th>
              <th>Giá</th>
              <th>Số Lượng</th>
              <th>Thành Tiền</th>
              <th>Hành Động</th>
            </tr>
          </thead>
          <tbody>
            {currentOrder.map(item => (
              <tr key={item.id}>
                <td data-label="Hình Ảnh"><img src={item.image} alt={item.name} style={{ width: '150px', height: '150px' }}/></td>
                <td data-label="Tên Sản Phẩm">{item.name}</td>
                <td data-label="Giá">{item.price}</td>
                <td data-label="Số Lượng">
                  <button onClick={() => handleDecrease(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrease(item.id)}>+</button>
                </td>
                <td data-label="Thành Tiền">{calculateTotal(item.price, item.quantity)}</td>
                <td data-label="Hành Động">
                  <button onClick={() => handleDelete(item.id)}>Xoá</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='grand-total'>
          <h2>Tổng tiền: {calculateGrandTotal(currentOrder)}</h2>
          <button onClick={handlePayment}>Thanh Toán</button>
        </div>
      </div>
    </>
  );
}
