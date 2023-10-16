// import "./App.css";

// import "../src/assets/css/index.css";

// import "bootstrap/dist/css/bootstrap.min.css";
// import router from "./router";
// import { RouterProvider } from "react-router-dom";

// function App() {
//   return (
//     <>
//       <RouterProvider router={router}></RouterProvider>
//     </>
//   );
// }
// export default App;

import React, { useState, useEffect } from 'react';
import './App.css';
import Index from './page';
import Forget from './page/Authen/forgotPassword/fogotPassword';
import Login from './page/Authen/loginPage/login';
import Checkout from './page/cart-checkout/checkout';
import Cart from './page/cart/cart';
import StaffPage from './page/rolePage/staffPage';
import './assets/css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderLayout from './HeaderLayout';
import Dashboard from './page/dashBoard';
import TableUser from './page/TableUser';
import AddPage from './page/User/AddPage';
import TableAnimal from './page/Animal/TableAnimal';
import TableFood from './page/Food/TableFood';
import SideMenu from './page/rolePage/test';
import HeaderLayoutStaff from './HeaderLayoutStaff';
import HeaderLayOutTrainer from './HeaderLayOutTrainer';
import TableStaff from './page/User/TableStaff';
import AddStaff from './page/User/AddStaff';
import OrderTable from './page/Order/OrderTable';
import ViewStaff from './page/User/ViewStaff';

const secretKey = 'your_secret_key';

function App() {
  const userRole = localStorage.getItem("role");
  return (
    <>
      <Router>
        <Routes>
          <Route path="/staff" element={userRole === "STAFF" ? <HeaderLayoutStaff /> : <Login />} >
            <Route path="" element={<Dashboard />}></Route>
            <Route path="1" element={<TableStaff />}></Route>
            <Route path="add" element={<AddStaff />}></Route>
            <Route path="2" element={<TableAnimal />}></Route>
            <Route path="4" element={<OrderTable />}></Route>
            <Route path="profile" element={<ViewStaff />}></Route>
            {/* <Route path="3" element={<TableFood />}></Route> */}
          </Route>
          <Route path="/ZooTrainer" element={userRole === "ZOOTRAINER" ? <HeaderLayOutTrainer /> : <Login />} >
            <Route path="" element={<Dashboard />}></Route>
            <Route path="1" element={<TableUser />}></Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/reset" element={<Forget />}></Route>
          <Route path="/" element={<Index />}></Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;