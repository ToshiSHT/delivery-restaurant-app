import { createSlice} from "@reduxjs/toolkit";



const sideMenuSlice = createSlice({
    name: 'sideMenuSlice',
    initialState: {
        isOpen:false,
        
    },
    reducers:{
        openMenu: (state) => {state.isOpen = true},
        closeSideMenu:(state) => {state.isOpen = false},
       
    },
    

    }
)

const {reducer,actions} = sideMenuSlice ;
export const {openMenu , closeSideMenu} = actions;
export default reducer;
