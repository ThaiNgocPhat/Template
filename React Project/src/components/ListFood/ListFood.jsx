import api from '../../services/api'
import './ListFood.css';
import { Navigate } from 'react-router-dom';

export default function ListFood() {
  const {foods} = api;
  const handleDetails = (id) => {
    const order = JSON.parse(localStorage.getItem('order')) || [];
    const food = foods.find((food) => food.id === id);
    const orderFood = order.find((orderFood) => orderFood.id === id);

    if (orderFood) {
      orderFood.quantity += 1;
    } else {
      order.push({ ...food, quantity: 1 });
    }

    localStorage.setItem('order', JSON.stringify(order));
    alert('Đặt món thành công');
    Navigate('/Cart')
  }

  return (
    <>
      <h1>Quán ăn nổi bật</h1>
      <div id='list-food'>
        {foods.map((food) => (
          <div key={food.id} className='list-food'>
            <img src={food.image} alt={food.name} />
            <h3>{food.name}</h3>
            <p>Restaurant: {food.restaurant}</p>
            <p>Address: {food.address}</p>
            <p>Price: {food.price}</p>
            <p>Review: {food.review}</p>
            <button onClick={() => handleDetails(food.id)}>Đặt món</button>
          </div>
        ))}
      </div>
    </>
  );
}
