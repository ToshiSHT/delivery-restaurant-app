import { configureStore } from '@reduxjs/toolkit'
import products from '../components/productList/ProductSlice';
import shopBasket from '../components/shopBasket/shopBasketSlise';
import sideMenuSlice from '../components/sidemenu/sideMenuSlice';


export const store = configureStore({
    reducer: {
      products,
      shopBasket,
      sideMenuSlice
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
  });