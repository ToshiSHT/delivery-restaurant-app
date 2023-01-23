import { configureStore } from '@reduxjs/toolkit'
import products from '../components/productList/ProductSlice';
import shopBasket from '../components/shopBasket/shopBasketSlise';


export const store = configureStore({
    reducer: {
      products,
      shopBasket
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
  });