import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

export const fetchProduct = createAsyncThunk(
    'products/fetchProducts',
    async (title) => {
        const {request} = useHttp();
        return await request(`http://localhost:3001/${title}`);
        
    }

); 

const ProductSlice = createSlice({
    name: 'products',
    initialState: {
        products:[],
        productsLoadingStatus : 'idle'
    },
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProduct.pending, state => {state.productsLoadingStatus = 'loading'})
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.productsLoadingStatus = 'idle';
                state.products = action.payload;
            })
            .addCase(fetchProduct.rejected, state => {
                state.productsLoadingStatus = 'error';
            })
            .addDefaultCase(() => {})
    }

    }
)

const {reducer} = ProductSlice;

export default reducer;



