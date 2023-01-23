import { createSlice} from "@reduxjs/toolkit";



const ProductSlice = createSlice({
    name: 'shopBasket',
    initialState: {
        isOpen:false,
        addProductList : []
    },
    reducers:{
        openBasket: (state) => {state.isOpen = true},
        closeBasket:(state) => {state.isOpen = false},
        addProduct: (state,action) => {state.addProductList = [...state.addProductList , action.payload]},
        removeProduct: (state,action) => {
            state.addProductList = state.addProductList.filter(item => item.id !== action.payload)
        }
    },
    

    }
)

const {reducer,actions} = ProductSlice;
export const {openBasket,closeBasket,addProduct,removeProduct} = actions;
export default reducer;

