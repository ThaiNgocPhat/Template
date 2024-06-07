// const localStorageMiddleware = store => next => action => {
//     const result = next(action);
//     if (['ADD_TO_CART', 'INCREASE_QUANTITY', 'DECREASE_QUANTITY', 'REMOVE_FROM_CART'].includes(action.type)) {
//       const state = store.getState();
//       localStorage.setItem('order', JSON.stringify(state.order));
//     }
//     return result;
//   };
  
//   export default localStorageMiddleware;
  