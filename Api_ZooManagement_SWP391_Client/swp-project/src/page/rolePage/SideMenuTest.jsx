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
    getItem("User", "g1", null, [getItem("User", "1")], "group"),
    getItem(
      "Manage",
      "g2",
      null,
      [getItem("Order", "3"), getItem("Animal", "2"), getItem("News", "news")],
      "group"
    ),
  ]),
  getItem("Cage & Area", "sub2", <AppstoreOutlined />, [
    getItem("View Area", "/admin/area"),
    getItem("View Cage", "/admin/cage"),
    getItem("View FeedBack", "/admin/feedback"),
    getItem("Submenu", "sub3", null, [
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
    ]),
  ]),
];
const SideMenuTest = ({ openSidebarToggle, OpenSidebar }) => {
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
      <Menu
        // theme="blue"
        style={{
          height: 1000,
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

      {/* </aside> */}
    </div>
  );
};
export default SideMenuTest;
