import {
  GlobalOutlined,
  ClusterOutlined,
  FileTextOutlined,
  WalletOutlined
} from '@ant-design/icons';
import SubWeb from '../pages/SiteAdmin/SubWeb';
import WebPage from '../pages/SiteAdmin/WebPage';
import FileManager from '../pages/ContentAdmin/FileManager';

import { useRoutes, type RouteObject, Navigate } from 'react-router-dom';
import { dealRoutes } from './utils';
import type { IRoute } from './types';
import { NotFound } from '../pages/NotFound';

import { type RouterItem } from './router';

/**
 * 站点管理
 */
export const site = [
  {
    name: '网站管理',
    path: '/site',
    key: 'site',
    icon: <GlobalOutlined />,
    children: [
      {
        name: '站点管理',
        path: '/site/subweb',
        component: SubWeb,
        icon: <WalletOutlined />
      },
      {
        name: '页面管理',
        path: '/site/webpage',
        component: WebPage,
        icon: <FileTextOutlined />
      }
    ]
  }
];
/**
 * 内容管理
 */
export const content = [
  {
    name: '内容管理',
    path: '/content',
    key: 'content',
    icon: <ClusterOutlined />,
    children: [
      {
        name: '文件管理',
        icon: <ClusterOutlined />,
        path: '/content/file',
        component: FileManager
      }
    ]
  }
];

const routes: IRoute[] = [
  {
    path: '',
    element: <Navigate to="index" replace />
  },
  {
    path: '/site/subweb',
    element: <SubWeb />
  },
  {
    path: '/site/webpage',
    element: <WebPage />
  },
  {
    path: '/not-found',
    element: <NotFound />
  }
];

dealRoutes(routes);

export const RoutesNode = () => {
  const element = useRoutes(routes as RouteObject[]);
  return element;
};

export default RoutesNode;

// 站点管理的路由
export const menuRoutes: RouterItem[] = [...site, ...content];
