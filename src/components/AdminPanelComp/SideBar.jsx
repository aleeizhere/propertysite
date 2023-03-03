import React, { useState } from "react";
import logo from "../../assets/stake-logo.svg";
import {
  WalletOutlined,
  UserOutlined,
  LogoutOutlined,
  MoneyCollectOutlined,
  BankOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Divider, Avatar } from "antd";
import { Link } from "react-router-dom";
const { Content, Sider } = Layout;
import "../../components/Sidebar.css";
import styles from "../../style";

// const items = [
//   UploadOutlined, UserOutlined, VideoCameraOutlined
// ].map((icon, index) => ({
//   key: String(index + 1),
//   icon: React.createElement(icon),
//   label: `nav ${index + 1}`,
// }));

const SideBar = ({ component, selectedKey }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const handleMenuClick = (e) => {
    setSelectedMenu(e.key);
  };

  const menus = [
    { name: "Properties", icon: WalletOutlined, linkTo: "/adminPanel" },
    {
      name: "Purchase Requests",
      icon: MoneyCollectOutlined,
      linkTo: "/purchaseRequests",
    },
    { name: "Users List", icon: UserOutlined, linkTo: "/usersList" },
    { name: "Rent", icon: MoneyCollectOutlined, linkTo: "/rentDetails" },
    { name: "Bank Info", icon: BankOutlined, linkTo: "/bankDetails" },
  ];

  return (
    <Layout>
      <Sider
        theme="light"
        width={"270px"}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log("broken", broken);
        }}
        onCollapse={toggleSidebar}
        collapsed={!sidebarOpen}
        className={`${sidebarOpen ? " ant-layout-sider-open" : ""}`}
      >
        <div
          key={0}
          style={{ height: "50px", margin: "10px", padding: "10px" }}
        >
          <Link to="/landingPage">
            {/* <img src={logo} alt="" /> */}
            <img
              src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/secured-attachments/messaging_message/attachment/34b888a1ed89f4cfe853df9f4e05b364-1675240313820/logo%20600.png?__cld_token__=exp=1675861231~hmac=c2ab20b9f43a516b7ad1ea9fb6649463aba0f4641206da44c100a4f060502844"
              alt=""
              className="w-40"
            />
          </Link>
        </div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={[selectedKey]}
          style={{ fontFamily: "Poppins", height: "100vh" }}
          onClick={handleMenuClick}
        >
          <Divider />
          {menus.map((menu, i) => (
            <Menu.Item key={i + 1}>
              <Link
                to={menu?.linkTo}
                key={i}
                className="flex items-center text-lg gap-3.5 font-medium"
              >
                {React.createElement(menu?.icon)}
                <h2 className="whitespace-pre">{menu?.name}</h2>
              </Link>
            </Menu.Item>
          ))}
          <Divider />

          <Menu.Item key={6}>
            <div className="flex items-center gap-2">
              <Avatar
                icon={<LogoutOutlined />}
                className={`${styles.flexCenter}`}
              />
              <h1 className="text-lg font-medium">Logout</h1>
            </div>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        {/* <Header
          style={{
            padding: 0,
          }}
        /> */}

        <Content
          style={{
            margin: "25px 10px 0",
            fontFamily: "Poppins",
          }}
          className={
            sidebarOpen
              ? "translate-x-[90px] md:translate-x-0 overflow-hidden"
              : ""
          }
        >
          <div
            style={{
              // padding: 23,
              minHeight: 360,
            }}
            className={`p-2 md:p-6 lg:p-8 `}
          >
            <div>{component}</div>
          </div>
        </Content>
        {/* <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  );
};

export default SideBar;
