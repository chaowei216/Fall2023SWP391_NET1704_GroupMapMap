import { createBrowserRouter } from "react-router-dom";
import Index from "./page";
import Login from "./page/Authen/loginPage/login";
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
        path:"cart",
        element:<Cart/>,
    },
    {
        path:"/staff",
        element:<StaffPage/>

    }
])
export default router