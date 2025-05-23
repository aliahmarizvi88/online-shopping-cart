import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slice/cart-slice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
