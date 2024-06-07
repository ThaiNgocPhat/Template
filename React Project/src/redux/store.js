// import { createStore, applyMiddleware } from 'redux';
// import localStorageMiddleware from './localStorageMiddleware';

// const initialState = {
//   order: JSON.parse(localStorage.getItem('order')) || []
// };

// // Tạo reducer
// function orderReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       const existingItem = state.order.find(item => item.id === action.payload.id);
//       if (existingItem) {
//         return {
//           ...state,
//           order: state.order.map(item =>
//             item.id === action.payload.id
//               ? { ...item, quantity: item.quantity + 1 }
//               : item
//           )
//         };
//       }
//       return { ...state, order: [...state.order, { ...action.payload, quantity: 1 }] };
//     case 'INCREASE_QUANTITY':
//       return {
//         ...state,
//         order: state.order.map(item =>
//           item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
//         )
//       };
//     case 'DECREASE_QUANTITY':
//       return {
//         ...state,
//         order: state.order.map(item =>
//           item.id === action.payload && item.quantity > 1
//             ? { ...item, quantity: item.quantity - 1 }
//             : item
//         )
//       };
//     case 'REMOVE_FROM_CART':
//       return {
//         ...state,
//         order: state.order.filter(item => item.id !== action.payload)
//       };
//     case 'REMOVE_ALL_FROM_CART':
//       return {
//         ...state,
//         order: []
//       };
//     default:
//       return state;  
//   }
// }

// const store = createStore(orderReducer, applyMiddleware(localStorageMiddleware));

// export default store;
