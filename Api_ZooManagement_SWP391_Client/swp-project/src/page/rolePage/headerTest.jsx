import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Badge, Drawer, Image, List, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import { Avatar, Layout, Menu, theme } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";
import "../../assets/css/dashboard.css";

function AppHeader({ OpenSidebar }) {
  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const dataUser = JSON.parse(localStorage.getItem("dataUser"));
  const [showLogout, setShowLogout] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const nativigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("dataUser");
    nativigate('/')
  };
  const handleChange = () => {
      nativigate('/staff')
  }
  return (
    <div className="AppHeader">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      <Image
        width={90}
        src="https://img.freepik.com/premium-vector/zoo-logo-design-vector-illustration_742779-149.jpg?w=2000"
      ></Image>
      {/* <Typography.Title style={{ marginBottom: "0" }}>
        Aamir's Dashboard
      </Typography.Title> */}

      <Space>
        <div
          style={{ display: "flex", alignItems: "center" }}
          onMouseEnter={() => setShowLogout(true)}
          onMouseLeave={() => setShowLogout(false)}
        >
          <Avatar
            size="default"
            icon={<UserOutlined />}
            style={{ marginRight: "10px", color: "black" }}
          />
          <span style={{ marginRight: "20px", cursor: "pointer" }} onClick={handleChange} 
>
            {dataUser && dataUser.data
              ? `${dataUser.data.first_name} ${dataUser.data.last_name}`
              : "User Name"}
          </span>
          {showLogout && (
            <span
              style={{ marginLeft: "8px", cursor: "pointer" }}
              onClick={handleLogout}
            >
              Đăng xuất
            </span>
          )}
        </div>
        <Badge count={10} dot>
          <MailOutlined style={{ fontSize: 24 }}></MailOutlined>
        </Badge>
        <Badge count={24} dot>
          <BellFilled style={{ fontSize: 24 }}></BellFilled>
        </Badge>
      </Space>
    </div>
  );
}
export default AppHeader;
