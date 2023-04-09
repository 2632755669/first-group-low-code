/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo, useState, useEffect } from 'react';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import { RouterParse } from '../router/router';
import { SmtHeader } from './Header';
import { SiderMenu } from './components/SiderMenu';
import RoutesNode, { menuRoutes } from '../router';
import './index.less';

const { Content, Sider } = Layout;

const IndexApp = () => {
  const [selectKey, setSelectKey] = useState('site');

  // 路由解析实例
  const newRoutes = useMemo(() => {
    return new RouterParse(menuRoutes);
  }, [menuRoutes]);

  // 生成渲染数据
  const siderMenuData = useMemo(() => {
    return newRoutes.getSiderMenu(selectKey);
  }, [selectKey, newRoutes]);

  const menuItemRender = (item: any, dom: any) => {
    if (item.children) {
      return dom;
    }
    if (item.path) {
      return <Link to={item.path}>{dom}</Link>;
    }
  };

  // 选中路由
  const currentSelectKeys = useMemo(() => {
    const { pathname } = window.location;
    if (pathname === '/') return [];
    const item: any = newRoutes.routeMatch(selectKey, pathname);
    if (!item) return [];
    return [item.key];
  }, [selectKey, newRoutes]);

  // 回填信息
  useEffect(() => {
    const { pathname } = window.location;
    if (pathname === '/') {
      return;
    }
    if (pathname.includes('site')) {
      setSelectKey('site');
    }
    if (pathname.includes('content')) {
      setSelectKey('content');
    }
  }, []);

  // 计算屑，代码待完善
  return (
    <Layout className="page-container">
      <SmtHeader />
      <Layout className="content-container">
        <Sider className="sider-container" collapsed={false}>
          <SiderMenu menuData={siderMenuData} menuItemRender={menuItemRender} selectKeys={currentSelectKeys} />
        </Sider>
        <Content className="content-container">
          <div className="content-container-breadcrumb" />
          <div className="content-container-inner">
            <RoutesNode />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default IndexApp;
