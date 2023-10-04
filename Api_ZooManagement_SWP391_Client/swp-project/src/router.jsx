import { createBrowserRouter } from "react-router-dom";
import Index from "./page";
import Login from "./page/Authen/loginPage/login";
import Checkout from "./page/cart-checkout/checkout";
import Cart from "./page/cart/cart";

import StaffPage from "./page/rolePage/staffPage";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Index/>,
        
    },
    {
        path:"/login",
        element:<Login/>,
    },
    {
        path:"/cart",
        element:<Cart/>,
        
    },
    {
        path:"/staff",
        element:<StaffPage/>
        

    },
    {
        path:"checkout",
        element:<Checkout/>
        

    },
    
    
])
export default router