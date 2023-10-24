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
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import '../node_modules/font-awesome/css/font-awesome.min.css'; 
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
import TableAnimalDetail from './page/Animal/TableAnimalDetail';
import New from './page/New/New';
import Loading from './page/cart-checkout/loadingPage';
import Contact from './page/Contact/Contact';
import TableNews from './page/News/TableNews';
import TableCage from './page/Cage/TableCage';
import TableArea from './page/Area/TableArea';
import TableNewsByAdmin from './page/News/TableNewsByAdmin';
import TableFeedBack from './page/FeedBack/TableFeedBack';

const secretKey = 'your_secret_key';

function App() {
  // const userRole = localStorage.getItem("role");
  // console.log(userRole);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/admin" element={<HeaderLayout />} >
            <Route path="" element={<Dashboard />}></Route>
            <Route path="1" element={<TableUser />}></Route>
            <Route path="add" element={<AddPage />}></Route>
            <Route path="2" element={<TableAnimal />}></Route>
            <Route path="3" element={<OrderTable />}></Route>
            <Route path="news" element={<TableNewsByAdmin />}></Route>
            <Route path="cage" element={<TableCage />}></Route>
            <Route path="area" element={<TableArea />}></Route>
            <Route path="feedback" element={<TableFeedBack />}></Route>
            {/* <Route path="3" element={<TableFood />}></Route> */}
          </Route>
          <Route path="/staff" element={<HeaderLayoutStaff />} >
            <Route path="" element={<Dashboard />}></Route>
            <Route path="1" element={<TableStaff />}></Route>
            <Route path="add" element={<AddStaff />}></Route>
            <Route path="2" element={<TableAnimal />}></Route>
            <Route path="4" element={<OrderTable />}></Route>
            <Route path="news" element={<TableNews />}></Route>
            <Route path="profile" element={<ViewStaff />}></Route>
            <Route path="cage" element={<TableCage />}></Route>
            <Route path="area" element={<TableArea />}></Route>
            <Route path="food" element={<TableFood />}></Route>
            {/* <Route path="3" element={<TableFood />}></Route> */}
          </Route>
          <Route path="/ZooTrainer" element={<HeaderLayOutTrainer />}>
            <Route path="" element={<Dashboard />}></Route>
            <Route path="profile" element={<ViewStaff />}></Route>
            <Route path="food" element={<TableFood />}></Route>
            <Route path="2" element={<TableAnimalDetail />}></Route>
          </Route>
          <Route path="/loading" element={<Loading></Loading>} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/reset" element={<Forget />}></Route>
          <Route path="/" element={<Index />}></Route>
          <Route path="/new" element={<New />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;