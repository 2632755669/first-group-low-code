/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Menu } from 'antd';
import classNames from 'classnames';
import { flatRouteToMenuItem } from './utils';

interface Props {
  menuData: any[]
  width?: number
  selectKeys: string[]
  menuItemRender: (item: any, defaultItem: any) => React.ReactNode
}

const prefixCls = 'smt';

export const SiderMenu = (props: Props) => {
  const { width = 200, menuData, selectKeys, menuItemRender } = props;
  const cls = classNames(`${prefixCls}-sider-menu`);

  const items = flatRouteToMenuItem(menuData, { menuItemRender });

  return (
    <div className={cls} style={{ width: `${width}px` }}>
      <Menu mode="inline" selectedKeys={selectKeys} items={items as any} />
    </div>
  );
};
