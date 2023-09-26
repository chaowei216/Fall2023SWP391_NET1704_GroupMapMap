import { createBrowserRouter } from "react-router-dom";
import Index from "./page";
import Login from "./page/Authen/loginPage/login";
const router = createBrowserRouter([
    {
        path:"/",
        element:<Index/>,
    },
    {
        path:"/login",
        element:<Login/>,
    }
])
export default router