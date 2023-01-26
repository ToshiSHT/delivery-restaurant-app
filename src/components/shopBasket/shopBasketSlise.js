import { createSlice} from "@reduxjs/toolkit";



const ProductSlice = createSlice({
    name: 'shopBasket',
    initialState: {
        isOpen:false,
        addProductList : [],
    },
    reducers:{
        openBasket: (state) => {state.isOpen = true},
        closeBasket:(state) => {state.isOpen = false},
        addProductInBasket: (state,action) => {state.addProductList = [...state.addProductList , action.payload]},
        removeProduct: (state,action) => {
            state.addProductList = state.addProductList.filter(item => item.id !== action.payload)
        },
        updateProductBasket: (state,action) => {
            state.addProductList = state.addProductList.map(item => {
                if (item.id === action.payload.id) {
                    item.countProd = item.countProd + action.payload.count
                }
               return item
            })
        }
    },
    

    }
)

const {reducer,actions} = ProductSlice;
export const {openBasket,closeBasket,addProductInBasket,removeProduct, updateProductBasket} = actions;
export default reducer;

