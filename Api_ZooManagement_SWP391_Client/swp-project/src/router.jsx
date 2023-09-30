import { createBrowserRouter } from "react-router-dom";
import Index from "./page";
import Login from "./page/Authen/loginPage/login";
import Cart from "./page/cart/cart";
import AppHeader from "./page/rolePage/headerTest";
import SideMenuTest from "./page/rolePage/SideMenuTest";
import { Avatar, Layout, Menu, theme } from "antd";
import { Outlet } from "react-router-dom";
import TableUser from "./page/TableUser";
import { useState } from "react";
import HeaderLayout from "./HeaderLayout";
import AddPage from "./page/User/AddPage";

// const HeaderLayout = () => (

// );

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
  {
    path: "/staff",
    element: <HeaderLayout />,
    children: [
      {
        path: "1",
        element: <TableUser />,
      },
      {
        path: "add",
        element: <AddPage></AddPage>,
      },
      {
        path: "2",
        element: <div>foo</div>,
      },
      {
        path: "4",
        element: <div>foo</div>,
      },
    ],
  },
]);
export default router;
