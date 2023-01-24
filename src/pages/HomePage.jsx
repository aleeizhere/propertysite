import React from 'react'
import logo from '../assets/stake-logo.svg'
import styles from '../style';
import { WalletOutlined, LineChartOutlined, StarOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, Divider, Avatar, Tabs } from 'antd';
import PropertiesTabs from '../components/PropertiesTabs';
const { Content, Sider } = Layout;
const { TabPane } = Tabs;
// const items = [
//   UploadOutlined, UserOutlined, VideoCameraOutlined
// ].map((icon, index) => ({
//   key: String(index + 1),
//   icon: React.createElement(icon),
//   label: `nav ${index + 1}`,
// }));
const HomePage = () => {

  const menus = [
    { name: "Properties", icon: WalletOutlined },
    { name: "Wallet", icon: WalletOutlined },
    { name: "Portfolio", icon: LineChartOutlined },
    { name: "Rewards", icon: StarOutlined },
    { name: "My cart", icon: ShoppingCartOutlined },

  ];

  return (
    <Layout className='h-full w-full' >
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
          className='h-screen '
          mode="inline"
          defaultSelectedKeys={['1']}>

          <Menu.Item style={{ height: '50px', margin: '10px' }}>
            <img src={logo} alt="" />
          </Menu.Item>
          <Divider />
          {/* <h1>fukk</h1> */}
          {menus.map((menu, i) => (
            <Menu.Item >
              <div key={i} className="flex items-center text-lg gap-3.5 font-medium">
                {React.createElement(menu?.icon)}
                <h2 className="whitespace-pre">{menu?.name}</h2>
              </div>
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
            margin: '24px 16px 0',
          }}
        >
          <div
            style={{
              padding: 23,
              minHeight: 360,
            }}
          >
            <h1 className={`${styles.boldText} text-3xl`}>Properties</h1>
            <div>
              <PropertiesTabs />
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

export default HomePage