import { BellFilled, MailOutlined } from "@ant-design/icons";
import React from "react";

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
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import { MDBListGroup, MDBListGroupItem, MDBBadge } from 'mdb-react-ui-kit';
import "../../assets/css/dashboard.css";

function AppHeader({ OpenSidebar }) {
  const role = localStorage.getItem("role");
  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const dataUser = JSON.parse(localStorage.getItem("dataUser"));
  const [listFood, setListFood] = useState([]);
  const [foodNotifications, setFoodNotifications] = useState([]);
  const [foodWarning, setFoodWarning] = useState([]);
  const [showLogout, setShowLogout] = useState(false);
  const userName = localStorage.getItem("name");
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const nativigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("dataUser");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    nativigate('/')
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  useEffect(() => {
    const getList = () => {
      return fetch(`https://localhost:44352/api/Food`).then((data) =>
        data.json()
      );
    };
    let mounted = true;
    getList().then((items) => {
      if (mounted) {
        setListFood(items);
      }
    });
    return () => (mounted = false);
  }, []);
  useEffect(() => {
    const list = [];
    listFood.map((food) => {
      if (food.quantity < 200) {
        list.push(food);
      }
      setFoodNotifications(list);
    })
  }, [listFood])
  useEffect(() => {
    const list = [];
    listFood.map((food) => {
      if (food.quantity < 100) {
        list.push(food);
      }
      setFoodWarning(list);
    })
  }, [listFood])
  const handleClickPop = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }
  const handleClick = () => {
    nativigate('/staff/food')
    setAnchorEl(null)
  }
  const handleChange = () => {
    if (role === "STAFF") {
      nativigate('/staff/profile')
    } else if (role === "ZOOTRAINER") {
      nativigate('/ZooTrainer/profile')
    }
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
      {/* <Typography.Title style={{ marginBottom: "0", fontSize: "30px" }}>
          {role + " " + "Manager"}
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
            {userName && userName != null
              ? `${userName + " ( " + role + " )"}`
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
        <Badge count={foodNotifications.length}>
          <BellFilled style={{ fontSize: 24 }} onClick={handleClickPop}>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
              >
                {foodNotifications && foodNotifications.map((value) => {
                  return (
                    <div key={value.foodId}>
                      <MDBListGroup style={{ minWidth: '22rem', display: "table" }} light>
                        <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
                          <div>
                            <div className='text-muted'><b>Food ID: </b>{value.foodId}</div>
                            <div className='text-muted'><b>Food Name: </b>{value.fName}</div>
                            <div className='text-muted'><b>Quantity: </b>{value.quantity}</div>
                          </div>
                          <MDBBadge className='ms-2' color='warning' style={{ fontSize: "medium" }}>
                            Warning Food
                          </MDBBadge>
                        </MDBListGroupItem>
                      </MDBListGroup>
                    </div>
                  )
                })}
              </Popover>
          </BellFilled>
        </Badge>
        <Button
          variant="contained"
          onClick={handleClickPop}
          style={{
            marginLeft: "20px",
            marginRight: "20px",
            // backgroundColor: "#d9eef7",
            background: "#F3D099",
            fontWeight: "bolder",
            color: "#000080",
          }}
        >
          <Badge count={foodNotifications.length}>
            <BellFilled style={{ fontSize: 24 }}></BellFilled>
          </Badge>
          <MDBBadge className='ms-2' color='danger' style={{ fontSize: "medium" }}>
            {foodNotifications.length}
          </MDBBadge>
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          {foodNotifications && foodNotifications.map((value) => {
            return (
              <div key={value.foodId}>
                <MDBListGroup style={{ minWidth: '22rem', display: "table" }} light>
                  <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
                    <div>
                      <div className='text-muted'><b>Food ID: </b>{value.foodId}</div>
                      <div className='text-muted'><b>Food Name: </b>{value.fName}</div>
                      <div className='text-muted'><b>Quantity: </b>{value.quantity}</div>
                    </div>
                    <MDBBadge className='ms-2' color='warning' style={{ fontSize: "medium" }}>
                      Warning Food
                    </MDBBadge>
                  </MDBListGroupItem>
                </MDBListGroup>
              </div>
            )
          })}
          <div style={{ textAlign: "center" }} onClick={handleClick}>
            <Button>View Problem</Button>
          </div>
        </Popover>

      </Space>
    </div>
  );
}
export default AppHeader;
