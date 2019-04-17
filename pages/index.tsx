import * as React from 'react'
import Head from 'next/head'
import { Layout, Menu, Icon } from 'antd'
import ContentView from '../components/ContentView'
import 'antd/dist/antd.less'

const { Sider, Content } = Layout

const Home: React.FunctionComponent = (_props: any): JSX.Element => {
  const [current, setCurrent] = React.useState('2.2')

  const handleClick = (event: { item: any; key: string; keyPath: string[] }) => {
    setCurrent(event.key)
  }

  return (
    <>
      <Head>
        <title>UO ArmA Dashboard</title>
      </Head>
      <Layout style={{ height: '100vh', width: '100vw' }}>
        <Sider>
          <a href="https://unitedoperations.net/" target="_blank">
            <img
              style={{ marginTop: '1em', width: '13em' }}
              src="https://unitedoperations.net/forums/uploads/monthly_2019_03/scooby_banner_bg.png.ab378721dd622c48a2baf903f5aeca34.png"
            />
          </a>
          <Menu
            theme="dark"
            mode="inline"
            onClick={handleClick}
            defaultOpenKeys={['2']}
            defaultSelectedKeys={['2.2']}
          >
            <Menu.Item key="1">
              <Icon type="dashboard" />
              <span>Dashboard</span>
            </Menu.Item>
            <Menu.SubMenu
              key="2"
              title={
                <span>
                  <Icon type="folder-open" />
                  <span>Missions</span>
                </span>
              }
            >
              <Menu.Item key="2.1">
                <Icon type="table" />
                <span>Mission List</span>
              </Menu.Item>
              <Menu.Item key="2.2">
                <Icon type="file-add" />
                <span>Submit</span>
              </Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Content>
            <ContentView selected={current} />
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default Home
