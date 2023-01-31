import React,{useState} from 'react'
import logo from '../assets/stake-logo.svg'
import { WalletOutlined, LineChartOutlined, StarOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, Divider, Avatar, Tabs } from 'antd';
import { Link } from 'react-router-dom';
const { Content, Sider } = Layout;
import "./Sidebar.css"
// const items = [
//   UploadOutlined, UserOutlined, VideoCameraOutlined
// ].map((icon, index) => ({
//   key: String(index + 1),
//   icon: React.createElement(icon),
//   label: `nav ${index + 1}`,
// }));
const SidebarLayout = ({ component, selectedKey }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const menus = [
    { name: "Properties", icon: WalletOutlined, linkTo: "/homePage" },
    { name: "Wallet", icon: WalletOutlined, linkTo: "/wallet" },
    { name: "Portfolio", icon: LineChartOutlined, linkTo: "/portfolio" },
    { name: "Rewards", icon: StarOutlined },
    { name: "My cart", icon: ShoppingCartOutlined, linkTo: "/cart" },

  ];

  return (
    <Layout className='' >
      <Sider
        theme='light'
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
        <Menu theme="light"
          className=''
          mode="inline"
          defaultSelectedKeys={[selectedKey]}>

          <Menu.Item key={0} style={{ height: '50px', margin: '10px' }}>
            <Link to="/landingPage">
              <img src={logo} alt="" />
            </Link>
          </Menu.Item>
          <Divider />
          {menus.map((menu, i) => (
            <Menu.Item key={i + 1}>
              <Link to={menu?.linkTo} key={i} className="flex items-center text-lg gap-3.5 font-medium">
                {React.createElement(menu?.icon)}
                <h2 className="whitespace-pre">{menu?.name}</h2>
              </Link>
            </Menu.Item>
          ))}
          <Divider />
          <Menu.Item style={{ height: '' }}>
            <div className='flex items-center gap-2'>
              <Avatar icon={<UserOutlined />} />
              <h1 className='text-lg font-medium'>Mark</h1>
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
            margin: '25px 10px 0',
          }}
          className={sidebarOpen ? "translate-x-[90px] md:translate-x-0 overflow-hidden" : ""}
        >
          <div
            style={{
              // padding: 23,
              minHeight: 360,
            }}
            className={`p-2 md:p-6 lg:p-8 `}
          >
            <div >
              {/* <PropertiesTabs /> */}
              {component}
            </div>
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
  )
}


export default SidebarLayout