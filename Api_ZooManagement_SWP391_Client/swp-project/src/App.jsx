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

const secretKey = 'your_secret_key';

function App() {
  const userRole = localStorage.getItem("role");
  return (
    <>
      <Router>
        <Routes>
          <Route path="/staff" element={userRole === "STAFF" ? <HeaderLayout /> : <Login />} >
            <Route path="" element={<Dashboard />}></Route>
            <Route path="1" element={<TableUser />}></Route>
          </Route>
          <Route path="/ZooTrainer" element={userRole === "ZOOTRAINER" ? <HeaderLayout /> : <Login />} >
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