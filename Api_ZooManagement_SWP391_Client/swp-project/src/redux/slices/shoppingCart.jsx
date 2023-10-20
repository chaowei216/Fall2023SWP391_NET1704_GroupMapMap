import { createSlice } from "@reduxjs/toolkit";


const initialState = [];

const shoppingSlice = createSlice({
  name: "shopping",
  initialState,
  reducers:
   {setShoppingCart: (state, action) => {
    return action.payload;
  },
    addItem(state, action) {
      const { ticketId, type, price, imageSrc } = action.payload;
      const existingItemIndex = state.findIndex((item) => item.id === ticketId);

      console.log(action.payload);
      if (existingItemIndex !== -1) {
        state[existingItemIndex].quantity += 1;
      } else {
        state.push({
          id : ticketId,
          name: type,
          price: price,
          imageSrc,
          quantity: 1, 
        });
      }
    },
    
    removeItem() {},
    setShoppingCart: (state, action) => {
      return action.payload;
    },
    
    updateShoppingCart(state, action) {
      const { id, newQuantity } = action.payload;
      const productToUpdate = state.find((product) => product.id === id);

      if (productToUpdate) {
        productToUpdate.quantity = newQuantity;
        productToUpdate.totalPrice = productToUpdate.price * newQuantity;
      }
    },
    editItem() {},
    countTotal(state) {
      let totalQuantity = 0;
      state.forEach((product) => {
        totalQuantity += product.quantity;
      });
      return totalQuantity;
    },
  },
});

<<<<<<< HEAD
export const { addItem, updateShoppingCart, countTotal, removeItem, setShoppingCart } = shoppingSlice.actions;
=======
export const { addItem, updateShoppingCart, countTotal, removeItem,setShoppingCart } = shoppingSlice.actions;
>>>>>>> d37f7ef (changes css)
export default shoppingSlice.reducer;

