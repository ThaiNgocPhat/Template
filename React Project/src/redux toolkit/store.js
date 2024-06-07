import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer
    }
});

export default store;



//cart component
//import {addItem} from '../reduxToolkit/cartSlice';

//const dispatch = useDispatch();
//const cartItem = useSelector(productSelector);