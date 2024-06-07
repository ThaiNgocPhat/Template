import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: localStorage.getItem('cart') === null ? [] : JSON.parse(localStorage.getItem('cart'))
};

const saveToLocalStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.cart.find(product => product.id === action.payload.id);
            if (existingProduct) {
                const updatedCart = state.cart.map(product => {
                    if (product.id === action.payload.id) {
                        return { ...product, quantity: product.quantity + 1 };
                    }
                    return product;
                });
                saveToLocalStorage(updatedCart);
                state.cart = updatedCart;
            } else {
                const newCart = [...state.cart, { ...action.payload, quantity: 1 }];
                saveToLocalStorage(newCart);
                state.cart = newCart;
            }
        },
        increaseQuantity: (state, action) => {
            const increasedCart = state.cart.map(product => {
                if (product.id === action.payload.id) {
                    return { ...product, quantity: product.quantity + 1 };
                }
                return product;
            });
            saveToLocalStorage(increasedCart);
            state.cart = increasedCart;
        },
        decreaseQuantity: (state, action) => {
            const decreasedCart = state.cart.map(product => {
                if (product.id === action.payload.id) {
                    return { ...product, quantity: product.quantity - 1 };
                }
                return product;
            });
            saveToLocalStorage(decreasedCart);
            state.cart = decreasedCart;
        },
        removeFromCart: (state, action) => {
            const filteredCart = state.cart.filter(product => product.id !== action.payload.id);
            saveToLocalStorage(filteredCart);
            state.cart = filteredCart;
        }
    }
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
