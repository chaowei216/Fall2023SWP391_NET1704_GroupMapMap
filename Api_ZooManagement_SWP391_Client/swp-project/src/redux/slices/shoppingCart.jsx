import { createSlice } from "@reduxjs/toolkit";
const initialState=[];
const shoppingSlice = createSlice({
    name:"shopping",
    initialState,
    reducers:{
        addItem(state,action){
          
          return [...state,action.payload];
            
        },
        removeItem(){},
        countTotal(){},
        editItem(){},
    }
})
 export const {addItem,editItem,countTotal,removeItem} =shoppingSlice.actions;
export default shoppingSlice.reducer