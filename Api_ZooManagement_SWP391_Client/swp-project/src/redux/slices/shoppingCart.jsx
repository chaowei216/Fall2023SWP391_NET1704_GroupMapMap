import { createSlice } from "@reduxjs/toolkit";


const initialState = [];

const shoppingSlice = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    addItem(state, action) {
      const { ticketId, type, price, imageSrc } = action.payload;
      const existingItemIndex = state.findIndex((item) => item.id === ticketId);

      console.log(action.payload);
      if (existingItemIndex !== -1) {
        // Nếu sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng lên 1
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
    
    updateShoppingCart(state, action) {
      const { id, newQuantity } = action.payload;
      const productToUpdate = state.find((product) => product.id === id);

      if (productToUpdate) {
        productToUpdate.quantity = newQuantity;

        // Cập nhật giá tiền cho sản phẩm khi số lượng thay đổi
        productToUpdate.totalPrice = productToUpdate.price * newQuantity;
      }
    },
    editItem() {},
  },
});

export const { addItem, updateShoppingCart, countTotal, removeItem } = shoppingSlice.actions;
export default shoppingSlice.reducer;
