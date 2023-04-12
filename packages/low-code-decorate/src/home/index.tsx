import { useState } from 'react';
import { Layout, Menu } from 'antd';

const { Header, Content, Sider } = Layout;




export const home = () => {

  return (
    <Layout>
      <Header >header</Header>
      <Layout>
        <Sider>
          sider
        </Sider>
        <Content>
          contet
        </Content>
      </Layout>
    </Layout>
  )
}