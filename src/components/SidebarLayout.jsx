import React from 'react'
import logo from '../assets/stake-logo.svg'
import styles from '../style';
import { WalletOutlined, LineChartOutlined, StarOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, Divider, Avatar, Tabs } from 'antd';
import PropertiesTabs from '../pages/PropertiesTabs';
import { Link } from 'react-router-dom';
const { Content, Sider } = Layout;
const { TabPane } = Tabs;
// const items = [
//   UploadOutlined, UserOutlined, VideoCameraOutlined
// ].map((icon, index) => ({
//   key: String(index + 1),
//   icon: React.createElement(icon),
//   label: `nav ${index + 1}`,
// }));
const SidebarLayout = ({component,selectedKey}) => {


  const menus = [
    { name: "Properties", icon: WalletOutlined, linkTo: "/homePage" },
    { name: "Wallet", icon: WalletOutlined, linkTo:"/wallet" },
    { name: "Portfolio", icon: LineChartOutlined, linkTo:"/portfolio" },
    { name: "Rewards", icon: StarOutlined },
    { name: "My cart", icon: ShoppingCartOutlined },

  ];

  return (
    <Layout className='' >
      <Sider
        theme='light'
        width={"270px"}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu theme="light"
          className=''
          mode="inline"
          defaultSelectedKeys={[selectedKey]}>

          <Menu.Item key={0} style={{ height: '50px', margin: '10px' }}>
            <img src={logo} alt="" />
          </Menu.Item>
          <Divider />
          {menus.map((menu, i) => (
            <Menu.Item key={i+1}>
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
        >
          <div
            style={{
              // padding: 23,
              minHeight: 360,
            }}
            className="p-2 md:p-6 lg:p-8 "
          >
            <div>
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