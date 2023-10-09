import React, { useState } from "react";
import AppHeader from "./page/rolePage/headerTest";
import SideMenuTest from "./page/rolePage/SideMenuTest";
import { Outlet } from "react-router-dom";
import '../src/assets/css/dashboard.css';
function HeaderLayout() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  return (
    <>
      <div className="App">
        <AppHeader OpenSidebar={OpenSidebar} />
        <div className="SideMenuAndPageContent">
          <SideMenuTest
            openSidebarToggle={openSidebarToggle}
            OpenSidebar={OpenSidebar}
          ></SideMenuTest>
          <Outlet></Outlet>
        </div>
        {/* <Footer
                style={{
                    textAlign: 'center',
                }}
            ></Footer> */}
      </div>
    </>
  );
}

export default HeaderLayout;
