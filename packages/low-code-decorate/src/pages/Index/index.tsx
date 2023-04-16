import { useState } from 'react';
import { Layout, Menu } from 'antd';
import { PageHeader } from '../../components/PageHeader';
import { LeftMenu } from './components/LeftMenu';
import { RightProperty } from './components/RightProperty';
import { CenterCanvas } from './components/CenterCanvas';

const { Header, Content, Sider } = Layout;




export const Index = () => {

  return (
    <Layout>
      <Header ><PageHeader /></Header>
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