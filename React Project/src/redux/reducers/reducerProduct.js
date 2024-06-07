// import * as Types from '../contranst/actionType'


// const initState = {
//     cart: localStorage.getItem('cart') === null ? [] : JSON.parse(localStorage.getItem('cart'))
// }
// const saveToLocalStorage = (product) => {
//     localStorage.setItem('cart', JSON.stringify(product));
// }

// const rootReducer = (state = initState(), action) => {
//     switch(action.type){
//         case Types.ADD_TO_CART:
//             const existingProduct = state.find(product => product.id === action.product.id);
//             if(existingProduct){
//                 const updateState = state.map(product => {
//                     if(product.id === action.product.id){
//                         return {...product, quantity: product.quantity + 1}
//                     }
//                     return product;
//                 })
//                 saveToLocalStorage(updateState);
//                 return updateState;
//             }else{
//                 const newProductAdd = [...state, {...action.product, quantity: 1}];
//                 saveToLocalStorage(newProductAdd);
//                 return newProductAdd;
//             }
//         case Types.INCREASE_QUANTITY:
//             const increaseQuantity = state.map(product => {
//                 if(product.id === action.payload.id){
//                     return {...product, quantity: product.quantity + 1}
//                 }
//                 return product;
//             })
//             saveToLocalStorage(increaseQuantity);
//             return increaseQuantity;
//         case Types.DECREASE_QUANTITY:
//             const decreaseQuantity = state.map(product => {
//                 if(product.id === action.payload.id){
//                     return {...product, quantity: product.quantity - 1}
//                 }
//                 return product;
//             })
//             saveToLocalStorage(decreaseQuantity);
//             return decreaseQuantity;
//         case Types.REMOVE_FROM_CART:
//             const removeProduct = state.filter(product => product.id !== action.payload.id);
//             saveToLocalStorage(reremoveProductmove);
//             return removeProduct;
//     }
// }   

// export default rootReducer;