import { useDispatch, useSelector } from "react-redux";
import { addItem, updateShoppingCart } from "../redux/slices/shoppingCart"; // Import cả action updateShoppingCart

const useShopping = () => {
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.shopping);

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleUpdateItemQuantity = (productId, newQuantity) => {
    // Dispatch action updateShoppingCart với productId và newQuantity
    dispatch(updateShoppingCart({ id: productId, newQuantity }));
  };

  const handleRemoveItem = () => {
    // Bạn có thể thêm logic xóa sản phẩm ở đây nếu cần
  };

  const handleEditItem = () => {
    // Bạn có thể thêm logic chỉnh sửa sản phẩm ở đây nếu cần
  };
  const  countTotal=() => {
    dispatch(countTotal());
  };
  
 


  return { shoppingCart, handleAddItem, handleUpdateItemQuantity, handleRemoveItem, handleEditItem,countTotal };
};

export default useShopping;
