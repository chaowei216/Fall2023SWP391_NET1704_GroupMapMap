import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Badge, Drawer, Image, List, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";
import '../../assets/css/dashboard.css';
function AppHeader({OpenSidebar}) {
  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  return (
    <div className="AppHeader">
      <div className="menu-icon">
        <BsJustify className="icon"  onClick={OpenSidebar} />
      </div>  
      <Image
        width={90}
        src="https://img.freepik.com/premium-vector/zoo-logo-design-vector-illustration_742779-149.jpg?w=2000"
      ></Image>
      {/* <Typography.Title style={{ marginBottom: "0" }}>
        Aamir's Dashboard
      </Typography.Title> */}
      <Space>
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
