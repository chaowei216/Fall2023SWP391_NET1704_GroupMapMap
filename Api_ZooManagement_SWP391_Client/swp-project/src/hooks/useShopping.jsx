import { useDispatch, useSelector } from "react-redux"
import { addItem } from "../redux/slices/shoppingCart";
const useShopping =()=>{
    const dispatch =useDispatch();
    const shoppingCart=useSelector((state)=>state.shopping);
    const handleAddItem=(item)=>{
        dispatch (addItem(item));  
    }
    const updateLocalStorage = (cart) => {
        // Chuyển đổi dữ liệu giỏ hàng sang chuỗi JSON và lưu vào localStorage
        localStorage.setItem("shoppingCart", JSON.stringify(cart));
      };
    const handleRemoveItem=()=>{}
    const handleEditItem=()=>{}
    return {shoppingCart,handleAddItem,updateLocalStorage}
}
export default useShopping