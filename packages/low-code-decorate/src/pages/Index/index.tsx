// import { useState } from 'react';
import { Layout } from 'antd';
import PageHeader from '../../components/PageHeader';
import { LeftMenu } from './components/LeftMenu';
import { RightProperty } from './components/RightProperty';
import CenterCanvas from './components/CenterCanvas/editor';
import { useReducer, } from 'react';
import { componentList } from './load'
import { curComponentConText } from '@/contexts/componentList'
import curComponentReducer, { initialCurComponent } from '@/reducers/curComponentReducer'
import { ComponentsContext } from '@/contexts';
import { useComponent } from '@/hooks/useComponents'

console.log(componentList)
const { Header, Content, Sider } = Layout;

export const Index = () => {
  const [curComponent, dispatch] = useReducer(curComponentReducer, initialCurComponent)
  const { componentTree, addComponent, selectedIds, setSelectedIds } = useComponent();

  return (
    <ComponentsContext.Provider value={{componentTree, setComponents: addComponent, selectedIds, setSelectedIds}}>
    <curComponentConText.Provider value={{ curComponent, dispatch }}>
      <Layout style={{ color: '#fff', height: '100vh' }}>
        <Header style={{ background: 'rgb(33, 37, 40)' }}><PageHeader /></Header>

        <Layout style={{ height: 'calc(100% - 80px)' }}>
          <Sider collapsible width={200} style={{ background: 'rgb(33, 37, 40)' }}>
            <LeftMenu></LeftMenu>
          </Sider>
          <Content style={{ background: 'rgb(39, 46, 59)' }}>
            <CenterCanvas name='画布区域'></CenterCanvas>
          </Content>
          <Sider width={200} style={{ background: 'rgb(33, 37, 40)' }}>
            <RightProperty></RightProperty>
          </Sider>
        </Layout>
      </Layout>
      </curComponentConText.Provider>
      </ComponentsContext.Provider>
  )
}