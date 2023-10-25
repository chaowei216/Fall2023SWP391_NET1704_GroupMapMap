import React from "react";
import { useEffect, useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  AlertOutlined,
} from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, Switch, Divider } from "antd";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Zoo Management", "sub1", <AlertOutlined />, [
    getItem(
      "Information",
      "g1",
      null,
      [getItem("Profile", "profile", <AlertOutlined />)],
      "group"
    ),
    getItem(
      "Manage",
      "g2",
      null,
      [
        getItem("ZooTrainer", "/staff/1", <AlertOutlined />),
        getItem("Animal", "2", <AlertOutlined />),
        getItem("Order", "4", <AlertOutlined />),
        getItem("News", "news", <AlertOutlined />),
      ],
      "group"
    ),
  ]),
  getItem("Area & Cage Management", "sub2", <AppstoreOutlined />, [
    getItem("Area", "/staff/area"),
    getItem("Cage", "/staff/cage"),
    getItem("Food", "/staff/food"),
    getItem("Submenu", "sub3", null, [
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
    ]),
  ]),
  {
    type: "divider",
  },
  // getItem("Navigation Three", "sub4", <SettingOutlined />, [
  //     getItem("Option 9", "9"),
  //     getItem("Option 10", "10"),
  //     getItem("Option 11", "11"),
  //     getItem("Option 12", "12"),
  // ])
];
const SideMenuStaff = ({ openSidebarToggle, OpenSidebar }) => {
  const [theme, setTheme] = useState("light");
  const [current, setCurrent] = useState("1");
  const [selectedKeys, setSelectedKeys] = useState("/");
  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);
  const navigate = useNavigate();
  return (
    <div
      className={openSidebarToggle ? "sidebar-responsive" : "Slide-Container"}
    >
      {/* <aside
        id="sidebar"
      > */}
      {/* <Switch
        checked={theme === "dark"}
        onChange={changeTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
        style={{ margin: "10px" }}
      /> */}
      <div
        style={{
          backgroundColor: "wheat",
          borderRadius: "10px 10px 10px 10px",
        }}
      >
        <Menu
          // theme="blue"
          style={{
            height: "128vh",
            backgroundColor: "wheat",
            borderRadius: "10px 10px 10px 10px",
          }}
          onClick={(item) => {
            //item.key
            navigate(item.key);
            setCurrent(item.key);
          }}
          // selectedKeys={[current]}
          // defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
        />
      </div>

      {/* </aside> */}
    </div>
  );
};
export default SideMenuStaff;
