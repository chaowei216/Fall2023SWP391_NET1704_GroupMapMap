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
        width={40}
        src="https://yt3.ggpht.com/ytc/AMLnZu83ghQ28n1SqADR-RbI2BGYTrqqThAtJbfv9jcq=s176-c-k-c0x00ffffff-no-rj"
      ></Image>
      <Typography.Title style={{ marginBottom: "0" }}>
        Aamir's Dashboard
      </Typography.Title>
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
